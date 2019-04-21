<template>
  <div class="content">
    <div class="content_one">
        <input type="text" value="    通知消息" class="content_one_input">
      <img src="../assets/未标题-1.png" alt class="content_one_img">
    </div>
    <div class="content_two">
        <input type="text" value="    修改密码" class="content_two_input">
      <img src="../assets/未标题-1.png" alt class="content_two_img">
    </div>
    <div class="content_three">
        <input type="text" value="    意见反馈" class="content_three_input">
      <img src="../assets/未标题-1.png" alt class="content_three_img">
    </div>
    <div class="content_four">
        <input type="text" value="    关于" class="content_four_input">
      <img src="../assets/未标题-1.png" alt class="content_four_img">
    </div>
    <div class="content_five">
        <span class="content_five_span">退出登录</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.content_one {
  width: 7.5rem;
  height: 1rem;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  float: left;
}
.content_one_img{
    float: left;
    position: relative;
    bottom: 1rem;
    margin-left: 7.07rem;
    margin-top: 0.44rem;
}
.content_one_input{
    width: 7.5rem;
    height: 1rem;
    font-size: 0.28rem;
    opacity: 0.3;
    color: black;
    font-weight: bolder;
    float: left;
}
.content_two {
  width: 7.5rem;
  height: 1rem;
  float: left;
}
.content_two_img{
    float: left;
    position: relative;
    bottom: 1rem;
    margin-left: 7.07rem;
    margin-top: 0.44rem;
}
.content_two_input{
    width: 7.5rem;
    height: 1rem;
    font-size: 0.28rem;
    opacity: 0.3;
    color: black;
    font-weight: bolder;
    float: left;
}
.content_three {
  width: 7.5rem;
  height: 1rem;
  border-bottom: 1px solid #e6e6e6;
  float: left;
  margin-top: 0.3rem;
}
.content_three_img{
    float: left;
    position: relative;
    bottom: 1rem;
    margin-left: 7.07rem;
    margin-top: 0.44rem;
}
.content_three_input{
    width: 7.5rem;
    height: 1rem;
    font-size: 0.28rem;
    opacity: 0.3;
    color: black;
    font-weight: bolder;
    float: left;
}
.content_four {
  width: 7.5rem;
  height: 1rem;
  border-bottom: 1px solid #e6e6e6;
  float: left;
}
.content_four_img{
    float: left;
    position: relative;
    bottom: 1rem;
    margin-left: 7.07rem;
    margin-top: 0.44rem;
}
.content_four_input{
    width: 7.5rem;
    height: 1rem;
    font-size: 0.28rem;
    opacity: 0.3;
    color: black;
    font-weight: bolder;
    float: left;
}
.content_five{
    float: left;
    width: 7.5rem;
    height: 1.1rem;
    background-color: white;
    opacity: 0.3;
    margin-top: 0.24rem;
    line-height: 1.1rem;
}
.content_five_span{
    float: left;
    font-size: 0.28rem;
    color: red;
    font-weight: bolder;
    margin-left: 3.3rem
}
</style>
