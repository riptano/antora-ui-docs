curl --request DELETE \
  --url 'https://api.astra.datastax.com/v2/databases/<databaseID>/datacenters/<datacenterID>/terminate' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>'
