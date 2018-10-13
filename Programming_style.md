# react+reduxの学習のゴール
## [react]
・自分でコンポーネントを実装できる
・stateとpropsの違いを説明できる
・テストを実装できる（今スプリントのゴールとしては難しいかも・いずれは絶対必要になると思う）

## [redux]
・どのようなフローでstore内のstateが変更されるのか説明できる
・ActionとActionCreaterを実装出来る
・reducerを実装できる
・storeのなかでどのようにstateが保持されているのか説明できる
・ConnectとmapStateToPropsとmapDispatchToPropsが何をしているのか説明できる
・ContainerとComponentを区別して実装できる


## 参考URL

[ここからはじめるReactの基礎の基礎 - Qiita](https://qiita.com/shizuma/items/6392dc55624c80f5503c)  

[たぶんこれが一番分かりやすいと思います React + Redux のフロー図解 - Qiita](https://qiita.com/mpyw/items/a816c6380219b1d5a3bf)  
[Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)

# コーディングルール
## クラス名
アッパーキャメルケース
- 例
`LikeThis`

## 変数名,プロパティ名，ステート名，関数名
ローワーキャメルケース
- 例
`likeThis`

## 定数sz
全大文字のアンスコつなぎ
- 例
`LIKE_THIS`

## アクセス修飾子
特別な理由がない限り、明記することが望ましい
 - public
クラス外からのアクセス可能
- private
クラス内でのみアクセス可能
- protected
同じクラス、またはその派生クラスのメンバーからのみアクセス可能

# srcフォルダ構成
- コンポーネントとステートをベースにフォルダで区切っていく
```
.
├── actions
│   └── [ComponentName]
│       ├── [ComponentName]ActionType.js
│       ├── [ComponentName]Action.js
│       └── [ComponentName]ActionCreator.js
├── components
│   └── [ComponentName]
│       ├── [ComponentName].tsx
│       └── [ComponentName].test.tsx
├── containers
│   └── [ComponentName]
│       └── [ComponentName].js
├── reducers
│   └── [StateName]
│       ├── [StateName].js
│       └── [StateName].test.js
└── states
│   └── [StateName]
│       └── [StateName]State.js
```

## actions
- ActionとComponentは基本対応しているので、コンポーネントごとに分けてフォルダを作成する
- `ActionType` , `Action`, `ActionCreator`を分けて定義する

## components
- Componentごとにフォルダを作成する
- Connected Component (Container)であっても `React.Component` を継承した素のComponentはこちらにまとめる

 ### Component内で定義するメソッド
- プロパティメソッドを使って定義すると、`constructor`で`bind(this)`する必要がなくなるので、コードの量を大幅に減らすことができる

#### プロパティメソッド例
```
    private onTodoClick = (id: number) => () => {
        this.props.onTodoClick(id)
    }
```
## containers
- Connected Component (Container)の以下3つのfunctionをここで定義する
  - `mapStateToProps`
  - `mapDispatchToProps`
  - `connect` 

## states
- State名ごとにフォルダを分けて定義する

## redecers
- ReducerはStateと1対1で対応しているので、State名ごとにフォルダを分ける
- Redecerのfunctionには必ず返り値のStateの型を明記する
