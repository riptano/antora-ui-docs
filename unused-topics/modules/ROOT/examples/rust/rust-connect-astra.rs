use std::error::Error;
use std::str::FromStr;
use std::convert::TryInto;
use stargate_grpc::*;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {

    // Set the Astra DB connect information
    // Replace with information from the Astra DB dashboard

    let astra_uri = "https://$ASTRA_CLUSTER_ID-$ASTRA_REGION.apps.astra.datastax.com/stargate";
    let bearer_token = "AstraCS:xxxxx";

    let mut client = StargateClient::builder()
    .uri(astra_uri)?
    .auth_token(AuthToken::from_str(bearer_token)?)
    .tls(Some(client::default_tls_config()?))   // optional
    .connect()
    .await?;

    println!("{:?}", client);

    let query = Query::builder()
    .query("SELECT firstname, lastname FROM test.users")
    // .bind_name("id", 1000)                      // bind :id to 1000
    .build();

    let response = client.execute_query(query).await?;  // send the query and wait for gRPC response
    let result_set: ResultSet = response.try_into()?;   // convert the response into ResultSet

    for row in result_set.rows {
        let (firstname, lastname): (String, String) = row.try_into()?;
        println!("{} {}", firstname, lastname);
    }

    Ok(())
}
