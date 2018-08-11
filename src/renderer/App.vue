<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'electron'
}
</script>
<style>
@import url('./assets/iconfont.css');
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
