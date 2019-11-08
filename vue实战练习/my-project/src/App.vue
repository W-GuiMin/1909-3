<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
require("./assets/css/style.css");
export default {
  name: "app",
  components: {}
};
</script>
