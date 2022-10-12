const express = require("express");

const server = express();

server.use(express.json());

const livros = [
  {
    1: {
      Nome: "O Dilema da Inovação",
      Autor: "Clayton M. Christensen",
      Descrição:
        "Dificuldade que as grandes Empresas tem de acompanhar o mercado",
      Avaliação: "3",
      Ações: "Atualizar Excluir",
    },
    2: {
      Nome: "Os Inovadores",
      Autor: "Isaacson Walter",
      Descrição: "Entender melhor o processo de inovação.",
      Avaliação: "5",
      Ações: "Atualizar Excluir",
    },
    3: {
      Nome: "A Quarta Revolução Industrial",
      Autor: "Klaus Schwab",
      Descrição: "Novas tecnologias e o mundo digital.",
      Avaliação: "2",
      Ações: "Atualizar Excluir",
    },
    4: {
      Nome: "Transformação Digital",
      Autor: "David L. Rogers",
      Descrição: "Adaptando-se a era digital.",
      Avaliação: "1",
      Ações: "Atualizar Excluir",
    },
    5: {
      Nome: "Avalie o que importa",
      Autor: "John Doerr",
      Descrição: "Sistema de objetivos e resultados-chaves(OKRs).",
      Avaliação: "4",
      Ações: "Atualizar Excluir",
    },
  },
];

//Retorna o livro
server.get("/livros/:id", (req, res) => {
  const { id } = req.params;

  return res.json(livros[id]);
});

//Retornar todos os livros
server.get("/livros", (req, res) => {
  return res.json(livros);
});

//criar um novo livro
server.post("/livro", (req, res) => {
  const body = req.body;
  livros.push(body);

  return res.json(livros);
});

//Atualizar um livro
server.put("/livros", (req, res) => {
  const body = req.body;
  livros.push(body);

  return res.json(livros);
});

//Deletar um livro
server.delete("/livros/:id", (req, res) => {
  const { id } = req.params;

  livros.splice(id, 1);

  return res.json({ message: "O livro foi deletado! " });
});

server.listen(3000);
console.log("Servidor iniciado na porta 3000: http://localhost:3000");
