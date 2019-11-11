<template name="component-name">
  <div>
    <div id="content" v-for="(p,index) in positionData" :key="index">
      <div class="postitle">
        <h2 class="title">{{p.positionName}}</h2>
        <div class="collicon activeable">
          <span class="icon notcoll"></span>
          <span class="text">未收藏</span>
        </div>
      </div>

      <div class="detail">
        <div class="items">
          <span class="item salary">
            <em class="icon"></em>
            <span class="text">{{p.salary}}</span>
          </span>
          <span class="item workaddress">
            <em class="icon"></em>
            <span class="text">{{p.city}}</span>
          </span>
          <span class="item jobnature">
            <em class="icon"></em>
            <span class="text">{{p.jobnature}}</span>
          </span>
          <span class="item workyear">
            <em class="icon"></em>
            <span class="text">{{p.workyear}}</span>
          </span>
          <span class="item education">
            <em class="icon"></em>
            <span class="text">{{p.education}}</span>
          </span>
        </div>
        <div class="temptation">职位诱惑：{{p.temptation}}</div>
      </div>

      <div class="company activeable">
        <img :src="p.companyLogo" alt class="logo" />
        <div class="desc">
          <div class="dleft">
            <h2 class="title">{{p.companyName}}</h2>
            <p class="info">{{p.desc}}</p>
          </div>
          <span class="dright"></span>
        </div>
      </div>

      <div class="positiondesc">
        <header class="header">职位描述</header>
        <div class="content">
          <p v-for="(c,index) in p.content" :key="index">{{c}}</p>
          <br />
        </div>
      </div>

      <div class="positioneval">
        <div class="eval-title">
          面试评价
          <span id="total">
            (
            <span>0</span>)
          </span>
        </div>
        <ul class="list">
          <li class="list-item" v-if="0"></li>
        </ul>
        <a class="eval-all" href="/user/expsList_6502497.html"></a>
      </div>
      <div class="fix_btn_group">
        <div class="deliver deliver_resume rows_bar" @click="deliverBtn">投递简历</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import router from "../routers";
export default {
  data() {
    return {
      companyId: 0,
      positionId: 0,
      positionData: [],
      user: false
    };
  },
  created() {
    this.creat();
    window.console.log(1);
  },
  methods: {
    creat() {
      this.positionId = this.$route.params.positionId;
      this.companyId = this.$route.params.companyId;
      this.$axios
        .get("http://localhost:3000/positiondata", {
          params: {
            positionId: this.positionId
          }
        })
        .then(({ data }) => {
          this.positionData = data;
          window.console.log(this.positionData);
        });
      if (window.sessionStorage.getItem("uid")) {
        this.user = true;
      } else {
        this.user = false;
      }
    },
    deliverBtn() {
      if (this.user) {
        let userName = window.sessionStorage.getItem("uid");
        this.$axios.get("http://localhost:3000/collect", {
          params: {
            userName: userName,
            send: this.positionId
          }
        });
        this.$toast("投递成功");
      } else {
        router.push({
          name: "login"
        });
      }
    }
  },
  watch: {
    //监听相同路由下参数变化的时候，从而实现异步刷新
    $route: function(newUrl, oldUrl) {
      if (newUrl != oldUrl) {
        this.creat();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#content {
  padding-bottom: 68px;
  .postitle {
    height: 48px;
    line-height: 48px;
    padding: 0 15px;
    border-bottom: 1px solid #e8e8e8;
    .title {
      margin: 0;
      color: #333;
      font-size: 1.8rem;
      max-width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left;
    }
    .collicon {
      float: right;
      width: 39px;
      position: relative;
      text-align: center;
      padding: 6px 10px 0 10px;
      height: 43px;
      .notcoll {
        display: block;
        width: 15px;
        height: 15px;
        margin: 0 auto;
        background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -170px -41px;
        background-size: 250px 250px;
      }
      .text {
        display: block;
        color: #888;
        font-size: 1.1rem;
        line-height: 30px;
      }
    }
  }
  .detail {
    border-bottom: 1px solid #e8e8e8;
    min-height: 10px;
    padding: 15px;
    .items {
      .item {
        float: left;
        color: #333;
        font-size: 1.4rem;
        position: relative;
        width: 33.33%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 11px;
        .icon {
          display: inline-block;
          height: 13px;
          width: 13px;
          vertical-align: middle;
          background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
            no-repeat;
          background-size: 250px 250px;
        }
        .text {
          display: inline-block;
          vertical-align: middle;
          position: relative;
          top: -1px;
        }
      }
      .item.salary {
        .icon {
          background-position: -66px -48px;
        }
      }
      .item.workaddress {
        text-align: center;
        .icon {
          background-position: -79px -49px;
        }
      }
      .item.jobnature {
        text-align: right;
        .icon {
          background-position: -93px -49px;
        }
      }
      .item.workyear {
        .icon {
          background-position: -110.5px -49.5px;
        }
      }
      .item.education {
        text-align: center;
        .icon {
          background-position: -127.5px -49px;
        }
      }
      &::after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
      }
    }
    .temptation {
      color: #888;
      word-break: break-all;
      font-size: 1.3rem;
    }
  }
  .company {
    border-bottom: 1px solid #e8e8e8;
    min-height: 10px;
    padding: 15px;
    .logo {
      width: 60px;
      height: 60px;
      float: left;
    }
    .desc {
      margin-left: 70px;
      min-height: 10px;
      .dleft {
        display: inline-block;
        min-height: 10px;
        min-width: 10px;
        max-width: 80%;

        .title {
          color: #00b38a;
          font-size: 1.8rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 5px;
        }
        .info {
          color: #888;
          font-size: 1.2rem;
        }
      }
      .dright {
        display: inline-block;
        float: right;
        width: 23px;
        height: 29px;
        background: url(http://www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -222.5px -3.5px;
        background-size: 250px 250px;
        margin-top: 10px;
      }
    }
  }
  .positiondesc {
    min-height: 10px;
    .header {
      background-color: #00b38a;
      height: 36px;
      line-height: 36px;
      padding-left: 15px;
      color: #00b38a;
      font-size: 1.4rem;
      background-color: #d2f9f0;
    }
    .content {
      word-break: break-all;
      padding: 15px;
      color: #555;
      font-size: 1.2rem;
      line-height: 22px;
    }
  }
  .positioneval {
    .eval-title {
      background-color: #00b38a;
      height: 36px;
      line-height: 36px;
      padding-left: 15px;
      color: #00b38a;
      font-size: 1.4rem;
      background-color: #d2f9f0;
    }
    .list-item {
      padding: 15px;
      padding-bottom: 14px;
      border-bottom: none;
    }
  }
  .fix_btn_group {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 44px;
    width: 92%;
    padding: 12px 4%;
    line-height: 44px;
    background-color: rgba(255, 255, 255, 0.8);
    .deliver {
      display: block;
      width: 100%;
      background-color: #00b38a;
      color: #fff;
      font-size: 1.6rem;
      text-align: center;
      border-radius: 3px;
    }
  }
}
</style>