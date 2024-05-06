/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","e8ed2662e809f119f09c62d7a1ae8406"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","9b79f4f9ac7d9cac3fd607894a54791a"],["/2023/02/06/C语言链表/index.html","0cddd3f61a32f4d57a6fc32161028453"],["/2023/02/06/书籍资源/index.html","e7c93a38248be36e3e08a0056ffffe41"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","629050ec0aebed57470b8f02c2edc375"],["/2023/02/07/为水而水（笑/index.html","cbe204454ba7400b54a1735dceac262c"],["/2023/02/08/洛谷主页源码/index.html","7b9173428454acddcd76dafe22625875"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","0e339899a4fe6077e75f8140641ca337"],["/2023/03/09/Web前端笔记-Emmet/index.html","55dccae13025e85327c2ce3d25033682"],["/2023/03/23/gitalk-评论/index.html","c584cf7a6200d431eba8ee9384669972"],["/2023/04/10/用C语言实现字符串全排列/index.html","da7653ab006f6ec612da46437126af23"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","19f6b2a9f8bbf4c73853d2ca6bc30cc6"],["/2023/05/15/C语言基础排序-demo/index.html","8fb96aeb9d0894ff2ab566fd56bdecdd"],["/2023/06/14/闲着没事干/index.html","f7fb5082948166b21e33ebaecb0c94d3"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","b2c8cdd7ffa81bb833de85254216274a"],["/2023/08/01/javase-note/index.html","5717e0067ed94b533f60bb2109ca5e90"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","8dd7550b19b2c9d865d0ff19f44c4886"],["/2023/09/14/vue-pure-admin/index.html","980f30d489e8cfed1d05cac565ab94ba"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","70975a76bcb0c42bd7ac3462df9660e1"],["/2023/11/28/C-CPP-the-memset-function/index.html","f500dfacf5fa2f7219171f3a30ede726"],["/2023/12/13/javaSwing-DynamicClock/index.html","98272634c20a3cc40197e2bd229bd10c"],["/2024/01/24/builtin-系列函数/index.html","5742b71d74d283536f0d073b052ebb99"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","58c7a0cf9ae57ba36a9a94a692f1e599"],["/2024/02/09/新年快乐/index.html","40c11240a71db582df04ca8754bb17b4"],["/2024/03/26/408-route/index.html","53e046f0af3c59d8e2e822dbe4927a9a"],["/2024/04/07/转载-线段树专题-xyw813/index.html","f309fe3a09ef0684025b5d799e6ce463"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","44193f6cf241daf4cf96d1945221e54a"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","fd7acb016e5e3c7e5fa9e726b7d7490a"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","1cc63147bc9b1eaf61c3a38560e14353"],["/archives/2023/02/index.html","0f90965b713da50350b007c8563ca2f0"],["/archives/2023/03/index.html","fb5707b8ac18ab70afb2ce0be41c88b9"],["/archives/2023/04/index.html","d46c594c2e8e6bfb3a7f9217b2b1ded0"],["/archives/2023/05/index.html","56140ed944b3f0134d62d0b6c272411b"],["/archives/2023/06/index.html","8fdff5d74e4be25ae351ebd359d51525"],["/archives/2023/08/index.html","05de4a05c8f7274c353757788f0f1b5b"],["/archives/2023/09/index.html","af8b72ebb2feff16d1a67987bd273aeb"],["/archives/2023/10/index.html","e3d2b33997d441356532a9f02d281040"],["/archives/2023/11/index.html","d83fe925788db214f550069a8affd3c5"],["/archives/2023/12/index.html","7d1fa3a9a6d65a8eeeb405d9a9bab87a"],["/archives/2023/index.html","473940f6cf28b1e9d8a70e78e24a9da5"],["/archives/2023/page/2/index.html","473940f6cf28b1e9d8a70e78e24a9da5"],["/archives/2023/page/3/index.html","473940f6cf28b1e9d8a70e78e24a9da5"],["/archives/2024/01/index.html","cb24d2ec4574a285ecbf83bdab7d96df"],["/archives/2024/02/index.html","56a0b049e13413162299a4ddf856c757"],["/archives/2024/03/index.html","eccc3e7050bf1631157456b1aa934681"],["/archives/2024/04/index.html","9eda7455476c095c13e3caba5b03303e"],["/archives/2024/05/index.html","13d7fbb3fc2ee79949c0bd4d039b25e2"],["/archives/2024/index.html","fb31538c9616168c9f984715084dde0f"],["/archives/index.html","bf87cbc91b9275107673449cb235fd03"],["/archives/page/2/index.html","bf87cbc91b9275107673449cb235fd03"],["/archives/page/3/index.html","bf87cbc91b9275107673449cb235fd03"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","20145ff70448d2d2e81261188e8ba3d6"],["/categories/技术/index.html","be9746e08ebcf28c35d7e9a6095f9d4d"],["/categories/技术/page/2/index.html","678a205f0d62fb2447dfef76d9508d7c"],["/categories/资源/index.html","2941a8a37ff7ad2e8322d697f1c238f4"],["/categories/转载/index.html","cf961ce84fbf0fb23dafaf879c343dd3"],["/categories/随想/index.html","9c5aa6ad0de0934e3bdbc30e1591034d"],["/comment/index.html","708d1ea01fbdaa400c83e295630ca3ff"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","a120fbff3180605ab4dd10de40f72452"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","b4cc38f77ea834cf9aadfc33779b4c1d"],["/index.html","42b918b719019064d99bf1e63b870361"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","5df0177228b3d625ed949db9f064bc13"],["/links/index.html","3104b17bf88195fc6fef397bb6bd8883"],["/music/index.html","824326caca50286bb3558842ba073c81"],["/page/2/index.html","0a882dcb79516ba1de964c0442f8af84"],["/page/3/index.html","461146baa558dc3b89c49ed0aaaf7e43"],["/rss/index.html","f069610adb8f256c00e2136ad053c02b"],["/sw-register.js","6ec7d0a74d2af78341c7276b9476955c"],["/tags/408/index.html","27d2d9d6ec9f1b9bed164a2ea8d39747"],["/tags/Adobe/index.html","6976fb7487f5bdf4aa11f61ce1775974"],["/tags/C-C/index.html","3730c3eb8ce49abcef2f281c68548fd7"],["/tags/C/index.html","ba89b392907d6443a619e9d8b10e0531"],["/tags/CPP/index.html","ccee3f78b7fec0c3c293eae52effb123"],["/tags/C语言/index.html","ba70abafb1f78aa4d78c76b934c2b687"],["/tags/Java/index.html","16df304e57c153b0039c5e067a2f25bf"],["/tags/LeetCode/index.html","67fe37e1985849178411c62b113179da"],["/tags/MSYS2/index.html","dbaf4973bd24fffcb2d3879f70cf07ba"],["/tags/Note/index.html","cfd123b9a39992ab3b1efd49183347eb"],["/tags/PS/index.html","6b378d76edc260f0d91d76b0395f8087"],["/tags/Scoop/index.html","30470259f526f0cd51bbcf5ede6812df"],["/tags/Software/index.html","cddcef536f5bbdbcad987192d9ba8778"],["/tags/Swing/index.html","863f406702cda09c3c3a4eb55401ee69"],["/tags/VSCode/index.html","239076d07814b29bb5cc4a83d5158d6c"],["/tags/Web/index.html","eb3189fe7ddbbe60ad5a130d10c176b2"],["/tags/blog/index.html","99c803692ac9dbbeb792adce91fb72db"],["/tags/builtin/index.html","fc7ad236c065bb728ad939c3c560b790"],["/tags/index.html","6768c1ff25c51cb371c6d41efa3b8bfa"],["/tags/vue/index.html","815a26b079cbf615fc35dc44cb39e0e8"],["/tags/划水/index.html","aa09e90bc503e04e86293b11ee001451"],["/tags/包管理器/index.html","6a786c265097215027e61e8ca2dd4abb"],["/tags/悦读/index.html","e7ad061510bfdb7857c2a03a690ea2ef"],["/tags/操作系统/index.html","4d3c5ce3f6cce889a1d6d57542b6b98a"],["/tags/数据结构/index.html","a317b0f6f2babbd5b933509570a3de52"],["/tags/数据结构与算法/index.html","4db928aac333a6b12c3c1c26e5e303ae"],["/tags/新年/index.html","5dc5cddb03aed0ed2d32fbb74760dd36"],["/tags/杂谈/index.html","61183464dd2d4c4ab103396b5749c173"],["/tags/深搜/index.html","83610c50679da57a164eb5871ca1f2ed"],["/tags/笔记/index.html","4c363b5c88723637c1f02b6043d1ce8f"],["/tags/算法/index.html","00348dd1a9addc716a195f9c104b645e"],["/tags/线段树/index.html","3ef8363f18d7967a97f157c0a9b0b976"],["/tags/萌新/index.html","86a921df2c7254632249b9938e9951a0"],["/tags/计算机组成原理/index.html","1f151954e7214fb273a981384099a4d7"],["/tags/计算机网络/index.html","7585371862a95982544986555a7bf805"],["/tags/质数筛/index.html","b520a0b8a2f39c980d03ab958d429554"],["/tags/软件/index.html","f1b364d3e2557252797de77b4bc47edd"],["/theme-sakura/index.html","cda2627af99a60729f905dd8fd754597"],["/video/index.html","e72b9c0dea27b7c8a67eb0e23c4ce239"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
