## 初回の手順
``` npm install ```

## 作業中
基本的に/src内ファイルを編集。dist内は触れないこと。

以下のコマンドで編集を監視します。SCSSコンパイル,minify
``` npm run dev ```

## サーバーアップロードについて

### FTPで直接アップロードする際
ローカルで作業→dist内をアップロード

### Gitクライアントでのアップロード
仕様に従うが、gitignoreに入っていないものは基本アップしてOK