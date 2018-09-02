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
  import { showLoading, hideLoading, toast } from "@/utils/utils";
  import { mapMutations, mapGetters } from "vuex";

  // 登陆
  export default {
    data() {
      return {
        avatarUrl: "",
        nickname: ""
      };
    },
    created() {
      if (this.logined) {
        this.avatarUrl = this.userInfo.avatarUrl
        this.nickname = this.userInfo.nickName
      }else{
        this.avatarUrl = "/static/imgs/default-avatar.png"
        this.nickname = '登录'
      }
    },
    computed: {
      ...mapGetters([
        "logined",
        "userInfo"
      ])
    },
    methods: {
      ...mapMutations({
        setLogined: "setLogined",
        setUserInfo: "setUserInfo"
      }),
      doLogin() {
        if (this.logined) {
          return
        }
        showLoading();
        const session = qcloud.Session.get();
        if (session) {
          qcloud.loginWithCode(this.loginHandler());
        } else {
          qcloud.login(this.loginHandler());
        }
      },
      loginHandler() {
        let _this = this;
        return {
          success(res) {
            _this.setLogined(true);
            _this.setUserInfo(res);

            _this.avatarUrl = res.avatarUrl
            _this.nickname = res.nickName
            hideLoading();
            toast("登录成功", "success");
          },
          fail(err) {
            hideLoading();
            toast("登录失败，请稍后重试", "");
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
