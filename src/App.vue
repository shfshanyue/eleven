<script>
export default {
}
</script>

<style>
view {
  box-sizing: border-box;
  font-family: PingFangSC, "Microsoft Yahei";
  color: #c8c8c8;
}

page {
  background-color: #f8f8f8;
}

.container {
  padding: 0 35rpx 120rpx; 
}

.title {
  font-size: 1.5em;
  font-weight: medium;
  border-bottom: 3rpx solid #c8c8c8;
  text-align: center;
  color: #f60;

  padding: 10rpx 0;
  margin: 20rpx 0;
}

.footer {
  position: fixed;
  bottom: 0;
  height: 120rpx;
  width: 100%;
  border-top: 1px solid #f60;

  display: flex;
  font-size: 1.2em;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  border: none;
}

.button::after {
  border-radius: 0;
  border: none;
}

.generate {
  flex-grow: 2;
  background-color: #f60;
  color: #fff;
}

.share {
  flex-grow: 1;
  color: #f60;
}
</style>
