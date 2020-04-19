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

レスポンスの内容

|キー|説明|備考|
|--|--|--|
|coord|coordinate(緯度経度座標)||
|dt|UNIX時間||
|sys(sunset)|日の入の時間||
|sys(sunrise)|日の出の時間||
|timezone|タイムゾーン。何秒ずれてるか||
|Name|都市名||
|cod|レスポンスのステータスコード|
|id|都市のID||
|wind(speed)|風速||
|base|内部パラメータらしいけどなにそれ|stationsとか入ってるけどわからん|
|weather(main)|天気||
|main(temp)|気温(K?)||
|main(pressure)|気圧(P)||
|main(humidity)|湿度||
|main(temp_min)|最低気温||
|main(temp_max)|最高気温||
|clouds(all)|雲量||
|visibility|視程||

```zsh
➜ ~ curl --request GET \
        --url 'https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London' \
        --header "x-rapidapi-host: $X_RAPID_HOST" \
        --header "x-rapidapi-key: $X_RAPIDAPI_KEY"                                   
test({"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":290.18,"feels_like":284.72,"temp_min":288.15,"temp_max":291.48,"pressure":1019,"humidity":33},"visibility":10000,"wind":{"speed":5.1,"deg":50},"clouds":{"all":1},"dt":1587302166,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1587272119,"sunset":1587323004},"timezone":3600,"id":2643743,"name":"London","cod":200})%
```

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

レスポンスについて

- 特に特徴的なものはなし
- たくさんリスト形式で返ってくる

```zsh
curl --request GET \
        --url 'https://community-open-weather-map.p.rapidapi.com/forecast?id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London' \
        --header "x-rapidapi-host: $X_RAPID_HOST" \
        --header "x-rapidapi-key: $X_RAPIDAPI_KEY"                                   
{"cod":"200","message":0,"cnt":40,"list":[{"dt":1587308400,"main":{"temp":289.9,"feels_like":284.35,"temp_min":288.74,"temp_max":289.9,"pressure":1019,"sea_level":1019,"grnd_
--------skipping--------
```

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

レスポンスの内容

特に特徴的なものはなし
リストで返ってくることくらいか

```zsh
➜  notify-weather-api git:(feature/65) ✗ curl --request GET \
        --url 'https://community-open-weather-map.p.rapidapi.com/find?q=London' \
        --header "x-rapidapi-host: $X_RAPID_HOST" \
        --header "x-rapidapi-key: $X_RAPIDAPI_KEY"
{"message":"accurate","cod":"200","count":5,"list":[{"id":2643743,"name":"London","coord":{"lat":51.5085,"lon":-0.1257},"main":{"temp":290.08,"feels_like":284.5,"temp_min":288.15,"temp_max":291.48,"pressure":1020,"humidity":38},"dt":1587301759,"wind":{"speed":5.7,"deg":60},"sys":{"country":"GB"},"rain":null,"snow":null,"clouds":{"all":1},
------------skipping------------
```
