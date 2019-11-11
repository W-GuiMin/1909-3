<template name="component-name">
  <div>
    <div id="content">
      <div class="linputer">
        <!-- 城市名 -->
        <div class="lbutton" @click="toCity">
          <span class="city">{{SearchCity}}</span>
          <span class="cityicon"></span>
        </div>
        <div class="rinput">
          <input class="inputer" type="text" placeholder="搜索职位或公司" v-model="value" />
          <!-- 搜索 -->
          <span class="search" @click="searchValue(value)">
            <em class="searchicon"></em>
          </span>
        </div>
      </div>
      <div class="listcon">
        <ul class="history" ref="history">
          <!--历史记录-->
          <li class="activeable history-item" v-if="SearchText" ref="history">
            <span class="text">{{SearchText}}</span>
            <div class="delcon">
              <span class="delicon" @click="clear"></span>
            </div>
          </li>
        </ul>
        <!--查询成功-->
        <div class="custominfo" v-if="custominfo">将搜索地区和关键词设为定制条件</div>
        <!-- 没有符合条件 -->
        <ul class="list" v-if="list">
          <li class="list-empty">
            <span class="icon"></span>
            <span class="text">拉勾上暂时没有这样的职位</span>
          </li>
        </ul>
        <van-card
          class="post"
          v-for="(c,index) in searchData"
          :key="index"
          currency
          :num="c.salary"
          :price="c.createTime"
          :desc="c.positionName+'['+c.city+']'"
          :title="c.companyName"
          :thumb="c.companyLogo"
          @click="searchToDetails(index)"
          v-model="c.positionId"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Card } from "vant";
Vue.use(Card);
export default {
  data() {
    return {
      custominfo: false,
      list: false,
      value: "",
      positionId: 0,
      companyId: 0,
      searchData: []
    };
  },
  methods: {
    toCity() {
      this.$parent.show = "Citys";
    },
    searchValue(value) {
      if (value) {
        this.$store.dispatch("setSearchText", value);
        this.$refs.history.style.display = "none";
        this.$axios
          .get("http://localhost:3000/searchdata", {
            params: { City: this.SearchCity, Name: this.SearchText }
          })
          .then(({ data }) => {
            this.searchData = data;
          });
      }
    },
    clear() {
      this.$store.dispatch("setSearchText", "");
    },
    searchToDetails(index) {
      this.positionId = this.searchData[index].positionId;
      this.companyId = this.searchData[index].companyId;
      this.$router.push({
        name: "details",
        params: { positionId: this.positionId, companyId: this.companyId }
      });
    }
  },
  computed: {
    SearchCity() {
      return this.$store.getters.getSearchCity;
    },
    SearchText() {
      return this.$store.getters.getSearchText;
    }
  },
  watch: {
    searchData: {
      handler() {
        if (this.searchData.length) {
          this.$refs.history.style.display = "none";
          this.custominfo = true;
          this.list = false;
        } else {
          this.custominfo = false;
          this.list = true;
        }
      }
    }
  }
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
        &:active {
          background-color: #f0f0f0;
        }
        .searchicon {
          display: block;
          margin: 14px auto 0 auto;
          width: 17px;
          height: 17px;
          background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon.png)
            no-repeat;
          background-position: -14px -2.5px;
          background-size: 250px 250px;
          &:active {
            background-position: -14px -20.5px;
          }
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
    .list {
      .list-empty {
        text-align: center;
        font-size: 1.5rem;
        margin-top: 30px;
        color: #c2cfcc;
        .icon {
          width: 20px;
          height: 20px;
          background: url(//www.lgstatic.com/images/mobile/asset/common/img/icon.png)
            no-repeat -70px -18.5px;
          background-size: 250px 250px;
          display: inline-block;
          vertical-align: middle;
        }
        .text {
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .van-card {
      padding: 14px;
      border-bottom: 1px solid #e8e8e8;
      background-color: #fff;
      font-size: 65.5%;
      color: #333;
      &:not(:first-child) {
        margin-top: 0px;
      }
      .van-card__thumb {
        display: inline-block;
        float: left;
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }
      .van-card__content {
        height: 62px;
        color: #333;
        min-height: 0px;
        .van-card__title {
          display: block;
          font-size: 1.6rem;
          margin-bottom: 6px;
          width: 80%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: bold;
        }
        .van-card__desc {
          font-size: 1.2rem;
          float: left;
          width: 60%;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
        }
        .van-card__bottom {
          .van-card__price {
            font-size: 1rem;
            color: #888;
          }
          .van-card__num {
            font-size: 1.6rem;
            color: #00b38a;
            float: right;
            line-height: 15px;
            float: right;
            margin-top: -17px;
            position: relative;
            &::before {
              content: " ";
              position: absolute;
              display: block;
              width: 8px;
              height: 13px;
              background: #fff;
            }
          }
        }
      }
    }
  }
}
</style>