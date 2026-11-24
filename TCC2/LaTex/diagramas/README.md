# Diagramas atuais do GranaAI

As figuras 12 e 13 foram refeitas em 24/11/2026 a partir dos arquivos em `D:/UVV/projetos/GranaAI/backend/app/models`.

- `diagrama-caso-de-uso.mmd`: Figura 11, com usuário, Evolution API e Groq API como atores. Mermaid usa `flowchart` para representar a fronteira do sistema, casos de uso arredondados, associações sem setas e inclusões tracejadas com direção explícita. O desenho é uma representação dos casos de uso, não uma sequência de execução. O recorte exclui o painel administrativo e não trata banco ou módulos internos como atores. Groq participa como serviço de apoio, sem impor chamada ao modelo para todas as mensagens.

A Figura 11 recupera as cores do desenho inicial: roxo para operações principais, amarelo para os comportamentos incluídos no registro e azul para acompanhamento, recomendações e avisos. Os atores usam um símbolo de pessoa em SVG incorporado ao `themeCSS` da fonte Mermaid. As ligações `~~~` são invisíveis e servem apenas para organizar as colunas, sem representar relações funcionais.

- `diagrama-de-classe.mmd`: classes de domínio e estado conversacional, com seleção de atributos e os relacionamentos ORM. Não atribui operações de endpoints ou serviços às classes de dados.
- `diagrama-entidade-relacionamento.mmd`: oito tabelas, campos principais, PK, FK, unicidades simples e vínculos opcionais. Versão utilizada no TCC para preservar a legibilidade.
- `diagrama-entidade-relacionamento-completo.mmd`: oito tabelas com todos os campos declarados nos modelos e tipos com comprimento/precisão. Seu PDF detalhado acompanha este arquivo.
- `diagrama-sequencia.mmd`: fonte do fluxo completo, mantida para consulta, com convite para cadastro, registro de despesa, confirmação ou cancelamento antes da gravação e consulta web autenticada. O backend medeia as operações com o banco; o contexto pendente não é uma transação financeira. O recorte pressupõe dados completos e exclui os caminhos de respostas não reconhecidas e o cadastro especial do proprietário.
- `diagrama-sequencia-cadastro.mmd`: Figura 14, referente ao cadastro e à consulta pela plataforma web.
- `diagrama-sequencia-registro.mmd`: Figura 15, referente ao registro financeiro com confirmação ou cancelamento. Os dois diagramas têm legendas, numeração e rótulos independentes. As mensagens pelo WhatsApp utilizam a integração Evolution implementada, ainda que esse transporte não apareça como participante nos recortes simplificados.

A unicidade composta de `category_limits(user_id, slug)` e a associação lógica de categorias estão explicadas no texto do TCC. `transactions.category` não é FK. `conversation_states` usa `phone` como PK e não declara FK para `users`; `system_settings.updated_by` também não declara FK. Os campos de identificação das demais seis tabelas usam UUID.

O tipo `decimal` dos desenhos representa a coluna financeira persistida; não pretende reproduzir a anotação Python `Mapped[float]`. Os campos opcionais entre os atributos do DER compacto estão marcados com `NULL`. A Figura 12 é um recorte de atributos; detalhes de comprimentos e nulabilidade devem ser consultados no DER e nos modelos.

## Renderização

Ferramenta usada: Mermaid CLI 12.2.0, com Chromium. A partir da raiz do TCC2, executar para cada fonte e formato:

```powershell
npx --yes --package @mermaid-js/mermaid-cli@12.2.0 mmdc -i LaTex/diagramas/diagrama-de-classe.mmd -o LaTex/figs/diagrama-de-classe.pdf -p LaTex/diagramas/puppeteer-config.json -b white
npx --yes --package @mermaid-js/mermaid-cli@12.2.0 mmdc -i LaTex/diagramas/diagrama-entidade-relacionamento.mmd -o LaTex/figs/diagrama-entidade-relacionamento.pdf -p LaTex/diagramas/puppeteer-config.json -b white --size 2400
```

Trocar a extensão de saída para `.svg` ou `.png` para regenerar os formatos correspondentes. Para PNG, foi utilizado `--size 2400`. Os PDFs vetoriais são os arquivos incluídos no LaTeX; os PNGs mantêm os nomes antigos para consulta e compatibilidade.

`puppeteer-config.json` aponta para o Chromium já instalado nesta máquina. Em outro computador, ajustar `executablePath` ou omitir `-p` se o navegador padrão do Puppeteer estiver disponível.

As duas figuras usam páginas verticais normais e imagens na posição de leitura, sem rotação de página ou imagem. O tamanho é limitado à largura do texto e a 85% da altura útil, preservando a proporção. Seus rótulos originais foram preservados para manter as referências cruzadas. Os arquivos de fonte e as imagens não contêm dados de usuários nem valores de configuração do serviço.
