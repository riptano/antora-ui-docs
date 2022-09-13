blockingStub.executeQuery(
        QueryOuterClass.Query.newBuilder()
            .setCql("CREATE TABLE IF NOT EXISTS " + ASTRA_KEYSPACE + ".users (firstname text PRIMARY KEY, lastname text);")
            .build());
System.out.println("Table 'users' has been created.");
