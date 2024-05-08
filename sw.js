/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","52abcfc02a040b4b888fbbc27c1bf26e"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","51ba28c10a2a5856c55805d2dc2e131b"],["/2023/02/06/C语言链表/index.html","a0b679e8fdf29ec260d1b3570f230afd"],["/2023/02/06/书籍资源/index.html","1be46a0ca3c2bab463dd16f545b2872f"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","249005d60da3864a0b8d1f1783035628"],["/2023/02/07/为水而水（笑/index.html","ac09c9cacc9d87ecfad8e3999f23cc1e"],["/2023/02/08/洛谷主页源码/index.html","1ac11983b23cbad61f2e104cc229d878"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","7a94ba9bccdde58cb859f4ee18607ed2"],["/2023/03/09/Web前端笔记-Emmet/index.html","b6b412c83fc9e4717a8cfdffae540e00"],["/2023/03/23/gitalk-评论/index.html","2255a6b9eb6af6707608f714fabb5033"],["/2023/04/10/用C语言实现字符串全排列/index.html","1c7e7ad5027740a4e1ff435b5435e27d"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","b45cc2623c75f37e7104f7ecb347dee4"],["/2023/05/15/C语言基础排序-demo/index.html","1612112e068350128c6a3bfeda047954"],["/2023/06/14/闲着没事干/index.html","f66a45aaab6db470afaa4c265aa73b04"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","09369439d1e1eaf5e642161bb8e09cf1"],["/2023/08/01/javase-note/index.html","08d0990dcca7de348f0de93cf7ab3df2"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","84074834b3a66f5eccc253ef6f0de8d3"],["/2023/09/14/vue-pure-admin/index.html","609dce6a9d7436fa2496d792222ef491"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","c87b7d22d95d5ec28d54b5694a5a3162"],["/2023/11/28/C-CPP-the-memset-function/index.html","d5556bc2c97331fe86338c23230c5377"],["/2023/12/13/javaSwing-DynamicClock/index.html","8d3db15e6e42cda09a3040ce4b100957"],["/2024/01/24/builtin-系列函数/index.html","486a23d86e1e7cd4db3d1e5a46515736"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","6f45281aa65328506ee50ba52786c590"],["/2024/02/09/新年快乐/index.html","efdf0f5af69df2d2255a4b80734f78f6"],["/2024/03/26/408-route/index.html","d65d7150f7103eeb3a288296e1fa318f"],["/2024/04/07/转载-线段树专题-xyw813/index.html","48c426c7ded1b164e8f0cafcc6af5d63"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","dec922588121b4e7c16b1ceee95c4d78"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","140c57de175ba9b7944816e88ff95f2b"],["/2024/05/06/cloudflare-display-issue/index.html","2e32a65a356a828f0c8e56d064e9daef"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","a57bd3dfbc2fd92064be72fa134d76fd"],["/archives/2023/02/index.html","02195101a40c10beab26a3fe0de3e254"],["/archives/2023/03/index.html","348cf697eec461d5f978da8c8844f57b"],["/archives/2023/04/index.html","29759d2a4f47c037db3b3550e60e832e"],["/archives/2023/05/index.html","7f07bb78a7473bfc23bc9ef340349025"],["/archives/2023/06/index.html","5cc798557f2c2bce5cfbaa0f9429e5a9"],["/archives/2023/08/index.html","722cf7d0f571c0b8eae0cdd028ef9233"],["/archives/2023/09/index.html","a20877272c7ef34fcd29df618db3a006"],["/archives/2023/10/index.html","dc928cd5e527437912fae8ce3505fb4c"],["/archives/2023/11/index.html","23b1e5198b08950d2d9ec816b5525d1b"],["/archives/2023/12/index.html","5e00c53997852693452ede8dacac81c6"],["/archives/2023/index.html","69069c4bb2c620b53579af3e90d6f192"],["/archives/2023/page/2/index.html","69069c4bb2c620b53579af3e90d6f192"],["/archives/2023/page/3/index.html","69069c4bb2c620b53579af3e90d6f192"],["/archives/2024/01/index.html","0bab793f050491086270d5c2f6ba8098"],["/archives/2024/02/index.html","6f54637a7da1ea2a385572aee9a5fb02"],["/archives/2024/03/index.html","5cc7c7696eaf5be60f0a31126f4be9f7"],["/archives/2024/04/index.html","76ea36d0733bffafc032288c039fabce"],["/archives/2024/05/index.html","cdeeba0fecdf9e17e34b0bee13d3ee58"],["/archives/2024/index.html","6f2028f8abf728473cadd0492f3d08db"],["/archives/index.html","0c92ae55357411296e2549c778971d05"],["/archives/page/2/index.html","0c92ae55357411296e2549c778971d05"],["/archives/page/3/index.html","0c92ae55357411296e2549c778971d05"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","cbf57092e48e9b06b45450b9238d503b"],["/categories/技术/index.html","d4f1dd0bf3a3954c84c33335d2eecf9d"],["/categories/技术/page/2/index.html","4d11728e7de7f6f5a448ca6c3c547364"],["/categories/资源/index.html","041128e451d6ac39f1f28725eea9c5b6"],["/categories/转载/index.html","25cc955d4cd6e262ef35bba9521762a9"],["/categories/随想/index.html","afb5540acf6d6b20123ab9c140fe8077"],["/comment/index.html","78860e0b2b46ff42738b4e49ffa4b3f9"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","5c2015e3a06427128f1094067e0c1de3"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","d3c48fa5a3cc60f7cd93af672c983122"],["/index.html","7d6e042c4fd6b0537ec48c9eb6224b33"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","3efcbc522608c3fa190168d02325bbcd"],["/links/index.html","2db61a2e19ddd6aa92d1c847198e625a"],["/music/index.html","b6692ef039ca7e5e61d35b05153e6945"],["/page/2/index.html","0e33ed07424d37241541070b50eb4584"],["/page/3/index.html","50a23b1fb857daa59b4f97f4aeaf961a"],["/rss/index.html","90552a11acec16a6f9808bae25c19c4e"],["/sw-register.js","184462c1e13a5a49e08f0bb832ff5583"],["/tags/408/index.html","fb71e2a3500a1c42dadc8f5acd3c2154"],["/tags/Adobe/index.html","5f25c2ccfc14f8793ef4e52ede851f4c"],["/tags/C-C/index.html","bdf41e4b4fd12cb0aea99f573a9248c7"],["/tags/C/index.html","a40504eda1b613fd934b4b3a37dabaec"],["/tags/CPP/index.html","3a4e87902f3259639016d674022035c5"],["/tags/C语言/index.html","ee966c654557119a35d69235e6b81d9d"],["/tags/Java/index.html","db228d1650e66407f759b36ffa7a5acd"],["/tags/LeetCode/index.html","27f6889dd8eba904062bbc13f2d5f7cb"],["/tags/MSYS2/index.html","b2331c8865b648d9665bca4374b65261"],["/tags/Note/index.html","fc34136818a1f72c1534867bd9cedf86"],["/tags/PS/index.html","51aa799f23f0f6db2ee30bd3f0ab0459"],["/tags/Rocket-Loader/index.html","951cc9970a2653b5cc02068db7cd2a3a"],["/tags/Scoop/index.html","e865dc52a9b06d44b214aeb66e539dd7"],["/tags/Software/index.html","de1b9c55a9c1f8e6e6446b7520e2d64c"],["/tags/Swing/index.html","f2fa492be2f271f16ab27af46e00c917"],["/tags/VSCode/index.html","b579e580a6dff1c779d06a8b31bb4e6c"],["/tags/blog/index.html","90b3ca516807017171dc9f3cae85fd1e"],["/tags/builtin/index.html","e3473ecdefa80cc6384684dcdec11b6a"],["/tags/cloudflare/index.html","2928f5619696460da91efb3c4f248cb9"],["/tags/index.html","d2efa54196a33324a2e3158eb82fe3ab"],["/tags/vue/index.html","29ff688fedb314fc1c6c840152728922"],["/tags/web/index.html","c76d73e9ce2c2d95fa2670c1f2e950ab"],["/tags/划水/index.html","e528aec17896f0a23a5c93738535fd9c"],["/tags/包管理器/index.html","015cc356d73860db92460755615d01be"],["/tags/悦读/index.html","0d24738dfe2d2b14d342bdf32ca26153"],["/tags/操作系统/index.html","b3d6b90e9eeeffeb20447878d427da36"],["/tags/数据结构/index.html","1a465ed4fa9e8c79f736657c6f853ab2"],["/tags/数据结构与算法/index.html","b0c2f8421b641d8a75c0c6d7a05fb610"],["/tags/新年/index.html","28af1dfbc489b366a8a92ad607bd5803"],["/tags/杂谈/index.html","25bfc62fec519c413cf1d8b1289d3bed"],["/tags/深搜/index.html","714e23372f2725201196ed39a10c5c88"],["/tags/笔记/index.html","bc9b8831be46e49582ecea145d811c4b"],["/tags/算法/index.html","d9138140768c5226bfc1b1abaa336681"],["/tags/线段树/index.html","45442d0c2f68d633773c7394abd8dd5d"],["/tags/萌新/index.html","068dac455a87170037888673bc660a27"],["/tags/计算机组成原理/index.html","75fe1c773d0b01beced7ecbfc181280b"],["/tags/计算机网络/index.html","c2a51775a7df53345859d4280a02ccb2"],["/tags/质数筛/index.html","679be929a4a5e22cdd0e401ba4233e19"],["/tags/软件/index.html","2fd81eb785b1f82a0d7d047f95ec404b"],["/theme-sakura/index.html","af4ef73c14c6785c0ccc9fbb997094a0"],["/video/index.html","e08b05edb868726a67ab7ef33634e06e"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
