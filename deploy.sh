#! /bin/bash
# deploy.sh

IMAGE_NAME=$1
SHA1=$2
EB_ENVIRONMENT=$3

# Deploy image to Docker Hub
docker push $IMAGE_NAME:$SHA1

# Create a new Elastic Beanstalk version
EB_BUCKET=calcium-deployment
EB_APPLICATION=Calcium
DOCKER_ZIP=$SHA1-Docker.zip

sed "s/<TAG>/$SHA1/" < Dockerrun.aws.json.template > Dockerrun.aws.json

# Create archive to ship
zip $CIRCLE_ARTIFACTS/$DOCKER_ZIP -r Dockerrun.aws.json .ebextensions/

# Create new Elastic Beanstalk version
aws s3 cp .dockercfg s3://$EB_BUCKET/dockercfg
aws s3 cp $CIRCLE_ARTIFACTS/$DOCKER_ZIP s3://$EB_BUCKET/$DOCKER_ZIP
aws elasticbeanstalk create-application-version --application-name $EB_APPLICATION \
  --version-label $SHA1 --source-bundle S3Bucket=$EB_BUCKET,S3Key=$DOCKER_ZIP

# Update Elastic Beanstalk environment to new version
aws elasticbeanstalk update-environment --environment-name $EB_ENVIRONMENT \
    --version-label $SHA1
