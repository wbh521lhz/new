<template>
  <div id="app">
    <alarmRecord1></alarmRecord1>
    <alarmRecord2></alarmRecord2>
    <alarmRecord3></alarmRecord3>
  </div>
</template>

<script>
import alarmRecord1 from "../views/alarmRecord1.vue"
import alarmRecord2 from "../views/alarmRecord2.vue"
import alarmRecord3 from "../views/alarmRecord3.vue"
export default {
    name:"app",
    components:{alarmRecord1,alarmRecord2,alarmRecord3}
}
</script>


<style>
    
</style>
