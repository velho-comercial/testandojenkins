docker login -u diegoalvesdev -p 23@!shhFTP
docker rmi frombat
docker build -t frombat --file Dockerfile .
docker tag frombat diegoalvesdev/servicos
docker push diegoalvesdev/servicos

