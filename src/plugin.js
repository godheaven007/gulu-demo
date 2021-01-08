/**Vue.use( plugin )
参数：

{Object | Function} plugin
用法：

安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。

该方法需要在调用 new Vue() 之前被调用。

当 install 方法被同一个插件多次调用，插件将只会被安装一次。

参考：插件
 */

import toast from "./toast";

// 如果插件是一个函数
// export default function plugin(Vue, options) {
//
//     Vue.prototype.$toast = function (msg) {
//         let Constructor = Vue.extend(toast);
//         let curVm = new Constructor();
//
//         curVm.$slots.default = [msg];
//         curVm.$mount();
//         document.body.appendChild(curVm.$el);
//     }
// }

let curToastVm = null;

function createToast({Vue, msg, toastOpt}) {
    let Constructor = Vue.extend(toast);
    let curVm = new Constructor({
        propsData: toastOpt
    });
    // 插槽默认值设置
    curVm.$slots.default = [msg];
    curVm.$mount();
    document.body.appendChild(curVm.$el);

    return curVm;
}

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (msg, toastOpt) {
            if(curToastVm) {
                curToastVm.close();
            }
            curToastVm = createToast({Vue, msg, toastOpt});
            curToastVm.$on('emptyInstance', function () {
                curToastVm = null;
            });
        }
    }
}