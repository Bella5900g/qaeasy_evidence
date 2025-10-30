# 📖 Guia de Exemplos de Uso - QAEasy Evidence

Este guia apresenta exemplos práticos de como usar o QAEasy Evidence em diferentes cenários de teste.

## 🚀 Cenário 1: Teste de Smoke Test em E-commerce

### Configuração Inicial
```
Projeto: E-commerce
Cenário: Verificação básica das funcionalidades principais
Template: Smoke Test
Tags: ecommerce, smoke, funcionalidades-principais
```

### Fluxo de Teste
1. **Página Inicial**
   - Capturar screenshot da homepage
   - Tipo: ✅ Passou
   - Descrição: "Homepage carregou corretamente com todos os elementos visíveis"

2. **Navegação**
   - Capturar screenshot do menu de categorias
   - Tipo: ✅ Passou
   - Descrição: "Menu de categorias funcionando, todas as opções clicáveis"

3. **Busca de Produtos**
   - Capturar screenshot da página de resultados
   - Tipo: 🔴 Bug
   - Severidade: Alta
   - Descrição: "Busca retorna produtos irrelevantes quando pesquiso por 'smartphone'"

4. **Carrinho de Compras**
   - Capturar screenshot do carrinho
   - Tipo: ✅ Passou
   - Descrição: "Produto adicionado ao carrinho com sucesso"

### Relatório Gerado
- **PDF:** Para apresentar ao stakeholder
- **Markdown:** Para documentar no GitHub
- **JSON:** Para integração com ferramentas de bug tracking

## 🔍 Cenário 2: Teste de Regressão em Aplicativo Mobile

### Configuração Inicial
```
Projeto: Aplicativo Mobile
Cenário: Teste de regressão após atualização da versão 2.1
Template: Teste Regressivo
Tags: mobile, regressao, app, versao-2.1
```

### Fluxo de Teste
1. **Login**
   - Capturar screenshot da tela de login
   - Tipo: ✅ Passou
   - Descrição: "Login com credenciais válidas funcionando normalmente"

2. **Navegação Principal**
   - Capturar screenshot do menu principal
   - Tipo: 🟡 Melhoria
   - Severidade: Média
   - Descrição: "Menu principal está lento para abrir, pode ser otimizado"

3. **Funcionalidade de Pagamento**
   - Capturar screenshot da tela de pagamento
   - Tipo: 🔴 Bug
   - Severidade: Crítica
   - Descrição: "Aplicativo trava ao tentar processar pagamento com cartão de crédito"

4. **Notificações Push**
   - Capturar screenshot das configurações de notificação
   - Tipo: ✅ Passou
   - Descrição: "Configurações de notificação funcionando corretamente"

## 🆕 Cenário 3: Teste de Nova Funcionalidade

### Configuração Inicial
```
Projeto: Dashboard Admin
Cenário: Teste da nova funcionalidade de relatórios em tempo real
Template: Nova Funcionalidade
Tags: dashboard, nova-funcionalidade, relatorios, tempo-real
```

### Fluxo de Teste
1. **Acesso à Nova Funcionalidade**
   - Capturar screenshot do menu com nova opção
   - Tipo: ✅ Passou
   - Descrição: "Nova opção 'Relatórios em Tempo Real' visível no menu"

2. **Interface do Relatório**
   - Capturar screenshot da tela de relatórios
   - Tipo: 🔵 Info
   - Descrição: "Interface carregou, mas dados ainda não estão sendo atualizados em tempo real"

3. **Atualização de Dados**
   - Capturar screenshot após 30 segundos
   - Tipo: 🔴 Bug
   - Severidade: Alta
   - Descrição: "Dados não são atualizados automaticamente, necessário refresh manual"

4. **Exportação de Relatório**
   - Capturar screenshot da opção de exportação
   - Tipo: ✅ Passou
   - Descrição: "Exportação para PDF funcionando corretamente"

## 🐛 Cenário 4: Teste de Correção de Bug

### Configuração Inicial
```
Projeto: API Backend
Cenário: Validação da correção do bug de timeout na API de usuários
Template: Bug Fix
Tags: api, backend, bug-fix, timeout, usuarios
```

### Fluxo de Teste
1. **Teste da API Corrigida**
   - Capturar screenshot do Postman/Insomnia
   - Tipo: ✅ Passou
   - Descrição: "API de usuários respondendo em menos de 2 segundos"

2. **Teste de Carga**
   - Capturar screenshot dos resultados de carga
   - Tipo: ✅ Passou
   - Descrição: "API suporta 100 requisições simultâneas sem timeout"

3. **Validação de Dados**
   - Capturar screenshot da resposta da API
   - Tipo: ✅ Passou
   - Descrição: "Dados retornados estão corretos e completos"

## ⚡ Cenário 5: Teste de Performance

### Configuração Inicial
```
Projeto: Site Corporativo
Cenário: Teste de performance após otimizações de imagens
Template: Performance
Tags: performance, otimizacao, imagens, velocidade
```

### Fluxo de Teste
1. **Tempo de Carregamento**
   - Capturar screenshot do DevTools (Network)
   - Tipo: ✅ Passou
   - Descrição: "Página carregou em 2.3 segundos, dentro do esperado"

2. **Otimização de Imagens**
   - Capturar screenshot da página com imagens
   - Tipo: ✅ Passou
   - Descrição: "Imagens carregando rapidamente, formato WebP funcionando"

3. **Cache do Navegador**
   - Capturar screenshot do DevTools (Application)
   - Tipo: 🔵 Info
   - Descrição: "Cache configurado corretamente, recursos sendo servidos do cache"

## 🎨 Cenário 6: Teste de Usabilidade

### Configuração Inicial
```
Projeto: Portal do Cliente
Cenário: Teste de usabilidade do novo fluxo de cadastro
Template: Usabilidade
Tags: usabilidade, ux, cadastro, portal-cliente
```

### Fluxo de Teste
1. **Primeira Impressão**
   - Capturar screenshot da tela inicial
   - Tipo: 🟡 Melhoria
   - Severidade: Baixa
   - Descrição: "Botão de cadastro poderia ser mais destacado visualmente"

2. **Formulário de Cadastro**
   - Capturar screenshot do formulário
   - Tipo: 🔴 Bug
   - Severidade: Média
   - Descrição: "Validação de email não funciona, aceita emails inválidos"

3. **Confirmação de Cadastro**
   - Capturar screenshot da tela de confirmação
   - Tipo: ✅ Passou
   - Descrição: "Email de confirmação enviado e tela de sucesso exibida"

## 📊 Dicas para Relatórios Eficazes

### Para Stakeholders (PDF)
- Use descrições claras e objetivas
- Destaque bugs críticos
- Inclua screenshots de alta qualidade
- Organize por severidade

### Para Desenvolvedores (JSON)
- Inclua logs técnicos
- Adicione metadados detalhados
- Use tags específicas
- Documente passos para reproduzir bugs

### Para Documentação (Markdown)
- Use formatação rica
- Organize por seções
- Inclua links para issues
- Mantenha histórico de versões

## 🏷️ Boas Práticas de Tags

### Por Tipo de Teste
- `smoke` - Testes básicos
- `regressao` - Testes de regressão
- `nova-funcionalidade` - Novas features
- `performance` - Testes de performance
- `usabilidade` - Testes de UX

### Por Tecnologia
- `frontend` - Interface do usuário
- `backend` - API e servidor
- `mobile` - Aplicativo mobile
- `desktop` - Aplicação desktop
- `api` - Testes de API

### Por Severidade
- `critico` - Bugs críticos
- `alta` - Bugs de alta prioridade
- `media` - Bugs de média prioridade
- `baixa` - Melhorias e bugs menores

## 📈 Métricas Importantes

### Durante a Sessão
- **Tempo de sessão:** Acompanhe quanto tempo está testando
- **Taxa de bugs:** Quantos bugs por hora de teste
- **Cobertura:** Quantas funcionalidades foram testadas

### No Relatório
- **Resumo executivo:** Visão geral dos resultados
- **Bugs críticos:** Lista de problemas urgentes
- **Melhorias sugeridas:** Oportunidades de melhoria
- **Recomendações:** Próximos passos

## 🚨 Alertas e Notificações

### Quando Usar Cada Tipo
- **✅ Passou:** Funcionalidade funcionando conforme esperado
- **🔴 Bug:** Problema que impede o funcionamento
- **🟡 Melhoria:** Funciona, mas pode ser melhorado
- **🔵 Info:** Informação importante para documentação

### Níveis de Severidade
- **Crítica:** Sistema inutilizável
- **Alta:** Funcionalidade principal afetada
- **Média:** Funcionalidade secundária afetada
- **Baixa:** Melhoria ou bug cosmético

---

**Lembre-se:** O QAEasy Evidence é uma ferramenta para facilitar sua documentação, não para substituir seu julgamento profissional como QA. Use-o como apoio para criar evidências claras e profissionais dos seus testes!
