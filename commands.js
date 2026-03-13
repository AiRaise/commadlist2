const COMMANDS = [
  {
    category: "setup",
    title: "Step 0: 初期セットアップ",
    emoji: "\u{1F528}",
    color: "#f39c12",
    description: "最初に1回だけ実行! CCAGIを使えるようにする",
    items: [
      {
        command: "ccagi-sdk init",
        description: "CCAGIを初期化する",
        example: "リポジトリにCCAGI環境をセットアップ",
      },
    ],
  },
  {
    category: "basic",
    title: "Step 1: 基本操作",
    emoji: "\u{1F680}",
    color: "#ff6b6b",
    description: "まずはここから! 起動と終了を覚えよう",
    items: [
      {
        command: "claude",
        description: "Claude Codeを起動する",
        example: "ターミナルで claude と入力するだけ",
      },
      {
        command: 'claude "質問内容"',
        description: "質問を直接渡して起動する",
        example: 'claude "このコードを説明して"',
      },
      {
        command: "/help",
        description: "ヘルプを表示する",
        example: "使い方がわからないときに",
      },
      {
        command: "/quit",
        description: "Claude Codeを終了する",
        example: "/exit でも終了できる",
      },
    ],
  },
  {
    category: "conversation",
    title: "Step 2: 会話の管理",
    emoji: "\u{1F4AC}",
    color: "#ffa502",
    description: "会話の続き方やリセットを覚えよう",
    items: [
      {
        command: "/clear",
        description: "会話履歴をクリアする",
        example: "新しい話題を始めたいときに",
      },
      {
        command: "/compact",
        description: "会話を要約して圧縮する",
        example: "会話が長くなってきたら",
      },
      {
        command: "claude --continue",
        description: "最新の会話を続けて起動する",
        example: "前回の続きからすぐ再開",
      },
      {
        command: "claude --resume",
        description: "過去の会話を選んで再開する",
        example: "会話の一覧から選べる",
      },
    ],
  },
  {
    category: "file",
    title: "Step 3: ファイル操作・コード作成",
    emoji: "\u{1F6E0}",
    color: "#1dd1a1",
    description: "実際の作業で使う便利機能",
    items: [
      {
        command: "/vim",
        description: "Vimモードに切り替える（複数行入力）",
        example: "長い指示を書きたいときに",
      },
      {
        command: "Shift+Tab",
        description: "自動承認モードの切り替え",
        example: "確認なしで自動実行",
      },
      {
        command: "/allowed-tools",
        description: "自動許可するツールの設定",
        example: "特定の操作を自動で許可",
      },
      {
        command: "/permissions",
        description: "権限設定を確認・変更する",
        example: "許可されている操作を確認",
      },
    ],
  },
  {
    category: "git",
    title: "Step 4: Git・プロジェクト管理",
    emoji: "\u{1F426}",
    color: "#54a0ff",
    description: "コードの管理やチーム作業で使う",
    items: [
      {
        command: "/commit",
        description: "変更をgitコミットする",
        example: "自動で要約してコミット",
      },
      {
        command: "/pr-comments",
        description: "PRのコメントを確認する",
        example: "PRのフィードバックを確認",
      },
      {
        command: "/review",
        description: "コードレビューを依頼する",
        example: "Claudeにレビューを頼む",
      },
      {
        command: 'claude -p "指示"',
        description: "非対話モードで1回だけ実行",
        example: 'claude -p "テストを実行して"',
      },
    ],
  },
  {
    category: "customize",
    title: "Step 5: カスタマイズ・応用",
    emoji: "\u2699\uFE0F",
    color: "#a29bfe",
    description: "慣れてきたら設定を自分好みに",
    items: [
      {
        command: "/init",
        description: "CLAUDE.mdファイルを作成する",
        example: "プロジェクトのルールを設定",
      },
      {
        command: "/config",
        description: "設定を変更する",
        example: "各種設定をカスタマイズ",
      },
      {
        command: "/model",
        description: "使用モデルを変更する",
        example: "Opus / Sonnet など切り替え",
      },
      {
        command: "/cost",
        description: "セッションのコストを表示",
        example: "使用量を確認",
      },
      {
        command: "/doctor",
        description: "セットアップの問題を診断",
        example: "トラブルシュート",
      },
      {
        command: "/mcp",
        description: "MCP（外部ツール連携）の設定確認",
        example: "Slack, GitHub等との接続",
      },
    ],
  },
  {
    category: "options",
    title: "Step 6: 便利な起動オプション",
    emoji: "\u26A1",
    color: "#fd79a8",
    description: "知っておくと便利なオプション",
    items: [
      {
        command: "claude --fast",
        description: "高速モードで起動する",
        example: "同じモデルで高速出力",
      },
      {
        command: "claude --version",
        description: "バージョンを確認する",
        example: "現在のバージョンをチェック",
      },
      {
        command: "claude update",
        description: "最新版に更新する",
        example: "新機能を使いたいときに",
      },
      {
        command: 'echo "指示" | claude',
        description: "パイプでテキストを渡して実行",
        example: 'echo "Hello" | claude',
      },
    ],
  },
  {
    category: "phase",
    title: "Step 7: 開発フロー（Phase実行）",
    emoji: "\u{1F3AF}",
    color: "#00b894",
    description: "要件定義からデプロイまで順番に進めよう",
    items: [
      {
        command: "/generate-requirements",
        description: "要件定義書を自動生成する",
        example: "Phase 1: URLやドキュメントから要件を作成",
      },
      {
        command: "/spec-create",
        description: "機能仕様書を作成する",
        example: "Phase 2: 要件定義をもとに設計書を生成",
      },
      {
        command: "/design-system",
        description: "デザインシステムを生成する",
        example: "Phase 2: カラー・フォント・コンポーネント定義",
      },
      {
        command: "/create-ssot-issue",
        description: "SSOT Issueを作成する",
        example: "Phase 3: 全ドキュメントを参照するIssueを起票",
      },
      {
        command: "/implement-app",
        description: "アプリケーションを実装する",
        example: "Phase 4: 設計書ベースでコード自動生成",
      },
      {
        command: "/test",
        description: "テストを実行する",
        example: "Phase 5: /test --mode e2e など各種テスト",
      },
      {
        command: "/generate-docs",
        description: "ドキュメントを自動生成する",
        example: "Phase 6: コードからドキュメント作成",
      },
      {
        command: "/deploy-dev",
        description: "開発環境にデプロイする",
        example: "Phase 7: AWS開発環境へ自動デプロイ",
      },
    ],
  },
  {
    category: "quality",
    title: "Step 8: 品質チェック・レビュー",
    emoji: "\u{1F6E1}",
    color: "#e17055",
    description: "コードの品質を保つための必須チェック",
    items: [
      {
        command: "/review-execute",
        description: "AIコードレビューを実行する",
        example: "ReviewAgent（剣持謙二）が品質チェック",
      },
      {
        command: "/security-scan",
        description: "セキュリティ脆弱性をスキャンする",
        example: "OWASP基準でセキュリティチェック",
      },
      {
        command: "/mock-detector",
        description: "モック・ダミーデータを検出する",
        example: "本番コードに残った仮データを発見",
      },
      {
        command: "/quality-score",
        description: "品質スコアを算出する",
        example: "コード品質を数値で確認",
      },
    ],
  },
  {
    category: "agent",
    title: "Step 9: AIエージェント",
    emoji: "\u{1F916}",
    color: "#6c5ce7",
    description: "AIエージェントに作業を任せよう",
    items: [
      {
        command: "/agent-run",
        description: "エージェントを起動して自律実行させる",
        example: "Issue番号を渡すと自動で実装してくれる",
      },
      {
        command: "/ccagi-auto",
        description: "全自動モードで自律実行する",
        example: "Issueを検出して自動で処理を進める",
      },
      {
        command: "コードレビューして",
        description: "自然言語でReviewAgentを呼び出す",
        example: "剣持謙二が品質チェックを実行",
      },
      {
        command: "このIssueを実装して",
        description: "自然言語でCodeGenAgentを呼び出す",
        example: "源（Gen）がIssue分析・コード生成",
      },
      {
        command: "AWSにデプロイして",
        description: "自然言語でDeploymentAgentを呼び出す",
        example: "航（Wataru）がECS/CloudFrontにデプロイ",
      },
    ],
  },
  {
    category: "share",
    title: "Step 10: 拡張機能の共有",
    emoji: "\u{1F4E6}",
    color: "#2d3436",
    description: "コマンド追加後にビルド&共有する手順",
    items: [
      {
        command: "git add commands.js src/commands.js src/commandListProvider.js index.html",
        description: "変更ファイルをステージングする",
        example: "コマンドを追加・修正した後に実行",
      },
      {
        command: 'git commit -m "feat: コマンドを追加・更新"',
        description: "変更をコミットする",
        example: "メッセージは内容に合わせて変更",
      },
      {
        command: "git push origin main",
        description: "GitHubにプッシュする",
        example: "リモートリポジトリに反映",
      },
      {
        command: "npx @vscode/vsce package --allow-missing-repository",
        description: ".vsixパッケージをビルドする",
        example: "共有用のインストールファイルを生成",
      },
      {
        command: "code --install-extension claude-code-commands-0.1.0.vsix --force",
        description: "ビルドした拡張機能をインストールする",
        example: "自分の環境にも最新を反映",
      },
    ],
  },
  {
    category: "issue",
    title: "Step 11: Issue・PR管理",
    emoji: "\u{1F4CB}",
    color: "#0984e3",
    description: "Issue起票からPR作成まで",
    items: [
      {
        command: "/create-issue",
        description: "GitHub Issueを対話的に作成する",
        example: "タイトルと内容を入力してIssue起票",
      },
      {
        command: "/pr-create",
        description: "Pull Requestを自動作成する",
        example: "変更内容からDraft PRを生成",
      },
      {
        command: "/git-sync",
        description: "Gitリポジトリを同期する",
        example: "リモートとの差分を解消",
      },
      {
        command: "/ccagi-todos",
        description: "TODOコメントを検出してIssue化する",
        example: "コード内のTODOを自動でIssueに変換",
      },
    ],
  },
];
