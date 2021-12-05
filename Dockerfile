FROM node:14

COPY . .
RUN yarn install

# ENTRYPOINT ["yarn"] CMD ["preview"]
RUN yarn build
CMD yarn preview

EXPOSE 3000
