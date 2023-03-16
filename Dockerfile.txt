docker login -u diegoalvesdev -p 23@!shhFTP
docker rmi frombat
docker build -t frombat --file Dockerfile .
docker tag frombat diegoalvesdev/servicos
docker push diegoalvesdev/servicos
start C:\\putty\\putty.exe -ssh 134.122.114.50 -l root -pw 23@!shhFTP -m substituir_imagem.txt


