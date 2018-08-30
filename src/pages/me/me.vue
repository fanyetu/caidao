<template>
  <div class="me">
    hello
  </div>
</template>
<script>
  import {request} from "@/utils/http";

  // 登陆
  export default {
    created(){
      request('/demo', 'get', null)
        .then(data=>{
          console.log(data)
        })
    }
  }
</script>
<style scoped lang="less">

</style>
