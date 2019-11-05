<template name="component-name">
  <div class="custom-info" v-if="logging">
    <span class="info">10秒钟定制职位</span>
    <a class="go" href="/frontLogin.do" target="_self">去登录</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logging: true
    };
  }
};
</script>
<style lang="scss" scoped>
.custom-info {
  border-bottom: 1px solid #e8e8e8;
  height: 43px;
  line-height: 43px;
  padding: 0 15px;
  color: #555;
  font-size: 1.4rem;
  position: relative;
  .info {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-right: 100px;
    height: 100%;
    position: relative;
  }
  .go {
    position: absolute;
    right: 15px;
    top: 0;
    display: block;
    float: right;
    background-color: #f5f5f5;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    margin-top: 6px;
    color: #00b38a;
    border-radius: 15px;
    text-decoration: none;
    font-style: normal;
  }
}
</style>