# Desafio 7 - Escola DNC 🧠

Projeto desenvolvido durante a  Formação em Tecnologia da Escola DNC.


### Instalação

##### Clone o repositório:
```sh
$ git clone https://github.com/AirtonOliveiraS/ApiTypeScript_WithTests.git
```

##### Acesse a pasta :
```sh
$ cd ApiTypeScript_WithTests
```

---

### Banco de Dados
##### Crie o banco de dados ecommerce MySQL :
```mysql
CREATE DATABASE users;

```

##### Crieas tabelas a seguir:

```mysql
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `profissao` varchar(255) DEFAULT NULL,
  `idade` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) 


```

##### Instale as dependências:
```sh
$ npm i
```

##### Inicie o projeto:
```sh
$ npm test

### Testes

![image](https://github.com/AirtonOliveiraS/ApiTypeScript_WithTests/tree/main/public/image.png)

---

















