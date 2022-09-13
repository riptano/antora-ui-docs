// Astra DB configuration
const astraURI = "$ASTRA_CLUSTER_ID-$ASTRA_REGION.apps.astra.datastax.com:443"
const bearerToken = "AstraCS:xxxxx"

// Create connection with authentication
// For Astra DB:
config := &tls.Config{
	InsecureSkipVerify: false,
}

conn, err := grpc.Dial(astraURI, grpc.WithTransportCredentials(credentials.NewTLS(config)),
	grpc.WithBlock(),
	grpc.WithPerRPCCredentials(
		auth.NewStaticTokenProvider(bearerToken),
	),
)
