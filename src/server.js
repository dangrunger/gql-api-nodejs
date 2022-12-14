const { ApolloServer }= require ( 'apollo-server');
const {database} =require ('./db/models');

function startServer({ typeDefs, resolvers }) {
    const server = new ApolloServer({
        typeDefs, resolvers, context: ({ req }) => ({ 
            database,
            req
        })
    });
    server.listen().then(({ url }) => console.log(`🔥 Server started at ${url}`))}

