var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '(っ °Д °;)っ不要走！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = 'ヾ(•ω•`)o欢迎回来！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});