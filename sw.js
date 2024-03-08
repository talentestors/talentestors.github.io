/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","4a6509596586ecdb50bf39045b137b95"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","07bd8215cd2cc4127f91f39ad6afb7cf"],["/2023/02/06/C语言链表/index.html","24dcbc6877946d2d215bc79d9354141b"],["/2023/02/06/书籍资源/index.html","26fca073864174ab1716ef221f018f84"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","8fa7ab8d819aec86ac09d8fd38e7c784"],["/2023/02/07/为水而水（笑/index.html","7ffdf12a893cf807c21b63ccf9bd1457"],["/2023/02/08/洛谷主页源码/index.html","be77381aa0f7dcebfaf96da852c6a93b"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","e3ee9d1db8229d1b27e769907db9191e"],["/2023/03/09/Web前端笔记-Emmet/index.html","04e9f29b6af97632c217a7ae09b8c605"],["/2023/03/23/gitalk-评论/index.html","c2d4a46030ec6c0b0e1a0f23d31d949f"],["/2023/04/10/用C语言实现字符串全排列/index.html","75905b8ef62ddc975814fedeabdcf8d9"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","417651cac52d2485bd09a07d2c305826"],["/2023/05/15/C语言基础排序-demo/index.html","0c29056b1eaf8670c884e9a40c0a6cf6"],["/2023/06/14/闲着没事干/index.html","dfbe1373a3e682f746522f363b8f1146"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","58f5afa10fd094c0410d2256211f5dad"],["/2023/08/01/javase-note/index.html","a99df5bcb0e8e34e34492c21e65bec9f"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","71f964bf099f4a0c678f3a02278f3eff"],["/2023/09/14/vue-pure-admin/index.html","c6405f4817db57da0ce3e299e664f5b7"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","8693ef85fcdbdd2026a32eda7e9e5106"],["/2023/11/28/C-CPP-the-memset-function/index.html","523b36a0718e63ce4346582dc9085136"],["/2023/12/13/javaSwing-DynamicClock/index.html","5a3e822c27088a37127a6ea33cdc9ddd"],["/2024/01/24/builtin-系列函数/index.html","54b56a75af5c580a558e560975e0f962"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","f983cd50947ef9c0d396706ff5f7b841"],["/2024/02/09/新年快乐/index.html","03f13c37aa76ba04b80b506ccf5bf1c9"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","694f8e0a8acaaf784caacd53bfc605ec"],["/archives/2023/02/index.html","b490c309686122707811a8f9ef941d37"],["/archives/2023/03/index.html","85d0952f022246820597f92c0fe8feaf"],["/archives/2023/04/index.html","d63035061ce3af6b1150a62cf084fd02"],["/archives/2023/05/index.html","b77777b1551cad05720fbc4b479cefcd"],["/archives/2023/06/index.html","9707c4e8eea2db4b8c2cef9f97650459"],["/archives/2023/08/index.html","12aa1020391c9f1b7b5dc5f2f2053747"],["/archives/2023/09/index.html","b73ccb69c67bd4bd761d708f22126df6"],["/archives/2023/10/index.html","0e98f46b6b26287dd2a42d4f298768e2"],["/archives/2023/11/index.html","f7e7e7be7756a38d95505808ac17e45e"],["/archives/2023/12/index.html","a2e179fd335efe647568b5b36a11fdf1"],["/archives/2023/index.html","1144286b2455a33f30b67c800570985c"],["/archives/2023/page/2/index.html","1144286b2455a33f30b67c800570985c"],["/archives/2023/page/3/index.html","1144286b2455a33f30b67c800570985c"],["/archives/2024/01/index.html","97197d5275dcf905a4a88ecd5db5a139"],["/archives/2024/02/index.html","e6154d9dbc65dd844c9fe53b53ac0d98"],["/archives/2024/index.html","4560692d609832f16504c6c76746d3fb"],["/archives/index.html","020295d329dadbb3943f568b249e782c"],["/archives/page/2/index.html","020295d329dadbb3943f568b249e782c"],["/archives/page/3/index.html","020295d329dadbb3943f568b249e782c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","0ffc492a8dfd15ddf63d2e684ffbf9ea"],["/categories/技术/index.html","ee477a7edacb20c49be8c6099bdf7dd4"],["/categories/技术/page/2/index.html","cba53ec1bc9cf48e41c010083a5e1803"],["/categories/资源/index.html","21b9743eefcbb853f29b37b93e29e481"],["/categories/转载/index.html","ce1bc05a1226eb175356f0aa33ad673d"],["/categories/随想/index.html","bfb34da44085686e4781555b8620ee3d"],["/comment/index.html","df47850e1ba1b4b93e3d811545e006b7"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/donate.css","770ae16da2c6862067a16b1e46e89ac5"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","1437630427335f998575e14d9b416e81"],["/css/style.css","b7e530701025dc75e3f82211e79f31bb"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","44ea75f9dd4f784521785c0c93563abf"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","2193c27c09519156a048a84bd28db6ea"],["/index.html","384657aa274d4327bd3e4feaa62b1561"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","098fb3d9628932476b8b693ed05022b9"],["/js/hititle.js","076e0f80f4e17aebca6839cfe1c1562b"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","e7e7f7ead37482bd1b5310fa7eab5c80"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","35a970e7e493d1eb58a707654444d0a8"],["/links/index.html","7f59421a57dab9a496e483150696fc55"],["/music/index.html","049a95cdd8527b868262198fcb8fc666"],["/page/2/index.html","1b3b88d354625868fa0f5fc1ce1e0307"],["/page/3/index.html","9039b1e298b2726d5f0b5f2a0f8cda04"],["/rss/index.html","55430604c6d189d47e94d8c2b2dc75f9"],["/sw-register.js","43d61d00e8749a657053c3f6c6757a52"],["/tags/C-C/index.html","57e5b946fcdef3e3245c920ef53b45fc"],["/tags/C/index.html","176df7465b4610806e2e14c5a1408a7d"],["/tags/CPP/index.html","bc88c514cae5dc75a51f92abb389e105"],["/tags/C语言/index.html","976d29dd251ad00e0e9bf07b48f09928"],["/tags/Java/index.html","25a470c8809cc4002848e7a7086001ea"],["/tags/LeetCode/index.html","91b27a5c4cacab6025960f61178ae045"],["/tags/MSYS2/index.html","a91fa8fa19782bea73ecd25fc13b79c8"],["/tags/Note/index.html","263223d08a6bf388a74bd00d71f98aac"],["/tags/Scoop/index.html","436bb4ffa180607df5d57d22568213ff"],["/tags/Swing/index.html","4ded2b16d188e309f832deb33b1a3376"],["/tags/VSCode/index.html","5c7f1a70bf1330d6850f663a459b3249"],["/tags/Web/index.html","46a859d9aa7780aec3e1a7e8972a9e19"],["/tags/blog/index.html","65917a4a69de86b08a404bd11451759d"],["/tags/builtin/index.html","26b55f8ce31b4f3965744d00abf29690"],["/tags/index.html","c7d6b97cbdfcd7f1174a658aba93aa92"],["/tags/vue/index.html","cbc5b42342bbc3aae6b713610b13c680"],["/tags/划水/index.html","5d67013efa27bb42894a65a15b84647f"],["/tags/包管理器/index.html","df88203b6144fad38aad629359fe2ed3"],["/tags/悦读/index.html","5a63e9ae5f7ce2efdd9afd73d4272018"],["/tags/操作系统/index.html","85458f872bc5b4dcda4796cc8165a952"],["/tags/数据结构与算法/index.html","014fcaa2ebb29fa2831d332c2b04b5c6"],["/tags/新年/index.html","7df2c471ddc2b394b75675bd65efb797"],["/tags/杂谈/index.html","6c328093418a3907d890ddd63cc5efa3"],["/tags/深搜/index.html","c4cbf30721642707319265267a883676"],["/tags/笔记/index.html","b9f554010a50b1d75310e12b88135198"],["/tags/萌新/index.html","87ff06e3feb64e6d1a06438f9718e5ae"],["/tags/质数筛/index.html","67294f20c03c19078481509cda582440"],["/tags/软件/index.html","a5f36afed77ec05fb5a9812b3ac392dd"],["/theme-sakura/index.html","2b4cc0f4a7254c4302fe02b6828dab92"],["/video/index.html","b8ad49263d3b1a1909b0ea51bbd6fdf7"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
