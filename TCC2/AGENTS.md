# Orientações para revisão do TCC2

## Fontes do trabalho

- Texto principal: `LaTex/TCC.tex` e capítulos incluídos.
- Implementação de referência: `D:/UVV/projetos/GranaAI`. Consultar seu `AGENTS.md`, `SPEC.md` e, principalmente, o código pertinente antes de descrever funcionalidades.
- Mapa de evidências: `docs/base-projeto-granaai.md`.
- Pesquisa exploratória: `D:/UVV/projetos/TCC-1/Entrevista - TCC.csv/Entrevista - TCC.csv`.
- Recorte e contagens: `docs/pesquisa-exploratoria.md`.

## Critérios para os próximos textos

1. A pesquisa foi anterior ao desenvolvimento do GranaAI atual. O usuário informou que não houve pesquisa posterior nem avaliação com usuários da aplicação atual.
2. O CSV inspecionado contém 36 registros. O recorte original utilizado no TCC é de 35 respostas, entre 29/04 e 06/05/2026. A resposta de 03/10/2026 fica fora desse recorte por critério temporal, explicitado no texto.
3. Usar a unidade resposta: o arquivo não comprova participantes únicos nem contém caracterização sociodemográfica. Não inventar recrutamento, consentimento, idades, ocupações ou distribuição demográfica.
4. Separar funcionalidades presentes no código, testes existentes, resultados de execução e avaliações futuras. Não transformar um protocolo em resultado realizado.
5. O backend financeiro atual é Python/FastAPI. O n8n foi descartado. Node.js participa das ferramentas do frontend e do ecossistema Evolution.
6. Conferir qualquer afirmação sobre autenticação, datas, reentrega de mensagens ou precisão da IA no código e em evidências de teste. Não alegar eficácia financeira, conformidade legal ou usabilidade comprovada sem avaliação apropriada.
7. Não alterar o projeto GranaAI, serviços ou bancos como consequência automática de uma tarefa de redação. A consulta ao projeto é somente de leitura, salvo autorização explícita para implementação.
8. Não copiar respostas individuais, identificadores, dados financeiros reais ou segredos para arquivos versionados. Preferir resultados agregados e exemplos sintéticos identificados.
9. Exibir somente referências efetivamente citadas. Preservar entradas não utilizadas no `.bib` para consulta, sem reinserir `\nocite{*}`. Usar o estilo `abntex2-alf` configurado no documento.
10. Ao finalizar uma revisão, compilar com LaTeX/BibTeX, verificar o texto extraído do PDF e conferir citações, referências cruzadas e tabelas. Não declarar o TCC academicamente concluído enquanto as avaliações previstas estiverem pendentes.
