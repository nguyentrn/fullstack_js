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
});
server.applyMiddleware({ app, path: '/graphql' });

//Express Middleware
app.use(cors());

//
// app.get('/', (req, res) => res.send('!'));
app.get('/getCpus', async (req, res) => {
  try {
    const data = await pg('luxstay_hotels').select('*').limit(50);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.use('/', express.static('public/build'));

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
  ),
);
