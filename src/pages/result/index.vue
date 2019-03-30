<template>
  <div>
    <div class="container">
      <div v-for="value in values" :key="value" class="list">
        <div class="index">
          {{ index + 1 }}
        </div>
        <div v-for="(v, i) in value" v-text="v" :key="v" :class="'item ' + type" :style="{ width: width + 'rpx', height: width + 'rpx', fontSize: fontSize, borderWidth: borderWidth }"></div>
      </div>
    </div>
    <div class="footer">
      <div class="button generate" @click="generate">
        继续生成
      </div>
      <button class="share button" open-type="share">分享</button>
    </div>
  </div>
</template>

<script>
import random from '@/utils/random'

export default {
  data () {
    return {
      values: [],
      width: 146,
      fontSize: '1.4em',
      borderWidth: '6rpx',
      type: 'eleven'
    }
  },

  mounted () {
    const { way, count, type } = this.$mp.query
    this.generate()
    // 70 为 container 两边的 padding, 20 为 item 两边的 margin

    const o = {
      eleven: `11选5模拟器 (${count}注任选${way})`, 
      double: '双色球',
      super: '大乐透'
    }
    const title = o[type]
    wx.setNavigationBarTitle({
      title
    })

    this.width = way > 4 ? (750 - 70 - 16) / way - 20 : 146
    this.fontSize = way > 4 ? `${1 + (7 - way) * 0.1}em` : '1.4em'
    this.borderWidth = way > 4 ? `${10 - way}rpx` : '6rpx'
  },

  methods: {
    generate () {
      // 我也不知道为啥子在 template 中取不到query
      const { way, count, type } = this.$mp.query
      this.type = type
      if (type === 'eleven') {
        this.values = Array.from({ length: count }, x => random(11, way))
      }
      // 33选6 + 16选1
      if (type === 'double') {
        this.values = Array.from({ length: count }, x => random(33, 6).concat(random(16, 1)))
      }
      // 35选5 + 12选1
      if (type === 'super') {
        this.values = Array.from({ length: count }, x => random(35, 5).concat(random(12, 2)))
      }
    }
  },

  onUnload () {
    this.values = []
  },

  onShareAppMessage () {
    const { way, count, type } = this.$mp.query

    return {
      title: '11选5小助手',
      path: `/pages/result/main?way=${way}&count=${count}&type=${type}`
    } 
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #c8c8c8;
}

.item {
  margin: 20rpx 10rpx;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 6rpx solid #f60;
  border-radius: 50%;
  color: #f60;
}

.item.double:last-child,
.item.super:nth-last-child(-n+2),
.item.blue {
  border: 6rpx solid #559;
  border-radius: 50%;
  color: #559;
}

.index {
  width: 16rpx;
}
</style>
