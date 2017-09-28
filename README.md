# vuemusic

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 20170927
#### 报错:
        * !!vue-style-loader!css-loader?{"minimize":false,"sourceMap":false}!../../node_modules/vue-loader/lib/style-rewriter?{"id":"data-v-6c96342b","scoped":false,"hasInlineConfig":false}!stylus-loader?{"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./navs.vue in ./src/components/navs.vue

        To install it, you can run: npm install --save !!vue-style-loader!css-loader?{"minimize":false,"sourceMap":false}!../../node_modules/vue-loader/lib/style-rewriter?{"id":"data-v-6c96342b","scoped":false,"hasInlineConfig":false}!stylus-loader?{"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./navs.vue
#### 解决:
        npm install stylus-loader css-loader style-loader --save-dev
        非要单独安装,原因未知
#### 备忘:
    "babel-runtime":"^6.0.0",//对es6语法转移
    "fastclick":"^1.0.6"//解决移动端低级300ms延迟的问题
    "babel-polyfill":"^6.2.0",//对es6的一些api的转义

## 20170928
#### 备忘
     <slot></slot>  插槽标签,一般写在组件内,由外部像组件内插入标签

     关于轮播图的组件完全没看懂 过于复杂


