Example with POST request payload:

curl --request POST \
  --url 'https://api.astra.datastax.com/v2/databases/$DB_ID/telemetry/metrics' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer AstraCS:JwIfwRYLTlbFfeMrlqhaZcha:1b152ed223d3a6e4e61a999999999ef64ecec800e97d72669e4cEXAMPLE9' \
  --include \
  --verbose \
  --data '{ 
  "aws": { 
    "access_key": "AKIAIOSFODNN7EXAMPLE", 
    "secret_key": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY", 
    "region": "us-east-1" 
  } 
}'
