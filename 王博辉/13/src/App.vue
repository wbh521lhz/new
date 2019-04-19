<template>
  <div id="app">
    <Head></Head>
    <Content></Content>
  </div>
</template>

<script>
import {fontsizeset} from './fontsizeset'
import Head from './components/Head.vue'
import Content from './components/Content'
export default {
  name: 'app',
  components: {
    Head,Content
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

</style>
