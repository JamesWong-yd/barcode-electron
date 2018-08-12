<template>
  <div class="my-container-box">
    <div v-for="(item, index) in pick"
         :key="index"
         :class="[item.active ? 'my-item': 'my-item-active']">
      <div class="my-item-font"
           @click="handleSelect(item.title)">
        <i :class="['iconfont', item.icon]"></i>
        <p v-if="item.active">{{item.title}}</p>
      </div>
      <div v-if="item.show"
           class="my-create-box"
           :style="changStyle">
           <div :is="changeComponent"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zvale-index',
  components: {
    mainNav: require('@/components/main-nav').default,
    barcode: require('./barcode').default,
    qrcode: require('./qrcode').default
  },
  data() {
    return {
      pick: [
        {
          title: '生成条形码',
          icon: 'icon-barcode',
          active: true,
          show: false,
          component: 'barcode'
        },
        {
          title: '生成二维码',
          icon: 'icon-qrcode',
          active: true,
          show: false,
          component: 'qrcode'
        }
      ],
      changStyle: {},
      changeComponent: ''
    }
  },
  mounted() {},
  methods: {
    handleSelect(val) {
      this.pick.map(item => {
        item.active = false
        item.show = false
        this.changStyle = {}
        this.changeComponent = ''
        if (item.title === val) {
          item.active = true
          item.show = true
          let _this = this
          setTimeout(function() {
            _this.changStyle = {
              // width: '100%',
              // height: '100%',
              // 'border-radius': 0
              opacity: 1
            }
            _this.changeComponent = item.component
          }, 1000)
        }
      })
    }
    // 变大
  }
}
</script>
<style lang="less" scoped>
.my-container-box {
  display: flex;
  overflow-x: hidden;
  .my-item {
    width: 50%;
    flex-grow: 1;
    border-right: 1px solid #e8eaec;
    position: relative;
    transition: all 2s;
    .my-item-font {
      cursor: pointer;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 200px;
      height: 200px;
      transform: translate(-50%, -50%);
      text-align: center;
      transition: all 2s;
      i {
        color: #808695;
        transition: font-size 2s;
        font-size: 150px;
      }
    }
    .my-item-font:hover i {
      color: #141924;
    }
  }
  .my-item-active {
    width: 40px;
    transition: all 2s;
    border-right: 1px solid #e8eaec;
    position: relative;
    .my-item-font {
      cursor: pointer;
      position: absolute;
      width: 40px;
      height: 40px;
      top: 0;
      left: 0;
      transform: translate(0, 0);
      text-align: center;
      transition: all 2s;
      i {
        color: #808695;
        font-size: 30px;
        transition: font-size 2s;
      }
    }
    .my-item-font:hover i {
      color: #141924;
    }
  }
  .my-item:last-child {
    border: none;
  }
  .my-create-box {
    overflow-y: auto;
    transition: all 2s;
    position: relative;
    z-index: 100;
    // position: absolute;
    // border-radius: 50%;
    width: 100%;
    height: 100%;
    opacity: 0;
    // left: 50%;
    // top: 50%;
    background: #fff;
    // transform: translate(-50%, -50%);
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  .my-create-box::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #f5f5f5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  .my-create-box::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  /*定义滑块 内阴影+圆角*/
  .my-create-box::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #808695;
  }
}
</style>

