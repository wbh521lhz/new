<template>
  <div id="app">
    <Header></Header>
    <Coniater></Coniater>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../views/Header.vue"
import Coniater from "../views/Coniater.vue"
import Footer from "../views/Footer.vue"
export default {
    name:"app",
    components:{Header,Coniater,Footer}
}
</script>


<style>
*{
  padding: 0;
  margin: 0;
}
</style>
