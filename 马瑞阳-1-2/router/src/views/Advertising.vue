<template>
  <div id="app">
    <Advertisingheader></Advertisingheader>
    <Advertisingcontainer></Advertisingcontainer>
    <meta http-equiv="refresh" content="3;URL=/Login">
  </div>
</template>

<script>
// import fontsizeset from '.././fontsizeset'
import Advertisingheader from '../components/Advertisingheader.vue';
import Advertisingcontainer from '../components/Advertisingcontainer.vue';
export default {
  name: '#app',
  components:{ Advertisingcontainer , Advertisingheader},
} 
</script>

<style>
  #app{
    width:7.5rem;
  }
</style>
