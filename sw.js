/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","c1ad7fc26ccacb6432b48220597355e4"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","5004edf5882cd40f06432aadc5ec9809"],["/2023/02/06/C语言链表/index.html","a5e070f57489c776c7707139c8de74c9"],["/2023/02/06/书籍资源/index.html","d36bb92dca268b28d410608c6e6a869e"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","6d9dd0035caea28ec87942a9d61dc20e"],["/2023/02/07/为水而水（笑/index.html","91500f9ba418ad5c9c0338527fa50181"],["/2023/02/08/洛谷主页源码/index.html","b6223b5f6c1fb016c6b3eb424d3ba795"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","a741a361ff7c83cb1bcc721d862daa63"],["/2023/03/09/Web前端笔记-Emmet/index.html","2f4f68cdb257bb85a3f55dadf126dd18"],["/2023/03/23/gitalk-评论/index.html","153879aa088c3d91e85dff057c18404e"],["/2023/04/10/用C语言实现字符串全排列/index.html","00c224962545fd92ed5971a2c0e36679"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","81b22619fd88fcd6b7304707d8e199a7"],["/2023/05/15/C语言基础排序-demo/index.html","3e9f20f16a0b31b30a8f98bd8cef57ef"],["/2023/06/14/闲着没事干/index.html","d38115e12c325b8c32d6953f5f3b23a9"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","7d8f82e677409aefeffa49dbc7ed4327"],["/2023/08/01/javase-note/index.html","9320d91c30e2d80e70e607703a9ec587"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","5aba08e8bc3ee4af9450dfb5f7089578"],["/2023/09/14/vue-pure-admin/index.html","1a0335448ffc22b6e4dd4494453630fc"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","f5f3206fd5ce70583468d2d84d8e4876"],["/2023/11/28/C-CPP-the-memset-function/index.html","708f65faa49114dece321832bf68b5d8"],["/2023/12/13/javaSwing-DynamicClock/index.html","57f34622618b040d628e6a2a8802f2c1"],["/2024/01/24/builtin-系列函数/index.html","093994daeabd09379137cd1e5c890023"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","4cf52cbdee538aef12960291c914dcca"],["/2024/02/09/新年快乐/index.html","7b89410203395931886c7e47f27846ce"],["/2024/03/26/408-route/index.html","75250e4a69f9d38d38f3f442c783268e"],["/2024/04/07/转载-线段树专题-xyw813/index.html","406d96116cc5ca08fb5ef89d804ca2a9"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","c7248de2dfff65c108087841b1bfa2de"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","13e605dc5dfe99f2f0fb03be163d9105"],["/2024/05/06/cloudflare-display-issue/index.html","13e9b699066e6fd493c95a250b135808"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","b659881fbe82509b202ffe7ac353c59e"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","bb3e641f58c4e4eddef5baf1e7412045"],["/2024/06/25/open-source-LinuxMirrors/index.html","81a62e272e107b80f722120da29f1342"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","ce931693f28957ab00d5c4449c0ccdd2"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","651dcdf5672775c88bb6641cd0735ab7"],["/2024/10/11/常用STL算法库/index.html","8a9fe54ca0dc90de3e911f5dcef9b509"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","9e0a10879d1f8e284d9324a3d2c6da92"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","4a57a1d1bc7265d9e7edd831a20931b4"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","a57bd3dfbc2fd92064be72fa134d76fd"],["/archives/2023/02/index.html","a14b614a44be0cdc8311a008c59c1810"],["/archives/2023/03/index.html","688dcef5074026aed980ad978024bc19"],["/archives/2023/04/index.html","9b85851e102b34c7bb8e2deb60a4f9d9"],["/archives/2023/05/index.html","563c68eea1c93e54a2d8daba87b23122"],["/archives/2023/06/index.html","1af0e863e3e77915bab8257cef7f2fdc"],["/archives/2023/08/index.html","84e3d34c159afe20dd726a0064780164"],["/archives/2023/09/index.html","f358d17c6abfc55166fdcb7f329f9913"],["/archives/2023/10/index.html","b62384eac54a7f28f9a3c9a5249fa3d2"],["/archives/2023/11/index.html","ed6d68bd9881df113a5b20bab61f9b6d"],["/archives/2023/12/index.html","b4297462f2bd1ac574045cfd39a2ba54"],["/archives/2023/index.html","f10425e55ced4258c30d3d68e46c3f9d"],["/archives/2023/page/2/index.html","f10425e55ced4258c30d3d68e46c3f9d"],["/archives/2023/page/3/index.html","f10425e55ced4258c30d3d68e46c3f9d"],["/archives/2024/01/index.html","629180603c76782db34ea92da125c9f5"],["/archives/2024/02/index.html","a461257580e6c84ea8ec75183804e682"],["/archives/2024/03/index.html","aad491429b5bdcaf6ae5b28725d25be0"],["/archives/2024/04/index.html","4d63b5009ead4c300f92e96821e65327"],["/archives/2024/05/index.html","ecbccbce6089ac12378083a56a9e73da"],["/archives/2024/06/index.html","ac23aac0e34a0ada8a470e17016d6714"],["/archives/2024/09/index.html","afb827e5b10531dccb0903dc33dc6c9d"],["/archives/2024/10/index.html","d0b8e9f7808520637a5b9227526d480c"],["/archives/2024/11/index.html","00e19727de62db1dcec92d563f03c9d6"],["/archives/2024/12/index.html","ea467d9c0a93688e5b49c513294e6188"],["/archives/2024/index.html","b9406bbc1ff9219ce70b7f67e1f478a5"],["/archives/2024/page/2/index.html","b9406bbc1ff9219ce70b7f67e1f478a5"],["/archives/index.html","f333ae9e594d6af2361c6b603d2b48b8"],["/archives/page/2/index.html","f333ae9e594d6af2361c6b603d2b48b8"],["/archives/page/3/index.html","f333ae9e594d6af2361c6b603d2b48b8"],["/archives/page/4/index.html","f333ae9e594d6af2361c6b603d2b48b8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","d07168c5438d11f507a5ba24ec55f393"],["/categories/技术/index.html","ac1969b49ff5bedffc050ea631de4cc4"],["/categories/技术/page/2/index.html","5f4082df7bee56409aeb414531f76e98"],["/categories/技术/page/3/index.html","9cf263e5e7ca99966fc803701671b407"],["/categories/资源/index.html","a0760dff32cc4332ad32ed89d373e4aa"],["/categories/转载/index.html","428bc2d562d812b1f94f209f6e8584bb"],["/categories/随想/index.html","88ddd13ec5c33a961d232935f7933c42"],["/comment/index.html","28ab1fe7c344bc9136e892001d8f63f4"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","5c2015e3a06427128f1094067e0c1de3"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","0e57ab1c91f04a1ad5fbcb0f5a381170"],["/index.html","01d0f037d082e2519367a7ab72f4f83b"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","5b1a01f899d6764db7ef369f37fe1f23"],["/links/index.html","3dbb172e94923bb62ccd06c07021d855"],["/music/index.html","b6692ef039ca7e5e61d35b05153e6945"],["/page/2/index.html","fdaa1621116b558e9ad633cfd26d84ef"],["/page/3/index.html","e68c47e5101ffa96ea4fe0f86d1d4c68"],["/page/4/index.html","eeb83ef302a2e1d3c05f6c4343198da2"],["/rss/index.html","4759df506c274a0663150c16db054c7d"],["/sw-register.js","ac0d1d8e965344b780c2c70fec99a249"],["/tags/408/index.html","499dedce5fb7665debb1e023b296dc3c"],["/tags/Adobe/index.html","5f25c2ccfc14f8793ef4e52ede851f4c"],["/tags/C-C/index.html","ae617ade78e137cc4d4c0007d9345090"],["/tags/C/index.html","a40504eda1b613fd934b4b3a37dabaec"],["/tags/CPP/index.html","422ee6d508d0492425f587a28069ef95"],["/tags/CSS/index.html","dbc721693d6d1d35a1b01142e1d6fe79"],["/tags/Color/index.html","0dbb91c833663602b530c5b2c5f8b5d0"],["/tags/C语言/index.html","1c1cc28a52cbd8641de9415fb31c1ae6"],["/tags/Dinic/index.html","796b3d88e72359b9255f4ec7b70f4a85"],["/tags/JDK/index.html","1652ce97b86bf9d989c311ca19574991"],["/tags/Java/index.html","4832de9dc828c8143d825f156355f287"],["/tags/JavaScript/index.html","a63d25cc47bfd2e13911b5dfaf1eb4eb"],["/tags/LeetCode/index.html","27f6889dd8eba904062bbc13f2d5f7cb"],["/tags/Linux/index.html","180d8b5e90bf8dee83accfc853d0602b"],["/tags/MSYS2/index.html","12596e01871ee99d14ffe9cf2ec0dcc7"],["/tags/Note/index.html","423372549a55f9aab569eb67500a3128"],["/tags/PS/index.html","51aa799f23f0f6db2ee30bd3f0ab0459"],["/tags/PrintStream/index.html","c84a199ec8d09ebc3bdc686003e20371"],["/tags/Rocket-Loader/index.html","0c47b5cc87523d784d4b148dca2c75e1"],["/tags/STL/index.html","f79abd42c1e3c1e690e26af4432e3ba2"],["/tags/Scoop/index.html","24eef86564b3bf34bb2790763c3a3881"],["/tags/Software/index.html","de1b9c55a9c1f8e6e6446b7520e2d64c"],["/tags/Swing/index.html","f2fa492be2f271f16ab27af46e00c917"],["/tags/Tomcat/index.html","4fab312f5155d698787e6aca71fda642"],["/tags/UTF-8/index.html","dd432058f2f88c128a0827f0748a5d22"],["/tags/VSCode/index.html","f3f79ce81f27cf5dc8974450ccb66d20"],["/tags/blog/index.html","547e7773c789db4364ddca214389c963"],["/tags/builtin/index.html","9139974c44ec350f9f40d4f652afc6c3"],["/tags/cloudflare/index.html","1d9401e9f31a68187a5cafa78e42da28"],["/tags/index.html","b462dda7ea4288d62b43ca50e50f6f06"],["/tags/tools/index.html","9e7c0197679fa795bd869d820aef3b4b"],["/tags/vue/index.html","29ff688fedb314fc1c6c840152728922"],["/tags/web/index.html","e75ca3f9874f0eb0fe5eaa9503dd1eda"],["/tags/乱码/index.html","776e4d590a0b706da309c59c91dfae13"],["/tags/二分套二分/index.html","722f996281e8c123ce1286e0974b8a06"],["/tags/划水/index.html","768a9ce5f38247a6935b6d14489e709b"],["/tags/包管理器/index.html","3ceea1d5bb7106e23ebf222e5d99a359"],["/tags/图论/index.html","b997c74e72fd2b1be52a37b5535cdc09"],["/tags/字符集/index.html","8f7d9c0fbb8293e450d10045766e12a7"],["/tags/悦读/index.html","0d24738dfe2d2b14d342bdf32ca26153"],["/tags/操作系统/index.html","c5eb447bb2f2f3e38447b13955128db1"],["/tags/数据结构/index.html","85f500826456bbe781ee94be6f06a783"],["/tags/数据结构与算法/index.html","b0c2f8421b641d8a75c0c6d7a05fb610"],["/tags/新年/index.html","3dfc5250094c394b4e66f0a2637302c1"],["/tags/杂谈/index.html","25bfc62fec519c413cf1d8b1289d3bed"],["/tags/深搜/index.html","714e23372f2725201196ed39a10c5c88"],["/tags/笔记/index.html","2e0d05e48f12f4e6aac8596150e050ff"],["/tags/算法/index.html","467e885b40dbbf3ffeed0a97fbe4e3f7"],["/tags/线段树/index.html","45442d0c2f68d633773c7394abd8dd5d"],["/tags/编码/index.html","6824b4cd394f7cdaf19143d68164b575"],["/tags/编程技巧/index.html","d54cdd154bca292138aab17007bbe173"],["/tags/网络流/index.html","2e2fcb72fd398b5da9a56a6608af68ca"],["/tags/萌新/index.html","d94cf35f8f0901a702636ee29c0f7e0a"],["/tags/计算几何/index.html","bfc9a68523f74befacc98ec3e012a26b"],["/tags/计算机组成原理/index.html","de261bd897a9293cea65abc3e07a42e2"],["/tags/计算机网络/index.html","dfbcdb41bf687a3cad0951234f2e112a"],["/tags/质数筛/index.html","679be929a4a5e22cdd0e401ba4233e19"],["/tags/软件/index.html","e2403f9febc402a0cc0bcb243fee6452"],["/tags/输出流/index.html","ae90331cef1ea9dc5ece51eca07dc263"],["/tags/镜像源/index.html","1f351a1096c524ed8bc38b8425b2d1b8"],["/tags/随机增量法/index.html","406f6bcdf66e32301f967a3d6669c352"],["/theme-sakura/index.html","af4ef73c14c6785c0ccc9fbb997094a0"],["/video/index.html","e08b05edb868726a67ab7ef33634e06e"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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









/* eslint-enable */
