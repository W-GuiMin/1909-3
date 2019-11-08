<template name="component-name">
  <div>邀约</div>
</template>
<script>
import router from "../routers";
export default {
  beforeRouteEnter(to, from, next) {
    if (window.sessionStorage.getItem("token") === "1233") {
      next();
    } else {
      router.push({
        name: "login"
      });
    }
  }
};
</script>