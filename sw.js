/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","55e3e27faa039a40b55315c83204e808"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","3d1d32bf51c0bbd9e1867279d0a296c7"],["/2023/02/06/C语言链表/index.html","36e2cfa75db0261d94c7dc133e4cb905"],["/2023/02/06/书籍资源/index.html","fadb70c97bb77470808365b9d600a190"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","ca0a27ce4a6a1c011b00b57f90db5ae9"],["/2023/02/07/为水而水（笑/index.html","aa582ea874c1f6ea2918c4953d9ea053"],["/2023/02/08/洛谷主页源码/index.html","454138e020211cc6c6a6ea229c1d76fc"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","e61c9bbcc575f67ea841bed60f1480c5"],["/2023/03/09/Web前端笔记-Emmet/index.html","c0a317e4d7741a22f5972c2129a96dfb"],["/2023/03/23/gitalk-评论/index.html","00c85a4ffb44394bc9bebf87b6849293"],["/2023/04/10/用C语言实现字符串全排列/index.html","5951f0a1cfc46685b34088ea78fcea4c"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","f70f0dcfb2661e9195855134f83a21cf"],["/2023/05/15/C语言基础排序-demo/index.html","17eb0003967a0c615d9127527db40a79"],["/2023/06/14/闲着没事干/index.html","5a4d3fbe577409690aa3be0de9c4e27d"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","73c73e1eb9c5e5435843affada434d14"],["/2023/08/01/javase-note/index.html","cc3a347e0dc614207992d871498b3345"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","cf7401b671eb383156cf65495730b713"],["/2023/09/14/vue-pure-admin/index.html","2752fabed806c31da5de721cfb2da065"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","a604bb4302a1620599d0df97b1a643c4"],["/2023/11/28/C-CPP-the-memset-function/index.html","dd55b10a5eb954267fa3ef8269130a13"],["/2023/12/13/javaSwing-DynamicClock/index.html","79afe57f60d0d5cd7332854d9fda2ada"],["/2024/01/24/builtin-系列函数/index.html","e98d3eb666bb91478ea7e0d434ab4442"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","27842d34010810ea708eac7fe6e62d32"],["/2024/02/09/新年快乐/index.html","3883164a09974a84efe94a1b88667f93"],["/2024/03/26/408-route/index.html","2f1f212e75e5bf2fb3cf907af3f94606"],["/2024/04/07/转载-线段树专题-xyw813/index.html","1737dbb28534baabf11ec417f5cdf1b8"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","248d0969842fd50510e4a22dbea8dca9"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","58881da1864972545a85fb5f214e9bc3"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","f097a90c60b3cdf4cac36599240a3943"],["/archives/2023/02/index.html","849682ac33cfe3db1b7e5d5aff3e9d1f"],["/archives/2023/03/index.html","a5dfaeaf0d417916b7dec601d60a6dff"],["/archives/2023/04/index.html","c32e3c6da18f461800a08084a769d916"],["/archives/2023/05/index.html","d2f4d2226c90ed3f4cd9740df3d849f5"],["/archives/2023/06/index.html","0fc73538ac0136c1401f4122b809269e"],["/archives/2023/08/index.html","37be1b9148e2b0d4f2f79c20bcf7e59f"],["/archives/2023/09/index.html","309450c9cc7e4ed3079eb36be4dd6f65"],["/archives/2023/10/index.html","c3c800e7c8b045951f1902b427f9aa8f"],["/archives/2023/11/index.html","206e859fc2f7d1a27a980191bdc94792"],["/archives/2023/12/index.html","04245dcdf3fd8c250cf8a6fc133a1109"],["/archives/2023/index.html","3e14d2aca9e29fe406ca9b330eb7a499"],["/archives/2023/page/2/index.html","3e14d2aca9e29fe406ca9b330eb7a499"],["/archives/2023/page/3/index.html","3e14d2aca9e29fe406ca9b330eb7a499"],["/archives/2024/01/index.html","4cf4333f4e2332a5916415167c5e50f7"],["/archives/2024/02/index.html","a21aca16510b700fae86aa256173377f"],["/archives/2024/03/index.html","85c4be484a4cb06be8b7c406df976e02"],["/archives/2024/04/index.html","74a3b18d6c92b3049fdb52fdd8d2fe41"],["/archives/2024/05/index.html","09a338a6eb4a2aa5e9b4ad74dfb58215"],["/archives/2024/index.html","fa5c303f1a0f5a7e2d5e4f2388ca29c7"],["/archives/index.html","711270b22c133f28b58d222285059be3"],["/archives/page/2/index.html","711270b22c133f28b58d222285059be3"],["/archives/page/3/index.html","711270b22c133f28b58d222285059be3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","72024c02af20701607c786cb359140e2"],["/categories/技术/index.html","7e3bf2703045882e54ffb0e82a8d0f8d"],["/categories/技术/page/2/index.html","06b825887379798d5364a027d012860b"],["/categories/资源/index.html","e7941fae394ef2d35ecfbe3a238e5d04"],["/categories/转载/index.html","77387d31cee8c39bb706de91a4f10d84"],["/categories/随想/index.html","bb4517177a914f77617e22da93cf08b7"],["/comment/index.html","fbdbd8d957178884f4315a8b3dcbf03a"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d92341cc69d90c5325ded1718ae9e7fa"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","d3636ddba2fa396a8bd2d234a103d99b"],["/index.html","c631d326c404f52e16a1fd603b652ba8"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","9811e516f8855687fc13275ed9353f1d"],["/links/index.html","15611b05f6298b31aa90ca90a0dcf3aa"],["/music/index.html","f379481add2c245ff3849156199c2092"],["/page/2/index.html","4f1e6a7dbece12e02312ba5a1096c810"],["/page/3/index.html","4d98189ac1ddd4bd107eaf7f04775540"],["/rss/index.html","f931f7a7703cbd1c1188f655b666f2c7"],["/sw-register.js","d9058f6f8bc7045739d1edbac73b0e7c"],["/tags/408/index.html","6f290ac47036fdb981845a5e32c34593"],["/tags/Adobe/index.html","e0dce1ac181e4a774f35830d976a8514"],["/tags/C-C/index.html","6b61f270b7b0dde0883603e01591eac7"],["/tags/C/index.html","4c69cb1c896898bed6e9fef0aa05dd4b"],["/tags/CPP/index.html","eb93b249ba0891724dab1ab258d8c362"],["/tags/C语言/index.html","7f373f6976ad52ae7dcc9195681a8455"],["/tags/Java/index.html","25f728f2fb8fce877a3923f1c1d21849"],["/tags/LeetCode/index.html","90c437e4003d706388799fe0f93c44d8"],["/tags/MSYS2/index.html","c06e6c562022329ff091407f51bcfe38"],["/tags/Note/index.html","6c256bb321286d81922e69c54e8adf51"],["/tags/PS/index.html","fc7eed74cdf028839f419be04061788d"],["/tags/Scoop/index.html","c9c37dd24b0bde7fee1dfdd5fa575066"],["/tags/Software/index.html","9425647873fe9274dbdd384e99c6e5d7"],["/tags/Swing/index.html","62e523e883032c155c035f2cc9fe0597"],["/tags/VSCode/index.html","6ecb3c3b2b27a6d6a371993902683fb7"],["/tags/blog/index.html","de75667043ff26b9b7f71ab0d5a957f6"],["/tags/builtin/index.html","942b71f562068c3881458e3fddec88db"],["/tags/index.html","c83786739a12532bf49bc056c9c7da4f"],["/tags/vue/index.html","e9dbf643160c2363f45cc3beece9feae"],["/tags/web/index.html","4d08ec3f0ae9d803881998fb5026f17d"],["/tags/划水/index.html","9cae9abd72217dbbfba15ea66cc3203f"],["/tags/包管理器/index.html","85ce3dea70733ac28a52ef3895ee5da3"],["/tags/悦读/index.html","d0e648634e4deec24c706c5664a241ff"],["/tags/操作系统/index.html","d60e56fae1f9d64698f3cf269cdb2b42"],["/tags/数据结构/index.html","ce0f2054bcd35d6c795192aae995900b"],["/tags/数据结构与算法/index.html","19d0038f8f9a384e09d4d3903fd06198"],["/tags/新年/index.html","b5a871a0f1a716ffc2928a654e30ffb9"],["/tags/杂谈/index.html","ef45869267724835a26fd35ffd290d54"],["/tags/深搜/index.html","ab042870cc579f05e9c4801393f5cfdd"],["/tags/笔记/index.html","1fd4d6e603da56d611df173f279ea3ed"],["/tags/算法/index.html","5811baede30bdbbed8a3168a74f4e042"],["/tags/线段树/index.html","93f8f80b3335736f4e75adcb3f0c5fcf"],["/tags/萌新/index.html","d28e20665a02ceed8558e7a3f87c4e22"],["/tags/计算机组成原理/index.html","6eaaaf4f5d336cee3af4abf1bc66de43"],["/tags/计算机网络/index.html","feae4e5859ea27da3a7a943d7626d3ca"],["/tags/质数筛/index.html","0fb51c933df9bd59df60097dee7edf55"],["/tags/软件/index.html","aa08be8e4e80b4496ed897c1e796a49f"],["/theme-sakura/index.html","bcb907325e712a58787d322b57e8e648"],["/video/index.html","00b769c4ec7640642c3b84a74a2d7484"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
