FROM node:20-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
RUN apk update && apk upgrade
RUN apk add --no-cache git

# Copy source code
COPY . /usr/src/app
RUN npm install nuxi -g
RUN npm install
RUN nuxi prepare
RUN nuxi build
RUN npm install serve

# Expose port
EXPOSE 3000

# Environment variables
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Run the app
CMD ["npx", "serve", "/usr/src/app/output/server/index.mjs "]
