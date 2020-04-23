import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import pg from './database';
const app = express();

const typeDefs = gql`
  type Cpu {
    id: String!
    name: String
    genereral_info: Int
    performance: Int
    memory: Int
    features: Int
    benchmarks: Int
    url: String
    updated_at: String
    img_url: [String]
  }

  type Query {
    cpus(limit: Int, page: Int): [Cpu]
  }
`;

const resolvers = {
  Query: {
    cpus: async (_, args, __, ___) => {
      const limit = args.limit || 12;
      const res = await pg('versus_cpus')
        .select('*')
        .offset(limit * (args.page - 1))
        .limit(limit);
      return res;
    },
  },
};
// Apollo Server Middleware
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphql' });

//Express Middleware
app.use(cors());

//
app.get('/', (req, res) => res.send('!'));
app.get('/getCpus', async (req, res) => {
  try {
    const data = await pg('luxstay_hotels').select('*').limit(50);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
  ),
);
