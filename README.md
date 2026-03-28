# Calculadora Científica - Oceano Profundo 🦈🐙

Uma calculadora científica PWA (Progressive Web App) em tema oceânico com interface moderna e funcionalidades avançadas.

## ✨ Características

- **Funções Científicas**: sin, cos, tan, log, ln, raiz quadrada
- **Constantes Matemáticas**: π (pi) e e (número de Euler)
- **Tema Oceano Profundo**: Design subaquático com gradientes azul/ciano
- **Progressive Web App (PWA)**:
  - ✅ Funciona offline
  - ✅ Instalável em dispositivos
  - ✅ Sem dependências externas
  - ✅ Caching inteligente
  - ✅ Suporte a iOS e Android

## 🚀 Como Usar

### No Navegador

1. Simplesmente abra o arquivo `index.html` em seu navegador
2. Ou acesse via servidor local (recomendado para PWA)

### Instalando como PWA

**Desktop (Chrome, Edge, Firefox):**
- Abra a calculadora no navegador
- Clique no ícone de instalação (geralmente no canto superior direito)
- Selecione "Instalar" ou "Adicionar ao menu"

**Mobile (Android):**
- Abra a calculadora no Chrome ou navegador compatível
- Toque no menu (três pontos)
- Selecione "Instalar aplicativo" ou "Adicionar à tela inicial"

**iOS (Safari):**
- Abra a calculadora no Safari
- Toque em "Compartilhar"
- Selecione "Adicionar à Tela Inicial"
- Confirme o nome (irá aparecer como "Calc Lunar")

### Usando Localmente com Service Worker

Para testar os recursos PWA com Service Worker completo, é recomendado usar um servidor:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (se tiver http-server instalado)
npx http-server

# Com Ruby
ruby -run -ehttpd . -p8000
```

Então acesse: `http://localhost:8000`

## 📁 Estrutura do Projeto

```
├── index.html          # Arquivo HTML principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript da calculadora
├── manifest.json       # Manifest PWA (metadados)
├── service-worker.js   # Service Worker (offline support)
└── README.md           # Este arquivo
```

## 🔧 Offline

A calculadora funciona completamente offline graças ao Service Worker:
- Todos os recursos são cacheados na primeira visita
- Você pode usar a calculadora mesmo sem conexão
- Atualizações automáticas quando conectado à internet

## 🎨 Funcionalidades da Calculadora

### Operações Básicas
- Adição (+), Subtração (−), Multiplicação (×), Divisão (÷)
- Porcentagem (%)
- Alternar sinal (±)

### Funções Científicas
- **Trigonométricas**: sin, cos, tan
- **Logarítmicas**: log (base 10), ln (natural)
- **Raiz Quadrada**: √
- **Potência**: ^ (expoente)

### Constantes
- π (pi) = 3.14159...
- e (Euler) = 2.71828...

### Funcionalidades UI
- Display de alta legibilidade
- Tema escuro noturno
- Tema "Oceano Profundo" com emojis oceânicos
- Design responsivo

## 🌐 Compatibilidade

- ✅ Chrome/Chromium (versão 40+)
- ✅ Firefox (versão 40+)
- ✅ Edge (versão 79+)
- ✅ Safari (iOS 11.3+)
- ✅ Opera (versão 27+)

## 📱 Requisitos de PWA

- HTTPS (em produção) - HTTP é permitido em localhost
- Manifest.json válido
- Service Worker funcional
- Ícone (mínimo 192x192px)

## 💡 Como Funciona a PWA

1. **Service Worker**: Intercepta requisições e fornece dados em cache quando offline
2. **Manifest.json**: Define metadados, ícones e modo de exibição
3. **Cache First Strategy**: Tenta usar cache local, depois tenta rede
4. **Install Prompt**: Navegadores modernos oferecem instalação automática

## 🐛 Troubleshooting

**PWA não instala?**
- Certifique-se de estar usando HTTPS (em produção) ou localhost
- Abra o DevTools (F12) e verifique console para erros
- Chrome requer Service Worker válido e registrado

**Offline não funciona?**
- Verifique se o Service Worker foi registrado (console), deve constar "✓ Service Worker registrado"
- Recarregue a página 2-3 vezes para garantir cache completo
- Desconecte a internet e tente novamente

**Ícones não aparecem?**
- Limpe o cache do navegador e do Service Worker
- Vá em DevTools > Storage > Cache Storage e delete o cache
- Recarregue a página

## 📝 Autores

Desenvolvido por Eduardo Jordão

## 📄 Licença

Livre para uso pessoal e educacional.