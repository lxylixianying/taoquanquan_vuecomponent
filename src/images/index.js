import Vue from 'vue'
import "../images/iconfont.css"
import App from '../app.vue'
// import App from '../../app.vue'
// 鼠标按下事件（显示或隐藏侧边栏）   开始
function mouseDown(event) {
    // var point = event || window.event;
    // var screen_width = document.body.clientWidth;
    // if (screen_width < 992 && screen_width - point.clientX > 300 && event.target != js_sort_way.$refs.js_show_side) {
    //     console.log('在侧栏外');
    //     js_sort_way.hideSide();
    // }
    // // if (event.target == js_sort_way.$refs.js_shade) {
    // //     console.log('在侧栏外');
    // //     js_sort_way.hideSide();
    // // }
    // if (event.target == js_sort_way.$refs.js_show_side) {
    //     console.log("单击筛选");
    // }
}

var bus = new Vue();
var vueApp = new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})