// Set the Astra DB connect information
// Replace with information from the Astra DB dashboard
let astra_uri = "https://$ASTRA_CLUSTER_ID-$ASTRA_REGION.apps.astra.datastax.com/stargate";
let bearer_token = "AstraCS:xxxxx";

// For Astra DB: create a client
let mut client = StargateClient::builder()

// For Astra DB, set connect information:
// .uri(astra_uri)?
// .auth_token(AuthToken::from_str(bearer_token)?)
.tls(Some(client::default_tls_config()?))   // optional

.connect()
.await?;

println!("created client {:?}", client);
