# component

## 概要

- コンポーネントをまとめる
- 簡単な構成要素の説明を書く
- `draw.io`で書く

## link

- https://drive.google.com/file/d/1EYMyZYKQu2YqFurXJ95c0ctADULJcAWI/view?usp=sharing

## 設計

### 機能要件

#### アプリケーション

- アプリケーションの設計
- TypeScriptで書く

##### 天気取得

- 外部APIからとってくる
- jsonで取得？
- レスポンスを加工
- エラーハンドリング

##### Hueとアプリとの連携

- jsonで送ればいい気がする
- こちらもエラーハンドリング

###### シーケンス図

##### HueからHueGoへの連携

- なんかよしなにやってくれそうな気がするので、調べるだけ

###### シーケンス図

### 非機能要件

#### AWS

- AWS内部のリソース設計をする
- CDKを使って構築

##### ECR

- Docker Imageをpush

##### ECS

###### Cluster

- 1つ

###### Service

- 1つ

##### CloudWatchEvent

- 1つ

#### Docker

- Docker関連の設計をする

##### Dockerfile

- [TBD]ベースイメージ
- userハンドリング
- sshできるようにするか悩む

##### docker-compose

- v3の記法で書く
- envファイルは外部に分離

#### DevOps

- DevOpsの仕組みについて設計する

##### コンテナデプロイ

- ecs cli v2を使ってみる

##### ECRへのdocker連携

- なんかdockerコマンド使えばいけるやろ
