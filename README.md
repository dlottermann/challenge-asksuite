
# Descrição do Projeto

Este projeto foi desenvolvido para o desafio técnico da Asksuite, utilizando NodeJs

<br />
## Como iniciar o projeto

### Start API 

Siga os seguintes passos para iniciar API :<br />

-- Clone o repositório no seu diretório de preferência. <br />

```sh
$ git clone https://github.com/dlottermann/challenge-asksuite.git
```

-- Entre no diretorio challenge-asksuite pelo terminal de comando. <br />

```sh
$ cd challenge-asksuite
```

-- Primeiro rode `npm install` or `yarn` para instalar todas as dependências necessárias. <br />

```sh
$ npm install
```

-- Depois de todas as dependencias instaladas, rode o comando `npm start` para inicializar o serviço.

```sh
$ npm start
```


### Executando requisições
As requisições podem ser feitas através de softwares com postman ou insomnia. <br />

-- O endpoint disponibilizado é /buscar pelo método POST

-- A URL final de request rodando localmente deve ficar como ### localhost:3000

-- O body da requeste deve conter dois parâmetros **checkin** e **checkout**


Exemplo de request com formato JSON:
----

```json
{
    "checkin": "02022020",
    "checkout": "09022020"
}
```

Exemplo de retorno com formato JSON:
----

```json
[
    {
        "title": "Standard",
        "price": "R$ 867,14",
        "description": "Ideal para relaxar. Os quartos dispõem de diversos serviços para garantir uma estadia confortável e agradável. Todos os apartamentos Stan... ",
        "pictures": [
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?imageID=189952.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?imageID=152609.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?imageID=189950.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?imageID=152620.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?imageID=152621.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?imageID=189959.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?imageID=152623.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?imageID=152624.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?imageID=152625.jpg"
        ],
        "thumbs": [
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189952.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152609.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189950.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152620.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152621.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189959.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152623.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152624.jpg",
            "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152625.jpg"
        ]
    }
]
```

