<template>
<div class="wewe">
  <div class="head">
      <div class="head_one">
        <img src="../assets/状态栏.png" alt="" class="head_one_img">
      </div>
      <div class="head_two">
        <img src="../assets/Return.png" alt="" class="head_two_img">
        <span class="head_two_span">保险箱详情</span>
      </div>
  </div>
  </div>
</template>
<script>
import {fontsizeset} from './../fontsizeset'
export default {
  
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.head{
  width: 7.5rem;
  height: 1.28rem;
  clear: both;
}
.head_one{
  width: 7.5rem;
  height: 0.4rem;
  background-color: black;
}
.head_one_img{
  float: left;
  width: 7.5rem;
  margin-top: 0.05rem
} 
.head_two{
  width: 7.5rem;
  height: 0.84rem;
  background-color: #17181a;
}
.head_two_img{
  float: left;
  margin-left: 0.3rem;
  margin-top: 0.23rem;
}
.head_two_span{
  font-size: 0.3rem;
  color: white;
  float: left;
  margin-left: 2.45rem;
  margin-top: 0.23rem;
}
</style>
