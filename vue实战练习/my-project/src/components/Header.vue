<template name="component-name">
  <header id="header">
    <slot />
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
#header {
  height: 45px;
  line-height: 45px;
  background-color: #00b38a;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
}
</style>