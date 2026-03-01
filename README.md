# 🌐 Website Público - Colab Developer

Este diretório contém o **website público** da plataforma Colab Developer, hospedado em GitHub Pages.

## 📁 Estrutura

```
STAFF-Colab
├── .gitignore                  # gitignore padrão
├── favicon.svg                 # favicons
├── index.html                  # Landing page principal
├── legal.html                  # Landing page secundária
├── styles.css                  # Estilos responsivos
├── scripts.js                  # JavaScript interativo
└── README.md                   # Este arquivo
```

## 🎯 Propósito

O website serve como **porta de entrada pública** para o projeto:

- ✅ Mostra features e capacidades
- ✅ Display do roadmap (Fases 1-8)
- ✅ Tutorial das tecnologias usadas
- ✅ CTA para colaboradores (Contact)
- ❌ Nenhuma credencial ou código sensível
- ❌ Nenhum acesso ao repositório privado

## 🔐 Segurança

**Repositório Principal:** PRIVADO no GitHub
- Código-fonte protegido
- Credenciais em `.env` (ignored)
- Acesso apenas para colaboradores adicionados

**Website:** PÚBLICO via GitHub Pages
- Apenas HTML/CSS/JS estático
- Zero dados sensíveis
- Qualquer pessoa pode visitar

## 🚀 Deploy

### Opção A: Automático com GitHub Actions (Recomendado)

Arquivo `.github/workflows/deploy-website.yml` faz deploy automático toda vez que você atualiza `website/`.

```bash
# Edite qualquer arquivo em website/
vim website/index.html

# Commit e push
git add website/
git commit -m "Update website"
git push origin main

# ✅ Site atualiza automaticamente!
```

### Opção B: Manual com Git Subtree

```bash
git subtree push --prefix website origin gh-pages
```

## 📝 Como Atualizar

### Adicionar Nova Seção

1. **Edite `index.html`** - Adicione nova `<section>`
2. **Adicione CSS em `styles.css`** - Estilos para nova seção
3. **Teste localmente**:
   ```bash
   # Abra em navegador
   open website/index.html
   ```
4. **Commit e push** - Automático ou manual

### Alterar Contato

Procure por `<!-- CONTACT -->` em `index.html` (~linha 380):

```html
<a href="mailto:seu-email@exemplo.com" class="contact-link">seu-email@exemplo.com</a>
```

### Integrar Formulário de Contato

Opções:
1. **Formspree** (gratuito) - Altern ativa rápida
2. **Netlify Forms** - Se migrar para Netlify
3. **Seu backend** - API própria em produção

Exemplo com Formspree:

```html
<form action="https://formspree.io/f/seu_id" method="POST">
    <!-- inputs aqui -->
</form>
```

## 🖥️ Visualizar Localmente

```bash
# Abra em navegador (Windows)
start website/index.html

# macOS
open website/index.html

# Linux
xdg-open website/index.html
```

Ou use um servidor local:

```bash
# Python 3
python -m http.server --directory website

# Node/npm
npx http-server website
```

Visite `http://localhost:8000`

## 📱 Responsividade

O website é **100% responsivo**:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

Todos os breakpoints estão em `styles.css`.

## 🎨 Customização

### Cores

Edite variáveis no início de `styles.css`:

```css
:root {
    --primary: #6366f1;        /* Cor principal */
    --secondary: #10b981;       /* Cor secundária */
    --dark: #1f2937;            /* Fundo escuro */
    /* ... mais cores ... */
}
```

### Fonts

Padrão: System fonts (rápido + cross-platform)

Para adicionar custom font:

```css
@import url('https://fonts.googleapis.com/css2?family=Family+Name&display=swap');

body {
    font-family: 'Family Name', sans-serif;
}
```

### Layout

Altere grid responsivo em `styles.css` (procure por `grid-template-columns`).

## 📊 Performance

- ✅ Zero dependências (HTML/CSS puro)
- ✅ 100% Lighthouse score possível
- ✅ < 100KB total (gzip)
- ✅ Carrega em < 1s em conexões 3G

## 👥 Colaboradores

Quer ajudar com o website?

1. Faça fork do repositório PRIVADO (se tiver acesso)
2. Crie branch: `git checkout -b feature/sua-feature`
3. Edite `website/` files
4. Commit: `git commit -m "Add: descrição"`
5. Push e abra PR

## 📄 Licença

Mesmo que o repositório principal (veja `LICENSE`).

---

**Status:** ✅ Ativo e publicado em GitHub Pages  
**Última atualização:** Fevereiro 2026  
**Mantido por:** Equipe Beta Staff
