curl --request PUT \
  --url 'https://api.astra.datastax.com/v2/organizations/clusters/<databaseID>/datacenters/<datacenterID>/private-link' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
      "allowedPrincipals": [
        "bab9a808-8b13-4af6-b712-53efa34c0d46"
      ]
    }'
