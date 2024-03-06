/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","8cd0b9e064208a367f255111a6e455f3"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","aa1f027f4c9c279eb5b38031e1ff0066"],["/2023/02/06/C语言链表/index.html","84dfa340acf508b08d3d20c12864d0fa"],["/2023/02/06/书籍资源/index.html","06f37017237a790e6d762068bd15e444"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","cf212def6327f16a2e2bf3eaf2a13bd6"],["/2023/02/07/为水而水（笑/index.html","af851caddb77321169786c6c7a83a5f3"],["/2023/02/08/洛谷主页源码/index.html","fd624c27c05befcb5d637f0bf069d3e9"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","c8f29ede695c2607f93f9db7c1dc9f33"],["/2023/03/09/Web前端笔记-Emmet/index.html","7b865b4500bb2e213134590c64e7554b"],["/2023/03/23/gitalk-评论/index.html","64d354e0b715b28f0770598d9d9b83b1"],["/2023/04/10/用C语言实现字符串全排列/index.html","3af3c70791d6ea17915cfdf769602d3d"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","e8de18648a1401f1cc74fb77cf21e1ac"],["/2023/05/15/C语言基础排序-demo/index.html","22766a37294fe6e4bc324169579e2e8a"],["/2023/06/14/闲着没事干/index.html","8e4c199a96f3b0c1deed5c7371c9b065"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","7a82570f6e8fbc349a015a3521479517"],["/2023/08/01/javase-note/index.html","976b9ea5dc41b93cc63b2bd9e0ffc95a"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","96a9217e59985028e8becaff82c2b7e9"],["/2023/09/14/vue-pure-admin/index.html","00528531880bedd7ca93786df1bcce2d"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","9c227511c6a2126d86066e7e3069c998"],["/2023/11/28/C-CPP-the-memset-function/index.html","67a0ecd97904cd28ff29118666010f9e"],["/2023/12/13/javaSwing-DynamicClock/index.html","c9e6f967aa861e2cf8e415489d528f7a"],["/2024/01/24/builtin-系列函数/index.html","08128301a36a6add5117ae93734b25a2"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","35d106651eca8402b0e2522d7f0d65a9"],["/2024/02/09/新年快乐/index.html","55283147b582a78291e29154f9d86fc0"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","ccb41b29003b10352281cafe778b1587"],["/archives/2023/02/index.html","b676fe1722a7d42c756f84fcca968272"],["/archives/2023/03/index.html","a8ec4427621ae945bd42aeb588933997"],["/archives/2023/04/index.html","eaf1e15b1b4669086284300c7c0c32ae"],["/archives/2023/05/index.html","1e06dc3e1f4b0da1b0f90f9ffe326664"],["/archives/2023/06/index.html","4e7089dc7d96dff5a5a5271974785f7b"],["/archives/2023/08/index.html","f5691d18c6adc64ac1bcf7da156c403e"],["/archives/2023/09/index.html","af58e828ef8a150c162f49b9d71cae7e"],["/archives/2023/10/index.html","f662aaf2928fd542af20f6949cfd55e4"],["/archives/2023/11/index.html","a89f730a6aeb3ffe903dd440e3b67a98"],["/archives/2023/12/index.html","cb99dce1abf1dc03a3876a6caeed3df5"],["/archives/2023/index.html","b9ceaa791e1ba3a9b3404faa57886dfa"],["/archives/2023/page/2/index.html","b9ceaa791e1ba3a9b3404faa57886dfa"],["/archives/2023/page/3/index.html","b9ceaa791e1ba3a9b3404faa57886dfa"],["/archives/2024/01/index.html","05eda622a6503875a0fa170a058fa375"],["/archives/2024/02/index.html","faddf623941a6f6cc4b7325e5625d603"],["/archives/2024/index.html","b878cae70cc9d5aba4a744699810522d"],["/archives/index.html","2dcf682c4a550650e132b4f0890fdd19"],["/archives/page/2/index.html","2dcf682c4a550650e132b4f0890fdd19"],["/archives/page/3/index.html","2dcf682c4a550650e132b4f0890fdd19"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","3a4fced92530eca6e7edb1d9bf953e50"],["/categories/技术/index.html","b50ce1842ccc9f8d11682cb24e87558c"],["/categories/技术/page/2/index.html","7aa196c9553bdc77f426ec1694556763"],["/categories/资源/index.html","08f1a137c07b988d0474f93911ff9522"],["/categories/转载/index.html","e2446d81e9ea05afdd2e62b13ae84e92"],["/categories/随想/index.html","bb7e3b37f326323ea919c5ce8fbfcb12"],["/comment/index.html","ec5efcc4fd9dbbd3a8e88d6bcbeeef56"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","4ca10b9552b955832dfb51b940c827b5"],["/css/donate.css","770ae16da2c6862067a16b1e46e89ac5"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","1437630427335f998575e14d9b416e81"],["/css/style.css","b7e530701025dc75e3f82211e79f31bb"],["/css/zoom.css","a2eaccf97b6fff71e0bba34eb4d86845"],["/donate/index.html","29e45bc4578b6987687b351a1aa46df1"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","8f26650f3458903d51442f9b50ec9821"],["/index.html","3f87dd66cd798b9989fc9cea9984a88a"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","417686f19ee096796af142cdecfe0356"],["/js/botui.js","098fb3d9628932476b8b693ed05022b9"],["/js/hititle.js","076e0f80f4e17aebca6839cfe1c1562b"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","586588701b72603449c03b3b71d6f396"],["/js/sakura-app.js","e7e7f7ead37482bd1b5310fa7eab5c80"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","c687e359540c9fa41cdfc8c4a60440f2"],["/links/index.html","cc9b6346ac7ab41d3533bcd69b1b66cb"],["/music/index.html","a5f501dfc35405c440102e912de4b158"],["/page/2/index.html","816cf1ac3e566d69e0d272fea055b887"],["/page/3/index.html","c6531cf56d9a1e023260fd846c3174ff"],["/rss/index.html","8f3ef6249735395cc4a9578379eb65a4"],["/sw-register.js","3e1bad1c58501be761b7d03a575303fe"],["/tags/C-C/index.html","9106015f90677e33296f6da3e9e66ff8"],["/tags/C/index.html","6428015146c793868a35595cc945d1db"],["/tags/CPP/index.html","a1d3695fc1c6b3af87852eeefa551034"],["/tags/C语言/index.html","cab7f27ef021e5d19d20c0d196b5d2b5"],["/tags/Java/index.html","430a4e4b9ab48b481db85bf5daf4d093"],["/tags/LeetCode/index.html","f0530fef35a7bad8a48868d800215d02"],["/tags/MSYS2/index.html","3ab72073c1dde9208acfd8f53164fc1e"],["/tags/Note/index.html","4030fb21d0f2a664961f19647db0be47"],["/tags/Scoop/index.html","859c3dccb366690043d04949141d6655"],["/tags/Swing/index.html","d502c33f7e383378c5510450dd61d68a"],["/tags/VSCode/index.html","1321952915b3f6f28c1d1ba5b7c2c43b"],["/tags/blog/index.html","f80e3553dbc96640f4b0f41363a3dc89"],["/tags/builtin/index.html","29b8739c9fccfe8ff254dee1fc8d616f"],["/tags/index.html","f9885965eb6b7db74e7628ae2a474c36"],["/tags/vue/index.html","aa4ad861db97e6b23bf803a1b91053ee"],["/tags/web/index.html","ac357f2883b2ae01f7a25a1886f0fccf"],["/tags/划水/index.html","425da0dae78cd6049406501ee8013782"],["/tags/包管理器/index.html","1e54ad185086fac2365ee9687614aa7e"],["/tags/悦读/index.html","b866d656669998dc1582efbc64dfa921"],["/tags/操作系统/index.html","61434de135baf76567cbfe16d22d6b8d"],["/tags/数据结构与算法/index.html","806db9af6e7a3426e861555c69969c26"],["/tags/新年/index.html","81e3b74eb68d199bc36bf867d5cb92e2"],["/tags/杂谈/index.html","a7cd09430a81156ae5d9cc09cae2287f"],["/tags/深搜/index.html","2e0873e6e75e69f47c3061d1ff5a1522"],["/tags/笔记/index.html","b99691d17e7ef46afaaf783c0c89eab4"],["/tags/萌新/index.html","57d1936b245e8420b7f7f236ec12a63e"],["/tags/质数筛/index.html","79fc582b685bd073ec6f60a82cec128e"],["/tags/软件/index.html","0c360356f142a72f905ca16b373edc39"],["/theme-sakura/index.html","758d6efd0c9a663e5f328a250664cdec"],["/video/index.html","2af0a03ad79665831fe8d725a221ec9b"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
