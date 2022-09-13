curl --request POST \
  --url 'https://api.astra.datastax.com/v2/databases/$DB_ID/metrics-exporter-config' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
	"prom_endpoint": null,
	"prom_password": null,
	"prom_strategy": null,
	"prom_token": null,
	"prom_user": null 
}'
