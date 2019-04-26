<template>
    <div class="container" >
        <div class='mat' >
            <div class="hub" >
                <span class="you" >用户名</span>
            </div>
            <div class="contest" >
                <input class='tall' type="text" placeholder="请输入用户名" >    
            </div>
        </div>

        <div class='mat' >
            <div class="hub">
                <span class="you" >密码</span>
            </div>
            <div class="contest" >
                <input class='tall' type="password" placeholder="请输入密码" >    
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .container{
        width: 7.5rem;
        float:left;
    }
    *{
        margin:0;
        padding:0;
    }
    .hub{
        height: 0.9rem;
        width: 1.73rem;
        float: left;
    }
    .you{
        font-size: 0.3rem;
        color: black;
        font-weight: bolder;
        font-family: '仿宋';
        padding-left: 0.45rem;
        line-height: 0.86rem;
        float:left;
    }
    .tall{
        width: 5.77rem;
        height: 0.9rem;
        font-size: 0.3rem;
        border: none;
        border: rgb(229, 229, 229);
        float:left;
    }
    .contest{
        width: 5.74rem;
        height: 0.9rem;
        border-top: solid 0.01rem rgb(229, 229, 229);
        float:left;
    }
    .mat{
        height: 0.9rem;
        width: 7.5rem;
        border-top: solid 0.01rem rgb(229, 229, 229);
        border-bottom: solid 0.01rem rgb(229, 229, 229);
    }
</style>
