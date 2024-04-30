/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","21eba0311aa46bb0337398900ae1e50d"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","4bad653a7dd0ec5bb6638b34578bcc3a"],["/2023/02/06/C语言链表/index.html","410c8c6574d2a2be402295ade2ed8991"],["/2023/02/06/书籍资源/index.html","7de24a0729a06850c5ff11a90652d8b1"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","1fffb063460e31c6790ac321595976fc"],["/2023/02/07/为水而水（笑/index.html","3b2f101359cb879987dc8c64b5276f22"],["/2023/02/08/洛谷主页源码/index.html","8bef8567662054c862b883f34ddd966a"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","95cbac292b8b82009a153f75ed94f494"],["/2023/03/09/Web前端笔记-Emmet/index.html","53f5f24bf389aa4abb9c3d13380f1422"],["/2023/03/23/gitalk-评论/index.html","5cbb8b12cef32aac267d21e42bb39519"],["/2023/04/10/用C语言实现字符串全排列/index.html","c4fbefb22d09bcbd15a6d9b3dc7ffbce"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","d214d65c185b54f04c69817e35957004"],["/2023/05/15/C语言基础排序-demo/index.html","58f7083cd7a3ae30927146b3228816d6"],["/2023/06/14/闲着没事干/index.html","7caae255bf761daf900f2630820537fb"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","2b7b7c9b48711b3ba302940a6664de4d"],["/2023/08/01/javase-note/index.html","44a858ab75aaf9a9aaffd189f5e41e8d"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","c1c3a726ebfd929d0737fdfea1ac8c7b"],["/2023/09/14/vue-pure-admin/index.html","1ebc8ea0a3eb74b4ffb1ea024c0af050"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","c06d21f62d5be73607e5d6493964002b"],["/2023/11/28/C-CPP-the-memset-function/index.html","466650b2308bfb6110d09ef98778d4eb"],["/2023/12/13/javaSwing-DynamicClock/index.html","3fee513d3eb8ccec0508a06a7a75e692"],["/2024/01/24/builtin-系列函数/index.html","2a3c6f23f835a14698ec2875d71c8202"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","e2bcdf56ffb3ad0c4d14b1aba2422978"],["/2024/02/09/新年快乐/index.html","539e9e2087f9ffd612fd058e1a86282b"],["/2024/03/26/408-route/index.html","d0bf159d90a26186a4c3d9aba0605187"],["/2024/04/07/转载-线段树专题-xyw813/index.html","0bfccfa7f73db9b099953bfbe33ecede"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","b29e9d48cb166696f4410013348829e8"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","64ca5c7136228db7da4e717fe2c1b340"],["/archives/2023/02/index.html","d1f69ec84ef4c95708c768e5ba3f1e24"],["/archives/2023/03/index.html","48d93bfdaeabb310d61097b6ea69f559"],["/archives/2023/04/index.html","0417455f29137d9e8b966034bacae153"],["/archives/2023/05/index.html","4f5a89bf3768c467c415686e482c4c17"],["/archives/2023/06/index.html","8cfb98fb5c5982a83121457981e28f3e"],["/archives/2023/08/index.html","dcc5538afeefe33c14f9b73a952af46f"],["/archives/2023/09/index.html","49cb3a88fa7ce98af33c14bf7ca9d4bb"],["/archives/2023/10/index.html","8a2d45b18b937506e28082cb58dd87cf"],["/archives/2023/11/index.html","9f6f4400d4307afaf9c963ec668738f2"],["/archives/2023/12/index.html","c5bb06f6285d4ebc544970bbf4aadf45"],["/archives/2023/index.html","9703c1f6ea7c0cea5c12a9579343c43d"],["/archives/2023/page/2/index.html","9703c1f6ea7c0cea5c12a9579343c43d"],["/archives/2023/page/3/index.html","9703c1f6ea7c0cea5c12a9579343c43d"],["/archives/2024/01/index.html","1cc57306fb083ff1f68975190fa2ee5b"],["/archives/2024/02/index.html","935860f9750ff6a9eba4c6c1147d2aa9"],["/archives/2024/03/index.html","c5c87dc3c57f3551750a1855d7638ca1"],["/archives/2024/04/index.html","efcbbc197b13e1411422697e711ef352"],["/archives/2024/index.html","f3cb2c816cf307cdf4af9ac39186971b"],["/archives/index.html","3247ccb2d82f18a7f6bc28f6fc6d05d7"],["/archives/page/2/index.html","3247ccb2d82f18a7f6bc28f6fc6d05d7"],["/archives/page/3/index.html","3247ccb2d82f18a7f6bc28f6fc6d05d7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","91ffd47d90f649dc56cd4c5bdc767989"],["/categories/技术/index.html","52d9cfe23b7057c7c7e6decb28f905a9"],["/categories/技术/page/2/index.html","fa31ea67c050491709e0af0b93ac899d"],["/categories/资源/index.html","4d45dcf288b3b08db7b17c538a3df448"],["/categories/转载/index.html","7238f6cdc778e638507f6a618134dcc2"],["/categories/随想/index.html","e69e0c3b3267b49090a2f4237071481c"],["/comment/index.html","7bde80d65d2274c9d15acca2d8a606b7"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","a7ec00267b82ee90d609a757bab9b276"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","96c4230109e708c409f6ad1e0dc23a00"],["/index.html","df8d5c647251ddee1f0dc567ee2ad9c8"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","763b9cd8b1aee7ba512d4530ad7971df"],["/links/index.html","c2c78e7bdc2e815561eb08aaf12c6012"],["/music/index.html","a72ffb77a691822720df9104dac41516"],["/page/2/index.html","1899a1b1cbcdaae8ae7ea352b5027c67"],["/page/3/index.html","6f4a89f479e5fd802d3af14bd9df67dc"],["/rss/index.html","4d27659011daa33741c5c2ee7080e9cc"],["/sw-register.js","13f6a9cc5946cc6d23ad36a1e66d93a3"],["/tags/408/index.html","5527c986a700ac9b1b2f4e57a2f77f9c"],["/tags/C-C/index.html","0f7360ccc22ad309d43c550f0f26853b"],["/tags/C/index.html","cb7da153bcb0e52b8bfac0a2120164fb"],["/tags/CPP/index.html","4120d1069d725ef29cc70f867547a412"],["/tags/C语言/index.html","ea3878ee73d60d35e6cbbda8129f06c1"],["/tags/Java/index.html","c403f9ccf60e8671c65f3d80cee06299"],["/tags/LeetCode/index.html","dd15e8a0f4a5ffcc4ab395db10821334"],["/tags/MSYS2/index.html","e9a2a8cf40692a909044ebaacc2456b2"],["/tags/Note/index.html","1a3b5bd19f4686c966d9851efce618e4"],["/tags/Scoop/index.html","17a8b136ae22a28e797b400ac604c3ec"],["/tags/Swing/index.html","1bf43fc18b5d96ed7e39397d2a9d548c"],["/tags/VSCode/index.html","d2b1d1592f84365629c3e874789b90d4"],["/tags/blog/index.html","2a147cb537004f0c5ad5738e6f0e43d8"],["/tags/builtin/index.html","7b3360c36488b0a7bfbb2dd53c187127"],["/tags/index.html","327c71d13e52843a7ac8cedd2128bbd4"],["/tags/vue/index.html","9099fa1a79bc000cc272aa19f069ff67"],["/tags/web/index.html","6b63338c3df283b0d1e4a27682770ebf"],["/tags/划水/index.html","dcce1ebcbdd6587874f32d5c6e162c02"],["/tags/包管理器/index.html","286e1b5c3286a94a767c50a7eab7d8af"],["/tags/悦读/index.html","91d7e4611cf5fc0ba22802f04dab801d"],["/tags/操作系统/index.html","9292d1034cea3be90acc2b4cedfb0df5"],["/tags/数据结构/index.html","9d6705bee2025fe4188682079cd9e4d7"],["/tags/数据结构与算法/index.html","72eba1797a0d00cc3e2cb6c41d29126f"],["/tags/新年/index.html","1afcf930800c96bbf3839eababee302f"],["/tags/杂谈/index.html","8a44db854cb7f178bd9820b365be7fc7"],["/tags/深搜/index.html","3d36784d0d6d2347cb781d407cf1f487"],["/tags/笔记/index.html","e9f58b3c05915445411c003f1c8ed0fe"],["/tags/算法/index.html","624c5ccce126cad5e0a5449d77d10382"],["/tags/线段树/index.html","369a3208fa61a157d21d2de976c92d57"],["/tags/萌新/index.html","0e122604e0f0044fb2f35421671387e8"],["/tags/计算机组成原理/index.html","abd154fc3113b2d16650996da7e404c7"],["/tags/计算机网络/index.html","aa33bd842aa5db414e7b06b9c4f2f481"],["/tags/质数筛/index.html","58ed1e1481af74aa8b50bc767e6d3817"],["/tags/软件/index.html","cb65263c8089bdcc787200ef245fdf33"],["/theme-sakura/index.html","c1822cd4607835707445e55215aeb99f"],["/video/index.html","530b1d1a80e0cf47a4d1312d3a18da88"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
