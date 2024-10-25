# Aplicação Web Fullstack de Livraria

## Implementação e Inicialização

### Executando o Código com IDEs

Este projeto está praticamente pronto para ser executado em máquinas locais; no entanto, existem vários
passos necessários para executar tanto o frontend quanto o backend sem erros.

Abaixo estão as ações necessárias com breves descrições.

#### Inicialização da API REST do Backend

* Crie um banco de dados PostgreSQL local na sua máquina, seja executando um contêiner Docker com
  a imagem oficial do Postgres ou criando o banco de dados via pgAdmin 4;

* Abra a pasta `BookStore_Backend` na sua IDE preferida;

* Certifique-se de que os valores `spring.datasource.url`, `spring.datasource.username` e `spring.datasource.password`
  correspondem aos parâmetros do banco de dados criado anteriormente;

* Insira os valores faltantes para as variáveis `jwt_secret` e `stripe.key.secret`. O projeto irá iniciar e funcionar
  sem as chaves da Stripe, mas a funcionalidade de pagamento não funcionará corretamente. O segredo JWT deve ter pelo menos
  256 bits; caso contrário, você encontrará erros ao tentar acessar endpoints protegidos.
  * O segredo JWT pode ser qualquer string de 256 bits ou uma string codificada de 256 bits à sua escolha;
  * A chave secreta da Stripe pode ser obtida na sua conta Stripe;

#### Inicialização da Aplicação Cliente (Frontend)

* Abra a pasta `BookStore_Frontend` na sua IDE preferida;

* Abra o arquivo `.env` e substitua o valor da variável `VITE_STRIPE_PUBLIC_KEY` pela sua chave pública da Stripe, que pode ser
  obtida na sua conta Stripe;

* Abra um novo terminal ou janela de linha de comando para esta pasta e execute o comando `npm install` para baixar e instalar
  todas as dependências do projeto. Esse processo pode demorar um pouco;

* Assim que todas as dependências estiverem instaladas, execute o comando `npm run dev`. Isso deverá iniciar a aplicação frontend localmente.

**Credenciais de Administrador:**

* **Login:** admin@email.com
* **Senha:** adminpassword