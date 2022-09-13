curl --request POST \
  --url 'https://api.astra.datastax.com/v2/organizations/clusters/<databaseID>/datacenters/<datacenterID>/endpoints' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
      "endpointID": "/subscriptions/a51y2a51-f9j4-4ad2-l863-67e5ac6g10m/resourceGroups/lab-resourceGroups/providers/Microsoft.Network/privateEndpoints/dev-poc",
      "description": "project-desc-dev-app"
    }'
