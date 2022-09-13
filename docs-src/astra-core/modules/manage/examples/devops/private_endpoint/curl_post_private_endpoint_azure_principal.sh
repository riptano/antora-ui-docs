curl --request POST \
  --url 'https://api.astra.datastax.com/v2/organizations/clusters/<databaseID>/datacenters/<datacenterID>/private-link' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
      "allowedPrincipals": [
        "9cbbd094-fa31-490f-863d-897d01661681"
      ]
    }'
