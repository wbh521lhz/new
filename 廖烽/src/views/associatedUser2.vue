<template>
    <div id="coniatner">
        <ul>
            <li  class="li-1">
                <p>保险箱按此顺序拨号,拖动可排序</p>
                <img @click="del(item)" src="../assets/Forknumber.png" alt="">
            </li>
            <li class="li-2">
                <div class="bj">
                    <img  src="../assets/user.png" alt="">
                </div>
                <p>13149869439</p>
            </li>
            <li class="li-3">
                <div class="bj">
                    <img  src="../assets/user.png" alt="">
                </div>
                <p>13333333333</p>
            </li>
            <li class="li-4">
                <span>49869439</span>
                <div class="del">
                    <p>删除</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"coniatner",
    
}
</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    #coniatner{
        width: 7.5rem;
        height: 11.55rem;
    }
    #coniatner ul{
        width: 7.5rem;
        height: 5.5rem;
    }
    #coniatner ul .li-1{
        width: 7.5rem;
        height: 0.82rem;
        background-color: #f7eabd;
    }
    #coniatner ul .li-1 p{
        float: left;
        font-size: 23px;
        margin-left: 0.3rem;
        margin-top: 0.12rem;
    }
    #coniatner ul .li-1 img{
        float: left;
        width: 0.47rem;
        height: 0.47rem;
        margin-left: 1.34rem;
        margin-top: 0.15rem;
    }
    #coniatner ul .li-2{
        width: 7.2rem;
        height: 1.4rem;
        border-bottom: 1px  solid #e6e6e6;
        margin-left: 0.3rem;
    }
    #coniatner ul .li-2 .bj{
        width: 0.9rem;
        height: 0.9rem;
        background-color: #b38eff;
        border-radius: 3px;
        float: left;
        margin-top: 0.3rem;
    }
    #coniatner ul .li-2 img{
       width: 0.57rem;
       height: 0.65rem;
       position: absolute;
       margin-left: 0.15rem;
       margin-top: 0.16rem;
    }
    #coniatner ul .li-2 p{
        float: left;
        font-size: 20px;
        margin-top: 0.5rem;
        margin-left: 0.1rem;
    }
    #coniatner ul .li-3{
        width: 7.2rem;
        height: 1.4rem;
        border-bottom: 1px  solid #e6e6e6;
        margin-left: 0.3rem;
    }
    #coniatner ul .li-3 .bj{
        width: 0.9rem;
        height: 0.9rem;
        background-color: #b38eff;
        border-radius: 3px;
        float: left;
        margin-top: 0.3rem;
    }
    #coniatner ul .li-3 img{
       width: 0.57rem;
       height: 0.65rem;
       position: absolute;
       margin-left: 0.15rem;
       margin-top: 0.16rem;
    }
    #coniatner ul .li-3 p{
        float: left;
        font-size: 20px;
        margin-top: 0.5rem;
        margin-left: 0.1rem;
    }
    #coniatner ul .li-4{
        width: 7.2rem;
        height: 1.4rem;
        border-bottom: 1px  solid #e6e6e6;
        margin-left: 0.3rem;
    }
    #coniatner ul .li-4 span{
        font-size: 20px;
        float: left;
        margin-top: 0.6rem;
    }
    #coniatner ul .del{
        float: left;
        width: 1.4rem;
        height: 1.4rem;
        background-color: #fe0000;
        margin-left: 4.34rem;
    }
    #coniatner ul .del p{
        font-size: 25px;
        color: white;
        margin-top: 0.39rem;
        margin-left: 0.35rem
    }
</style>
