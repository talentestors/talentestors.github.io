/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","229c68bf9dfb8f5ceb09f8b7a9e22f92"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","15bc55d52688c8dd62cec81549a321b6"],["/2023/02/06/C语言链表/index.html","6b33694b320489ecd7c5a385ec50200e"],["/2023/02/06/书籍资源/index.html","f1352143c41110ff449b9a45cbde41dd"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","44bcc9a8583e60094754e21dc4f26603"],["/2023/02/07/为水而水（笑/index.html","00bf92fd3031f305004a2af86b0169b6"],["/2023/02/08/洛谷主页源码/index.html","b475a5b0250ed884f8d41006c682b221"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","f548353d53a1ef32f90f9f11ae4aa6a3"],["/2023/03/09/Web前端笔记-Emmet/index.html","3057934640b0a8fedc6f2556563d1c51"],["/2023/03/23/gitalk-评论/index.html","95b0ced53c5989254bf0fd69c8756812"],["/2023/04/10/用C语言实现字符串全排列/index.html","d76ef496351f06b06cdd12f2dd068577"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","1b1e6c7fe5e2df18bddbb76ce0738a68"],["/2023/05/15/C语言基础排序-demo/index.html","97dfdf681b2772eb0893678c61c9bed8"],["/2023/06/14/闲着没事干/index.html","b4bee33fcf7105d5bcc7e6013999db1b"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","8828634263e6ab2ba7ffe5430bbf5cc7"],["/2023/08/01/javase-note/index.html","d6d55cbd5507596df21368adb5ef7a9a"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","cff4d16a4249246b1f68c7986c8c111c"],["/2023/09/14/vue-pure-admin/index.html","b29dfbddff9aa1963ac7a1d6b119556c"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","d72e055c279e859a7b196a8680ef6110"],["/2023/11/28/C-CPP-the-memset-function/index.html","e4f434246dbe92aaa1f59501471d610a"],["/2023/12/13/javaSwing-DynamicClock/index.html","0339f6a400e7b65709c3f1c4014aabee"],["/2024/01/24/builtin-系列函数/index.html","24490115e0d8b7d08da4472fc0408eb5"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","b7fc8608c7951c5328f3680aae4e3924"],["/2024/02/09/新年快乐/index.html","70a9ee0017c1a75c3920b8a7674cef2e"],["/2024/03/26/408-route/index.html","f9fb87f94ec03eefe6e392670cef4063"],["/2024/04/07/转载-线段树专题-xyw813/index.html","f96b1aeadd976dbe1ec472990ab696d1"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","ec7eed03185fc07341773923ab7ce030"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","5ca9836864e0bdfe82a5c59ec051ebab"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","68b015193692119629acf859049e8bdf"],["/archives/2023/02/index.html","f8cd8e13ee6250ffe9f556e049d5630c"],["/archives/2023/03/index.html","2b91dc741442f9b26f90c6eb002eed65"],["/archives/2023/04/index.html","37c64ac192b0caebf11acaee98c8ef49"],["/archives/2023/05/index.html","08bd1bef7109ce7378953c9e6e5ed939"],["/archives/2023/06/index.html","390726a4f97a041fed84066dd891ae2d"],["/archives/2023/08/index.html","9153f5beb748ea1408f24c22a97e3212"],["/archives/2023/09/index.html","f17b89832240e6a4a44a24a197cfee9d"],["/archives/2023/10/index.html","a411393ef5200ef94945ee2b72efd4a0"],["/archives/2023/11/index.html","e412a8786e9b93e4aff08d3555c73d73"],["/archives/2023/12/index.html","641ceafc7491d62f5f3d7b394f9e20ac"],["/archives/2023/index.html","736926823196e2d55289e341a8fec48e"],["/archives/2023/page/2/index.html","736926823196e2d55289e341a8fec48e"],["/archives/2023/page/3/index.html","736926823196e2d55289e341a8fec48e"],["/archives/2024/01/index.html","4e43f1edd605cdd4c756722e6a4ef48a"],["/archives/2024/02/index.html","410d0f156006217010758300d4ee5832"],["/archives/2024/03/index.html","28ed2ebc236bb7a42cbe887f22495d2d"],["/archives/2024/04/index.html","beed7898cc5b3b42bfcc6c5821a44271"],["/archives/2024/05/index.html","28f72aa5ac610fe1b98266cef029e28c"],["/archives/2024/index.html","a822013c79b6e4e8b1fe9803c00ce791"],["/archives/index.html","71aea1638207fd6ba5c0b5a65befa7c7"],["/archives/page/2/index.html","71aea1638207fd6ba5c0b5a65befa7c7"],["/archives/page/3/index.html","71aea1638207fd6ba5c0b5a65befa7c7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","5df08e5b6ca380c02e04219cc6d7e7d1"],["/categories/技术/index.html","754a255ef871d3fb8df26bcf830f23a9"],["/categories/技术/page/2/index.html","283e6c9e9f11ff597b41eb1a3fe7eb49"],["/categories/资源/index.html","212639054f7f6882dae7835b07e691e4"],["/categories/转载/index.html","c5f1ef52fa78bebaf169e835ef405e5e"],["/categories/随想/index.html","0ce2c11ed0a7d8005844d9a5d84172d4"],["/comment/index.html","64152002757a3ce76e13d6ae6814337b"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","0f622fb01139b74fa133dc208ad77a86"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","b0dbac7ac45943bcf62ee535a65d2dd2"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","d2bc0caad62aa51057182fb0af99a75c"],["/index.html","e5bda3d1276cff7d12a24729529ff8c2"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","8ea71bfe03f86991530d7d31ed3de64c"],["/links/index.html","3ba63807c573299d4da89655aeea9220"],["/music/index.html","597ae68b3fbaa48899c13f9a17fbd179"],["/page/2/index.html","722b70a6a95e42f2eb38a4d3bbbca141"],["/page/3/index.html","9ae05fe77263b511a2737dca8f67ddce"],["/rss/index.html","25ba4a95f676c0944ffa21a6aa904868"],["/sw-register.js","b1b52a45debfcd749379a89cdd7d9382"],["/tags/408/index.html","a988382686c5c30652fe27913de8e2f4"],["/tags/Adobe/index.html","6b9a32f95f1a7cda7d816d612e051b34"],["/tags/C-C/index.html","639cfeed8fbae603d555bd074b52d271"],["/tags/C/index.html","0e551df427654212d9535997eeed563b"],["/tags/CPP/index.html","b9364fbd7eccc5b9098be20453a9bea0"],["/tags/C语言/index.html","2c708fb81766b272d7f829b5499c4366"],["/tags/Java/index.html","499fa0a36a0a04e795f2706115833cc9"],["/tags/LeetCode/index.html","6ab1ffbf672b23feba960119e528a6ae"],["/tags/MSYS2/index.html","28a43134498ee623c985e3b9c4d0d0da"],["/tags/Note/index.html","6de5156d232ab09ad5134b4f7e206b57"],["/tags/PS/index.html","93681ae3bb73ae9c4253eaf7fbc5d347"],["/tags/Scoop/index.html","2da1145b9a81cf79d8aa1f99a45ac34d"],["/tags/Software/index.html","56a0ec260824f816e3b42da433d40557"],["/tags/Swing/index.html","740d6ee1f07231d6cb4ccf38fb05f01f"],["/tags/VSCode/index.html","37a93762d827601f7983192e1ff1f826"],["/tags/blog/index.html","3309e2a52d487ee85c4ac9474d3b1e49"],["/tags/builtin/index.html","558e020587ff72922ed53e154b31a8aa"],["/tags/index.html","ca8852f24911c44555870a10c1e51408"],["/tags/vue/index.html","4c7b2a0dcca40f0238231549aceb81a3"],["/tags/web/index.html","5dc54c8d1bf3e3bf6008d9582249fd9b"],["/tags/划水/index.html","38e32966fd25e517778bd5ed56fac77d"],["/tags/包管理器/index.html","fe340b4f81ea982a4792d400b1daf5de"],["/tags/悦读/index.html","7899319460635e75733566439f529fb8"],["/tags/操作系统/index.html","e0f8aeaa3e4f7b4bcbebc2601e11a284"],["/tags/数据结构/index.html","61ce9bb39a8ac5fddcfffac280949627"],["/tags/数据结构与算法/index.html","3ef8bfc52319da6545a4ab2c85c83922"],["/tags/新年/index.html","d6167181dca90d6c1cacf28545c6af0c"],["/tags/杂谈/index.html","cedb93c75bf918dd76768d00f391337b"],["/tags/深搜/index.html","12eae098a3fb81a95dca54be72e080ab"],["/tags/笔记/index.html","4d3bf2ae5eccea2cabf1b77ea78c82ba"],["/tags/算法/index.html","6a45cfa3817f957eeaac2569efb97c9e"],["/tags/线段树/index.html","fc67bd3f793d8c63e6d1fdf0daa4ec4c"],["/tags/萌新/index.html","230b5b962b9a172ebfe1663ac3314ea1"],["/tags/计算机组成原理/index.html","1d72d18a34ec962addcf6c7bc57b881b"],["/tags/计算机网络/index.html","1422a737a3176cae0eeca18b4d94344a"],["/tags/质数筛/index.html","3f35ddc61675f0dc0fa2d7c50769b6a4"],["/tags/软件/index.html","ecad63fb23ad6467ccd82870a84226c3"],["/theme-sakura/index.html","f2f1c7da78d96c1697b71c00dce0e555"],["/video/index.html","ec358d6b9cd701db9d051f2618fccc6b"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
