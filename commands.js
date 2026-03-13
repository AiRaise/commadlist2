const COMMANDS = [
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
];
