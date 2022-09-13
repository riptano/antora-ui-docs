curl --request POST \
  --url 'https://api.astra.datastax.com/v2/kms' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
  "orgId": "<organization-id>",
  "<cloud-provider>": {
    "keyID": "String - Resource name of the key",
    "region": "String - Region in which the key exists"
  }
}'
