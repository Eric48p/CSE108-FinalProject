import requests
import json

url = 'http://localhost:5000/updateRole'
headers = {'Content-Type': 'application/json'}
# Enter the user's email you wish to modify
payload = {'email': 'no@email.com', 'role': 'Admin'}

response = requests.put(url, headers=headers, data=json.dumps(payload))

print(response.status_code)
print(response.text)
