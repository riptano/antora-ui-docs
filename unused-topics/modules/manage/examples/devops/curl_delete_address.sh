curl --request DELETE \
  --url 'https://api.astra.datastax.com/v2/databases/<databaseId>/access-list' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
      "addresses": [
          {
            "address": "125.187.17.0/24"
          }
        ]
    }'
