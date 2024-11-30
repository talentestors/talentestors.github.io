/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","cc8cb4e536738948f7c366cd74321ded"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","5bc9cf2de25910d9edcf4f37a67fc6e1"],["/2023/02/06/C语言链表/index.html","cd5253292338b84ff852d5ecc0108d45"],["/2023/02/06/书籍资源/index.html","081a63519af802f6181eabb0abd34132"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","39afd4942f385f10641da984d8d36c3a"],["/2023/02/07/为水而水（笑/index.html","5a24368c8773252554640a0bef81e1ae"],["/2023/02/08/洛谷主页源码/index.html","ad4e9b8f4c6b077ed054c4e804165a1a"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","544ca0cd32a06d2868217504b160871f"],["/2023/03/09/Web前端笔记-Emmet/index.html","c0ec7c56be3561a49d841ca8f79762ad"],["/2023/03/23/gitalk-评论/index.html","874c8cc7900b2d576074126640098734"],["/2023/04/10/用C语言实现字符串全排列/index.html","186683699f86dfe1d683d1892e81fc1b"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","2d8c691828eef59e5d808aff24a29456"],["/2023/05/15/C语言基础排序-demo/index.html","9a5c60c04f1d291034f9cf0a37111bb4"],["/2023/06/14/闲着没事干/index.html","8aec7a738dd0335429c6c493f423e967"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","3177b8e4da0918d13d47e7c6d961cd35"],["/2023/08/01/javase-note/index.html","47f99a99314b95b66e37fa267122d487"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","bc9d1d205fe02dc169299f9d2d46d7ef"],["/2023/09/14/vue-pure-admin/index.html","aca2b9563754d0fbff43cb3a36dc1ffe"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","a91723e7d89f69cc4d7ac150f85e78aa"],["/2023/11/28/C-CPP-the-memset-function/index.html","f7c0ce061aa81e998eec0dfc1f508c16"],["/2023/12/13/javaSwing-DynamicClock/index.html","a1781088c75b7631a8a7facc6ade0cc1"],["/2024/01/24/builtin-系列函数/index.html","116e93059bc47ba75f9e29dc5e9a87d1"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","a33efbe19480d3643563ad4c8a99b133"],["/2024/02/09/新年快乐/index.html","6d9de573a66c40f48a64e7f83f17ff7f"],["/2024/03/26/408-route/index.html","cbe66903328e610ba8ff7ae3274e8eb9"],["/2024/04/07/转载-线段树专题-xyw813/index.html","55dda7a46d67759f1e04af687971c799"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","05d9ef148845d9cc1b722858c3d4816a"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","97e328ba960b50cfbd755f6cdf3e60f2"],["/2024/05/06/cloudflare-display-issue/index.html","1300dd66bbaa6055d78ff314ad7d1b5b"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","21866124d57b396a6e265b246a2e4b00"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","89cd2b7b6f66a37d1d527ebf1b24b165"],["/2024/06/25/open-source-LinuxMirrors/index.html","7d3d7e9163fc41a7c1c95a937e262842"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","a1bbc24052c6de64e59da4e6f8aaaa78"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","e126e9d5a1a8ae7a7cfb49523b6669c2"],["/2024/10/11/常用STL算法库/index.html","c7d9be38011e929a20c9ae9ebdcab171"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","0680ca927ed01a5d68cb0c0631aefedf"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","f097a90c60b3cdf4cac36599240a3943"],["/archives/2023/02/index.html","8ea539529205fabdcfca7a01f8333b3f"],["/archives/2023/03/index.html","e32e0da3fb9e02ee13dc4b267df6eb5d"],["/archives/2023/04/index.html","8fa31d8f9c11edc3c5302975d97686eb"],["/archives/2023/05/index.html","c1828f38ae8dd3339adf4876a97581db"],["/archives/2023/06/index.html","e7c432946f65e4a9be9935bbf8281708"],["/archives/2023/08/index.html","8e3eb57d79d68cb563452e76650e1be7"],["/archives/2023/09/index.html","237619a1749247a0446f2ef31e1201af"],["/archives/2023/10/index.html","9dcbb700f6b32bc762e4a52c2bac59d9"],["/archives/2023/11/index.html","e084a4e37f1f423e9e1cb40ac1945228"],["/archives/2023/12/index.html","33c0cb777c9d76a8a5c29357986e929a"],["/archives/2023/index.html","066d210155ad91f8f5211de0886cc7fd"],["/archives/2023/page/2/index.html","066d210155ad91f8f5211de0886cc7fd"],["/archives/2023/page/3/index.html","066d210155ad91f8f5211de0886cc7fd"],["/archives/2024/01/index.html","dc40023e068dac4dd24f8b2370c444de"],["/archives/2024/02/index.html","fd22f5209257e713363aa5aebfcc757f"],["/archives/2024/03/index.html","0e173a8b707b7fcf50f2338731c7398f"],["/archives/2024/04/index.html","88cd49c2879a0fb7068923271c3565ab"],["/archives/2024/05/index.html","318f63f1477685e2596891a61c0dffab"],["/archives/2024/06/index.html","44c2af81f032c992bf445a8fe0b3d25b"],["/archives/2024/09/index.html","372881101780dc6046c5ae2293a00c1f"],["/archives/2024/10/index.html","080e0222d38337d13c327ca413c69365"],["/archives/2024/11/index.html","5063b784ae03431cdb598622675d7d27"],["/archives/2024/index.html","be675f575b9a23974fae8d351306e518"],["/archives/2024/page/2/index.html","be675f575b9a23974fae8d351306e518"],["/archives/index.html","cc599a0182fd49848a45eca9a7d832d4"],["/archives/page/2/index.html","cc599a0182fd49848a45eca9a7d832d4"],["/archives/page/3/index.html","cc599a0182fd49848a45eca9a7d832d4"],["/archives/page/4/index.html","cc599a0182fd49848a45eca9a7d832d4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","e9513ea43f703668bdba1869d762a527"],["/categories/技术/index.html","dbe0ac230e36dfcce054e4e8cdb75c8a"],["/categories/技术/page/2/index.html","9690d9a9ba3237c4a5ca5eb1a4e013d9"],["/categories/技术/page/3/index.html","f7112b936370f35a4bd01e0c7b6c8390"],["/categories/资源/index.html","36e0b062a12ca2077a8cd3748f76989f"],["/categories/转载/index.html","708f9faf93aa3fc81b3e3beaaa9a9d65"],["/categories/随想/index.html","8a4cf0d0277a1354466d6cac8218ad6a"],["/comment/index.html","f9f46cdfc12a7a721e7c790d7b88cd8f"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d92341cc69d90c5325ded1718ae9e7fa"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","2b3bfb1b93f8aa6046648f01d003124a"],["/index.html","ed4f0fec9d1b982ce18e1c17d09a5986"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","3774817e620f014782c15714570ec09f"],["/links/index.html","9d4477bfea22097476cb9c915af99c00"],["/music/index.html","f379481add2c245ff3849156199c2092"],["/page/2/index.html","12378a90a48e4e6fc4e3111af545f562"],["/page/3/index.html","d0cbebf1e3a62060534fd79601bb4399"],["/page/4/index.html","642f406f88f312f349848d3ca7604b42"],["/rss/index.html","724d1e10df301faeccffbaa8e08e99e2"],["/sw-register.js","468f372f2ea4bc15aaccfdd0a57af57b"],["/tags/408/index.html","25d5d5c302fc6b4da3120e092bdbab21"],["/tags/Adobe/index.html","e0dce1ac181e4a774f35830d976a8514"],["/tags/C-C/index.html","1bdd5d56d756fb43806d13e889dcc14c"],["/tags/C/index.html","4c69cb1c896898bed6e9fef0aa05dd4b"],["/tags/CPP/index.html","083d7938db76f3271f76e125d0286ee3"],["/tags/CSS/index.html","a6db5e743159a2e5a7b4d091e2de02ee"],["/tags/Color/index.html","db26fc878f4bf3d0abe1a091f38dd42f"],["/tags/C语言/index.html","7b30f40659c5815d6001f87cfad4bbbd"],["/tags/Dinic/index.html","9f5a5bd862ac095e6e8a0210f84d4557"],["/tags/Java/index.html","ac133d01d55bacfbb43e73aac5d80b3d"],["/tags/JavaScript/index.html","2096befa49b4ae1ee9e9170f776653bf"],["/tags/LeetCode/index.html","90c437e4003d706388799fe0f93c44d8"],["/tags/Linux/index.html","f5a167401d92a041e0809eebe542b5c7"],["/tags/MSYS2/index.html","dd48f0577dfefe76dc6e4176963b3487"],["/tags/Note/index.html","1756cf8f5e57f4ce0ec425df343ee565"],["/tags/PS/index.html","fc7eed74cdf028839f419be04061788d"],["/tags/PrintStream/index.html","5ebcf6df7bcc5182ebbd88766cd77bfa"],["/tags/Rocket-Loader/index.html","856aafac293502d4f8cd22d5bb331d3b"],["/tags/STL/index.html","8224776d7a1fc691008e50b5d98cbc85"],["/tags/Scoop/index.html","1b02204e0a46d0975096ffbf35379f81"],["/tags/Software/index.html","9425647873fe9274dbdd384e99c6e5d7"],["/tags/Swing/index.html","62e523e883032c155c035f2cc9fe0597"],["/tags/UTF-8/index.html","3236691798e6eefde1e77302a6903c3a"],["/tags/VSCode/index.html","03e8e66cae16c0699609ac3d2bac4b1a"],["/tags/blog/index.html","f2140f8ef7d6bfa4393f1e628c421320"],["/tags/builtin/index.html","159aa667d73e37d16a4a3fe1f0751ee8"],["/tags/cloudflare/index.html","744d94405e7812747dba68423e4c80af"],["/tags/index.html","21501bee1dcd64b9cc7e915d10be900d"],["/tags/tools/index.html","568bdbffc393509ab349b803d263c4f8"],["/tags/vue/index.html","e9dbf643160c2363f45cc3beece9feae"],["/tags/web/index.html","69a16516fead9e2f2efba348a20b3472"],["/tags/二分套二分/index.html","74fee5241b806751aa2c62af2d93b257"],["/tags/划水/index.html","6863b26cb567585e82f1672ec7333904"],["/tags/包管理器/index.html","92ac9bd6bab9e76439a49be4442c4a34"],["/tags/图论/index.html","9d4e51ab8d61cfca70adaa41f40719a2"],["/tags/字符集/index.html","dcacac8c7d1462abc027fd98fb6932c7"],["/tags/悦读/index.html","afc870d1e01c61b4b3f638e83521a7f6"],["/tags/操作系统/index.html","c2231458f74ebf79b084bf0f2fabf01a"],["/tags/数据结构/index.html","ce93611b9f83b8c8cb687b37f7a658d0"],["/tags/数据结构与算法/index.html","fc50e155e79b58b3a124eb97684f5cd3"],["/tags/新年/index.html","3973ee738c3505ace13875585b385310"],["/tags/杂谈/index.html","05c535d821c174bb48eb478d19e49ab6"],["/tags/深搜/index.html","ab042870cc579f05e9c4801393f5cfdd"],["/tags/笔记/index.html","09fb36f8db8c4a509ed6b1792bd8e428"],["/tags/算法/index.html","4f40ddf3c27811c398dfe2feaefc1be4"],["/tags/线段树/index.html","93f8f80b3335736f4e75adcb3f0c5fcf"],["/tags/编码/index.html","acfc1dd6e835aab13b9fbf22865255c5"],["/tags/编程技巧/index.html","c1c9827bd27f73ccf91be8acb3692f51"],["/tags/网络流/index.html","4f597e5a969aabac2fd11a4c9497c1af"],["/tags/萌新/index.html","11c3bb05d26ef9e1a299a186c47319ca"],["/tags/计算几何/index.html","0fd9404910e924f9d86b24b348f30cfc"],["/tags/计算机组成原理/index.html","a7268f1ebb5c23688e73b5f5f60345cb"],["/tags/计算机网络/index.html","079026fea55faec5689bdff9e0f87a15"],["/tags/质数筛/index.html","0fb51c933df9bd59df60097dee7edf55"],["/tags/软件/index.html","c9b777135a0cc5042eaeae3b3500190a"],["/tags/输出流/index.html","f336f829da02f70f45fb9ea4f4d0f06d"],["/tags/镜像源/index.html","626e8bfd4101abf51b0d9258fb877e05"],["/tags/随机增量法/index.html","62be621f10b8c299d54463c2615a0e10"],["/theme-sakura/index.html","bcb907325e712a58787d322b57e8e648"],["/video/index.html","00b769c4ec7640642c3b84a74a2d7484"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
