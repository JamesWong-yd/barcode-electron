<template>
  <div id="main">
    <main-header>AppStore</main-header>
    <router-view class="my-containaer"></router-view>
  </div>
</template>
<script>
export default {
  name: 'main-page',
  components: {
    mainHeader: require('@/components/main-header').default
  }
}
</script>
<style lang="less" scoped>
.my-containaer{
  width: 100%;
  height: 300px;
  overflow-y: scroll;
}
</style>
