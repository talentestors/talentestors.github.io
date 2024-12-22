/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","348b5f179fd5939f1bde6d175c747b45"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","0865a59074275c40c8253fae79e64861"],["/2023/02/06/C语言链表/index.html","0bba5644b272fc658408ea631a273ff2"],["/2023/02/06/书籍资源/index.html","67d507d182f689ac008018d7949b1cdd"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","c7cb995a32f51a1e1115efc1d62218db"],["/2023/02/07/为水而水（笑/index.html","1c913304d9a695894e50a3c6cf2e7ca8"],["/2023/02/08/洛谷主页源码/index.html","6ebdea3e5ec20995b4a6eb6af33b50d3"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","0de16cfa2b83a092be6c2c99c4ef79bc"],["/2023/03/09/Web前端笔记-Emmet/index.html","665ad81f427845304ee576b66027cb41"],["/2023/03/23/gitalk-评论/index.html","e45d02bf9cf181eae3716e8f8e1a7706"],["/2023/04/10/用C语言实现字符串全排列/index.html","20e842e3450059dffbb01119198fe68a"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","f710baa6c9c379ad575503f9fe975d01"],["/2023/05/15/C语言基础排序-demo/index.html","0cee4983b6b29a300886dd7b2b5306cf"],["/2023/06/14/闲着没事干/index.html","f994e45e5ebf05e1eaea5d83146b8f4a"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","58c80cbba57d4d2d1002e0d24ca8c36c"],["/2023/08/01/javase-note/index.html","ed13905e31e165ed724be25590bdb715"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","0497aa6e27d0cd2903f8ce75ac4c34e1"],["/2023/09/14/vue-pure-admin/index.html","1154bcce2b2c72bae54e0257ebe1bdfb"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","ab09b422856f7ced1b5a37fe484dfacf"],["/2023/11/28/C-CPP-the-memset-function/index.html","a35fe701a0c5ce6470afff7c79871756"],["/2023/12/13/javaSwing-DynamicClock/index.html","26d8815a2be64b811135f1c7a03b2770"],["/2024/01/24/builtin-系列函数/index.html","9ff90f995588e5b6e406e446ac0069d1"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","764ecc0de00e326347ed1ff1b3d890b2"],["/2024/02/09/新年快乐/index.html","2b2462703b27fdcc2a94616b4f6322a0"],["/2024/03/26/408-route/index.html","57780f94202296de2ba2df688a2666d2"],["/2024/04/07/转载-线段树专题-xyw813/index.html","71e26a738e68be813a4ead93f490c930"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","1f14120582599ec2bb38d5b7d83a6ba1"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","b77b9eb27aa4a0223b5205d5148b643e"],["/2024/05/06/cloudflare-display-issue/index.html","3e0e5c6c5207ac6468c3ef4da4084b68"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","fa32d69eefc2a86099ed95b108295b64"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","ca7b4977867a3ed3e722b76a578e0537"],["/2024/06/25/open-source-LinuxMirrors/index.html","dc2e4894527716cbc8cadf332131753b"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","e3d5c09fb16b208f9882ccc4cf779b7c"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","04814cd267942b38b9c4cec03cd5be0a"],["/2024/10/11/常用STL算法库/index.html","33038723f6a5b990f5cb0f18aaf9f74e"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","99ac3884ff3568803d7a8f27be65abeb"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","38ded95b2406d5955cfa9f7a77f021be"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","a1fa64150594ccc5491f4e391c18fe4a"],["/2024/12/17/Where-are-those-algorithms/index.html","0bad4333968bc5681b0b9a756a1673e9"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","f75a01fc3b95605bd53a15d636269eb3"],["/archives/2023/02/index.html","3e7dcd77662a6ea7c0d308522daef14e"],["/archives/2023/03/index.html","06de7bf2758e07d545256a82dab1efc0"],["/archives/2023/04/index.html","677342a2a553b140defd04add6bed3b6"],["/archives/2023/05/index.html","0da24ef8c931363a8fc63894ff375375"],["/archives/2023/06/index.html","6044241a90428c42e4da69aa804e87fe"],["/archives/2023/08/index.html","b3222046a109fb62e111533fe5437119"],["/archives/2023/09/index.html","5d19480bacb4c0b2f2956724a2252cee"],["/archives/2023/10/index.html","febe5ebd1442c55905207beadedb672e"],["/archives/2023/11/index.html","38e43df82dcec9157c5253625f358bd9"],["/archives/2023/12/index.html","5a9b6f45bfa115dd67ddca5de5b3402d"],["/archives/2023/index.html","774ce17ba74759e06c00f63a613c2282"],["/archives/2023/page/2/index.html","774ce17ba74759e06c00f63a613c2282"],["/archives/2023/page/3/index.html","774ce17ba74759e06c00f63a613c2282"],["/archives/2024/01/index.html","dfce4f3eaad6a21666625468be5e157d"],["/archives/2024/02/index.html","a8251934741d7c2825776c2181864663"],["/archives/2024/03/index.html","dcf0f80935dd6922f9b591f727c13a1b"],["/archives/2024/04/index.html","8a9fff8300e7bcdacc48355758716ed4"],["/archives/2024/05/index.html","a259556d696f8e0a4eeca59c32cc7f91"],["/archives/2024/06/index.html","1d9c4403f96fc6d344b59aa90e0dc8cd"],["/archives/2024/09/index.html","9387ce7dc867a8d93365dab812a80fe3"],["/archives/2024/10/index.html","78cbabe16e09bba25f3d67dcd2a971bf"],["/archives/2024/11/index.html","b66d97bf725402cebab1a09d53a74407"],["/archives/2024/12/index.html","2ddbe3c8994799184529435e7b007c15"],["/archives/2024/index.html","e843a65535e81b914c56881933e7f716"],["/archives/2024/page/2/index.html","e843a65535e81b914c56881933e7f716"],["/archives/index.html","bee5b205210916fa05a42231c27736b3"],["/archives/page/2/index.html","bee5b205210916fa05a42231c27736b3"],["/archives/page/3/index.html","bee5b205210916fa05a42231c27736b3"],["/archives/page/4/index.html","bee5b205210916fa05a42231c27736b3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","27bb3c6bad9f61df575fd83597e1ce00"],["/categories/技术/index.html","4de38808910ebff27739a7254860a071"],["/categories/技术/page/2/index.html","e863026d1fe319ddacf7376b1ed74ad1"],["/categories/技术/page/3/index.html","185b339ae9b57d7d9e2e6656efd99b23"],["/categories/资源/index.html","0ed9578012073ddfe22a3b8dd2f5d51f"],["/categories/转载/index.html","6295c2ab25362966444154492291d6b0"],["/categories/随想/index.html","77972330036215f496609f0061bfa8d8"],["/comment/index.html","8dd43fc81118333722aad0b971e4ee36"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","d8fc0a89b865a6bfedded5a62140a0e8"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","4ce697f319f2c1799e0f6e3cfe5b557d"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","d0c87699fbb73b533364944d85acf221"],["/index.html","aa4579de627bcb1920eacdd38baea79c"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","c29a2f77c5aa3ba618ec389b270886c0"],["/js/wrapImage.min.js","fc743cae4be00ca6e80bf42d9b3bda32"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","002587951d4f810363e92686c8583c5c"],["/links/index.html","927f4e6e0901ed94cb04b12859f416d9"],["/music/index.html","580de71726672383529458ad42d4c781"],["/page/2/index.html","a08110ad4c460913305b7fe37f1584c0"],["/page/3/index.html","cfde63783d52a943952ae31e1827afeb"],["/page/4/index.html","8b67935d76d19b44fd097dbe2f616860"],["/rss/index.html","09a6eac7c78876c2ee2ff4a43f5e3079"],["/sw-register.js","b364abeabfe3053a41071ff5ce8c476d"],["/tags/408/index.html","cc9493d6daa7a957d9c01b812db45ea7"],["/tags/Adobe/index.html","357fd952ebf8aa80f702c90d631fe3d5"],["/tags/C-C/index.html","299850f66c9fbcc91f9335e6db4555de"],["/tags/C-CPP/index.html","1a43b07d8e47c21f7e33953bbbf2dc10"],["/tags/C/index.html","80c410b169c3c2db242a1b7b2c092c26"],["/tags/CPP/index.html","d56d68a67d05053014730e9d3023d036"],["/tags/CSS/index.html","466017ba9d84e881227f7e8c95e147e9"],["/tags/CodeForces/index.html","8eec71b9c41d43115610e2e0ce96632f"],["/tags/Color/index.html","bbe63f364931ad89a5a12146578ee5e1"],["/tags/C语言/index.html","4b81f10052582e0b7ff52c7eac0a6b9e"],["/tags/Dinic/index.html","ce83860e0819b9ffda4cd0cd2e58495a"],["/tags/Div-2/index.html","7d34fdf8a26587ec901eda2be15c1364"],["/tags/JDK/index.html","9b3a7b3ee779756533a83ff85d40d5ce"],["/tags/Java/index.html","767974d70ae8a11abcbd4f3d59a0b0d0"],["/tags/JavaScript/index.html","c1e5a6bd0bc7f95cbca46563aad5481c"],["/tags/LeetCode/index.html","15c2157c2e78bdad8000762fcd819014"],["/tags/Linux/index.html","35917f0f3e06ccc2f314a380aed478d1"],["/tags/MSYS2/index.html","0a1d1cc4adde04b7f5da438a8de675b7"],["/tags/Note/index.html","053b10cadeca14fe9f18ce0d3b88220b"],["/tags/PS/index.html","c18563c9ec7b7c55c3bb0c6094e72d33"],["/tags/PrintStream/index.html","84c812024e36d569bb50067dcb729bf5"],["/tags/Rocket-Loader/index.html","2439d409c1c2ef0a928e812fd4858978"],["/tags/STL/index.html","57780bceb8b54d27a9332b519d659dc6"],["/tags/Scoop/index.html","e484f2ce23aa89737c74729f42b264a4"],["/tags/Software/index.html","6d236f1568a733657774c735d1c08918"],["/tags/Swing/index.html","ab14c8fbfefc464268934525874c3d44"],["/tags/Tomcat/index.html","ae7b2e4b7528264a9d68803a53f96947"],["/tags/UTF-8/index.html","21e9d83246f00bd4200403dfb569b362"],["/tags/VSCode/index.html","993968261ab35ce3b4fd0824ee829a0f"],["/tags/blog/index.html","f0c748c710e42723c2ee6e5df6f4fe2f"],["/tags/builtin/index.html","44d8872fc1915f572ae5833ac144b531"],["/tags/cloudflare/index.html","65cc22bde85778630fcdb1feb4176807"],["/tags/index.html","d14698b913d47ead7341a608409d7b84"],["/tags/tools/index.html","d60bdb602a2228b5867f5aae831b7949"],["/tags/vue/index.html","a8444f0d396ef9fcad5b26e62250e803"],["/tags/web/index.html","ee4dd214101f0643383ac58287c885c2"],["/tags/乱码/index.html","b4e05aa9eda0c98a376a138e9724cfaa"],["/tags/二分套二分/index.html","2cd9605ac5afeca52b0edeae070486ca"],["/tags/划水/index.html","814780c9e803dca18566836299422f2d"],["/tags/包管理器/index.html","4c6c915ea388cc63b39f97e2a4718006"],["/tags/图论/index.html","3b0b1daf2e585adfe0c3dd948ecb4759"],["/tags/字符集/index.html","888e8481a8c18cd5769f63895218c873"],["/tags/应用/index.html","c2dc4d428052ebe8957a879261b92da9"],["/tags/悦读/index.html","5c08afcdc7dcabf857603bb49f646fb8"],["/tags/操作系统/index.html","214198ed6c4c025195b74b968e7aef88"],["/tags/数据结构/index.html","bcd1dcab7f56eb63afa639199bac94fa"],["/tags/数据结构与算法/index.html","129bcf7c21e8f937154bc349ba575a2e"],["/tags/新年/index.html","d92b60cc8a63d81aa45aefa7cad156cc"],["/tags/杂谈/index.html","2e9b6138618edc24845864954d22d087"],["/tags/深搜/index.html","7411962235d26f60397b584701dda3f0"],["/tags/笔记/index.html","8e10aac48c32696f6d697d60199cea2c"],["/tags/算法/index.html","ceeb954edf68b796f00a6851646fed61"],["/tags/线段树/index.html","97469c0550950c1cc01547f5aba298b4"],["/tags/编码/index.html","535773ea92e9495c296e6b7fce837d21"],["/tags/编程技巧/index.html","72b44918b64ce7d7404b2893212dada9"],["/tags/网络流/index.html","f313f5ec64032d4d2f1725360c59b122"],["/tags/萌新/index.html","b234bd4b7fbb661fb8aa58f1ff566ac0"],["/tags/计算几何/index.html","c57a0efb80bdfd306cdf8a69ad709be9"],["/tags/计算机组成原理/index.html","65565e04c1ebe08ea50af0c94333daea"],["/tags/计算机网络/index.html","4915d85e750fcc273a35d304479634e5"],["/tags/质数筛/index.html","658ea05b95e58759ac626c305950cbdd"],["/tags/软件/index.html","b48d05e7cc4c781dc60233879515916e"],["/tags/输出流/index.html","150ffc5f36173328681d4b34665d41db"],["/tags/镜像源/index.html","5fa2e80e8da89a98bb3f545fa212ef08"],["/tags/随机增量法/index.html","93c0a091b88385517c454688a145e584"],["/tags/题解/index.html","bc1b4c07f727e7688b6a7b085d53ddde"],["/theme-sakura/index.html","a83ea59bbc22a2fe381cf4f53d65e70d"],["/video/index.html","2a934faa26fe5f053ecc6e4a3adeb191"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fastly.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"gcore.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});





/* eslint-enable */
