/**
 * create by zhanghaonan 2018/8/30
 */
import Vue from 'vue'
import App from './me'
import store from '@/store/index'

Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
