const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const gadgetGraphQLType = require("./gadgetType");
const Gadget = require("../models/gadget");
const Mutations = require("./mutations");

const RootQuery = new GraphQLObjectType({
  name: "Get",
  fields: {
    id: {
      type: gadgetGraphQLType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Gadget.findById(args.id);
      }
    },
    all: {
      type: GraphQLList(gadgetGraphQLType),
       resolve(parent) {
        return Gadget.find();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
