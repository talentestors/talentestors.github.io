/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","d6bde3cd0beef6e496241c787f3bcef8"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","ff1aa3a5b03f9e652be7fb9bcbcf707d"],["/2023/02/06/C语言链表/index.html","172210ce2312e341ce42b834ac438a6e"],["/2023/02/06/书籍资源/index.html","e262ff62267e01e57528d3b90d48a15b"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","0fd2c68bf79d9bf6b0a80c7eb4304f1a"],["/2023/02/07/为水而水（笑/index.html","f9833ab97e31b9136a9c9242677e2900"],["/2023/02/08/洛谷主页源码/index.html","a98c2f5aca1dd5ad8558a0343a6874dc"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","0e99faf57a87f7ec597a1e8914941123"],["/2023/03/09/Web前端笔记-Emmet/index.html","a3870cadbbc05b0ee0b4a9088b711a65"],["/2023/03/23/gitalk-评论/index.html","cb5af1eafb50dfc3c60374b1298aeb54"],["/2023/04/10/用C语言实现字符串全排列/index.html","b5bfc3f6aa4c293520531d62b72e19f0"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","bf273e9391183c1f4e296b6e21872174"],["/2023/05/15/C语言基础排序-demo/index.html","d062b59a8fd705ccdec3ed1ed26108e5"],["/2023/06/14/闲着没事干/index.html","eb830bc8784e6b4646d62d5991eacbd1"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","d3b018db03059e9fde5b4314b6cfd702"],["/2023/08/01/javase-note/index.html","f307a3870bafac21170e5fac6479d3de"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","bf8f99008863eb7d791ff4c8358f561d"],["/2023/09/14/vue-pure-admin/index.html","c011b32330149402f436f77a8a9f4bd7"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","04e5848f6a459b6af762e8d639b85068"],["/2023/11/28/C-CPP-the-memset-function/index.html","48bc001dea7b3524504ea9f26bcc0383"],["/2023/12/13/javaSwing-DynamicClock/index.html","6883c47188ab9bce2a1f09401af058d6"],["/2024/01/24/builtin-系列函数/index.html","9351c4b24e07bbb0286625c0e836497d"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","17ab2de78d91d7aa0b87dd7992ca265d"],["/2024/02/09/新年快乐/index.html","2bf0fd71f68927f92ba53295a535de28"],["/2024/03/26/408-route/index.html","59c6085c152bb32e85aab8b0516323d9"],["/2024/04/07/转载-线段树专题-xyw813/index.html","6a44c3fec7395093d5c41af22b8f0edb"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","b3e0700e738288bdda7404e33d60315e"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","f272f2097d3f8509f96ae6b9e3a54746"],["/2024/05/06/cloudflare-display-issue/index.html","94ec57cb69023f2b4199ce2e2b47e124"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","54440fb00e2cd6d15199c566371cb1cc"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","c73afc79beec719db1567a97878529ad"],["/2024/06/25/open-source-LinuxMirrors/index.html","a9ef20245ccf61c1878b49e5ee7f16ce"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","275aff57755d90e215c7bffcace5aeb6"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","3cbedc5e1d6072fb4a92b5ff66accfe9"],["/2024/10/11/常用STL算法库/index.html","dc148f3c2d880e8bc4f57a9c135e963b"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","5f0c0d90eccf5b7bb9093ba5f7be7c35"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","f0b5b8800647a72cd7dff7951023ebb9"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","4dcc4a0cc17e566e74c3f9cc09059665"],["/2024/12/17/Where-are-those-algorithms/index.html","1c47b3558c6806bddb758528055e97ec"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","eb27bff1bb6065911cecdf6d3f23ae68"],["/archives/2023/02/index.html","30c7f0a9cf33c5548e0f86e3491c8c0f"],["/archives/2023/03/index.html","86a29e11380b628a71ff4bb861c7ecb9"],["/archives/2023/04/index.html","c0a056b224af4212eb19adae36f000a8"],["/archives/2023/05/index.html","8d16225586ef6f20c54b9aef32d48d45"],["/archives/2023/06/index.html","bb387a01ed57815125244389def3fc57"],["/archives/2023/08/index.html","436b1302879fee3e1c27577301072ddf"],["/archives/2023/09/index.html","005c3095bd33dc3db9d7367da94480f1"],["/archives/2023/10/index.html","013494b74a67bb76896d89769db646ad"],["/archives/2023/11/index.html","9e6d2e6ba92b8257fa1ceba72629af80"],["/archives/2023/12/index.html","759bea88feb4cda2c426eb164f4fcbc6"],["/archives/2023/index.html","36deb9768501cf3dc6fc3c08db10befb"],["/archives/2023/page/2/index.html","36deb9768501cf3dc6fc3c08db10befb"],["/archives/2023/page/3/index.html","36deb9768501cf3dc6fc3c08db10befb"],["/archives/2024/01/index.html","ac6f68dde5b7ef126f9923b135292fb4"],["/archives/2024/02/index.html","6425d994c19b142c7bfac355797839c6"],["/archives/2024/03/index.html","cfecc4cce254cc200c3227cd2e877e54"],["/archives/2024/04/index.html","2592d9fc66a56b8a841a0f718e2c30ec"],["/archives/2024/05/index.html","4130301f1059db49b84ea0c06cb0152c"],["/archives/2024/06/index.html","ca28ca90b2192d5800f78ea4a170b7ea"],["/archives/2024/09/index.html","73b11df423153f4b4c8f386f5f15ab14"],["/archives/2024/10/index.html","55b85398501b9ad754577291fbfe0685"],["/archives/2024/11/index.html","7f4d2a8ce012558b8ca4b12a1a2d7db5"],["/archives/2024/12/index.html","6e01a2f148ea45421a50923cb7aedb92"],["/archives/2024/index.html","c7d87eb1b6c50b42a1c81f9482c39656"],["/archives/2024/page/2/index.html","c7d87eb1b6c50b42a1c81f9482c39656"],["/archives/index.html","5163694039529aa4cee00df7a1e80439"],["/archives/page/2/index.html","5163694039529aa4cee00df7a1e80439"],["/archives/page/3/index.html","5163694039529aa4cee00df7a1e80439"],["/archives/page/4/index.html","5163694039529aa4cee00df7a1e80439"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","e274415ae05f21af623eb1f4922b7cea"],["/categories/技术/index.html","08623ae085811c9326dc4ebb58dbb396"],["/categories/技术/page/2/index.html","81ba8d31ede86b00e99b9df4a588489e"],["/categories/技术/page/3/index.html","3fa56dcd368ec36f07b7894c157419e8"],["/categories/资源/index.html","ded032dc714ed5bdbc07cf3f20b7891b"],["/categories/转载/index.html","7dd8bf85256131408b910f4f2e4ec626"],["/categories/随想/index.html","c301121a1b7e21903179b9a4f0921ea6"],["/comment/index.html","114afae1c505cf3a708d854cbf7aa17b"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","d8fc0a89b865a6bfedded5a62140a0e8"],["/css/style.min.css","5c69036f827bff149d075d5f26850d2b"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","49e1e2690461c38e70c6fff0a7787a94"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","033b4e35d9b11f2b42c750b6661afdea"],["/index.html","f44c1fb194d0c524b1066d37ffb3a1b5"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.min.js","65f02458a8e38579dac5594f252bd66f"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","857e1df83292594d8cb240315178711b"],["/links/index.html","f49b326479765c087b196b6bf4236dda"],["/music/index.html","8aa8cdd5dfb32cffba07b52b12f6bc7c"],["/page/2/index.html","7767145eb00b667ca20ffa2929703574"],["/page/3/index.html","c5f39db0fbaf9036a9e15c41afb05df9"],["/page/4/index.html","d39fa2bd2ea7979b7a28c17e3c1d3329"],["/rss/index.html","e9e2b6e0779792b17a9bcf5ac78d5156"],["/sw-register.js","6816d9f35ac7b4a25ced012e9362038f"],["/tags/408/index.html","417ce437ea7ca0dbb0e4b66945a43121"],["/tags/Adobe/index.html","82e58bca9fd2439a7e714ff97e960318"],["/tags/C-C/index.html","6ff70e935e4b23f666529370e7fe49e8"],["/tags/C-CPP/index.html","52018406e7377690473e26e8d5860ca1"],["/tags/C/index.html","e95a7703b1d5f1f50d57c12e74d020e4"],["/tags/CPP/index.html","9423822bba1902d502b314b4f455f49f"],["/tags/CSS/index.html","cadefcd9c2bf0b613a0294edbdcf774e"],["/tags/CodeForces/index.html","6645c9bb879d5b92cedd5d9c367e43b1"],["/tags/Color/index.html","16c22bbd322d01ff92be7680399786cf"],["/tags/C语言/index.html","c0466131ab4152a391b2a1d9bf7f9894"],["/tags/Dinic/index.html","699f5029167f6da2082657cb2705889e"],["/tags/Div-2/index.html","4eb3bc81ae944df96be7d98650c8b851"],["/tags/JDK/index.html","0150fc38e1ce9eeb9446ba49fbd1e09c"],["/tags/Java/index.html","b6abf351902a0ac026e365a8790734c6"],["/tags/JavaScript/index.html","e557ae31961921b8b0df77e53137d471"],["/tags/LeetCode/index.html","4c01409646ac25b5fd2cb82b4741b76b"],["/tags/Linux/index.html","f090c452158d2864bec98ea3817adfb5"],["/tags/MSYS2/index.html","6f43b7c58f20ab6b28c5ba5f5d4d570c"],["/tags/Note/index.html","1b12ce43324cc735efbe2be67ae72907"],["/tags/PS/index.html","0aabf0d52ed589e804cba283b477213c"],["/tags/PrintStream/index.html","2d50bd874424ea32d67867fa7f27bf06"],["/tags/Rocket-Loader/index.html","9b5411c57367debce117139daae54b6d"],["/tags/STL/index.html","bf69e17c9a4c3875e8816a9f53aac0bd"],["/tags/Scoop/index.html","c6a49e4dbaaaa69118625d6364297c1e"],["/tags/Software/index.html","1b396671ef3d1a5c3ec4ea471fe412ea"],["/tags/Swing/index.html","9e05ee93004fc1bd31cede87b5e718f0"],["/tags/Tomcat/index.html","52749160314ae1cca80d451d19b8532f"],["/tags/UTF-8/index.html","d776d69343ccbc55ddfb0244cf97dd48"],["/tags/VSCode/index.html","52a4aa0c4f2ed10df15efd3933cd4296"],["/tags/blog/index.html","a432e452c53fb0d0b1b41c7e15aa6953"],["/tags/builtin/index.html","d0c8b23d16b859619136a66ffe6c2a68"],["/tags/cloudflare/index.html","d9984b5f27522d2b7c6294e39d980f67"],["/tags/index.html","349236b9a8e55180eff699cef064d52a"],["/tags/tools/index.html","559ee377e64f52925f9b61e913e196b0"],["/tags/vue/index.html","417a2049042af1f22e90860acb994ca6"],["/tags/web/index.html","04dd25cefee945068839161dd4fd6826"],["/tags/乱码/index.html","f982403a7a6bcf56ce49688b65e940f0"],["/tags/二分套二分/index.html","97b5a798852e403df06de53d6ccd7fe7"],["/tags/划水/index.html","9334af20073f1baebd714a94d978001f"],["/tags/包管理器/index.html","6f8feb239f9a4ee250af02342a4b75ff"],["/tags/图论/index.html","539aa10a9bd229b02a156e4543d1166e"],["/tags/字符集/index.html","43cfa9e17884f3847ff9a76dc61cfe2c"],["/tags/应用/index.html","2a6ea87b2a48cc0a125f0845aed44e10"],["/tags/悦读/index.html","ffdb236fc90a1619ccff823d70582b71"],["/tags/操作系统/index.html","8bb11d7cc43fa98f4f13dbd2d0692fac"],["/tags/数据结构/index.html","66fa69a24c1d2b9b233fe0acb5da811c"],["/tags/数据结构与算法/index.html","f4bf9baf8763996819ff81b92a056cd7"],["/tags/新年/index.html","4f86882d62af9f9d67a7bbc1dc227c88"],["/tags/杂谈/index.html","ff5ab4b1533fc491a3c5bf169e88b732"],["/tags/深搜/index.html","22cc8f0e97a8ee7e7820ea982662eb5c"],["/tags/笔记/index.html","9431d5630af1ba7379bf8eb411eedf52"],["/tags/算法/index.html","5e6cf04fb643f91b7f31bc7018fa74a5"],["/tags/线段树/index.html","d997cf81ab1b0e6ded966431697bc195"],["/tags/编码/index.html","a318a3623362b08e6664f5178e027671"],["/tags/编程技巧/index.html","3e90b683b118dc5b6698388165610697"],["/tags/网络流/index.html","6b61ea98e7a8595cc44a5f60ceff575b"],["/tags/萌新/index.html","b650aa39c00b4ba795519c508f07b9b1"],["/tags/计算几何/index.html","f855f6367ba523711ea52e90664eed6b"],["/tags/计算机组成原理/index.html","96637dbf0bf84b5bd488eabb2db2cbdd"],["/tags/计算机网络/index.html","35e21b2febf64841ab2117027a792076"],["/tags/质数筛/index.html","8c7a915bd2912a318f9743fd7d5a579e"],["/tags/软件/index.html","bef18b428cab2a381c9e6c553248a6f3"],["/tags/输出流/index.html","fade5cacf6e7a42e11f8038d65ea574b"],["/tags/镜像源/index.html","b4edf4b523729241ed0df5cb25dc6500"],["/tags/随机增量法/index.html","ef8087b07b6d051cbd7ce269ba427924"],["/tags/题解/index.html","5803d39afd8baafab6460b598ea50016"],["/theme-sakura/index.html","5360c58bad7946a63c14e2c7e35534aa"],["/video/index.html","63667af6e8412aa1cee4f2ea9b75b7c6"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
