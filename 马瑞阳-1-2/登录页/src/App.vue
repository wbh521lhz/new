<template>
  <div id="app">
    <Appheader></Appheader>
    <Appbanner></Appbanner>
    <Appcontainer></Appcontainer>
    <Appfooter></Appfooter>
  </div>
</template>

<script>
import fontsizeset from '.././fontsizeset'
import Appheader from './components/Appheader'
import Appbanner from './components/Appbanner'
import Appcontainer from './components/Appcontainer'
import Appfooter from './components/Appfooter'
export default {
  name: 'app',
  components:{ Appheader,Appbanner,Appcontainer,Appfooter }
}
</script>

<style>
  #app{
    width:7.5rem;
  }
</style>
