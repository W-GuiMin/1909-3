<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tabbar />
  </div>
</template>

<script>
require("./assets/css/style.css");
// import CompanyDetails from "./pages/CompanyDetails.vue";
// import Home from "./pages/Home.vue";
// import Search from "./pages/Search.vue";
import Tabbar from "./components/Tabbar.vue";
export default {
  name: "app",
  components: {
    //  CompanyDetails
    // Home
    // Search,
    Tabbar
  }
};
</script>
