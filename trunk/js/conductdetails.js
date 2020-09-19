$(function () {

    var magnifierConfig = {
        magnifier: "#magnifier1",//最外层的大容器
        width: 350,//承载容器宽
        height: 330,//承载容器高
        moveWidth: null,//如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 5//缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);

    /*magnifier的内置函数调用*/
    /*
        //设置magnifier函数的index属性
        _magnifier.setIndex(1);

        //重新载入主图,根据magnifier函数的index属性
        _magnifier.eqImg();
    */
});

    /* 选项卡 */
    $('#item .itemdetail span').mouseenter(function(){
        $(this).addClass('spancur').siblings().removeClass('spancur')
        let index= $(this).index();
        // let obj=$('section').eq(index).show().siblings('section').hide();
        let obj=$('.appraise').eq(index).addClass('appraisecur').siblings().removeClass('appraisecur')
    })

    /* 版本选择 */
    $('#library .she .choice span').click(function(){
        // $(this).css('border','transparent').siblings().css('border',' 0.5px solid #b8b8b8')
        $(this).addClass('spanbg').siblings().removeClass('spanbg')
    })

    /* li的背景颜色 */
    $('#item .itembook  ul li,#item .itemlook  ul li').hover(function(){
        $(this).css('backgroundColor','#f2f2f2')
    },function(){
        $(this).css('backgroundColor','#fff')
    })

    /* 数量加减 */
    let sum= $('.num').val()
    $('.add').click(function(){
        sum++;
        $('.num').val(sum)

        if($('.num').val()<=1){
            $('.num').val(1)
        }
    })

    $('.reduce').click(function(){
        sum--;
        $('.num').val(sum)
        
        if($('.num').val()<=1){
            $('.num').val(1)
        }
    })
    