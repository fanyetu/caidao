<template>
  <div class="me">
    <div class="top">
      <img :src="avatarUrl" class="avatar" @click="doLogin">
      <div class="text">{{nickname}}</div>
    </div>
    <div class="middle">

    </div>
  </div>
</template>
<script>
  import { request } from "@/utils/http";
  import qcloud from "wafer2-client-sdk";
  import {showLoading,hideLoading, toast} from "../../utils/utils";

  // 登陆
  export default {
    data() {
      return {
        avatarUrl: "/static/imgs/default-avatar.png",
        nickname: "登录"
      };
    },
    created() {

    },
    methods: {
      doLogin() {
        showLoading()
        console.log("do login");
        const session = qcloud.Session.get();
        console.log(session);
        if (session) {
          qcloud.loginWithCode(this.loginHandler());
        } else {
          qcloud.login(this.loginHandler());
        }
      },
      loginHandler() {
        return {
          success(res) {
            console.log(res);
            hideLoading()
            toast('登录成功', 'success')
          },
          fail(err) {
            console.log(err);
            hideLoading()
          }
        };
      }
    }
  };
</script>
<style scoped lang="less">
  @import "../../common/css/variable";

  .me {
    .top {
      text-align: center;
      margin-top: @padding-large;
      .avatar {
        width: ~'150rpx';
        height: ~'150rpx';
        border-radius: 50%;
      }
      .text {
        padding-top: @padding-small;
      }
    }
  }
</style>
