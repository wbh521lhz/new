<template>
    <div class="header">
        <img class="img_one" src="../assets/状态栏（蓝色）.jpg" alt="">
        <div class="List_one">
            <img src="../assets/Return.png" alt="">
            <p>智能保险箱</p>
            <span>详情</span>
        </div>
        <div class="List_two">
            <img src="../assets/圈.png" alt="">
            <p>安全</p>
            <span>安全情况</span>
        </div>
        <div class="List_three">
            <p>最后一次位置: 幻想乡</p>
        </div>
        <div class="List_four">
            <p>当前状态: 打开</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header{
        width: 7.5rem;
        height: 8.8rem;
        background-color: #0091ff;
    }
    .header .img_one{
        float: left;
        width: 7.5rem;
    }
    .header .List_one{
        clear: both;
        width: 6.91rem;
        height: 0.88rem;
        margin-left: 0.3rem;
    }
    .header .List_one img{
        float: left;
        width: 0.2rem;
        margin-top: 0.25rem;
    }
    .header .List_one p{
        float: left;
        font-size: 22px;
        color: white;
        margin-top: 0.18rem;
        margin-left: 2.45rem;
    }
    .header .List_one span{
        float: left;
        font-size: 22px;
        color: white;
        margin-top: 0.18rem;
        margin-left: 1.85rem;
    }
    .header .List_two{
        width: 6.9rem;
        height: 6.6rem;
        margin-left: 0.3rem;
    }
    .header .List_two img{
        float: left;
        height: 6rem;
        margin-left: 0.45rem
    }
    .header .List_two p{
        float: left;
        font-size: 70px;
        color: white;
        margin-top: -3.6rem;
        margin-left: 2.4rem        
    }
    .header .List_two span{
        float: left;
        font-size: 22px;
        color: white;
        margin-top: -3.85rem;
        margin-left: 2.75rem
    }
    .header .List_three{
        width: 3.75rem;
        height: 0.89rem;
        border: 1px solid white;
        font-size: 22px;
        color: white;
    }
    .header .List_three p{
        font-size:20px;
        margin-left: 0.3rem;
        margin-top: 0.25rem
    }
    .header .List_four{
        width: 3.75rem;
        height: 0.89rem;
        border-top: 1px solid white;
        font-size: 22px;
        color: white;
        margin-left: 3.8rem;
        margin-top: -0.92rem;
    }
    .header .List_four p{
        font-size:20px;
        margin-left: 0.3rem;
        margin-top: 0.25rem
    }
</style>
