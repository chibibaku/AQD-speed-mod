# アクアリウムは踊らない　４倍速パッチ

スーズの足を４倍速くします。小走製薬って誰かが言ってた。
多少の知識がある人向け。サポート・保証なし。実行は自己責任で。

## 主な機能

- デフォルトの移動速度を8に設定
- 移動速度レートを400%に設定
- 必要なプラグインは自動的にダウンロードして導入

## インストール方法

### 必要環境
- Windows PowerShell
- インターネット接続（プラグインファイルのダウンロードに必要）
- アクおど本体 (公式からzipをダウンロードして展開)

### インストール手順

1. パッチスクリプト(patch.ps1)をダウンロード
2. パッチスクリプトをゲームディレクトリ（`Game.exe`がある場所）にコピー
3. `patch.ps1`を右クリックして「PowerShellで実行」を選択
4. 実行ポリシーについて確認が表示されたら「Y」を押して続行
5. インストールが完了するまで待機
6. ゲームを実行

## トラブルシューティング

- 問題が発生した場合は、スクリプトがゲームディレクトリから実行されていることを確認
- `Game.exe`がスクリプトと同じフォルダにあることを確認
- インストール中にインターネット接続があることを確認 (必要なファイルのダウンロードがあるため)

## アンインストール・復元

アンインストールするには：
1. ゲームディレクトリを開く
2. `js/plugins.js`を`js/plugins.js.bak`に置き換え
3. `js/plugins/NRP_ChangeCharacterSpeed.js`を削除

## クレジット

- アクアリウムは踊らない : 橙々様
- NRP_ChangeCharacterSpeedプラグイン: NewRPGProject