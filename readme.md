gulu demo init

## 环境安装
1. CSS变量的使用（var --background）
2. npm i -D plugin  (--save-dev)
3. npm i pugin (--save)
4. parcel 参数（--no-cache）运行
5. npx parcel index.html => ./node_modules/.bin/parcel index.html

## 组件name的作用
1. 方便调试用（vue-devtool）

## 样式Scoped的用处

## 自定义组件实现双向数据绑定
```vue
<custom-input v-model="variable"></custom-input>
等同于
<custom-input :value="variable" @input="variable=e.target.value"></custom-input>
```
