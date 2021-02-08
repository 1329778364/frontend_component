import { createApp} from 'vue'
import App from './App.vue'
import './index.less'
import "/src/assets/css/reset.css"
import "/src/assets/fa/css/all.min.css"
import router from "./router";
import store from  "./vuex"

createApp(App).use(router).use(store).mount('#app');
