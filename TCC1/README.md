# TCC LaTeX (ABNTeX2) - Guia Completo para Rodar

Este projeto usa:
- `LaTeX` com classe `abntex2`
- compilação com `latexmk`
- VS Code com extensão **LaTeX Workshop**

Arquivo principal do projeto:
- `TCC.tex`

## 1. Pré-requisitos

Instale os seguintes itens no Windows:

1. **MiKTeX** (distribuição LaTeX)
2. **Perl** (recomendado Strawberry Perl, necessário para `latexmk`)
3. **VS Code**
4. Extensão **LaTeX Workshop** no VS Code

## 2. Finalizar setup inicial do MiKTeX (obrigatório)

Se aparecer erro como:
- `It seems that this is a fresh TeX installation`
- `Acesso negado` em pasta do MiKTeX

faça:

1. Feche o VS Code.
2. Abra **MiKTeX Console** como seu usuário normal.
3. Vá em `Updates` e atualize tudo.
4. Vá em `Tasks` e rode:
   - `Refresh file name database`
   - `Update formats`
5. Confirme que sua conta tem permissão de escrita em:
   - `C:\Users\<seu_usuario>\AppData\Roaming\MiKTeX\`

## 3. Abrir o projeto corretamente

1. No VS Code, use `File > Open Folder...`.
2. Abra exatamente a pasta raiz do projeto:
   - `D:\UVV\projetos\TCC_LUCAS_NATHALIA`
3. Abra o arquivo principal `TCC.tex`.

## 4. Configuração do LaTeX Workshop

Este projeto já possui configuração pronta em:
- `.vscode/settings.json`

Ele já define:
- build com `latexmk`
- build automático ao salvar (`onSave`)
- saída no diretório do projeto

## 5. Compilar o projeto

### Pelo VS Code

1. Abra `TCC.tex`.
2. Rode o build com `Ctrl+Alt+B`.
3. Selecione a receita `latexmk` (se for solicitado).

### Pelo terminal (opcional)

No root do projeto:

```powershell
latexmk -synctex=1 -interaction=nonstopmode -file-line-error -pdf TCC.tex
```

## 6. Preview em tempo real (live preview)

1. Depois de compilar, abra o PDF com `Ctrl+Alt+V`.
2. Mantenha `TCC.tex` aberto e salve (`Ctrl+S`) após alterações.
3. O PDF será atualizado automaticamente.

## 7. Limpar arquivos temporários

Para limpeza dos artefatos de compilação:

- Pelo comando da extensão: `LaTeX Workshop: Clean up auxiliary files`
- Ou via terminal:

```powershell
latexmk -c TCC.tex
```

## 8. Estrutura principal dos arquivos

- `TCC.tex`: arquivo raiz
- `TCC.bib`: bibliografia
- `cap1.tex ... cap6.tex`: capítulos
- `resumos.tex`, `siglas.tex`, etc.: elementos pré/pós-textuais
- `figs/`: imagens

## 9. Problemas comuns e solução

### Erro: `latexmk` não encontrado

- Verifique se MiKTeX está instalado.
- Reinicie o computador/VS Code para atualizar `PATH`.

### Erro: fresh installation do MiKTeX

- Execute o passo 2 deste README (MiKTeX Console).

### Erro de permissão no `AppData\Roaming\MiKTeX`

- Ajuste permissões da pasta para seu usuário local.

### Build não atualiza

1. Rode `Developer: Reload Window` no VS Code.
2. Compile de novo com `Ctrl+Alt+B`.

### Arquivo raiz incorreto

- Sempre abra e compile a partir de `TCC.tex`.

## 10. Git e repositório

Este projeto já está versionado em repositório privado.
Arquivos de build (`.aux`, `.log`, `.pdf`, etc.) estão ignorados no `.gitignore`.

## 11. Fluxo recomendado no dia a dia

1. Abrir pasta do projeto no VS Code.
2. Abrir `TCC.tex`.
3. `Ctrl+Alt+B` (uma vez no início da sessão).
4. Editar e salvar (`Ctrl+S`) para rebuild automático.
5. Acompanhar no preview (`Ctrl+Alt+V`).
