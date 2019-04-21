<template>
  <div class="head">
    <div class="head_one">
        <img src="../assets/状态栏.png" alt="" class="head_one_img">
      </div>
       <div class="head_two">
        <img src="../assets/Return.png" alt="" class="head_two_img">
        <span class="head_two_span">我的</span>
      </div>
      <div class="head_three">
        <img src="../assets/Headportrait.png" alt="" class="head_three_img">
        <p class="head_three_p">2154003540</p>
      </div>
  </div>
</template>

<script>
import {fontsizeset} from '../fontsizeset'

export default {
  
}
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
}
.head_one{
  width: 7.5rem;
  height: 0.4rem;
}
.head_one_img{
  float: left;
  width: 7.5rem;
  margin-top: 0.05rem
} 
.head_two{
  width: 7.5rem;
  height: 0.84rem;
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
  margin-left: 2.9rem;
  margin-top: 0.23rem;
}
.head_three{
  width: 7.5rem;
  height: 4rem;
}
.head_three_img{
  /* float: left; */
  margin-left: 2.8rem;
  margin-top: 1.1rem;
}
.head_three_p{
  font-size: 0.24rem;
  color: white;
  margin-left: 3.13rem;
  margin-top: 0.1rem;
}
</style>
