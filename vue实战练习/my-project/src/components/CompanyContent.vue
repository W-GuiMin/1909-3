<template name="component-name">
  <div>
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
          1.负责电商平台iOS客户端的迭代和开发；
          <br />2.负责代码的Review和维护
          <br />3.iOS应用程序的优化，以及核心模块的开发
          <br />4.设计和开发文档的撰写与整合
          <br />
          <br />任职要求：
          <br />1. 两年以上iOS应用开发经验（有电商app开发经验者优先）；
          <br />2. 掌握各种基础数据结构,通用算法,常用协议
          <br />3. 熟悉MVC,MVVM等多种设计模式,对系统结构和模块设计有深刻理解
          <br />4. 能熟练使用Swift独立开发项目,熟悉自定义控件
          <br />5. 掌握各类框架及第三方框架的使用以及了解设计思想
          <br />6. 具备快速定位问题的能力,对新技术感兴趣，学习能力强，有钻研和开拓精神
          <br />7. 具有良好的沟通能力、合作能力、逻辑分析与表达能力
          <br />8. 具有较强的团队协作精神及高度的责任心，良好的编码规范
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
        <ul class="list"></ul>
        <a class="eval-all" href="/user/expsList_6502497.html"></a>
      </div>
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
export default {};
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