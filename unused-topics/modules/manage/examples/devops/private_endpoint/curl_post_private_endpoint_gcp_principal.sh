curl --request POST \
  --url 'https://api.astra.datastax.com/v2/organizations/clusters/<databaseID>/datacenters/<datacenterID>/private-link' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
      "allowedPrincipals": [
        "valiant-ocean-258751"
      ]
    }'
