// For Astra DB: INSERT two rows/records
//  Two queries will be run in a batch statement
batch := &pb.Batch{
  Type: pb.Batch_LOGGED,
  Queries: []*pb.BatchQuery{
    {
      Cql: "INSERT INTO test.users (firstname, lastname) VALUES ('Jane', 'Doe');",
    },
    {
      Cql: "INSERT INTO test.users (firstname, lastname) VALUES ('Serge', 'Provencio');",
    },
  },
}

_, err = stargateClient.ExecuteBatch(batch)
if err != nil {
  fmt.Printf("error creating batch %v", err)
  return
}

fmt.Printf("insert data\n")
