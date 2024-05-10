/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","b04061d9db1c4eb79ceb7d1fb444fc79"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","e725ee5d5ae6716e2de440c8fc1c80d6"],["/2023/02/06/C语言链表/index.html","13f23ebf6d5bb32bccca4e3578d77681"],["/2023/02/06/书籍资源/index.html","2ab57b6763824caa421a547c43e94a3c"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","63824d67fb7b54f28e5777b934e1da5a"],["/2023/02/07/为水而水（笑/index.html","084176d9b0a2af7ee0755018ca63e5dc"],["/2023/02/08/洛谷主页源码/index.html","d5b56e07fbcd36f01fa3a4d508351a27"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","37f37412e18a0aca6e50db77f1897693"],["/2023/03/09/Web前端笔记-Emmet/index.html","229b982ac0e31b53d551fc18262cadc5"],["/2023/03/23/gitalk-评论/index.html","8264f70f1005a842c9fd6f32e62eeefa"],["/2023/04/10/用C语言实现字符串全排列/index.html","9a56755fbd1045e8ea88bd890c533b89"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","c00ad49d22ee9bc60eea1b815b9f4405"],["/2023/05/15/C语言基础排序-demo/index.html","de60aea6a9a15d2c3c078d1d07aec294"],["/2023/06/14/闲着没事干/index.html","2a04ef95849f8c5f89ddff953163b63c"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","970a76785952ce85ca3cad0137ba562e"],["/2023/08/01/javase-note/index.html","e2db899c5e79fc73868520054e556151"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","acd945bd7a2d901d5cb4b18b848aeec6"],["/2023/09/14/vue-pure-admin/index.html","9e54320c883191abf350d27e66035ee3"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","2786b4bcf07df7c04e751de49f102905"],["/2023/11/28/C-CPP-the-memset-function/index.html","c8c2fd1b99ce3c63a269b15e14279e9c"],["/2023/12/13/javaSwing-DynamicClock/index.html","7c12f7ba77dfae308e658dd3504fe518"],["/2024/01/24/builtin-系列函数/index.html","35a0cc1e81c2b81630f089a5efdc4690"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","06e795de8ae71113fed95f83612d192d"],["/2024/02/09/新年快乐/index.html","439d57391a969eee1efdcda7f4000f77"],["/2024/03/26/408-route/index.html","152b6af0d9f9cfb4cdaf0068d2f6ac61"],["/2024/04/07/转载-线段树专题-xyw813/index.html","02e78c1e7404ab57146f2f510b5cdae6"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","bfb12c1d1ce99d9ddd075a0e61f04c65"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","e636e4da1cb21be4c218689f1c6c2d59"],["/2024/05/06/cloudflare-display-issue/index.html","876750c2f8330e40e8be7858633526c3"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","58e3633094dc4ce79649ebe906fe4242"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","f097a90c60b3cdf4cac36599240a3943"],["/archives/2023/02/index.html","27a4dd27f0775514951f1d9002ac3f18"],["/archives/2023/03/index.html","9cf387cd9e91d44058209e3e2b871385"],["/archives/2023/04/index.html","168ce6e30f9b82c41888e93da443c8fc"],["/archives/2023/05/index.html","a899fff0f74de0f5168400d1d51ce397"],["/archives/2023/06/index.html","e674b8ae351f3e013d9761b3962b2160"],["/archives/2023/08/index.html","6b4223d34fdad6029835d379a7a5ea6d"],["/archives/2023/09/index.html","d290dc3d616fc1ae7d6059f916005cd0"],["/archives/2023/10/index.html","c241f9e67cc5e8156b605b35a72ecc20"],["/archives/2023/11/index.html","3529dd24d77fcc4eebd39e0ed682299a"],["/archives/2023/12/index.html","8f1544fa59159037e6d8ec0188fcb012"],["/archives/2023/index.html","52f27aca832d039236b32b2f043e3bda"],["/archives/2023/page/2/index.html","52f27aca832d039236b32b2f043e3bda"],["/archives/2023/page/3/index.html","52f27aca832d039236b32b2f043e3bda"],["/archives/2024/01/index.html","2cadfaa857ce92632d2cc284f3b2e070"],["/archives/2024/02/index.html","fff2724c94ce564bada68ae547fdb3b6"],["/archives/2024/03/index.html","27b93317a75b1aca6b554871ad2ed3c6"],["/archives/2024/04/index.html","8ea47b53b7d1221d503340f83ac9168f"],["/archives/2024/05/index.html","2ef813cf0bab9c18891e7a1fe4e649e7"],["/archives/2024/index.html","7125021006e7d698a039557c59b6b7d8"],["/archives/index.html","97af0d935789fc033b4f554311958855"],["/archives/page/2/index.html","97af0d935789fc033b4f554311958855"],["/archives/page/3/index.html","97af0d935789fc033b4f554311958855"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","72024c02af20701607c786cb359140e2"],["/categories/技术/index.html","d812363b9e21a8665571f58dbcc6a697"],["/categories/技术/page/2/index.html","e8cd9820972ed7f1920bfd8cf4872c11"],["/categories/资源/index.html","2c420657cc0bc4a94afe178ca469e226"],["/categories/转载/index.html","a213a348c00af0d68f383240d18d106d"],["/categories/随想/index.html","0381488b5d6ccccca63013942f99b197"],["/comment/index.html","f9f46cdfc12a7a721e7c790d7b88cd8f"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d92341cc69d90c5325ded1718ae9e7fa"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","b9eb6b87ed4b17144180dfae59770630"],["/index.html","a3eed50a955e25bb07855ff53c5e01fb"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","5251f52e0c33dd01b464c43c48789305"],["/links/index.html","631ecb32538b10e8495d6867942ad5db"],["/music/index.html","f379481add2c245ff3849156199c2092"],["/page/2/index.html","575afe9596ff83de4912dd8bf5522e10"],["/page/3/index.html","faf5c08152c714a71e6f89b18526568a"],["/rss/index.html","724d1e10df301faeccffbaa8e08e99e2"],["/sw-register.js","5ab6ba0ce817cd98578b2b3f3bf43378"],["/tags/408/index.html","6f290ac47036fdb981845a5e32c34593"],["/tags/Adobe/index.html","e0dce1ac181e4a774f35830d976a8514"],["/tags/C-C/index.html","6b61f270b7b0dde0883603e01591eac7"],["/tags/C/index.html","4c69cb1c896898bed6e9fef0aa05dd4b"],["/tags/CPP/index.html","eb93b249ba0891724dab1ab258d8c362"],["/tags/CSS/index.html","4d2b64da860a9d7b5dfd00d692acc6e6"],["/tags/Color/index.html","d60ecdee76dead72fbde12a620490196"],["/tags/C语言/index.html","14460a313f8e277a5a2846e1657ca4be"],["/tags/Java/index.html","25f728f2fb8fce877a3923f1c1d21849"],["/tags/JavaScript/index.html","403ff6b9a275a1d05d0c3a877fa92e46"],["/tags/LeetCode/index.html","90c437e4003d706388799fe0f93c44d8"],["/tags/MSYS2/index.html","c06e6c562022329ff091407f51bcfe38"],["/tags/Note/index.html","6c256bb321286d81922e69c54e8adf51"],["/tags/PS/index.html","fc7eed74cdf028839f419be04061788d"],["/tags/Rocket-Loader/index.html","a852d67f51438d11b0f88fd730ffc9b2"],["/tags/Scoop/index.html","2de4b77937a99f7efbaa19433fc4bd70"],["/tags/Software/index.html","9425647873fe9274dbdd384e99c6e5d7"],["/tags/Swing/index.html","62e523e883032c155c035f2cc9fe0597"],["/tags/VSCode/index.html","6ecb3c3b2b27a6d6a371993902683fb7"],["/tags/blog/index.html","f2140f8ef7d6bfa4393f1e628c421320"],["/tags/builtin/index.html","942b71f562068c3881458e3fddec88db"],["/tags/cloudflare/index.html","891d7deb639249cf988cb86f64389bea"],["/tags/index.html","21501bee1dcd64b9cc7e915d10be900d"],["/tags/vue/index.html","e9dbf643160c2363f45cc3beece9feae"],["/tags/web/index.html","3fa65f30a2fc9d339b49e59bef12d7ba"],["/tags/划水/index.html","1216d7758ed5a710a26812e1b6b7868e"],["/tags/包管理器/index.html","ef4a38950c100dfc2214a8aff53b54e4"],["/tags/悦读/index.html","afc870d1e01c61b4b3f638e83521a7f6"],["/tags/操作系统/index.html","cdf78e5aea92b2cff88b3ce3c1b3cd51"],["/tags/数据结构/index.html","ce0f2054bcd35d6c795192aae995900b"],["/tags/数据结构与算法/index.html","fc50e155e79b58b3a124eb97684f5cd3"],["/tags/新年/index.html","c1fcafcf646981f39794eca8d8a01729"],["/tags/杂谈/index.html","05c535d821c174bb48eb478d19e49ab6"],["/tags/深搜/index.html","ab042870cc579f05e9c4801393f5cfdd"],["/tags/笔记/index.html","b945a022868be402b8f699b6936875c3"],["/tags/算法/index.html","5811baede30bdbbed8a3168a74f4e042"],["/tags/线段树/index.html","93f8f80b3335736f4e75adcb3f0c5fcf"],["/tags/萌新/index.html","d28e20665a02ceed8558e7a3f87c4e22"],["/tags/计算机组成原理/index.html","6eaaaf4f5d336cee3af4abf1bc66de43"],["/tags/计算机网络/index.html","feae4e5859ea27da3a7a943d7626d3ca"],["/tags/质数筛/index.html","0fb51c933df9bd59df60097dee7edf55"],["/tags/软件/index.html","7ed42806b09c43d497c2890ad25460de"],["/theme-sakura/index.html","bcb907325e712a58787d322b57e8e648"],["/video/index.html","00b769c4ec7640642c3b84a74a2d7484"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
