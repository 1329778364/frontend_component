// @ts-ignore
import axios from 'axios'
import {ref} from "vue";

export default function <T>(url: string) {
  let loading = ref(true);
  let data = ref<T | null>(null);
  let errMsg = ref("");

  axios.get(url).then(response => {
    loading.value = false;
    data.value = response.data;
  }).catch(error=>{
    loading.value = false;
    errMsg.value = error.message || "未知错误";
  });
  return {
    loading,
    data,
    errMsg
  }
};
