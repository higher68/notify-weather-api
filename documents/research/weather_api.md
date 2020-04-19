# 気象を取得するAPIのまとめ

## 候補

- OpenWeatherMap
- Darksky API
- Weather API

## OpenWeatherMap・・・これ採用

- 最大16日間の天気予報
- jsonとか色々な形式で取得できる
- 1日100件まで要求
- コードスニペットがある
- エンドポイントも多いし、拡張性も高そう

## Darksky API

- 過去数10年のデータが使える
- 1日100リクエストまで
- ローカルな予報
- コードスニペットに例がないので不採用
- endpointが少ない

## Weather API

- IPアドレスで気象データを検索できる
- 緯度/軽度で検索できる
- 都市で検索できる
- 16日間の予測なので短期向き
- 1日150までできる
- コードスニペットがある
- requestできる内容が少ない

## 参考

- [人気の天気APIトップ10](https://blog.api.rakuten.net/top-weather-apis-jp/)
