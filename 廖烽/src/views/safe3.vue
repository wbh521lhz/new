<template>
    <div id="footer">
        <img class="img1" src="../assets/fase2.png" alt="">
        <img class="img2" src="../assets/Opendoor1.png" alt="">
        <router-link to="/safe">
        <p class="p1">保险箱</p>
        </router-link> 
        <router-link to="/">
        <p class="p2">开门记录</p>
         </router-link>
         <router-link to="/alarmRecord">
            <img class="img3" src="../assets/Callthepolice1.png" alt="">
            <p class="p3">报警记录</p>
         </router-link>
        <router-link to="/associatedUser">
            <img class="img4" src="../assets/Relation1.png" alt="">
            <a class="p4" href="">关联用户</a>
        </router-link> 
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
    #footer{
        width: 7.5rem;
        height: 0.9rem;
        border-top: 1px solid black;
    }
    #footer .img1{
        float: left;
        width: 0.5rem;
        height: 0.52rem;
        margin-left: 0.69rem;
        margin-top: 0.12rem;
    }
    #footer .img2{
        float: left;
        width: 0.5rem;
        height: 0.5rem;
        margin-left: 1.37rem;
        margin-top: 0.1rem;
    }
    #footer .img3{
        float: left;
        width: 0.52rem;
        height: 0.52rem;
        margin-left: 1.37rem;
        margin-top: 0.1rem;
    }
    #footer .img4{
        float: left;
        width: 0.6rem;
        height: 0.55rem;
        margin-left: 1.3rem;
        margin-top: 0.08rem;
    }
    #footer .p1{
        float: left;
        font-size: 20px;
        position: absolute;
        margin-left: 0.4rem;
        margin-top: 0.65rem;
        color: #0091ff;
    }
    #footer .p2{
        font-size: 20px;
        color: #b0b0b0;
        position: absolute;
        margin-left: 2.1rem;
        margin-top: 0.65rem;
    }
    #footer .p3{
        font-size: 20px;
        color: #b0b0b0;
        position: absolute;
        margin-left: 4rem;
        margin-top: 0.65rem;
    }
    #footer .p4{
        text-decoration:rgb(255, 255, 255);
        font-size: 22px;
        color: #b0b0b0;
<<<<<<< HEAD
        margin-left: -1rem;
=======
<<<<<<< HEAD
        margin-left: -1rem;
=======
<<<<<<< HEAD
        margin-left: -1rem;
=======
        margin-left: -1.2rem;
>>>>>>> 廖烽第三次上传
>>>>>>> 廖烽第三次上传
>>>>>>> 廖烽第三次上传
        margin-top: 0.65rem;
    }
</style>
