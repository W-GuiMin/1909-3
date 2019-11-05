<template name="component-name">
  <div id="push_bottom" v-if="ashow">
    <div class="push_bottom_table">
      <a
        class="push_bottom_download"
        href="http://a.app.qq.com/o/simple.jsp?pkgname=com.alpha.lagouapk&amp;ckey=CK1337790743204"
        target="_blank"
      >
        <div class="push_bottom_row">
          <div class="push_bottom_cell push_logo">
            <img
              src="//www.lgstatic.com/m/images/asset/custom/list/img/download_logo_new.png"
              width="100%"
              alt="lagou.com"
            />
          </div>
          <div class="push_bottom_cell push_tips">
            <img
              src="//www.lgstatic.com/m/images/asset/custom/list/img/download_txt_new.png"
              width="100%"
              alt="拉勾 机会很多 挑满意的 手机投简历，在线聊Offer"
            />
          </div>
          <div class="push_bottom_cell push_btn">
            <img
              src="//www.lgstatic.com/m/images/asset/custom/list/img/download_btn_new.png"
              width="100%"
              alt="下载APP"
            />
          </div>
        </div>
      </a>
      <div class="push_mascot">
        <img
          class="push_mascot_img"
          src="//www.lgstatic.com/m/images/asset/custom/list/img/download_mascot.png"
          width="100%"
          alt="拉勾君"
        />
      </div>
      <div
        class="close_btn"
        @click="close"
        data-lg-tj-id="2ip0"
        data-lg-tj-no="idnull"
        data-lg-tj-cid="idnull"
      >
        <img
          class="close_btn_img"
          src="//www.lgstatic.com/m/images/asset/custom/list/img/download_btn_close.png"
          width="100%"
          alt="关闭"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ashow: 1
    };
  },
  methods: {
    close() {
      this.ashow = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
#push_bottom {
  position: fixed;
  left: 0;
  right: 0;
  // bottom: 68px;
  width: 100%;
  background-color: rgba(14, 14, 14, 0.9);
  color: #fff;
  z-index: 99;

  .push_bottom_table {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    padding: 4.3% 2.5% 3.3%;

    .push_bottom_row {
      &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }

      .push_bottom_cell {
        float: left;

        img {
          display: block;
        }
      }

      .push_bottom_cell.push_logo {
        margin-right: 2%;
        width: 12%;
      }

      .push_bottom_cell.push_tips {
        width: 52%;
      }

      .push_bottom_cell.push_btn {
        float: right;
        width: 27.5%;
        padding-top: 1%;

        img {
          position: relative;
          z-index: 1;
        }
      }
    }

    .push_mascot {
      position: absolute;
      left: 2.5%;
      top: 0;
      z-index: 2;
      width: 14%;

      .push_mascot_img {
        display: block;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }

    .close_btn {
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

      .close_btn_img {
        display: block;
      }
    }
  }
}
</style>

