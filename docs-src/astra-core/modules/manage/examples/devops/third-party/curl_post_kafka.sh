curl --request POST \
  --url 'https://api.astra.datastax.com/v2/databases/$DB_ID/telemetry/metrics' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --include \
  --data '{
      "kafka": {
          "bootstrap_servers": [
              "kafka-0.yourdomain.com:9092"
          ],
          "topic": "astra_metrics_events",
          "sasl_mechanism": "PLAIN",
          "sasl_username": "kafkauser",
          "sasl_password": "kafkapassword",
          "security_protocol": "SASL_PLAINTEXT"
      }
    }'

Example with POST request payload:

curl --request POST \
  --url 'https://api.astra.datastax.com/v2/databases/$DB_ID/telemetry/metrics' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --include \
  --data '{
          "kafka": {
            "bootstrap_servers": [
              "pkc-9999e.us-east-1.aws.confluent.cloud:9092"
          ],
          "topic": "astra_metrics_events",
          "sasl_mechanism": "PLAIN",
          "sasl_username": "9AAAAALPRC9AAAAA",
          "sasl_password": "viAAr/geQxxacrAAmydHb7wz6DRu6mL9W9999juQcS1s++pECM99mnW+3Gs06xDd",
          "security_protocol": "SASL_PLAINTEXT"
  }
}'
