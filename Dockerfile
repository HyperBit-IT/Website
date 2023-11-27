FROM node:lts-alpine3.18
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
RUN apk update && apk upgrade
RUN apk add --no-cache git

# Copy source code
COPY . /usr/src/app
RUN npm install
RUN nuxt build

# Expose port
EXPOSE 3000

# Environment variables
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Run the app
CMD ["nuxt", "start"]
