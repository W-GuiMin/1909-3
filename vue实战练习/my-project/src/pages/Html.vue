<template name="component-name">
  <div>
    <Header>职位详情</Header>
    <div id="content">
      <div class="postitle">
        <h2 class="title">iOS 开发工程师</h2>
        <div class="collicon activeable">
          <span class="icon notcoll"></span>
          <span class="text">未收藏</span>
        </div>
      </div>

      <div class="detail">
        <div class="items">
          <span class="item salary">
            <em class="icon"></em>
            <span class="text">12k-18k</span>
          </span>
          <span class="item workaddress">
            <em class="icon"></em>
            <span class="text">深圳</span>
          </span>
          <span class="item jobnature">
            <em class="icon"></em>
            <span class="text">全职</span>
          </span>
          <span class="item workyear">
            <em class="icon"></em>
            <span class="text">3-5年</span>
          </span>
          <span class="item education">
            <em class="icon"></em>
            <span class="text">本科及以上</span>
          </span>
        </div>
        <div class="temptation">职位诱惑：行业标杆,团建多多,福利多多,年轻的团队</div>
      </div>

      <div
        class="company activeable"
        data-lg-tj-id="19v6"
        data-lg-tj-no="0030"
        data-lg-tj-cid="30100"
      >
        <img
          src="https://www.lgstatic.com/i/image2/M01/B0/0F/CgoB5lv7kgGAZ7EDAAAhp2Mcd8Y418.png"
          alt
          class="logo"
        />
        <div class="desc">
          <div class="dleft">
            <h2 class="title">Hua.com 花礼网</h2>
            <p class="info">
              电商,移动互联网
              / 不需要融资
              / 50-150人
            </p>
          </div>
          <span class="dright"></span>
        </div>
      </div>

      <div class="positiondesc">
        <header class="header">职位描述</header>
        <div class="content">
          <p>1.负责电商平台iOS客户端的迭代和开发；</p>
          <p>2.负责代码的Review和维护</p>
          <p>
            3.iOS应用程序的优化，以及核心模块的开发
            <br />
          </p>
          <p>
            4.设计和开发文档的撰写与整合
            <br />
          </p>
          <p>
            <br />
          </p>
          <p>任职要求：</p>
          <p>
            1. 两年以上iOS应用开发经验（有电商app开发经验者优先）；
            <br />
          </p>
          <p>
            2. 掌握各种基础数据结构,通用算法,常用协议
            <br />
          </p>
          <p>
            3. 熟悉MVC,MVVM等多种设计模式,对系统结构和模块设计有深刻理解
            <br />
          </p>
          <p>4. 能熟练使用Swift独立开发项目,熟悉自定义控件</p>
          <p>
            5. 掌握各类框架及第三方框架的使用以及了解设计思想
            <br />
          </p>
          <p>
            6. 具备快速定位问题的能力,对新技术感兴趣，学习能力强，有钻研和开拓精神
            <br />
          </p>
          <p>
            7. 具有良好的沟通能力、合作能力、逻辑分析与表达能力
            <br />
          </p>
          <p>
            8. 具有较强的团队协作精神及高度的责任心，良好的编码规范
            <br />
          </p>
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
        <ul class="list"></ul>
        <a class="eval-all" href="/user/expsList_6502497.html"></a>
      </div>
      <Footer />
      <div class="fix_btn_group">
        <div
          class="deliver deliver_resume rows_bar"
          data-lg-tj-id="19v6"
          data-lg-tj-no="0020"
          data-lg-tj-cid="6502497"
        >投递简历</div>
      </div>
    </div>
  </div>
</template>
<script>
require("../assets/css/style.css");
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    Footer,
    Header
  }
};
</script>
<style  scoped>
#content .deliver {
  display: block;
}
</style>