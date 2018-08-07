<template>
  <div class="my-header">
    <div class="my-header-title">
      <Icon type="ios-appstore-outline" />
      <slot></slot>
    </div>
    <div class="my-header-btn">
      <Icon type="md-remove" 
            @click="$electron.ipcRenderer.send('minWindow')" />
      <Icon :type=" isWindow ? 'md-square-outline':'ios-browsers-outline'"
            size="16"
            @click="changWindow" />
      <Icon type="md-close"
            @click="$electron.ipcRenderer.send('closeWindow')" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isWindow: false
    }
  },
  methods: {
    changWindow() {
      this.$electron.ipcRenderer.send('maxWindow')
      this.isWindow = !this.isWindow
    }
  }
}
</script>
<style lang="less" scoped>
.my-header {
  overflow: hidden;
  -webkit-app-region: drag;
  background: rgb(253, 56, 30);
  .my-header-title {
    float: left;
    margin-left: 5px;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    line-height: 36px;
    height: 36px;
    i {
      color: #fff;
      font-size: 30px;
    }
  }
  .my-header-btn {
    float: right;
    margin-right: 10px;
    i {
      -webkit-app-region: no-drag;
      cursor: pointer;
      display: inline-block;
      font-size: 20px;
      width: 26px;
      height: 36px;
      line-height: 36px;
      color: #fff;
      text-align: center;
    }
    i:hover {
      color: #ccc;
    }
  }
}
</style>
