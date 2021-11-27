
### Agora a prática

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

**Exercício** :

Vamos usar uma imagem disponível no DockerHub conhecida como "cowsay"  _(Uma vaca falante no terminal 🐮!)_ !

A ideia é deixarmos a mensagem para o  _cowsay_ parametrizável, dessa forma, conseguiremos executar o comando:

Copiar

```bash
    docker container run cowsay Muuuuuuhhh
```

E ter a seguinte saída no terminal:

Copiar

```bash
____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
```

Para isso:

1.  Crie um  _Dockerfile_ utilizando a imagem  `chuanwen/cowsay`  .
2.  Agora defina um  `ENTRYPOINT`  para a execução do comando.

-   _Lembre-se que com ele, diferente do  `CMD`  o comando não poderá ser sobrescrito com o  `docker run`  , porém, conseguiremos passar parâmetros ao binário, exploraremos esse recurso para poder passar a mensagem._

3.  Utilize o  `CMD`  para definir uma mensagem padrão.
4.  Gere uma  `build`  e execute um container baseado em sua imagem sem passar nenhum comando.
5.  Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção  `-l`  para listar outros personagens disponíveis e então executar algo como  `docker container run cowsay -f dragon-and-cow "VQM TRYBE"`  , para exibir um dragão junto com a vaquinha.

----------