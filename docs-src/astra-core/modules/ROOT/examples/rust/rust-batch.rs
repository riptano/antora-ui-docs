// For Astra DB: INSERT two rows/records
//  Two queries will be run in a batch statement
let batch = Batch::builder()
    //.keyspace("test")                   // set the keyspace the query applies to
    .query("INSERT INTO test.users (firstname, lastname) VALUES ('Lorina', 'Poland');")
    .query("INSERT INTO test.users (firstname, lastname) VALUES ('Doug', 'Wettlaufer');")
    .build();
client.execute_batch(batch).await?;

println!("insert data");
