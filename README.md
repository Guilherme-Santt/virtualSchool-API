Esta é uma API RESTful para gerenciamento de cursos on-line, construída com Node.js, Fastify e PostgreSQL.

🚀 Especificação Técnica

Esta aplicação foi desenvolvida e arquitetada utilizando o seguinte stack de tecnologias e padrões:
1. Stack Principal

    Node.js (Versão: [v18.19.1]): Ambiente de execução.

    Fastify: Framework web de alta performance e baixo overhead.

    SQL (PostgreSQL): Banco de dados relacional robusto.

2. Arquitetura e Estrutura

    Contêineres (Docker): A aplicação e o banco de dados são conteinerizados para garantir um ambiente de execução consistente (desenvolvimento e produção).

    Estrutura de Rotas: Utilização do sistema de plugins do Fastify para organizar as rotas por recurso/domínio.

    Validação: Utilização de JSON Schema (padrão Fastify) para validação de payloads e parâmetros, garantindo a integridade dos dados.
