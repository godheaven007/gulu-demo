```html
    <div id="app">
        <parent :money="money">
            <child></child>
        </parent>
    </div>
```

```vue
    Vue.component('parent', {
        props: ['money'],
        template: `<div class="parentWrap"><slot></slot></div>`,
        // 方式一（有效）
        provide: {
            foo: 1500
        },
        // 方式二（无效）
        provide: {
            foo: this.money
        },
        // 方式三（有效）
        provide() {
            return {
                foo: this.money
            }
        }
    });

    Vue.component('child', {
        inject: ['foo'],
        template: `<div class="childWrap">{{foo}}</div>`
    });

    var vm = new Vue({
        el: '#app',
        data: {
            money: 10000
        }
    })
```

## 方式二为什么无效？方式三为什么有效？

## provide() 与 data() 执行的先后顺序？