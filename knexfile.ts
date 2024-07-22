import knexConfig from './src/config/knex';

export default {
  development: {
    client: 'mysql2',
    connection: knexConfig.connection 
  }
};
