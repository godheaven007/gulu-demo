import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './buttonGroup';
import Input from './input';
import Row from './row';
import Col from './col';
import Toast from './toast';
import plugin from "./plugin";

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);

Vue.use(plugin);

var vm = new Vue({
    el: '#app',
    data: {
        num: 'h'
    },
    created() {
        // this.$toast('Toast信息');

        this.$toast('Toast信息', {
            toastType: 2,
            closeBtn: {
                btnTxt: '我知道了',
                callback(toastVm) {
                    toastVm.log();
                }
            }
        });
    },
    methods: {
        // handleInput(v) {
        //     this.num = v;
        // }
        doToast() {
            this.$toast('aaa');
        }
    }
});
