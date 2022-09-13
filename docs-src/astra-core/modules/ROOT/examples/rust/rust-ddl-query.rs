// For Astra DB: create a keyspace in the Astra dashboard

// For Astra DB: create a table
let create_table = Query::builder()
    .query(
        "CREATE TABLE IF NOT EXISTS test.users \
            (firstname text, lastname text, PRIMARY KEY (firstname, lastname));",
    )
    .build();
 client.execute_query(create_table).await?;

 println!("created table");
