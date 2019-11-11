<template name="component-name">
  <div>
    <Header right="none">我的收藏</Header>
    <div id="content">
      <ul class="list">
        <li class="list-empty">
          <span class="text">还没有收藏的职位~</span>
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
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
.list-empty {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 30px;
  color: #c2cfcc;
  .text {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>