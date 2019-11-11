<template name="component-name">
  <div class="container">
    <Verify head="注册" btn="登录" login="密码登录" v-if="phoneShow" />
    <Verify
      input1="请输入已验证的手机号或邮箱"
      input2="请输入密码"
      phone="false"
      padd="none"
      click="a"
      head="注册"
      btn="登录"
      login="手机号登录"
      v-if="numShow"
    />
  </div>
</template>
<script>
import Verify from "../components/Verify";
export default {
  data() {
    return {
      phoneShow: false,
      numShow: true
    };
  },
  methods: {
    lShow() {
      this.$refs.btn.show();
    }
  },
  components: {
    Verify
  }
};
</script>
<style lang="scss" scoped>
.container {
  font-size: 24px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  max-width: 750px;
  padding: 3rem;
  margin: 0 auto;
}
</style>