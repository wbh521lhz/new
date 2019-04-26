<template>
    <div id="header">
        <img class="img1" src="../assets/状态栏.jpg" alt="">
        <img class="img2" src="../assets/Return.png" alt="">
        <img class="img3" src="../assets/add.png" alt="">
        <p>关联用户</p>
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
        width: 7.5rem;
        float: left;
    }
    #header .img2{
        float: left;
        width: 0.2rem;
        margin-left: 0.3rem;
        margin-top: 0.26rem;
    }
    #header .img3{
        float: left;
        width: 0.5rem;
        margin-left: 6.3rem;
        margin-top: 0.2rem;
    }
    #header p{
        position: absolute;
        font-size: 23px;
        color: white;
        top: 0.55rem;
        left: 3rem;
    }
</style>
