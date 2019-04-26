<template>
  <div id="app">
    <Appheader></Appheader>
    <Appcontainer></Appcontainer>
  </div>
</template>

<script  type="text/javascript" >
import fontsizeset from '.././fontsizeset';
import Appheader from './components/Appheader.vue';
import Appcontainer from './components/Appcontainer.vue';
export default {
  name: '#app',
  components:{ Appheader,Appcontainer },
} 
</script>

<style>
  #app{
    width:7.5rem;
  }
</style>
