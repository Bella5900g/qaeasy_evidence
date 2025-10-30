# 🚀 Guia de Deploy - QAEasy Evidence

Instruções para hospedar a ferramenta em diferentes ambientes.

## 🌐 GitHub Pages (Recomendado)

### 1. Fork do Repositório
1. Acesse [qaeasy_evidence](https://github.com/Bella5900g/qaeasy_evidence)
2. Clique em "Fork"
3. Clone seu fork localmente

### 2. Configurar GitHub Pages
1. Vá em Settings > Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Salve as configurações

### 3. Acesso
- URL: `https://seu-usuario.github.io/qaeasy_evidence`
- Deploy automático a cada push

## 🖥️ Servidor Local

### Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Acesse: `http://localhost:8000`

### Node.js
```bash
# Instalar serve globalmente
npm install -g serve

# Executar
serve .

# Ou com npx
npx serve .
```
Acesse: `http://localhost:3000`

### PHP
```bash
php -S localhost:8000
```
Acesse: `http://localhost:8000`

## ☁️ Serviços de Hospedagem

### Netlify
1. Conecte com GitHub
2. Selecione o repositório
3. Build command: (deixe vazio)
4. Publish directory: /
5. Deploy

### Vercel
1. Importe do GitHub
2. Framework: Other
3. Build command: (deixe vazio)
4. Deploy

### Cloudflare Pages
1. Conecte com GitHub
2. Selecione o repositório
3. Build settings: (deixe padrão)
4. Deploy

## 🏢 Servidor Corporativo

### Apache
1. Copie arquivos para `/var/www/html/`
2. Configure virtual host
3. Acesse via IP/domínio

### Nginx
1. Copie arquivos para `/usr/share/nginx/html/`
2. Configure server block
3. Acesse via IP/domínio

### IIS
1. Copie arquivos para `C:\inetpub\wwwroot\`
2. Configure site no IIS Manager
3. Acesse via IP/domínio

## 🔧 Configurações Avançadas

### HTTPS
- Use certificados SSL válidos
- Configure redirecionamento HTTP → HTTPS
- Teste em navegadores

### Cache
- Configure cache para arquivos estáticos
- Use versioning para atualizações
- Teste funcionamento offline

### Domínio Personalizado
1. Configure DNS apontando para servidor
2. Adicione domínio nas configurações
3. Teste acesso via domínio

## 📱 Testes Pós-Deploy

### Desktop
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Mobile
- [ ] Chrome Mobile
- [ ] Safari Mobile
- [ ] Firefox Mobile

### Funcionalidades
- [ ] Captura de screenshot
- [ ] Geração de PDF
- [ ] Salvamento local
- [ ] Responsividade

## 🚨 Troubleshooting

### Erro 404
- Verifique se arquivos estão na raiz
- Confirme configuração do servidor
- Teste acesso direto aos arquivos

### CORS Issues
- Configure headers CORS no servidor
- Use HTTPS se necessário
- Teste em diferentes navegadores

### Performance
- Habilite compressão gzip
- Configure cache de arquivos estáticos
- Monitore tempo de carregamento

## 📊 Monitoramento

### Analytics
- Google Analytics
- Hotjar
- Mixpanel

### Logs
- Monitorar erros JavaScript
- Verificar logs do servidor
- Acompanhar métricas de uso

## 🔒 Segurança

### Headers
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

### HTTPS
- Use certificados válidos
- Configure HSTS
- Teste segurança

## 📞 Suporte

Para problemas de deploy:
- Verifique logs do servidor
- Teste em ambiente local
- Consulte documentação do serviço
- Abra issue no GitHub