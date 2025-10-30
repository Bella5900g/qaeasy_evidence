/**
 * QAEasy Evidence - Coletor Profissional de Evidências de Testes
 * Sistema completo para coleta, classificação e geração de relatórios de evidências de QA
 *
 * @author Isabella Barbosa - Engenheira de QA Sênior
 * @version 1.0.0
 */

class QAEasyEvidence {
    constructor() {
        this.sessaoAtiva = false;
        this.timerSessao = null;
        this.tempoInicioSessao = null;
        this.evidencias = [];
        this.configuracaoAtual = null;
        this.logsConsole = [];
        this.errosJavaScript = [];

        this.inicializar();
    }

    /**
     * Inicializa a aplicação e configura event listeners
     */
    inicializar() {
        this.carregarDadosSalvos();
        this.configurarEventListeners();
        this.inicializarCapturaLogs();
        this.atualizarDashboard();
        this.aplicarTemplatesPredefinidos();

        console.log('🔍 QAEasy Evidence inicializado com sucesso!');
    }

    /**
     * Configura todos os event listeners da aplicação
     */
    configurarEventListeners() {
        // Botão de iniciar/pausar sessão
        document.getElementById('btnIniciarSessao').addEventListener('click', () => {
            this.toggleSessao();
        });

        // Botão de captura de screenshot
        document.getElementById('btnCapturarScreenshot').addEventListener('click', () => {
            this.capturarScreenshot();
        });

        // Botões de classificação de evidência
        document.getElementById('btnSalvarEvidencia').addEventListener('click', () => {
            this.salvarEvidencia();
        });

        document.getElementById('btnCancelarEvidencia').addEventListener('click', () => {
            this.cancelarEvidencia();
        });

        // Botões de configuração
        document.getElementById('btnSalvarConfiguracao').addEventListener('click', () => {
            this.salvarConfiguracao();
        });

        document.getElementById('btnLimparConfiguracao').addEventListener('click', () => {
            this.limparConfiguracao();
        });

        // Botões de geração de relatórios
        document.getElementById('btnGerarPDF').addEventListener('click', () => {
            this.gerarRelatorio('pdf');
        });

        document.getElementById('btnGerarMarkdown').addEventListener('click', () => {
            this.gerarRelatorio('markdown');
        });

        document.getElementById('btnGerarJSON').addEventListener('click', () => {
            this.gerarRelatorio('json');
        });

        document.getElementById('btnGerarTexto').addEventListener('click', () => {
            this.gerarRelatorio('texto');
        });

        // Filtros da gallery
        document.getElementById('filtroTipo').addEventListener('change', () => {
            this.filtrarEvidencias();
        });

        document.getElementById('buscaEvidencias').addEventListener('input', () => {
            this.filtrarEvidencias();
        });

        // Validação em tempo real dos campos obrigatórios
        document.getElementById('projeto').addEventListener('change', this.validarConfiguracao.bind(this));
        document.getElementById('cenario').addEventListener('input', this.validarConfiguracao.bind(this));
    }

    /**
     * Inicia ou pausa a sessão de teste
     */
    toggleSessao() {
        const btnSessao = document.getElementById('btnIniciarSessao');
        const statusIndicador = document.getElementById('statusIndicador');

        if (!this.sessaoAtiva) {
            this.iniciarSessao();
            btnSessao.textContent = 'Pausar Sessão';
            statusIndicador.textContent = '🟢 Sessão Ativa';
            statusIndicador.style.color = '#10b981';
        } else {
            this.pausarSessao();
            btnSessao.textContent = 'Iniciar Sessão';
            statusIndicador.textContent = '⏸️ Sessão Pausada';
            statusIndicador.style.color = '#64748b';
        }
    }

    /**
     * Inicia uma nova sessão de teste
     */
    iniciarSessao() {
        this.sessaoAtiva = true;
        this.tempoInicioSessao = new Date();
        this.iniciarTimer();

        // Salvar configuração atual se não estiver salva
        if (!this.configuracaoAtual) {
            this.salvarConfiguracao();
        }

        this.mostrarNotificacao('Sessão de teste iniciada!', 'sucesso');
    }

    /**
     * Pausa a sessão atual
     */
    pausarSessao() {
        this.sessaoAtiva = false;
        this.pararTimer();
        this.mostrarNotificacao('Sessão pausada!', 'info');
    }

    /**
     * Inicia o timer da sessão
     */
    iniciarTimer() {
        this.timerSessao = setInterval(() => {
            this.atualizarTimer();
        }, 1000);
    }

    /**
     * Para o timer da sessão
     */
    pararTimer() {
        if (this.timerSessao) {
            clearInterval(this.timerSessao);
            this.timerSessao = null;
        }
    }

    /**
     * Atualiza o display do timer
     */
    atualizarTimer() {
        if (!this.tempoInicioSessao) return;

        const agora = new Date();
        const diferenca = agora - this.tempoInicioSessao;
        const segundos = Math.floor(diferenca / 1000);
        const minutos = Math.floor(segundos / 60);
        const horas = Math.floor(minutos / 60);

        const tempoFormatado = `${horas.toString().padStart(2, '0')}:${(minutos % 60).toString().padStart(2, '0')}:${(segundos % 60).toString().padStart(2, '0')}`;

        document.getElementById('timerSessao').textContent = tempoFormatado;
        document.getElementById('tempoSessao').textContent = tempoFormatado;
    }

    /**
     * Captura screenshot da aba atual
     */
    async capturarScreenshot() {
        if (!this.sessaoAtiva) {
            this.mostrarNotificacao('Inicie uma sessão antes de capturar evidências!', 'erro');
            return;
        }

        if (!this.configuracaoAtual) {
            this.mostrarNotificacao('Configure o contexto do teste primeiro!', 'erro');
            return;
        }

        try {
            this.mostrarLoading('Capturando screenshot...');

            // Função para limpar todas as cores problemáticas
            const limparCoresProblematicas = (element) => {
                const computedStyle = window.getComputedStyle(element);
                const colorProperties = [
                    'color', 'backgroundColor', 'borderColor',
                    'borderTopColor', 'borderRightColor',
                    'borderBottomColor', 'borderLeftColor',
                    'outlineColor', 'textDecorationColor'
                ];

                colorProperties.forEach(prop => {
                    const value = computedStyle.getPropertyValue(prop);
                    if (value && (value.includes('oklch') || value.includes('lch') || value.includes('hsl'))) {
                        // Converter para RGB simples
                        const tempDiv = document.createElement('div');
                        tempDiv.style.color = value;
                        document.body.appendChild(tempDiv);
                        const rgbValue = window.getComputedStyle(tempDiv).color;
                        document.body.removeChild(tempDiv);
                        element.style.setProperty(prop, rgbValue, 'important');
                    }
                });
            };

            // Limpar cores problemáticas em todos os elementos antes da captura
            const allElements = document.querySelectorAll('*');
            allElements.forEach(limparCoresProblematicas);

            // Capturar screenshot usando html2canvas com configurações mais simples
            const canvas = await html2canvas(document.body, {
                useCORS: false,
                allowTaint: false,
                scale: 0.8,
                logging: false,
                backgroundColor: '#ffffff',
                removeContainer: true,
                foreignObjectRendering: false,
                ignoreElements: (element) => {
                    // Ignorar elementos que podem causar problemas
                    return element.tagName === 'SCRIPT' ||
                           element.tagName === 'STYLE' ||
                           element.classList.contains('no-capture');
                }
            });

            const screenshotData = canvas.toDataURL('image/png');

            // Mostrar formulário de classificação
            this.mostrarFormularioClassificacao(screenshotData);

            this.ocultarLoading();

        } catch (erro) {
            console.error('Erro ao capturar screenshot:', erro);
            this.mostrarNotificacao('Erro ao capturar screenshot. Tente novamente.', 'erro');
            this.ocultarLoading();
        }
    }

    /**
     * Mostra o formulário de classificação da evidência
     */
    mostrarFormularioClassificacao(screenshotData) {
        const formulario = document.getElementById('formularioClassificacao');
        formulario.style.display = 'block';
        formulario.scrollIntoView({ behavior: 'smooth' });

        // Armazenar dados do screenshot temporariamente
        this.screenshotTemporario = screenshotData;

        // Limpar formulário
        document.querySelectorAll('input[name="tipoEvidencia"]').forEach(input => {
            input.checked = false;
        });
        document.getElementById('severidade').value = 'baixa';
        document.getElementById('descricaoEvidencia').value = '';
    }

    /**
     * Salva a evidência classificada
     */
    salvarEvidencia() {
        const tipoEvidencia = document.querySelector('input[name="tipoEvidencia"]:checked');
        const descricao = document.getElementById('descricaoEvidencia').value.trim();

        if (!tipoEvidencia) {
            this.mostrarNotificacao('Selecione o tipo de evidência!', 'erro');
            return;
        }

        if (!descricao) {
            this.mostrarNotificacao('Descreva a evidência!', 'erro');
            return;
        }

        const evidencia = {
            id: this.gerarIdUnico(),
            tipo: tipoEvidencia.value,
            severidade: document.getElementById('severidade').value,
            descricao: descricao,
            timestamp: new Date().toISOString(),
            screenshot: this.screenshotTemporario,
            logs: [...this.logsConsole],
            erros: [...this.errosJavaScript],
            metadados: this.capturarMetadados(),
            tags: this.configuracaoAtual.tags || []
        };

        this.evidencias.push(evidencia);
        this.salvarDados();
        this.atualizarGallery();
        this.atualizarDashboard();
        this.cancelarEvidencia();

        this.mostrarNotificacao('Evidência salva com sucesso!', 'sucesso');
    }

    /**
     * Cancela a classificação da evidência
     */
    cancelarEvidencia() {
        document.getElementById('formularioClassificacao').style.display = 'none';
        this.screenshotTemporario = null;
    }

    /**
     * Salva a configuração do contexto de teste
     */
    salvarConfiguracao() {
        const projeto = document.getElementById('projeto').value;
        const cenario = document.getElementById('cenario').value.trim();
        const template = document.getElementById('template').value;
        const tags = document.getElementById('tags').value.split(',').map(tag => tag.trim()).filter(tag => tag);

        if (!projeto || !cenario) {
            this.mostrarNotificacao('Preencha todos os campos obrigatórios!', 'erro');
            return;
        }

        this.configuracaoAtual = {
            projeto,
            cenario,
            template,
            tags,
            timestamp: new Date().toISOString()
        };

        this.salvarDados();
        this.mostrarNotificacao('Configuração salva!', 'sucesso');
    }

    /**
     * Limpa a configuração atual
     */
    limparConfiguracao() {
        document.getElementById('projeto').value = '';
        document.getElementById('cenario').value = '';
        document.getElementById('template').value = 'smoke-test';
        document.getElementById('tags').value = '';
        this.configuracaoAtual = null;
        this.salvarDados();
        this.mostrarNotificacao('Configuração limpa!', 'info');
    }

    /**
     * Valida a configuração em tempo real
     */
    validarConfiguracao() {
        const projeto = document.getElementById('projeto').value;
        const cenario = document.getElementById('cenario').value.trim();
        const btnSalvar = document.getElementById('btnSalvarConfiguracao');

        btnSalvar.disabled = !projeto || !cenario;
    }

    /**
     * Atualiza a gallery de evidências
     */
    atualizarGallery() {
        const container = document.getElementById('galleryContainer');

        if (this.evidencias.length === 0) {
            container.innerHTML = `
                <div class="placeholder-gallery">
                    <p>📷 Nenhuma evidência capturada ainda</p>
                    <p>Configure o contexto e capture sua primeira evidência!</p>
                </div>
            `;
            return;
        }

        const evidenciasFiltradas = this.filtrarEvidencias();

        container.innerHTML = evidenciasFiltradas.map(evidencia => `
            <div class="evidence-card" data-id="${evidencia.id}">
                <img src="${evidencia.screenshot}" alt="Screenshot da evidência" class="evidence-preview">
                <div class="evidence-content">
                    <div class="evidence-header">
                        <span class="evidence-type">${this.getIconeTipo(evidencia.tipo)}</span>
                        <span class="evidence-timestamp">${this.formatarData(evidencia.timestamp)}</span>
                    </div>
                    <div class="evidence-description">${evidencia.descricao}</div>
                    <div class="evidence-tags">
                        ${evidencia.tags.map(tag => `<span class="evidence-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="evidence-actions">
                        <button class="btn-evidence btn-view" onclick="qaEvidence.visualizarEvidencia('${evidencia.id}')">
                            👁️ Ver
                        </button>
                        <button class="btn-evidence btn-delete" onclick="qaEvidence.excluirEvidencia('${evidencia.id}')">
                            🗑️ Excluir
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    /**
     * Filtra evidências baseado nos filtros ativos
     */
    filtrarEvidencias() {
        const tipoFiltro = document.getElementById('filtroTipo').value;
        const busca = document.getElementById('buscaEvidencias').value.toLowerCase();

        return this.evidencias.filter(evidencia => {
            const matchTipo = tipoFiltro === 'todos' || evidencia.tipo === tipoFiltro;
            const matchBusca = !busca ||
                evidencia.descricao.toLowerCase().includes(busca) ||
                evidencia.tags.some(tag => tag.toLowerCase().includes(busca));

            return matchTipo && matchBusca;
        });
    }

    /**
     * Visualiza uma evidência específica
     */
    visualizarEvidencia(id) {
        const evidencia = this.evidencias.find(e => e.id === id);
        if (!evidencia) return;

        // Criar modal de visualização
        const modal = document.createElement('div');
        modal.className = 'modal-visualizacao';
        modal.innerHTML = `
            <div class="modal-conteudo">
                <div class="modal-header">
                    <h3>Evidência: ${this.getIconeTipo(evidencia.tipo)} ${evidencia.tipo.toUpperCase()}</h3>
                    <button class="btn-fechar" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
                </div>
                <div class="modal-body">
                    <img src="${evidencia.screenshot}" alt="Screenshot" style="max-width: 100%; height: auto;">
                    <div class="detalhes-evidencia">
                        <p><strong>Descrição:</strong> ${evidencia.descricao}</p>
                        <p><strong>Severidade:</strong> ${evidencia.severidade}</p>
                        <p><strong>Data/Hora:</strong> ${this.formatarData(evidencia.timestamp)}</p>
                        <p><strong>Tags:</strong> ${evidencia.tags.join(', ')}</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    /**
     * Exclui uma evidência
     */
    excluirEvidencia(id) {
        if (confirm('Tem certeza que deseja excluir esta evidência?')) {
            this.evidencias = this.evidencias.filter(e => e.id !== id);
            this.salvarDados();
            this.atualizarGallery();
            this.atualizarDashboard();
            this.mostrarNotificacao('Evidência excluída!', 'info');
        }
    }

    /**
     * Gera relatório no formato especificado
     */
    async gerarRelatorio(formato) {
        if (this.evidencias.length === 0) {
            this.mostrarNotificacao('Nenhuma evidência para gerar relatório!', 'erro');
            return;
        }

        try {
            this.mostrarLoading('Gerando relatório...');

            let conteudo;
            let nomeArquivo;

            switch (formato) {
                case 'pdf':
                    conteudo = await this.gerarPDF();
                    nomeArquivo = `relatorio-qa-${this.formatarDataArquivo()}.pdf`;
                    break;
                case 'markdown':
                    conteudo = this.gerarMarkdown();
                    nomeArquivo = `relatorio-qa-${this.formatarDataArquivo()}.md`;
                    break;
                case 'json':
                    conteudo = this.gerarJSON();
                    nomeArquivo = `relatorio-qa-${this.formatarDataArquivo()}.json`;
                    break;
                case 'texto':
                    conteudo = this.gerarTexto();
                    nomeArquivo = `relatorio-qa-${this.formatarDataArquivo()}.txt`;
                    break;
            }

            this.downloadArquivo(conteudo, nomeArquivo, formato);
            this.ocultarLoading();
            this.mostrarNotificacao('Relatório gerado com sucesso!', 'sucesso');

        } catch (erro) {
            console.error('Erro ao gerar relatório:', erro);
            this.mostrarNotificacao('Erro ao gerar relatório!', 'erro');
            this.ocultarLoading();
        }
    }

    /**
     * Gera relatório em PDF
     */
    async gerarPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Cabeçalho
        doc.setFontSize(20);
        doc.text('Relatório de Evidências de Teste', 20, 30);

        doc.setFontSize(12);
        doc.text(`Projeto: ${this.configuracaoAtual?.projeto || 'Não definido'}`, 20, 50);
        doc.text(`Cenário: ${this.configuracaoAtual?.cenario || 'Não definido'}`, 20, 60);
        doc.text(`Data: ${this.formatarData(new Date())}`, 20, 70);

        let y = 90;

        this.evidencias.forEach((evidencia, index) => {
            if (y > 250) {
                doc.addPage();
                y = 20;
            }

            doc.setFontSize(14);
            doc.text(`${index + 1}. ${this.getIconeTipo(evidencia.tipo)} ${evidencia.tipo.toUpperCase()}`, 20, y);

            doc.setFontSize(10);
            doc.text(`Descrição: ${evidencia.descricao}`, 20, y + 10);
            doc.text(`Severidade: ${evidencia.severidade}`, 20, y + 20);
            doc.text(`Data/Hora: ${this.formatarData(evidencia.timestamp)}`, 20, y + 30);

            y += 50;
        });

        return doc.output('blob');
    }

    /**
     * Gera relatório em Markdown
     */
    gerarMarkdown() {
        let markdown = `# Relatório de Evidências de Teste\n\n`;
        markdown += `**Projeto:** ${this.configuracaoAtual?.projeto || 'Não definido'}\n`;
        markdown += `**Cenário:** ${this.configuracaoAtual?.cenario || 'Não definido'}\n`;
        markdown += `**Data:** ${this.formatarData(new Date())}\n\n`;
        markdown += `## Resumo\n\n`;
        markdown += `- Total de evidências: ${this.evidencias.length}\n`;
        markdown += `- Bugs encontrados: ${this.evidencias.filter(e => e.tipo === 'bug').length}\n`;
        markdown += `- Testes que passaram: ${this.evidencias.filter(e => e.tipo === 'pass').length}\n\n`;
        markdown += `## Evidências\n\n`;

        this.evidencias.forEach((evidencia, index) => {
            markdown += `### ${index + 1}. ${this.getIconeTipo(evidencia.tipo)} ${evidencia.tipo.toUpperCase()}\n\n`;
            markdown += `**Descrição:** ${evidencia.descricao}\n\n`;
            markdown += `**Severidade:** ${evidencia.severidade}\n\n`;
            markdown += `**Data/Hora:** ${this.formatarData(evidencia.timestamp)}\n\n`;
            markdown += `**Tags:** ${evidencia.tags.join(', ')}\n\n`;
            markdown += `---\n\n`;
        });

        return markdown;
    }

    /**
     * Gera relatório em JSON
     */
    gerarJSON() {
        const relatorio = {
            metadata: {
                projeto: this.configuracaoAtual?.projeto || 'Não definido',
                cenario: this.configuracaoAtual?.cenario || 'Não definido',
                dataGeracao: new Date().toISOString(),
                totalEvidencias: this.evidencias.length
            },
            evidencias: this.evidencias
        };

        return JSON.stringify(relatorio, null, 2);
    }

    /**
     * Gera relatório em texto simples
     */
    gerarTexto() {
        let texto = `RELATÓRIO DE EVIDÊNCIAS DE TESTE\n`;
        texto += `=====================================\n\n`;
        texto += `Projeto: ${this.configuracaoAtual?.projeto || 'Não definido'}\n`;
        texto += `Cenário: ${this.configuracaoAtual?.cenario || 'Não definido'}\n`;
        texto += `Data: ${this.formatarData(new Date())}\n\n`;
        texto += `RESUMO\n`;
        texto += `------\n`;
        texto += `Total de evidências: ${this.evidencias.length}\n`;
        texto += `Bugs encontrados: ${this.evidencias.filter(e => e.tipo === 'bug').length}\n`;
        texto += `Testes que passaram: ${this.evidencias.filter(e => e.tipo === 'pass').length}\n\n`;
        texto += `EVIDÊNCIAS\n`;
        texto += `----------\n\n`;

        this.evidencias.forEach((evidencia, index) => {
            texto += `${index + 1}. ${this.getIconeTipo(evidencia.tipo)} ${evidencia.tipo.toUpperCase()}\n`;
            texto += `   Descrição: ${evidencia.descricao}\n`;
            texto += `   Severidade: ${evidencia.severidade}\n`;
            texto += `   Data/Hora: ${this.formatarData(evidencia.timestamp)}\n`;
            texto += `   Tags: ${evidencia.tags.join(', ')}\n\n`;
        });

        return texto;
    }

    /**
     * Atualiza o dashboard de métricas
     */
    atualizarDashboard() {
        const totalEvidencias = this.evidencias.length;
        const totalBugs = this.evidencias.filter(e => e.tipo === 'bug').length;
        const totalPassou = this.evidencias.filter(e => e.tipo === 'pass').length;

        document.getElementById('totalEvidencias').textContent = totalEvidencias;
        document.getElementById('totalBugs').textContent = totalBugs;
        document.getElementById('totalPassou').textContent = totalPassou;
    }

    /**
     * Inicializa captura automática de logs do console
     */
    inicializarCapturaLogs() {
        const consoleOriginal = {
            log: console.log,
            error: console.error,
            warn: console.warn
        };

        console.log = (...args) => {
            this.logsConsole.push({
                tipo: 'log',
                mensagem: args.join(' '),
                timestamp: new Date().toISOString()
            });
            consoleOriginal.log(...args);
        };

        console.error = (...args) => {
            this.errosJavaScript.push({
                tipo: 'error',
                mensagem: args.join(' '),
                timestamp: new Date().toISOString()
            });
            consoleOriginal.error(...args);
        };

        console.warn = (...args) => {
            this.logsConsole.push({
                tipo: 'warn',
                mensagem: args.join(' '),
                timestamp: new Date().toISOString()
            });
            consoleOriginal.warn(...args);
        };

        // Capturar erros JavaScript não tratados
        window.addEventListener('error', (event) => {
            this.errosJavaScript.push({
                tipo: 'uncaught',
                mensagem: event.error?.message || 'Erro não identificado',
                arquivo: event.filename,
                linha: event.lineno,
                timestamp: new Date().toISOString()
            });
        });
    }

    /**
     * Captura metadados da página atual
     */
    capturarMetadados() {
        return {
            url: window.location.href,
            titulo: document.title,
            userAgent: navigator.userAgent,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            timestamp: new Date().toISOString()
        };
    }

    /**
     * Aplica templates pré-definidos
     */
    aplicarTemplatesPredefinidos() {
        const templates = {
            'smoke-test': {
                tags: ['smoke', 'basico', 'funcionalidade-principal'],
                descricao: 'Teste básico das funcionalidades principais'
            },
            'regressivo': {
                tags: ['regressivo', 'funcionalidades-existentes'],
                descricao: 'Teste de regressão das funcionalidades existentes'
            },
            'nova-funcionalidade': {
                tags: ['nova-funcionalidade', 'desenvolvimento'],
                descricao: 'Teste de nova funcionalidade em desenvolvimento'
            },
            'bug-fix': {
                tags: ['correcao', 'bug-fix'],
                descricao: 'Teste de correção de bug específico'
            },
            'performance': {
                tags: ['performance', 'velocidade', 'otimizacao'],
                descricao: 'Teste de performance e otimização'
            },
            'usabilidade': {
                tags: ['usabilidade', 'ux', 'interface'],
                descricao: 'Teste de usabilidade e experiência do usuário'
            }
        };

        // Aplicar template quando selecionado
        document.getElementById('template').addEventListener('change', (e) => {
            const template = templates[e.target.value];
            if (template) {
                document.getElementById('tags').value = template.tags.join(', ');
            }
        });
    }

    /**
     * Salva dados no localStorage
     */
    salvarDados() {
        const dados = {
            evidencias: this.evidencias,
            configuracaoAtual: this.configuracaoAtual,
            sessaoAtiva: this.sessaoAtiva,
            tempoInicioSessao: this.tempoInicioSessao
        };

        localStorage.setItem('qaEasyEvidence', JSON.stringify(dados));
    }

    /**
     * Carrega dados salvos do localStorage
     */
    carregarDadosSalvos() {
        try {
            const dados = localStorage.getItem('qaEasyEvidence');
            if (dados) {
                const parsed = JSON.parse(dados);
                this.evidencias = parsed.evidencias || [];
                this.configuracaoAtual = parsed.configuracaoAtual;
                this.sessaoAtiva = parsed.sessaoAtiva || false;
                this.tempoInicioSessao = parsed.tempoInicioSessao ? new Date(parsed.tempoInicioSessao) : null;

                if (this.sessaoAtiva && this.tempoInicioSessao) {
                    this.iniciarTimer();
                    document.getElementById('btnIniciarSessao').textContent = 'Pausar Sessão';
                    document.getElementById('statusIndicador').textContent = '🟢 Sessão Ativa';
                    document.getElementById('statusIndicador').style.color = '#10b981';
                }
            }
        } catch (erro) {
            console.error('Erro ao carregar dados salvos:', erro);
        }
    }

    /**
     * Utilitários
     */
    gerarIdUnico() {
        return 'evidencia_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    getIconeTipo(tipo) {
        const icones = {
            'pass': '✅',
            'bug': '🔴',
            'improvement': '🟡',
            'info': '🔵'
        };
        return icones[tipo] || '❓';
    }

    formatarData(data) {
        return new Date(data).toLocaleString('pt-BR');
    }

    formatarDataArquivo() {
        return new Date().toISOString().split('T')[0];
    }

    mostrarNotificacao(mensagem, tipo) {
        // Implementação simples de notificação
        const notificacao = document.createElement('div');
        notificacao.className = `notificacao notificacao-${tipo}`;
        notificacao.textContent = mensagem;
        notificacao.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
        `;

        const cores = {
            'sucesso': '#10b981',
            'erro': '#ef4444',
            'info': '#3b82f6',
            'aviso': '#f59e0b'
        };

        notificacao.style.backgroundColor = cores[tipo] || cores.info;

        document.body.appendChild(notificacao);

        setTimeout(() => {
            notificacao.remove();
        }, 3000);
    }

    mostrarLoading(mensagem) {
        const loading = document.createElement('div');
        loading.id = 'loadingOverlay';
        loading.innerHTML = `
            <div class="loading-conteudo">
                <div class="spinner"></div>
                <p>${mensagem}</p>
            </div>
        `;
        loading.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;

        document.body.appendChild(loading);
    }

    ocultarLoading() {
        const loading = document.getElementById('loadingOverlay');
        if (loading) {
            loading.remove();
        }
    }

    downloadArquivo(conteudo, nomeArquivo, tipo) {
        let blob;

        if (tipo === 'pdf') {
            blob = conteudo;
        } else {
            blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = nomeArquivo;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}

// Inicializar aplicação quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.qaEvidence = new QAEasyEvidence();
});

// Adicionar estilos para notificações e modais
const estilosAdicionais = `
    .notificacao {
        animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .modal-visualizacao {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    }

    .modal-conteudo {
        background: white;
        border-radius: 10px;
        max-width: 90%;
        max-height: 90%;
        overflow: auto;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #e2e8f0;
    }

    .btn-fechar {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }

    .modal-body {
        padding: 20px;
    }

    .detalhes-evidencia {
        margin-top: 20px;
        padding: 15px;
        background: #f8fafc;
        border-radius: 5px;
    }

    .loading-conteudo {
        text-align: center;
        color: white;
    }

    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 15px;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = estilosAdicionais;
document.head.appendChild(styleSheet);
