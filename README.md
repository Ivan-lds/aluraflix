# 🎬 AluraFlix

## 📝 Descrição
AluraFlix é uma plataforma de streaming inspirada na Netflix, desenvolvida com React e Vite. O projeto permite visualizar, cadastrar e gerenciar vídeos organizados por categorias.

## 🚀 Funcionalidades
- Visualização de vídeos por categorias
- Cadastro de novos vídeos
- Criação e gerenciamento de categorias
- Interface responsiva e intuitiva
- Validação de formulários

## 🔧 Como utilizar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
1. Clone este repositório
2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

### Executando o projeto
1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```
2. Em outro terminal, inicie o servidor JSON para simular a API:
```bash
npm run start-db
# ou
yarn start-db
```
3. Acesse o projeto em: http://localhost:3001

### Build para produção
```bash
npm run build
# ou
yarn build
```

## 💻 Tecnologias utilizadas
- React.js
- Vite
- Styled Components
- React Router DOM
- React Hook Form
- JSON Server (para simular API)
- Yup (validação de formulários)

## 📚 Estrutura do projeto
- `/src/components` - Componentes reutilizáveis
- `/src/database` - Dados para o JSON Server
- `/src/hooks` - Custom hooks
- `/src/routes` - Configuração de rotas

## 🌐 Demonstração
Para ver o projeto em funcionamento, execute os comandos de instalação e inicialização mencionados acima.

## 📋 Scripts disponíveis
- `dev` - Inicia o servidor de desenvolvimento na porta 3001
- `build` - Gera a versão de produção
- `preview` - Visualiza a versão de produção
- `start-db` - Inicia o JSON Server na porta 3002
- `lint` - Executa o linter para verificar o código

## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

---

Desenvolvido como parte dos estudos na plataforma Alura 🎓
