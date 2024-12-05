/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","e32b0a41c45bc83080546e9348f38de5"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","b3588b7a6df2cb11ab5061b32929afeb"],["/2023/02/06/C语言链表/index.html","cce0652418d23ea1bbd0ccc51035158c"],["/2023/02/06/书籍资源/index.html","a882e3fe47c1baf78051ab4f2361a2a2"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","04a90e68a81aaffd66d5663c7b91411d"],["/2023/02/07/为水而水（笑/index.html","6885e6a203e6b23179ae5e0302bc8126"],["/2023/02/08/洛谷主页源码/index.html","71441d13171c54451597f691dbf8b8b3"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","f73e10c963eb76a7f18a88cdf7883084"],["/2023/03/09/Web前端笔记-Emmet/index.html","3e492aa59a6109730eae503a1000e9af"],["/2023/03/23/gitalk-评论/index.html","874c8cc7900b2d576074126640098734"],["/2023/04/10/用C语言实现字符串全排列/index.html","0dcdf38e20fb98257490a836c76c301a"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","fbd0c0e785b6b8083442ed33e1daa824"],["/2023/05/15/C语言基础排序-demo/index.html","36b1a59a2407008a593d39af805c0cad"],["/2023/06/14/闲着没事干/index.html","1d7133319a55e72294f50a77a42428ab"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","53c3fb4d4526950a7efc85b264a3756b"],["/2023/08/01/javase-note/index.html","732e2403190e1a63a5eaefc021e4339c"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","5952058b65e76aaec54b0634e7346237"],["/2023/09/14/vue-pure-admin/index.html","81e0f9409cd0b7cb33654b1de90f6c93"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","7e395b0e4c88eabc89cc9b1e35fcd200"],["/2023/11/28/C-CPP-the-memset-function/index.html","ae51287fbfd658b8ab764e8061b1d4ad"],["/2023/12/13/javaSwing-DynamicClock/index.html","1356eb675ec16f7100b04a83a980ea9a"],["/2024/01/24/builtin-系列函数/index.html","2e52913f9392c0a8b2359039d338fbc0"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","ea65c426134542c45b79d8622f9edeb5"],["/2024/02/09/新年快乐/index.html","d6821f5595dae962837723fb62222c3b"],["/2024/03/26/408-route/index.html","67871e92d530c1f29674211db2511436"],["/2024/04/07/转载-线段树专题-xyw813/index.html","6cf2d45b57478f345236cc3dd76f2b95"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","8bb1d4fdf1b867bb6c3af7a29ef42b0a"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","0482ae766db77d82696abc1699264ebd"],["/2024/05/06/cloudflare-display-issue/index.html","c42f4bab77dd4c5d0f5d10282518b6c9"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","2c1c015badb570b0baf8d7e3750f9f38"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","80548cf8047275a7f0337ce2a11c97a7"],["/2024/06/25/open-source-LinuxMirrors/index.html","c4f74d2aaef0b015f4e460ed267ea517"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","ddd8a9c22b0b4f8744f6e811574d642b"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","38c8c9ce6b9ebea25edcb8e9beeb6df4"],["/2024/10/11/常用STL算法库/index.html","1864117db605dcab8c1ebd7c9a99eeb1"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","4b3e2f494b81c179e329a32c762bc5c9"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","75f8027002b807c34e0ad9d14d28d98e"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","f097a90c60b3cdf4cac36599240a3943"],["/archives/2023/02/index.html","7e250306415f89973dd59553589eceb8"],["/archives/2023/03/index.html","ef366c57a836a99dee30ee1686ae2a31"],["/archives/2023/04/index.html","ca51da16aa3631bc497b50c84b1d98c4"],["/archives/2023/05/index.html","51eb83e50701f89173e1673691180030"],["/archives/2023/06/index.html","db87d3d087d4ce55d88cc5e67090657c"],["/archives/2023/08/index.html","925e9caab5b88f9889ebfb27d1a4c241"],["/archives/2023/09/index.html","3d48bb1578a68328c827e4a25127beb8"],["/archives/2023/10/index.html","9dbbddffc9a5e2c6c88176d603567c03"],["/archives/2023/11/index.html","f15624dcbd621ee8ebc49898884d0f55"],["/archives/2023/12/index.html","d191e44868763d3a5c5788d787c40495"],["/archives/2023/index.html","79405b0fa578ea4994440e1d71586fce"],["/archives/2023/page/2/index.html","79405b0fa578ea4994440e1d71586fce"],["/archives/2023/page/3/index.html","79405b0fa578ea4994440e1d71586fce"],["/archives/2024/01/index.html","bbffc63f2f1967b42b46be638dc65d81"],["/archives/2024/02/index.html","b6e07875f3a564f3284feffc432783b1"],["/archives/2024/03/index.html","5d73c091e4eb9c676a852740ad21c2b0"],["/archives/2024/04/index.html","8c901e4a11bbaedc4f8d371c3bed7a8c"],["/archives/2024/05/index.html","17dd94f444149fb7a2087311cf5e2c93"],["/archives/2024/06/index.html","d87e02efd6d47a6725455a1f3ed91c47"],["/archives/2024/09/index.html","e42378525d551fb6ad4ae3c8ccb057a9"],["/archives/2024/10/index.html","ba05b06ef5eaa46e3a34d011737a4afd"],["/archives/2024/11/index.html","e4094f50ebd3cc905eab2e8c7b42c293"],["/archives/2024/12/index.html","f7f0290d60f3b0f6bdceb850d0697d52"],["/archives/2024/index.html","41c9be123599cdba91a420c77bb6c211"],["/archives/2024/page/2/index.html","41c9be123599cdba91a420c77bb6c211"],["/archives/index.html","3b3bddb472e2997812b4516bf4b1346d"],["/archives/page/2/index.html","3b3bddb472e2997812b4516bf4b1346d"],["/archives/page/3/index.html","3b3bddb472e2997812b4516bf4b1346d"],["/archives/page/4/index.html","3b3bddb472e2997812b4516bf4b1346d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","e9513ea43f703668bdba1869d762a527"],["/categories/技术/index.html","86404b03e365df4c4c9ba82bd5ca5e0b"],["/categories/技术/page/2/index.html","84adff3feac0d7afe728d0b25d0f59dc"],["/categories/技术/page/3/index.html","01785f6e6ff9d88e8eef9c653257619d"],["/categories/资源/index.html","36e0b062a12ca2077a8cd3748f76989f"],["/categories/转载/index.html","b4d568a86ea3149e632b1eb132ff0857"],["/categories/随想/index.html","8a4cf0d0277a1354466d6cac8218ad6a"],["/comment/index.html","f9f46cdfc12a7a721e7c790d7b88cd8f"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d92341cc69d90c5325ded1718ae9e7fa"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","92423fe11872a4fc12e9511fa2babd2e"],["/index.html","efebed5dd52fe16cc37bee3138ae542c"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","5251f52e0c33dd01b464c43c48789305"],["/links/index.html","9d4477bfea22097476cb9c915af99c00"],["/music/index.html","f379481add2c245ff3849156199c2092"],["/page/2/index.html","7ed09fea1a03a348d4a0ce2567282b0f"],["/page/3/index.html","11a33421748885a9b8ef2d03fdf5fd8c"],["/page/4/index.html","091ba23a13604271ce561b5a4fd05e07"],["/rss/index.html","724d1e10df301faeccffbaa8e08e99e2"],["/sw-register.js","ddb705be7c45ca44f8b1ade2c6376dbb"],["/tags/408/index.html","25d5d5c302fc6b4da3120e092bdbab21"],["/tags/Adobe/index.html","e0dce1ac181e4a774f35830d976a8514"],["/tags/C-C/index.html","1bdd5d56d756fb43806d13e889dcc14c"],["/tags/C/index.html","4c69cb1c896898bed6e9fef0aa05dd4b"],["/tags/CPP/index.html","083d7938db76f3271f76e125d0286ee3"],["/tags/CSS/index.html","a6db5e743159a2e5a7b4d091e2de02ee"],["/tags/Color/index.html","db26fc878f4bf3d0abe1a091f38dd42f"],["/tags/C语言/index.html","7b30f40659c5815d6001f87cfad4bbbd"],["/tags/Dinic/index.html","9f5a5bd862ac095e6e8a0210f84d4557"],["/tags/JDK/index.html","a10538b8efe82a42cd7b036909dc8080"],["/tags/Java/index.html","02adb4e8b39b1f40cdfade698daa1f32"],["/tags/JavaScript/index.html","2096befa49b4ae1ee9e9170f776653bf"],["/tags/LeetCode/index.html","90c437e4003d706388799fe0f93c44d8"],["/tags/Linux/index.html","f5a167401d92a041e0809eebe542b5c7"],["/tags/MSYS2/index.html","dd48f0577dfefe76dc6e4176963b3487"],["/tags/Note/index.html","1756cf8f5e57f4ce0ec425df343ee565"],["/tags/PS/index.html","fc7eed74cdf028839f419be04061788d"],["/tags/PrintStream/index.html","5ebcf6df7bcc5182ebbd88766cd77bfa"],["/tags/Rocket-Loader/index.html","856aafac293502d4f8cd22d5bb331d3b"],["/tags/STL/index.html","8224776d7a1fc691008e50b5d98cbc85"],["/tags/Scoop/index.html","1b02204e0a46d0975096ffbf35379f81"],["/tags/Software/index.html","9425647873fe9274dbdd384e99c6e5d7"],["/tags/Swing/index.html","62e523e883032c155c035f2cc9fe0597"],["/tags/Tomcat/index.html","cfa7eed5a8b2ae048e085f4d7bbdf975"],["/tags/UTF-8/index.html","3236691798e6eefde1e77302a6903c3a"],["/tags/VSCode/index.html","03e8e66cae16c0699609ac3d2bac4b1a"],["/tags/blog/index.html","f2140f8ef7d6bfa4393f1e628c421320"],["/tags/builtin/index.html","159aa667d73e37d16a4a3fe1f0751ee8"],["/tags/cloudflare/index.html","744d94405e7812747dba68423e4c80af"],["/tags/index.html","21501bee1dcd64b9cc7e915d10be900d"],["/tags/tools/index.html","568bdbffc393509ab349b803d263c4f8"],["/tags/vue/index.html","a7e3eec20c1a3acfe9e41a267a42b7a6"],["/tags/web/index.html","69a16516fead9e2f2efba348a20b3472"],["/tags/乱码/index.html","11a554575409f3e6e6ebc846bcc674d7"],["/tags/二分套二分/index.html","74fee5241b806751aa2c62af2d93b257"],["/tags/划水/index.html","6863b26cb567585e82f1672ec7333904"],["/tags/包管理器/index.html","92ac9bd6bab9e76439a49be4442c4a34"],["/tags/图论/index.html","9d4e51ab8d61cfca70adaa41f40719a2"],["/tags/字符集/index.html","dcacac8c7d1462abc027fd98fb6932c7"],["/tags/悦读/index.html","afc870d1e01c61b4b3f638e83521a7f6"],["/tags/操作系统/index.html","c2231458f74ebf79b084bf0f2fabf01a"],["/tags/数据结构/index.html","ce93611b9f83b8c8cb687b37f7a658d0"],["/tags/数据结构与算法/index.html","fc50e155e79b58b3a124eb97684f5cd3"],["/tags/新年/index.html","3973ee738c3505ace13875585b385310"],["/tags/杂谈/index.html","05c535d821c174bb48eb478d19e49ab6"],["/tags/深搜/index.html","ab042870cc579f05e9c4801393f5cfdd"],["/tags/笔记/index.html","09fb36f8db8c4a509ed6b1792bd8e428"],["/tags/算法/index.html","4f40ddf3c27811c398dfe2feaefc1be4"],["/tags/线段树/index.html","93f8f80b3335736f4e75adcb3f0c5fcf"],["/tags/编码/index.html","acfc1dd6e835aab13b9fbf22865255c5"],["/tags/编程技巧/index.html","c1c9827bd27f73ccf91be8acb3692f51"],["/tags/网络流/index.html","4f597e5a969aabac2fd11a4c9497c1af"],["/tags/萌新/index.html","11c3bb05d26ef9e1a299a186c47319ca"],["/tags/计算几何/index.html","0fd9404910e924f9d86b24b348f30cfc"],["/tags/计算机组成原理/index.html","a7268f1ebb5c23688e73b5f5f60345cb"],["/tags/计算机网络/index.html","079026fea55faec5689bdff9e0f87a15"],["/tags/质数筛/index.html","0fb51c933df9bd59df60097dee7edf55"],["/tags/软件/index.html","c9b777135a0cc5042eaeae3b3500190a"],["/tags/输出流/index.html","f336f829da02f70f45fb9ea4f4d0f06d"],["/tags/镜像源/index.html","626e8bfd4101abf51b0d9258fb877e05"],["/tags/随机增量法/index.html","62be621f10b8c299d54463c2615a0e10"],["/theme-sakura/index.html","bcb907325e712a58787d322b57e8e648"],["/video/index.html","00b769c4ec7640642c3b84a74a2d7484"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
