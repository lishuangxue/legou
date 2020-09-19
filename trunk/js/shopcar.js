$('#payment .itembook li').hover(function(){
    $(this).css('backgroundColor','#f2f2f2')
},function(){
    $(this).css('backgroundColor','#fff')
})


    /* 全选 */
    let flag=false;
    $('#payment input:first,#payment input:last').click(function(){  
        if(!flag){
            $('input:not(input:first)').prop('checked',true)
        }else{
            $('input:not(input:first)').prop('checked',false)
        }   
        flag=!flag;    
    }) 

    /* 删除的点击事件 */
    $('#payment .delete').click(function(){
        $(this).closest('tr').remove()
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
