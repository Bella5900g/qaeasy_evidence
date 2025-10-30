# 🚀 Guia de Deploy - QAEasy Evidence

Este guia explica como fazer o deploy da ferramenta QAEasy Evidence em diferentes ambientes.

## 📋 Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Acesso à internet (apenas para carregar as bibliotecas externas)
- Servidor web (opcional, para deploy em produção)

## 🌐 Deploy no GitHub Pages

### Método 1: Fork do Repositório
1. Acesse o repositório do QAEasy Evidence
2. Clique em "Fork" para criar sua cópia
3. Vá em Settings > Pages
4. Selecione "Deploy from a branch"
5. Escolha a branch "main"
6. Clique em "Save"
7. Acesse `https://seu-usuario.github.io/qa-easy-evidence`

### Método 2: Upload Manual
1. Faça download dos arquivos do projeto
2. Crie um novo repositório no GitHub
3. Faça upload dos arquivos
4. Ative o GitHub Pages nas configurações
5. Acesse a URL gerada

## 🏠 Deploy Local

### Opção 1: Abrir Diretamente
1. Baixe os arquivos do projeto
2. Abra `index.html` em qualquer navegador
3. A ferramenta funcionará completamente offline

### Opção 2: Servidor Local
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Acesse `http://localhost:8000`

## ☁️ Deploy em Servidores Web

### Apache
1. Faça upload dos arquivos para o diretório web
2. Configure o servidor para servir arquivos estáticos
3. Acesse via URL do servidor

### Nginx
```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    root /caminho/para/qa-easy-evidence;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

### IIS
1. Crie um novo site no IIS
2. Aponte para o diretório dos arquivos
3. Configure o documento padrão como `index.html`

## 🔧 Deploy em CDNs

### Netlify
1. Conecte seu repositório GitHub
2. Configure o build command: vazio
3. Configure o publish directory: `.`
4. Deploy automático ativado

### Vercel
1. Instale o Vercel CLI
2. Execute `vercel` no diretório do projeto
3. Siga as instruções do CLI

### Cloudflare Pages
1. Conecte seu repositório
2. Configure o build: vazio
3. Configure o output directory: `.`
4. Deploy automático

## 📱 Deploy Mobile

### PWA (Progressive Web App)
1. Adicione um manifest.json
2. Configure service worker
3. Instale como app no dispositivo

### App Wrapper
1. Use Cordova/PhoneGap
2. Use Capacitor
3. Use Electron (desktop)

## 🔒 Configurações de Segurança

### HTTPS
- Sempre use HTTPS em produção
- Configure certificados SSL
- Redirecione HTTP para HTTPS

### Headers de Segurança
```http
Content-Security-Policy: default-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
```

## 📊 Monitoramento

### Analytics
- Google Analytics
- Hotjar
- Mixpanel

### Logs
- Console logs do navegador
- Server logs
- Error tracking (Sentry)

## 🚀 Otimizações de Performance

### Compressão
- Gzip/Brotli
- Minificação de CSS/JS
- Otimização de imagens

### Cache
- Headers de cache
- Service Worker
- CDN

### Lazy Loading
- Carregar bibliotecas sob demanda
- Otimizar carregamento inicial

## 🔄 CI/CD

### GitHub Actions
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

### GitLab CI
```yaml
pages:
  script:
    - echo "Deploying to GitLab Pages"
  artifacts:
    paths:
      - public
```

## 🐛 Troubleshooting

### Problemas Comuns

#### Screenshots não funcionam
- Verifique se html2canvas está carregado
- Teste em HTTPS
- Verifique CORS

#### Relatórios PDF não geram
- Verifique se jsPDF está carregado
- Teste em navegador moderno
- Verifique console para erros

#### Dados não salvam
- Verifique se localStorage está habilitado
- Teste em modo privado/incógnito
- Verifique espaço disponível

#### Interface não carrega
- Verifique conexão com internet
- Teste com arquivos locais
- Verifique console para erros

### Logs de Debug
```javascript
// Ativar logs detalhados
localStorage.setItem('qaEasyDebug', 'true');

// Ver dados salvos
console.log(localStorage.getItem('qaEasyEvidence'));

// Limpar dados
localStorage.removeItem('qaEasyEvidence');
```

## 📈 Métricas de Deploy

### Monitorar
- Tempo de carregamento
- Taxa de erro
- Uso de recursos
- Feedback dos usuários

### Melhorar
- Performance
- Usabilidade
- Funcionalidades
- Documentação

## 🔄 Atualizações

### Versionamento
- Use tags Git para versões
- Mantenha changelog
- Teste antes de publicar

### Rollback
- Mantenha backups
- Use branches para features
- Teste rollback procedures

## 📞 Suporte

### Documentação
- README.md
- EXEMPLO_USO.md
- Comentários no código

### Comunidade
- Issues no GitHub
- Discussões
- Pull Requests

---

**Dica:** Sempre teste o deploy em ambiente de desenvolvimento antes de publicar em produção!
