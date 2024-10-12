![image](https://github.com/user-attachments/assets/2f64a179-8b75-4a39-8590-f97a226b120f)
https://dvalenascimento.github.io/migraCheck.project/

# MigraCheck - Avaliação de Enxaqueca

## Descrição
O **MigraCheck** é um formulário interativo desenvolvido para ajudar os usuários a monitorar e avaliar a intensidade e os sintomas da enxaqueca. O objetivo é proporcionar uma maneira prática de registrar informações sobre as crises de dor de cabeça, gerar relatórios em PDF e entender os fatores que podem estar contribuindo para essas crises.

## Funcionalidades
- **Formulário de Avaliação**: Permite que os usuários respondam perguntas sobre a intensidade da dor, duração e sintomas associados à enxaqueca.
- **Data e Hora Automática**: Os campos de data e hora são preenchidos automaticamente, permitindo o registro preciso das informações.
- **Geração de PDF**: Os dados preenchidos podem ser exportados como um arquivo PDF para fácil compartilhamento ou registro.
- **Modal Informativo**: Um modal com informações detalhadas sobre enxaqueca, tipos, causas e possíveis tratamentos, disponível ao clicar no botão de informações.
- **Estilização Responsiva**: Interface responsiva, acessível em dispositivos móveis e desktop.

## Tecnologias Utilizadas
- **HTML5**: Estrutura principal da aplicação.
- **CSS3**: Estilos customizados para tornar a interface moderna e intuitiva.
- **JavaScript**: Lógica de interação, validação de dados e controle da interface.
- **Biblioteca html2pdf.js**: Usada para gerar arquivos PDF a partir do conteúdo da página.

## Como Usar
1. **Preencher o Formulário**: O usuário deve inserir seu nome e responder às perguntas sobre a enxaqueca atual.
2. **Ver o Resultado**: Após preencher o questionário, os resultados podem ser visualizados diretamente na página.
3. **Salvar em PDF**: Após o preenchimento, clique no botão "Salvar em PDF" para gerar um arquivo com os dados.
4. **Informações sobre Enxaqueca**: Clique no botão "?" para abrir o modal com informações sobre enxaqueca, fatores de risco e opções de tratamento.

## Instalação
1. Clone o repositório do projeto:
   ```bash
   git clone https://github.com/seu-usuario/migracheck.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd migracheck
   ```
3. Abra o arquivo `index.html` em um navegador.

## Estrutura de Arquivos
```bash
migracheck/
│
├── css/
│   └── styles.css        # Estilos personalizados do projeto
│
├── img/
│   └── migracheck_logo.jpg  # Logomarca do MigraCheck
│
├── js/
│   └── script.js         # Funções JavaScript para interatividade
│
└── index.html            # Página principal do projeto
```

## Melhorias Futuras
- **Histórico de Registros**: Implementação de um banco de dados para armazenar históricos de crises.
- **Alertas Customizados**: Notificações personalizadas para lembrar os usuários de preencher o questionário em intervalos regulares.
- **Integração com Aplicativos de Saúde**: Exportar os dados para aplicativos de saúde ou sistemas médicos.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* ou enviar *pull requests* para melhorias no projeto.

---

Desenvolvido por Diego Vale do Nascimento.
