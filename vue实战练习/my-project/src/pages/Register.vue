<template name="component-name">
  <div class="container">
    <Verify title="注册拉勾" head="登录" footer="true" btn="注册" input1="手机号码或邮箱" input2="输入密码" />
  </div>
</template>
<script>
import Verify from "../components/Verify";
export default {
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