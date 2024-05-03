/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","19b1c3bca3cac9254718b228d0b1195d"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","0d6eeffe309bc3492da761807be0b9c4"],["/2023/02/06/C语言链表/index.html","627db2906fbdddbd863519007172baad"],["/2023/02/06/书籍资源/index.html","1d23036aa558afb44c401b9fe9618dd5"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","21e644920aad635ec6f48140aeec6290"],["/2023/02/07/为水而水（笑/index.html","f16a04dd8d7ada55f372b76cff297fa1"],["/2023/02/08/洛谷主页源码/index.html","e8192a0fd8adbe3100bb81ab255299e1"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","9806a9504022efb60ff55b92870207e6"],["/2023/03/09/Web前端笔记-Emmet/index.html","a5f978ac4c1ac38e3eae01c1c6e1db3d"],["/2023/03/23/gitalk-评论/index.html","5db81d757743c023be457dd03880b14b"],["/2023/04/10/用C语言实现字符串全排列/index.html","40216b19100538d4faf8d8e2423311de"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","3acad4e14d13385c5d6e90bab93c5778"],["/2023/05/15/C语言基础排序-demo/index.html","0a67fb101809a9fa4ec0a987e443a31a"],["/2023/06/14/闲着没事干/index.html","1159bb03e9319f8221d2fbc9c968de58"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","863ab315c874c36708db4911550a9579"],["/2023/08/01/javase-note/index.html","e07978cbfb15ed827d3e61b50799c156"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","6147257934bfd4dd575188505a687cac"],["/2023/09/14/vue-pure-admin/index.html","1ebb7631b024c96c72a06ad21057a5f3"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","5379e679b7df7df0c427518c24ffc0b5"],["/2023/11/28/C-CPP-the-memset-function/index.html","590727979a85ee51c36c5d3ed122f040"],["/2023/12/13/javaSwing-DynamicClock/index.html","2a111ff0568a3a9ca9240d0e4c5dea01"],["/2024/01/24/builtin-系列函数/index.html","a3056969ade7afbd1e6a41d94d9692c3"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","3850e96d1f1faebbf5c1a2a59adf2d9c"],["/2024/02/09/新年快乐/index.html","3c3fc1c58cd8a14d49e57abde138a777"],["/2024/03/26/408-route/index.html","3373a44dea5f72a34737a897aa8e123b"],["/2024/04/07/转载-线段树专题-xyw813/index.html","96bbc59633d18b6c9a47a3a7462c4fdc"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","d1cd322262884d6e1f37185f63371d20"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","a2dd1d103afc16612a5e34fadb4dcfb4"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","b771d9c9187979a2866d30f05a763897"],["/archives/2023/02/index.html","e7a7a7090004af5b61837cf5de3dc8ab"],["/archives/2023/03/index.html","e0738b6d7adc332c640a45d0391e85f4"],["/archives/2023/04/index.html","76dc23f1fb71fb437e0bcc7bc7d42345"],["/archives/2023/05/index.html","5c317b12b6645a680ff3de1442e590fd"],["/archives/2023/06/index.html","6ea72b252b1f11e4a2d40506ea64279e"],["/archives/2023/08/index.html","25bbaf68ac5a423f5250196700d52f6e"],["/archives/2023/09/index.html","1f394371920a9eabae4b321963e6b968"],["/archives/2023/10/index.html","4b97da5336687ec3d620f7175d1757cf"],["/archives/2023/11/index.html","d3062bd197217f6b49253acc7f769021"],["/archives/2023/12/index.html","d7ecad7c6ad52565ee145132ad42870a"],["/archives/2023/index.html","1df0f12de9ce93c68f0fa876904f0656"],["/archives/2023/page/2/index.html","1df0f12de9ce93c68f0fa876904f0656"],["/archives/2023/page/3/index.html","1df0f12de9ce93c68f0fa876904f0656"],["/archives/2024/01/index.html","e0c0e345dfd5834aff0bb0d63fe96270"],["/archives/2024/02/index.html","e21295bfbe088765cd79437ad1f5d849"],["/archives/2024/03/index.html","2fc47aefaf9b6970ad8cd6d555aeecd1"],["/archives/2024/04/index.html","3590eaa9f826af7ff835389b5642bab2"],["/archives/2024/05/index.html","62149f4ec33f90f7e8babbb953651729"],["/archives/2024/index.html","23f4332d8981e1c76e2958241a204a29"],["/archives/index.html","4fe8291bf83966ac945ab28397f929ed"],["/archives/page/2/index.html","4fe8291bf83966ac945ab28397f929ed"],["/archives/page/3/index.html","4fe8291bf83966ac945ab28397f929ed"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","f296503668dda5f381dfa62f4ef778f5"],["/categories/技术/index.html","e2320141d31dd41ba9209a24d6f82198"],["/categories/技术/page/2/index.html","0cb41d113e671241c05eea4024602c8e"],["/categories/资源/index.html","a65032ecd3fac729542f2ebefba7c66b"],["/categories/转载/index.html","54b8a1bf10df0126e1c28cdd8e91441d"],["/categories/随想/index.html","52c8c1ce9aceaa400bf43ec31b7dcf44"],["/comment/index.html","7d904744e339fa28d528643fd695d3c7"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","3a747b6ac78d18c0b5ed154652006a40"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","c6f35a0dd1b756e02197a6c18343cd94"],["/index.html","86b7c777893feec49129c7c89495e9f9"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","c4ea9f58796ff555debd467090b73e3f"],["/links/index.html","80f976c5a48a07886746c01a27b2c49a"],["/music/index.html","e44dccd405a524f95ae9c7007ada8439"],["/page/2/index.html","1a5dad3c9af64030064cc3ae3b037fd3"],["/page/3/index.html","301b024aa38026fb158577737bc7a548"],["/rss/index.html","5df16d09367b9d6432427516aae331f1"],["/sw-register.js","c699d5d4cd472f04e3502e3aab8245de"],["/tags/408/index.html","399c3c8c7b07185aefa8cfbeb79de6aa"],["/tags/Adobe/index.html","509ba5f553c28d929cc4ec0e7e559912"],["/tags/C-C/index.html","e623cc51d6bd2c9d268f44ccde166d67"],["/tags/C/index.html","03be2c03d02bb95b71ae4351f977abef"],["/tags/CPP/index.html","76793be388eeab8a205ca882c3af6cb9"],["/tags/C语言/index.html","fed2505b5aacc475107a6171383cac69"],["/tags/Java/index.html","b21b4cf99147076ad604cb11dfb89c71"],["/tags/LeetCode/index.html","d852bc038c5e1aaf2e068c75809b75f6"],["/tags/MSYS2/index.html","4b82f4fa24a4e45b6e6ad047c047abf2"],["/tags/Note/index.html","164173709cd4490720d36663c1034286"],["/tags/PS/index.html","5e4eae31ac218d09ba276bf3e3c0ed5c"],["/tags/Scoop/index.html","05365d7f210c33b8dba2869f8c1af257"],["/tags/Software/index.html","e39bc4089f76994c10f55111a28218ae"],["/tags/Swing/index.html","2485802fb31fe715eb55658ac15a35ec"],["/tags/VSCode/index.html","4aeb40d0156c8c627805fddf3ced544f"],["/tags/blog/index.html","21290a7bc29a8307354624416c4a70d5"],["/tags/builtin/index.html","998c37c7c1af0e8f58f6b6ec11e7fc7e"],["/tags/index.html","0ba59ba5290f65cf7f7cc9f7f1f8fa94"],["/tags/vue/index.html","221167178122628a75fe6d563a91d683"],["/tags/web/index.html","8ba16ab8b1b9b0055aa49585ffeb343e"],["/tags/划水/index.html","ee9e1ae37d57fe7f3aaaed6f75e93d76"],["/tags/包管理器/index.html","1ad4b88d56a4034a856390f9f2324044"],["/tags/悦读/index.html","9061455d1c3f5e0185fb8123f81376b2"],["/tags/操作系统/index.html","64d62f89cb85dd6f1ee56de189a3a9ec"],["/tags/数据结构/index.html","46015eecf4d17537642429f394a272a6"],["/tags/数据结构与算法/index.html","201dcec424445cb6f43da57485803a04"],["/tags/新年/index.html","89b8ff665c25b81c9b0f6a05faf61304"],["/tags/杂谈/index.html","c778f1abce86fbb222ec1328d3b376b4"],["/tags/深搜/index.html","990d9c9c24714afeddc40f41b372c1fe"],["/tags/笔记/index.html","4bc999db6b9664eb9e5af9e0f8b8a6e9"],["/tags/算法/index.html","7891d6a733d3b3c3873ab5616ef6dbcd"],["/tags/线段树/index.html","cec4747b51079629e85a442f85cfa6a6"],["/tags/萌新/index.html","6be7fdb3710df90acd270ae1828a322b"],["/tags/计算机组成原理/index.html","5f0a6f073f85d794bc84f753db42f671"],["/tags/计算机网络/index.html","2d46934eb55fbe1a6a1138f1730f4994"],["/tags/质数筛/index.html","80efad0c4529a3bd23915884c6de5c22"],["/tags/软件/index.html","10ef5b277744da20573882686a36ceeb"],["/theme-sakura/index.html","fdcb957a945f26d227cfcd6bd56fd625"],["/video/index.html","52b41660694b07cb27d3f10e74a17ffc"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
