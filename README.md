# 🔍 QAEasy Evidence

**Coletor Profissional de Evidências de Testes de QA**
Demo pública: [`https://bella5900g.github.io/qaeasy_evidence/#`](https://bella5900g.github.io/qaeasy_evidence/#)

Ferramenta web completa para coleta, classificação e documentação de evidências de testes, desenvolvida para profissionais de qualidade.

## 🎯 Visão Geral

O QAEasy Evidence permite aos QAs:

- ✅ **Reduzir 70% do tempo** de documentação
- 📊 **Gerar relatórios profissionais** em minutos
- 🏗️ **Padronizar processos** de documentação
- 💬 **Comunicar bugs** de forma eficaz
- 🚀 **Onboardar novos QAs** rapidamente

## ✨ Funcionalidades Principais

### 📸 Sistema de Captura

- Captura de screenshots com seleção de aba
- Classificação: PASSOU / BUG / MELHORIA / INFO
- Severidade: Baixa / Média / Alta / Crítica
- Cenário individual por evidência
- Timestamp automático

### 📋 Gestão de Contexto

- **Projeto:** WEB, MOBILE, API, Outros
- **Funcionalidade:** Descrição principal
- **Versão:** Versão do projeto
- **Tarefa/User Story:** Link ou ID da tarefa
- **Pré-requisitos:** Informações necessárias
- **Templates:** 10 tipos de teste pré-definidos

### 📊 Templates de Teste

- **Smoke Test** - Funcionalidades principais
- **Teste Regressivo** - Regressão de funcionalidades
- **Nova Funcionalidade** - Desenvolvimento
- **Correção de Bug** - Bug fixes
- **Teste de Performance** - Performance e otimização
- **Teste de Usabilidade** - UX e interface
- **Teste de Contrato** - API e integrações
- **Testes Funcionais** - Requisitos de negócio
- **Teste de Acessibilidade** - WCAG e inclusão
- **Teste E2E** - Fluxos completos

### 📄 Relatórios Profissionais

- **PDF formatado** com cores por tipo
- **Markdown** para documentação
- **Texto simples** para email
- **JSON estruturado** para integrações

### 🚀 Features de Produtividade

- Templates com tags automáticas
- Histórico de evidências (localStorage)
- Otimização automática de armazenamento
- Interface responsiva
- Cores visuais por tipo de evidência

## 🛠️ Tecnologias

- **HTML5** semântico e acessível
- **CSS3** moderno com Flexbox/Grid
- **JavaScript ES6+** puro
- **html2canvas** para captura
- **jsPDF** para PDFs
- **LocalStorage** para dados
- **GitHub Pages** para hospedagem

## 🚀 Como Usar

### 1. Configuração

1. Acesse a ferramenta
   - Online: [`https://bella5900g.github.io/qaeasy_evidence/#`](https://bella5900g.github.io/qaeasy_evidence/#)
   - Local: abra `index.html`
2. Configure o contexto:
   - Selecione projeto (WEB/MOBILE/API/Outros)
   - Descreva funcionalidade
   - Adicione versão, tarefa, pré-requisitos
   - Escolha template de teste
3. Clique em "Salvar Configuração"

### 2. Capturar Evidências

1. Clique em "Capturar Screenshot"
2. Selecione a aba desejada
3. Classifique a evidência:
   - Tipo: PASSOU/BUG/MELHORIA/INFO
   - Severidade: Baixa/Média/Alta/Crítica
   - Cenário específico da evidência
   - Descrição detalhada
4. Clique em "Salvar Evidência"

### 3. Gerar Relatórios

1. Acesse "Geração de Relatórios"
2. Escolha formato (PDF/Markdown/JSON/Texto)
3. Baixe o arquivo gerado

## 📱 Compatibilidade

- ✅ **Navegadores:** Chrome, Firefox, Safari, Edge
- ✅ **Dispositivos:** Desktop, Tablet, Mobile
- ✅ **Hospedagem:** GitHub Pages, servidor local
- ✅ **Funcionamento:** Online e offline

## 🏗️ Estrutura do Projeto

```
qa-easy-evidence/
├── index.html          # Ferramenta principal
├── style.css           # Estilos responsivos
├── script.js           # Lógica JavaScript
├── demo/
│   └── demo.html       # Página de demonstração
├── README.md           # Esta documentação
├── CHANGELOG.md        # Histórico de versões
└── .github/workflows/
    └── deploy.yml      # Deploy automático
```

## 📊 Modelo de Dados

```javascript
const evidencia = {
  id: "evidencia_123",
  tipo: "pass", // "pass", "bug", "improvement", "info"
  severidade: "media", // "baixa", "media", "alta", "critica"
  descricao: "Login funcionou corretamente",
  cenario: "Tela de Login",
  timestamp: "2024-01-15T10:05:00",
  screenshot: "base64data...",
  logs: [...],
  tags: ["frontend", "login"]
}
```

## 🎨 Interface

### Estrutura

```
[HEADER] Logo + Título
[CONFIGURAÇÃO] Contexto do teste
[CAPTURA] Screenshot e classificação
[GALLERY] Evidências capturadas
[RELATÓRIOS] Geração de arquivos
[FOOTER] Links e créditos
```

### Cores por Tipo

- **PASSOU** - Verde
- **BUG** - Vermelho
- **MELHORIA** - Amarelo
- **INFO** - Azul

## 🔧 Deploy

### GitHub Pages

1. Fork do repositório
2. Ative GitHub Pages
3. Acesse `https://seu-usuario.github.io/qaeasy_evidence`

### Servidor Local

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

## 🔒 Privacidade

- **Dados locais:** Tudo no navegador (localStorage)
- **Sem servidor:** Nenhum dado externo
- **Screenshots:** Capturados localmente
- **Logs:** Armazenados localmente

## 📞 Suporte

- **Documentação:** Este README
- **Issues:** GitHub Issues
- **Repositório:** [GitHub](https://github.com/Bella5900g/qaeasy_evidence)

## 📄 Licença

MIT License - veja arquivo `LICENSE`

## 👥 Autora

**Isabella Vieira Barbosa**

- Engenheira de QA Sênior
- ISTQB® CTFL | ASTFC™ (AICS)
- Mais de 10 anos de experiência

---

**Desenvolvido com ❤️ para a comunidade de QA brasileira**
