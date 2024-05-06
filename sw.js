/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","325a4df7380d95e1b83429ef4b49e005"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","e0ce35314f00eaa313d1fe8eb0a6217f"],["/2023/02/06/C语言链表/index.html","126aee001db5d0d6703baa9d52c3dc8e"],["/2023/02/06/书籍资源/index.html","4bf605cd8c643310d5f121d7c7b0cd97"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","a3abe8f83447a7121f7a80db8863f1b8"],["/2023/02/07/为水而水（笑/index.html","3178a3bed2e39b114a23076b1272a97c"],["/2023/02/08/洛谷主页源码/index.html","0dd91cc7ef3076b77f82b85f9abcce5a"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","547dfc59615acd5e4a6dbb99f1436a1f"],["/2023/03/09/Web前端笔记-Emmet/index.html","5faa3453bda6bffba166b8ceedcc5bc3"],["/2023/03/23/gitalk-评论/index.html","f7b27d27e2dcbf4b37bb6623bff0f0d3"],["/2023/04/10/用C语言实现字符串全排列/index.html","6028fe473d24877df5c01a05192d459f"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","688b60ff196df99d90c0af197c17ae88"],["/2023/05/15/C语言基础排序-demo/index.html","8ed61f42e2a46516a32d25ae025a754d"],["/2023/06/14/闲着没事干/index.html","454843dd36e9315e9cbd5f0efa3a843f"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","b42e4bf8e73a8446a6bde84a2a45b711"],["/2023/08/01/javase-note/index.html","d70b7a245be850e711e11f050da83e52"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","51d2d7ff93980666e388799f52ec8481"],["/2023/09/14/vue-pure-admin/index.html","c7aa2695a2c6fc2a202a0f9e44f529d8"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","e9dbad37ec745b855259fb1ecb1f46c0"],["/2023/11/28/C-CPP-the-memset-function/index.html","e32e1814f0979decabd7e35e7f68b1ec"],["/2023/12/13/javaSwing-DynamicClock/index.html","780c6ab8f8be360a8148d3bd224d8ad5"],["/2024/01/24/builtin-系列函数/index.html","fa76a4c690f11d530f5133e3d3b2ede9"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","450e4bc767a1e79c5f562d766fbf9a44"],["/2024/02/09/新年快乐/index.html","06068fdf78e176ce4d04ff19f1bc1186"],["/2024/03/26/408-route/index.html","a1114dbaa01020651162df20c67ab5c7"],["/2024/04/07/转载-线段树专题-xyw813/index.html","6947bcd76fa5c17781e1db888d97ba11"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","f0be94bd2d543c2d1ede847acadbc46e"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","f5b90edfcbcddf1ebcd7a82c163decfa"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","095dc30fcb3b48ee4023fbcae3609882"],["/archives/2023/02/index.html","a0eb23f91d15920d0b7be0721a9b9750"],["/archives/2023/03/index.html","793d3889185cbdf9c7c253bb833ac312"],["/archives/2023/04/index.html","641d7cdf5798535b35497fbf71fa3a83"],["/archives/2023/05/index.html","bb9939dae64ecb6e95f66f9a111d8a48"],["/archives/2023/06/index.html","6c9fe01335592ee1dac8d0494b49b3f9"],["/archives/2023/08/index.html","0d48e49fb733e5af37eeea15aefceaf4"],["/archives/2023/09/index.html","1b8df5cf747fa049e30185b8f3ee4f2a"],["/archives/2023/10/index.html","0639fef502b7ef09b84114ea84effaa5"],["/archives/2023/11/index.html","98840bceaf4085cf240263ef6d002714"],["/archives/2023/12/index.html","ef2b488f1d0e262025d9bd4fc8de6de4"],["/archives/2023/index.html","aabe9f5fed843acde48116d17be64d07"],["/archives/2023/page/2/index.html","aabe9f5fed843acde48116d17be64d07"],["/archives/2023/page/3/index.html","aabe9f5fed843acde48116d17be64d07"],["/archives/2024/01/index.html","1e2a06cc9d08af884e6758c7e87d4e0c"],["/archives/2024/02/index.html","e9847b3ea940c68a0f7487c527ea2410"],["/archives/2024/03/index.html","cb26d6fe9e9fe48a6398a2e818382dd3"],["/archives/2024/04/index.html","c82834ef55a4c7d290d73237b70e8055"],["/archives/2024/05/index.html","52e2cff30d0468565b44b364f621faf1"],["/archives/2024/index.html","795a2bf5af79ddfea57ac63a12c80d10"],["/archives/index.html","844d0542f55ebed68daa13ee63bbedd0"],["/archives/page/2/index.html","844d0542f55ebed68daa13ee63bbedd0"],["/archives/page/3/index.html","844d0542f55ebed68daa13ee63bbedd0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","77cb1a170fc9e180c2dd92665030e4bb"],["/categories/技术/index.html","9da6905a18425ecf4894c26cd6f1df9b"],["/categories/技术/page/2/index.html","7bd471c090705dff1c67b873ada9fad8"],["/categories/资源/index.html","9e5de5f944e095ad534c9af5f6834e2b"],["/categories/转载/index.html","24e8867274328b5f77ed53c0b6cae85f"],["/categories/随想/index.html","207883cb6ab671f069ed63a022fd6c78"],["/comment/index.html","e733095157e36be9797d978e5ed2f2ff"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","bdc94eccb97182911f35e1d0d45bba69"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","3a52f2254c401246ab06ae179211fba8"],["/index.html","1b68d4605d673d7e6877affbcdf5a3d3"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","50655649f4dab237b42ade8104bd35be"],["/links/index.html","792bbc317836eb6e72a649b833cadc29"],["/music/index.html","e7241c639b5d9decbb1e230cb8ca3a6b"],["/page/2/index.html","709b7275e14453c04ee0cf8ef792c881"],["/page/3/index.html","8f523f16f8a161a95c408f2bc3daa6f7"],["/rss/index.html","61e2db0c488118b83ea23750f3ed6b53"],["/sw-register.js","a37b742d1d0471df351448c9b71aa3e8"],["/tags/408/index.html","818e7ac4c789fea8a649a9383bc21f40"],["/tags/Adobe/index.html","a362d2f658333f87a090b49b6b52799e"],["/tags/C-C/index.html","0688604047234f1f026497221de4d8a1"],["/tags/C/index.html","6740957a476c613cfc5d3f2baa7e083c"],["/tags/CPP/index.html","b21662e3fd4a35e8e62fd7d34d99a9cc"],["/tags/C语言/index.html","64f9ec76f50c3406357ed7e50c99e88f"],["/tags/Java/index.html","922614ba256db9e1da6768ddf5f5848c"],["/tags/LeetCode/index.html","766940dd98ae0bc10d09596d2d41f45a"],["/tags/MSYS2/index.html","41fcd347ca40e72da06f6051447b35b8"],["/tags/Note/index.html","10f62987f060690af005cff3bc164676"],["/tags/PS/index.html","11cb2d6be773f9c9a4e87a860387ce87"],["/tags/Scoop/index.html","d6a7cc47363e6a7c19446f52e048d15b"],["/tags/Software/index.html","918878db10c96ffc862d6e90a3a60cba"],["/tags/Swing/index.html","ff338ae80479243e4d7455b32d6c51b1"],["/tags/VSCode/index.html","e965c7caa4a93506ad56f84db2391304"],["/tags/blog/index.html","4b7ea9961414db55b381e42b70203e1e"],["/tags/builtin/index.html","34cd9be9409322708df4d610af288307"],["/tags/index.html","8cdc799cc69d672087f1ba18a0157931"],["/tags/vue/index.html","ec5b7af0a59d7793548780fd4dd8f069"],["/tags/web/index.html","2bb4cd149648d663d2e0b7e51faa6f1f"],["/tags/划水/index.html","8fe1f4c61b00815ff80bd91f24a7f784"],["/tags/包管理器/index.html","4e27c4571a013142584f6a7bb529898a"],["/tags/悦读/index.html","0e3ade81ebe3ffb50f23fe08434c4188"],["/tags/操作系统/index.html","e572a69b5737f6fb8b36d196ae7f8a51"],["/tags/数据结构/index.html","eee15d80d2230b904616d75d639c457e"],["/tags/数据结构与算法/index.html","c1b17cf76d0bc6d8b04dfbfe61b8cc55"],["/tags/新年/index.html","6b9ae012e56edc62ec1a20fc7c857d1d"],["/tags/杂谈/index.html","b17e315c9813ab8cadf01cb8d0ee3c47"],["/tags/深搜/index.html","5431159bed4a9a186b3f9345c578aea7"],["/tags/笔记/index.html","9ce163d218c9616081d770bbcbac78fb"],["/tags/算法/index.html","8c9f38d8272750d4e57f667a2550e85a"],["/tags/线段树/index.html","bd0184f3d73a75ada1cdcda359a1e3c5"],["/tags/萌新/index.html","6e178013d1168030cfaf05b1815a9642"],["/tags/计算机组成原理/index.html","9b420a71654b811bd9e417f6c2b60242"],["/tags/计算机网络/index.html","6c59c0b523da0bfd46d9bb745a2917b9"],["/tags/质数筛/index.html","c0c03548ad911aa71587aff4a31a32cf"],["/tags/软件/index.html","328ec26f80e58236cf332b8a1b596d22"],["/theme-sakura/index.html","2b98ac7386b8ee5b5d427c3c7e562802"],["/video/index.html","48ca0fd33fc162b6328a2338a55321d5"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
