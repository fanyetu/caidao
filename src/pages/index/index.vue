<template>
  <div class="container">
    <div class="top">
      <div class="title">{{title}}</div>
      <div>
        <div class="expend">
          <div class="text">本月支出</div>
          <div class="month-expend">{{monthExpend}}</div>
        </div>
        <div class="income">
          <div>
            <span class="text">本月收入</span>
            <span class="month-income">{{monthIncome}}</span>
          </div>
          <div>
            <span>本月可用</span>
            <span class="month-available">{{monthAvailable}}</span>
          </div>
        </div>
      </div>
      <!--<img class="avatar" :src="avatarUrl"/>-->
    </div>
    <div class="middle">
      <button type="primary" @click="addNote">记一笔</button>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        avatarUrl: "",
        title: "家庭账本",
        monthExpend: "0.00",
        monthIncome: "0.00",
        monthAvailable: "10000.00"
      };
    },
    created() {
      let _this = this
      wx.showLoading({
        title: "加载中"
      });
      wx.getUserInfo({
        success: function(res) {
          console.log(res.userInfo);
          _this.avatarUrl = res.userInfo.avatarUrl;
        },
        complete: function() {
          wx.hideLoading();
        }
      });
    },
    methods: {
      addNote() {
        console.log("to add note");
      }
    }
  };
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
    background-color: @bg-color;
    .top {
      width: 100%;
      background: url("../../common/img/index_bg.jpg") no-repeat center;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: @padding-normal;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      color: @front-color;
      .title {
        flex: 0 0 150 rpx;
      }
      .expend {
        margin-bottom: @padding-normal;
        .text {
          font-size: @font-size-small;
        }
        .month-expend {
          font-size: @font-size-largest;
        }
      }
      .income {
        font-size: @font-size-small;
        display: flex;
        justify-content: space-between;
      }
      /*.avatar {
        position: absolute;
        right: @padding-normal;
        top: @padding-normal;
        height: 50 rpx;
        width: 50 rpx;
        border-radius: 50%;
      }*/
    }
    .middle {
      width: 100%;
      box-sizing: border-box;
      padding: @padding-normal;
    }
  }

</style>
