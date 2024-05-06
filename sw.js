/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","35274a74246dad9d1567c863a6adf213"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","0fecaffb8a26c4dfa46a27ce118d89e3"],["/2023/02/06/C语言链表/index.html","d76bb18feac86ff91795ca01b6de2678"],["/2023/02/06/书籍资源/index.html","bad2b0d32965a9b553dd213971ea3c54"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","1bcfe99ef6e92e9190500e732cbc53c2"],["/2023/02/07/为水而水（笑/index.html","2184a9d5f6605f5598369bd0f7755a82"],["/2023/02/08/洛谷主页源码/index.html","91519aeba5032cb9aa1d0f5b59beaf66"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","8978836ec964083f57e85fa328a2ba18"],["/2023/03/09/Web前端笔记-Emmet/index.html","87c9e24ccf5f3aa3c6209b178defaf49"],["/2023/03/23/gitalk-评论/index.html","1a61efdad2967c41f26796ad20e03e57"],["/2023/04/10/用C语言实现字符串全排列/index.html","3f298a92f8b1d90a2e6c596a50c6babd"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","b32cc94d29aa0e45b2316d2d8a99ca22"],["/2023/05/15/C语言基础排序-demo/index.html","0f2eaeb38feb1480de2be416bf85e51e"],["/2023/06/14/闲着没事干/index.html","c141fe20bba49b0ba342efd41df30154"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","950cb6ed045622906cf2213f30571baf"],["/2023/08/01/javase-note/index.html","2de3e7fc81bfa8a0ccd8c067f91c103b"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","4648af2f1c4ff86d83eff7f45c5b6df6"],["/2023/09/14/vue-pure-admin/index.html","b2f5457a4832c871754a0195910ef1dc"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","e6af56bdbc4a5f07887450d7aa0ca698"],["/2023/11/28/C-CPP-the-memset-function/index.html","1ec1a37004fca4aedee33703b7ddffdb"],["/2023/12/13/javaSwing-DynamicClock/index.html","d3c1f64b1afecca7d3d2da6340034a7d"],["/2024/01/24/builtin-系列函数/index.html","f33e54eec29a9ae824ce1c9ef7bbe9a8"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","a776b6fefe2029f3c29bc2e19ea8d56f"],["/2024/02/09/新年快乐/index.html","31e94810459df8e75dd50f9b950402d1"],["/2024/03/26/408-route/index.html","2560af11d08b409f00efb1555b2ffcc1"],["/2024/04/07/转载-线段树专题-xyw813/index.html","ba610753a35f3c9d103127265224febf"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","a5f53202058b05cb084e738cca94e405"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","d1721a98208e76ab5f690bbe8785988c"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","f387bc51a2eb9f6888a998cc6d776102"],["/archives/2023/02/index.html","2bfd994d2cae6e2108d527fc0e3aec68"],["/archives/2023/03/index.html","0100481391caf0707272640bc1a56388"],["/archives/2023/04/index.html","dfab25c8d95c2f427979e00df641318f"],["/archives/2023/05/index.html","e83353b8769a29402ac0a507c732ff4f"],["/archives/2023/06/index.html","fb1c60a7ec40a1e322008f833a96704b"],["/archives/2023/08/index.html","83bf4eb65fc90eedd14b6e8bd45704fa"],["/archives/2023/09/index.html","231e610b327a387f6681d1792745944a"],["/archives/2023/10/index.html","c079b78ff5371570e14e3c36255b7646"],["/archives/2023/11/index.html","1813b82ad6ee9f4575c38139fa277e3a"],["/archives/2023/12/index.html","e0612414f7b233398866dbb4b3cba95a"],["/archives/2023/index.html","12a93c832f11a93448135ed167137c06"],["/archives/2023/page/2/index.html","12a93c832f11a93448135ed167137c06"],["/archives/2023/page/3/index.html","12a93c832f11a93448135ed167137c06"],["/archives/2024/01/index.html","685ac356f596687c2b8d2aac115be503"],["/archives/2024/02/index.html","3f54a3286cd63b70d7226417d5322dc9"],["/archives/2024/03/index.html","0b1c57aa6c91cb637347d15be772fa47"],["/archives/2024/04/index.html","5d3ab2b31e5d172c86b0132b68475c39"],["/archives/2024/05/index.html","f502195e99b32dd7be2115888fc91588"],["/archives/2024/index.html","141f758ad9f3efa8b1eb558cc87288d5"],["/archives/index.html","37d1c78fb1f214b2e8e73598a4594734"],["/archives/page/2/index.html","37d1c78fb1f214b2e8e73598a4594734"],["/archives/page/3/index.html","37d1c78fb1f214b2e8e73598a4594734"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","84e10266804d619ca7039bacfcc3d434"],["/categories/技术/index.html","edcafb35eeb559c7f393b20fc25984bb"],["/categories/技术/page/2/index.html","780b92a9c3f659d41cf48c74630bc680"],["/categories/资源/index.html","6632cbfd5029755570920126931d8250"],["/categories/转载/index.html","5f45af1dedf831606b82d2f8991020a6"],["/categories/随想/index.html","27dfcdfefbfc6e2ebab02e8c56979ef3"],["/comment/index.html","793c4f51ae64d3fb50ddff2f7718ebc9"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","2fbc4fb49c34d932e6484fd30ae73d2b"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","3279f3549b457e67acf633d4da2dd04b"],["/index.html","ec5353d0fc47d816be06b12a693289eb"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","02841582cd88f16914184c13044d98d7"],["/links/index.html","0e6eb5c51b1308f5903313dcbfd32efb"],["/music/index.html","4a8cd13676f2901f0194e8edf8d05735"],["/page/2/index.html","2c388184ebf61be5608b25ed5b1786c2"],["/page/3/index.html","63b3f8b402417815d6f29eaff64e285a"],["/rss/index.html","55a237d3667275416a7ba936b0209535"],["/sw-register.js","ef51497b267979588f83ff2cff4f0934"],["/tags/408/index.html","275610598ff8308558b44369e5a76296"],["/tags/Adobe/index.html","7881c2f42881992832fe6df59ba2a650"],["/tags/C-C/index.html","44ee304d771a0dbdfab1bdfa3b9ace50"],["/tags/C/index.html","48c872f9d995eed45ebb2360d02df641"],["/tags/CPP/index.html","3f2cccf17bfabd001bb3e65494efdbe6"],["/tags/C语言/index.html","45b3aed8ed5f174d28285e055e34a06c"],["/tags/Java/index.html","b95b67c0dade624e745c302e7bdeb0ab"],["/tags/LeetCode/index.html","51551f8cdb07990e1e5472569568fde8"],["/tags/MSYS2/index.html","19c160a21de7a1e0bba3e0360b157216"],["/tags/Note/index.html","0bebd002e6d033b647700bc199fe4d54"],["/tags/PS/index.html","33cdd2dee9505a10e0b5a364a5bb8025"],["/tags/Scoop/index.html","9a66c2e79b3e76db38ca442f34ff8cb5"],["/tags/Software/index.html","d38faf1a7b099dd29a88af36af4142a6"],["/tags/Swing/index.html","d97b4b8ca7c438f2898ab45393baf83a"],["/tags/VSCode/index.html","b430539603766833289da2562428d4b4"],["/tags/blog/index.html","55ac60cfc77e18d8d8f5da53d34290ef"],["/tags/builtin/index.html","a5b8c76abca20ea1e9d00038c6367030"],["/tags/index.html","7b1488a25f4d35886b06beeccb23e986"],["/tags/vue/index.html","d0b7fa7270845efb953852e6b1eddf7a"],["/tags/web/index.html","d9c2cb50b80a1bfd043729f375ac9b4b"],["/tags/划水/index.html","c68fc5dbda009b0aaf71b496478856ac"],["/tags/包管理器/index.html","63eb2d311c578ceb356a33a71dec4334"],["/tags/悦读/index.html","1ba84f18b03bb9e9aa02889694eab942"],["/tags/操作系统/index.html","051817dbd6bde6a9b853a6a5f614744e"],["/tags/数据结构/index.html","458d6cef0eeb549d50deee09f9287d4e"],["/tags/数据结构与算法/index.html","7a759f2c20d8ba21b8d5fdfd581c1fce"],["/tags/新年/index.html","a25f16e1d264d3158ca3da6f1cf207f6"],["/tags/杂谈/index.html","49787123eac91ad49691287943e855f9"],["/tags/深搜/index.html","ace198023f09ee9ae6b824d2a8924d40"],["/tags/笔记/index.html","f74dcba6e53db76ae840e0e0cfa30ec3"],["/tags/算法/index.html","07f2bc6af0efdf2f0e13c65edf2bbba7"],["/tags/线段树/index.html","8fc0f4b2d8f3808f2f6a5d005bf14833"],["/tags/萌新/index.html","299f0239f721631a7d89d6b6a66ebe83"],["/tags/计算机组成原理/index.html","327f96fd3975a197c22e3074325aa0a0"],["/tags/计算机网络/index.html","034614ef2c8452a3160a9b4def8b62cd"],["/tags/质数筛/index.html","3565375a0958a1606d241a36c857c707"],["/tags/软件/index.html","788bbb7412175815d4b118998960118f"],["/theme-sakura/index.html","05e934955a53cdf1516fcca940c51dea"],["/video/index.html","470ccba8fbf5a716deee1a5a419e01a3"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
