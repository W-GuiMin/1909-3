<template name="component-name">
  <div>
    <ToLogin />
    <Card />
    <Footer />
  </div>
</template>
<script>
import store from "../store";
import ToLogin from "../components/ToLogin.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {};
  },
  created() {
    store.setPage(0);
  },
  components: {
    ToLogin,
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