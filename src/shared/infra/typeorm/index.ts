import { Connection, createConnection, getConnectionOptions } from "typeorm";

// interface IOptions {
//   host: string;
// }

// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   newOptions.host = "localhost"; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   createConnection({
//     ...options,
//   });
// });

export default async (host = "localhost"): Promise<Connection> => {
  const connection = await getConnectionOptions();
  return createConnection(
    Object.assign(connection, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host, //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
      database:
        process.env.NODE_ENV === "test" ? "workin" : connection.database,
    })
  );
};
