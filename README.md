# AppMobile 📱 - Clone do WhatsApp

Este é um projeto de aplicativo móvel desenvolvido em **React Native** utilizando o ecossistema **Expo**. O objetivo do projeto é recriar a interface do WhatsApp, focando em componentes reutilizáveis, navegação fluida e renderização de listas dinâmicas.

---

## 🚀 Funcionalidades Atuais

*   **Tela de Login:** Interface limpa para autenticação do usuário.
*   **Tela Home (Conversas):** Listagem de chats simulados no estilo WhatsApp utilizando `FlatList`.
*   **Componentes Reutilizáveis:** Organização modular do código para facilitar a manutenção.
*   **Navegação Dinâmica:** Transição suave entre as telas do aplicativo.

---

## 🛠️ Tecnologias Utilizadas

*   [React Native](https://reactnative.dev/)
*   [Expo Go](https://expo.dev/)
*   [React Navigation](https://reactnavigation.org/) (Navegação entre telas)
*   JavaScript (ES6+)

---

## 📦 Como Executar o Projeto

Siga os passos abaixo para rodar o aplicativo na sua máquina local:

### 1. Pré-requisitos
Certifique-se de ter instalado em seu computador:
*   [Node.js](https://nodejs.org/) (versão LTS recomendada)
*   Gerenciador de pacotes `npm` ou `yarn`
*   Aplicativo **Expo Go** instalado no seu celular (Android ou iOS)

### 2. Clonar o Repositório
```bash
git clone [https://github.com/jhonataraibolt/AppMobile.git]
```
```bash
cd AppMobile
```

### 3. Instalar as Dependências
```bash
npm install
```
### 4. Iniciar o Servidor do Expo
```bash
npx expo start --tunnel
```
### 5. Rodar no Celular
* Após iniciar o servidor, um QR Code aparecerá no seu terminal.

*  Abra o aplicativo Expo Go no seu celular.

*  Escaneie o QR Code (no Android, use o próprio app do Expo Go; no iOS, use a câmera nativa do aparelho).

*  Aguarde o JavaScript bundle carregar 100% e pronto!

---

## 📂 Estrutura de Pastas Principal
Plaintext
├── src/  
│   ├── components/      # Componentes visuais reutilizáveis    
│   ├── screens/         # Telas principais (LoginScreen, HomeScreen, etc.)    
│   └── routes/          # Configurações de rotas e navegação  
├── App.js               # Componente raiz do aplicativo  
├── app.json             # Configurações do ecossistema Expo  
└── package.json         # Dependências e scripts do projeto  

---

##  👤 Autor
Desenvolvido por Jhonata Raibolt.
