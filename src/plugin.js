
import toast from "./toast";
export default function plugin(Vue, options) {

    Vue.prototype.$toast = function (msg) {
        let Constructor = Vue.extend(toast);
        let curVm = new Constructor({
            propsData: {
                msg
            }
        }).$mount();
        document.body.appendChild(curVm.$el);
    }
}