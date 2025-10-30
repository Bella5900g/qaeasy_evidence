# 🔍 QAEasy Evidence

**Coletor Profissional de Evidências de Testes de QA**

Uma ferramenta web completa e auto-suficiente para coleta, classificação e documentação de evidências de testes de QA, desenvolvida para resolver dores reais do dia a dia de profissionais de qualidade em empresas com estrutura incipiente de qualidade.

## 🎯 Visão Geral

O QAEasy Evidence foi desenvolvido para ser uma solução prática e eficiente que permite aos QAs:

- ✅ **Reduzir 70% do tempo de documentação** de evidências de teste
- 📊 **Gerar relatórios profissionais** em minutos
- 🏗️ **Padronizar o processo** de documentação de testes
- 💬 **Comunicar bugs** de forma mais eficaz
- 🚀 **Onboardar novos QAs** mais rapidamente

## ✨ Funcionalidades Principais

### 📸 Sistema de Captura de Evidências

- Captura de screenshots da aba atual com um clique
- Classificação automática: ✅ Passou / 🔴 Bug / 🟡 Melhoria / 🔵 Info
- Sistema de severidade: Baixa / Média / Alta / Crítica
- Anotações em tempo real
- Timestamp automático

### 📋 Gestão de Contexto de Teste

- Seleção de projeto (dropdown com opções pré-definidas)
- Cenário de teste (input livre)
- Templates pré-definidos (Smoke Test, Regressivo, Nova Funcionalidade, etc.)
- Sistema de tags (frontend, backend, mobile, performance, usabilidade)

### 📊 Sistema de Logs Automático

- Captura automática de console logs (log, error, warn)
- Detecção de erros JavaScript
- Metadados da página (URL, viewport, userAgent)
- Performance básica

### 📄 Geração de Relatórios Profissionais

- **PDF formatado** para stakeholders
- **Markdown** para GitHub/GitLab
- **Texto simples** para email
- **JSON estruturado** para integrações

### 🚀 Features de Produtividade

- Templates pré-definidos para diferentes tipos de teste
- Histórico de sessões (localStorage)
- Dashboard de métricas em tempo real
- Sistema de busca e filtro
- Timer de sessão automático
- Interface responsiva (mobile/desktop)

## 🛠️ Tecnologias Utilizadas

- **HTML5** semântico e acessível
- **CSS3** moderno com Flexbox/Grid
- **JavaScript ES6+** puro (sem frameworks)
- **html2canvas** para captura de screenshots
- **jsPDF** para geração de relatórios PDF
- **LocalStorage** para persistência de dados
- **GitHub Pages** para hospedagem

## 🚀 Como Usar

### 1. Acesso à Ferramenta

- **Página Principal:** `index.html` - Ferramenta completa
- **Página de Demo:** `demo/demo.html` - Para praticar e testar

### 2. Configuração Inicial

1. Acesse a ferramenta no seu navegador
2. Configure o contexto do teste:
   - Selecione o projeto
   - Descreva o cenário de teste
   - Escolha o template apropriado
   - Adicione tags relevantes
3. Clique em "Salvar Configuração"

### 3. Iniciar Sessão de Teste

1. Clique em "Iniciar Sessão"
2. O timer automático começará a contar
3. A sessão ficará ativa até ser pausada

### 4. Capturar Evidências

1. Navegue até a página/funcionalidade a ser testada
2. Clique em "Capturar Screenshot"
3. Classifique a evidência:
   - Selecione o tipo (Passou/Bug/Melhoria/Info)
   - Defina a severidade
   - Descreva o que foi observado
4. Clique em "Salvar Evidência"

### 5. Gerar Relatórios

1. Acesse a seção "Geração de Relatórios"
2. Escolha o formato desejado (PDF, Markdown, JSON, Texto)
3. Clique no botão correspondente
4. O arquivo será baixado automaticamente

### 6. Praticar com a Demo

1. Acesse `demo/demo.html` para praticar
2. Use os cenários sugeridos na página
3. Teste todas as funcionalidades
4. Gere relatórios de exemplo

## 📱 Compatibilidade

- ✅ **Navegadores:** Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ **Dispositivos:** Desktop, Tablet, Mobile
- ✅ **Hospedagem:** GitHub Pages, servidor local, qualquer servidor web
- ✅ **Funcionamento:** Online e offline (após carregamento inicial)

## 🏗️ Estrutura do Projeto

```
qa-easy-evidence/
├── index.html          # Página principal da ferramenta
├── style.css           # Estilos CSS responsivos
├── script.js           # Lógica JavaScript completa
├── demo/
│   └── demo.html       # Página de demonstração
├── README.md           # Documentação completa
├── EXEMPLO_USO.md      # Guia de exemplos práticos
├── DEPLOY.md           # Instruções de deploy
├── CHANGELOG.md        # Histórico de versões
├── LICENSE             # Licença MIT
└── .github/
    └── workflows/
        └── deploy.yml  # Deploy automático
```

## 📊 Modelo de Dados

```javascript
const sessionData = {
  id: "session-123",
  project: "E-commerce",
  scenario: "Fluxo de checkout completo",
  template: "smoke-test",
  startTime: "2024-01-15T10:00:00",
  evidences: [
    {
      id: "ev-1",
      type: "pass", // "pass", "bug", "improvement", "info"
      severity: "medium", // "low", "medium", "high", "critical"
      description: "Login funcionou corretamente",
      timestamp: "2024-01-15T10:05:00",
      screenshot: "base64data...",
      logs: [...],
      tags: ["frontend", "login"]
    }
  ]
}
```

## 🎨 Design e UX

### Princípios de Design

- **Clean e profissional** - cores neutras, boa tipografia
- **Intuitivo** - fluxo linear e claro
- **Responsivo** - funciona perfeitamente em mobile/desktop
- **Acessível** - ARIA labels, contraste adequado

### Estrutura da Interface

```
[HEADER] Logo + Status + Timer
[SEÇÃO 1] Configuração do Contexto
[SEÇÃO 2] Captura e Classificação
[SEÇÃO 3] Gallery de Evidências
[SEÇÃO 4] Geração de Relatórios
[FOOTER] Guia Rápido + Links
```

## 🔧 Deploy e Hospedagem

### GitHub Pages

1. Faça fork deste repositório
2. Ative o GitHub Pages nas configurações
3. Acesse `https://seu-usuario.github.io/qa-easy-evidence`

### Servidor Local

1. Clone o repositório
2. Abra `index.html` em qualquer navegador
3. Ou use um servidor local:

   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve .
   ```

### Outros Servidores

- Qualquer servidor web (Apache, Nginx, etc.)
- CDN (Cloudflare, Netlify, Vercel)
- Servidor corporativo

## 📈 Métricas e Dashboard

O dashboard em tempo real mostra:

- **Total de Evidências** capturadas
- **Bugs Encontrados** durante a sessão
- **Testes que Passaram** com sucesso
- **Tempo de Sessão** ativa

## 🏷️ Templates Pré-definidos

### Smoke Test

- **Tags:** smoke, basico, funcionalidade-principal
- **Uso:** Teste básico das funcionalidades principais

### Teste Regressivo

- **Tags:** regressivo, funcionalidades-existentes
- **Uso:** Teste de regressão das funcionalidades existentes

### Nova Funcionalidade

- **Tags:** nova-funcionalidade, desenvolvimento
- **Uso:** Teste de nova funcionalidade em desenvolvimento

### Bug Fix

- **Tags:** correcao, bug-fix
- **Uso:** Teste de correção de bug específico

### Performance

- **Tags:** performance, velocidade, otimizacao
- **Uso:** Teste de performance e otimização

### Usabilidade

- **Tags:** usabilidade, ux, interface
- **Uso:** Teste de usabilidade e experiência do usuário

## 🔍 Sistema de Logs

A ferramenta captura automaticamente:

- **Console logs** (log, error, warn)
- **Erros JavaScript** não tratados
- **Metadados da página** (URL, título, viewport)
- **Informações do navegador** (userAgent)

## 📋 Casos de Uso

### 1. Teste de Regressão

1. Configure o contexto como "Teste Regressivo"
2. Capture evidências de cada funcionalidade
3. Classifique bugs encontrados
4. Gere relatório PDF para o time

### 2. Smoke Test

1. Use template "Smoke Test"
2. Teste funcionalidades principais
3. Documente rapidamente o que passou
4. Exporte em Markdown para documentação

### 3. Teste de Nova Funcionalidade

1. Configure como "Nova Funcionalidade"
2. Capture evidências detalhadas
3. Documente melhorias necessárias
4. Compartilhe JSON com desenvolvedores

## 🚨 Tratamento de Erros

A ferramenta possui tratamento robusto de erros:

- Validação de campos obrigatórios
- Tratamento de falhas na captura de screenshot
- Recuperação de dados do localStorage
- Notificações visuais de status

## 🔒 Privacidade e Segurança

- **Dados locais:** Tudo fica no seu navegador (localStorage)
- **Sem servidor:** Nenhum dado é enviado para servidores externos
- **Screenshots:** Capturados localmente, não transmitidos
- **Logs:** Armazenados apenas localmente

## 🎯 Roadmap Futuro

### Versão 2.0

- [ ] Integração com Jira/Azure DevOps
- [ ] Upload de evidências para nuvem
- [ ] Relatórios em tempo real
- [ ] API para integrações

### Versão 2.1

- [ ] Testes automatizados
- [ ] Métricas avançadas
- [ ] Templates customizáveis
- [ ] Colaboração em equipe

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça fork do projeto
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Abra um Pull Request

## 📞 Suporte

- **Documentação:** Este README
- **Issues:** Use a aba Issues do GitHub
- **Email:** [Seu email de contato]

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **Isabella Barbosa** - Engenheira de QA Sênior
  - ISTQB® CTFL | ASTFC™ (AICS)
  - Mais de 10 anos de experiência em QA

## 🙏 Agradecimentos

- Comunidade de QA brasileira
- Desenvolvedores que testaram a ferramenta
- Contribuidores do projeto

---

**Desenvolvido com ❤️ para a comunidade de QA brasileira**

_"Qualidade não é acidente. É sempre o resultado de esforço inteligente."_ - John Ruskin
