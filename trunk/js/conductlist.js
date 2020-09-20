/* 轮播图 */
/* banner*/
/* slider */
//文档加载事件
$(function (){
    $("#slider").slidebox({
        boxh: 430,//盒子的高度
        w: 1000,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
/* #slider2 */
    $("#slider2").slidebox({
        boxh: 470,//盒子的高度
        w: 1200,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    }); 
    $("#conduct #slider2 >ul>li>ul>li img").css({
        width: 100,
        height: 100
    })
    // console.log($("#conduct #slider2 >ul>li>ul>li img"));
    
    
    /* 乐购图书 */
    $('#conduct .discount li,#conduct .newbook li,#conduct .like li').hover(function(){
        $(this).css('backgroundColor','#f2f2f2')
    },function(){
        $(this).css('backgroundColor','#fff')
    })

    /* 热卖畅销 */
    $('#banner .sell li').mouseenter(function(){
        $(this).find('.hidebox').show()
        $(this).siblings().find('.hidebox').hide()        
        $(this).find('.selltitle').hide()
        $(this).siblings().find('.selltitle').show()
    })

    /*  右边的新书畅销榜 */
    $('.rightbook  ul li').mouseenter(function(){
        $(this).find('.rightbox').show()
        $(this).siblings().find('.rightbox').hide()        
        $(this).find('.righttitle').hide()
        $(this).siblings().find('.righttitle').show()
    })

    /* 选项卡 */
    $('#conduct .title li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active')
        let index= $(this).index();
        // let obj=$('section').eq(index).show().siblings('section').hide();
        let obj=$('section').eq(index).addClass('cur').siblings().removeClass('cur')
    })
    

    /* 顶部搜索框 */
    $(window).scroll(function(){
        let str=$("html,body").scrollTop();
        if(str>=400){
            $('#topsearch').slideDown()
            $('#header .searchbox form').appendTo('#topsearch>div')
            $('#topback').slideDown()
        }else{
            $('#topsearch').slideUp()            
            $('#topsearch>div form').appendTo('#header .searchbox')  
            $('#topback').slideUp()                      
        }
    })
    /* 回到顶部*/
    $('#topback').click(function(){
        let str=$('html,body').scrollTop();
        let time=500;
        let v=str/time;
        let timeId=setInterval(function(){
                str=$("html,body").scrollTop();
                let newstr=str-v*30;
                $("html,body").scrollTop(newstr);
                /* 清除定时器 */
                if(newstr<=0){
                    clearInterval(timeId);
                    }
        },30)
    })

    /* 点击换一换 */
/*     let flag=true
    $('.huan').click(function(){
        if(flag){

            $('.like1').hide();
            $('.like2').show();
        }else{
            $('.like2').hide();
            $('.like1').show();
        }
        flag=!flag
    }) */




})
/* 换一换 */
$(function () {
    let index = 0;
    let singleBoxHeight = $("#conduct .like .like1").outerHeight(true);
    //获取初始的个数
    let boxLength = $("#conduct .like .like1").length
    console.log( $("#conduct  .like .bigbox .like1"));
    
    //克隆第一个盒子添加到最后。
    $("#conduct .like .like1").eq(0).clone(true).appendTo("#conduct .like .bigbox .innerbox")
    console.log(" 单个盒子的高度", singleBoxHeight);
    //给a标签添加点击事件
    $(".huan").click(function () {
        index++;
        //运动的距离
        let st = -(index * singleBoxHeight);
        console.log("运动的距离:", st, "当前索引：", index);
        //动画完成之后判断是否是最后一个元素(是不是克隆的那个盒子) 
        $("#conduct .like .bigbox .innerbox").stop(false,true).animate({ top: st }, 200, function () {
            //当是最后一个盒子时，就立即回到第一个盒子。
            //这一瞬间用户是看不到的
            if (index >= boxLength) {
                index = 0;
                $("#conduct .bigbox .innerbox").css("top", index);
            }
        });
       
    })
})

