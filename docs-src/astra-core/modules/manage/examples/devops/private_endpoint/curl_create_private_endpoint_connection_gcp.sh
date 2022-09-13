curl --request POST \
  --url 'https://api.astra.datastax.com/v2/organizations/clusters/<databaseID>/datacenters/<datacenterID>/endpoints' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
      "endpointID": "2755639674399101",
      "description": "project-desc-dev-app"
    }'
