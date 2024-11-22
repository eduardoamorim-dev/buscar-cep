# 🔍 Busca de CEP

Um aplicativo simples, desenvolvido com **React** e **Ant Design**, que permite consultar informações detalhadas sobre um CEP usando a API da [BrasilAPI](https://brasilapi.com.br/).

---

## 📜 Sobre o Projeto

Este projeto foi criado para fornecer uma interface elegante e funcional para busca de CEPs, oferecendo informações como rua, bairro, cidade e estado de forma prática e organizada. Ideal para praticar habilidades com React e integrar APIs externas.

---

### 🖼️ Layout do Projeto

O design utiliza o **Ant Design** para criar um visual moderno e harmonioso:  
- **Centralização**: Todos os elementos estão centralizados para melhor experiência do usuário.  
- **Estilo Responsivo**: Adapta-se a diferentes tamanhos de tela.  
- **UX Melhorada**: Campos de entrada compactos, botões intuitivos e mensagens de erro claras.  

---

## 🚀 Como Executar

Siga os passos abaixo para rodar o projeto em sua máquina:

### Pré-requisitos
- Node.js instalado (versão 16+ recomendada)
- Gerenciador de pacotes: `yarn`

### Passos para execução

1. **Clone o repositório**
```bash
  git clone https://github.com/seu-usuario/busca-cep.git
  cd busca-cep
```

2. **Instale as dependências**
  ```bash
    yarn install
  ```

3. **Inicie o servidor de desenvolvimento**
  ```bash
     yarn start
   ```

4. **Acesse o aplicativo**
  Abra seu navegador e acesse: `http://localhost:3000`

---

## 🛠️ Tecnologias Utilizadas

**React:** Biblioteca JavaScript para criação de interfaces de usuário.

**Ant Design:** Framework de componentes UI para React.

**Axios:** Cliente HTTP para consumo de APIs.

**BrasilAPI:** API pública para busca de CEPs e outros serviços.
   
---

## 📖 Funcionalidades

- Busca de informações detalhadas de CEPs.
- Validação básica de entradas com mensagem de erro.
- Resposta amigável ao usuário quando o CEP não é encontrado.

---

## 🌐 API Utilizada

A aplicação consome a API pública da BrasilAPI, especificamente o endpoint de CEPs:

**Endpoint:**
https://brasilapi.com.br/api/cep/v2/{cep}

**Exemplo de Resposta:**

```
  {
    "cep": "01001-000",
    "state": "SP",
    "city": "São Paulo",
    "neighborhood": "Sé",
    "street": "Praça da Sé"
  }
```

---

## 📝 Licença

Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para usá-lo e adaptá-lo conforme necessário.
