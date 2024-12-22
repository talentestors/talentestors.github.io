/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","ceb83ec6a80da41aed3baae8946783a5"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","ad7134091c7522206bf29fa9c3a2be4f"],["/2023/02/06/C语言链表/index.html","29ea3bd997fb5c63eb9b41005a6dc180"],["/2023/02/06/书籍资源/index.html","87a53525996764752b515231047dc196"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","b4c57338105a4b8cd1c76e7ce3f5d5d5"],["/2023/02/07/为水而水（笑/index.html","be82758ce4eb72ec10bf8fbf7f8ea411"],["/2023/02/08/洛谷主页源码/index.html","ba84fd633bddbdab03074acaec23abd5"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","eb5fe0d5689f1e7c855c1c9e545afd22"],["/2023/03/09/Web前端笔记-Emmet/index.html","10cd5a3abfef2edfd583b3a81d288020"],["/2023/03/23/gitalk-评论/index.html","0f4e08936afef9c7074ec3d0d772fa2c"],["/2023/04/10/用C语言实现字符串全排列/index.html","59ff9d2acf15deb6a016f84c238bf359"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","55df273db9bc549055a149852945ff1b"],["/2023/05/15/C语言基础排序-demo/index.html","8d279cf613a93e34245257070c3369fc"],["/2023/06/14/闲着没事干/index.html","eff538206aa9cc845d1ebf808d364594"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","bdc3f11639d31b7933e6111d818f76b9"],["/2023/08/01/javase-note/index.html","0a719613447400f1677e906c4dd8c5ac"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","eb090e67a04bf471174114b1dfd480ed"],["/2023/09/14/vue-pure-admin/index.html","f3c4d9912ca08f616c8abcc1ce3de17f"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","f00e6f190c93e648be499ae58c37057f"],["/2023/11/28/C-CPP-the-memset-function/index.html","87b8f1cd358338c06119cddf99556046"],["/2023/12/13/javaSwing-DynamicClock/index.html","a8a0c7617e60ad9c1e8d49f5b37930bd"],["/2024/01/24/builtin-系列函数/index.html","1e4599953e8ea4aab491d0920b229730"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","7cf063ba4c51c4e3d501af7fec319060"],["/2024/02/09/新年快乐/index.html","03635c6c60bd50121bd2fee950cd7f87"],["/2024/03/26/408-route/index.html","5c0e8b3500b070e851f3f7a41e8da0d3"],["/2024/04/07/转载-线段树专题-xyw813/index.html","54d82eac2b33d16a2548975702bd306a"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","a30bc72359936c182d1f68030af8c4f4"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","79e2b12d555179192d071125c13a50ee"],["/2024/05/06/cloudflare-display-issue/index.html","851ce073d8f98969a4353d9680df2bb7"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","689493240181192698371ebff1b5910c"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","8eab780a1ca722288104045e35d5dda1"],["/2024/06/25/open-source-LinuxMirrors/index.html","cbca4ee00d04968bdbcf2784b24bf44a"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","8b00cc69a513f1ccbed281773f1cf84d"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","177a9131d72fff8f85c106b23356799e"],["/2024/10/11/常用STL算法库/index.html","c9a71261b2401cd7d56162ccfde2a96a"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","142e8a5d61f1e392e6712ba6d5e6e1da"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","5a6070505d16edbc738632f8a3b20a44"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","22f2637d25887f6668ec0baff3f62891"],["/2024/12/17/Where-are-those-algorithms/index.html","3cf729a2e42b403cc8903ac15b2c7f9d"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","d47092222593bb69d12e4735b10a0f24"],["/archives/2023/02/index.html","9f4d6eb079ec84942ab86d9c8ed97831"],["/archives/2023/03/index.html","ae2b38e6ddc3866a3d93526dcc52af6f"],["/archives/2023/04/index.html","269cffe933a61b850cf2b6673592b907"],["/archives/2023/05/index.html","b7b0fc669370fb2bc51df4e48d382ce0"],["/archives/2023/06/index.html","d9267d0d65a8d07def07e7b5ec7aa4d8"],["/archives/2023/08/index.html","afd3116e922c76885e2cbf2ecd0a894b"],["/archives/2023/09/index.html","8c7f2caf2f5d4b78f195b92eedab19e0"],["/archives/2023/10/index.html","c89cafdb022105e7ae9da99aa951b542"],["/archives/2023/11/index.html","3fcb05d7e2fb28e9526df9bb0d68f0d1"],["/archives/2023/12/index.html","7aedf7f695aeeb61909ec06f6469c910"],["/archives/2023/index.html","bb5678a4a3bf20abd8944f303b654258"],["/archives/2023/page/2/index.html","bb5678a4a3bf20abd8944f303b654258"],["/archives/2023/page/3/index.html","bb5678a4a3bf20abd8944f303b654258"],["/archives/2024/01/index.html","2fdfe099a072af1d8acb8b3f673f9357"],["/archives/2024/02/index.html","00577450c19f1fecd09e4294374233e2"],["/archives/2024/03/index.html","238bff47c73fa19973abf0f28a3d388f"],["/archives/2024/04/index.html","b37ed924e033b951c7da0125c6046f7c"],["/archives/2024/05/index.html","37bc91cf9152989afe372f2615a09b1d"],["/archives/2024/06/index.html","512ba43d832c4d9863b77b69008a69d0"],["/archives/2024/09/index.html","3abddf3680669ba2c7717e759b8b6ce4"],["/archives/2024/10/index.html","cad592f855d8fce35b373fc40a19d731"],["/archives/2024/11/index.html","8a6209acf9fa8aac1b6fafa1b5d9536b"],["/archives/2024/12/index.html","2b3b565ff67fcb65a0ad554981236fee"],["/archives/2024/index.html","c75e016a610d43dc81c910bcb03a1044"],["/archives/2024/page/2/index.html","c75e016a610d43dc81c910bcb03a1044"],["/archives/index.html","64994deeeed61f93fe82a59ef837e238"],["/archives/page/2/index.html","64994deeeed61f93fe82a59ef837e238"],["/archives/page/3/index.html","64994deeeed61f93fe82a59ef837e238"],["/archives/page/4/index.html","64994deeeed61f93fe82a59ef837e238"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","51ad58853c412640b3f490bbbd168164"],["/categories/技术/index.html","665bb32cd99bc86d2dcf09388f9e0b9d"],["/categories/技术/page/2/index.html","49e83ec00a45a74a9eec7d6b2bb52afa"],["/categories/技术/page/3/index.html","9c7e98b06f54e938aba8c39a78630609"],["/categories/资源/index.html","2a716c5239ab1d4c5899cc17495cd1f6"],["/categories/转载/index.html","4e66368d07f9e8647e6115ff5af91768"],["/categories/随想/index.html","8f5c093dbda88c3150632ebee05dcfbc"],["/comment/index.html","7726d98dfd9810e15902a3ef25255d15"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","ee18cd907c37f0971146c2648da3e1b9"],["/css/style.min.css","2a08992ea2f9646c8f6f476fd81a59d8"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","ebf4fba1b3b74ad8de6f7d156ee3b922"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","230f8f009818a90221e007ab2311370a"],["/index.html","ae64642400d83b114a292020fdf7f5bc"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","5453d431d3342b41980220d8798c6749"],["/js/wrapImage.min.js","8c5f0ea74a2afd8a01006b7024d13735"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","bdea9c8d60645874c8c83a2161a265c5"],["/links/index.html","c4c5070b5d3d93f0c4b78f30f80d8792"],["/music/index.html","d8ed6799fba9718bfcb31fae3b74de31"],["/page/2/index.html","553bba6ba44ab57fed557fc00bc3cc65"],["/page/3/index.html","4f1cec2f3f035db2fd323d19bf872d3e"],["/page/4/index.html","81f0d5a7c9d6a53500220a8870492174"],["/rss/index.html","6d6f483b97e945cb5f6aa08b2bbe86fd"],["/sw-register.js","9ab418692ce83c9698c8c2d4d1db3a83"],["/tags/408/index.html","71a812242186ee589e2f21df3ed186bd"],["/tags/Adobe/index.html","285a3dd7948331ebb4479448d9119e81"],["/tags/C-C/index.html","9ec25d1a582955389953a7128f215069"],["/tags/C-CPP/index.html","53b348af05cd02e9fb0af48bf74b44a4"],["/tags/C/index.html","af7f69e1349bb0d2af75dbd2cdf4f2b7"],["/tags/CPP/index.html","1dda7b82ddedb40ece057fc509291c10"],["/tags/CSS/index.html","e3a374fe5a67cb7185cc81cb39adb665"],["/tags/CodeForces/index.html","2c144a3768f41e680b28bb75d955f22e"],["/tags/Color/index.html","5de13bf33c0381306c57f41665432cf7"],["/tags/C语言/index.html","d3e93a958b037d35aab66b7fd02fb52f"],["/tags/Dinic/index.html","77976ebd7267875f8896f3302a5e7046"],["/tags/Div-2/index.html","d41bb81e0db28379596636e2e20f93b0"],["/tags/JDK/index.html","3bb935698a6c5da1ca4c1f45457bbb8e"],["/tags/Java/index.html","198567ee5d8389863d89d12f74cea8f0"],["/tags/JavaScript/index.html","b3a4deaf28d58a9cc09d40f23d9e141d"],["/tags/LeetCode/index.html","6ced299f4528ed13b00cdf351eacf171"],["/tags/Linux/index.html","04b3a082f17d9fbd8acb120b0dc95dca"],["/tags/MSYS2/index.html","de3e54e2da75417c9b79ce9ec341a079"],["/tags/Note/index.html","c71c88f10bb4f60a83ea6e2f5908c049"],["/tags/PS/index.html","7bf1688f809433a2c3fd86b66d57231f"],["/tags/PrintStream/index.html","a757a00b3f8fc71fb7adfded77443cce"],["/tags/Rocket-Loader/index.html","2c06d1bf56af5627a8227da90b0fba81"],["/tags/STL/index.html","0b1694de2091caefe6add73aed3ad015"],["/tags/Scoop/index.html","504dfc0d821b351552f6c502f32c1983"],["/tags/Software/index.html","28523e399326407eb90464b780687130"],["/tags/Swing/index.html","66c0d526a3302c9b2288a76beec75eb6"],["/tags/Tomcat/index.html","5d6cd8013df45924249928d04e5162a1"],["/tags/UTF-8/index.html","102fd8cf70c9c92b28d7990692f11006"],["/tags/VSCode/index.html","3466c8a3be30f56e4f316561ab92bebf"],["/tags/blog/index.html","fee7e1431b31a9bef87a9a550cffe19d"],["/tags/builtin/index.html","f05e8707f79cb9a3fbee0027636a6704"],["/tags/cloudflare/index.html","d5976ef091bd6dd3046a497c9aaf7c42"],["/tags/index.html","622bb600ae9a260fe424a759f4226ef2"],["/tags/tools/index.html","c6272b604e27deb8a82c61f4f2d19b78"],["/tags/vue/index.html","ea6d8284e7ec8fb3ea0331df0df3745d"],["/tags/web/index.html","ccfe8a2b71a73faf03f9e6417662e602"],["/tags/乱码/index.html","294a0af704e98739baf0ff41d2a06ec1"],["/tags/二分套二分/index.html","dc503e55de500825bb37f6d9d2af9316"],["/tags/划水/index.html","57b08ae65efb2678d4d8986089ffb73f"],["/tags/包管理器/index.html","1ac76f8939a64938f4d4d19b751396ce"],["/tags/图论/index.html","9a4436de01994d02d7382e28e477e1cc"],["/tags/字符集/index.html","798d9fec9740864157d48d8f6ede6474"],["/tags/应用/index.html","33ac2c214695d89e9f85cdc96d7728cd"],["/tags/悦读/index.html","233b9a97578823ec7fba1ec202cc9486"],["/tags/操作系统/index.html","1a71af2ca7bf72b6b490106bfbac6a06"],["/tags/数据结构/index.html","15fa022a25109fcbbc6800b9d7e841d5"],["/tags/数据结构与算法/index.html","854e52669ca08b096030031c52549133"],["/tags/新年/index.html","301173b74acbff393b09d1a41480d25f"],["/tags/杂谈/index.html","4965233b0e3aa09027877be18ab0859f"],["/tags/深搜/index.html","d4513953f5ab0ccc8dd2dcdc4ec1704a"],["/tags/笔记/index.html","ecd721df92a2da47b48ac67c86f5e0ed"],["/tags/算法/index.html","59370071f6ad8ee9048c631b1eef970e"],["/tags/线段树/index.html","872dcb89545b539784daa08edf66af4f"],["/tags/编码/index.html","02f4c71e7daea20ea507e32ed22fb702"],["/tags/编程技巧/index.html","94963e856a484b2daf82727cd8e91b95"],["/tags/网络流/index.html","379b0cabbc2558d3689a7329c918418e"],["/tags/萌新/index.html","8183a81d1a5aaad31adfe75ea22fec70"],["/tags/计算几何/index.html","5440a2ee368f4f7bd254c386f1caa1d9"],["/tags/计算机组成原理/index.html","132e37e6fb148f4c870814957e470150"],["/tags/计算机网络/index.html","fcb016e3b7fddda3e1626c181c14580d"],["/tags/质数筛/index.html","a790077e366a88bc8d9eb75d48c70f34"],["/tags/软件/index.html","dd3c311e125ab470a31498f1a1c46769"],["/tags/输出流/index.html","af410fe524e600863c55a099cf0066bc"],["/tags/镜像源/index.html","038b2e5f2d0f7fe8d6f78289733be27b"],["/tags/随机增量法/index.html","332f4cbfea1a7385e2570622680a2e71"],["/tags/题解/index.html","bc371e5cb475df78c2afea1b9ecb2915"],["/theme-sakura/index.html","6d8fda3597daa27aa5469808447afd69"],["/video/index.html","0c29008b24dc1f57c18dbbe5f56bda98"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
