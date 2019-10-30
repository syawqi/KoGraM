var koa = require("koa");
var app = new koa();

const cors = require('@koa/cors');

const mount = require("koa-mount");
const graphqlHTTP = require("koa-graphql");
const schema = require("./graphql/schema");

const initDB = require("./database/database");

initDB();

app.use(cors());

app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  )
);

app.listen(9000);
