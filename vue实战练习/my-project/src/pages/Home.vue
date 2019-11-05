<template name="component-name">
  <div>
    <Header>拉勾网</Header>
    <GoGegister />
    <Card />
    <Footer />
    <Tabbar />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import GoGegister from "../components/GoGegister.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
import Tabbar from "../components/Tabbar.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    GoGegister,
    Card,
    Footer,
    Tabbar
  }
};
</script>
<style lang="scss" space>
#header {
  .left {
    display: none;
  }
  .right {
    display: none;
  }
}
#push_bottom {
  bottom: 45px;
}
.van-tabbar-item__icon {
  display: none;
}
.van-tabbar-item--active {
  background-color: #e7f3f0;
}
</style>