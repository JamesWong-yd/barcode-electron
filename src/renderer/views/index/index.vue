<template>
  <div class="my-container-box">
    <div class="my-item">
      <div class="my-item-font">
        <i class="iconfont">&#xe641;</i>
        <p>生成条形码</p>
      </div>
    </div>
    <div class="my-item">
      <div class="my-item-font">
        <i class="iconfont">&#xebb5;</i>
        <p>生成二维码</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zvale-index',
  components: {
    mainNav: require('@/components/main-nav').default
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
.my-container-box {
  display: flex;
  .my-item {
    width: 50%;
    border-right: 1px solid #e8eaec;
    position: relative;
    .my-item-font {
      cursor: pointer;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 200px;
      height: 200px;
      transform: translate(-50%, -50%);
      text-align: center;
      i {
        color: #808695;
        font-size: 150px;
      }
    }
    .my-item-font:hover i{
      color: #17233d
    }
  }
  .my-item:last-child {
    border: none;
  }
}
</style>

