#!/usr/bin/env node

/**
 * Servidor Local Simples para Testar PWA
 * Uso: node server.js
 * Acesse: http://localhost:8000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8000;
const HOST = 'localhost';

// Tipos MIME
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);

  // Segurança: evita path traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Se é um diretório, tenta index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Lê o arquivo
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Arquivo não encontrado\n');
      } else {
        res.writeHead(500);
        res.end('Erro interno do servidor\n');
      }
    } else {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'text/plain';

      // Headers para PWA
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
        'Service-Worker-Allowed': '/',
        'X-Content-Type-Options': 'nosniff',
      });

      res.end(content);
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`
╔════════════════════════════════════════╗
║   🦈 Calculadora PWA - Servidor Local  ║
╠════════════════════════════════════════╣
║ Servidor rodando em:                   ║
║ http://${HOST}:${PORT}                        ║
║                                        ║
║ Dicas:                                 ║
║ • Pressione Ctrl+C para parar          ║
║ • Abra DevTools (F12) para ver logs    ║
║ • Primeiro carregamento cacheará app   ║
║ • Desconecte internet para testar PWA  ║
╚════════════════════════════════════════╝
  `);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`✗ Porta ${PORT} já está em uso!`);
    console.error(`  Tente: node server.js`);
  } else {
    console.error('Erro no servidor:', err);
  }
  process.exit(1);
});
