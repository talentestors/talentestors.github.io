/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","a0d21c60143796606c025802f58778d7"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","d9dd5620a7b266137defcb336e2a12e9"],["/2023/02/06/C语言链表/index.html","1af167945c573652c17a2b4f609f3ff7"],["/2023/02/06/书籍资源/index.html","8509b770d16d1b055c1aede37f50f986"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","c41b4b2ece46f8fef6c7254b8b46d7f8"],["/2023/02/07/为水而水（笑/index.html","351e8ed41f8335921c03d197e657bd36"],["/2023/02/08/洛谷主页源码/index.html","37d55cf42ede1d3abf1dd0cccca9e643"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","7f8ed4f35e8a4e345ac69e52a5c436bc"],["/2023/03/09/Web前端笔记-Emmet/index.html","6050fd653a53c2a9eb56fada396b8f3f"],["/2023/03/23/gitalk-评论/index.html","e39bf25412727de601dad846aaf72180"],["/2023/04/10/用C语言实现字符串全排列/index.html","e88b48940542c9c8d64cb64cb8310f59"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","6c0433368f5e1ef7d608f32e6ee5ec35"],["/2023/05/15/C语言基础排序-demo/index.html","37d58cab59f85a72be990ae970293ded"],["/2023/06/14/闲着没事干/index.html","a441a0ac81e7a15990f8a49ba3716c0e"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","954c013eb92d3c2695fd1f442d00ea6d"],["/2023/08/01/javase-note/index.html","cd587e2f764cc1e287e5274753080f7d"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","3fb265965c711e416a713c0f60850b91"],["/2023/09/14/vue-pure-admin/index.html","877a0f11eb1c161cd3bf08cd8a28310c"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","278fdd6f6859abeb933fc0119b07e137"],["/2023/11/28/C-CPP-the-memset-function/index.html","4cf4709cdc06e28a57a093c4f7d7773c"],["/2023/12/13/javaSwing-DynamicClock/index.html","510858972276ced9b9749f969c2136c9"],["/2024/01/24/builtin-系列函数/index.html","863fb18580a2fa901436667ac29248f6"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","9fd7f8c9c05c7676ce84532c79b232f6"],["/2024/02/09/新年快乐/index.html","b120bb403a4710695d971d155da3345b"],["/2024/03/26/408-route/index.html","b2e90aa53285ea567e6461f9f96a62e2"],["/2024/04/07/转载-线段树专题-xyw813/index.html","351946c9117d0849ca8f1e79434d8959"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","dd237431c8871a1582e8e4a1b32fa62f"],["/archives/2023/02/index.html","05d2bb4e1762296215c53a77e2173df1"],["/archives/2023/03/index.html","1b0e4da3ef118b3cf7b2f4c1d3dc7c55"],["/archives/2023/04/index.html","d9e10d69b7c37b4ea3c8ed62665b3a9e"],["/archives/2023/05/index.html","9fd7b06461aa0fbb14c9400f11dcafce"],["/archives/2023/06/index.html","145a7846c2ee684fada1bb0d049536c7"],["/archives/2023/08/index.html","59e9aed5b75160baecf920aaf855b645"],["/archives/2023/09/index.html","3c8dc8d5b2a912dd4c0feaf8779940bb"],["/archives/2023/10/index.html","652712430e083d4d7ae850db05d24b10"],["/archives/2023/11/index.html","5dd8f3364c3f64b7e269346d48f7d3b0"],["/archives/2023/12/index.html","d3a6daffcdb354ca9918be8f8763be51"],["/archives/2023/index.html","f69fe93ecdce856872398ba59424aeda"],["/archives/2023/page/2/index.html","f69fe93ecdce856872398ba59424aeda"],["/archives/2023/page/3/index.html","f69fe93ecdce856872398ba59424aeda"],["/archives/2024/01/index.html","47ba8c7831b718ea1a4cb3edec3cb145"],["/archives/2024/02/index.html","296c4fbbbc7d4ea49c0e16a5926e0507"],["/archives/2024/03/index.html","6b4c9cda9833defdb9e1b85786408eb4"],["/archives/2024/04/index.html","0fbc362020c3c4000bffd63753a29d8f"],["/archives/2024/index.html","581588ecfe1957d0595a017f6860fac3"],["/archives/index.html","05bfeb91bd60424248156d6c85196342"],["/archives/page/2/index.html","05bfeb91bd60424248156d6c85196342"],["/archives/page/3/index.html","05bfeb91bd60424248156d6c85196342"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","f881d6eb4060e809b1971b5f96671972"],["/categories/技术/index.html","5b3dc79fae12913a8c8bb4a42f5d5f5d"],["/categories/技术/page/2/index.html","f8f8ece2ef6f4683e5ecc08a4091f75c"],["/categories/资源/index.html","c75c3fc095df77d2ff6f7e3755fa1591"],["/categories/转载/index.html","05b1b74d4f95d7037093f5f141a4f291"],["/categories/随想/index.html","77bc426da7f1d048097033cc28859109"],["/comment/index.html","c4c15b28c33d0b339b3f6c02c4f2909f"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","c561bc1a22233fbba97be91d619c0149"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","158e5c323294dedaef26a8cd352e3471"],["/index.html","f7e378675ef65883bfe17a042fb87bd6"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","6656023590ec9f0cd009a87d777ed2b9"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","d4644dd97af56bcba1535bd6a35a7e40"],["/links/index.html","b1f7d87b7f179e99f82a48f41924eb32"],["/music/index.html","8ca3f445d9b8aad463837d0dc1aa48c7"],["/page/2/index.html","5014e52980a266f7a1670bf0b5402bc6"],["/page/3/index.html","afeee5e816e92595456be8bc640f3284"],["/rss/index.html","ca5b241d3cce72a839f1fa70db014565"],["/sw-register.js","21e3e775ef33afbe0bda4319b9cf536f"],["/tags/408/index.html","3d60191ba40706fda2585a4bbea199df"],["/tags/C-C/index.html","6204e92f95f10d0576f58958e8793d42"],["/tags/C/index.html","cf90a957f699072d7cfe6f435e434ba9"],["/tags/CPP/index.html","5712be73084200083e9305355c6d9f13"],["/tags/C语言/index.html","2625f0728e851baee76c264e8704e0d4"],["/tags/Java/index.html","7c2765a44f9208c172d161c2d3b515c5"],["/tags/LeetCode/index.html","4a0a912e586261a36679103ca26fb1b5"],["/tags/MSYS2/index.html","dd4df9ce157027adba654992c7007fbf"],["/tags/Note/index.html","d65e9ff90b9fe3c5421e589667c4a845"],["/tags/Scoop/index.html","823bd4e69dfcebb6d49ca7e93adda9b6"],["/tags/Swing/index.html","6c1195cd6c7388929e38f9c0d4248b10"],["/tags/VSCode/index.html","a0d6ab3d5fe043ec007dfeffe070bfc4"],["/tags/blog/index.html","27786ee72815642d367d2353b20aa813"],["/tags/builtin/index.html","e00fd7b52ceefff68e555f8d1ad0e70c"],["/tags/index.html","6918eb72c79226bb9f49c23d59356cc8"],["/tags/vue/index.html","d11afef60c5ebbcb97be5a414cb446a1"],["/tags/web/index.html","f1a1206d56752c7b35b4d7a706b585cb"],["/tags/划水/index.html","9049170b0afb63165f5200e891a7f0f4"],["/tags/包管理器/index.html","838374d35f683b95b07b6bd57a3f601b"],["/tags/悦读/index.html","c335411337940bdc5ab7ff513a2e7969"],["/tags/操作系统/index.html","9076d892394085a114ddac0892f4efbb"],["/tags/数据结构/index.html","6e3a3ae054148de530129daff0c9a812"],["/tags/数据结构与算法/index.html","7b01b0d0d1a417f3a423983c0b2cc825"],["/tags/新年/index.html","54292a6ae3d9a725583cbc5067ac20a5"],["/tags/杂谈/index.html","6611978490652339bfdda9d34456bf27"],["/tags/深搜/index.html","9fdaa23a1b97320fbacbeaae817de874"],["/tags/笔记/index.html","f543c7f6492577ae6300e32cb8e52bb8"],["/tags/算法/index.html","1acb2d0fd03cca1c9d4d6451b92bfcf5"],["/tags/线段树/index.html","631de9ad6918ff17632fc2c9b93eb2e6"],["/tags/萌新/index.html","73329988311eb167c6460525a0de642f"],["/tags/计算机组成原理/index.html","9e2a37dd23e61c89d61988fce68c0ba7"],["/tags/计算机网络/index.html","9b911e211ad65afb48006679d253baef"],["/tags/质数筛/index.html","65bbe3ec8e50ce757e19a81adbbd1889"],["/tags/软件/index.html","fd68ca52ed1c6a4c24c7bb59547eb822"],["/theme-sakura/index.html","c376cfa6b2b8710534569f115f812d36"],["/video/index.html","0a8dbf75b5e0b29a12e2d9377f05a9c8"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
