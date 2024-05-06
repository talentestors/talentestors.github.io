/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","27f59100eccea51a07c8561d83a75dd3"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","58cb5f240ebb3e5099a054119f4406d4"],["/2023/02/06/C语言链表/index.html","23f099ca7979aee6a34ef9ebaa3e1287"],["/2023/02/06/书籍资源/index.html","89c934937ec815b8edea2d0785b37875"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","1236b43450984362f5d6d647032c9359"],["/2023/02/07/为水而水（笑/index.html","b5532253199eb949130c89971c7d4a34"],["/2023/02/08/洛谷主页源码/index.html","e529376bcd3b1d6298e8d13f952d6356"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","2741d628bb5da40c9fb4114e8b97b0c2"],["/2023/03/09/Web前端笔记-Emmet/index.html","b8fba5af22347f902101bfb4ac093465"],["/2023/03/23/gitalk-评论/index.html","5e31f9f1b8f8bd4ecb42db23772ca810"],["/2023/04/10/用C语言实现字符串全排列/index.html","b3fef34a1d7356c6a71c691079e1fd59"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","2b523107c4a02d9f584b1ba95a23be2e"],["/2023/05/15/C语言基础排序-demo/index.html","0bc9d0a9d5ebcc3c5edbd254828c1981"],["/2023/06/14/闲着没事干/index.html","b9f46a57603ee23a3f902a6be6247c1f"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","a3ec8e255814a541d2f6c544b025d09d"],["/2023/08/01/javase-note/index.html","a98972c27776e2ce5f752e96a6ba2759"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","1dd7216f0ee50a5a2d0aa3e344acca2f"],["/2023/09/14/vue-pure-admin/index.html","9bc37bb23e115284217329845f0b44b9"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","3821be130887a97ff47af1d50ad7bb8a"],["/2023/11/28/C-CPP-the-memset-function/index.html","093c227bd243c90a05a9439a7e77c18d"],["/2023/12/13/javaSwing-DynamicClock/index.html","218f4e67c29cc6e4506ca459b52922a3"],["/2024/01/24/builtin-系列函数/index.html","dbb101675645806d2dff450ca023be04"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","80d78e460019d90ed8b29305d0d3008e"],["/2024/02/09/新年快乐/index.html","23bd0c207c8272bdf8168c22bcf4780f"],["/2024/03/26/408-route/index.html","54cb356a8ec97c005758e94802716325"],["/2024/04/07/转载-线段树专题-xyw813/index.html","e23479b2450f7c8f358810369c24b030"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","d9d890841f6ae99f3ee9486f6c2a6768"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","e92806b4bdda890bfec7ea1ee45b05a8"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","4f461e0c0f8df4462ba08f7d5fc9d12f"],["/archives/2023/02/index.html","8750d269c53faaec9b8fef505fdf2e08"],["/archives/2023/03/index.html","58ec97bed068de8fe95181069811ae03"],["/archives/2023/04/index.html","1cb3a8c1c3ff19a4fd922e99ec90776c"],["/archives/2023/05/index.html","7ed9a01a44f9ab366760be1eb03cea08"],["/archives/2023/06/index.html","e89a615c87dc285626e73edca5f247e5"],["/archives/2023/08/index.html","1a9dff8acedff5abce8ae97407a8acf7"],["/archives/2023/09/index.html","b7e9116ef76be3d1bd48bd5d13822058"],["/archives/2023/10/index.html","1d9f2967de9af29f0eb01bae7511ae3d"],["/archives/2023/11/index.html","5669f858bdcc1c79d24237941bdddfb7"],["/archives/2023/12/index.html","71f2d7b59c06801770067bb686b31e5e"],["/archives/2023/index.html","e8c36c48adf172ed04674423405f73d1"],["/archives/2023/page/2/index.html","e8c36c48adf172ed04674423405f73d1"],["/archives/2023/page/3/index.html","e8c36c48adf172ed04674423405f73d1"],["/archives/2024/01/index.html","a5ff865c36da36fc209f6a4403d541a4"],["/archives/2024/02/index.html","39155fa0e554befeead67f07289ee563"],["/archives/2024/03/index.html","908a9bec8a58e796f35cc0fb98ab51b9"],["/archives/2024/04/index.html","dca4a150bc832ee8715e96e4352e80d7"],["/archives/2024/05/index.html","1026888110f1d3e1acd917f61a727b60"],["/archives/2024/index.html","da1d3c904fedc438f0e6345e0694abbc"],["/archives/index.html","8ac2784b634a418d3da15dcff9cbe092"],["/archives/page/2/index.html","8ac2784b634a418d3da15dcff9cbe092"],["/archives/page/3/index.html","8ac2784b634a418d3da15dcff9cbe092"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","7ed8f4346b9864670c13c3342c009542"],["/categories/技术/index.html","31273f733890c217aa5e0228054242f7"],["/categories/技术/page/2/index.html","3ba16f242c421185854ad08516f34836"],["/categories/资源/index.html","9f9e4e60d8be593997c35f7d846f7536"],["/categories/转载/index.html","899b42e9f0d7be00451d2ed0edd60eba"],["/categories/随想/index.html","1f5928fad6e56d1948c6ce1bb6f07c0f"],["/comment/index.html","89714fbd7a74b2b5723cac10091d1515"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","eeaa4212d2158e9e989f017ffe7522d4"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","9ff6b6c6271f27c1f824624c634a4fe2"],["/index.html","874ddd15481e3fa2556b23995a5fca15"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","5725a96f96ce9eb2919bc82cef4cc458"],["/links/index.html","9baebf81b22247cb71cf0a63311b5a64"],["/music/index.html","12dd7ec818eb8f02351b3e6630d3a283"],["/page/2/index.html","0cf6bd4b8a72880eae5ea30b72b2bc9e"],["/page/3/index.html","3278fe2e9633f3397221dba6bb2f1a08"],["/rss/index.html","12e7c272bc6070fbf18a1342dc7d8bcb"],["/sw-register.js","7c9ed8e29aa8b5dc29ea9cfa8375fabf"],["/tags/408/index.html","eb5d101cae4c7bb0ac67eed7a75d5d6a"],["/tags/Adobe/index.html","0ea523a96d40e054f9cba9cc58d0884a"],["/tags/C-C/index.html","3db5a3f9821200a6e9677ca9f722644a"],["/tags/C/index.html","632daa7c8721d5e2d51e7685733caeb0"],["/tags/CPP/index.html","9661f687568899e4c22a14fac291f641"],["/tags/C语言/index.html","fadfc87dbd8e4776274bad90c574748d"],["/tags/Java/index.html","596994944aa20a7e53d98ed84907f943"],["/tags/LeetCode/index.html","45542e689c7f063894bcfd055e91abca"],["/tags/MSYS2/index.html","573433545c110f316af34a6610d643ad"],["/tags/Note/index.html","d0ba4a7a34259ba336ffc3dbf6a976e7"],["/tags/PS/index.html","c5bc25180cda96c01b26f1735a003c7e"],["/tags/Scoop/index.html","08897e5934dc0fa5942b8e25db88e3cc"],["/tags/Software/index.html","78d68d85a56aa45a07f160ddb519c05f"],["/tags/Swing/index.html","4b35fe744555ce748dd8f3ca92bb55a9"],["/tags/VSCode/index.html","db20676122ae458c4c022bdceee3ac53"],["/tags/blog/index.html","62791ce6601bffbcde99082bdc16d0c7"],["/tags/builtin/index.html","59e899cf2896d0bcaf51735c1b5c2339"],["/tags/index.html","d24872f585a9c7340ee2ab38e5117d90"],["/tags/vue/index.html","7c4a15ce349e31a6d298ee1a9b59ea91"],["/tags/web/index.html","0f345bba9f4376f94b70ae67a233c6fe"],["/tags/划水/index.html","b01c0aba305db290462b5596b94398ad"],["/tags/包管理器/index.html","2cdbac3252394a11f0ec84eae3fb1841"],["/tags/悦读/index.html","9fc6ff99f212a6bb25415c985b145827"],["/tags/操作系统/index.html","c7138104c2911d898028c1a739f65b99"],["/tags/数据结构/index.html","9ff9628e7fbe271fade083e75ad2f654"],["/tags/数据结构与算法/index.html","7d375e5d9f6e4e9023023f102482cf3f"],["/tags/新年/index.html","9b8e0301ecea7e827fd6dd2d44ec2ede"],["/tags/杂谈/index.html","f12ff39b7cdd97cd70ac9550f40e8419"],["/tags/深搜/index.html","197cad235244f5865c804e5262b47dce"],["/tags/笔记/index.html","3f7c316f272bb9df794e63cc6907532b"],["/tags/算法/index.html","cb92861aeb6656b479813ef4a2cabad1"],["/tags/线段树/index.html","d786aad530417cd8ebfdd02976fbe2e0"],["/tags/萌新/index.html","dc8fe9d375546facee0d6e092542e477"],["/tags/计算机组成原理/index.html","d07e06122b26d7d20830024838b7c97a"],["/tags/计算机网络/index.html","3201da0013211ae06f0564c289708189"],["/tags/质数筛/index.html","b4bc43acc910312c53b6169a1d6697dc"],["/tags/软件/index.html","9bf563e2b28ccb5bfd771f58d9dd0279"],["/theme-sakura/index.html","db86af93932a85748b63b8bd518f4239"],["/video/index.html","0f80c899b33e2bf929d953194e4a422c"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
