// For Astra DB:  create  a keyspace in the Astra DB dashboard

// For Astra DB: Create a new table
const createTableStatement = new Query();
// Set the CQL statement
createTableStatement.setCql("CREATE TABLE IF NOT EXISTS test.users (firstname text PRIMARY KEY, lastname text);");

await promisifiedClient.executeQuery(
  createTableStatement
);

console.log("created table");
