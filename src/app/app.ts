// Importa o "Component", q transforma esta classe numa peça da pág
import { Component } from '@angular/core';

// @Component diz ao Angular: "esta classe controla um pedaço do st"
@Component({
  selector: 'app-root', // nome da "etiqueta" usada no index.html: <app-root>
  templateUrl: './app.html', // ficheiro c/ o HTML da pág
  styleUrl: './app.css', // ficheiro c/ as cores e o estilo
})
export class App {
  // ===== COMPETÊNCIAS =====
  // 1 lista de grupos. Cada grupo tem 1 título e 1 lista de coisas q aprendi.
  // "protected readonly" = o HTML pode ler, mas ninguém pode trocar a lista.
  protected readonly competencias = [
    {
      titulo: 'Front-end',
      itens: ['HTML5', 'CSS3', 'JavaScript', 'Design responsivo', 'Angular (em estudo)'],
    },
    {
      titulo: 'JavaScript na prática',
      itens: [
        'Listas e objetos',
        'Criar elementos com JavaScript',
        'setInterval e setTimeout',
        'localStorage',
        'Encontrar erros no Console',
      ],
    },
    {
      titulo: 'Dados',
      itens: ['SQL', 'MySQL', 'Microsoft Access'],
    },
    {
      titulo: 'Ferramentas',
      itens: ['Git', 'GitHub', 'GitHub Pages', 'Terminal', 'Markdown', 'VS Code'],
    },
    {
      titulo: 'Pessoais',
      itens: ['Comunicação', 'Didática', 'Escrita clara', 'Paciência', 'Trabalho em equipa'],
    },
  ];

  // ===== PROJETOS =====
  // Cada projeto tem nome, descrição, tecnologias, 1 link e o texto do btn.
  protected readonly projetos = [
    {
      nome: 'Jogo das Letras',
      emoji: '🐛',
      descricao:
        'Jogo educativo para crianças que estão a aprender as letras. A criança vê um animal e escolhe a letra com que o nome dele começa. Tem tempo, pontuação e ranking.',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      link: 'https://ludnice11-lang.github.io/projetojogo/',
      textoBotao: 'Jogar agora',
    },
    {
      nome: 'Bebê Livre',
      emoji: '👶',
      descricao:
        'Site sobre o desenvolvimento do bebé dos 0 aos 3 anos, com base na abordagem Pikler. Layout e animações em CSS e botão de voltar ao topo em JavaScript.',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://ludnice11-lang.github.io/site-bebe-livre/',
      textoBotao: 'Ver o site',
    },
    {
      nome: 'Guia de Códigos',
      emoji: '📚',
      descricao:
        'O meu caderno de estudos: comandos do terminal, Git, Markdown e atalhos do VS Code, explicados de forma simples.',
      tecnologias: ['Markdown', 'Git', 'Terminal'],
      link: 'https://github.com/ludnice11-lang/guia-de-codigos',
      textoBotao: 'Ver no GitHub',
    },
  ];

  // ===== LIVROS PUBLICADOS =====
  protected readonly livros = [
    { titulo: 'Cabelo de Sophia', ano: 2019, editora: 'Prazer de Ler (Brasil)' },
    { titulo: 'Mistério na Casa de Banho', ano: 2024, editora: 'Meia Longa (Portugal)' },
    {
      titulo: 'Colorida — coletânea em homenagem a Fernando Pessoa',
      ano: 2025,
      editora: 'Cordel d’Prata (Portugal)',
    },
  ];

  // Guarda o ano atual, p/ mostrar no rodapé (ex.: © 2026)
  protected readonly ano = new Date().getFullYear();
}
