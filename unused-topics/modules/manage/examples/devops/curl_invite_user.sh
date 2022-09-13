curl --request PUT \
 --url 'https://api.astra.datastax.com/v2/organizations/users' \
 --header 'Accept: application/json' \
 --header 'Authorization: Bearer <application_token>' \
 --data '{
     "email":"<userEmail>",
     "orgID":"<organizationId>",
     "roles": ["<roleId1>", "<roleId2>", "<roleId3>"]
   }'
