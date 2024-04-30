/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","6983c72e652a60577712a765c1baddb4"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","9253187887687a1d3ecd1069690f3bb3"],["/2023/02/06/C语言链表/index.html","74f370313d5a3ce3a8be652bb49091b6"],["/2023/02/06/书籍资源/index.html","6d8a11cea1197e7f4875b746945191b0"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","b766f46339e0d5553123111dba7a0ded"],["/2023/02/07/为水而水（笑/index.html","14cbf8c9214284f40dae046d73e54a80"],["/2023/02/08/洛谷主页源码/index.html","ee62c28b61880aa22c842d8190fa2942"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","25b70ed51ab4101882cdbebc926ce2b9"],["/2023/03/09/Web前端笔记-Emmet/index.html","8c8aac246d8516b220ff0dd0f56b97f6"],["/2023/03/23/gitalk-评论/index.html","ecb352df08df3740055a2ca01ed04216"],["/2023/04/10/用C语言实现字符串全排列/index.html","7443dc869b985094640c6e9c3611fd46"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","cdb85bf144d997f69bf215e27f298012"],["/2023/05/15/C语言基础排序-demo/index.html","b36eddef9d680a60fd2bf84ecf8e6665"],["/2023/06/14/闲着没事干/index.html","b6166a7a6ee3f405da403815d6bf8844"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","a486ce4014a8562a70679e138ba34c4b"],["/2023/08/01/javase-note/index.html","df7f7c09fd63eb4c6f0f688e2c66128b"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","a73e5c049008a0bd2e34e76ca2926750"],["/2023/09/14/vue-pure-admin/index.html","ebe9d027574b5859bc8a704fae878884"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","5ca09c37320512388ea1831ccaa6f494"],["/2023/11/28/C-CPP-the-memset-function/index.html","7c08871f14ba96917700b8b85254278f"],["/2023/12/13/javaSwing-DynamicClock/index.html","b3318f5412d7c97711e8ae7072d49ab7"],["/2024/01/24/builtin-系列函数/index.html","335af8810e930a064d2b83746b6a9dda"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","c296b5bb0d763f9d3f5376762720c99c"],["/2024/02/09/新年快乐/index.html","1dae47c29a9c9840cb3e6e0cdbf60924"],["/2024/03/26/408-route/index.html","ebf292e59838c17ed2ea9dfe540d9583"],["/2024/04/07/转载-线段树专题-xyw813/index.html","908642ea4c67e090d1a7a5d9cb853dc4"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","099efafecf2cb2eb6b760b833adea77e"],["/404.html","0e6f9c81945894826248ab1a9f34e592"],["/about/index.html","3138c040cee24d41a6065379cc8dde24"],["/archives/2023/02/index.html","c82e8883fd6a12bc884a0cf59af8134c"],["/archives/2023/03/index.html","22ff05d5f922ae840c7d1d3de0c0cc17"],["/archives/2023/04/index.html","3d88a1b4cbfb13f3b670a7389f51c259"],["/archives/2023/05/index.html","5642c2b12e5ba71180b43f3b7a28d866"],["/archives/2023/06/index.html","e8043a53e0a38ea31d5cde93de4298da"],["/archives/2023/08/index.html","f82183175bc65be6a4e3a17da60ca440"],["/archives/2023/09/index.html","288e194b94090f0be477f42a0754f46f"],["/archives/2023/10/index.html","7f0ae04f83b301e54e0772ea28e9d223"],["/archives/2023/11/index.html","f0ec620f499539edaf7ce3e1ea86c3a8"],["/archives/2023/12/index.html","9a4d5b0a6288e42e6ff74b69ae2b0324"],["/archives/2023/index.html","141449e7691b2f8188ac6578674c7144"],["/archives/2023/page/2/index.html","141449e7691b2f8188ac6578674c7144"],["/archives/2023/page/3/index.html","141449e7691b2f8188ac6578674c7144"],["/archives/2024/01/index.html","e002841fd12af59676668ad913db94b2"],["/archives/2024/02/index.html","dc2c623997e2b8ffa1bb508039aa871d"],["/archives/2024/03/index.html","35b726a1786e49786720ff3a54715037"],["/archives/2024/04/index.html","a5cfbcc79438b2419b83b9cd85e3ee5c"],["/archives/2024/index.html","67ffac2b9f4dfe57a9fdc86b9381ac72"],["/archives/index.html","559fabad7dae74da3d30074e418d80e2"],["/archives/page/2/index.html","559fabad7dae74da3d30074e418d80e2"],["/archives/page/3/index.html","559fabad7dae74da3d30074e418d80e2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","a5c7c09115ea59a9f064df49c65bc34f"],["/categories/技术/index.html","90a90733eb180d17f13e6eaff977e07a"],["/categories/技术/page/2/index.html","ac90bd31c45e73bf0f6d7868bfdf8140"],["/categories/资源/index.html","c3bdde0fa7cb0b49a733ae07e8bdf8d9"],["/categories/转载/index.html","b64c2b891047a3ca175b365c040b4f72"],["/categories/随想/index.html","437af758c8ff49c27c347ff38e5f33dd"],["/comment/index.html","36043e9dc73c7ca93cae800e9f45f094"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","f76eaee0edd21995e2cb50780e489ce4"],["/fonts/SAKURASO.old/icon.css","2b470853f4ba8c30d730ae4df22a433c"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","df3c6d8306b883600ec141fcef29b7f7"],["/index.html","259b36fd1ddab6210ae890d558bd5c26"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","90e634c5c1b11f121a0b5882e7e4583f"],["/links/index.html","352ce6c9ffddcfef5a162d10c059b74a"],["/music/index.html","823c54584aa86ef857f03cee728e5ace"],["/page/2/index.html","55957c35ca825d97ac8e89a0e5249a93"],["/page/3/index.html","bb58b1d1c1daa0765f8008a3e7c43aa2"],["/rss/index.html","5608d9d96fdd288434f92d8efeaf044c"],["/sw-register.js","a662aad88d376b448cd5fd8b84561874"],["/tags/408/index.html","098ab1a78478cce4ac6dc9c567b1b030"],["/tags/C-C/index.html","546d619404412954b2c77723fc0aa82b"],["/tags/C/index.html","cf9ced7af2d95829fac84ed374b8fa53"],["/tags/CPP/index.html","04d976966b9c1de7df31da5023a9f093"],["/tags/C语言/index.html","202118f0e81a4bfc017299452892f178"],["/tags/Java/index.html","de315214d6afa60b89bc3e28b0a3f94f"],["/tags/LeetCode/index.html","d0df0ac4359b50928c47c7c6db829053"],["/tags/MSYS2/index.html","d2ba76c178cabe1caab1967008ba0abd"],["/tags/Note/index.html","53931454ecb88199731dfa1bb178fd76"],["/tags/Scoop/index.html","bbb37758d2b485e872e06248e12ea12f"],["/tags/Swing/index.html","ae7a7e9abdff3289d88124474ee2eaf0"],["/tags/VSCode/index.html","1b6e6282198bd517b61adc0d6d285dab"],["/tags/Web/index.html","8effac45c097e41b1dc191d9e3dd7ee9"],["/tags/blog/index.html","4c4553b17eb609373e914620f5022b55"],["/tags/builtin/index.html","b5f8c0b8fbeb7db4164b91a851bdd07d"],["/tags/index.html","7a620192427fe213ef3146929fa92f0a"],["/tags/vue/index.html","0f4bc70e45514551b030d73b4af2f6dd"],["/tags/划水/index.html","66a15f8aa33b571c8d544d4fe333c6af"],["/tags/包管理器/index.html","811b1323544984616b4352ca67f7bc99"],["/tags/悦读/index.html","f00d6031e37f0333fbbebdb5fbe1a064"],["/tags/操作系统/index.html","94f5061f62ba542ad59b8bb85968a82d"],["/tags/数据结构/index.html","2f36f127c94317d0537b5037e1a53d9e"],["/tags/数据结构与算法/index.html","3a25d1594e54ab2f165e8ed0305e75bb"],["/tags/新年/index.html","bebcb73c2517d64292f8844db1df63c3"],["/tags/杂谈/index.html","249503cf3638b99ac72a892105cc548b"],["/tags/深搜/index.html","a32497653f47e98c361a4f6b9fff0ba9"],["/tags/笔记/index.html","9c4e80ba7edecbb96c6f85751bc29b93"],["/tags/算法/index.html","85c8d41b6f7d67087b197924c9a8aa2a"],["/tags/线段树/index.html","49eaa615c3a86f5ca31ad0e73b5d4d07"],["/tags/萌新/index.html","69fc15a9cff8c141be6c010230c2d977"],["/tags/计算机组成原理/index.html","6eee50aa43fdb4126a4bf6eb212bb712"],["/tags/计算机网络/index.html","5ece4961d17519688071e9f4a0b714c5"],["/tags/质数筛/index.html","180b94456609345a6d4b9e893420fd9a"],["/tags/软件/index.html","bcf8be1e92e94304b7c9d4c8124eb27a"],["/theme-sakura/index.html","8e1e66fab749ff369aae469f2a240b68"],["/video/index.html","27905059fb9679b12b4c4d2e11e521ba"],["/warn.html","92bdef214a8c829ba2a2b1a07aee8097"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
