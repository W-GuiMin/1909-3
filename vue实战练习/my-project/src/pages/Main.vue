<template>
  <div>
    <Header left="none" right="none">拉勾网</Header>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from "../components/Tabbar";
import Header from "../components/Header";
export default {
  components: {
    Header,
    Tabbar
  }
};
</script>