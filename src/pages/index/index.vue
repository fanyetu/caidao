<template>
  <div class="container">
    <div class="top">
      <div class="title">{{title}}</div>
      <div class="expend"></div>
      <div class="income-wrapper"></div>
    </div>
    <div class="middle"></div>
    <div class="bottom"></div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      title: '家庭账本'
    }
  },
  created(){
    console.log("created")
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
  @import "../../common/css/variable";

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /*padding: 200rpx 0;*/
    box-sizing: border-box;
    .top{
      width: 100%;
      height:400rpx;
      background-color: @theme-color;
      padding: @padding-normal;
    }
  }

</style>
