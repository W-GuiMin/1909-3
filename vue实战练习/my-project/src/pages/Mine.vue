<template name="component-name">
  <div id="content">
    <div class="logininfo">
      <!-- 登陆状态 -->
      <div class="haslogin center" v-if="ustate" ref="usta">
        <a class="button">简历&gt;</a>
        <div class="headcon">
          <img class="headpic" src="//www.lgstatic.com/common/image/pc/default_girl_headpic2.png" />
        </div>
        <div class="name">{{ustate}}</div>
      </div>
      <!-- 未登录 -->
      <div class="nologin center" v-if="operation">
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
    <a class="logout" v-if="ustate" ref="abtn" @click="btn">退出登录</a>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      operation: true
    };
  },
  created() {
    this.$store.dispatch("setTabbar", 2);
  },
  methods: {
    toRegister() {
      this.$router.push({
        name: "login"
      });
    },
    btn() {
      sessionStorage.removeItem("uid");
      this.$refs.usta.style.display = "none";
      this.$refs.abtn.style.display = "none";
      this.operation = true;
    },
    user() {
      if (window.sessionStorage.getItem("uid")) {
        this.operation = false;
      } else {
        this.operation = true;
      }
    }
  },
  computed: {
    ustate() {
      return window.sessionStorage.getItem("uid");
    }
  },
  watch: {
    ustate: {
      handler() {
        if (window.sessionStorage.getItem("uid")) {
          this.operation = false;
        } else {
          this.operation = true;
        }
      }
    }
  }
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
    .haslogin {
      position: relative;
      width: 100%;
      top: 10px;
      height: 111px;
      .button {
        position: absolute;
        color: #00b38a;
        font-size: 1.4rem;
        right: 0;
      }
      .headcon {
        height: 81px;
        width: 81px;
        margin: 0 auto;
        border-radius: 40.5px;
        background-clip: padding-box;
        overflow: hidden;
        background-color: #f6f6f6;
        .headpic {
          width: 72px;
          height: 72px;
          margin: 4px 0 0 1px;
          border-radius: 36px;
          background-clip: padding-box;
        }
      }
      .name {
        font-size: 1.4rem;
        color: #333333;
        height: 22px;
        line-height: 22px;
      }
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
    height: 192px;
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
  .logout {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #1fc8a1;
    color: #fff;
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
}
</style>