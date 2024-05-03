/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","06d1bda5aa927fc53fbeae29d50617c5"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","48f006d5c2dc1cea96ab7b6b47fd856b"],["/2023/02/06/C语言链表/index.html","18d6168696e1ae148e1d7522b33e3bba"],["/2023/02/06/书籍资源/index.html","48300f70c586117da23c6e029423ae37"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","4a71b75abbf8a180f151f062562f0cb4"],["/2023/02/07/为水而水（笑/index.html","0412f01bf6e165f18c65c465437c0cc2"],["/2023/02/08/洛谷主页源码/index.html","16f7427be57fdae1de733370ce09be25"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","d8ef325e63ad25c36d1338f10d5ae00b"],["/2023/03/09/Web前端笔记-Emmet/index.html","455a615410233769f4fb3e424a8b3220"],["/2023/03/23/gitalk-评论/index.html","4bb05452ad9936a4ab14a68ecd6c3b5e"],["/2023/04/10/用C语言实现字符串全排列/index.html","064222a745d000fbf74fd1b458f40fdb"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","126dfd4def162c4d3cffbe5c40501796"],["/2023/05/15/C语言基础排序-demo/index.html","e7a805cb71246387d7c157ba6acaac83"],["/2023/06/14/闲着没事干/index.html","d3fe7ac58e2f1a93506428014a30e7e3"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","ee250fafa6573926577aa9e3d67848ce"],["/2023/08/01/javase-note/index.html","76b10965018f0bec3237cdf4074dff04"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","7888cc7210be19820412ae0e97b18651"],["/2023/09/14/vue-pure-admin/index.html","85173ab05444c23eaed9d11852fefaf6"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","1848bcfcf25a46b6ffdbc76c9837dc7a"],["/2023/11/28/C-CPP-the-memset-function/index.html","0c986e776aa5229af45223d90f8a769f"],["/2023/12/13/javaSwing-DynamicClock/index.html","0933f281d739c0f1ed0054dcbd6f5150"],["/2024/01/24/builtin-系列函数/index.html","6d16199ef4bf6ffd51c13c0526c3ca6a"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","c10d3b03ebf335bc4c13abf27aa06fa9"],["/2024/02/09/新年快乐/index.html","f6f2abd7a0b058422f29fb657946f020"],["/2024/03/26/408-route/index.html","44aa27f0a8f8078df4fc51db8eefb0d0"],["/2024/04/07/转载-线段树专题-xyw813/index.html","4638c0103a9c76d5c0a5674ed47ffc05"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","08fb17effa3473e83261fc5d9dcb9e2f"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","1c7699a66f0ed93b3fe82495b31390e0"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","327f61158f9be8fb93d21d90a202082b"],["/archives/2023/02/index.html","d54ef11e3b3af99a7c114982e10ea0df"],["/archives/2023/03/index.html","22c1fe0ce9fcf5f0e7ab12779a0bc862"],["/archives/2023/04/index.html","e494d0fabe7d6e1592cbb3cb12d171a4"],["/archives/2023/05/index.html","ce5c3a279e3d76b885e9d037eb512379"],["/archives/2023/06/index.html","f1f3a6a992e3846128fbb73b00ecc082"],["/archives/2023/08/index.html","b7d7f2094a40dfd1955b1b8873cd54ee"],["/archives/2023/09/index.html","7c5db90d2a214dce5a88d1c61e5d8317"],["/archives/2023/10/index.html","059034471121e313fdd27b6424d764f4"],["/archives/2023/11/index.html","981b2272b25ffd142be1fc0ff8cccafa"],["/archives/2023/12/index.html","5f3773181f744ac95313443e97f9efec"],["/archives/2023/index.html","8d43c3f8db4dde433f94409d44a58c74"],["/archives/2023/page/2/index.html","8d43c3f8db4dde433f94409d44a58c74"],["/archives/2023/page/3/index.html","8d43c3f8db4dde433f94409d44a58c74"],["/archives/2024/01/index.html","1e43d610db320a538fc19edd7f76045f"],["/archives/2024/02/index.html","f7505f1a99630e657bee198324d106fd"],["/archives/2024/03/index.html","d7c2d145ced7d3e8d31f6f581213ada1"],["/archives/2024/04/index.html","583823a83a42126b133e2fe103172875"],["/archives/2024/05/index.html","8be8c9fc397bca223b53de6b2e62fe11"],["/archives/2024/index.html","abfcbf3d199fdebd8fae229e8f76caee"],["/archives/index.html","8215f78a2dca3e124b33309c81e39eef"],["/archives/page/2/index.html","8215f78a2dca3e124b33309c81e39eef"],["/archives/page/3/index.html","8215f78a2dca3e124b33309c81e39eef"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","130cb5a93594a2132c823c9042937075"],["/categories/技术/index.html","6cedda37a64a379ea83283140cd15b02"],["/categories/技术/page/2/index.html","8803d4dc81f9fa0daf273b0c7a40fa22"],["/categories/资源/index.html","d782f5cd4bba13dd29738c1850cde730"],["/categories/转载/index.html","1b04997087387d7ad2c1fcbb27d36d5b"],["/categories/随想/index.html","80427734b72f056bf2ef815793c41efa"],["/comment/index.html","8d511793b30cd67e10f2266c66f5674e"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","0b3b26b386f515a89dc5ec2ebc8742ea"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","877b8c99a9679f0a96d1a38638a3693b"],["/index.html","4797eafbb68ae16b67f1bf36d21a5845"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","b91a2751227130faa34f3938f534a23e"],["/links/index.html","d9dc004f470d6e78d235669035fb04f3"],["/music/index.html","7b2f5059828e4c7f610b6ef06860bad0"],["/page/2/index.html","43707c66eecbb5858724ed1201cbf7ab"],["/page/3/index.html","917efa9a947ae5beb834b747a6e794c5"],["/rss/index.html","7c2c430669ee5774ccdbc9d02a45e7ba"],["/sw-register.js","fe825eae5f40f3c6058337ef6efa459e"],["/tags/408/index.html","ba8e91439f077f8a840376100a504584"],["/tags/C-C/index.html","f381cfc119aa75f4cc81195a460f395b"],["/tags/C/index.html","49e5c4a007ad9c01a7afb3c2c63f090e"],["/tags/CPP/index.html","198c92ddf34c721a1c0c040f7185dd3f"],["/tags/C语言/index.html","157cfe54cc2e361f4df32b4144d8ac73"],["/tags/Java/index.html","7d8dc59869bab252ba153db415574b3e"],["/tags/LeetCode/index.html","272345b353eab592e1c14664481058d4"],["/tags/MSYS2/index.html","f3039cbd9f03fef3f717aa7ae5ea84b2"],["/tags/Note/index.html","7e7051f0c727e69c5d885d632e9e5882"],["/tags/Scoop/index.html","dbe998c13fa4db6138eb76e568f509d6"],["/tags/Software/index.html","eb310b0136e1808a5ffef0c8a0ad07af"],["/tags/Swing/index.html","cd7b29a2cc4488cb6c650c37e6129d16"],["/tags/VSCode/index.html","2bdc7f7692301f7ee8fd9f4df4144137"],["/tags/blog/index.html","bd2b1a4983c9d9cf20c6d254f0c5cc18"],["/tags/builtin/index.html","0be4c5c7982956b6de89bb53a718da19"],["/tags/index.html","3fc2ab21cec1ec069bf977bbdc492ee6"],["/tags/vue/index.html","3d4148c7638d1d90b92db299189a96a7"],["/tags/web/index.html","78e4b7f2cc0729ff87bfd42154c2ab87"],["/tags/划水/index.html","a3a0a087fd55f09bb61cfc031a175a3a"],["/tags/包管理器/index.html","9a0be4a16eba5431261f595e4d5e1842"],["/tags/悦读/index.html","a45f7e473876fadeedddabfad8a481ed"],["/tags/操作系统/index.html","c5646b0453b4ca3de8aca7b80d7bb907"],["/tags/数据结构/index.html","4b6020bc615afa5aa9f4104aba0feb78"],["/tags/数据结构与算法/index.html","783327d2395b4ff8659a8a2f5641cdb1"],["/tags/新年/index.html","66a629f22b172762b54772593b32532f"],["/tags/杂谈/index.html","a7820bb5eac916aca9d124bdff5b6ab7"],["/tags/深搜/index.html","3e7c5b1a0726fdb7c1f8659c56ca73cb"],["/tags/笔记/index.html","6cec17ef04e74ea4d6ce2b2f564f0504"],["/tags/算法/index.html","60e0349106a863aab81252f695ef462c"],["/tags/线段树/index.html","8dee0ad21a4950fb1a79a648bffb9c1e"],["/tags/萌新/index.html","4d2c4a07448317b354a25125777e0dd1"],["/tags/计算机组成原理/index.html","0cf0151cc6a6a230e6e5c2a1b0a77a5c"],["/tags/计算机网络/index.html","9b3f7ce99e131a5e2feea9f7dcba8a88"],["/tags/质数筛/index.html","8269458c793ee84bc047aca5a7fa600b"],["/tags/软件/index.html","f86be57d3f83f55c30f2ede56df479f8"],["/theme-sakura/index.html","befb935b4504433708d0eecffd312236"],["/video/index.html","032317adcb0f29c2d762089200905f03"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
