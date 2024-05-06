/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","d65071a7e8de2baf949fa5526aed0545"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","3b394bb404b5d7ea30a24cc22aaf7a1a"],["/2023/02/06/C语言链表/index.html","1022c7a7b19d9c8a6a1058667d7c8e77"],["/2023/02/06/书籍资源/index.html","5ed75e7a38565f50f8d195d29215c2da"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","12bc6b7bdb0708679f42d1e09a3ffa2e"],["/2023/02/07/为水而水（笑/index.html","e2d7e1e668e47028bc5c811a62346b30"],["/2023/02/08/洛谷主页源码/index.html","5604fa601960d1253ac0d68e1b58c3b3"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","b938a70f0bade08450267dd677cb02d6"],["/2023/03/09/Web前端笔记-Emmet/index.html","ed27edb1aa8b81cfacbade454c1d3a71"],["/2023/03/23/gitalk-评论/index.html","0e31b3d2ee98ea4821a50c596f7c3ee8"],["/2023/04/10/用C语言实现字符串全排列/index.html","1bd862dd57d5baac829b161443487082"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","9abe69793b9017cd8e97c9f902363cf2"],["/2023/05/15/C语言基础排序-demo/index.html","57539d7399ab245d5d486d3f4c11bbe9"],["/2023/06/14/闲着没事干/index.html","941923145db48496f154855ef6a63e65"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","a9b2e066940b2e210e6205b9d176005e"],["/2023/08/01/javase-note/index.html","a36dc76693c6687dbab5a127d0d96b31"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","0409ef199720ecce6eddf1ce93cb1630"],["/2023/09/14/vue-pure-admin/index.html","13aee1f9fcc7474016e71b4b975398a9"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","c80b9d5616673169be7b04df8ccabb17"],["/2023/11/28/C-CPP-the-memset-function/index.html","d620cde9908d6db8e3855a7301c82d60"],["/2023/12/13/javaSwing-DynamicClock/index.html","4e256fc873f4b399d8c20b67279ebfe3"],["/2024/01/24/builtin-系列函数/index.html","ca7284c02f7c1a31710a2e2b39570bb1"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","341a351305459365d8deb27305db8a25"],["/2024/02/09/新年快乐/index.html","d95a40c054338d418da6baa594bca4ba"],["/2024/03/26/408-route/index.html","6ff221a03c1674daafa00ac661a2eb7d"],["/2024/04/07/转载-线段树专题-xyw813/index.html","a2f7a8516eb24efcba1b1ba2c1d414a7"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","75af61af2c03868482c8afae8aa937ae"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","438e52481724d8dfe41116fd2653993f"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","ba955abffa47d3a1b192830d355c5ff5"],["/archives/2023/02/index.html","a66256adc3c023b96f76d6a6a6c2d0ce"],["/archives/2023/03/index.html","9e0d2a91124d62df9e33644ea338d357"],["/archives/2023/04/index.html","8bddcc2048f80b361a0e72f034e3f355"],["/archives/2023/05/index.html","04860368e29250db9525d8ea8378cd33"],["/archives/2023/06/index.html","d2613f4333b62ea26c965b00f6ee798a"],["/archives/2023/08/index.html","1a1841e3f6de08645183d86996eae158"],["/archives/2023/09/index.html","6c97afc448020814f353042503974d44"],["/archives/2023/10/index.html","3dd78ddc062162abaaaed6822fcefea5"],["/archives/2023/11/index.html","65ca39e9d00aeed8d77ade4dc2145eac"],["/archives/2023/12/index.html","cf8fdcf24c92ab44bc986a94fc8e49ee"],["/archives/2023/index.html","b475a82803d7d82fc954755a9df5b868"],["/archives/2023/page/2/index.html","b475a82803d7d82fc954755a9df5b868"],["/archives/2023/page/3/index.html","b475a82803d7d82fc954755a9df5b868"],["/archives/2024/01/index.html","cebb038fa6671800f2f5988637b23293"],["/archives/2024/02/index.html","a8b5752c8d624d70dacae617cdf53908"],["/archives/2024/03/index.html","869fe83d830bf45141228284c6a55217"],["/archives/2024/04/index.html","8b720814320e8a04fb16767d51e1bd93"],["/archives/2024/05/index.html","8c26e2409afe8ece14a98242741346db"],["/archives/2024/index.html","353afd0a9e99b19845026113bcabe0b8"],["/archives/index.html","b1a1d70e56fa36cd8878f802b763498f"],["/archives/page/2/index.html","b1a1d70e56fa36cd8878f802b763498f"],["/archives/page/3/index.html","b1a1d70e56fa36cd8878f802b763498f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","1aafe002b91e9c9cf7c1df0a87112ba2"],["/categories/技术/index.html","7e0992bebb5a5eb045f4599ddb2d599a"],["/categories/技术/page/2/index.html","28588308484e7b196a4df1b9d64292ab"],["/categories/资源/index.html","5c6984ca22bf8455179fecf468cbf8a5"],["/categories/转载/index.html","c1515343acbdb2bb29fb6b5629e7db08"],["/categories/随想/index.html","4cf6b14d6bb6baddf0524424793bd8bf"],["/comment/index.html","2dfe14146ed8b66185cc8b1a52228b05"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","206f36279cccec155b88dececef78a5e"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","05044b7e3347b48063e7a6c9a04e01e1"],["/index.html","aa550cff582a1f98f41a5391f1f057df"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","70b9e86f3491fb54bc88821a2edbc110"],["/links/index.html","3c52d1c1c9e7d72acaa64ed16e840733"],["/music/index.html","82e82eab48ff6acba2e9c39883a05fbb"],["/page/2/index.html","c68462c5ce4e4e8b2fed3c94d0c599bf"],["/page/3/index.html","80e20e2615e3d80359d3679e9b0947f9"],["/rss/index.html","4e841f19d2e7dc799d6e34bfd12059f0"],["/sw-register.js","514dc9ef43b6201291d33dbcd93a3e0a"],["/tags/408/index.html","744b84f6a7d9a591777817b7699f4715"],["/tags/Adobe/index.html","7b0f9c16aa47bf541794bccd1b8335f2"],["/tags/C-C/index.html","b1a7806b51ab042734511f153465e9ac"],["/tags/C/index.html","79eebf26a65386f5aef5bc678eb28480"],["/tags/CPP/index.html","5b2b8dfcd492c30e065ba1942a501c0b"],["/tags/C语言/index.html","b518dd1a2fb94b7903b0954b7bb14d88"],["/tags/Java/index.html","575de34f1b9971160a1f9ab00e292e47"],["/tags/LeetCode/index.html","edab4e1bdb31612fac3de1786de5ebc0"],["/tags/MSYS2/index.html","cdec35f769e41c90f1f3a2df59348073"],["/tags/Note/index.html","4c9e17652dc55a75ec90a880b82c9b98"],["/tags/PS/index.html","0ccf41911cb78af5a9fa6d96d6081184"],["/tags/Scoop/index.html","2ab41d6cb6fede92ce3073cbdf5cf470"],["/tags/Software/index.html","2dfee3e9acfec988e8138ddd6fbf98bc"],["/tags/Swing/index.html","c0c1c870dd94dde1b571616823fd170f"],["/tags/VSCode/index.html","f25b342ede85683db4a4bd504a3125fa"],["/tags/blog/index.html","c7f3c2ee4aeb09bcd02bd8b838d2074c"],["/tags/builtin/index.html","1435ad514e79272cdff95688123b469d"],["/tags/index.html","04ac496e8586969af8e7e55dc5eafc30"],["/tags/vue/index.html","080374f6ba40c1cde03daab16542e61a"],["/tags/web/index.html","d94c17f64c6eb50bd9b35ba6139687a4"],["/tags/划水/index.html","a7e92297a6fb6bdfed135b86013054ba"],["/tags/包管理器/index.html","08968ca7889b0d76b4d636b634472f7e"],["/tags/悦读/index.html","1d3243a0dff9c20125c9ddd9261b03ee"],["/tags/操作系统/index.html","727d4e4223158b577fc425bd756f3903"],["/tags/数据结构/index.html","1e3a511e4178f8b44792d4585b5f4a4c"],["/tags/数据结构与算法/index.html","ca454a6041099e38bc55d68f5d65c4b9"],["/tags/新年/index.html","53471ccc311f0030c532c9ffc732a94f"],["/tags/杂谈/index.html","75c5f7b3e138dba7db92bc7d9357ab49"],["/tags/深搜/index.html","b6463e342a74c8ab49c829a338b34f1d"],["/tags/笔记/index.html","b05deb715cde38981b387bbf61467d7b"],["/tags/算法/index.html","f2f5099de64d670434d083d0e5c82dee"],["/tags/线段树/index.html","d501eae9f901e4422ac46080d359b5cd"],["/tags/萌新/index.html","6559bd301418f7faffdf2e80998de0d0"],["/tags/计算机组成原理/index.html","7c5e404ec9fd1dc30daa8088cbe3eb21"],["/tags/计算机网络/index.html","5567d4b7fa9fe36f4effed90cb931450"],["/tags/质数筛/index.html","fc26ecfc8594acbfd0b23a7c1d4d12b4"],["/tags/软件/index.html","a2b7e3070b3d65b7041391664df0fc81"],["/theme-sakura/index.html","524dbcd8cf8ed225435572f79e11b9f5"],["/video/index.html","79221548debd4af5404b030d66cbc5d6"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
