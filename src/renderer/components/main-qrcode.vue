<template>
  <div class="barcode-box">
    <div class="barcode-box-item" v-for="(item, index) in code" :key="index">
      <canvas class="barcodeitem"
           :id="'barcodeitem'+index"
           :style="scale"></canvas>
      <p>{{item}}</p>
    </div>
  </div>
</template>
<script>
import Qrcode from 'qrcode'
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
      code: []
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
          Qrcode.toCanvas(
            document.getElementById('barcodeitem' + index),
            item,
            function(error) {
              if (error) console.error(error)
              console.log('success!')
            }
          )
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
    scalecomputed() {}
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
    flex-direction: column;
    margin: 20px;
    flex-grow: 1;
    .barcodeitem {
      margin: 0 auto;
      width: 260px;
      height: 100px;
      transition: all 1s;
    }
    p {
      text-align: center;
    }
  }
}
</style>
