$(document).ready(function() {
    // 返回顶部按钮
    $(window).bind('scroll', function() {
        var scrollHight = $(window).scrollTop();
        if (scrollHight > 50) {
            $('.gotop').css('display', 'block');
        } else {
            $('.gotop').css('display', 'none');
        }
    })
    $('.gotop').bind('click', function() {
            $(window).scrollTop(0);
        })
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
                    $(".picOne").css('transform', 'translateX(-200px) rotateY(-' + now + 'deg)');
                    $(".picTwo").css('transform', 'translateZ(-200px) rotateY(-' + now + 'deg)');
                    $(".picThree").css('transform', 'translateX(200px) rotateY(-' + now + 'deg)');
                    $(".picFour").css('transform', 'translateZ(200px) rotateY(-' + now + 'deg)');
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
                    $(".picOne").css('transform', 'translateX(-200px) rotateY(-' + now + 'deg)');
                    $(".picTwo").css('transform', 'translateZ(-200px) rotateY(-' + now + 'deg)');
                    $(".picThree").css('transform', 'translateX(200px) rotateY(-' + now + 'deg)');
                    $(".picFour").css('transform', 'translateZ(200px) rotateY(-' + now + 'deg)');
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
                    $(".picOne").css('transform', 'translateX(-200px) rotateY(-' + now + 'deg)');
                    $(".picTwo").css('transform', 'translateZ(-200px) rotateY(-' + now + 'deg)');
                    $(".picThree").css('transform', 'translateX(200px) rotateY(-' + now + 'deg)');
                    $(".picFour").css('transform', 'translateZ(200px) rotateY(-' + now + 'deg)');
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
                    $(".picOne").css('transform', 'translateX(-200px) rotateY(-' + now + 'deg)');
                    $(".picTwo").css('transform', 'translateZ(-200px) rotateY(-' + now + 'deg)');
                    $(".picThree").css('transform', 'translateX(200px) rotateY(-' + now + 'deg)');
                    $(".picFour").css('transform', 'translateZ(200px) rotateY(-' + now + 'deg)');
                },
            });
            $(".picnumber ul li").css('background-image', 'url("img/yes_image.png")');
            $(".choose-4").css('background-image', 'url("img/no_image.png")');
        }
    });
    // 导航条控制
    $(".search").bind('click', function() {
        $(".search-input").css('display', 'inline-block');
    });
    $(".icon-close").bind('click', function() {
            $(".search-input").css('display', 'none');
        })
        // 右侧新闻栏控制
    $.ajax({
        type: 'get',
        url: 'server/getnews.php',
        datatype: 'json',
        success: function(data) {
            // data.forEach(function(item, index, array) {
            for (var index = 0; index <= data.length - 1; index++) {
                var $thinga = $('<a>').attr({ 'href': item.url, 'target': '_blank' }).text(item.news);
                var $thingspan = $('<i>').addClass('iconfont icon-comments').append($thinga);
                var $thing = $('<div>').addClass('thing').append($thingspan);
                $(".over-things").append($thing);
            }
        }
    });
    // 登录界面控制
    var winHight = $(window).height();
    $(".admin-login").css('height', winHight);
    $(".login-page").css('margin-top', winHight / 3);
    $(".login").bind('click', function() {
        $(".admin-login").css('display', 'block');
    });
    $(".close").bind('click', function() {
        $(".admin-login").css('display', 'none');
    });
    // 景区信息控制
    var scenicWidth = $(".scenicSpot").width();
    $(".scenic-wapper ul").width(scenicWidth * 4);
    $(".scenic-wapper ul li").width(scenicWidth);
    $(".scenic-choose").css('left', scenicWidth / 2 - 44 + 'px');
    $(".scenic-choose ul li").bind('click', function() {
        $(".scenic-choose ul li").css('background-color', '#9a9a9a');
        $(this).css('background-color', '#3ac3e2');
        var number = $(this).attr('number');
        if (number == 1) {
            $(".scenic-wapper").animate({ fontsize: 0 }, {
                duration: 1000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".scenic-wapper ul li").css('transform', 'translateX(' + now + 'px)');
                },
            });
            number++;
        } else if (number == 2) {
            $(".scenic-wapper").animate({ fontsize: -scenicWidth }, {
                duration: 1000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".scenic-wapper ul li").css('transform', 'translateX(' + now + 'px)');
                },
            });
            number++;
        } else if (number == 3) {
            $(".scenic-wapper").animate({ fontsize: -scenicWidth * 2 }, {
                duration: 1000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".scenic-wapper ul li").css('transform', 'translateX(' + now + 'px)');
                },
            });
            number++;
        } else {
            $(".scenic-wapper").animate({ fontsize: -scenicWidth * 3 }, {
                duration: 1000,
                easing: "linear",
                queue: false,
                step: function(now, fx) {
                    $(".scenic-wapper ul li").css('transform', 'translateX(' + now + 'px)');
                },
            });
            number = 0;
        }
    });
    // 景区信息传递
    $.ajax({
            type: 'get',
            url: 'server/spotmessage.php',
            datatype: 'json',
            success: function(data) {
                // data.forEach(function(item,index,array){
                for (var index = 0; index <= data.length - 1; index++) {
                    var item = data[index];
                    var $spot = $(".spot").eq(index);
                    $spot.children(".row").children(".weather").children(".weather-pic").addClass(item.weather);
                    $spot.children(".row").children(".spotname").children("h1").text(item.spotname);
                    var busnumber = item.bus.split(",");
                    for (var i = 0; i < busnumber.length; i++) {
                        var $bus = $('<span>').addClass('bus').text(busnumber[i]);
                        $spot.children(".traffic").children(".busline").append($bus);
                    };
                    var spotnames = item.recommend.split(",");
                    for (var i = 0; i < spotnames.length; i++) {
                        var $recommend = $('<span>').addClass('recommend-message').text(spotnames[i]);
                        $spot.children(".recommend").append($recommend);
                    };
                };
            }
        })
        // 留言墙数据双向传递
        // 接收留言
    $.ajax({
        type: 'get',
        url: 'server/upwall.php',
        datatype: 'json',
        success: function(data) {
            // data.forEach(function(item, index, array) {
            for (var index = 0; index <= data.length - 1; index++) {
                var showTime = index * 2;
                var $span = $('<div>').addClass('wallmessage').css('animation', 'rollin 5s linear ' + showTime + 's infinite').html(item.message);
                $(".show-message").append($span);
            };
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
                success: function(data) {
                    alert("您的留言已上墙，如果没有出现请刷新页面！");
                }
            });
            $.ajax({
                type: 'get',
                url: 'server/upwall.php',
                datatype: 'json',
                success: function(data) {
                    $(".show-message").empty();
                    // data.forEach(function(item, index, array) {
                    for (var index = 0; index <= data.length - 1; index++) {
                        var showTime = index * 2;
                        var $span = $('<div>').addClass('wallmessage').css('animation', 'rollin 5s linear ' + showTime + 's infinite').html(item.message);
                        $(".show-message").append($span);
                    };
                }
            });
        })
        // 攻略模块显示
    $.ajax({
        type: 'get',
        url: 'server/getstrategy.php',
        datatype: 'json',
        success: function(data) {
            // data.forEach(function(item, index, array) {
            for (var index = 0; index <= data.length - 1; index++) {
                $(".strategy").eq(index).children("img").attr('src', item.img);
                $(".strategy").eq(index).children(".strategy-contant").children(".introduce").text(item.troduce);
                $(".strategy").eq(index).children(".strategy-contant").children("span").children(".visit").text(item.visitnumber);
                $(".strategy").eq(index).children(".strategy-contant").children("span").children(".like").text(item.likenumber);
            };
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
        $(this).addClass('showstrategy');
        $(this).children(".strategy-contant").css('display', 'block');
    });
    $(".strategy").bind('mouseout', function() {
        $(this).removeClass('showstrategy');
        $(this).children(".strategy-contant").css('display', 'none');
    });
})
