gulu demo init

## 环境安装
1. CSS变量的使用（var --background）
2. npm i -D plugin  (--save-dev)
3. npm i pugin (--save)
4. parcel 参数（--no-cache）运行
5. npx parcel index.html => ./node_modules/.bin/parcel index.html

## 组件name的作用
1. 方便调试用（vue-devtool）
2. 获取当前组件名称（参考Tab组件）

## 样式Scoped的用处

## 自定义组件实现双向数据绑定
```vue
<custom-input v-model="variable"></custom-input>
等同于
<custom-input :value="variable" @input="variable=e.target.value"></custom-input>
```

## toast组件
1. plugin使用 **Vue.use(customPlugin)**
   
2. [动态创建实例](https://zhuanlan.zhihu.com/p/38076208)
```vue
let Constructor = Vue.extend(toast);
let curVm = new Constructor();
curVm.$mount('#app')
```
3. 插槽默认值设置
```vue
this.$slots.default = [vnode]
可以参考element的message组件
```
[vnode如何创建??]('https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0')
4. $destroy
   * 只是完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
   * 若要删除dom，则需手动清除

5. [getBoundingClientRect 用Javascript获取页面元素的位置](http://www.ruanyifeng.com/blog/2009/09/find_element_s_position_using_javascript.html)
6. nextTick
7. flex-basic 
   * [flex-basic 中文](https://www.cnblogs.com/thinkingthigh/p/10033809.html)
   * [flex-basic 英文](https://mastery.games/post/the-difference-between-width-and-flex-basis/)
8. 使用
   ```vue
   普通：
   this.$toast('Toast信息');

   扩展：
   this.$toast('Toast信息', {
        toastType: 2,
        closeBtn: {
        // btnTxt: '我知道了',
        callback(toastVm) {
           toastVm.log();
        }
      }
   });
   ```
## Tab组件
1. v-slot **只能添加在`<template>`元素上**（当只有默认插槽时，可以添加在组件上） 