# GitHub Pages Setup - Beta Staff Website

Este guia explica como hospedar o website público em GitHub Pages enquanto o repositório principal resta **PRIVADO**.

## 📋 Opções de Configuração

### Opção A: GitHub Pages no Branch `gh-pages` (Recomendado)

Ideal se quiser documentação pública no mesmo repositório privado.

#### Passo 1: Configurar GitHub Pages
```bash
# 1. No GitHub, vá para Settings → Pages
# 2. Source: Deploy from a branch
# 3. Branch: gh-pages
# 4. Folder: / (root)
# 5. Clique em Save
```

#### Passo 2: Publicar Website
```bash
# Crie o branch gh-pages (uma única vez)
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initial gh-pages commit"
git push origin gh-pages

# Volte para main/master
git checkout main
```

#### Passo 3: Manter Website Sincronizado (Manual)
```bash
# Sua estrutura:
# main → código privado (pt_web.py, api/, etc)
# website/ → arquivos públicos (index.html, styles.css)

# Para atualizar o site:
git subtree push --prefix website origin gh-pages
```

#### Passo 4: Automação com GitHub Actions (Opcional)
Crie `.github/workflows/deploy-website.yml`:

```yaml
name: Deploy Website to GitHub Pages

on:
  push:
    branches: [ main ]
    paths:
      - 'website/**'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Pages
      uses: actions/configure-pages@v3
    
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v2
      with:
        path: 'website'
    
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v2
```

Agora toda vez que você faz push na pasta `website/`, o site é atualizado automaticamente!

---

### Opção B: Repositório Separado (Máxima Separ ação)

Se quiser isolamento total: código em repo privada, site em repo pública.

#### Passo 1: Criar Novo Repositório
```bash
# No GitHub, crie: Beta_Staff_v4-website (PÚBLICO)
git clone https://github.com/você/Beta_Staff_v4-website.git
cd Beta_Staff_v4-website
```

#### Passo 2: Copiar Arquivos
```bash
# Copie os arquivos de website/ para a raiz
cp -r ../Beta_Staff_v4/website/* .
git add .
git commit -m "Initial website commit"
git push -u origin main
```

#### Passo 3: Ativar GitHub Pages
```
Settings → Pages
Source: main
Folder: /
```

**Vantagem:** Repositório completamente público, ninguém vê nenhum código
**Desvantagem:** Dois repositórios para manter

---

## 🌐 URL Final

Após configurar, seu site estará em:

**Opção A (gh-pages):**
```
https://seu-usuario.github.io/Beta_Staff_v4/
```

**Opção B (repo separada):**
```
https://seu-usuario.github.io/Beta_Staff_v4-website/
```

ou com domínio customizado (Namecheap, GoDaddy, etc):
```
https://seu-dominio.com
```

---

## 🔐 Segurança

✅ **Repositório privado:** Código nunca é visto
✅ **Website público:** Apenas `website/` é exposto
✅ **Sem credenciais:** Nenhuma senha/API key no website
✅ **SEO amigável:** Google indexa seu site

---

## 📝 Manutenção

Quando você atualizar o website:

```bash
# 1. Edite arquivos em website/
vim website/index.html
vim website/styles.css

# 2. Commit e push
git add website/
git commit -m "Update website description"
git push origin main

# 3. Se usando Opção A:
git subtree push --prefix website origin gh-pages

# 4. Se usando Opção B: 
# Sincronize manualmente com Beta_Staff_v4-website repo
```

---

## 🚀 Próximos Passos

1. **Escolha entre Opção A ou B** (A é mais simples)
2. **Configure GitHub Pages** nas settings
3. **Atualize email de contato** em `website/index.html` (linha ~380)
4. **Teste o site** em `https://seu-usuario.github.io/Beta_Staff_v4/`
5. **Adicione domínio customizado** (opcional)

---

## ❓ Dúvidas Frequentes

**P: Posso ter código privado + website público?**
R: Sim! Essa é exatamente a Opção A. Repositório fica privado, website fica público.

**P: Como aceito colaboradores?**
R: Vá para Settings → Collaborators (no repositório privado) e convide pelo email.

**P: Posso colocar um formulário de contato?**
R: Sim! Use Formspree, Netlify Forms ou outro serviço de backends sem servidor.

**P: Como lanço em produção?**
R: O website já está em produção (*sempre disponível*). O repositório código fica privado.

---

## 📊 Resultado Final

```
GitHub Profile
├── Beta_Staff_v4 (PRIVADO)
│   ├── pt_web.py
│   ├── api/
│   ├── website/
│   └── ... (código confidencial)
│
├── GitHub Pages (PÚBLICO)
│   └── https://seu-usuario.github.io/Beta_Staff_v4/
│       ├── index.html
│       ├── styles.css
│       ├── scripts.js
│       └── Features • Roadmap • Contato
```

Perfeito para manter código seguro e atrair colaboradores! 🎯
