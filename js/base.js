$(document).ready(function() {
    var winHight = $(window).height();
    var sideH = winHight - 50 + 'px';
    var rollnumber = 0;
    $(".sidenav").css('height', sideH);
    $(".sidenav").bind('mouseover', function() {
        $(".sidenav").css('left', '0');
    });
    $(".sidenav").bind('mouseout', function() {
        $(".sidenav").css('left', '-150px');
    });
    // 轮播图控制
    $(".picnumber ul li").bind('click', function() {
        var number = $(this).attr("class");
        if (number == "choose-1") {
            $(".rotate").animate({ fontsize: 0 }, {
                duration: 2000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".rotate").css('transform', 'rotateY(' + now + 'deg)');
                    $(".picOne").css('transform', 'translateX(-250px) rotateY(-' + now + 'deg)');
                    $(".picTwo").css('transform', 'translateZ(-250px) rotateY(-' + now + 'deg)');
                    $(".picThree").css('transform', 'translateX(250px) rotateY(-' + now + 'deg)');
                    $(".picFour").css('transform', 'translateZ(250px) rotateY(-' + now + 'deg)');
                },
            });
            $(".picnumber ul li").css('background-image', 'url("img/yes_image.png")');
            $(".choose-1").css('background-image', 'url("img/no_image.png")');
        }
        if (number == "choose-2") {
            $(".rotate").animate({ fontsize: 90 }, {
                duration: 2000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".rotate").css('transform', 'rotateY(' + now + 'deg)');
                    $(".picOne").css('transform', 'translateX(-250px) rotateY(-' + now + 'deg)');
                    $(".picTwo").css('transform', 'translateZ(-250px) rotateY(-' + now + 'deg)');
                    $(".picThree").css('transform', 'translateX(250px) rotateY(-' + now + 'deg)');
                    $(".picFour").css('transform', 'translateZ(250px) rotateY(-' + now + 'deg)');
                },
            });
            $(".picnumber ul li").css('background-image', 'url("img/yes_image.png")');
            $(".choose-2").css('background-image', 'url("img/no_image.png")');
        } else if (number == "choose-3") {
            $(".rotate").animate({ fontsize: 180 }, {
                duration: 2000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".rotate").css('transform', 'rotateY(' + now + 'deg)');
                    $(".picOne").css('transform', 'translateX(-250px) rotateY(-' + now + 'deg)');
                    $(".picTwo").css('transform', 'translateZ(-250px) rotateY(-' + now + 'deg)');
                    $(".picThree").css('transform', 'translateX(250px) rotateY(-' + now + 'deg)');
                    $(".picFour").css('transform', 'translateZ(250px) rotateY(-' + now + 'deg)');
                },
            });
            $(".picnumber ul li").css('background-image', 'url("img/yes_image.png")');
            $(".choose-3").css('background-image', 'url("img/no_image.png")');
        } else if (number == "choose-4") {
            $(".rotate").animate({ fontsize: 270 }, {
                duration: 2000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".rotate").css('transform', 'rotateY(' + now + 'deg)');
                    $(".picOne").css('transform', 'translateX(-250px) rotateY(-' + now + 'deg)');
                    $(".picTwo").css('transform', 'translateZ(-250px) rotateY(-' + now + 'deg)');
                    $(".picThree").css('transform', 'translateX(250px) rotateY(-' + now + 'deg)');
                    $(".picFour").css('transform', 'translateZ(250px) rotateY(-' + now + 'deg)');
                },
            });
            $(".picnumber ul li").css('background-image', 'url("img/yes_image.png")');
            $(".choose-4").css('background-image', 'url("img/no_image.png")');
        }
    });
    // 景区信息控制
    var scenicWidth = $(".scenicSpot").width();
    $(".scenic-wapper ul").width(scenicWidth*4);
    $(".scenic-wapper ul li").width(scenicWidth);
    $(".scenic-choose").css('left',scenicWidth/2-44+'px');
    $(".scenic-choose ul li").bind('click', function() {
        $(".scenic-choose ul li").css('background-color','#9a9a9a');
        $(this).css('background-color','blue');
        var number = $(this).attr('number');
        if (number == 1) {
            $(".scenic-wapper").animate({ fontsize: 0 }, {
                duration: 2000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".scenic-wapper ul li").css('transform', 'translateX(' + now + 'px)');
                },
            });
            number++;
        } else if (number == 2) {
            $(".scenic-wapper").animate({ fontsize: -scenicWidth }, {
                duration: 2000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".scenic-wapper ul li").css('transform', 'translateX(' + now + 'px)');
                },
            });
            number++;
        } else if (number == 3) {
            $(".scenic-wapper").animate({ fontsize: -scenicWidth*2 }, {
                duration: 2000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".scenic-wapper ul li").css('transform', 'translateX(' + now + 'px)');
                },
            });
            number++;
        } else {
            $(".scenic-wapper").animate({ fontsize: -scenicWidth*3 }, {
                duration: 2000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".scenic-wapper ul li").css('transform', 'translateX(' + now + 'px)');
                },
            });
            number = 0;
        }
    });
    // 留言墙数据双向传递
    // 接收留言
    $.ajax({
        type: 'get',
        url: 'server/upwall.php',
        datatype: 'json',
        success: function(data) {
            data.forEach(function(item, index, array) {
                var showTime = index * 2;
                var $span = $('<div>').addClass('wallmessage').css('animation', 'rollin 5s linear ' + showTime + 's infinite').html(item.message);
                $(".show-message").append($span);
            });
        }
    });
    $(".upwall").bind('click', function() {
            $(".show-message").empty();
            var newmessage = $('#mythink').val();
            $.ajax({
                url: 'server/getwall.php',
                type: 'post',
                data: {
                    mcontant: newmessage,
                },
                success: function(data) {}
            });
            $.ajax({
                type: 'get',
                url: 'server/upwall.php',
                datatype: 'json',
                success: function(data) {
                    $(".show-message").empty();
                    data.forEach(function(item, index, array) {
                        var showTime = index * 2;
                        var $span = $('<div>').addClass('wallmessage').css('animation', 'rollin 5s linear ' + showTime + 's infinite').html(item.message);
                        $(".show-message").append($span);
                    });
                }
            });
        })
        // 攻略模块显示
    $.ajax({
        type: 'get',
        url: 'server/getstrategy.php',
        datatype: 'json',
        success: function(data) {
            data.forEach(function(item, index, array) {
                $(".strategy").eq(index).children("img").attr('src', item.img);
                $(".strategy").eq(index).children(".strategy-contant").children(".introduce").text(item.troduce);
                $(".strategy").eq(index).children(".strategy-contant").children("span").children(".visit").text(item.visitnumber);
                $(".strategy").eq(index).children(".strategy-contant").children("span").children(".like").text(item.likenumber);
            });
        }
    });
    // 攻略分享平台效果
    $("#exampleInputFile").bind('change', function() {
        var firstpage = $("#exampleInputFile").val();
        $("#inputFirstpage").val(firstpage);
    });
    $("#strategyplat-button").bind('click', function() {
        $.ajax({
            url: 'server/putstrategy.php',
            type: 'post',
            data: {
                newtitle: $("#inputTitle").val(),
                newfirstpage: $("#inputFirstpage").val(),
            },
            success: function(data) {
                alert(data);
            }
        });
    });
    $(".strategy").bind('mouseover', function() {
        $(this).children(".strategy-contant").css('display', 'block');
    });
    $(".strategy").bind('mouseout', function() {
        $(this).children(".strategy-contant").css('display', 'none');
    });
})
