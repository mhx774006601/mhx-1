/**
 * Created by Administrator on 2017/6/1.
 */
$(function(){
    /*　点击三角箭头改变其方向并且展开收缩下拉菜单　*/
    $(document).on('click','.arrow-down',function(event){
        $(this).removeClass('arrow-down').addClass('arrow-up');
        event.stopPropagation();
        $('.drop-down').slideDown();
    });
    $(document).on('click','.arrow-up',function(event){
        $(this).removeClass('arrow-up').addClass('arrow-down');
        event.stopPropagation();
        $('.drop-down').slideUp();
    });

    /*　下拉菜单中有二级菜单的展开收缩　*/
    $(document).on('click','.li-down',function(event){
        $(this).next('.li_box').css('display','none');
        $(this).removeClass('li-down').addClass('li-up');
        event.stopPropagation();
    });
    $(document).on('click','.li-up',function(event){
        $(this).next('.li_box').css('display','block');
        $(this).removeClass('li-up').addClass('li-down');
        event.stopPropagation();
    });

    //获取复选框中的值
    var arrText=[];
    $('.check').on('click',function(event) {
        var spanText = $(this).next('span').html();
        arrText.push(spanText);
        if ($(this).is(":checked") == true) {
            $(".inputSelect").val(arrText);
        }
        if ($(this).is(":checked") == false) {
            arrText.splice($.inArray(spanText, arrText), 1);
            arrText.pop();
            $(".inputSelect").val(arrText);
        }
        event.stopPropagation();
        //鼠标放上去显示全部内容
        $('.inputSelect').attr('title', arrText);

    });

    //选出li中的所有的checkbox
    var $input =$(".li_box").siblings("input[type='checkbox']");

    //var s = $(".drop-down").find('.li_box').find('.check');
    $input.on("click", function(){
        alert(33);
        for(var i=1;i<=$input.length;i++){
            $input.find('.check').checked = true;
        }
    })


});
//点击其它任何一个地方收起下拉菜单
$(document).click(function(event){
    $('.drop-down').slideUp();
    var up = $('.arrow-up');
    if(up){
        up.removeClass('arrow-up').addClass('arrow-down');
    }
    event.stopPropagation();
});




