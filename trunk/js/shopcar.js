$('#payment .itembook li').hover(function(){
    $(this).css('backgroundColor','#f2f2f2')
},function(){
    $(this).css('backgroundColor','#fff')
})
/* $('#payment input:first').click(function(){
    $(this).siblings().prop('checked',$('input:first').prop('checked'));
}) */

/*     $('#payment input:first').click(function(){
        let bool=$('input:first').prop('checked')
        console.log(bool);
        $('input:not(input:first)').prop('checked',bool);
    }) */


/*    let flag=true;
    $('input:first').click(function(){    
        $('input:not(input:first)').prop('checked',flag)
        flag=!flag;  
    }) */
