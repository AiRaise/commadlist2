const vscode = require('vscode');
const CommandListProvider = require('./src/commandListProvider');

function activate(context) {
  const provider = new CommandListProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      'claudeCodeCommands.commandList',
      provider
    )
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
