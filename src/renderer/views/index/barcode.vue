<template>
  <div ref="maincontainer" class="barcode-container">
    <!-- 内容盒子 -->
    <div class="barcode-box-c" :class="{'barcode-box-Active': opacity}">
      <main-barcode :barcode="code" :scale="scale"></main-barcode>
    </div>
    <!-- 搜索栏 -->
    <div class="code-input-box" :style="{top: !searchFlag ? 0 : '', transform: !searchFlag? 'translate(-50%, 0)': ''}">
      <div class="code-icon" v-if="searchFlag">
        <i class="iconfont icon-barcode"></i>
      </div>
      <div class="code-input-co">
        <Input v-model="tochangData"
               id="textareaBox"
               class="code-input"
               type="textarea"
               :autosize="{ minRows: 1, maxRows: 5 }"
               @on-focus="handleFocus"
               @on-blur="handleBlur"
               @on-keyup.ctrl="toCreateBarcodeClick"
               placeholder="请输入所需生成的条码编号,创建多个条码请回车换行输入..." />
        <div class="icon-create">
          <Icon type="ios-brush" @click="toCreateBarcode"/>
        </div>
      </div>
    </div>
    <!-- 工具栏 -->
    <main-tool class="main-tool"
               :style="{left: !searchFlag ? 0 : ''}"
               @handleClear="handleClear"
               @handleEnlarge="handleEnlarge"
               @handleReduce="handleReduce"></main-tool>
  </div>
</template>
<script>
export default {
  name: 'barcode',
  data() {
    return {
      tochangData: '',
      localtion: '',
      searchFlag: true,
      opacity: true,
      hoverStyle: '29px',
      changeStyle: '29px',
      code: [],
      baseSize: 1,
      scale: {}
    }
  },
  methods: {
    handleEnlarge() {
      this.baseSize += 0.1
      this.sizeComputed()
    },
    handleReduce() {
      if (this.baseSize < 0.5) {
        this.$Message.error('已经缩放至最小值')
        return
      }
      this.baseSize -= 0.1
      this.sizeComputed()
    },
    handleClear() {
      this.baseSize = 1
      this.sizeComputed()
    },
    sizeComputed() {
      this.scale = {
        width: 260 * this.baseSize + 'px',
        height: 100 * this.baseSize + 'px'
      }
    },
    handleFocus(e) {
      e.target.style.height = this.hoverStyle
    },
    handleBlur(e) {
      this.hoverStyle = e.target.style.height
      e.target.style.height = this.changeStyle
    },
    toCreateBarcodeClick(e) {
      if (e.keyCode === 13) {
        e.target.blur()
        this.toCreateBarcode(true)
      }
    },
    toCreateBarcode(count) {
      if (
        this.tochangData === '' ||
        this.tochangData.split('\n').filter(item => {
          return item !== ''
        }).length === 0
      ) {
        this.$Message.error('请输入条码编号...')
        return
      }
      this.opacity = false
      this.searchFlag = false
      if (!count) {
        let obj = document
          .querySelector('#textareaBox')
          .getElementsByTagName('textarea')[0]
        this.hoverStyle = obj.style.height
        obj.style.height = this.changeStyle
      }
      let _this = this
      setTimeout(function() {
        _this.opacity = true
      }, 300)
      this.createBarcode(this.tochangData)
    },
    createBarcode(val) {
      this.code = val.split('\n')
    }
  },
  components: {
    mainTool: require('@/components/main-tools').default,
    mainBarcode: require('@/components/main-barcode').default
  }
}
</script>
<style lang="less" scoped>
.barcode-container {
  position: relative;
  height: 100%;
  .code-input-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 1s;
    width: 50%;
    max-width: 800px;
    .code-icon {
      width: 150px;
      margin: -50px auto;
      i {
        font-size: 150px;
      }
    }
    .code-input-co {
      display: flex;
      background: #f1f1f1;
      border: 2px solid #ccc;
      border-radius: 5px;
      margin: 5px auto;
      .icon-create {
        width: 60px;
        text-align: center;
        i {
          font-size: 16px;
          color: #808695;
          line-height: 28px;
          cursor: pointer;
        }
        i:hover {
          color: #141924;
        }
      }
    }
  }
  .main-tool {
    position: fixed;
    transition: left 1s;
    top: 50%;
    left: -40px;
    transform: translate(0, -50%);
  }
  .barcode-box-c {
    padding: 40px 0 20px 40px;
    height: 100%;
    overflow-y: auto;
    opacity: 0;
  }
  .barcode-box-Active {
    transition: opacity 1s;
    opacity: 1;
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  .barcode-box-c::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #f5f5f5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  .barcode-box-c::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  /*定义滑块 内阴影+圆角*/
  .barcode-box-c::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #808695;
  }
}
</style>
<style>
.code-input-box .code-input textarea {
  transition: height 0.5s;
  border: none;
  outline: none;
  resize: none;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 0 0 2px #ccc;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.code-input-box .code-input textarea::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.code-input-box .code-input textarea:focus {
  border: none;
  box-shadow: 0 0 0 2px #ccc;
}
</style>
