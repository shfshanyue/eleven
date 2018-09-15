<template>
  <div class="container">
    <div class="title">任选</div>
    <div class="list">
      <div v-for="(way, index) in ways" :key="way" v-text="way" :class="index === wayIndex? 'item.active' : 'item'" @tap="wayIndex = index"></div>
    </div>
    <div class="title">注数</div>
    <div class="list">
      <div v-for="count in counts" :key="count" v-text="count" :class="index === countIndex ? 'item.active' : 'item'" @tap="countIndex = index"></div>
    </div>
    <navigator :url="url">
      <div class="button">随机生成</div>
    </navigator>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ways: [
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八"
      ],
      counts: [1, 2, 5, 10],
      wayIndex: 1,
      countIndex: 2
    }
  },
  
  computed: {
    url () {
      return `/pages/result/main?way=${this.wayIndex+1}&count=${this.counts[this.countIndex]}` 
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

  border: 6rpx solid #c8c8c8;
  border-radius: 50%;
}

.item.active {
  color: #f60;
  border-color: #f60;
}

.button {
  position: absolute;
  bottom: 48rpx;
  left: 50%;
  transform: translateX(-50%);
  color: #f60;

  padding: 20rpx 30rpx;
  border: 4rpx solid #f60;
}
</style>
