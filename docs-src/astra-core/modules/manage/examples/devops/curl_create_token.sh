curl --request POST \
 --url 'https://api.astra.datastax.com/v2/clientIdSecrets' \
 --header 'Accept: application/json' \
 --header 'Authorization: Bearer <application_token>' \
 --data '{"roles": ["<roleId>"]}'
