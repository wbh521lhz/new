<template>
  <div id="app">
    <associatedUser1></associatedUser1>
    <associatedUser2></associatedUser2>
    <associatedUser3></associatedUser3>
  </div>
</template>

<script>
import associatedUser1 from "../views/associatedUser1.vue"
import associatedUser2 from "../views/associatedUser2.vue"
import associatedUser3 from "../views/associatedUser3.vue"
export default {
    name:"app",
    components:{associatedUser1,associatedUser2,associatedUser3}
}
</script>


<style>
    
</style>
