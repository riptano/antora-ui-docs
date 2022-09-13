// For Astra DB: SELECT the data to read from the table
// Select/query some data from the keyspace.table
let query = Query::builder()
    //.keyspace("test")
    .query("SELECT firstname, lastname FROM test.users;")
    .build();

 println!("select executed");
