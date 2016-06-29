
# Pull base image.
FROM node:5.4.1

# Install dependencies
RUN \
  apt-get update && \
  apt-get install -y ruby ruby-dev && \
  apt-get install -y python python-dev python-pip python-virtualenv && \
  npm install forever -g && \
  pip install sympy

# Add application files
COPY . /src

# Expose the 8081 port
EXPOSE 8081

# Start the runtime
WORKDIR "/src"
CMD ["forever", "server/server.js"]
