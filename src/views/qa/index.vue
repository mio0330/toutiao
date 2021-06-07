<template>
  <div class="qa-container">
    <van-steps :active="2">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: 'QaIndex'
}
</script>

<style lang="less" scoped></style>
