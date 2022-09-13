// Create the gRPC client
// For Astra DB: passing the credentials created above
const stargateClient = new StargateClient(astra_uri, credentials);

console.log("made client");

// Create a promisified version of the client, so we don't need to use callbacks
const promisifiedClient = promisifyStargateClient(stargateClient);

console.log("promisified client")
