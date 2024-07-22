


interface KnexConfig {
  client: string;
  connection: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
}

const knexConfig: KnexConfig  = {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port:  3306,
      user:'airton',
      password: 'airton',
      database:  'db'
    },
  };

export default knexConfig