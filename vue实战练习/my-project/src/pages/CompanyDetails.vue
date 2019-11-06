<template name="component-name">
  <div>
    <Header>职位详情</Header>
    <CompanyContent />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import CompanyContent from "../components/CompanyContent.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
    Header,
    CompanyContent
  }
};
</script>
<style lang="scss" scoped>
#push_bottom {
  bottom: 68px;
}
#header {
  .left {
    display: block;
  }
}
</style>