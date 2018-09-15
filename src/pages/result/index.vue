<template>
  <div class="container">
    <div v-for="value in values" :key="value" class="list">
      <div class="index">
        {{ index }}
      </div>
      <div v-for="(v, i) in value" v-text="v" :key="v" class="item" :style="{ width: width + 'rpx', height: width + 'rpx' }"></div>
    </div>
  </div>
</template>

<script>
import random from '@/utils/random'

export default {
  data () {
    return {
      values: [],
      width: 170
    }
  },

  mounted () {
    const { way, count } = this.$mp.query
    this.values = Array.from({ length: count }, x => random(11, way))
    // 70 为 container 两边的 padding, 20 为 item 两边的 margin
    this.width = way > 4 ? (750 - 70 - 16) / way - 20 : 146
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

.index {
  width: 16rpx;
}
</style>
