<template name="component-name">
  <div>
    <SearchCompany />
  </div>
</template>
<script>
import store from "../store";
import SearchCompany from "../components/SearchCompany.vue";
export default {
  data() {
    return {};
  },
  created() {
    store.setPage(1);
  },
  components: {
    SearchCompany
  }
};
</script>
<style lang="scss" scoped>
</style>