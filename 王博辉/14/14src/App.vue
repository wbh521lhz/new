<template>
  <div id="app">
    <Head></Head>
    <Content></Content>
  </div>
</template>

<script>
import { fontsizeset } from "./fontsizeset";
import Head from "./components/Head";
import Content from "./components/Content";

export default {
  name: "app",
  components: {
    Head,
    Content
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 7.5rem;
  height: 13.34rem;
  background: url("./assets/PeachBlossomFairy.png");
  background-repeat: no-repeat;
  background-position: -1rem 0rem;
}
</style>
