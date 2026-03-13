const vscode = require('vscode');
const path = require('path');

class CommandListProvider {
  constructor(extensionUri) {
    this._extensionUri = extensionUri;
  }

  resolveWebviewView(webviewView, context, token) {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.joinPath(this._extensionUri, 'media'),
        vscode.Uri.joinPath(this._extensionUri, 'src'),
      ],
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage((message) => {
      if (message.type === 'sendToTerminal') {
        const terminal =
          vscode.window.activeTerminal ||
          vscode.window.createTerminal('Claude Code');
        terminal.show(true);
        terminal.sendText(message.command);
      }
    });
  }

  _getHtmlForWebview(webview) {
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'style.css')
    );
    const appUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'app.js')
    );
    const commandsUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'src', 'commands.js')
    );
    const nonce = getNonce();

    return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'none';
             style-src ${webview.cspSource} 'unsafe-inline' https://fonts.googleapis.com;
             script-src 'nonce-${nonce}';
             font-src https://fonts.gstatic.com;">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${styleUri}">
</head>
<body>
  <div class="bg-blobs">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>

  <header>
    <div class="logo-area">
      <span class="logo-icon">&#9889;</span>
      <h1>Claude Code<br><span class="title-accent">コマンドリスト</span></h1>
    </div>
    <p class="subtitle">タップでターミナルに自動入力!</p>
    <div class="search-bar">
      <span class="search-icon">&#128269;</span>
      <input type="text" id="search" placeholder="コマンドを検索..." autocomplete="off">
    </div>
    <nav class="category-tabs" id="tabs">
      <button class="tab active" data-category="all">&#127912; ALL</button>
      <button class="tab" data-category="setup">&#128296; 初期</button>
      <button class="tab" data-category="basic">&#128640; 基本</button>
      <button class="tab" data-category="conversation">&#128172; 会話</button>
      <button class="tab" data-category="file">&#128736; 操作</button>
      <button class="tab" data-category="git">&#128038; Git</button>
      <button class="tab" data-category="customize">&#9881; 応用</button>
      <button class="tab" data-category="options">&#9889; 起動</button>
      <button class="tab" data-category="phase">&#127919; Phase</button>
      <button class="tab" data-category="quality">&#128737; 品質</button>
      <button class="tab" data-category="agent">&#129302; Agent</button>
      <button class="tab" data-category="issue">&#128203; Issue</button>
    </nav>
  </header>

  <main id="commands-container"></main>

  <div class="toast" id="toast">&#9889; ターミナルに送信しました!</div>

  <script nonce="${nonce}" src="${commandsUri}"></script>
  <script nonce="${nonce}" src="${appUri}"></script>
</body>
</html>`;
  }
}

function getNonce() {
  let text = '';
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}

module.exports = CommandListProvider;
