FROM node:14

COPY . .
RUN yarn install

# ENTRYPOINT ["yarn"] CMD ["preview"]
CMD yarn preview

EXPOSE 3000
