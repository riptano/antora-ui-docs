// For Astra DB: create a keyspace in the Astra DB dashboard

// For Astra DB: Create a new table
createTableQuery := &pb.Query{
  Cql: "CREATE TABLE IF NOT EXISTS test.users (firstname text PRIMARY KEY, lastname text);",
}

_, err = stargateClient.ExecuteQuery(createTableQuery)
if err != nil {
  fmt.Printf("error creating table %v", err)
  return
}

fmt.Printf("made table \n")
