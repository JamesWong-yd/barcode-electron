<template>
  <div class="maintool-container">
    <div class="maintool-center">
      <!-- 放大 -->
      <div>
        <i class="iconfont icon-add" @click="handleEnlarge"></i>
      </div>
      <!-- 缩小 -->
      <div>
        <i class="iconfont icon-remove" @click="handleReduce"></i>
      </div>
      <!-- 清除 -->
      <div>
        <i class="iconfont icon-refresh" @click="handleClear"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tools',
  methods: {
    handleEnlarge() {
      this.$emit('handleEnlarge')
    },
    handleReduce() {
      this.$emit('handleReduce')
    },
    handleClear() {
      this.$emit('handleClear')
    }
  }
}
</script>
<style lang="less" scoped>
.maintool-container {
  width: 40px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background: #f1f1f1;
  .maintool-center {
    div {
      text-align: center;
      margin-bottom: 30px;
      i {
        font-size: 30px;
        color: #808695;
        cursor: pointer;
      }
      i:hover {
        color: #141924;
      }
    }
    div:last-child{
      margin-bottom: 0;
    }
  }
}
</style>
