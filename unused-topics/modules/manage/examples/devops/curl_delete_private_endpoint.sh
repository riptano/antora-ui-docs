curl --request DELETE \
  --url 'https://api.astra.datastax.com/v2/organizations/clusters/<databaseID>/datacenters/<datacenterID>/endpoints/<endpointID>' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>'
