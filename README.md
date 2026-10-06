# Central de Demonstrações & Apresentações

Este projeto serve como hub central e servidor de demonstração para apresentar novos sites e redesigns de alta conversão para clientes prospectados.

## 🚀 Como funciona o projeto

1. **Página Principal (`/index.html`)**:
   - É o seu painel de controle pessoal.
   - Lista todas as demonstrações em cards interativos.
   - Tem botão de **Copiar Link** com 1 clique (para enviar diretamente ao cliente via WhatsApp ou e-mail).
   - Tem simulador mobile integrado para testar o visual antes de enviar.

2. **Pastas de Clientes (`/clientes/[nome-do-cliente]/`)**:
   - Cada cliente tem sua própria pasta e seu próprio `index.html`.
   - **O cliente só vê a página dele**: ao enviar o link `https://suas-demos.vercel.app/clientes/clinica-sorriso-exemplo`, ele abre diretamente a página dele sem interferência de outros sites.
   - Totalmente compatível com a Vercel, rotas limpas e HTTPS automático.

## ➕ Como adicionar um novo cliente pelo Antigravity

Basta pedir no chat do Antigravity:
> *"Antigravity, faça o redesign para o cliente [Nome do Cliente] e adicione na Central de Demonstrações."*

O Antigravity criará a pasta dentro de `/clientes/[nome-do-cliente]/`, colocará a landing page completa e adicionará o card correspondente no painel principal!
