# TCC — Lucas e Nathalia

- `TCC1/`: trabalho atual preservado como TCC 1.
- `TCC2/`: cópia do TCC 1 para dar continuidade ao TCC 2.

Cada pasta contém `LaTex/`, `prototipo/`, `docs/` e o guia original em `README.md`.

Para editar o texto, abra `TCC1/LaTex/TCC.tex` ou `TCC2/LaTex/TCC.tex`. Para compilar pelo terminal, entre na pasta `LaTex` da versão desejada e execute:

```powershell
texify --pdf --synctex=1 --tex-option=-interaction=nonstopmode --tex-option=-file-line-error TCC.tex
```

As configurações compartilhadas do editor e as ferramentas auxiliares ficam na raiz do repositório.

A configuração do VS Code usa `texify`, incluído no MiKTeX, e não precisa de Perl. Abra a raiz do repositório no VS Code, abra o `TCC.tex` desejado e compile com `Ctrl+Alt+B`. Se for solicitada uma receita, selecione `texify (MiKTeX, sem Perl)`. Os guias originais dentro de TCC1 e TCC2 descrevem a configuração anterior com `latexmk`, que exige Perl.
