###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18 As development
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/src/app

# Copy pnpm-lock.yaml and set ownership to node user and group
COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm fetch --prod

# Copy all source files and set ownership to node user and group
COPY --chown=node:node . .

RUN pnpm install

# Start the application in development mode
CMD ["pnpm", "run", "start:dev"]

USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18 As build
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/src/app

# Copy pnpm-lock.yaml and set ownership to node user and group
COPY --chown=node:node pnpm-lock.yaml ./

# Copy node_modules from development stage for build optimization and set ownership to node user and group
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

# Copy all source files and set ownership to node user and group
COPY --chown=node:node . .

# Build process: Compile TypeScript source code into JavaScript and output to the dist folder
RUN pnpm build

# Set environment variable: Set NODE_ENV to production to only install production dependencies
ENV NODE_ENV production

# Install production dependencies: Install only production dependencies as development dependencies are not needed
RUN pnpm install --prod

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
