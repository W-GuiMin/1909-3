<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
require("./assets/css/style.css");
// import CompanyDetails from "./pages/CompanyDetails.vue";
import Home from "./pages/Home.vue";
export default {
  name: "app",
  components: {
    //  CompanyDetails
    Home
  }
};
</script>
