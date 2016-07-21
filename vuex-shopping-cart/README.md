### install

```
npm install
npm start
open http://localhost:3000
```

### bug

 `npm rebuild node-sass`

### webpack bug
webpack 2.x版本
问题:
`Chunk.entry was removed. Use hasRuntime()`
解决方案:
1. 更新 `webpack` 版本到 `webpack@^2.1.0-beta.17`
2. 更新 `extract-text-webpack-plugin` 版本到 `extract-text-webpack-plugin@^2.0.0-beta`
3. `extract-text-webpack-plugin/2.0.0-beta.3` 期望只有一个参数:
```bash
old:
Example: if your old code looked like this:
    ExtractTextPlugin.extract('style-loader', 'css-loader')
new:
You would change it to:
    ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })

The available options are:
    loader: string | object | loader[]
    fallbackLoader: string | object | loader[]
    publicPath: string
```

```bash
old:
Example: if your old code looked like this:
    new ExtractTextPlugin('css/[name].css', { disable: false, allChunks: true })

new:
You would change it to:
    new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true })

The available options are:
    filename: string
    allChunks: boolean
    disable: boolean

```

但是升级后造成 vue-html-loader解析html错误:
例如:
```bash
Module build failed: Error: Parse Error: <button :disabled: "p.inventory" @click="addToCart(p)">Add to cart</button>
```
