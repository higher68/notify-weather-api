# Requirement definition document

## 概要

- 要件定義についてまとめる

## システム化要件

### 背景

- 朝家を出る時、天気予報を見ないことが多い
- ↑によって、傘を忘れることが多い
- 前日に準備するのは無理
- テレビも見ないから無理
- 明かりは必ずつけるので、それを使ったら便利そう
- hueはAPIがあるので、使えそう
- ついでに、TypeScript、CDKあたりを触る練習をする

### 目的

- 朝起きた時に、天気を把握できるようになる
- ↑によって、ジャンプ傘が必要でない時に持っていかないように。逆もまた然り

### 用語定義(省略)

### 課題概要

#### AsIs

- 朝起きる->何も見ずに外に出る->折りたたみしかなくて濡れる/買ってお金減る

#### ToBe

- cronで外部APIから天気を取得、hueに連携し、電気をつける
- [図](https://drive.google.com/file/d/1EYMyZYKQu2YqFurXJ95c0ctADULJcAWI/view?usp=sharing)

## 機能要件

### システム機能要件

#### 天気取得

- 外部APIからとってくる
- jsonで取得？
- レスポンスを加工
- エラーハンドリング

#### Hueとアプリとの連携

- jsonで送ればいい気がする
- こちらもエラーハンドリング

#### HueからHueGoへの連携

- なんかよしなにやってくれそうな気がするので、調べるだけ

#### 外部インターフェース

- [WIP]天気を取得
- hue

## 非機能要件

### システム方式

#### インフラ

- DockerRegistry
  - Amazon ECR
- データプレーン
  - AWS Fargate
- コントロールプレーン
  - Amazon ECS
- 起動方法
  - CloudWatchEvent

#### ミドルウェア

- Docker
  - [TBD]ベースイメージ
  - userハンドリング
  - sshできるようにするか悩む
- docker-compose
  - v3
  - envファイルは外部に分離

#### DevOps

- deploy方式
  - ecs cli v2
- provision方式
  - CDK
- docker image push
  - なんかdockerコマンド使えばいけるやろ

### スタイル

- 開発手法: アジャイル
- プログラミング手法: TDD
- 言語: Typescript

## 参考資料

- [要件定義書サンプル・書き方](https://pm-rasinban.com/rd-write)を参考に書く
- [システム設計の流れ・設計書の構成メモ](https://qiita.com/chocode/items/fd51dd8f561e2a0fbd70)
