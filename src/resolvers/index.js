import GraphQLJSON from 'graphql-type-json';

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    items: async (_, args, { db }, ___) => {
      const limit = args.limit || 12;
      const page = args.page || 1;
      const items = await db(`versus_${args.type}s`)
        .select('*')
        .orderBy(`rating_${args.sortBy}`, 'desc')
        .offset(limit * (page - 1))
        .limit(limit);
      return items.map((i) => ({ ...i, type: args.type }));
    },

    item: async (_, { type, id }, { db }, ___) => {
      const res = await db(`versus_${type}s`)
        .select('*')
        .where('id', id);
      return { ...res[0], type };
    },

    summary: async (_, args, { db }, ___) => {
      const count = await db(`versus_${args.type}s`).count('*');
      return { count: parseInt(count[0].count) };
    },

    itemPropCategories: async (_, { type }, { db }, ___) => {
      const prop = await db(`versus_${type}s`)
        .select('rating')
        .limit(1);
      return Object.keys(prop[0].rating);
    },
  },

  Item: {
    properties: async ({ type, id }, _, { db }, ___) => {
      const properties = await db(`versus_${type}s_properties_values`)
        .select([
          'owner',
          'name',
          'value',
          'kind',
          'unit',
          'display_name',
          'description',
          'category',
          'min',
          'max',
          'avg',
          'percent_no',
          'votes',
          'wilsons',
        ])
        .where('owner', id)
        .join(
          `versus_${type}s_properties_names`,
          `versus_${type}s_properties_values.property`,
          `versus_${type}s_properties_names.name`,
        );
      return properties;
    },
  },
};

export default resolvers;
