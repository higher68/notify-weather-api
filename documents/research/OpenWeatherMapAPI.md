# OpenWeatherMapAPI

- OpenWeatherMapAPIの仕様、使い方についてまとめる

## 認証情報登録・使い方

### 認証情報set

- Rakuten Rapid APIでユーザ登録
- 支払い方法をset

#### direnvでの認証情報set

- `direnv edit`
- cliが開くので`export 必要な環境変数`する

### 使い方

- `X_RAPIDAPI_HOST`, `X_RAPIDAPI_KEY`の2つをheaderに入れる
- 場所の情報はリクエストBodyに必須
