import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './buttonGroup';
import Input from './input'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);

var vm = new Vue({
    el: '#app',
    data: {
        num: 'h'
    },
    methods: {
        // handleInput(v) {
        //     this.num = v;
        // }
    }
});
