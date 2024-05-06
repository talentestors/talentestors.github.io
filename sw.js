/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","e5daf9d835064315c41aa5453b015805"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","157d5e94e99221ed6f2cd826485282b6"],["/2023/02/06/C语言链表/index.html","8af784036721b6f185de6ff849f20eb2"],["/2023/02/06/书籍资源/index.html","45f2e269060cb6e55e0bcd69b1253b31"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","8d09bd3c0329da13c3be04d38c8f0fc4"],["/2023/02/07/为水而水（笑/index.html","f60d86408217091cb71669cf15316f5c"],["/2023/02/08/洛谷主页源码/index.html","668fdea778d9f6c6a7db4dbb0a1b4d68"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","12f3eb2ccb3e6000570615e6aeb62c95"],["/2023/03/09/Web前端笔记-Emmet/index.html","93768ee17030d9ad3da4a4f880372574"],["/2023/03/23/gitalk-评论/index.html","883ea897da56bea4b1893b1154e27964"],["/2023/04/10/用C语言实现字符串全排列/index.html","f5cff34bebf11f994347b40ed9ac82fc"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","f592b0b87c107779106ca7be4b7c40bc"],["/2023/05/15/C语言基础排序-demo/index.html","14b847de03deb1f62fb9c6733c86766f"],["/2023/06/14/闲着没事干/index.html","491fc58237065f26c2d1d01e8a6b39ae"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","ac062d9f5e8efe374781db3c214a5822"],["/2023/08/01/javase-note/index.html","9810d74b23c1859af2a9a94917655486"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","d5d4952bf53e605d36a72be33c36a304"],["/2023/09/14/vue-pure-admin/index.html","e1219c10f618973e55d30b0852255b5b"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","761b0faebe8acbcc087fb5afb5bf1f08"],["/2023/11/28/C-CPP-the-memset-function/index.html","87a4ad75caa4e35c19fb5844a5abc055"],["/2023/12/13/javaSwing-DynamicClock/index.html","109df0e5bf16962f46156020c7eae7d0"],["/2024/01/24/builtin-系列函数/index.html","1e9c8c43bb0f93c9e44d057d1f92d53f"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","757f53ce1087b2c1e719cca374cdec09"],["/2024/02/09/新年快乐/index.html","011e23fe54c7e26f21a695fd3aec5961"],["/2024/03/26/408-route/index.html","a12cdcd29a899ec48d2e3984d3491944"],["/2024/04/07/转载-线段树专题-xyw813/index.html","9475a1088c224dcfac828dca95cd73fc"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","656e72f862425effff84a90d539f3aaa"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","2369f795113dacc3119ce4189bd0079a"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","1ec6d02e15f667cf869e71026245de65"],["/archives/2023/02/index.html","9e1a5204e6a7d445bddab70863b45aa2"],["/archives/2023/03/index.html","5269c61a2bbf5744d889e00ef88e7187"],["/archives/2023/04/index.html","6accd4e94192633924473d1d7db7c113"],["/archives/2023/05/index.html","876762b86059aedf2060f8a47cbb345a"],["/archives/2023/06/index.html","f6b7c7b8b04d8a76120943ba998edda7"],["/archives/2023/08/index.html","8c43e716207cf1ff0cbeca917ef84e72"],["/archives/2023/09/index.html","18ee0923cb35597d5ae24a03399425c5"],["/archives/2023/10/index.html","422fa273af3abdc31c9e44d3b0551695"],["/archives/2023/11/index.html","c59acc813ae6f99ac366697d7a18dcb3"],["/archives/2023/12/index.html","45090064d8fc70ea8c5cbe4589d2caff"],["/archives/2023/index.html","435126225505a5c73a4efc3be79cd3d9"],["/archives/2023/page/2/index.html","435126225505a5c73a4efc3be79cd3d9"],["/archives/2023/page/3/index.html","435126225505a5c73a4efc3be79cd3d9"],["/archives/2024/01/index.html","1e9b54b07a8b904928290ec812723b4d"],["/archives/2024/02/index.html","42f6c07be0d5b944568b692478c539fb"],["/archives/2024/03/index.html","617b6b88d50e11792aa503bcd36cac71"],["/archives/2024/04/index.html","b4b73a6e575c55d13c0a7e048aef3662"],["/archives/2024/05/index.html","7efd2befb5886262fd0865e6fd37fb08"],["/archives/2024/index.html","84e39d4913658c50afaa6bf890884e24"],["/archives/index.html","f1bfcd5bca051886f6cb48d941ab466f"],["/archives/page/2/index.html","f1bfcd5bca051886f6cb48d941ab466f"],["/archives/page/3/index.html","f1bfcd5bca051886f6cb48d941ab466f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","05d2d33e8febfd7326db7ecc109cee5e"],["/categories/技术/index.html","07b33c19354176310187ab0e1c118f39"],["/categories/技术/page/2/index.html","795304efd1643036b026fd37c986e008"],["/categories/资源/index.html","46a2195b525d94395ebb8240ece02aec"],["/categories/转载/index.html","5883d20dd178de6582121c56e59b8aac"],["/categories/随想/index.html","dac52773dbe193f484a005209e5aa0c0"],["/comment/index.html","8ab611058e077c3d36be19c24ac958ba"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d51f7fa02faaa39e4d9d1d4c81fa5874"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","282b1e8bff57ec76de724c9ed051c739"],["/index.html","382a43ebc85428dc9332d1d55f356609"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","2c023587765ed740bac32bf69904ffeb"],["/links/index.html","bdfe8c0d3c6347bc07c190d78915138b"],["/music/index.html","2d2f18fa14817d4a3870f981adc438ae"],["/page/2/index.html","af79f2267ac6a2af7060b7494563d520"],["/page/3/index.html","38b0a094868cedeefdcefcccbf2eb22b"],["/rss/index.html","4463283d62a2da7697b8afaf4d7b1a53"],["/sw-register.js","eaa1221314d4099e4bfcbae540da2a74"],["/tags/408/index.html","1d6710e1a2e6669c38a0d60506551365"],["/tags/Adobe/index.html","ba2af581f584e5de0a335aabe9a44fbc"],["/tags/C-C/index.html","f1a922b662fa47fb964aa63dda353290"],["/tags/C/index.html","1946a14cc843debf055a787007a8d66c"],["/tags/CPP/index.html","f22722993860266cf151e060bdf411d9"],["/tags/C语言/index.html","939c8285fd7da31c0b4eb719191d8af5"],["/tags/Java/index.html","1c142ebbc643f8d47728ebd7d77968ad"],["/tags/LeetCode/index.html","02fe2838a04cf34103150550800f72f1"],["/tags/MSYS2/index.html","dfe8d440b5dca5d818fcee266d06ffc1"],["/tags/Note/index.html","2b6e5c5607c614888f2f3f9adc12fd34"],["/tags/PS/index.html","de4f7dcff26481e326bdd2f21b83a502"],["/tags/Scoop/index.html","1cc0f88a9afeb1d44b47ba11fbec4d4a"],["/tags/Software/index.html","19df76d825673cce257f65ada7bd83a4"],["/tags/Swing/index.html","c02be8cd40ddc50dd275f7ab97ec4d64"],["/tags/VSCode/index.html","d162409bfeb44c22e36d202fe6e3a40f"],["/tags/Web/index.html","9eedaeeebc2864a0c4a6a63d95b944e8"],["/tags/blog/index.html","7b6aba243bb23e704bad32872fb69298"],["/tags/builtin/index.html","5f3a37fef4d5d9a9ed3380f102feb702"],["/tags/index.html","f9533446f61def0b1d4fde94fda252a3"],["/tags/vue/index.html","42bc7a01c8f7e77cb3fbe174c5ec9e25"],["/tags/划水/index.html","bd37169e90661ef574df9b7b429e174d"],["/tags/包管理器/index.html","1d95d9280b82f0ae0fa7c89e85ffd066"],["/tags/悦读/index.html","738a5d945761d8951ddc500ddcc15753"],["/tags/操作系统/index.html","27ddf6019057b20d26593a95db30be96"],["/tags/数据结构/index.html","3f1be57f9986cd7f4f77cebf01b4084c"],["/tags/数据结构与算法/index.html","7cc632610b33912ca92ce1b489508a89"],["/tags/新年/index.html","2bda3e2027b824b8c205e15a6e414d48"],["/tags/杂谈/index.html","aa6a58fec4e282f74daf5f437ddc186b"],["/tags/深搜/index.html","a7d79ae3283e058c9d41391825247cd4"],["/tags/笔记/index.html","92f1615b749089fc457239f01afe6c2d"],["/tags/算法/index.html","10e9166d115e5def41a820dead239467"],["/tags/线段树/index.html","692e8db129c63678040324cf3cf16f84"],["/tags/萌新/index.html","5253658ad539913481c7b7f54178d97f"],["/tags/计算机组成原理/index.html","a7941e4a0be7fec5ab58c1cf0b8a28bf"],["/tags/计算机网络/index.html","b207ee2a86ed3107f633c924f3a94361"],["/tags/质数筛/index.html","d7119bdb5b705688f4a0da3855275aa8"],["/tags/软件/index.html","422f75136f198c0611e7a209579985f1"],["/theme-sakura/index.html","4083bf8e11f02c6ced44d6a4aff51a47"],["/video/index.html","d8cf479288b159b234cb7906984b46ab"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
