<template name="component-name">
  <div>
    <div id="content" v-if="search">
      <div class="linputer">
        <!-- 城市名 -->
        <div class="lbutton" @click="goCitys">
          <span class="city">全国</span>
          <span class="cityicon"></span>
        </div>
        <div class="rinput">
          <input class="inputer" type="text" placeholder="搜索职位或公司" v-model="value" />
          <!-- 搜索 -->
          <span class="search" @click="searchValue">
            <em class="searchicon"></em>
          </span>
        </div>
      </div>
      <div class="listcon">
        <ul class="history" v-if="history">
          <!-- 历史查询 -->
          <li class="history-item">
            <span class="text" v-text="this.hCity"></span>
            <div class="delcon" @click="historyDle">
              <span class="delicon"></span>
            </div>
          </li>
        </ul>
        <div class="custominfo" v-if="custominfo">将搜索地区和关键词设为定制条件</div>
      </div>
    </div>

    <div v-if="cityshow">
      <div class="goSearch" @click="goSearch">
        <span class="corner"></span>
      </div>
      <van-index-bar>
        <van-index-anchor index="1">热门城市</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="2">标题2</van-index-anchor>
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />...
      </van-index-bar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { IndexBar, IndexAnchor } from "vant";
Vue.use(IndexBar).use(IndexAnchor);
export default {
  data() {
    return {
      search: true,
      cityshow: false,
      history: false,
      custominfo: false,
      value: "",
      hCity: "前端"
    };
  },
  created() {},
  methods: {
    a() {
      if (this.hCity) {
        this.history = true;
      } else {
        this.history = false;
      }
    },
    goCitys() {
      this.cityshow = true;
      this.search = false;
    },
    goSearch() {
      this.search = true;
      this.cityshow = false;
    },
    searchValue() {
      this.hCity = this.value;
      this.a();
    },
    historyDle() {
      this.hCity = "";
      this.a();
    }
  },
  components: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
#content {
  margin-bottom: 45px;
  .linputer {
    position: relative;
    border-bottom: 1px solid #e8e8e8;
    height: 45px;
    .lbutton {
      float: left;
      height: 45px;
      line-height: 45px;
      font-size: 1.5rem;
      text-align: center;
      width: 88px;
      border-right: 1px solid #e8e8e8;
      span {
        display: inline-block;
      }
      .cityicon {
        width: 8.5px;
        height: 7px;
        background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon.png)
          no-repeat -1px -2.5px;
        background-size: 250px 250px;
        margin-left: 5px;
      }
    }
    .rinput {
      height: 45px;
      margin-left: 89px;
      position: relative;
      .inputer {
        display: block;
        border: none;
        padding: 10px 0;
        height: 25px;
        line-height: 25px;
        color: #333333;
        width: 75%;
        margin: 0 0 0 5%;
        font-size: 1.5rem;
        float: left;
      }
      .search {
        display: inline-block;
        width: 20%;
        height: 45px;
        line-height: 45px;
        float: right;
        position: relative;
        .searchicon {
          display: block;
          margin: 14px auto 0 auto;
          width: 17px;
          height: 17px;
          background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon.png)
            no-repeat -14px -2.5px;
          background-size: 250px 250px;
        }
      }
    }
  }
  .listcon {
    .history {
      background-color: #fafafa;
      color: #666666;
      .history-item {
        height: 45px;
        line-height: 45px;
        font-size: 1.4rem;
        border-bottom: 1px solid #e8e8e8;
        padding: 0 0 0 23px;
        .text {
          display: inline-block;
          height: 45px;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 75%;
        }
        .delcon {
          float: right;
          width: 40px;
          height: 45px;
          text-align: center;
          width: 14%;
          .delicon {
            display: inline-block;
            height: 10px;
            width: 12px;
            background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon.png)
              no-repeat -71.5px -4px;
            background-size: 250px 250px;
          }
        }
      }
    }
    .custominfo {
      height: 35px;
      line-height: 35px;
      font-size: 1.4rem;
      color: #5d897e;
      background-color: #e7f7f3;
      text-align: center;
      margin-top: 16px;
      margin-bottom: 14px;
    }
  }
}

.goSearch {
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
</style>