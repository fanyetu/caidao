<script>
  import qcloud from "wafer2-client-sdk";
  import CONFIG from "@/utils/config";

  export default {
    created() {
      qcloud.setLoginUrl(CONFIG.urls.loginUrl);
    },
    onLaunch() {
      console.log("app is launch");
    }
  };
</script>

<style lang="less">
</style>
