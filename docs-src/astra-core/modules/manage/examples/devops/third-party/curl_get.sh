curl --request GET \
  --url 'https://api.astra.datastax.com/v2/databases/$DB_ID/telemetry/metrics' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>'
