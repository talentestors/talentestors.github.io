/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","162f506a1f0063e8c117310e0f52026e"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","3666360df3fd11f1465664b24ce0522c"],["/2023/02/06/C语言链表/index.html","f88f315265cf53a7fd140d619748da7d"],["/2023/02/06/书籍资源/index.html","95bc7937b7f52a42890909d51376947c"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","1828c2f830f249ee483d8e02f2200687"],["/2023/02/07/为水而水（笑/index.html","7800b34cc284677b1fbd8790dcab80c8"],["/2023/02/08/洛谷主页源码/index.html","06de6815df1c37346a0c97f1c6f7cad7"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","4780e96837b1f51769c36c3727689010"],["/2023/03/09/Web前端笔记-Emmet/index.html","7933d2fd472a2592ea0a4ee3273c175a"],["/2023/03/23/gitalk-评论/index.html","139c0aa50566d16f03c9620607894f59"],["/2023/04/10/用C语言实现字符串全排列/index.html","2d1a196b4a30464423b44776822eeb3c"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","0d3b66423a8333b85f187f796a2a9235"],["/2023/05/15/C语言基础排序-demo/index.html","7d153abdd9cac9964933a5a63d36f50a"],["/2023/06/14/闲着没事干/index.html","50767d907702ffca72f0a94d73c9d5ed"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","a530fe41b5ff3e9d1f35ce4a92307687"],["/2023/08/01/javase-note/index.html","a17f1ecfe8371b1b9caee77392d6bec2"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","eb213b441fe7d0a7ded0cd32707c556e"],["/2023/09/14/vue-pure-admin/index.html","46234ce5e21920240154591c5c37848e"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","2b7e354fdd2a588754f50bff995a6662"],["/2023/11/28/C-CPP-the-memset-function/index.html","0a8495c08aede9014afa4709f25300c2"],["/2023/12/13/javaSwing-DynamicClock/index.html","8398a8df53ade030cada6a8721bc440a"],["/2024/01/24/builtin-系列函数/index.html","444f3253a701424cecacb3ed5198ae4e"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","e0349af5a52a753fc3ce55db44c0039a"],["/2024/02/09/新年快乐/index.html","46cd2c9a92dcec72e0771e331e3ca92f"],["/2024/03/26/408-route/index.html","04d6e04b3630a66da23c199093fa4aa4"],["/2024/04/07/转载-线段树专题-xyw813/index.html","9b03037df93a328af04485a1c311b2dd"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","117994f5b54f6baea651454d5d25d4c1"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","55d7c229989a702dd3ab14261c707c5c"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","a57bd3dfbc2fd92064be72fa134d76fd"],["/archives/2023/02/index.html","e790fd7b19508b64099d6f0157cbc2e6"],["/archives/2023/03/index.html","d355741f9989a182460bdba668f41386"],["/archives/2023/04/index.html","17134d4271e718c367736b678664f7c7"],["/archives/2023/05/index.html","aa37f59ff37abd61106f8f68d244dca9"],["/archives/2023/06/index.html","86f542d6d9609fef4c0860489aa6c2b8"],["/archives/2023/08/index.html","9c4c310c0c62f0169a8ad0387607352d"],["/archives/2023/09/index.html","ae7f60adb5a7299af8fb7793cf18ec18"],["/archives/2023/10/index.html","f2912f84b674a46eb7e9a7671235fa7b"],["/archives/2023/11/index.html","7541adf2297f210b5074fd976a6ef41a"],["/archives/2023/12/index.html","1e76a56cbe0d592bf25fc72429d6aef0"],["/archives/2023/index.html","094e16ac13bbe84312840864e8e87031"],["/archives/2023/page/2/index.html","094e16ac13bbe84312840864e8e87031"],["/archives/2023/page/3/index.html","094e16ac13bbe84312840864e8e87031"],["/archives/2024/01/index.html","f35e36eda65d752e1989a78ca97a0943"],["/archives/2024/02/index.html","85a167126042ca26ebbef65ed6763977"],["/archives/2024/03/index.html","30eb20effa957358aa1e6c20b9f0b69f"],["/archives/2024/04/index.html","0b6af69912d39181f222692b5c9a603a"],["/archives/2024/05/index.html","224962aef74fd5cf975d30c10d45ce3a"],["/archives/2024/index.html","b3c42067bdf15e73ac487cda5aa04e34"],["/archives/index.html","7b29629337647d38a0b53792b7c550af"],["/archives/page/2/index.html","7b29629337647d38a0b53792b7c550af"],["/archives/page/3/index.html","7b29629337647d38a0b53792b7c550af"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","cbf57092e48e9b06b45450b9238d503b"],["/categories/技术/index.html","b1d7ccd902af7f37bac9eb3a1786290c"],["/categories/技术/page/2/index.html","add312658de91e65d5cd6ff5795c6040"],["/categories/资源/index.html","6c175417285969da5f8afc7eab9bc8ed"],["/categories/转载/index.html","33240691e29416b0a944fb69a74542a2"],["/categories/随想/index.html","aeddc1e08b7bcceff7591833758af278"],["/comment/index.html","291a79de55562232ce4f102179569f2a"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","5c2015e3a06427128f1094067e0c1de3"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","3544e1845751f57c737e3c7d9239f165"],["/index.html","8637551f29e4642967caf5369552a994"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","9c42cdffc5e02ce6357fa8a7f0d3cba9"],["/links/index.html","a793f87ce9932ba3426c252708bb4752"],["/music/index.html","b6692ef039ca7e5e61d35b05153e6945"],["/page/2/index.html","1ca43be8f1f2370bee4f817a6d0b8c20"],["/page/3/index.html","8771ced052aad140851014ddf26914ad"],["/rss/index.html","2933c5e1b07b2606c7161b868c4db441"],["/sw-register.js","e49b48d336bc6948ecf210f3272e0b1a"],["/tags/408/index.html","fb71e2a3500a1c42dadc8f5acd3c2154"],["/tags/Adobe/index.html","5f25c2ccfc14f8793ef4e52ede851f4c"],["/tags/C-C/index.html","bdf41e4b4fd12cb0aea99f573a9248c7"],["/tags/C/index.html","a40504eda1b613fd934b4b3a37dabaec"],["/tags/CPP/index.html","3a4e87902f3259639016d674022035c5"],["/tags/C语言/index.html","79f6799d81d90ea40b47d85969bbe95a"],["/tags/Java/index.html","db228d1650e66407f759b36ffa7a5acd"],["/tags/LeetCode/index.html","27f6889dd8eba904062bbc13f2d5f7cb"],["/tags/MSYS2/index.html","b2331c8865b648d9665bca4374b65261"],["/tags/Note/index.html","fc34136818a1f72c1534867bd9cedf86"],["/tags/PS/index.html","51aa799f23f0f6db2ee30bd3f0ab0459"],["/tags/Scoop/index.html","6adfd4464675b6f52c6781369a919cc4"],["/tags/Software/index.html","de1b9c55a9c1f8e6e6446b7520e2d64c"],["/tags/Swing/index.html","f2fa492be2f271f16ab27af46e00c917"],["/tags/VSCode/index.html","b579e580a6dff1c779d06a8b31bb4e6c"],["/tags/blog/index.html","5de528ea72424906bc953556ae4f583b"],["/tags/builtin/index.html","e3473ecdefa80cc6384684dcdec11b6a"],["/tags/index.html","d22b53c6f3083277250290998132a968"],["/tags/vue/index.html","29ff688fedb314fc1c6c840152728922"],["/tags/web/index.html","44fc1cae630e38ba65961ff250f9311c"],["/tags/划水/index.html","0528208207d304cf8cb88cddef23b316"],["/tags/包管理器/index.html","dda32ee4a63210356ef3c3ea500c9fdd"],["/tags/悦读/index.html","fa591fe79fa5be62b334b9506ca5e64d"],["/tags/操作系统/index.html","1f065057b857bb1208d8624e7119c677"],["/tags/数据结构/index.html","1a465ed4fa9e8c79f736657c6f853ab2"],["/tags/数据结构与算法/index.html","3bb0db93401f16815a448c24129b5773"],["/tags/新年/index.html","a5336ba4dba1e118cfa7576cba679e49"],["/tags/杂谈/index.html","cc1b64de35e5531cf1f96bcf70f8f73b"],["/tags/深搜/index.html","714e23372f2725201196ed39a10c5c88"],["/tags/笔记/index.html","6740010d442304cd71d11a9bf11a71af"],["/tags/算法/index.html","d9138140768c5226bfc1b1abaa336681"],["/tags/线段树/index.html","45442d0c2f68d633773c7394abd8dd5d"],["/tags/萌新/index.html","068dac455a87170037888673bc660a27"],["/tags/计算机组成原理/index.html","75fe1c773d0b01beced7ecbfc181280b"],["/tags/计算机网络/index.html","c2a51775a7df53345859d4280a02ccb2"],["/tags/质数筛/index.html","679be929a4a5e22cdd0e401ba4233e19"],["/tags/软件/index.html","318b6d225e37d5b457b07e2e607cc90c"],["/theme-sakura/index.html","af4ef73c14c6785c0ccc9fbb997094a0"],["/video/index.html","e08b05edb868726a67ab7ef33634e06e"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
