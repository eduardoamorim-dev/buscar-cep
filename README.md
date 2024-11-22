# 🔍 Busca de CNPJ

Um aplicativo simples, desenvolvido com **PHP** e **cURL**, que permite consultar informações detalhadas sobre um CNPJ usando a API da [BrasilAPI](https://brasilapi.com.br/).

---

## 📜 Sobre o Projeto

Este projeto foi criado para fornecer uma interface simples e funcional para consulta de CNPJs, oferecendo informações como nome fantasia, razão social, município e atividade econômica de forma organizada. Ideal para praticar integração com APIs externas e manipulação de dados em PHP.

---

### 🖼️ Layout do Projeto

O design utiliza o **Bootstrap** para criar um visual moderno e funcional:  
- **Centralização**: Todos os elementos estão centralizados para melhor experiência do usuário.  
- **Estilo Responsivo**: Adapta-se a diferentes tamanhos de tela.  
- **UX Melhorada**: Campos de entrada compactos, botões intuitivos e mensagens de erro claras.

---

## 🚀 Como Executar

Siga os passos abaixo para rodar o projeto em sua máquina:

### Pré-requisitos
- Servidor local (como **XAMPP** ou **MAMP**) ou servidor PHP.
- **cURL** habilitado no PHP.

### Passos para execução

1. **Clone o repositório**
```bash
  git clone https://github.com/seu-usuario/busca-cnpj.git
  cd busca-cnpj

```

2. **Suba o servidor local**

    - Se estiver usando XAMPP ou MAMP, basta colocar o diretório busca-cnpj na pasta de htdocs ou www do seu servidor local.

3. **Acesse o aplicativo**

    - Abra seu navegador e acesse: `http://localhost/busca-cnpj/index.php`

---

## 🛠️ Tecnologias Utilizadas

**PHP:** Linguagem de programação server-side para processamento de dados e requisições HTTP.

**cURL:** Biblioteca do PHP para realizar requisições HTTP e consumir APIs.

**Bootstrap:** Framework de CSS para criação de layouts responsivos e modernos.

**BrasilAPI:** API pública para consulta de informações de CNPJ e outros serviços.
   
---

## 📖 Funcionalidades

  - Consulta de informações detalhadas sobre CNPJs.
  - Validação básica de entradas com mensagens de erro.
  - Exibição clara de informações como nome fantasia, razão social, município, e CNAE.

---

## 🌐 API Utilizada

A aplicação consome a API pública da BrasilAPI, especificamente o endpoint de CNPJ:

**Endpoint:**
https://brasilapi.com.br/api/cnpj/v1/{cnpj}

**Exemplo de Resposta:**

```
  {
    "cnpj": "00000000000191",
    "nome_fantasia": "Nome Fantasia Exemplo",
    "razao_social": "Razão Social Exemplo",
    "uf": "SP",
    "municipio": "São Paulo",
    "cnae_fiscal_descricao": "Comércio Varejista"
  }
```


---

## 📝 Licença

Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para usá-lo e adaptá-lo conforme necessário.
