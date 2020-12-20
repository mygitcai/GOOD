//页面渲染完成，执行js
window.onload=function(){
    //加载盒子模拟获取数据后隐藏
    //获取数据
    //document.querySelector("css选择器")，返回一个元素
    var topbarCart=document.querySelector(".topbar-cart");
    var loading=document.querySelector(".loading");
    

    //鼠标进入购物车盒子
    //onmouseenter:鼠标进入事件
    topbarCart.onmouseenter=function(){


        //鼠标进入3秒后，loading盒子执行添加隐藏类名操作
        setTimeout(function(){
            //classList.add(要添加的类名)
            loading.classList.add("hide");},3000)
        
    }
    topbarCart.onmouseleave=function(){
        //删除类名
        loading.classList.remove("hide")
    }

}