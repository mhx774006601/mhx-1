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
    /* 点击下接框外任何一个地方收起下拉 */
    $(document).click(function(e){
        $('.drop-down').slideUp();
        var up = $('i.arrow-up');
        if(up){
            up.removeClass('arrow-up').addClass('arrow-down');
        }
        e= e || event;stopFunc(e);
    });
    function stopFunc(e){
        e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
    }

    //获取输入框中的值
    /* var inputVal =$('[name="inputSelect"]').val();
    var arr=[];
    $(document).on('change','input[type="checkbox"]:checked',function(){
        var tex = $(this).next().text();
        arr.push(tex);
        console.log(arr);
        $(".inputSelect").val(arr.join(","));
    });*/

    //选择复选框赋值
    var arrText=[];
    var arrVal=[];
   $('.check').on('click',function(e){
       var spanText = $(this).next('span').html();
       var parentVal = $(this).val();
       arrVal.push(parentVal);
       arrText.push(spanText);
       if($(this).is(":checked") == true){
           $(".inputSelect").val(arrText);
           $("#selectVal").val(arrVal);
       }
       if($(this).is(":checked") == false){
           arrVal.splice($.inArray(parentVal,arrVal),1);
           arrText.splice($.inArray(spanText,arrText),1);
           arrText.pop();
           arrVal.pop();
           $(".inputSelect").val(arrText);
           $("#selectVal").val(arrVal);
       }
       e = e || event;stopFunc(e);
       //鼠标放上去显示全部内容
       $('.inputSelect').attr('title',arrText);
   });


});

