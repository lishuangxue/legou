$('#payment .itembook li').hover(function(){
    $(this).css('backgroundColor','#f2f2f2')
},function(){
    $(this).css('backgroundColor','#fff')
})


    /* 全选 */
    let flag=false;
    $('#payment input:first,#payment tfoot input:first').click(function(){  
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
    $('.add').click(function(){
        let index=$('.num').eq(1).val()
        index++;
        $('.num').eq(1).val(index)
    })
    $('.reduce').click(function(){
        let index=$('.num').eq(1).val()
        index--; 
        if(index<=1){
            $('.num').eq(1).val(1)
        }else{
            $('.num').eq(1).val(index)
        }
    })

    $('.add2').click(function(){
        let index=$('.num').eq(3).val()
        index++;
        $('.num').eq(3).val(index)
    })
    $('.reduce2').click(function(){
        let index=$('.num').eq(3).val()
        index--; 
        if(index<=1){
            $('.num').eq(3).val(1)
        }else{
            $('.num').eq(3).val(index)
        }
    })
