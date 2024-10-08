/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","6516113feeff954cc749853e5553d5d4"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","14da4dc3200359ee738b2885fa3c72a6"],["/2023/02/06/C语言链表/index.html","a18f715584297eb0f5a46ea9891204ba"],["/2023/02/06/书籍资源/index.html","a03e3d52247afad62b3decd74d04a664"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","da746378243bb295c74d85e973bb6d9a"],["/2023/02/07/为水而水（笑/index.html","0fe1b1cd2d7a5ecaf4df21df374187c0"],["/2023/02/08/洛谷主页源码/index.html","1f47f92e7f88ed6d0d4eb8d61cf39255"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","feae8ea266e5517b57e6809f264a743a"],["/2023/03/09/Web前端笔记-Emmet/index.html","012b64d5edd99e801cbbfc354c0be870"],["/2023/03/23/gitalk-评论/index.html","d7538ced78667699c33c8f007122821d"],["/2023/04/10/用C语言实现字符串全排列/index.html","1b8f3d5820eea1efad86ace9f703470a"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","f1ed9d8be2a11d079bfe476049df9b44"],["/2023/05/15/C语言基础排序-demo/index.html","858e829dbaafb3d3e7744bef1857ef6b"],["/2023/06/14/闲着没事干/index.html","9f2f9fb49a4d2c8cde02096bb7dc6c16"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","0708f04cade20fce543e7abaf477fadb"],["/2023/08/01/javase-note/index.html","e6e95bb850093928f47864e2feb46f38"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","daa47f0575217c88bb409b7eb370993b"],["/2023/09/14/vue-pure-admin/index.html","9cb1f21fd00e268a0d3c29efe6578032"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","b3b83c5f8aa4218d96b7db3c8450a4ec"],["/2023/11/28/C-CPP-the-memset-function/index.html","23c83bd18aef48aad6353ddf927ccc5a"],["/2023/12/13/javaSwing-DynamicClock/index.html","4f2e90f7b1219c12651bee361e42e4b4"],["/2024/01/24/builtin-系列函数/index.html","553e71836ae3317548e139e925fca093"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","b80f883b85cac70ddad627bc442a5465"],["/2024/02/09/新年快乐/index.html","c975086e69da8b7c935ada2a8412473d"],["/2024/03/26/408-route/index.html","047354db8c7e9c6e5436aed781b807dc"],["/2024/04/07/转载-线段树专题-xyw813/index.html","861509e6c18a301e51f8be89107b1a2c"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","16108ac5fcc3a58b9d531d7ac62c755a"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","6db0e1608ef6042be1628f95d3712e27"],["/2024/05/06/cloudflare-display-issue/index.html","b43ea7ec25817fb6586822f9191fb323"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","b5b54fbaff7a92fb4bd8c4baf9e0685a"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","c633f6679887ba5fc791623cac79dca6"],["/2024/06/25/open-source-LinuxMirrors/index.html","99be285398f92a3e110835f90b5c00c6"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","c4bf99ee41c757be824fccec212c9527"],["/2024/10/08/常用STL算法库/index.html","71c730aeee3cec8638a54d551c58b18e"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","a57bd3dfbc2fd92064be72fa134d76fd"],["/archives/2023/02/index.html","38cd9b9236239cdddebcdac0848dc8a7"],["/archives/2023/03/index.html","a13bcdc80e83c96dae29fbcd70a7ce4e"],["/archives/2023/04/index.html","12de3183f2f1647cd06793b2b9fff989"],["/archives/2023/05/index.html","1bdf87c109de91267529592749d0915d"],["/archives/2023/06/index.html","17881c67222ab06a0936ccaee3ead637"],["/archives/2023/08/index.html","a78ee8311057f68b16cc236189c86430"],["/archives/2023/09/index.html","8970849df1ba1d5441b19acec7ed9e2a"],["/archives/2023/10/index.html","647b01150317315dd26a42fa09ccd872"],["/archives/2023/11/index.html","3e76a08a7fd66d2e054e90c78b4c6b96"],["/archives/2023/12/index.html","9c7d088c8e0e41802e417e3bbdbde22c"],["/archives/2023/index.html","a833a94d72b8755c96bb79f2f11cf644"],["/archives/2023/page/2/index.html","a833a94d72b8755c96bb79f2f11cf644"],["/archives/2023/page/3/index.html","a833a94d72b8755c96bb79f2f11cf644"],["/archives/2024/01/index.html","f31e52b0e37cf12e93dc3de966723cb3"],["/archives/2024/02/index.html","fa519849614e059530bd67e0ab9a6c2c"],["/archives/2024/03/index.html","8988e6394a0a08ce8812048353fba732"],["/archives/2024/04/index.html","b175a1e0839447fc33becb04b098e94e"],["/archives/2024/05/index.html","119c20082aafb79b3f661e6089bb8f64"],["/archives/2024/06/index.html","9659cd0580dfbd237e4d6c42179e8a4b"],["/archives/2024/09/index.html","380c0368f393a0c55ab586796dfc6d69"],["/archives/2024/10/index.html","5a98dffd0060ace98c45dc8a51cebd0a"],["/archives/2024/index.html","b51017efb0f54a09d50e2365879632c2"],["/archives/2024/page/2/index.html","b51017efb0f54a09d50e2365879632c2"],["/archives/index.html","4ce3e8604008a7f8734e3839a27a8506"],["/archives/page/2/index.html","4ce3e8604008a7f8734e3839a27a8506"],["/archives/page/3/index.html","4ce3e8604008a7f8734e3839a27a8506"],["/archives/page/4/index.html","4ce3e8604008a7f8734e3839a27a8506"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","d07168c5438d11f507a5ba24ec55f393"],["/categories/技术/index.html","4045cfc724c333d5b482af900d781578"],["/categories/技术/page/2/index.html","4c82a5c06402cbecdaeeb0c552a41401"],["/categories/技术/page/3/index.html","5cc413d0d662b996b35780085fa12e79"],["/categories/资源/index.html","a0760dff32cc4332ad32ed89d373e4aa"],["/categories/转载/index.html","428bc2d562d812b1f94f209f6e8584bb"],["/categories/随想/index.html","88ddd13ec5c33a961d232935f7933c42"],["/comment/index.html","28ab1fe7c344bc9136e892001d8f63f4"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","5c2015e3a06427128f1094067e0c1de3"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","61cf4a95d276d816d1cc4becb670d97e"],["/index.html","b227cee4ce7650cd6b9c80beaadd60f8"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","a46059f4d1f6caf4ba107f856f6a7c1e"],["/links/index.html","3dbb172e94923bb62ccd06c07021d855"],["/music/index.html","b6692ef039ca7e5e61d35b05153e6945"],["/page/2/index.html","c702d6bcd8196d46eed0e1d43c4e214c"],["/page/3/index.html","1a00b9172843ca8648c562a842696f11"],["/page/4/index.html","c0f85f7e14ae8888e214901a0e8934e7"],["/rss/index.html","4759df506c274a0663150c16db054c7d"],["/sw-register.js","3db3830fc2bf239d3cf44eee75cd749c"],["/tags/408/index.html","499dedce5fb7665debb1e023b296dc3c"],["/tags/Adobe/index.html","5f25c2ccfc14f8793ef4e52ede851f4c"],["/tags/C-C/index.html","ae617ade78e137cc4d4c0007d9345090"],["/tags/C/index.html","a40504eda1b613fd934b4b3a37dabaec"],["/tags/CPP/index.html","422ee6d508d0492425f587a28069ef95"],["/tags/CSS/index.html","dbc721693d6d1d35a1b01142e1d6fe79"],["/tags/Color/index.html","0dbb91c833663602b530c5b2c5f8b5d0"],["/tags/C语言/index.html","1c1cc28a52cbd8641de9415fb31c1ae6"],["/tags/Dinic/index.html","796b3d88e72359b9255f4ec7b70f4a85"],["/tags/Java/index.html","9f9aa09ce411236a7cae24b288601608"],["/tags/JavaScript/index.html","a63d25cc47bfd2e13911b5dfaf1eb4eb"],["/tags/LeetCode/index.html","27f6889dd8eba904062bbc13f2d5f7cb"],["/tags/Linux/index.html","180d8b5e90bf8dee83accfc853d0602b"],["/tags/MSYS2/index.html","12596e01871ee99d14ffe9cf2ec0dcc7"],["/tags/Note/index.html","423372549a55f9aab569eb67500a3128"],["/tags/PS/index.html","51aa799f23f0f6db2ee30bd3f0ab0459"],["/tags/Rocket-Loader/index.html","0c47b5cc87523d784d4b148dca2c75e1"],["/tags/STL/index.html","ff04801cf32cfce082148e63a88f94c7"],["/tags/Scoop/index.html","24eef86564b3bf34bb2790763c3a3881"],["/tags/Software/index.html","de1b9c55a9c1f8e6e6446b7520e2d64c"],["/tags/Swing/index.html","f2fa492be2f271f16ab27af46e00c917"],["/tags/VSCode/index.html","f3f79ce81f27cf5dc8974450ccb66d20"],["/tags/blog/index.html","547e7773c789db4364ddca214389c963"],["/tags/builtin/index.html","9139974c44ec350f9f40d4f652afc6c3"],["/tags/cloudflare/index.html","1d9401e9f31a68187a5cafa78e42da28"],["/tags/index.html","b462dda7ea4288d62b43ca50e50f6f06"],["/tags/tools/index.html","9e7c0197679fa795bd869d820aef3b4b"],["/tags/vue/index.html","29ff688fedb314fc1c6c840152728922"],["/tags/web/index.html","e75ca3f9874f0eb0fe5eaa9503dd1eda"],["/tags/二分套二分/index.html","722f996281e8c123ce1286e0974b8a06"],["/tags/划水/index.html","768a9ce5f38247a6935b6d14489e709b"],["/tags/包管理器/index.html","3ceea1d5bb7106e23ebf222e5d99a359"],["/tags/图论/index.html","b997c74e72fd2b1be52a37b5535cdc09"],["/tags/悦读/index.html","0d24738dfe2d2b14d342bdf32ca26153"],["/tags/操作系统/index.html","c5eb447bb2f2f3e38447b13955128db1"],["/tags/数据结构/index.html","85f500826456bbe781ee94be6f06a783"],["/tags/数据结构与算法/index.html","b0c2f8421b641d8a75c0c6d7a05fb610"],["/tags/新年/index.html","3dfc5250094c394b4e66f0a2637302c1"],["/tags/杂谈/index.html","25bfc62fec519c413cf1d8b1289d3bed"],["/tags/深搜/index.html","714e23372f2725201196ed39a10c5c88"],["/tags/笔记/index.html","2e0d05e48f12f4e6aac8596150e050ff"],["/tags/算法/index.html","0943ddd1d9d10db3afdc1658bebed3b1"],["/tags/线段树/index.html","45442d0c2f68d633773c7394abd8dd5d"],["/tags/网络流/index.html","2e2fcb72fd398b5da9a56a6608af68ca"],["/tags/萌新/index.html","d94cf35f8f0901a702636ee29c0f7e0a"],["/tags/计算几何/index.html","6a43742f0dd207da912c7cd83ec07829"],["/tags/计算机组成原理/index.html","de261bd897a9293cea65abc3e07a42e2"],["/tags/计算机网络/index.html","dfbcdb41bf687a3cad0951234f2e112a"],["/tags/质数筛/index.html","679be929a4a5e22cdd0e401ba4233e19"],["/tags/软件/index.html","e2403f9febc402a0cc0bcb243fee6452"],["/tags/镜像源/index.html","1f351a1096c524ed8bc38b8425b2d1b8"],["/tags/随机增量法/index.html","406f6bcdf66e32301f967a3d6669c352"],["/theme-sakura/index.html","af4ef73c14c6785c0ccc9fbb997094a0"],["/video/index.html","e08b05edb868726a67ab7ef33634e06e"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
