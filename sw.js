/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","6f1e02206f36c9942f7a807863d1de55"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","9553885d2af4494b01ee433a667f9ea1"],["/2023/02/06/C语言链表/index.html","9dc82bc94dc5eb224e7e4e378674d81c"],["/2023/02/06/书籍资源/index.html","cb88c1d31b47b91061af90c789086f64"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","c7d49caae2ac557205204b88b13c37a5"],["/2023/02/07/为水而水（笑/index.html","729b71e35f89c5e7909918fe1f3f4769"],["/2023/02/08/洛谷主页源码/index.html","ce45d41055323d8e21bb1e179bf41450"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","12b70c80e11fbb6ae884a3d1037f5ab1"],["/2023/03/09/Web前端笔记-Emmet/index.html","5f6713bcdd528581733277163ec8c153"],["/2023/03/23/gitalk-评论/index.html","7145bfbea2da820f9cea00a0a725e0a8"],["/2023/04/10/用C语言实现字符串全排列/index.html","a4adfc9d1471b900a68330c147ab321d"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","453b3e1bfc24c8e1f3133f4731c56aff"],["/2023/05/15/C语言基础排序-demo/index.html","a3974e407b1f37c2f72a758306cfd1cf"],["/2023/06/14/闲着没事干/index.html","d00f179e3cd76d8ed9835892e38e016f"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","c69d8b6d859aadac3fa5ff1a03fb9bab"],["/2023/08/01/javase-note/index.html","29b6725edfda84bed9c1ff1915f03890"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","bb191f0da9ed38b62f25cef14bc1e714"],["/2023/09/14/vue-pure-admin/index.html","63543d2e408dd5140571435f7d46a784"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","80840b974f93bf641ae84676f4027135"],["/2023/11/28/C-CPP-the-memset-function/index.html","66b47ad86bfd271585e4abd11304aea9"],["/2023/12/13/javaSwing-DynamicClock/index.html","ea43413d6fd1f6c8297be2a7375bd998"],["/2024/01/24/builtin-系列函数/index.html","0c999ee50df58bad4227310ef8c51aec"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","6f77725c521ad715df69597c0d213913"],["/2024/02/09/新年快乐/index.html","b20c4a80f5c1525e92670d80a5bc782c"],["/2024/03/26/408-route/index.html","aaddca9b4a7936c3c1ad81277fbc07be"],["/2024/04/07/转载-线段树专题-xyw813/index.html","06661416353af413580b5bc04ace767a"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","589495c04d9a33cd0a5d63c4cbd5b177"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","89535b27374d282b762893ef0905145d"],["/archives/2023/02/index.html","579281d68f1eb63502d28c3085a2558b"],["/archives/2023/03/index.html","2d50ce46bf94cb05a8599bbb838f08f8"],["/archives/2023/04/index.html","68f15787aa835786555cc01e1dcff022"],["/archives/2023/05/index.html","9575311ab28bb5b59dd454cb907e85d3"],["/archives/2023/06/index.html","329f2133cf8da505d1f043f6246e6a2b"],["/archives/2023/08/index.html","349de235cb881eb29239c58ab149e097"],["/archives/2023/09/index.html","dd37d51545a4853333832fd25f593ae7"],["/archives/2023/10/index.html","37b6056bf7108bf958f1c71c485a28c8"],["/archives/2023/11/index.html","46bde98362566491574bf02d0f97542e"],["/archives/2023/12/index.html","7a75f0e5f1e235797daf7cf3120583f3"],["/archives/2023/index.html","ee78bce2565082c9055314094ff41dc8"],["/archives/2023/page/2/index.html","ee78bce2565082c9055314094ff41dc8"],["/archives/2023/page/3/index.html","ee78bce2565082c9055314094ff41dc8"],["/archives/2024/01/index.html","6b6a24906b21619e899d8dc3a62664b0"],["/archives/2024/02/index.html","e1ad82495036d779665035b106427fb9"],["/archives/2024/03/index.html","c70a742a189061f21ccd113e852c2aba"],["/archives/2024/04/index.html","c75596052b612eeada3ef4aa8277d047"],["/archives/2024/index.html","3eaf0d72720ced246ce40068ef4f6e96"],["/archives/index.html","22634277c280e889a81f081e46f9d638"],["/archives/page/2/index.html","22634277c280e889a81f081e46f9d638"],["/archives/page/3/index.html","22634277c280e889a81f081e46f9d638"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","6c7abcd136600a0fa77dabfc900901bc"],["/categories/技术/index.html","b4f3b152dd9fa47600e05582dcbc4cdb"],["/categories/技术/page/2/index.html","cea8758f8312c337273ea6f8b5825617"],["/categories/资源/index.html","7d7401ed8afea1e6006c62a413994596"],["/categories/转载/index.html","1a24d2b62a04a93d91ed3ff9232dcac3"],["/categories/随想/index.html","9a965de40219cbfc78882a57e236a07b"],["/comment/index.html","eb7c5c81d124506000d04f367616713e"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","85218307258b74682e59739fcb40c676"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","04a9b9069824ede77c18f6df1e129413"],["/index.html","6a0c960a630e9dd0d6c5f95aa1f43cc0"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","7d19023fba703c7f13984be2d26ff379"],["/links/index.html","f89270ec0c5d5b0a99680c4f0a7cdc42"],["/music/index.html","631be717968564b2eaee65b3a6326180"],["/page/2/index.html","c865cfc99d5be9fd5ee35743bda35fd6"],["/page/3/index.html","a6190a484ba45f4125710eee0e9f3227"],["/rss/index.html","ca2efa8b216a8bfd8467d907e8ac1c20"],["/sw-register.js","dc652b4a6ff0adc40845c06c64bb89e9"],["/tags/408/index.html","413ed4486af28d9f5f14794f00a9733a"],["/tags/C-C/index.html","848384f7fb52a76dc14b981881067761"],["/tags/C/index.html","d798e0a2f4f128c74a5c184b83e35c96"],["/tags/CPP/index.html","8ce52da25a1c906e5dbb8f68467e88f5"],["/tags/C语言/index.html","33b8f8b50cdb6df6e97e670cac8695a4"],["/tags/Java/index.html","4b83f1fc63259d9fafd722a033f4749e"],["/tags/LeetCode/index.html","9b5841c7defeecfde04406c70045eca2"],["/tags/MSYS2/index.html","ca5703cfd4b2029b2adc674531ff815c"],["/tags/Note/index.html","7d14868e876d8b7018aa47f78105cefa"],["/tags/Scoop/index.html","c90c79300e7bcfa6b24b91bec8123063"],["/tags/Swing/index.html","bdb8242db5f84ed15af7220e3496295e"],["/tags/VSCode/index.html","75cf294b6dc5622b5e2d1ed19ee4a52f"],["/tags/blog/index.html","7817328d2abdfc311f9010d685da790a"],["/tags/builtin/index.html","bfe31f3eeee681793c3b61bb79663220"],["/tags/index.html","1615a58d0d66f20d2505647dcf56b917"],["/tags/vue/index.html","5de84f5df1020a6c61fd06d14e7f780a"],["/tags/web/index.html","f92736b3907f7a3aa2a924eb1b891343"],["/tags/划水/index.html","d789f5c4e861d9da8ff89f58aadc7576"],["/tags/包管理器/index.html","dea054802faf910d1d7f6dadf5d92adc"],["/tags/悦读/index.html","bc9c1dac0e6f4ffd131776d2173503d5"],["/tags/操作系统/index.html","26997e40b570041f0d9e18e9df17d68a"],["/tags/数据结构/index.html","328c250764c19966de8ed1ddfcc8e52e"],["/tags/数据结构与算法/index.html","6b2d62088a603f09f8e10d735ccc26bb"],["/tags/新年/index.html","e1ffe7b9879a6c60341bf4298995da60"],["/tags/杂谈/index.html","2da234150b2c320746d2076ee5092878"],["/tags/深搜/index.html","73d13d6503be8e8012c4d88678e8e047"],["/tags/笔记/index.html","00dd292afc76146198b8dbf794a11ae3"],["/tags/算法/index.html","0609a2c9cf5a47907480851d2ea17817"],["/tags/线段树/index.html","1c64d920e591ebc25c3d16f0bca3806f"],["/tags/萌新/index.html","e1e53955579df40986a7395ed0d659a8"],["/tags/计算机组成原理/index.html","9ff80c717297d90134696616a95af369"],["/tags/计算机网络/index.html","66b92631e4e62c28f802bfd04f680baf"],["/tags/质数筛/index.html","231edaffe4b6068f06bd98a797915309"],["/tags/软件/index.html","a937564905c313c523393bb6f562a279"],["/theme-sakura/index.html","2ecdebd5e40b57c7757cf3d687d3f592"],["/video/index.html","0746ced8eeb6edb194a3069565cc6d77"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
