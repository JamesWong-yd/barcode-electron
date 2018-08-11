<template>
  <div id="main">
    <main-header>ZVALE-Tools</main-header>
    <router-view class="my-container" :style="{height: mainheight + 'px'}"></router-view>
  </div>
</template>
<script>
export default {
  name: 'main-page',
  components: {
    mainHeader: require('@/components/main-header').default
  },
  data() {
    return {
      mainheight: 0
    }
  },
  created() {
    this.mainheight = window.innerHeight - 36
  },
  mounted() {
    let _this = this
    window.onresize = function() {
      _this.mainheight = window.innerHeight - 36
    }
  }
}
</script>
<style lang="less" scoped>
.my-container {
  overflow-y: auto;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.my-container::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
.my-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
.my-container::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #808695;
}
</style>
