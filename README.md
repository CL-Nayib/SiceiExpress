# SiceiExpress
Un pequeño REST API para correr en docker

## Build del docker file
sudo docker build -t sicei-api .

## Correr imagen en el puerto 3000
sudo docker run -p 3000:3000 --name sicei-container sicei-api
