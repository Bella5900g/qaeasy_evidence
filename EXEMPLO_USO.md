# 📖 Exemplos de Uso - QAEasy Evidence

Guia prático com exemplos reais de como usar a ferramenta.

## 🎯 Cenários Comuns

### 1. Teste de Regressão

**Contexto:**
- Projeto: WEB
- Funcionalidade: Sistema de Login
- Versão: 2.1.0
- Template: Teste Regressivo
- Tags: login, autenticacao, regressao

**Evidências:**
1. **PASSOU** - Login com credenciais válidas
2. **PASSOU** - Validação de campos obrigatórios
3. **BUG** - Erro 500 ao tentar login com email inválido
4. **MELHORIA** - Mensagem de erro poderia ser mais clara

### 2. Smoke Test

**Contexto:**
- Projeto: MOBILE
- Funcionalidade: App Principal
- Versão: 1.5.0
- Template: Smoke Test
- Tags: mobile, app, basico

**Evidências:**
1. **PASSOU** - App abre corretamente
2. **PASSOU** - Navegação principal funciona
3. **INFO** - Performance está dentro do esperado
4. **PASSOU** - Logout funciona

### 3. Teste de Nova Funcionalidade

**Contexto:**
- Projeto: WEB
- Funcionalidade: Carrinho de Compras
- Versão: 3.0.0
- Tarefa: [TASK-123] Implementar carrinho
- Template: Nova Funcionalidade
- Tags: ecommerce, carrinho, nova-feature

**Evidências:**
1. **PASSOU** - Adicionar produto ao carrinho
2. **PASSOU** - Remover produto do carrinho
3. **BUG** - Quantidade não atualiza em tempo real
4. **MELHORIA** - Adicionar confirmação visual

### 4. Teste de Acessibilidade

**Contexto:**
- Projeto: WEB
- Funcionalidade: Formulário de Contato
- Versão: 2.0.0
- Template: Teste de Acessibilidade
- Tags: acessibilidade, wcag, inclusao

**Evidências:**
1. **PASSOU** - Navegação por teclado funciona
2. **PASSOU** - Contraste de cores adequado
3. **BUG** - Labels não associados aos campos
4. **INFO** - Screen reader lê corretamente

### 5. Teste E2E

**Contexto:**
- Projeto: WEB
- Funcionalidade: Fluxo de Compra
- Versão: 2.2.0
- Template: Teste E2E
- Tags: e2e, compra, fluxo-completo

**Evidências:**
1. **PASSOU** - Busca de produto
2. **PASSOU** - Adição ao carrinho
3. **PASSOU** - Checkout completo
4. **PASSOU** - Confirmação de pedido

## 📋 Templates e Tags

### Smoke Test
**Tags automáticas:** smoke, basico, funcionalidade-principal
**Uso:** Teste rápido das funcionalidades principais

### Teste Regressivo
**Tags automáticas:** regressivo, funcionalidades-existentes
**Uso:** Validar que mudanças não quebraram funcionalidades

### Nova Funcionalidade
**Tags automáticas:** nova-funcionalidade, desenvolvimento
**Uso:** Testar features recém-desenvolvidas

### Teste de Contrato
**Tags automáticas:** contrato, api, integração
**Uso:** Validar contratos de API e integrações

### Testes Funcionais
**Tags automáticas:** funcional, requisitos, negocio
**Uso:** Validar requisitos de negócio

### Teste de Acessibilidade
**Tags automáticas:** acessibilidade, wcag, inclusao
**Uso:** Validar conformidade com padrões de acessibilidade

### Teste E2E
**Tags automáticas:** e2e, end-to-end, fluxo-completo
**Uso:** Testar fluxos completos do sistema

## 🎨 Cores por Tipo

### PDF Gerado
- **[OK] PASSOU** - Verde
- **[BUG] BUG** - Vermelho
- **[MEL] MELHORIA** - Amarelo
- **[INF] INFO** - Azul

### Severidade
- **BAIXA** - Verde
- **MÉDIA** - Amarelo
- **ALTA** - Vermelho
- **CRÍTICA** - Vermelho escuro

## 📄 Exemplos de Relatórios

### PDF
```
Relatório de Evidências de Teste
Projeto: WEB
Funcionalidade: Sistema de Login
Versão: 2.1.0
Data: 19/12/2024

Cenário: Tela de Login
1. [OK] PASSOU
   Descrição: Login com credenciais válidas funcionou corretamente
   Severidade: BAIXA
   Data/Hora: 19/12/2024, 14:30:15

2. [BUG] BUG
   Descrição: Erro 500 ao tentar login com email inválido
   Severidade: ALTA
   Data/Hora: 19/12/2024, 14:32:20
```

### Markdown
```markdown
# Relatório de Evidências de Teste

## 📋 Cenário: Tela de Login

### 1. [OK] PASSOU
**Descrição:** Login com credenciais válidas funcionou corretamente
**Severidade:** BAIXA
**Data/Hora:** 19/12/2024, 14:30:15

### 2. [BUG] BUG
**Descrição:** Erro 500 ao tentar login com email inválido
**Severidade:** ALTA
**Data/Hora:** 19/12/2024, 14:32:20
```

## 💡 Dicas de Uso

### 1. Configuração Eficiente
- Use templates para preenchimento automático de tags
- Configure versão e tarefa para rastreabilidade
- Adicione pré-requisitos importantes

### 2. Captura de Evidências
- Capture evidências imediatamente após observar
- Use descrições claras e objetivas
- Classifique severidade baseada no impacto

### 3. Geração de Relatórios
- PDF para stakeholders
- Markdown para documentação
- JSON para integrações
- Texto para emails rápidos

### 4. Organização
- Use tags consistentes
- Mantenha evidências organizadas por cenário
- Limpe evidências antigas regularmente

## 🚨 Problemas Comuns

### Quota Excedida
**Problema:** Erro ao salvar evidências
**Solução:** Clique em "Limpar Evidências Antigas"

### Screenshot Não Captura
**Problema:** Erro na captura de tela
**Solução:** Verifique permissões do navegador

### PDF com Caracteres Estranhos
**Problema:** Texto corrompido no PDF
**Solução:** Use apenas caracteres ASCII básicos

## 📞 Suporte

Para dúvidas ou problemas:
- Consulte este guia
- Abra uma issue no GitHub
- Verifique o README.md principal