#!/usr/bin/env bash

set -e
set -u
set -o pipefail

# more bash-friendly output for jq
JQ="jq --raw-output --exit-status"

deploy_image() {

    eval "$(aws ecr get-login --region us-east-1)"
    docker tag $IMAGE_NAME:$CIRCLE_SHA1 674110226179.dkr.ecr.us-east-1.amazonaws.com/$IMAGE_NAME:$CIRCLE_SHA1
    docker push 674110226179.dkr.ecr.us-east-1.amazonaws.com/$IMAGE_NAME:$CIRCLE_SHA1
}

# reads $CIRCLE_SHA1, $host_port
# sets $task_def
make_task_def() {

    task_template='[
      {
        "volumesFrom": [],
        "memory": 300,
        "extraHosts": null,
        "dnsServers": null,
        "disableNetworking": null,
        "dnsSearchDomains": null,
        "portMappings": [
          {
            "hostPort": %s,
            "containerPort": 8081,
            "protocol": "tcp"
          }
        ],
        "hostname": null,
        "essential": true,
        "entryPoint": [],
        "mountPoints": [],
        "name": "calcium-staging",
        "ulimits": null,
        "dockerSecurityOptions": null,
        "environment": [],
        "links": [],
        "workingDirectory": null,
        "readonlyRootFilesystem": null,
        "image": "674110226179.dkr.ecr.us-east-1.amazonaws.com/calcium/website:%s",
        "command": [],
        "user": null,
        "dockerLabels": null,
        "logConfiguration": null,
        "cpu": 10,
        "privileged": null
      }
    ]'

    task_def=$(printf "$task_template" $host_port $CIRCLE_SHA1)

}

# reads $family
# sets $revision
register_definition() {

    if revision=$(aws ecs register-task-definition --container-definitions "$task_def" --family $family | $JQ '.taskDefinition.taskDefinitionArn'); then
        echo "Revision: $revision"
    else
        echo "Failed to register task definition"
        return 1
    fi

}

deploy_cluster() {

    host_port=80
    family="Calcium"

    make_task_def
    register_definition
    if [[ $(aws ecs update-service --cluster calcium-staging --service calcium-staging-service --task-definition $revision | \
                   $JQ '.service.taskDefinition') != $revision ]]; then
        echo "Error updating service."
        return 1
    fi

    # wait for older revisions to disappear
    # not really necessary, but nice for demos
    for attempt in {1..30}; do
        if stale=$(aws ecs describe-services --cluster calcium-staging --services calcium-staging-service | \
                       $JQ ".services[0].deployments | .[] | select(.taskDefinition != \"$revision\") | .taskDefinition"); then
            echo "Waiting for stale deployments:"
            echo "$stale"
            sleep 5
        else
            echo "Deployed!"
            return 0
        fi
    done
    echo "Service update took too long."
    return 1
}

deploy_image
deploy_cluster
