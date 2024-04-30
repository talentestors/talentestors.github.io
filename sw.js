/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","7d7d73708ae35f0dbb1bac31b8516ebe"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","7e9577fec6dbca4c9c746b93a95e5ebe"],["/2023/02/06/C语言链表/index.html","1976047bf252e239e47deec62046d037"],["/2023/02/06/书籍资源/index.html","56e94ff81a442ea827c9714a421b50a9"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","82a25b1c8cc889c841304893e4c4d270"],["/2023/02/07/为水而水（笑/index.html","fc00039fecfee4432ab221ec18b635d1"],["/2023/02/08/洛谷主页源码/index.html","8d39b564d80f92457007d9e743eb5990"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","9b65adfda580429fed42e5cba63ca121"],["/2023/03/09/Web前端笔记-Emmet/index.html","e6305d3e06c9427194f3f03b7f557a7b"],["/2023/03/23/gitalk-评论/index.html","33b4d0b787a4ff629a33b9492f8dfa00"],["/2023/04/10/用C语言实现字符串全排列/index.html","8e2ca359533db8c8a76345b985ea8346"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","1c0beb8d430d7e8e70135cd54cff7544"],["/2023/05/15/C语言基础排序-demo/index.html","86efc5879b5550520677cbd2b039097c"],["/2023/06/14/闲着没事干/index.html","0dc4bf69adececd1af39d98f9da7c2b3"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","91ee1ea141fe596ff28c941196c6041b"],["/2023/08/01/javase-note/index.html","d455cc9595f6ccee932fe4a18108fb53"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","1e57359a751261f8c82a50e3cc6ef5c8"],["/2023/09/14/vue-pure-admin/index.html","7781f6e5b2947a1ddebb6b4dfd2cf405"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","59c2e8fef86fb7cb2ffdd70e209a9524"],["/2023/11/28/C-CPP-the-memset-function/index.html","b42066c3861219305e2caee6bc9c5adc"],["/2023/12/13/javaSwing-DynamicClock/index.html","8a44a5769ccfaa2775d3e2642efd8fc0"],["/2024/01/24/builtin-系列函数/index.html","e24c65c44ab38527287187ba518df885"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","5eab2fb83d898bba67f6048ed63c878c"],["/2024/02/09/新年快乐/index.html","0f8178dcc13751e8b4eda3412aad4479"],["/2024/03/26/408-route/index.html","32c3711010409e4b64bbb4975babe2e3"],["/2024/04/07/转载-线段树专题-xyw813/index.html","cf1527be93f8c3e457f8cb80cbccb15c"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","9e5ef42bafa914845dfdb6a08a730184"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","fa1999060b898c02161eb2ceafab8312"],["/archives/2023/02/index.html","b41e9f652776f6f6d450eb0bcd22da22"],["/archives/2023/03/index.html","ba41ad816e7279bf7042bf1c83b8cb01"],["/archives/2023/04/index.html","423ed3e2a65df129f01c26a431a7aea4"],["/archives/2023/05/index.html","3f625b9060163daa818db337a1564ed6"],["/archives/2023/06/index.html","9c1d5382df41f4a4c7caf85ff9881a24"],["/archives/2023/08/index.html","1ba1460771fa000afd40b9b7bd2653f7"],["/archives/2023/09/index.html","df0a7570ef95b99cd003c355d42fc514"],["/archives/2023/10/index.html","d0449ce2a6329cbf7c8d7dd6337bb37b"],["/archives/2023/11/index.html","7555e4fc6ac27c1d66567d53f86b8ef3"],["/archives/2023/12/index.html","85a38756a5aee81a485b579ef4df123f"],["/archives/2023/index.html","51578929db868c5108d8ed9ff0cdafcf"],["/archives/2023/page/2/index.html","51578929db868c5108d8ed9ff0cdafcf"],["/archives/2023/page/3/index.html","51578929db868c5108d8ed9ff0cdafcf"],["/archives/2024/01/index.html","2f2eb2ad4bfbf12d1cac62514a73c5b1"],["/archives/2024/02/index.html","334f2ec5227212ed76142340f1a5f965"],["/archives/2024/03/index.html","3ba5cd929cea51e1a2fea01747e63731"],["/archives/2024/04/index.html","2febbf745e994b570ba79ab049610239"],["/archives/2024/index.html","86702b19f3876645a66b2f4d43a62a59"],["/archives/index.html","845731864bf3b7b3afd80b4aaa82dc1e"],["/archives/page/2/index.html","845731864bf3b7b3afd80b4aaa82dc1e"],["/archives/page/3/index.html","845731864bf3b7b3afd80b4aaa82dc1e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","b0e15da0708553f757d4f4f6d5e2acb0"],["/categories/技术/index.html","a073e3ff0d7fd0f12ce18fa08b4c2996"],["/categories/技术/page/2/index.html","19b42f411457b3066949e855a456bc5d"],["/categories/资源/index.html","239c9ce4158902d4297b668b22e4c358"],["/categories/转载/index.html","2e0cf816928d9a87f9da93ccb3740300"],["/categories/随想/index.html","7fe34fd8df48eb795875c8dc0303471c"],["/comment/index.html","07716e7fa004ed1904cebc7dbd494598"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","bfc0b4959e6ed253252160b248144206"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","bfb27dc38dc97d20d64717c7aabddd87"],["/index.html","68cc70216fe69d9ed27bdf4ad5c3a8d2"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","bc0f8c4b58262af6f64c6164c068e02c"],["/links/index.html","af2a8c5565d842abfd69c28c7b919e34"],["/music/index.html","cc62c09fae539ea62e6bbb4f521cc5fc"],["/page/2/index.html","6a0127189130b812d263b8f26bbd0ce8"],["/page/3/index.html","2076c6982362d234340376a1a166cfdd"],["/rss/index.html","9a0777fc39372b10b353a5019f52361e"],["/sw-register.js","369b3aac87b28d341fa5c54c14fa494e"],["/tags/408/index.html","428783f3530f40e16abaa5c0bf08b8b9"],["/tags/C-C/index.html","fbb48230cea1c9b2668a4b62244a0e12"],["/tags/C/index.html","dfc52a9b19fd9ecfe8475d385dd52fa5"],["/tags/CPP/index.html","8ace810f9aea7eab929981e70ef47e71"],["/tags/C语言/index.html","9f07ea56a9af1dd26aebfb9134b0d985"],["/tags/Java/index.html","1ea9bdb4e22e23bf904ac56c997904bc"],["/tags/LeetCode/index.html","9f7cecf48405c461fe4b3c5a1eb5cdc2"],["/tags/MSYS2/index.html","355f477318da4bbdbf877554b6e7b3c8"],["/tags/Note/index.html","24a856a612a58e4df0ca891d1a268d96"],["/tags/Scoop/index.html","ae766041940bee97e57c3e57725a8382"],["/tags/Swing/index.html","d68ac02bf41864f2ec491f16354cae57"],["/tags/VSCode/index.html","06a392251138e08c8ae03fe731955c15"],["/tags/blog/index.html","27d6ab4f215c15cc3ac081e3967bda18"],["/tags/builtin/index.html","568184c6d06082eadc44ef8c2bb534f7"],["/tags/index.html","e5d2b2d347372f3b81db20edfecdfd05"],["/tags/vue/index.html","83d324f85c3fabb9e8bb05cd955f6533"],["/tags/web/index.html","6422c1a17926189a0091061d1ea35844"],["/tags/划水/index.html","24a96212914f969b89901789bb964b89"],["/tags/包管理器/index.html","08293f30db17aef7ea14f4fc497dbdc6"],["/tags/悦读/index.html","4d38bf589e55f4801a0a49170688e73a"],["/tags/操作系统/index.html","302bf26a3f37d8b40222ad9cbb4fd19b"],["/tags/数据结构/index.html","a3547b568d82c2c6fb87b214d7aed8e5"],["/tags/数据结构与算法/index.html","a55d08754e45e485b6b7b8b5946e819b"],["/tags/新年/index.html","daab4a0448840aa01a16efac1f7b6f59"],["/tags/杂谈/index.html","4ede46dc44980ae543ef0de8cc2c4138"],["/tags/深搜/index.html","7e334cae40c10479298b217a9e968448"],["/tags/笔记/index.html","345fcb0a30338f0f9835e6ab32742d6e"],["/tags/算法/index.html","057636b1e26d8a4628d6bd6250736239"],["/tags/线段树/index.html","c96804ecbbc6e80f4b820d6bf2a1b157"],["/tags/萌新/index.html","7d59643805d78cd3797202db125e2b13"],["/tags/计算机组成原理/index.html","5e563fdeaab89c20519b4851f6201dbe"],["/tags/计算机网络/index.html","1e95da3fdf030a39932c92380a9802ba"],["/tags/质数筛/index.html","5e96fb0458f87c1eb8897d1fe3cda9ab"],["/tags/软件/index.html","0028da3986386da5f38e3c96d5e04ef7"],["/theme-sakura/index.html","421fa0440ac82cc8b1b3b26174ac0eda"],["/video/index.html","00bfa08673d53d44d3df50f8f3154916"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
