/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","b7449d8966d7bb5e08f8f69e2d8a4931"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","37a5fff8255d7e5eff081bfc3cea55b5"],["/2023/02/06/C语言链表/index.html","a5ac85985cb86d23734c35a45f3826cd"],["/2023/02/06/书籍资源/index.html","fbd1eec2c582a5eca6461468395de375"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","a67dd450640b6848e3490b87b46a21c8"],["/2023/02/07/为水而水（笑/index.html","03101f4213ae796a6c34854cf5ee26ac"],["/2023/02/08/洛谷主页源码/index.html","974aa02806ad0d4edbc926ef6e16c899"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","86a0ad583b19b4cbc7ef93cbb2f8487b"],["/2023/03/09/Web前端笔记-Emmet/index.html","73f52a5cbd113b36cbd34933fdb745c9"],["/2023/03/23/gitalk-评论/index.html","7145bfbea2da820f9cea00a0a725e0a8"],["/2023/04/10/用C语言实现字符串全排列/index.html","87534749f3521cd95269c2d7999e3a29"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","c93aa4f05c7ae8bf8e4ce600943a46a5"],["/2023/05/15/C语言基础排序-demo/index.html","83db59b446aa7291a2f707e6d61e1607"],["/2023/06/14/闲着没事干/index.html","bf542ba2d175750af54d7022879e2959"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","b2071df9637a31ab43ca1556fbbd6386"],["/2023/08/01/javase-note/index.html","c37ef409b987e86904c75bc213d01d2f"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","c81288e83012d732fe7e4967664126d7"],["/2023/09/14/vue-pure-admin/index.html","5c316b40b8d338ebba0cd720f328db04"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","a72bf80a36516c8260adb0230e68e256"],["/2023/11/28/C-CPP-the-memset-function/index.html","73fb80d286f0e745360ee2fd534d4616"],["/2023/12/13/javaSwing-DynamicClock/index.html","e83e959a37f93253b4b58804abaf1ff0"],["/2024/01/24/builtin-系列函数/index.html","7d5944f19682ea0885463f8e64591ad5"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","f16e4468f13ded6169c121f4cb39a325"],["/2024/02/09/新年快乐/index.html","6ed45a3ddba8309f0d974d90b64c477e"],["/2024/03/26/408-route/index.html","4895429a17c0dd2cc63b60abba95eb2b"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","89535b27374d282b762893ef0905145d"],["/archives/2023/02/index.html","794fcedb93afbc9661e8bad0d7df1a3b"],["/archives/2023/03/index.html","b1e98095cc441f38672260313c361986"],["/archives/2023/04/index.html","cac75e3d13d14f2019312699fcd4893b"],["/archives/2023/05/index.html","704c40d63a873709222cc88cc65bafc5"],["/archives/2023/06/index.html","deecee8f7af705b66b64e1fe479d768d"],["/archives/2023/08/index.html","8543879ad30f95fbd2ae9b421a0013d5"],["/archives/2023/09/index.html","5e032e6595ca6882e0c597ad0a8f7c21"],["/archives/2023/10/index.html","4a49bd5ad07cfdbac99d6f1eef03fea3"],["/archives/2023/11/index.html","f5933070914add841273ff84e52990e1"],["/archives/2023/12/index.html","e693659586b0abebf5f06263ca254638"],["/archives/2023/index.html","53d3214656ed00877b1a0d785286b6ca"],["/archives/2023/page/2/index.html","53d3214656ed00877b1a0d785286b6ca"],["/archives/2023/page/3/index.html","53d3214656ed00877b1a0d785286b6ca"],["/archives/2024/01/index.html","6c6792017f1ba6fd427534dbb52abc8d"],["/archives/2024/02/index.html","4ce0197a0d80dc3a1322239315d5c877"],["/archives/2024/03/index.html","3880c25f464390f216c2a155863945d7"],["/archives/2024/index.html","fdfa36f51d2361e834c8e9b253fcba73"],["/archives/index.html","bf97deefb4211f9e9dd4531a09e4eac7"],["/archives/page/2/index.html","bf97deefb4211f9e9dd4531a09e4eac7"],["/archives/page/3/index.html","bf97deefb4211f9e9dd4531a09e4eac7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","fff7a8256df18eb0630d75202375eaa0"],["/categories/技术/index.html","b97b3dbb48e66b335cec48de08f98751"],["/categories/技术/page/2/index.html","0d4f2631b105a9824ab1ca452231f486"],["/categories/资源/index.html","7d7401ed8afea1e6006c62a413994596"],["/categories/转载/index.html","26e5dba7fdd2f694116840914fd0d3eb"],["/categories/随想/index.html","9a965de40219cbfc78882a57e236a07b"],["/comment/index.html","eb7c5c81d124506000d04f367616713e"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","85218307258b74682e59739fcb40c676"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","e88053e4ed9938d0ccc4b823a8048051"],["/index.html","534dbb926d42fc59693fc961961eeafe"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","6656023590ec9f0cd009a87d777ed2b9"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","5c44cfc9cd05a89b5589560b0fd152ef"],["/links/index.html","f89270ec0c5d5b0a99680c4f0a7cdc42"],["/music/index.html","631be717968564b2eaee65b3a6326180"],["/page/2/index.html","bc8eea40e41021fd1c3f7d7dc42e5072"],["/page/3/index.html","370a9d35efdcc20a81f34000853e3404"],["/rss/index.html","ca2efa8b216a8bfd8467d907e8ac1c20"],["/sw-register.js","515f1eeadcec5c5e42b6b5e7e9c61e6f"],["/tags/408/index.html","413ed4486af28d9f5f14794f00a9733a"],["/tags/C-C/index.html","848384f7fb52a76dc14b981881067761"],["/tags/C/index.html","d798e0a2f4f128c74a5c184b83e35c96"],["/tags/CPP/index.html","8ce52da25a1c906e5dbb8f68467e88f5"],["/tags/C语言/index.html","33b8f8b50cdb6df6e97e670cac8695a4"],["/tags/Java/index.html","4b83f1fc63259d9fafd722a033f4749e"],["/tags/LeetCode/index.html","9b5841c7defeecfde04406c70045eca2"],["/tags/MSYS2/index.html","ca5703cfd4b2029b2adc674531ff815c"],["/tags/Note/index.html","7d14868e876d8b7018aa47f78105cefa"],["/tags/Scoop/index.html","c90c79300e7bcfa6b24b91bec8123063"],["/tags/Swing/index.html","bdb8242db5f84ed15af7220e3496295e"],["/tags/VSCode/index.html","75cf294b6dc5622b5e2d1ed19ee4a52f"],["/tags/blog/index.html","7817328d2abdfc311f9010d685da790a"],["/tags/builtin/index.html","bfe31f3eeee681793c3b61bb79663220"],["/tags/index.html","1615a58d0d66f20d2505647dcf56b917"],["/tags/vue/index.html","5de84f5df1020a6c61fd06d14e7f780a"],["/tags/web/index.html","f92736b3907f7a3aa2a924eb1b891343"],["/tags/划水/index.html","d789f5c4e861d9da8ff89f58aadc7576"],["/tags/包管理器/index.html","dea054802faf910d1d7f6dadf5d92adc"],["/tags/悦读/index.html","bc9c1dac0e6f4ffd131776d2173503d5"],["/tags/操作系统/index.html","26997e40b570041f0d9e18e9df17d68a"],["/tags/数据结构/index.html","4a9e66ebc07d9f3348a8b21196ccc537"],["/tags/数据结构与算法/index.html","6b2d62088a603f09f8e10d735ccc26bb"],["/tags/新年/index.html","e1ffe7b9879a6c60341bf4298995da60"],["/tags/杂谈/index.html","2da234150b2c320746d2076ee5092878"],["/tags/深搜/index.html","73d13d6503be8e8012c4d88678e8e047"],["/tags/笔记/index.html","00dd292afc76146198b8dbf794a11ae3"],["/tags/萌新/index.html","e1e53955579df40986a7395ed0d659a8"],["/tags/计算机组成原理/index.html","9ff80c717297d90134696616a95af369"],["/tags/计算机网络/index.html","66b92631e4e62c28f802bfd04f680baf"],["/tags/质数筛/index.html","231edaffe4b6068f06bd98a797915309"],["/tags/软件/index.html","a937564905c313c523393bb6f562a279"],["/theme-sakura/index.html","2ecdebd5e40b57c7757cf3d687d3f592"],["/video/index.html","0746ced8eeb6edb194a3069565cc6d77"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
