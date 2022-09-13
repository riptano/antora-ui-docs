curl --request PUT \
  --url 'https://api.astra.datastax.com/v2/organizations/roles/<roleId>' \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer <application_token>' \
  --data '{
  	"name":"<roleName>",
  	"policy": {
  	  "description": "Create and describe keyspaces",
  	  "resources": ["drn:astra:org:<organizationId>"],
  	  "actions": ["db-all-keyspace-create", "db-all-keyspace-describe"],
  	  "effect": "allow"}
    }'
