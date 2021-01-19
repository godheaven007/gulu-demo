import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './buttonGroup';
import Input from './input';
import Row from './row';
import Col from './col';
import plugin from "./plugin";
import tab from './tab';
import tabHead from './tab-head';
import tabItem from './tab-item';
import tabBody from './tab-body';
import tabPane from './tab-pane';
import breadCrumb from "./breadCrumb";
import breadItem from "./breadItem";

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);

Vue.component('g-tab', tab);
Vue.component('g-tab-head', tabHead);
Vue.component('g-tab-item', tabItem);
Vue.component('g-tab-body', tabBody);
Vue.component('g-tab-pane', tabPane);

// breadCrumb
Vue.component('g-breadcrumb', breadCrumb);
Vue.component('g-breadcrumb-item', breadItem);

Vue.use(plugin);

var vm = new Vue({
    el: '#app',
    data: {
        selectedTab: 'fun'
    },
    created() {
        // 普通toast
        // this.$toast('Toast信息', {
        //     position: 'bottom',
        //     duration: 3000000
        // });

        // 扩展toast
        // this.$toast('Toast信息', {
        //     toastType: 2,
        //     closeBtn: {
        //         btnTxt: '我知道了',
        //         callback(toastVm) {
        //             toastVm.log();
        //         }
        //     }
        // });

        // 支持自定义html
        // this.$toast('<h1 style="color: red;">支持<i>html</i></h1>', {
        //     toastType: 2,
        //     enableHtml: true,
        //     autoCloseDelay: 50000
        // });
    },
    methods: {
        // handleInput(v) {
        //     this.num = v;
        // }
        doToast() {
            this.$toast('Toast1', {position: 'top'});
        },
        doToast2() {
            this.$toast('Toast2', {position: 'middle'});
        },
        doToast3() {
            this.$toast('Toast3', {position: 'bottom'});
        }
    }
});
