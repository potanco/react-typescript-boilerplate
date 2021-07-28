import { createServer, Model, Registry, Server } from 'miragejs';
import { Assign, ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';

type AppRegistry = Registry<
  { user: typeof mockModels.user },
  {
    /* factories can be defined here */
  }
>;
type AppSchema = Schema<AppRegistry>;

const mockModels = {
  user: Model.extend({
    name: 'John Doe',
  }),
};

const mockFactories = {};

export function makeServer({ environment = 'development' } = {}): Server<
  Registry<
    {
      user: ModelDefinition<
        Assign<
          Record<string, never>,
          {
            name: string;
          }
        >
      >;
    },
    Record<string, never>
  >
> {
  const server = createServer<typeof mockModels, typeof mockFactories>({
    environment,

    models: mockModels,

    seeds(server) {
      server.create('user', { name: 'Bob' });
      server.create('user', { name: 'Alice' });
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', (schema: AppSchema) => {
        return schema.all('user');
      });
    },
  });

  return server;
}
