const {startServer} =require ("./server.js");
const {typeDefs} =require ( "./resources/graphql/typeDefs");
const {resolvers} =require( "./resources/graphql/resolvers");

startServer({ typeDefs, resolvers});