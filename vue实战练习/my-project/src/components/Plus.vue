<template name="component-name">
  <div>
    <div id="content">
      <!--plus描述-->
      <div class="plus">
        <div class="bulb"></div>
        <p>开启拉勾PLUS（邀约功能）,将自己匿名展示给职位发布者,并可以收到来自企业的主动邀请;关闭此功能你将不会被任何企业发现,但可能会错过匹配的职位。</p>
        <div class="plusbtn">
          <span>已关闭</span>
          <div class="btn">
            <em class="circle"></em>
            <i class="close"></i>
          </div>
        </div>
      </div>

      <!--plus功能描述-->
      <div class="explain">
        <div class="txt">
          <p>1.本功能暂时只对部分拉勾认证企业开放，</p>
          <p class="indent">不必担心被海量邀请骚扰。</p>
        </div>
        <div class="txt">
          <p>2.不想被某些企业搜到？</p>
          <p class="indent">你可以自由设置想屏蔽的企业。</p>
        </div>
        <div class="txt">
          <p>3.投递简历后，企业会根据你的完整简历</p>
          <p class="indent">来决定是否邀请你参加面试。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
#content {
  padding: 15px;
  .plus {
    width: 100%;
    box-sizing: border-box;
    height: 205px;
    border: 1px solid #c7f3e9;
    background-color: #eafffa;
    padding: 12px;
    .bulb {
      width: 23px;
      height: 33px;
      background: url(//www.lagou.com/images/mobile/asset/common/img/icon2.png)
        no-repeat -95px -69px;
      background-size: 250px 250px;
      margin: 0 auto;
      margin-top: 6px;
    }
    p {
      font-size: 1.4rem;
      color: #3f4e4b;
      line-height: 20px;
      text-indent: 2em;
      margin-top: 9px;
    }
    .plusbtn {
      width: 45%;
      margin: 9px auto;
      span {
        color: #3f4e4b;
        display: inline-block;
        font-size: 1.3rem;
        position: relative;
        top: -10px;
        font-weight: bold;
      }
      .btn {
        display: inline-block;
        width: 68px;
        height: 28px;
        line-height: 28px;
        background-color: #5e5e5e;
        border-radius: 15px;
        position: relative;
        margin-left: 8px;
        .circle {
          display: inline-block;
          width: 24px;
          height: 24px;
          background-color: #fff;
          border-radius: 12px;
          position: absolute;
          top: 2px;
          left: 3px;
        }
        .close {
          width: 12px;
          height: 12px;
          background: url(//www.lagou.com/images/mobile/asset/common/img/icon2.png)
            no-repeat -130px -49px;
          background-size: 250px 250px;
          position: absolute;
          top: 9px;
          right: 10px;
        }
      }
    }
  }
  .explain {
    margin-top: 20px;
    padding-left: 8px;
    .txt {
      margin-top: 12px;
      p {
        color: #aaa;
        font-size: 1.2rem;
        line-height: 17px;
      }
    }
  }
}
</style>