import {ref, onMounted, onUnmounted} from "vue"

export default function () {
  const x = ref(0);
  const y = ref(0);

  function clickHandler(event: MouseEvent){
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => {
    window.addEventListener("click", clickHandler)
  });

  onUnmounted(() => {
    window.removeEventListener("click", clickHandler);
  });
  return {
    x, y
  }
}
