/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","dedca548437c84aad9a04bce2febb038"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","0f083a6eadda19df67712cce815a7380"],["/2023/02/06/C语言链表/index.html","4f0e87b985220dc5624e005819a6e814"],["/2023/02/06/书籍资源/index.html","1664a2dba9bfa184b628744b20918b9f"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","5d9ca61eff6ddf4b00a918b485cbf383"],["/2023/02/07/为水而水（笑/index.html","badb1666b08310dd02a7fb4fcfbee802"],["/2023/02/08/洛谷主页源码/index.html","9e345a71dc3db5b73eb66106b98d5e36"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","db7e345a5998fd005dddc2bd716718cc"],["/2023/03/09/Web前端笔记-Emmet/index.html","4d4559c2b4490c51717dc34051fe0ec0"],["/2023/03/23/gitalk-评论/index.html","bc71891a543e02fd4e886a0f13c6a446"],["/2023/04/10/用C语言实现字符串全排列/index.html","37e448ee58a4c0a1dee848ea83b16a26"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","9282bb4fbd06b14a287e736748b363b5"],["/2023/05/15/C语言基础排序-demo/index.html","4d71869a18190242b25661fc9a688a67"],["/2023/06/14/闲着没事干/index.html","324d451a3a8546a2cb19a7270a2a616b"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","cd143da780e4b46f0edc9f9f8457cc3f"],["/2023/08/01/javase-note/index.html","d51702f26af471c6913294a6e5732a92"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","eba88d80386269db0ce007fdab5dda51"],["/2023/09/14/vue-pure-admin/index.html","d2da30ee696f88d86f32a98691cc279a"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","905ba396ceff82958f3ef56b8a0ece23"],["/2023/11/28/C-CPP-the-memset-function/index.html","ccc620cc5bde5edcf63db0c759431852"],["/2023/12/13/javaSwing-DynamicClock/index.html","615b3d8743af637d51c45ba36af4c7e6"],["/2024/01/24/builtin-系列函数/index.html","7e33b4e4ce86688bd8232f866c9cd18b"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","f16c3fc91cb2d3e8c2191963242e2f3b"],["/2024/02/09/新年快乐/index.html","94a4a2b72f76fe278a0d1088e299462b"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","3a617676ab786cf901b9694cc683213b"],["/archives/2023/02/index.html","86cd958133489315b40bf4cbc9423937"],["/archives/2023/03/index.html","4f6425b71a8f33eddf159a99efac0dd5"],["/archives/2023/04/index.html","b5cf9179bfad737a9ae18d8cd88da036"],["/archives/2023/05/index.html","e042a72159c6414214f0648c8bff20d6"],["/archives/2023/06/index.html","2613747bc295df83e066ac54c15675fb"],["/archives/2023/08/index.html","3540dbed7ed53e552692736ab5c743e0"],["/archives/2023/09/index.html","3c736d479682262e6e02ed4cea704d7d"],["/archives/2023/10/index.html","078a1cedfb0deb2f392f5a8b0aba66ed"],["/archives/2023/11/index.html","710689bd64f0a05d74cdc5b2450f2a7c"],["/archives/2023/12/index.html","484445c09cd5f513116cab01f6ed2173"],["/archives/2023/index.html","22312792fbb0b5206af9980a4e49f139"],["/archives/2023/page/2/index.html","22312792fbb0b5206af9980a4e49f139"],["/archives/2023/page/3/index.html","22312792fbb0b5206af9980a4e49f139"],["/archives/2024/01/index.html","ce76d90a174140c40ebcc1c657c6efc3"],["/archives/2024/02/index.html","f49b9609a7cd20d1f7171b3721bc8e5c"],["/archives/2024/index.html","6c9dd17fea61356786d0acebd2a2728e"],["/archives/index.html","713e1d67f400e5e22432eea13ddd1eae"],["/archives/page/2/index.html","713e1d67f400e5e22432eea13ddd1eae"],["/archives/page/3/index.html","713e1d67f400e5e22432eea13ddd1eae"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","6eb710e152c4f45f1e95f8e96e73369c"],["/categories/技术/index.html","779398b921e66fd77391ba2bcc8691c6"],["/categories/技术/page/2/index.html","d53dc4a6784f3d60466e6e82077fbc9e"],["/categories/资源/index.html","6574bd5a872190fd856b4ec30708eaae"],["/categories/转载/index.html","d1123479f8f0203329cc22ef2fa87246"],["/categories/随想/index.html","e8356dc4952bcf59602494193b286020"],["/comment/index.html","c6bd1fb1398fdbdc8e2b6ce33452ccde"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/donate.css","770ae16da2c6862067a16b1e46e89ac5"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","1437630427335f998575e14d9b416e81"],["/css/style.css","b7e530701025dc75e3f82211e79f31bb"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","e8a7630e9b1a6177d6c19f434b171009"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","bd102c630f4cec9df9ff0a9e6cf7015e"],["/index.html","51fc6b6231ddbf3d92bf63e9ce3f8669"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","098fb3d9628932476b8b693ed05022b9"],["/js/hititle.js","076e0f80f4e17aebca6839cfe1c1562b"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","e7e7f7ead37482bd1b5310fa7eab5c80"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","1ad3e6ae449ae3cbd6a656bc8bf12536"],["/links/index.html","f1b012a505395e47a18b2bbb42bbb44c"],["/music/index.html","3254ce7e09f79d8ee1bb2da2ac22d242"],["/page/2/index.html","141486484980a1915f189192c3249aad"],["/page/3/index.html","eaa2cdb8f751ce6ccffa1940646de24a"],["/rss/index.html","b1973eb1adcd6c317a3cc3449d0fe4c6"],["/sw-register.js","3c9572f6db986890c5597151953c9c51"],["/tags/C-C/index.html","5b7ab29b9a10faf096eb0aef27253537"],["/tags/C/index.html","3445d13a6509462650f4f49b265c15ca"],["/tags/CPP/index.html","a9e53b3fd5639ca1d50f3e9e09106404"],["/tags/C语言/index.html","1bafcd167ffa4e636a06cc085a659c45"],["/tags/Java/index.html","430453523e5ff8e897b577f7d00dc0fc"],["/tags/LeetCode/index.html","12347681023c0044aebe88dcdfea1649"],["/tags/MSYS2/index.html","fe9267107b8eacf1235a469418a13ff4"],["/tags/Note/index.html","918d32886b3117a73b930a19fd444dfd"],["/tags/Scoop/index.html","e78b38c87d99569541cdbbffd89b0bc8"],["/tags/Swing/index.html","4d7a941ae600f42fcd7feedcea86d5a3"],["/tags/VSCode/index.html","00c6b3a9abf41546e2354d20fcd15cce"],["/tags/blog/index.html","2408f060a058282c01140575714b5c71"],["/tags/builtin/index.html","9f1fcc3ae7d59931ca5549629a7c1ad4"],["/tags/index.html","b6bf381f68a76a9b4360591acc454a89"],["/tags/vue/index.html","0f255de53f713612a4866f717908bc68"],["/tags/web/index.html","3d898a7d299130b268cbd55d3f45ee2f"],["/tags/划水/index.html","61f16e792391d8de71b7f576326a7f65"],["/tags/包管理器/index.html","6001fb9e6d0aeb22c0b2f3098beefe6a"],["/tags/悦读/index.html","9babc716d62e3cd63403d3bf23bebe98"],["/tags/操作系统/index.html","85b0bc742ef3b520662471425eb79383"],["/tags/数据结构与算法/index.html","8523e7fd4829da7d5fb8e43b54d9c9bd"],["/tags/新年/index.html","86830a0208a0b58d6d97c30d6fd6bdd7"],["/tags/杂谈/index.html","f46a840c47ecc5f45f5e2de45df2d393"],["/tags/深搜/index.html","0942df275a1a411dcc6161a7c158328a"],["/tags/笔记/index.html","92a3533c95b314499b2005f78d7965a9"],["/tags/萌新/index.html","5e606dbfba865b51ab91abb574091a27"],["/tags/质数筛/index.html","9621daa7250baf1da45f149f033533d4"],["/tags/软件/index.html","229bf55c3beea64aeab7d7799ca9ecce"],["/theme-sakura/index.html","8d275c923a1b39da135643b35b73e9f2"],["/video/index.html","135b0d044535826317685b791a09be6f"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
