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

## GET

### endpoint

- `Current Weather Data`
- `5 days/3 hour forecast API`
- `Search Weather API`

## 共通仕様

|ヘッダキー|type|説明|必須|備考|
|--|--|--|--|--|--|
|X-RapidAPI-Host|string|ホスト？|o||
|X-RapidAPI-Key|string|APIキー|o||

## Current Weather Data

- 任意の場所の現在の気候をGETする

パラメータ一覧

|キー|type|説明|必須|備考|
|--|--|--|--|--|--|
|q|string|場所|o|公式サイトで調べたら出るからそれ使う|
|lat|numer|緯度|x|使うときはlon必須|
|lon|number|経度|x||
|callback|string|callback名||x|jsonpを使う際の、callback関数名|
|id|number|都市のID|x|知りたい土地のID|lon, lat, qとともには使えない|
|lang|string|requestの文字型|x|日本語もありそう|
|units|string|距離に使う単位|x|metric(メートル),imperial(ポンド)|
|mode|string|outputの形式|x|jsonがデフォルト。xml, htmlなども選べる|

## 5 days/3 hour forecast API

- 3hour内の気候を5日間でGET

パラメータ一覧

|キー|type|説明|必須|備考|
|--|--|--|--|--|--|
|q|string|場所|o|{city name}, {country code}|
|lat|numer|緯度|x|使うときはlon必須|
|lon|number|経度|x||
|callback|string|callback名||x|jsonpを使う際の、callback関数名|
|id|number|都市のID|x|知りたい土地のID|lon, lat, qとともには使えない|
|lang|string|requestの文字型|x|日本語もありそう|
|units|string|距離に使う単位|x|metric(メートル),imperial(ポンド)|
|mode|string|outputの形式|x|jsonがデフォルト。xml, htmlなども選べる|
|cnt|string|返ってくる市の数|x||
|zip|string|郵便番号|x||

## Search Weather API

- ざっくりした名前から気候をgetできる

パラメータ一覧

|キー|type|説明|必須|備考|
|--|--|--|--|--|--|
|q|string|場所|o|{city name}, {country code}|
|lat|numer|緯度|x|使うときはlon必須|
|lon|number|経度|x||
|units|string|距離に使う単位|x|metric(メートル),imperial(ポンド)|
|mode|string|outputの形式|x|jsonがデフォルト。xml, htmlなども選べる|
|cnt|string|返ってくる市の数|x||
|type|string|都市名の検索の仕方|x|like:部分一致, accurate:完全一致|
