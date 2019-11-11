<template name="component-name">
  <div>
    <Header right="none">投递信息</Header>
    <div id="content">
      <div class="tab">
        <a class="tab-item selected">全部</a>
        <a class="tab-item">邀请面试</a>
        <a class="tab-item">不合适</a>
      </div>
      <ul class="list">
        <li class="list-empty">
          <span class="text">暂无记录~</span>
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
  .tab {
    border-bottom: 1px solid #e8e8e8;
    font-size: 1.4rem;
    .selected {
      color: #00b38a;
      background-color: #f5f5f5;
    }
    .tab-item {
      display: block;
      float: left;
      width: 33.33%;
      height: 42.5px;
      line-height: 42.5px;
      text-align: center;
      color: #555;
    }
    &:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
  .list {
    padding: 15px;
    color: #333;
    .list-empty {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 30px;
      color: #c2cfcc;
      &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
      .text {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>