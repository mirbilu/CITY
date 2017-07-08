$(document).ready(function() {
    var winHight = $(window).height();
    var winWidth = $(window).width();
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
                var item = data[index];
                var $thinga = $('<a>').attr({ 'href': item.url, 'target': '_blank' }).text(item.news);
                var $thingspan = $('<i>').addClass('iconfont icon-comments').append($thinga);
                var $thing = $('<div>').addClass('thing').append($thingspan);
                $(".over-things").append($thing);
            }
        }
    });
    // 登录界面控制
    $(".admin-login").css('height', winHight);
    $(".login-page").css('margin-top', winHight / 3);
    $(".login").bind('click', function() {
        $(".admin-login").css('display', 'block');
    });
    $(".close").bind('click', function() {
        $(".admin-login").css('display', 'none');
    });
    $(".login-btn").bind('click', function() {
            var $username = $("#inputadmin").val();
            var $passwards = $("#inputPasswords").val();
            $.ajax({
                type: 'post',
                url: 'server/checkuser.php',
                data: { username: $username },
                datatype: 'json',
                success: function(data) {
                    if (data[0].passwords == $passwards) {
                        alert("登录成功");
                        $(".admin-name").text($username);
                        $(".admin-login").css('display', 'none');
                    } else {
                        alert("密码不正确或用户不存在");
                    }
                }
            })
        })
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
                    var busnumber = item.bus.split(',');
                    for (var i = 0; i < busnumber.length; i++) {
                        var $bus = $('<span>').addClass('bus').text(busnumber[i]);
                        $spot.children(".traffic").children(".busline").append($bus);
                    };
                    var spotnames = item.recommend.split(',');
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
                var item = data[index];
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
                        var item = data[index];
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
        url: 'server/strategyshow.php',
        datatype: 'json',
        success: function(data) {
            var index = data.length - 1;
            for (var i = 0; i < 12; i++) {
                var item = data[index];
                $(".strategy").eq(i).children("img").attr('src', item.img);
                $(".strategy").eq(i).children(".strategy-contant").children(".introduce").text(item.title);
                $(".strategy").eq(i).children(".strategy-contant").children("span").children(".visit").text(item.visitnumber);
                $(".strategy").eq(i).children(".strategy-contant").children("span").children(".like").text(item.likenumber);
                index--;
            };
        }
    });
    $(".strategy-show").css({ 'height': winHight / 2, 'top': winHight / 4, 'width': winWidth / 2, 'left': winWidth / 4 });
    $(".strategy-content").css('height', winHight / 4);
    $(".strategy").bind('click', function() {
        var $showstrategy = $(this).children(".strategy-contant").children(".introduce").text();
        $.ajax({
            type: 'get',
            url: 'server/strategyshow.php',
            datatype: 'json',
            success: function(data) {
                console.log($showstrategy);
                for (var index = 0; index <= data.length - 1; index++) {
                    var item = data[index];
                    if (item.title == $showstrategy) {
                        $(".strategy-show").children("h1").text(item.title);
                        $(".strategy-time").text(item.time);
                        $(".strategy-type").text(item.type);
                        $(".strategy-auther").text(item.auther);
                        $(".strategy-content").text(item.introduce);
                        $(".strategy-like").text(item.likenumber);
                        $(".strategy-bad").text(item.visitnumber);
                        $(".strategy-show").css({ 'display': 'block', 'animation': 'showin 2s ease forwards' });
                        break;
                    };
                };
            }
        })
    });
    $(".close-show").bind('click', function() {
        $(".strategy-show").css('display', 'none');
        choosenumber = 0;
    });
    var choosenumber = 0;
    $(".strategy-like").click(function() {
        if (choosenumber == 0) {
            var $like = $(".strategy-like").text();
            $like++;
            $(".strategy-like").text($like);
            choosenumber = 1;
        } else {
            alert("您只能选择顶或踩一次");
        }
    });
    $(".strategy-bad").click(function() {
        if (choosenumber == 0) {
            var $bad = $(".strategy-bad").text();
            $bad++;
            $(".strategy-bad").text($bad);
            choosenumber = 1;
        } else {
            alert("您只能选择顶或踩一次");
        }
    });
    // 攻略分享平台效果
    $("#exampleInputFile").bind('change', function() {
        var firstpage = $("#exampleInputFile").val();
        $("#inputFirstpage").val(firstpage);
    });
    $("#strategyplat-button").bind('click', function() {
        var $adminname = $(".admin-name").text();
        console.log($adminname);
        if ($adminname != "登录丨注册") {
            $.ajax({
                url: 'server/putstrategy.php',
                type: 'post',
                data: {
                    newtitle: $("#inputTitle").val(),
                    newfirstpage: $("#inputFirstpage").val(),
                    newtype: $("#inputStyle").val(),
                    newdate: $("#inputTime").val(),
                    newcontant: $("#inputContant").val(),
                    newauther: $(".admin-name").text(),
                },
                success: function(data) {
                    alert("提交成功");
                }
            });
        }else{
            alert("请先登录");
        }
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
