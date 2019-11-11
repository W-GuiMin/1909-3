<template name="component-name">
  <div>
    <section class="form_container">
      <header class="form_header">
        <h2 v-text="title?title:'登录拉勾'" ref="title"></h2>
        <a class="brother_link" v-text="head?head:'注册'" @click="goLogin"></a>
      </header>
      <form class="form_body form_code" method="post">
        <div class="input_label phone_wrapper">
          <span class="area_code" v-if="phone?0:1">0086</span>
          <div class="area_code_list" v-if="phone?0:1">
            <dl class="code_list_main">
              <dt>常用</dt>
              <dd data-code="0086">中国</dd>
              <dd data-code="00852">中国香港</dd>
              <dd data-code="00886">中国台湾</dd>
              <dd data-code="00853">中国澳门</dd>
              <dd data-code="001">美国</dd>
              <dt>A</dt>
              <dd data-code="0061">澳大利亚</dd>
              <dd data-code="00853">中国澳门</dd>
              <dd data-code="00353">爱尔兰</dd>
              <dt>B</dt>
              <dd data-code="0055">巴西</dd>
              <dt>D</dt>
              <dd data-code="0049">德国</dd>
              <dt>E</dt>
              <dd data-code="007">俄罗斯</dd>
              <dt>F</dt>
              <dd data-code="0033">法国</dd>
              <dt>H</dt>
              <dd data-code="0082">韩国</dd>
              <dt>J</dt>
              <dd data-code="001">加拿大</dd>
              <dt>M</dt>
              <dd data-code="0060">马来西亚</dd>
              <dd data-code="001">美国</dd>
              <dt>R</dt>
              <dd data-code="0081">日本</dd>
              <dt>T</dt>
              <dd data-code="00886">中国台湾</dd>
              <dd data-code="0066">泰国</dd>
              <dt>X</dt>
              <dd data-code="00852">中国香港</dd>
              <dd data-code="0065">新加坡</dd>
              <dt>Y</dt>
              <dd data-code="0091">印度</dd>
              <dd data-code="0044">英国</dd>
              <dt>Z</dt>
              <dd data-code="0086">中国</dd>
            </dl>
            <p class="tips">
              如果没有找到你所在的归属地，
              <br />请拨打客服电话
              <a href="tel:4006282835">4006282835</a> 解决。
            </p>
          </div>
          <input
            v-model="value1"
            type="text"
            :placeholder="input1?input1:'请输入常用手机号'"
            class="input_text phone_input"
            :style="{paddingLeft:padd?'0rem':'8rem'}"
          />
        </div>
        <div class="input_label">
          <input
            v-model="value2"
            type="password"
            class="input_text vcode_input"
            :placeholder="input2?input2:'请输入收到的验证码'"
          />
          <input
            type="button"
            v-if="phone?0:1"
            class="input_text vcode_link"
            value="获取验证码"
            placeholder="获取验证码"
          />
        </div>

        <div class="input_label btn_group">
          <input type="button" class="submit_btn" :value="btn" @click="abtn" />
        </div>
        <div class="register_agreement" v-if="footer?footer:0">
          注册拉勾代表你已同意
          <a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a>
        </div>
      </form>
      <footer class="form_footer">
        <span class="signin_type_btn" ref="btn" v-text="login" @click="show"></span>
      </footer>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
import router from "../routers";
Vue.use(Toast);
export default {
  props: [
    "title",
    "head",
    "phone",
    "footer",
    "padd",
    "btn",
    "login",
    "input1",
    "input2"
  ],
  data() {
    return {
      value1: "",
      value2: "",
      user: []
    };
  },
  methods: {
    goLogin() {
      //登录注册也切换
      if (this.head === "登录") {
        this.$router.push({
          name: "login"
        });
      }
      if (this.head === "注册") {
        this.$router.push({
          name: "register"
        });
      }
    },
    show() {
      // window.console.log(this.$refs.btn.innerText);
      if (this.$refs.btn.innerText == "密码登录") {
        this.$parent.numShow = true;
        this.$parent.phoneShow = false;
      }
      if (this.$refs.btn.innerText == "手机号登录") {
        this.$parent.numShow = false;
        this.$parent.phoneShow = true;
      }
    },
    abtn() {
      // 正则
      let reg1 = /^1[3-9]\d{9}$/;
      let reg2 = /^([0-9A-Za-z\-_.]+)@([0-9a-z]+.[a-z]{2,3}(.[a-z]{2})?)$/;
      // 判断输入框非空
      if (this.value1 && this.value2) {
        //登录功能
        if (this.$refs.title.innerText === "登录拉勾") {
          // 判断是否有用户登录
          if (window.sessionStorage.getItem("uid")) {
            this.$toast("已有用户登录，继续登录请退出");
          } else {
            //正则验证
            if (reg1.test(this.value1) || reg2.test(this.value1)) {
              // 发送请求验证用户名是否已验证
              this.$axios
                .get("http://localhost:3000/login", {
                  params: { userName: this.value1 }
                })
                .then(({ data }) => {
                  this.user = data;
                  //已验证
                  if (this.user.length) {
                    //判断密码是否正确，正确则把用户名存到sessionStorage里，跳转到主页
                    if (this.user[0].password === this.value2) {
                      sessionStorage.setItem("uid", this.value1);
                      router.push({
                        name: "mine"
                      });
                      (this.value1 = ""), (this.value2 = "");
                    } else {
                      this.$toast("密码错误，请重新输入");
                      this.value2 = "";
                    }
                  } else {
                    this.$toast("该用户未注册");
                    window.console.log(this.user.length);
                  }
                });
            } else {
              this.$toast("手机或邮箱格式不正确");
            }
          }
        }
        // 注册功能
        if (this.$refs.title.innerText === "注册拉勾") {
          //正则验证
          if (reg1.test(this.value1) || reg2.test(this.value1)) {
            // 发送请求判断用户名是否验证
            this.$axios
              .get("http://localhost:3000/login", {
                params: { userName: this.value1 }
              })
              .then(({ data }) => {
                this.user = data;
                //返回记录表示已被注册，则不能进行注册
                if (this.user.length) {
                  this.$toast("该用户已被注册");
                } else {
                  //没有记录则进行插入操作
                  this.$axios.get("http://localhost:3000/register", {
                    params: { userName: this.value1, password: this.value2 }
                  });
                  this.$toast("注册成功");
                }
              });
          } else {
            this.$toast("手机或邮箱格式不正确");
          }
        }
      } else {
        this.$toast("请填写完整信息");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.form_container {
  .form_header {
    position: relative;
    line-height: 2.86rem;
    h2 {
      color: #333;
      font-weight: 400;
      font-size: 1.85rem;
      margin: 0.46rem 0 3.85rem;
    }
    .brother_link {
      position: absolute;
      right: 0;
      top: 0;
      color: #00b38a;
      font-size: 0.6em;
    }
  }
  .form_body {
    .input_label {
      position: relative;
      z-index: 0;
      ::-webkit-input-placeholder {
        color: #ccc;
      }
      .input_text {
        width: 100%;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        padding: 1rem 0;
        font-size: 1.6rem;
        color: #333;
        border: 0;
        border-bottom: 1px solid #e8e9eb;
      }
    }
    .input_label:first-child {
      z-index: 2;
    }
    .input_label:nth-child(2) {
      margin-top: 0.5rem;
      .vcode_input {
        padding-right: 7.5rem;
      }
      .vcode_link {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
        width: initial;
        height: 3.9rem;
        padding: 0;
        font-size: 1.3rem;
        color: #666;
        border: 0;
        background: 0 0;
      }
    }
    .phone_wrapper {
      .area_code {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        width: 6.7rem;
        padding: 0.97rem 1.44rem 0.97rem 0;
        font-size: 1.62rem;
        line-height: 1.9rem;
        &:after {
          transform: translateY(-50%);
          display: inline-block;
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0.39rem 0.36rem 0;
          margin-left: 0.46rem;
          border-color: #ccc transparent transparent;
        }
      }
      .area_code_list {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        display: none;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        background-color: #fff;
        dl {
          line-height: 36px;
          cursor: default;
          dt {
            padding-left: 0.43rem;
            line-height: 0.51rem;
            color: #666;
            background-color: #f9f9fa;
            font-size: 0.35rem;
          }
          dd {
            margin: 0;
            padding-left: 0.37rem;
            line-height: 1.2rem;
            color: #333;
            font-size: 0.43rem;
            box-shadow: inset 0 -1px 0 0 rgba(232, 233, 235, 0.5);
          }
        }
        .tips {
          color: #999;
          font-size: 0.32rem;
          padding: 0.8rem 0.13rem;
          text-align: center;
          a {
            color: #00b38a;
          }
        }
      }
      .phone_input {
        padding-left: 8rem;
      }
    }
    .btn_group {
      margin-top: 4.5rem;
      .submit_btn {
        width: 100%;
        height: 4.2rem;
        border-radius: 3px;
        background-color: #00b38a;
        color: #fff;
        font-size: 1.6rem;
        border: 0;
      }
    }
    .register_agreement {
      color: #999;
      font-size: 1.3rem;
      margin-top: 1.9rem;
      a {
        color: #666;
      }
    }
  }
  .form_footer {
    position: absolute;
    bottom: 3rem;
    .signin_type_btn {
      color: #00b38a;
      font-size: 1.5rem;
    }
  }
}
</style>