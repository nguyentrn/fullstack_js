import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import typeDefs from './schemas';
import resolvers from './resolvers';
import db from './database';

const app = express();

// Apollo Server Middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    return { db };
  },
  introspection: true,
  playground: true,
});
server.applyMiddleware({ app, path: '/graphql' });

//Express Middleware
app.use(cors());

app.get('/test', async (req, res) => {
  try {
    res.send('App chay');
  } catch (err) {
    console.log(err);
  }
});

app.use('/react', express.static('public/build'));

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
  ),
);
