private static final String ASTRA_DB_ID      = "<id>";
private static final String ASTRA_DB_REGION  = "<region>";
private static final String ASTRA_TOKEN      = "<token>";
private static final String ASTRA_KEYSPACE   = "<keyspace>";

public static void main(String[] args)
throws Exception {


    //-------------------------------------
    // 1. Initializing Connectivity
    //-------------------------------------
    ManagedChannel channel = ManagedChannelBuilder
            .forAddress(ASTRA_DB_ID + "-" + ASTRA_DB_REGION + ".apps.astra.datastax.com", 443)
            .useTransportSecurity()
            .build();

    // blocking stub version
    StargateGrpc.StargateBlockingStub blockingStub =
        StargateGrpc.newBlockingStub(channel)
            .withDeadlineAfter(10, TimeUnit.SECONDS)
            .withCallCredentials(new StargateBearerToken(ASTRA_TOKEN));
