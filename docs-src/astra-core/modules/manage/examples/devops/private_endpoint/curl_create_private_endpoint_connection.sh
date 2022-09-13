curl --request POST \
  --url 'https://api.astra.datastax.com/v2/organizations/clusters/<databaseID>/datacenters/<datacenterID>/endpoints' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
      "endpointID": "vpce-svc-1148ea04af491da11",
      "description": "project-desc-dev-app"
    }'
