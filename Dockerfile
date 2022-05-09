FROM --platform=linux/amd64 node:14-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/amd64 node:14-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
# CMD [ "npm", "run", "start:db:reset" ]
# CMD [ "npm", "run", "start:db:init" ]
CMD [ "npm", "run", "start:prod" ]
# CMD npm run start:prod $PORT