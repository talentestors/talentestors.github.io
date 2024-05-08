/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","f673fe1e87304b3f3866a30ec202d1cf"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","8beec0aea4f0d50c2e9037416f6ca172"],["/2023/02/06/C语言链表/index.html","b0f1c1a39b8dfa1ff77a8f4399e53194"],["/2023/02/06/书籍资源/index.html","87675da025ccafc4f0b7a0e860054be3"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","35ae6102c914e9ce3693c865e5dc5919"],["/2023/02/07/为水而水（笑/index.html","7deb71cb76816a761af03b41f0768ca2"],["/2023/02/08/洛谷主页源码/index.html","973b326ea1a4d65ee67779e409770ea1"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","a148530955f502addfa4364760cca7ed"],["/2023/03/09/Web前端笔记-Emmet/index.html","80c6c16776632a097a2735320490460e"],["/2023/03/23/gitalk-评论/index.html","00c85a4ffb44394bc9bebf87b6849293"],["/2023/04/10/用C语言实现字符串全排列/index.html","0354aad4aa340c280e08f77a1c4086dd"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","2abfa22a51b0787093dd3bea5e6dc4be"],["/2023/05/15/C语言基础排序-demo/index.html","db9f859e09f394f30dc100c286dff995"],["/2023/06/14/闲着没事干/index.html","2dd1f027130251ae0f4db256193b4cad"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","4c114cff08ac8e763a2201d8190e77d1"],["/2023/08/01/javase-note/index.html","1c1f9f0f0f10743aa4eb8bfc78c7baed"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","7d57bf9ce017e43ed72e8eebc94af1f1"],["/2023/09/14/vue-pure-admin/index.html","c0b9f34caf8f12d37079e814a4594058"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","90ff84cac805279321e34eb8b96ca624"],["/2023/11/28/C-CPP-the-memset-function/index.html","6ca5f962e8b7ebab02ea63a83284ceb7"],["/2023/12/13/javaSwing-DynamicClock/index.html","ac7ffb044b7f554646e4e289a3487689"],["/2024/01/24/builtin-系列函数/index.html","5e2ad1a1ee6fc2f4d0fad405edba0d2f"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","8d1d8e1328962e599330003bcc096c08"],["/2024/02/09/新年快乐/index.html","8ec265c1b1d8e130a5030a26544458d4"],["/2024/03/26/408-route/index.html","08dfdd09edf9cf3c5b09ab2847eb09c7"],["/2024/04/07/转载-线段树专题-xyw813/index.html","eddb79b4968c81cae9b0bf4cd9d9c29b"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","59867142e5951d13fcc6f6b490e55397"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","55491b557b72720a68cc10a613ea5ab4"],["/2024/05/06/cloudflare-display-issue/index.html","13bb61b7a18fd79cee1c7c3db88c593b"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","f097a90c60b3cdf4cac36599240a3943"],["/archives/2023/02/index.html","23bacb9f6bb875b189100a09012aa93e"],["/archives/2023/03/index.html","fd31cdf1c418d38779ec8c0b0bf55055"],["/archives/2023/04/index.html","694580fbf5fa8884ccf54c0d4d22f384"],["/archives/2023/05/index.html","36af5ed21c1da64d357c4c3d3a17f3d9"],["/archives/2023/06/index.html","82cfe86642ae2c399c9e9dc6c99a0235"],["/archives/2023/08/index.html","5fa84c28c2e53b8ed151624ec8806679"],["/archives/2023/09/index.html","bca7040cb836a28614ad76dfea249600"],["/archives/2023/10/index.html","6d6ffbf684bdd3f410e1fecea44399a9"],["/archives/2023/11/index.html","acfc9b560faa9222d570c8c0a47a875c"],["/archives/2023/12/index.html","2098e2f172dc7c27cd29659320b0d68e"],["/archives/2023/index.html","7534d22e8c60c148ee1923aeeec1c97a"],["/archives/2023/page/2/index.html","7534d22e8c60c148ee1923aeeec1c97a"],["/archives/2023/page/3/index.html","7534d22e8c60c148ee1923aeeec1c97a"],["/archives/2024/01/index.html","5cb2fb3f56202f460a78a076658d5dcc"],["/archives/2024/02/index.html","c9f3dcdf1a40be14f62c017a023a6960"],["/archives/2024/03/index.html","089c33cc2ef1dd0820fae1d4bcfe243e"],["/archives/2024/04/index.html","e61f11c61980ea60cc554df0016f504d"],["/archives/2024/05/index.html","3d7c24581ff91b293c4ef7b3c861b923"],["/archives/2024/index.html","df85223d8d73c17d5141fe66ec04a26e"],["/archives/index.html","98491ac8f09062fff063c35354f03ce7"],["/archives/page/2/index.html","98491ac8f09062fff063c35354f03ce7"],["/archives/page/3/index.html","98491ac8f09062fff063c35354f03ce7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","72024c02af20701607c786cb359140e2"],["/categories/技术/index.html","ff19e533e104726154d58dc389b43c63"],["/categories/技术/page/2/index.html","5b24e15ef25d44c5af611bc178421f9d"],["/categories/资源/index.html","e7941fae394ef2d35ecfbe3a238e5d04"],["/categories/转载/index.html","77387d31cee8c39bb706de91a4f10d84"],["/categories/随想/index.html","4ddcfc750c0a9d9b9ec1f9968ebdb022"],["/comment/index.html","fbdbd8d957178884f4315a8b3dcbf03a"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d92341cc69d90c5325ded1718ae9e7fa"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","7b5ddf6fa300621a79a6a462e6435d11"],["/index.html","ed22af7d72e3ecc42034f56366cca43c"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","47cdf1a00850dd02f44d287f3369e64e"],["/links/index.html","15611b05f6298b31aa90ca90a0dcf3aa"],["/music/index.html","f379481add2c245ff3849156199c2092"],["/page/2/index.html","b2a6b75fe9b9923f59187bcf51ce8da1"],["/page/3/index.html","d0ae4e91c5619a9524d85c6e0286f888"],["/rss/index.html","f931f7a7703cbd1c1188f655b666f2c7"],["/sw-register.js","5230dce043a3850db68787f49d023546"],["/tags/408/index.html","6f290ac47036fdb981845a5e32c34593"],["/tags/Adobe/index.html","e0dce1ac181e4a774f35830d976a8514"],["/tags/C-C/index.html","6b61f270b7b0dde0883603e01591eac7"],["/tags/C/index.html","4c69cb1c896898bed6e9fef0aa05dd4b"],["/tags/CPP/index.html","eb93b249ba0891724dab1ab258d8c362"],["/tags/C语言/index.html","7f373f6976ad52ae7dcc9195681a8455"],["/tags/Java/index.html","25f728f2fb8fce877a3923f1c1d21849"],["/tags/LeetCode/index.html","90c437e4003d706388799fe0f93c44d8"],["/tags/MSYS2/index.html","c06e6c562022329ff091407f51bcfe38"],["/tags/Note/index.html","6c256bb321286d81922e69c54e8adf51"],["/tags/PS/index.html","fc7eed74cdf028839f419be04061788d"],["/tags/Rocket-Loader/index.html","a852d67f51438d11b0f88fd730ffc9b2"],["/tags/Scoop/index.html","c9c37dd24b0bde7fee1dfdd5fa575066"],["/tags/Software/index.html","9425647873fe9274dbdd384e99c6e5d7"],["/tags/Swing/index.html","62e523e883032c155c035f2cc9fe0597"],["/tags/VSCode/index.html","6ecb3c3b2b27a6d6a371993902683fb7"],["/tags/Web/index.html","3e6b76c14008370c5304443fe676d453"],["/tags/blog/index.html","de75667043ff26b9b7f71ab0d5a957f6"],["/tags/builtin/index.html","942b71f562068c3881458e3fddec88db"],["/tags/cloudflare/index.html","891d7deb639249cf988cb86f64389bea"],["/tags/index.html","c83786739a12532bf49bc056c9c7da4f"],["/tags/vue/index.html","e9dbf643160c2363f45cc3beece9feae"],["/tags/划水/index.html","bce1fc13a439026a55466f43e4b1d902"],["/tags/包管理器/index.html","85ce3dea70733ac28a52ef3895ee5da3"],["/tags/悦读/index.html","d0e648634e4deec24c706c5664a241ff"],["/tags/操作系统/index.html","d60e56fae1f9d64698f3cf269cdb2b42"],["/tags/数据结构/index.html","ce0f2054bcd35d6c795192aae995900b"],["/tags/数据结构与算法/index.html","19d0038f8f9a384e09d4d3903fd06198"],["/tags/新年/index.html","c1fcafcf646981f39794eca8d8a01729"],["/tags/杂谈/index.html","ef45869267724835a26fd35ffd290d54"],["/tags/深搜/index.html","ab042870cc579f05e9c4801393f5cfdd"],["/tags/笔记/index.html","1fd4d6e603da56d611df173f279ea3ed"],["/tags/算法/index.html","5811baede30bdbbed8a3168a74f4e042"],["/tags/线段树/index.html","93f8f80b3335736f4e75adcb3f0c5fcf"],["/tags/萌新/index.html","d28e20665a02ceed8558e7a3f87c4e22"],["/tags/计算机组成原理/index.html","6eaaaf4f5d336cee3af4abf1bc66de43"],["/tags/计算机网络/index.html","feae4e5859ea27da3a7a943d7626d3ca"],["/tags/质数筛/index.html","0fb51c933df9bd59df60097dee7edf55"],["/tags/软件/index.html","aa08be8e4e80b4496ed897c1e796a49f"],["/theme-sakura/index.html","bcb907325e712a58787d322b57e8e648"],["/video/index.html","00b769c4ec7640642c3b84a74a2d7484"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
