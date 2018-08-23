import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 相当于app.json
  config:{
    "pages": [
      "pages/logs/main",
      "pages/index/main",
      "pages/counter/main"
    ],
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#f8f8f8",
      "navigationBarTitleText": "财道",
      "navigationBarTextStyle": "black"
    }
  }
}
