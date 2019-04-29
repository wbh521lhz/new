<template>
    <div id="header">
       <img class="img1" src="../assets/状态栏.jpg" alt="">
       <img class="img2" src="../assets/Return.png" alt="">
       <span>报警记录</span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #header{
        width: 7.5rem;
        height: 1.28rem;
        background-color: #17181a;
    }
    #header .img1{
        width: 100%;
        float: left;
    }
    #header .img2{
        width: 0.2rem;
        height: 0.36rem;
        float: left;
        margin-top: 0.25rem;
        margin-left: 0.3rem;
    }
    #header span{
        font-size: 20px;
        color: white;
        float: left;
        margin-top: 0.2rem;
        margin-left: 2.6rem;
    }
</style>

