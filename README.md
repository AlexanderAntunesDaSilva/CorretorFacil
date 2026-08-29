# CorretorFácil

Plataforma web para **corretores de imóveis autônomos** organizarem sua agenda de visitas, imóveis e clientes em um só lugar — sem depender de papel, planilhas ou WhatsApp.

Projeto desenvolvido como MVP (Mínimo Produto Viável) da **Etapa 1** do trabalho acadêmico "Resolvendo problemas na comunidade em que estamos inseridos".

## Problema

Corretores autônomos costumam controlar sua agenda de visitas de forma manual, o que causa sobreposição de compromissos, visitas esquecidas e deslocamentos mal planejados entre imóveis. O CorretorFácil resolve isso com uma ferramenta simples e gratuita, focada apenas no essencial do dia a dia do corretor.

## Funcionalidades do MVP

- **Cadastro de imóveis** — título, tipo, valor, região e descrição.
- **Agenda de visitas** — agendamento por imóvel, cliente, data e horário.
- **Roteiro do dia** — visitas do dia agrupadas por região, para reduzir deslocamento.
- **Ficha de visita** — registro rápido do retorno do cliente após a visita (pensado para uso no celular, em campo).
- **Histórico de clientes** — lista de clientes com o total de visitas e a última interação.

## Tecnologias utilizadas

- HTML5, CSS3 (sem frameworks) e JavaScript puro (vanilla JS).
- 

## Estrutura de pastas

```
CorretorFacil/
├── index.html          # Painel inicial (dashboard)
├── login.html          # Tela de entrada (login simulado)
├── imoveis.html         # Cadastro de imóveis
├── agenda.html          # Agenda de visitas
├── roteiro.html         # Roteiro do dia por região
├── ficha.html           # Ficha de visita
├── clientes.html        # Histórico de clientes
├── css/
│   └── style.css        # Estilos e tokens visuais do projeto
├── js/
│   ├── storage.js        # Camada de dados (localStorage)
│   └── nav.js             # Menu lateral compartilhado entre páginas
└── README.md
```

## Como executar (instruções de instalação)

**Opção 3 — Versão publicada 
O site também está publicado via GitHub Pages e pode ser acessado diretamente pelo link abaixo

https://alexanderantunesdasilva.github.io/CorretorFacil/

## Limitações desta versão (MVP)

- Os dados ficam salvos apenas no navegador utilizado (localStorage), não há sincronização entre dispositivos ou usuários — adequado para demonstração e testes desta etapa.
- Não há autenticação real (o "login" apenas identifica o nome do corretor na sessão local).
- Funcionalidades mais avançadas (integração com portais imobiliários, notificações por WhatsApp, mapa real de roteirização) ficam previstas para versões futuras, após a validação deste MVP com usuários reais.

## Autor

Alexander Antunes da Silva — Curso de Análise e Desenvolvimento de Sistemas, Universidade do Vale do Itajaí.
