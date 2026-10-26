# TCC — Lucas e Nathalia

- `TCC1/`: trabalho atual preservado como TCC 1.
- `TCC2/`: cópia do TCC 1 para dar continuidade ao TCC 2.

Cada pasta contém `LaTex/`, `prototipo/`, `docs/` e o guia original em `README.md`.

Para editar o texto, abra `TCC1/LaTex/TCC.tex` ou `TCC2/LaTex/TCC.tex`. Para compilar pelo terminal, entre na pasta `LaTex` da versão desejada e execute:

```powershell
latexmk -synctex=1 -interaction=nonstopmode -file-line-error -pdf TCC.tex
```

As configurações compartilhadas do editor e as ferramentas auxiliares ficam na raiz do repositório.
