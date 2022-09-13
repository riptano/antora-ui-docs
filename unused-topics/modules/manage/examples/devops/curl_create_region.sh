curl --request POST \
  --url 'https://api.astra.datastax.com/v2/databases/<databaseID>/datacenters' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
      "tier": "Serverless",
      "cloudProvider": "<cloudProvider>",
      "region": "<region>",
    }'
