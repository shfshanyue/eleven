<template>
  <div class="container">
    <div class="title">任选</div>
    <div class="list">
      <div v-for="way in ways" v-text="way" class="item"></div>
    </div>
    <div class="title">注数</div>
    <div class="list">
      <div v-for="count in counts" v-text="count" class="item"></div>
    </div>
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
      counts: [1, 5, 10, 20]
    }
  },

  methods: {
  },

  created () {
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.item {
  width: 150rpx;
  height: 150rpx;
  margin: 10rpx;

  text-align: center;
  line-height: 150rpx;

  border: 4px solid red;
  border-radius: 50%;
}
</style>
