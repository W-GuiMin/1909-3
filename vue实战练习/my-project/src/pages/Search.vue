<template name="component-name">
  <div>
    <!-- <Citys /> -->
    <component :is="show"></component>
  </div>
</template>
<script>
import SearchCompany from "../components/SearchCompany.vue";
import Citys from "../components/Citys.vue";
export default {
  data() {
    return {
      show: "SearchCompany"
    };
  },
  created() {
    this.$store.dispatch("setTabbar", 1);
  },
  methods: {},
  components: {
    SearchCompany,
    Citys
  }
};
</script>
<style lang="scss" scoped>
/deep/.tab {
  position: fixed;
  bottom: 0;
  z-index: 200;
}
</style>