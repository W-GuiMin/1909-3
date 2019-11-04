<template name="component-name">
  <div>
    <Header />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style scoped>
#push_bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 68px;
  width: 100%;
  background-color: rgba(14, 14, 14, 0.9);
  color: #fff;
  z-index: 99;
}

#push_bottom .push_bottom_table {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 4.3% 2.5% 3.3%;
}

#push_bottom .push_bottom_table .push_bottom_row:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell {
  float: left;
}

#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell img {
  display: block;
}

#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell.push_logo {
  margin-right: 2%;
  width: 12%;
}

#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell.push_tips {
  width: 52%;
}

#push_bottom .push_bottom_table .push_bottom_row .push_bottom_cell.push_btn {
  float: right;
  width: 27.5%;
  padding-top: 1%;
}

#push_bottom
  .push_bottom_table
  .push_bottom_row
  .push_bottom_cell.push_btn
  img {
  position: relative;
  z-index: 1;
}

#push_bottom .push_bottom_table #push_close_bg_wrap {
  position: absolute;
  top: -15px;
  right: 12px;
  width: 30px;
  height: 15px;
  overflow: hidden;
}

#push_bottom .push_bottom_table #push_close_bg {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.85);
}

#push_bottom .push_bottom_table #push_close {
  position: absolute;
  top: -11px;
  right: 16px;
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background: #464646 url(/images/mobile/asset/custom/list/img/close.png) center
    center no-repeat;
  background-size: 10px 10px;
}

#push_bottom .push_bottom_table .push_mascot {
  position: absolute;
  left: 2.5%;
  top: 0;
  z-index: 2;
  width: 14%;
}

#push_bottom .push_bottom_table .push_mascot .push_mascot_img {
  display: block;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

#push_bottom .push_bottom_table .close_btn {
  position: absolute;
  right: 2.5%;
  top: 0;
  display: block;
  width: 6.1%;
  padding: 2%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-radius: 100%;
  background: rgba(14, 14, 14, 0.9);
  background: linear-gradient(
    to bottom,
    rgba(14, 14, 14, 0.9) 0,
    rgba(14, 14, 14, 0.9) 50%,
    rgba(14, 14, 14, 0) 51%,
    rgba(14, 14, 14, 0) 100%
  );
}

#push_bottom .push_bottom_table .close_btn .close_btn_img {
  display: block;
}
</style>