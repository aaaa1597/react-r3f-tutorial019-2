# react-r3f-tutorial019-2
React+TypeScriptなWebアプリで、R3Fのtutorial19。(Annotationsで注釈表示)
ちょっとした説明文とかをAnnotationsで表示させる。

![](https://storage.googleapis.com/zenn-user-upload/8499782d75f0-20231231.png)

# ポイント
1. Htmlをimportする。
```ts:App.tsx
import { Html } from '@react-three/drei'
```

2. <Html></Html>タグを埋め込む。
classNameで、クラス名つけとくと、cssで見た目を設定できる。
```ts:App.tsx
    <Html key={112} position={[0.7, 1, 0]} className="annotation" style={{width:180}} transform distanceFactor={3}>
      空間にアノテーション
    </Html>
```
意外と簡単だった。
