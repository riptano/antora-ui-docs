curl --request GET \
  --url 'https://api.astra.datastax.com/v2/organizations/clusters/<databaseID>/datacenters/<datacenterID>/private-link' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>'
