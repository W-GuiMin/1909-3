<template name="component-name">
  <div id="content">
    <div class="logininfo">
      <!-- 未登录 -->
      <div class="nologin center">
        <a class="loginbut" @click="toRegister">登录 / 注册</a>
      </div>
    </div>
    <!-- 登录地址-->

    <div class="buttons">
      <router-link :to="{ name: 'send'}" class="button deliver">投递</router-link>
      <router-link :to="{ name: 'interview'}" class="button interview">面试</router-link>
      <router-link :to="{ name: 'invite'}" class="button invitation">邀约</router-link>
      <router-link :to="{ name: 'enshrine'}" class="button collect">收藏</router-link>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
import store from "../store";
export default {
  created() {
    store.setPage(2);
  },
  methods: {
    toRegister() {
      this.$router.push({
        name: "login"
      });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
#content {
  margin-bottom: 45px;
  padding: 0 15px;
  .logininfo {
    margin: 10px 0;
    .center {
      text-align: center;
      width: 125px;
      margin: 0 auto;
    }
    .nologin {
      height: 111px;
      .loginbut {
        font-size: 1.4rem;
        color: #fff;
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        text-align: center;
        margin: 0 auto;
        background-color: #1fc8a1;
        position: relative;
        top: 33px;
      }
    }
  }
  .buttons {
    margin-bottom: 10px;
    .button {
      display: block;
      width: 48%;
      height: 86px;
      line-height: 86px;
      background-color: #1fc8a1;
      text-align: center;
      color: #fff;
      font-size: 1.6rem;
      position: relative;
      float: left;
      margin: auto;
      margin-top: 10px;
    }
    .button.interview {
      float: right;
    }
    .button.collect {
      float: right;
    }
  }
}
</style>