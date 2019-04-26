<template>
    <div id="One">
        <img class="img1" src="../assets/fase1.png" alt="">
        <img class="img2" src="../assets/Opendoor1.png" alt="">
        <img class="img3" src="../assets/Callthepolice1.png" alt="">
        <img class="img4" src="../assets/Relation2.png" alt="">
        <router-link to="/safe">
        <a class="a1" href="">保险箱</a>
        </router-link>
        <router-link to="/"><a class="a2" href="">开门记录</a></router-link>
          <router-link to="/alarmRecord"> <a class="a3" href="">报警记录</a></router-link>
        <a class="a4" href="">关联用户</a>
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
    #One{
        width: 7.5rem;
        height: 1rem;
        border-top: 1px solid black;
        margin-top: -0.9rem
    }
    #One .img1{
        float: left;
        width: 0.52rem;
        height: 0.52rem;
        margin-left: 0.68rem;
        margin-top: 0.1rem;
    }
    #One .img2{
        float: left;
        width: 0.52rem;
        height: 0.52rem;
        margin-left: 1.36rem;
        margin-top: 0.1rem;
    }
    #One .img3{
        float: left;
        width: 0.52rem;
        height: 0.52rem;
        margin-left: 1.36rem;
        margin-top: 0.1rem;
    }
    #One .img4{
        float: left;
        width: 0.58rem;
        height: 0.52rem;
        margin-left: 1.32rem;
        margin-top: 0.1rem;
    }
    #One a{
        text-decoration: rgb(255, 255, 255);
        color: #a8a8a8;
        float: left;
        font-size: 20px;
    }
    #One .a1{
        margin-left: 0.5rem;
    }
    #One .a2{
        margin-left: 0.9rem;
    }
    #One .a3{
        margin-left: 0.5rem;
    }
    #One .a4{
        margin-left: 0.65rem;
    }
</style>
