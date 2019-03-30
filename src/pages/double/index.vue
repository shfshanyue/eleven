<template>
  <div>
    <div class="container">
      <div class="title">双色球/大乐透</div>
      <div class="list">
        <div :class="type === 'double' ? 'item.active' : 'item'" @tap="type = 'double'">双</div>
        <div :class="type === 'super' ? 'item.active' : 'item'" @tap="type = 'super'">乐</div>
      </div>
      <div class="title">注数</div>
      <div class="list">
        <div v-for="count in counts" :key="count" v-text="count" :class="index === countIndex ? 'item.active' : 'item'" @tap="countIndex = index"></div>
      </div>
    </div>
    <div class="footer">
      <navigator :url="url" class="button generate">
        随机生成
      </navigator>
      <button class="share button" open-type="share">分享</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      type: 'double',
      counts: [1, 2, 5, 10],
      // 注数
      countIndex: 2
    }
  },
  
  computed: {
    url () {
      return `/pages/result/main?way=7&count=${this.counts[this.countIndex]}&type=${this.type}` 
    }
  },

  onShareAppMessage () {
    return {
      title: '双色球模拟器',
      path: '/pages/double/main'
    } 
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 32rpx;
}

.item {
  width: 150rpx;
  height: 150rpx;
  margin: 10rpx;

  text-align: center;
  line-height: 150rpx;
  font-size: 1.4em;

  border: 6rpx solid #c8c8c8;
  border-radius: 50%;
}

.item.active {
  color: #f60;
  border-color: #f60;
}

</style>
