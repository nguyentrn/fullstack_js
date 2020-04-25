import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import GraphQLJSON from 'graphql-type-json';

import cors from 'cors';
import 'dotenv/config';

import pg from './database';
const app = express();

const typeDefs = gql`
  scalar JSON

  type Item {
    id: String!
    name: String
    rating_1: Int
    rating_2: Int
    rating_3: Int
    rating_4: Int
    rating_5: Int
    rating_6: Int
    rating: JSON
    url: String
    updated_at: String
    thumbnail_img: String
    large_img: String
  }

  type Query {
    items(limit: Int, page: Int, type: String!): [Item]
    item(id: Int, type: String!): Item
  }
`;

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    items: async (_, args, __, ___) => {
      const limit = args.limit || 12;
      const page = args.page || 1;
      const res = await pg(`versus_${args.type}s`)
        .select('*')
        .offset(limit * (page - 1))
        .limit(limit);
      return res;
    },

    item: async (_, args, __, ___) => {
      const res = await pg(`versus_${args.type}s`)
        .select('*')
        .where('id', args.id);
      return res[0];
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
