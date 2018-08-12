<template>
  <div class="barcode-box">
    <div class="barcode-box-item" v-for="(item, index) in code" :key="index">
      <canvas class="barcodeitem"
              :class="'barcodeitem'+index"
              :style="scale"></canvas>
    </div>
  </div>
</template>
<script>
import Jsbarcode from 'jsbarcode'
export default {
  name: 'mainbarcode',
  props: {
    barcode: {
      type: Array
    },
    scale: {
      type: Object
    }
  },
  data() {
    return {
      barcodeBoxHeight: '',
      code: [],
      options: {
        format: 'CODE128',
        width: 2,
        height: 100,
        textMargin: 0,
        fontSize: 20,
        lineColor: '#17233d'
      }
    }
  },
  created() {
    if (this.code.length) {
      this.init()
    }
  },
  methods: {
    init() {
      this.code = Array.from(
        new Set(
          this.barcode.filter(item => {
            return item !== ''
          })
        )
      )
      this.code.map((item, index) => {
        this.$nextTick(() => {
          Jsbarcode('.barcodeitem' + index, item, this.options)
        })
      })
    }
  },
  computed: {
    barcodeLength() {
      return this.barcode.join('')
    },
    scalecomputed() {
      return JSON.stringify(this.scale)
    }
  },
  watch: {
    barcodeLength() {
      this.init()
    },
    scalecomputed() {
      this.init()
    }
  }
}
</script>
<style lang="less" scoped>
.barcode-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .barcode-box-item {
    display: flex;
    justify-content: center;
    margin: 20px;
    flex-grow: 1;
    .barcodeitem {
      width: 260px;
      height: 100px;
      transition: all 1s;
    }
  }
}
</style>
