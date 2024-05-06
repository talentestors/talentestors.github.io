/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","7a182b44541fa58db246e49e416578c9"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","2882f3928fd74c071bc78ad74638a728"],["/2023/02/06/C语言链表/index.html","4ffcbb5329baae9929442e9ea5e7f00a"],["/2023/02/06/书籍资源/index.html","aad8e450b0976e53c3147c5ead8e818c"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","5bbd591f481a9fac7ab9f99398e710c3"],["/2023/02/07/为水而水（笑/index.html","bfa038d5f18a237edf884de6219b7ff1"],["/2023/02/08/洛谷主页源码/index.html","aa85cc70d2ddb34626a34af203d9f09d"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","76803e049552a3478efc1309d983a1c8"],["/2023/03/09/Web前端笔记-Emmet/index.html","c79c01e3863398166069f52c5758bb37"],["/2023/03/23/gitalk-评论/index.html","cfd697ea100f767b4da333fc1428c56d"],["/2023/04/10/用C语言实现字符串全排列/index.html","56fdab990044c6785343edb5a0cb555c"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","97bc9ba2b698109bb5e4e00db00d6b24"],["/2023/05/15/C语言基础排序-demo/index.html","fcbce281173525fd59316b952c976e1c"],["/2023/06/14/闲着没事干/index.html","087dc85c6783cea2120b153be194be73"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","e39fee5d55b1092b3165873e7d0d0e5d"],["/2023/08/01/javase-note/index.html","0a565ae1c185827903f4167e1a6ed880"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","ac8ae4541e15d28de92175aaa1efc057"],["/2023/09/14/vue-pure-admin/index.html","8a033505dce02aa89ee36e2559336656"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","9979833dfde5e37942a622fe9e184110"],["/2023/11/28/C-CPP-the-memset-function/index.html","c9415b9d553168955feb21afec539384"],["/2023/12/13/javaSwing-DynamicClock/index.html","d22ca9011da0dc7bca69f5cf63156d22"],["/2024/01/24/builtin-系列函数/index.html","72b51eec73fdae48cfed967834cd0a64"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","4507f9fa641eb9dad3d35e25f5229c1b"],["/2024/02/09/新年快乐/index.html","692cf9efe8768b219d1fbe544731716f"],["/2024/03/26/408-route/index.html","443112b47bfed59a1784ea98c1660d6b"],["/2024/04/07/转载-线段树专题-xyw813/index.html","2b574d655b62edf7cae623cb63cb1590"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","acfced091349e7100566bd7545e0607f"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","c22ee04da37983594f310db59b0243dd"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","04c79326c1e7cec8ea238a76ff8b5860"],["/archives/2023/02/index.html","cff4ac05b4772d7ef7b147978a5a5e72"],["/archives/2023/03/index.html","a992f2569c5a5ee5143a8c11bcf9fa86"],["/archives/2023/04/index.html","29f72f1204073217fdf02c20c662638b"],["/archives/2023/05/index.html","8e064ed9a56c56e598ff94a958799760"],["/archives/2023/06/index.html","b6fc5b8975b03b94b9c9ab932f76d368"],["/archives/2023/08/index.html","021f330967b76d76373bb7ccf254b453"],["/archives/2023/09/index.html","24bf70f561b5e7eedac550850c8a591b"],["/archives/2023/10/index.html","f4e21b040fc39450bd8665eeb90472ef"],["/archives/2023/11/index.html","526d4037812ff9c9f070ac2df5857370"],["/archives/2023/12/index.html","1cce2a3b8bcb79853b2d8986b8d07359"],["/archives/2023/index.html","f91d93b16a192233809e91c6bf6c06da"],["/archives/2023/page/2/index.html","f91d93b16a192233809e91c6bf6c06da"],["/archives/2023/page/3/index.html","f91d93b16a192233809e91c6bf6c06da"],["/archives/2024/01/index.html","dfb3c35d78ce28f19e0ac535718fa808"],["/archives/2024/02/index.html","885bf1b8e6c2bf595bff1115ad22a406"],["/archives/2024/03/index.html","8f4bc071c69c2ada858c4c1710052843"],["/archives/2024/04/index.html","b8735b1059dda39e3fc9aee0d75917aa"],["/archives/2024/05/index.html","90decc90eef9640c14c1d0a7f9168eb9"],["/archives/2024/index.html","fba70c9d59f14b7074aca29f46002ead"],["/archives/index.html","6722653f4ed6187271d2f53150c5c103"],["/archives/page/2/index.html","6722653f4ed6187271d2f53150c5c103"],["/archives/page/3/index.html","6722653f4ed6187271d2f53150c5c103"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","b30a59b60d824471cb104600b15aad89"],["/categories/技术/index.html","7bd3dad575a8a993f839e59f40c008ab"],["/categories/技术/page/2/index.html","cb52019e490691c7112986acbd31201d"],["/categories/资源/index.html","97bef214cbb82bea30654274b21f47c5"],["/categories/转载/index.html","c2e65566a08108e31e79f81583c047d4"],["/categories/随想/index.html","eb2fb815b77a668aee033a361643494f"],["/comment/index.html","5df21cb3b39bf0b9183021efc97b179c"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","c3a60ff17b5952533d18c847d8492ea5"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","e83671a224898d3af668b30c24f7d58e"],["/index.html","6787fb42faf934da1c42e7843b1b28a5"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","80438b43cfa9adb207a084bb6cea2a18"],["/links/index.html","3ec968d78c8b93441eef96fd66f711a9"],["/music/index.html","e586b496857cc7deef1842f19aa78d65"],["/page/2/index.html","ef7cd5925ac74e29dde49907f0484f3a"],["/page/3/index.html","2c3aa7c8e237c31af85e419b432b4691"],["/rss/index.html","5a1baeceb636fbc2a859ffb7b0d6f833"],["/sw-register.js","a16f21e671722bb67260c1c62fa67fc2"],["/tags/408/index.html","588d8710e1187e33572aed9b13c06131"],["/tags/Adobe/index.html","fcb018f76138170dbee10c73d1c5efff"],["/tags/C-C/index.html","46d7127978ab62ea33906ed07aca8a12"],["/tags/C/index.html","9e1c2ad4741753dd33c798d66ff6f174"],["/tags/CPP/index.html","088929b20a99d407e98ff8a22f33bcba"],["/tags/C语言/index.html","be910e8153c6ea04599b50f136d5a950"],["/tags/Java/index.html","1e54b906c94721abcf3c143bf1bcd294"],["/tags/LeetCode/index.html","11f5ab773e239c81e08f890063d484a4"],["/tags/MSYS2/index.html","7d18cd5c6eff4901b067542a0346897d"],["/tags/Note/index.html","db12d2eed952530040cce080e1161e16"],["/tags/PS/index.html","0c650ec2d73bb42f01be073a1f8f48a2"],["/tags/Scoop/index.html","0a26ae9167d2c0fd3033c75b6ddb5dd4"],["/tags/Software/index.html","2b49152bed09c85c21d46b127bc415cb"],["/tags/Swing/index.html","70283f2483e1b78ff707f4f2ec276698"],["/tags/VSCode/index.html","ddf0f4651a16a0bd552d3ff18b7a5887"],["/tags/blog/index.html","02ec91a4c57a859f18d2b3a988ce2028"],["/tags/builtin/index.html","eb5061c45d959b6aae8d33f50d0ab60f"],["/tags/index.html","89b006f3fc65ea7b54c344d147001f0d"],["/tags/vue/index.html","eef131d54c656bd43d393ef339698bd0"],["/tags/web/index.html","15084d07078650a1b93c0b12f5a62717"],["/tags/划水/index.html","5b99bb1490718b601086503c3942fa1a"],["/tags/包管理器/index.html","a3fe38566df3a6baa696ce0f75d88f4a"],["/tags/悦读/index.html","6467b60e57af0292429bbc6af9fa9a9d"],["/tags/操作系统/index.html","1d80424e964237f6c585bbeae03e8121"],["/tags/数据结构/index.html","dd948af4368736738bc601cc9b45d66f"],["/tags/数据结构与算法/index.html","63987684a68e581aed4cb887505318b4"],["/tags/新年/index.html","75471347dd3f29b76a5aa12a4a59f30f"],["/tags/杂谈/index.html","a5f5722137b4ad1dbf7ab86e5fb14494"],["/tags/深搜/index.html","718291311cfb0f8c782176cad05ad7b9"],["/tags/笔记/index.html","8e0f5bac505e62fff3ef69ed17618a9e"],["/tags/算法/index.html","9443e321ef04713ffc5f408b3322cdb5"],["/tags/线段树/index.html","dd525c122540b81bc1b147716530ed94"],["/tags/萌新/index.html","b46531bf35979f9cfcb4ad9a63451903"],["/tags/计算机组成原理/index.html","12ca17b556d1f45298d8cd58efcadd62"],["/tags/计算机网络/index.html","cffb2321a6c4b94a0ad67d4e4bda891b"],["/tags/质数筛/index.html","7dbd9a5eead7d846d1641973efbb3f32"],["/tags/软件/index.html","808b0ccd4140c891ae115be456d538f2"],["/theme-sakura/index.html","947da51f294f6a2d069e1ce644dae679"],["/video/index.html","c2bb948cd1248d2a8d1c9efb1eca36ee"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
