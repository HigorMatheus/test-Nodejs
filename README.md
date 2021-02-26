# test-Nodejs-temperaturaSpotify


instalar as dependencias 
```
yarn 
```
start na arplicação  
```
yarn dev:server
```

gerando a build do projeto 
```
yarn build
```
rota da arplicacao : http://localhost:3333/temp/{latitude}/{longitude}

• Se a temperatura é maior que 32 graus ira retornar string tracks para festa

• Se a temperatura está entre 22 e 32 ira retornar string tracks para pop

• Se está um pouco frio (entre 10 e 22 ira retornar string tracks para rock

• Se está muito frio (abaixo de 10 graus), ira retornar string  tracks de música clássica
