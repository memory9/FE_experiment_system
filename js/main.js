$(document).ready(function() {

    /*移动端菜单*/
    $('.mobile-menu-icon').click(function() {
        $('.templatemo-left-nav').slideToggle();
    });

    /*点击 × 时弹出删除对话框*/
    $('.templatemo-content-widget .fa-times').click(function() {
        $(".mask").show(); //显示背景色
        showDialog(); //设置提示对话框的Top与Left
        $(".dialog").show(); //显示提示对话框
    });

    function showDialog() {
        var objW = $(window); //当前窗口
        var objC = $(".dialog"); //对话框
        var brsW = objW.width();
        var brsH = objW.height();
        var sclL = objW.scrollLeft();
        var sclT = objW.scrollTop();
        var curW = objC.width();
        var curH = objC.height();
        //计算对话框居中时的左边距
        var left = sclL + (brsW - curW) / 2;
        //计算对话框居中时的上边距
        var top = sclT + (brsH - curH) / 2;
        //设置对话框在页面中的位置
        objC.css({
            "left": left,
            "top": top
        });
    }

    $(window).resize(function() { //页面窗口大小改变事件
        if (!$(".dialog").is(":visible")) {
            return;
        }
        showDialog(); //设置提示对话框的Top与Left
    });

    $("#Button3").click(function() { //注册取消按钮点击事件
        $(".dialog").hide();
        $(".mask").hide();
    })

    $("#Button2").click(function() { //注册确定按钮点击事件
        $(".dialog").hide();
        $(".mask").hide();
        $('.templatemo-content-widget:visible:first .fa-times').parent().slideUp();
    })

    $('#release-announcement').click(function() {
        $(".mask").show(); //显示背景色
        showDialog(); //设置提示对话框的Top与Left
        $(".dialog").show(); //显示提示对话框
    })

    $("#release-btn").click(function() { //注册发布按钮点击事件
        $(".dialog").hide();
        $(".mask").hide();
        if ($("#announcement-form")) {
            $("#announcement-form").submit();
        }
        if ($("#addmember-form")) {
            $("#addmember-form").submit();
        }
    })

    $('.shift-info').editableSelect({ //下拉且可输入
        effects: 'slide',
        onSelect: function(element) {
            $('.shift-info').attr('data-val', element.val(), )
        }
    })

    $('.shift-info').prop('placeholder', '请输入或选择..');
});
