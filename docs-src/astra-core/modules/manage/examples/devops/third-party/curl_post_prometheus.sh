curl --request POST \
  --url 'https://api.astra.datastax.com/v2/databases/$DB_ID/telemetry/metrics' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --include \
  --data '{
           "prometheus_remote": {
             "endpoint": "Enter a full HTTP or HTTPS adddress and path for prometheus endpoint",
             "auth_strategy": "bearer or basic",
             "token": "If auth_strategy bearer, enter Prom Remote Write auth token",
             "user": "If auth_strategy basic, enter Prom username",
             "password": "If auth_strategy basic, enter Prom password"
            }
          }'

Examples with POST request payload:

curl --request POST \
  --url 'https://api.astra.datastax.com/v2/databases/$DB_ID/telemetry/metrics' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --include \
  --data '{
           "prometheus_remote": {
             "endpoint": "https://prometheus.example.com/api/prom/push",
             "auth_strategy": "bearer",
             "token": "lSAYp9oLtdAa9ajasoNNS999"
            }
          }'

Or:

curl --request POST \
  --url 'https://api.astra.datastax.com/v2/databases/$DB_ID/telemetry/metrics' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --include \
  --data '{
           "prometheus_remote": {
             "endpoint": "https://prometheus.example.com/api/prom/push",
             "auth_strategy": "basic",
             "user": "myPromUsername",
             "password": "myPromPassword"
            }
          }'
