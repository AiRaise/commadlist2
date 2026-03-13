# Claude Code コマンドリスト

VSCodeのサイドバーからClaude Codeのコマンドをワンクリックでターミナルに送信できる拡張機能です。

## 機能

- サイドバーにClaude Codeコマンド一覧を表示
- コマンドをクリックするとアクティブなターミナルに自動入力
- カテゴリ別タブフィルター（初期・基本・会話・操作・Git・応用・起動・Phase・品質・Agent・Issue）
- リアルタイム検索

## インストール

### 方法1: .vsix ファイルから直接インストール

共有された `.vsix` ファイルを受け取った場合：

1. VSCodeで `Cmd+Shift+P`（Mac）/ `Ctrl+Shift+P`（Windows）
2. 「Extensions: Install from VSIX...」を選択
3. 受け取った `.vsix` ファイルを選択

### 方法2: GitHubからクローンしてビルド

```bash
# 1. リポジトリをクローン
git clone https://github.com/daisukebara/commadlist2.git
cd commadlist2

# 2. .vsix パッケージをビルド
npx @vscode/vsce package --allow-missing-repository

# 3. VSCodeにインストール
code --install-extension claude-code-commands-0.1.0.vsix
```

> `code` コマンドが使えない場合は、VSCodeで `Cmd+Shift+P` → 「Shell Command: Install 'code' command in PATH」を先に実行してください。

## 社内共有手順（開発者向け）

コマンドを追加・修正した後、GitHubにプッシュして共有する手順です。

```bash
# 1. 変更をコミット
git add commands.js src/commands.js src/commandListProvider.js index.html
git commit -m "feat: コマンドを追加・更新"

# 2. GitHubにプッシュ
git push origin main

# 3. .vsix を再ビルド（共有用）
npx @vscode/vsce package --allow-missing-repository

# 4. ビルドした .vsix をSlack等で共有、または受け取る側がGitHubからクローンしてビルド
```

### 受け取る側の更新手順

```bash
# 最新を取得してビルド
cd commadlist2
git pull origin main
npx @vscode/vsce package --allow-missing-repository
code --install-extension claude-code-commands-0.1.0.vsix --force
```

> インストール後、VSCodeで `Cmd+Shift+P` → 「Developer: Reload Window」で反映されます。

## 使い方

1. サイドバーのターミナルアイコンをクリック
2. コマンド一覧が表示される
3. 使いたいコマンドの「RUN」ボタンをクリック
4. アクティブなターミナルにコマンドが自動入力される

## コマンドカテゴリ

| カテゴリ | 内容 |
|---------|------|
| 初期セットアップ | ccagi-sdk init |
| 基本 | 起動・終了・ヘルプ |
| 会話 | 履歴管理・会話再開 |
| 操作 | Vimモード・権限設定 |
| Git | コミット・PR・レビュー |
| 応用 | CLAUDE.md・モデル変更・MCP |
| 起動オプション | 高速モード・パイプ入力 |
| Phase実行 | 要件定義〜デプロイの開発フロー |
| 品質 | レビュー・セキュリティ・モック検出 |
| Agent | AIエージェント呼び出し |
| Issue・PR | Issue起票・PR作成・Git同期 |

## 必要環境

- VS Code 1.74.0 以上
- Claude Code CLI がインストール済みであること
