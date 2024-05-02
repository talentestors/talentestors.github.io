/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","03d88c64a30ba810979588383c6c6c2a"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","1ee304c8ca0dcb8afc37880e987cfd90"],["/2023/02/06/C语言链表/index.html","da7af19486e3cc11cf6efecc8593df94"],["/2023/02/06/书籍资源/index.html","1b8ea6163da2270b05e5c108907e7f46"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","ff1d92e828cfe0b9e95cbe1273cc5e5f"],["/2023/02/07/为水而水（笑/index.html","692845340bce5df66bff7c2f3ede6923"],["/2023/02/08/洛谷主页源码/index.html","e4c6409c50299a0cb23fdbfedac8c4dc"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","09fe75b016fbbb761822a8f47c7c97c1"],["/2023/03/09/Web前端笔记-Emmet/index.html","722c39d02abadc6e3ae9a2eae9b155a9"],["/2023/03/23/gitalk-评论/index.html","921f94ca1673ef5f2c06c23fa19d8db0"],["/2023/04/10/用C语言实现字符串全排列/index.html","66f004c607cbf709ba63986176f86858"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","48ca3d94ea404b22e3b3fea200f18078"],["/2023/05/15/C语言基础排序-demo/index.html","90c98558768857f4882bb2c91000ab67"],["/2023/06/14/闲着没事干/index.html","ba2013d420e1dc0da2d846a6631b955d"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","814208988ccd0a65be0d2fdbe0255fc2"],["/2023/08/01/javase-note/index.html","9a1630d7cf53b1291d0801d4fca57551"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","41fb93007f73bf760213b515f7f3e30c"],["/2023/09/14/vue-pure-admin/index.html","2988bd26884c3aa07553d1ee71d80210"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","58f9b47a9c1e0b8d39a820962be54d70"],["/2023/11/28/C-CPP-the-memset-function/index.html","4346e6b86ac7f9e5bf5bc9e22268ae2b"],["/2023/12/13/javaSwing-DynamicClock/index.html","61498df7fc84199b5c57d283f89ab6a2"],["/2024/01/24/builtin-系列函数/index.html","f836104229ff602801b51e661c243313"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","0bbe0b08568634be0ded119892407ed6"],["/2024/02/09/新年快乐/index.html","bdb0edf8e2f938db97cbc8ad2efb100a"],["/2024/03/26/408-route/index.html","6eaaaf891c5abd905f358d45ad4d779d"],["/2024/04/07/转载-线段树专题-xyw813/index.html","8127c08ad6485681c2291c410cf3b10f"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","a4cf7efbed05587a403943229f77d3f8"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","4832c8e22ce42fbb96ce74f16ebc189e"],["/archives/2023/02/index.html","8906404abc4f0a4aff7cacee2ca2ee86"],["/archives/2023/03/index.html","7ced5b481eaaa5ea16cf45203d590a13"],["/archives/2023/04/index.html","820897b346e8e08796ad218a01d821f5"],["/archives/2023/05/index.html","ed40c3f2704aa6ae93dbd1c72e585ffe"],["/archives/2023/06/index.html","cbc96260928e6081ec48b5707142ae8f"],["/archives/2023/08/index.html","486071ff14b103c42375fc1ca5314d30"],["/archives/2023/09/index.html","0c860f05fa4a81a1a85e8da178aa3b7d"],["/archives/2023/10/index.html","22bcd1778cba8d512f3be181bc188e77"],["/archives/2023/11/index.html","1a0bb68bf929f05eeb190eb64d12d479"],["/archives/2023/12/index.html","7a33208959aa503e65ec913edb2b982a"],["/archives/2023/index.html","2bd2108b1c4ea64233ce9253e17d18de"],["/archives/2023/page/2/index.html","2bd2108b1c4ea64233ce9253e17d18de"],["/archives/2023/page/3/index.html","2bd2108b1c4ea64233ce9253e17d18de"],["/archives/2024/01/index.html","913e31b83c4a5422a43474917784fac0"],["/archives/2024/02/index.html","31c41295afd5355b3cf6afbc7a6a8cd9"],["/archives/2024/03/index.html","ed6ee4571e0c50d82e8e37f4ce97aec1"],["/archives/2024/04/index.html","20b46d0d9168ef9df008c42593563235"],["/archives/2024/index.html","f20da6fee7384b9c2e56b4255864eb05"],["/archives/index.html","ccececb4796eb1c83754597ce4aa9088"],["/archives/page/2/index.html","ccececb4796eb1c83754597ce4aa9088"],["/archives/page/3/index.html","ccececb4796eb1c83754597ce4aa9088"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","1af693d3c4b6b2c73fbeb6f3285109e2"],["/categories/技术/index.html","f72ffa802950798dcfaad6a548c328a7"],["/categories/技术/page/2/index.html","224520109a5b5dfaaab2b2cf40bb4825"],["/categories/资源/index.html","525fc01f42f88869905c4538ce3d6d4d"],["/categories/转载/index.html","3d4d23b895795f21ceeaa9ac0de37cec"],["/categories/随想/index.html","8cc143b9c9574c60f26744f1c4ff0409"],["/comment/index.html","fd1137e10e92f170a9b543b1d8149d19"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","b706fabced9dfdcaaac2d65ecb8acd50"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","d707cb7f8280fe99bb8f834d4221a63d"],["/index.html","663264d48b87e08ace2a399b77d79be9"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","2d6ff4d750f78c9e1aa2cf846d26cbe5"],["/links/index.html","9703759bf73751cf783e7b9a2182f71b"],["/music/index.html","930c35ffb5e14fb1688380cbae83b599"],["/page/2/index.html","c2e34ed828841da2a8fc7fb1dc6dba79"],["/page/3/index.html","d8a52ee86b0c47bd3ef92e6017e53114"],["/rss/index.html","c31a2722717227d21576100660fc0071"],["/sw-register.js","ecb84ffa62b2876e680463d17a3b2a9b"],["/tags/408/index.html","55c3e5d66f73295d8644e068605d5511"],["/tags/C-C/index.html","2495e45ada7c9f23b6a7f65b06487288"],["/tags/C/index.html","2f36e22c0ce3c8e0fd647269550671cb"],["/tags/CPP/index.html","31e10452e7d513b581f493df6f547564"],["/tags/C语言/index.html","e59f0afebadc64e4b22d22ca3857471f"],["/tags/Java/index.html","5b66a5a7a1887264bd97bdf7a087f51a"],["/tags/LeetCode/index.html","4caba3d02323638f34972cf8aca66285"],["/tags/MSYS2/index.html","465d7cc2bdb522e01508a428ce7c325d"],["/tags/Note/index.html","e8ea1c13009481906f486435b17911ec"],["/tags/Scoop/index.html","d57a92e6f95223f64182845fd81136a5"],["/tags/Swing/index.html","b301e9cacdf7636b7936cd4729fbd2c1"],["/tags/VSCode/index.html","4dd56d3290a43e281d2d69b2d2fd1fe0"],["/tags/blog/index.html","8e91f0e4fc7dbd1ee3247a16abe5b15f"],["/tags/builtin/index.html","c9878b0864d119c4b39704672c041635"],["/tags/index.html","5e4f30b08c103fdbc6fd28ec54c2998e"],["/tags/vue/index.html","d00c02df7c9e707f0e42f172d7f8aec4"],["/tags/web/index.html","c94ae70d64bafc4608ca116c4eaa1fef"],["/tags/划水/index.html","b5d45a694e8c255c4884149994391b2f"],["/tags/包管理器/index.html","dd3f78a7f32e2e6cdab170456d2d7bb7"],["/tags/悦读/index.html","762dd4379f85e00fe275c10b1ef9b12e"],["/tags/操作系统/index.html","840f77b27919fdee5c9962963e609840"],["/tags/数据结构/index.html","ceb9e91f1a17f217274dd2350493f045"],["/tags/数据结构与算法/index.html","a5d0e80d557b56045dcee5fbfacf3191"],["/tags/新年/index.html","de2132555b975efc8e68a58198275e0b"],["/tags/杂谈/index.html","77db68bc948fdbf0318a985418b8e568"],["/tags/深搜/index.html","4e6b202caa4d8f389ea002538ee32e9b"],["/tags/笔记/index.html","e92229670afe98eab44567bf6ede5ae1"],["/tags/算法/index.html","0db6b414d808a171b1cbeaf972298943"],["/tags/线段树/index.html","773cd9d93c2a61055711f9f42296766c"],["/tags/萌新/index.html","3a3db5b986956b83bb2367734ced3e5c"],["/tags/计算机组成原理/index.html","abc45bff0087d101b296fa0654c14bbc"],["/tags/计算机网络/index.html","bc0909e75b35c3d18ce12928748a03d5"],["/tags/质数筛/index.html","6f8cf648b9b0a2c20551729e00de739c"],["/tags/软件/index.html","856e150a7452a2544c693beaec1ce732"],["/theme-sakura/index.html","82c055e8b6c755774639bf81f3c7c488"],["/video/index.html","5ea1b2849924b216bae70eb0ba83ecc3"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
