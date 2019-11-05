<template name="component-name">
  <header id="header">
    <slot />
    <div class="left">
      <span class="corner"></span>
    </div>
    <div class="right">
      <span class="corner"></span>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#header {
  height: 45px;
  line-height: 45px;
  background-color: #00b38a;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  position: relative;
  .left {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 40px;
    &:active {
      background-color: #f0f0f0;
    }
    .corner {
      float: left;
      width: 9px;
      height: 20px;
      margin: 13px;
      background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon2.png)
        no-repeat -1.5px -20.5px;
      background-size: 250px 250px;
    }
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 40px;
    &:active {
      background-color: #f0f0f0;
    }
    .corner {
      width: 17px;
      height: 20px;
      margin: 13px auto 0 auto;
      background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon2.png)
        no-repeat -60px -46.5px;
      background-size: 250px 250px;
      float: right;
      margin: 13px;
    }
  }
}
</style>