# 📜 Página Legal - Documentação

**Data de Criação:** 28 de Fevereiro de 2026  
**Versão:** 1.0  
**Arquivo:** `website/legal.html`

---

## 📋 Visão Geral

Página responsiva e profissional com **3 abas principais**:
1. **Privacidade** - Conformidade LGPD/GDPR
2. **Termos de Serviço** - Regras de uso
3. **Licença** - MIT + CC-BY-4.0 + Propriedade Intelectual

---

## 🏗️ Estrutura (Atomic Design)

```
legal.html
├── ATOMS (CSS)
│   ├── .tab-button (botões interativos)
│   ├── .highlight-box (destaque visual)
│   └── .social-links (ícones de rede social)
│
├── MOLECULES
│   ├── .legal-section (seção de conteúdo)
│   ├── .legal-article (artigos individuais)
│   └── .legal-tabs (navegação)
│
└── ORGANISMS
    ├── .legal-container (container principal)
    ├── .hero (seção hero)
    └── .footer (rodapé)
```

### CSS Personalizado

```css
/* ATOMS */
.tab-button { /* Botões de navegação */
.highlight-box { /* Caixas de destaque */
.social-links { /* Links sociais */

/* MOLECULES */
.legal-section { /* Seção de conteúdo dinâmica */
.legal-article { /* Artigos com títulos e conteúdo */

/* ORGANISMS */
.legal-container { /* Container raiz */
.legal-tabs { /* Abas navegáveis */
```

---

## 📝 Conteúdo - Melhores Práticas Implementadas

### 1️⃣ Privacidade (LGPD/GDPR)

**7 Seções Principais:**

| Seção | Detalhe |
|-------|---------|
| **Dados Coletados** | Transparência total sobre coleta |
| **Uso de Dados** | 5 casos de uso específicos |
| **Compartilhamento** | Garantia de não-compartilhamento |
| **Retenção** | Timeline clara de deleção |
| **Direitos (LGPD)** | 6 direitos do usuário |
| **Segurança** | Criptografia AES-256 mencionada |
| **Contato DPO** | Email e SLA de resposta |

**Conformidade:**
- ✅ LGPD (Lei Geral de Proteção de Dados - Brasil)
- ✅ GDPR (General Data Protection Regulation - EU)
- ✅ Criptografia de dados sensíveis (Anamnese)
- ✅ Direito ao esquecimento ("Right to be forgotten")
- ✅ Data export em formatos abertos

---

### 2️⃣ Termos de Serviço (TOS)

**10 Seções Principais:**

| Seção | Propósito |
|-------|-----------|
| **Aceitação dos Termos** | Vinculação legal |
| **Licença de Uso** | Restrições de uso |
| **Conta & Responsabilidades** | Deveres do usuário |
| **Usos Proibidos** | 7 atividades bloqueadas |
| **Propriedade Intelectual** | Direitos autorais |
| **Limitação de Responsabilidade** | Isenção de garantias |
| **Garantia de Não-Responsabilidade** | Sem responsabilidade por lesões |
| **Encerramento** | Motivos de cancelamento |
| **Lei Aplicável** | Jurisdição (São Paulo, Brasil) |
| **Contato** | Email legal |

**Diferenciais:**
- Aviso médico (⚠️ Não é aconselhamento médico)
- Limitation cap (máximo ao valor pago)
- Force majeure clause
- Resolução de disputas em tribunais brasileiros

---

### 3️⃣ Licença (MIT + CC-BY-4.0)

**8 Componentes Licenciados:**

| Componente | Licença | Permissão |
|-----------|---------|-----------|
| **Código-Fonte** | MIT | Livre para comercial |
| **Documentação** | CC-BY-4.0 | Remixável com atribuição |
| **Dados/Exercícios** | Propriedade Exclusiva | Uso pessoal apenas |
| **Dependências** | MIT/BSD/Apache 2.0 | Compatível |
| **Marca & Logo** | CC-BY-4.0 | Atribuição obrigatória |

**Seções Importantes:**
- Créditos claros (Rodrigo Chaves, Jack Daniels)
- Direitos de contribuidores
- Processo de Contributor License Agreement (CLA)

---

## 🎨 Design & Responsiveness

### Desktop (≥992px)
- 3 colunas para navegação de abas
- Fonte: 20px títulos, 16px corpo
- Padding: 40px
- Max-width: 900px

### Tablet (575px - 991px)
- Tabs em 2 colunas flex
- Overflow-x para scroll horizontal
- Font-size reduzido proporcionalmente

### Mobile (< 575px)
- Tabs em 1 coluna (100% width)
- Padding reduzido: 25px → 15px
- Font-size: 18px (títulos)
- Stack vertical

---

## 🔗 Links Sociais Implementados

No footer de ambas as páginas (index.html + legal.html):

```html
<a href="https://github.com/rodrigochavesoa" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/rodrigochavesoa" target="_blank">LinkedIn</a>
<a href="https://behance.net/rodrigochavesoa" target="_blank">Behance</a>
<a href="https://instagram.com/pontochavedesign" target="_blank">Instagram</a>
```

**Ícones utilizados:**
- `bi-github` → GitHub
- `bi-linkedin` → LinkedIn
- `bi-briefcase` → Behance
- `bi-instagram` → Instagram

---

## 💡 Funcionalidades Técnicas

### Navegação com Abas (Vanilla JS)
```javascript
function switchTab(tabName) {
    // 1. Hide all sections
    document.querySelectorAll('.legal-section').forEach(...);
    
    // 2. Remove active class from buttons
    document.querySelectorAll('.tab-button').forEach(...);
    
    // 3. Show selected section
    document.getElementById(tabName).classList.add('active');
    
    // 4. Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
```

### CSS Animations
```css
.legal-section {
    display: none;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

---

## 🔒 Segurança & Privacidade da Página

✅ **Práticas Implementadas:**
- Nenhum JavaScript de rastreamento
- Nenhum cookie de terceiros
- Nenhum formulário de coleta de email
- Sem analytics invasivo
- HTML semântico para SEO

---

## 📊 Estatísticas

| Métrica | Valor |
|---------|-------|
| Linhas de HTML | 650+ |
| Linhas de CSS | 120+ |
| Linhas de JS | 15 |
| Seções Legal | 3 |
| Artigos Principais | 25+ |
| Links Sociais | 4 |
| Responsiveness Breakpoints | 3 |

---

## 🔄 Como Manter Atualizado

### Quando Atualizar:

1. **LGPD/GDPR Changes** → Seção "Privacidade"
2. **Novo Recurso** → Seção "Termos"
3. **Mudança de Licença** → Seção "Licença"
4. **Novos Contatos** → Footer + Links Sociais

### Processo de Atualização:

```bash
# 1. Edite website/legal.html
# 2. Atualize data no topo: "Última atualização"
# 3. Teste responsiveness em mobile
# 4. Commit com mensagem clara
git commit -m "docs(legal): atualizar seção de privacidade - LGPD 2026"
```

---

## 🧪 Testes Realizados

✅ **Testes de Responsiveness:**
- [x] Desktop (1920px)
- [x] Tablet (768px)
- [x] Mobile (375px)

✅ **Testes de Navegação:**
- [x] Abas clicáveis
- [x] Links internos funcionam
- [x] Links externos abrem em nova aba (target="_blank")

✅ **Testes de Acessibilidade:**
- [x] Contraste de cores WCAG AA
- [x] Semântica HTML correta
- [x] Icons com alt text (title)

---

## 📞 Contatos Definidos

```
Privacidade: privacidade@staffcolab.com
Termos/Legal: legal@staffcolab.com
```

**SLA de Resposta:** 10 dias úteis

---

## 📚 Próximas Melhorias (Roadmap)

- [ ] Tradução para em Inglês + Espanhol
- [ ] Integração com CMS (permitir edição no painel)
- [ ] PDF exportável de privacidade/termos
- [ ] Versioning de mudanças (changelog)
- [ ] Log de consentimento do usuário
- [ ] Integração com Google reCAPTCHA (se necessário)

---

## ✨ Elementos de Design System Respeitados

- ✅ Cores: `--primary-color`, `--text-secondary`, `--bg-secondary`
- ✅ Typography: Headers consistentes, line-height 1.8
- ✅ Spacing: Padding/margin em múltiplos de 5px
- ✅ Border-radius: `var(--btn-radius)` = 8px
- ✅ Transitions: `var(--transition)` = all 0.2s ease
- ✅ Responsiveness: Mobile-first approach

---

**Página Legal versão 1.0 pronta para produção!** 🚀
