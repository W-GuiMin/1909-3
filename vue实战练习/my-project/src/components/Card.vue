<template name="component-name">
  <div>
    <van-card
      class="post"
      v-for="(c,index) in companydataComputed"
      :key="index"
      currency
      :num="c.salary"
      :price="c.createTime"
      :desc="c.positionName"
      :title="c.companyName"
      :thumb="c.companyLogo"
      @click="homeToDetails(index)"
      v-model="c.positionId"
    />
    <p class="list-more" v-if="more" @click="Loading">{{load}}</p>
    <van-button loading type="info" v-if="MoresLoading" class="list-mores" loading-text="加载中..." />
    <div id="copyright">
      <p>©2015 lagou.com, all right reserved</p>
      <div class="copyright-item">
        <span class="phone active">移动版&nbsp;·&nbsp;</span>
        <span class="computer">电脑版&nbsp;·&nbsp;</span>
        <a href="#header">回顶部</a>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Button } from "vant";
Vue.use(Card).use(Button);
export default {
  data() {
    return {
      more: true,
      MoresLoading: false,
      timer: null,
      companydata: [],
      lenght: 0,
      maxLenght: 0,
      load: "加载更多",
      positionId: 0,
      companyId: 0
    };
  },
  created() {
    this.Loading();
  },
  methods: {
    Loading() {
      clearInterval(this.timer);
      this.MoresLoading = true;
      this.more = false;
      this.timer = setInterval(() => {
        this.more = true;
        this.MoresLoading = false;
      }, 1000);
      this.$axios.get("http://localhost:3000/companydata").then(({ data }) => {
        this.companydata = data;
        this.maxLenght = this.companydata.length;
      });
      if (this.lenght <= this.maxLenght) {
        this.lenght += 15;
      } else {
        this.lenght = this.maxLenght;
        this.load = "已经到底了";
      }
    },
    homeToDetails(index) {
      this.positionId = this.companydata[index].positionId;
      this.companyId = this.companydata[index].companyId;
      this.$router.push({
        name: "details",
        params: { positionId: this.positionId, companyId: this.companyId }
      });
    }
  },
  computed: {
    companydataComputed() {
      return this.companydata.slice(0, this.lenght);
    }
  }
};
</script>

<style lang="scss" scoped>
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
.list-more,
.list-mores {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  border: none;
  background-color: #fafafa;
}
#copyright {
  text-align: center;
  font-size: 1rem;
  margin-top: 30px;
  padding-bottom: 85px;
  color: #333333;
  .copyright-item {
    height: 32px;
    line-height: 32px;
    .phone {
      color: #999;
    }
    a {
      color: #333;
    }
  }
}
</style>