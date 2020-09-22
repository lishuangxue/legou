
/* 轮播图 */
/* banner*/
/* slider */
/* 抽取轮播方法 */

function lunbo(selector,boxh,w,h){
    $(selector).slidebox({
            boxh: boxh,//盒子的高度
            w: w,//图片的宽度
            h: h,//图片的高度
            isShow: true,//是否显示控制器
            isShowBtn: true,//是否显示左右按钮
            controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 12,//控制按钮宽度
            controlsH: 12,//控制按钮高度
            radius: 6//控制按钮圆角度数
                });  
        }
//文档加载事件
$(function (){
    lunbo('#slider',420,1000,420)
    lunbo('#slider2',220,330,220)
    lunbo('#slider3',320,426,342)
    lunbo('#slider4',320,426,342)
    lunbo('#slider5',320,426,342)

    /*二级菜单  */
    $('.classify li:first').hover(function(){
        $(this).css({'backgroundColor':'#fff',
                'border-left':'1px solid #ff6600',
                'border-bottom':'1px solid #ff6600'
            });
        $('.classify span').css('backgroundColor','#fff')
        $('.submenu').css('display','block')
    },function(){
        $(this).css({'backgroundColor':'#f3f3f3',
                'border-left':'1px solid #f3f3f3',
                'border-bottom':'1px solid #f3f3f3'
            });
        $('.classify span').css('backgroundColor','#f3f3f3')        
        $('.submenu').css('display','none')    
    })
    $('.classify>li').hover(function(){
        $(this).css('backgroundColor','#fff')
    },function(){
        $(this).css('backgroundColor','#f3f3f3')
    })


    /* 推广商品 ,电子书*/
    $('.contain .spread li,.contain .recommend li,.contain .middle li,.contain .rightbook li').hover(function(){
        $(this).css('backgroundColor','#f2f2f2')
    },function(){
        $(this).css('backgroundColor','#fff')
    })

    /* 楼层 */
    // 方法一
/*     let bgcs=['#93d46f', '#f65727', '#bb9dee', '#ff7394', '#c2ec51']
    $('#floor li').hover(function(){
        $(this).css({
            'backgroundColor': bgcs[$(this).index()],
        })
    },function(){
        $(this).css({
            'backgroundColor':'',
        })
    }) */

    /* 方法二 */
    $('#floor li').hover(function(){
        $(this).css({
            'backgroundColor':$(this).attr('bgc1'),
            'backgroundPositionX':-39,
             width:40
        })
    },function(){
        $(this).css({
            'backgroundColor':'',
            'backgroundPositionX':0,     
            width:0                   
        })
    })
    $('#floor li').click(function(){
        $('html,body').animate({scrollTop:$('section').eq($(this).index()).offset().top},500)
    })

    /*  右边的新书畅销榜 */
    $('.rightbook  ul li').mouseenter(function(){
        $(this).find('.rightbox').show()
        $(this).siblings().find('.rightbox').hide()        
        $(this).find('.righttitle').hide()
        $(this).siblings().find('.righttitle').show()
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

    /* 二维码 */
    $('#center .qrcode-c').hover(function(){
        $('#center .qrcode-b').stop().fadeIn()
    },function(){
        $('#center .qrcode-b').stop().fadeOut()        
    })

    /* 选项卡 */
    $('.contain .new span').hover(function(){
        $(this).addClass('spancur').siblings().removeClass('spancur')
    })





})
