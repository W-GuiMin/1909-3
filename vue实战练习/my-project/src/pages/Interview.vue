<template name="component-name">
  <div>
    <Header right="none">我的面试</Header>
    <div id="content">
      <div class="tab">
        <a class="tab-item">已面试</a>
        <a class="tab-item selected">将面试</a>
      </div>
      <ul class="list">
        <li class="list-empty">
          暂时没有将面试的记录，去
          <a href="/">投简历</a>吧
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import router from "../routers";
import Header from "../components/Header";
export default {
  beforeRouteEnter(to, from, next) {
    if (window.sessionStorage.getItem("uid")) {
      next();
    } else {
      router.push({
        name: "login"
      });
    }
  },
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
#content {
  margin-bottom: 45px;
  .tab {
    background-color: #fff;
    height: 42.5px;
    line-height: 42.5px;
    border-bottom: 1px solid #e8e8e8;
    .tab-item {
      display: inline-block;
      width: 50%;
      text-align: center;
      color: #00b38a;
      font-size: 1.4rem;
      height: 100%;
    }
    .selected {
      background-color: #f0f0f0;
      color: #333;
    }
  }
  .list {
    margin: 0;
    list-style: none;
    -webkit-padding-start: 0;
    -moz-padding-start: 0;
    padding-start: 0;
    .list-empty {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 30px;
      color: #333;
      a {
        color: #00b38a;
        text-decoration: underline;
      }
    }
  }
}
</style>