<template name="component-name">
  <div>
    <Header left="none" right="none">拉勾网</Header>
    <GoGegister />
    <Card />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import GoGegister from "../components/GoGegister.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    GoGegister,
    Card,
    Footer
  }
};
</script>
<style lang="scss" space>
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