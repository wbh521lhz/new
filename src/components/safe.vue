<template>
  <div id="app">
    <safe1></safe1>
    <safe2></safe2>
    <safe3></safe3>
  </div>
</template>

<script>
import safe1 from "../views/safe1.vue"
import safe2 from "../views/safe2.vue"
import safe3 from "../views/safe3.vue"
export default {
    name:"app",
    components:{safe1,safe2,safe3}
}
</script>


<style>
*{
  padding: 0;
  margin: 0;
}
</style>
