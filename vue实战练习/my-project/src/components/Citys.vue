<template name="component-name">
  <div>
    <div class="citys">
      <div class="goSearch" @click="toSearch">
        <span class="corner"></span>
      </div>
      <van-index-bar :index-list="indexList" :sticky="false" @click="show($event)">
        <van-index-anchor index="1">热门城市</van-index-anchor>
        <van-cell title="北京" @click="show($event)" />
        <van-cell title="上海" @click="show($event)" />
        <van-cell title="广州" @click="show($event)" />
        <van-cell title="深圳" @click="show($event)" />
        <van-cell title="成都" @click="show($event)" />
        <van-cell title="杭州" @click="show($event)" />
        <van-index-anchor index="2">ABCDEF</van-index-anchor>
        <van-cell title="蚌埠" @click="show($event)" />
        <van-cell title="保定" @click="show($event)" />
        <van-cell title="北京" @click="show($event)" />
        <van-cell title="宝鸡" @click="show($event)" />
        <van-cell title="包头" @click="show($event)" />
        <van-cell title="长春" @click="show($event)" />
        <van-cell title="成都" @click="show($event)" />
        <van-cell title="赤峰" @click="show($event)" />
        <van-cell title="重庆" @click="show($event)" />
        <van-cell title="长沙" @click="show($event)" />
        <van-cell title="常州" @click="show($event)" />
        <van-cell title="沧州" @click="show($event)" />
        <van-cell title="潮州" @click="show($event)" />
        <van-cell title="东莞" @click="show($event)" />
        <van-cell title="大连" @click="show($event)" />
        <van-cell title="大理" @click="show($event)" />
        <van-cell title="大庆" @click="show($event)" />
        <van-cell title="大同" @click="show($event)" />
        <van-cell title="德阳" @click="show($event)" />
        <van-cell title="德州" @click="show($event)" />
        <van-cell title="佛山" @click="show($event)" />
        <van-cell title="阜阳" @click="show($event)" />
        <van-cell title="福州" @click="show($event)" />
        <van-index-anchor index="3">FHIJ</van-index-anchor>
        <van-cell title="桂林" @click="show($event)" />
        <van-cell title="贵阳" @click="show($event)" />
        <van-cell title="广州" @click="show($event)" />
        <van-cell title="赣州" @click="show($event)" />
        <van-cell title="淮安" @click="show($event)" />
        <van-cell title="邯郸" @click="show($event)" />
        <van-cell title="哈尔滨" @click="show($event)" />
        <van-cell title="合肥" @click="show($event)" />
        <van-cell title="呼和浩特" @click="show($event)" />
        <van-cell title="海口" @click="show($event)" />
        <van-cell title="黄石" @click="show($event)" />
        <van-cell title="衡水" @click="show($event)" />
        <van-cell title="海外" @click="show($event)" />
        <van-cell title="河源" @click="show($event)" />
        <van-cell title="衡阳" @click="show($event)" />
        <van-cell title="杭州" @click="show($event)" />
        <van-cell title="惠州" @click="show($event)" />
        <van-cell title="湖州" @click="show($event)" />
        <van-cell title="菏泽" @click="show($event)" />
        <van-cell title="吉安" @click="show($event)" />
        <van-cell title="金华" @click="show($event)" />
        <van-cell title="吉林" @click="show($event)" />
        <van-cell title="江门" @click="show($event)" />
        <van-cell title="荆门" @click="show($event)" />
        <van-index-anchor index="4">KLMN</van-index-anchor>
        <van-cell title="开封" @click="show($event)" />
        <van-cell title="昆明" @click="show($event)" />
        <van-cell title="六安" @click="show($event)" />
        <van-cell title="聊城" @click="show($event)" />
        <van-cell title="廊坊" @click="show($event)" />
        <van-cell title="漯河" @click="show($event)" />
        <van-cell title="乐山" @click="show($event)" />
        <van-cell title="拉萨" @click="show($event)" />
        <van-cell title="洛阳" @click="show($event)" />
        <van-cell title="临沂" @click="show($event)" />
        <van-cell title="龙岩" @click="show($event)" />
        <van-cell title="连云港" @click="show($event)" />
        <van-cell title="兰州" @click="show($event)" />
        <van-cell title="柳州" @click="show($event)" />
        <van-cell title="泸州" @click="show($event)" />
        <van-cell title="马鞍山" @click="show($event)" />
        <van-cell title="茂名" @click="show($event)" />
        <van-cell title="眉山" @click="show($event)" />
        <van-cell title="绵阳" @click="show($event)" />
        <van-cell title="梅州" @click="show($event)" />
        <van-cell title="宁波" @click="show($event)" />
        <van-cell title="南昌" @click="show($event)" />
        <van-cell title="南充" @click="show($event)" />
        <van-cell title="宁德" @click="show($event)" />
        <van-cell title="南京" @click="show($event)" />
        <van-cell title="南宁" @click="show($event)" />
        <van-cell title="南通" @click="show($event)" />
        <van-cell title="南阳" @click="show($event)" />
        <van-index-anchor index="5">OPQR</van-index-anchor>
        <van-cell title="莆田" @click="show($event)" />
        <van-cell title="萍乡" @click="show($event)" />
        <van-cell title="濮阳" @click="show($event)" />
        <van-cell title="青岛" @click="show($event)" />
        <van-cell title="秦皇岛" @click="show($event)" />
        <van-cell title="清远" @click="show($event)" />
        <van-cell title="泉州" @click="show($event)" />
        <van-cell title="衢州" @click="show($event)" />
        <van-cell title="日照" @click="show($event)" />
        <van-index-anchor index="6">STUV</van-index-anchor>
        <van-cell title="韶关" @click="show($event)" />
        <van-cell title="上海" @click="show($event)" />
        <van-cell title="石家庄" @click="show($event)" />
        <van-cell title="三门峡" @click="show($event)" />
        <van-cell title="遂宁" @click="show($event)" />
        <van-cell title="宿迁" @click="show($event)" />
        <van-cell title="商丘" @click="show($event)" />
        <van-cell title="上饶" @click="show($event)" />
        <van-cell title="汕头" @click="show($event)" />
        <van-cell title="汕尾" @click="show($event)" />
        <van-cell title="绍兴" @click="show($event)" />
        <van-cell title="沈阳" @click="show($event)" />
        <van-cell title="三亚" @click="show($event)" />
        <van-cell title="深圳" @click="show($event)" />
        <van-cell title="苏州" @click="show($event)" />
        <van-cell title="泰安" @click="show($event)" />
        <van-cell title="天津" @click="show($event)" />
        <van-cell title="唐山" @click="show($event)" />
        <van-cell title="太原" @click="show($event)" />
        <van-cell title="台州" @click="show($event)" />
        <van-index-anchor index="7">WXYZ</van-index-anchor>
        <van-cell title="潍坊" @click="show($event)" />
        <van-cell title="武汉" @click="show($event)" />
        <van-cell title="芜湖" @click="show($event)" />
        <van-cell title="威海" @click="show($event)" />
        <van-cell title="乌鲁木齐" @click="show($event)" />
        <van-cell title="无锡" @click="show($event)" />
        <van-cell title="温州" @click="show($event)" />
        <van-cell title="西安" @click="show($event)" />
        <van-cell title="许昌" @click="show($event)" />
        <van-cell title="孝感" @click="show($event)" />
        <van-cell title="香港特别行政区" @click="show($event)" />
        <van-cell title="厦门" @click="show($event)" />
        <van-cell title="西宁" @click="show($event)" />
        <van-cell title="邢台" @click="show($event)" />
        <van-cell title="新乡" @click="show($event)" />
        <van-cell title="咸阳" @click="show($event)" />
        <van-cell title="襄阳" @click="show($event)" />
        <van-cell title="信阳" @click="show($event)" />
        <van-cell title="徐州" @click="show($event)" />
        <van-cell title="宜宾" @click="show($event)" />
        <van-cell title="银川" @click="show($event)" />
        <van-cell title="盐城" @click="show($event)" />
        <van-cell title="宜昌" @click="show($event)" />
        <van-cell title="运城" @click="show($event)" />
        <van-cell title="榆林" @click="show($event)" />
        <van-cell title="烟台" @click="show($event)" />
        <van-cell title="岳阳" @click="show($event)" />
        <van-cell title="扬州" @click="show($event)" />
        <van-cell title="淄博" @click="show($event)" />
        <van-cell title="珠海" @click="show($event)" />
        <van-cell title="镇江" @click="show($event)" />
        <van-cell title="湛江" @click="show($event)" />
        <van-cell title="张家口" @click="show($event)" />
        <van-cell title="肇庆" @click="show($event)" />
        <van-cell title="中山" @click="show($event)" />
        <van-cell title="遵义" @click="show($event)" />
        <van-cell title="郑州" @click="show($event)" />
        <van-cell title="漳州" @click="show($event)" />
        <van-cell title="株洲" @click="show($event)" />
        <van-cell title="长治" @click="show($event)" />
      </van-index-bar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell } from "vant";
Vue.use(IndexBar)
  .use(IndexAnchor)
  .use(Cell);
export default {
  data() {
    return {
      cityShow: true,
      indexList: [""]
    };
  },
  methods: {
    toSearch() {
      this.$parent.show = "SearchCompany";
    },
    show: function(ev) {
      //   window.console.log(ev.toElement.innerText);
      this.$store.dispatch("setSearchCity", ev.toElement.innerText);
      this.$parent.show = "SearchCompany";
    }
  }
  //   mounted: () => {
  //     const a = document.getElementsByClassName("van-cell");
  //     for (var i = 0; i < a.length; i++) {
  //       a[i].onclick = function() {
  //         // window.console.log(a[i].outerText);
  //       };
  //     }
  //   }
};
</script>
<style lang="scss" scoped>
.citys {
  //   z-index: 100;
  .goSearch {
    position: fixed;
    left: 0;
    top: 0;
    height: 45px;
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

  /deep/ .van-index-anchor {
    border-bottom: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
    height: 25px;
    line-height: 25px;
    padding: 0 15px;
    font-size: 1.2rem;
    color: #888;
    margin-top: -2px;
  }
  .van-index-bar {
    margin-top: 1px;
    padding-bottom: 43px;
  }
  .van-cell {
    background-color: #fff;
    padding: 0px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 1.5rem;
    color: #333;
    width: 33.3%;
    display: inline-block;
    text-align: center;
    &:not(:last-child)::after {
      border-bottom: none;
    }
    &:hover {
      background-color: #f0f0f0;
    }
  }
}
</style>