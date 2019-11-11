<template name="component-name">
  <div>
    <Header right="none">拉勾网</Header>
    <Plus />
    <Tabbar />
  </div>
</template>
<script>
import router from "../routers";
import Header from "../components/Header";
import Plus from "../components/Plus";
import Tabbar from "../components/Tabbar";

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
  created() {
    this.$store.dispatch("setTabbar", 2);
  },
  components: {
    Header,
    Plus,
    Tabbar
  }
};
</script>