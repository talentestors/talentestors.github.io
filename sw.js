/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","1ad2266b1d189c2eb5cb6941b290954e"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","999042ad9bb8b617c9fb8c38ad4fc806"],["/2023/02/06/C语言链表/index.html","f4d8f1b41a9e85a1c73a0cbfc78c9c49"],["/2023/02/06/书籍资源/index.html","08b544bc4d67bf42d0d6e0937008fef8"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","51ebb1e2d2eca7b989ae039277bf042f"],["/2023/02/07/为水而水（笑/index.html","656ccb5a18ca9fe8734873f240569a68"],["/2023/02/08/洛谷主页源码/index.html","095f7ed5c940271fafca8deca7750e8e"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","ebc5045356f8a49e01541ad574ab97f8"],["/2023/03/09/Web前端笔记-Emmet/index.html","5704b4d221598344bc87b761c67b96fc"],["/2023/03/23/gitalk-评论/index.html","9d417409e652c8f49d32d7a10545840a"],["/2023/04/10/用C语言实现字符串全排列/index.html","d295721697b6d69ce0730b02260f52b7"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","48c6869ecd299dcb763a9ac1c2c38dfa"],["/2023/05/15/C语言基础排序-demo/index.html","e5b0cc9cc2b53569f08b49d9a8f79123"],["/2023/06/14/闲着没事干/index.html","650ca804cf3cf0e343c96d61d984c529"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","73733de982aaab8cb20d2cb016f7f45d"],["/2023/08/01/javase-note/index.html","a76285b2c70297805349157a1317b277"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","9e578f12e3916ccc76e1a8276191ed17"],["/2023/09/14/vue-pure-admin/index.html","577c06421fa0eddc27024949599a1981"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","1b46134c07858b256d894e820dcce23c"],["/2023/11/28/C-CPP-the-memset-function/index.html","599eb637e3845db3dfda5c37c19962d1"],["/2023/12/13/javaSwing-DynamicClock/index.html","91b34ff86dc9b50d294235b9a484960d"],["/2024/01/24/builtin-系列函数/index.html","dbda7afcfd61d5753fb0144f55711484"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","2fb1d9d455c06870948cd43a779a634f"],["/2024/02/09/新年快乐/index.html","e2d65369d1b56fa0f5cc05f2538fbc82"],["/2024/03/26/408-route/index.html","ed856dde64e8531e8c6af9c8c4f52bf5"],["/2024/04/07/转载-线段树专题-xyw813/index.html","6ca30029a05ed0e6107de1694a9c8207"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","ab7092828161ba85017b4e8991569d39"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","fb747cc7591d26aa3ea7a0f9252e60d1"],["/404.html","e11c66ba9b1f71906ba660f7c1f4e10c"],["/about/index.html","6565a3d6c519ab9e11315840a3c85ebc"],["/archives/2023/02/index.html","65e2e71780bb729e2133362632355c1a"],["/archives/2023/03/index.html","d43a958b472c0d8ccb242e861471d521"],["/archives/2023/04/index.html","346d6923985836861bc8dd73074be53e"],["/archives/2023/05/index.html","3464daf0c7c3bd686c2164cd5531c230"],["/archives/2023/06/index.html","f1ef9ce810bc2ff9b7abbd7f7a8568df"],["/archives/2023/08/index.html","9a4bb0854ef27553462adcc5eb51a1e7"],["/archives/2023/09/index.html","d74f473e4174b25770742a111aa4bbe3"],["/archives/2023/10/index.html","cb7d5be9b99975e30965d5c29cdc3ecc"],["/archives/2023/11/index.html","8f32531b5874cfb34335696bce7f331e"],["/archives/2023/12/index.html","09676ffed603a6aa514ca865e222dcde"],["/archives/2023/index.html","01110a5857da5526fdaa87adf1923b2e"],["/archives/2023/page/2/index.html","01110a5857da5526fdaa87adf1923b2e"],["/archives/2023/page/3/index.html","01110a5857da5526fdaa87adf1923b2e"],["/archives/2024/01/index.html","ff82094f7ce7c1d0fcf9fa73b563d678"],["/archives/2024/02/index.html","08cf3f0e85360d47b8afc2566140f27f"],["/archives/2024/03/index.html","e797b2130b175e3989bccbea0a709078"],["/archives/2024/04/index.html","712e37ea3bb49d4500242dce1aa3c063"],["/archives/2024/05/index.html","7c46023191462d45271304391915b17f"],["/archives/2024/index.html","d19163155145eba4a082da3434219cdb"],["/archives/index.html","3ef25ac9fd8da04d419eb2c46e47eb1d"],["/archives/page/2/index.html","3ef25ac9fd8da04d419eb2c46e47eb1d"],["/archives/page/3/index.html","3ef25ac9fd8da04d419eb2c46e47eb1d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","d62d0f65ca35f5a0feb4838c913015a4"],["/categories/技术/index.html","e0f9bb32b3c9fd1e747aa1de75710b1f"],["/categories/技术/page/2/index.html","38a0ea26d30b448b58b5e1422b724cb8"],["/categories/资源/index.html","3872eb466537753e5c8978ddbdbcd9d6"],["/categories/转载/index.html","8721fa95c904c687024c547e1968aa7c"],["/categories/随想/index.html","4b43422f05d9bc607537a7b65fbe3337"],["/comment/index.html","acd0970ee9e31afd42f84cdce14f271b"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","38b4b5920488dd6461a63e4b42a4db23"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","cac30bc2856fcdd7b6832a98ecc9aefd"],["/css/style.css","1f09c3dd9fabab91ea957a1354098c1f"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","a8a03a7f8bbf2c8e982609ce1decc1d0"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","50b0e2c8305f0e09d43f9df0f0fabca0"],["/index.html","466e832e2ca4f682e6053c334ed43411"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","6cc074cd941d3223423e8d07b063118b"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","dd585568c8fb7fc0a9031ad180c154da"],["/links/index.html","a752fbc4eba8ae9d122d2a2a5bf97046"],["/music/index.html","d5e403427d413ed2c576339241eaf05c"],["/page/2/index.html","0665f14695f1e9442339f74f44a50160"],["/page/3/index.html","510b97c40f4eb35a69d91915c4338663"],["/rss/index.html","0c2d49d8b72a679d178e018ab0d82222"],["/sw-register.js","4e52fcf0c30f1e29ed578dcd63ee60b4"],["/tags/408/index.html","819aef1e9ac7759133c619aee16b162f"],["/tags/Adobe/index.html","09410656d44a3f97a45db43aa387a022"],["/tags/C-C/index.html","2d01460575f472966e4b154a5d447256"],["/tags/C/index.html","656e7f0b30823705312ba8ebff969a4c"],["/tags/CPP/index.html","2779481149e828882e5a0d9b426f2288"],["/tags/C语言/index.html","62f7c240af47c3eb6a69a9444e9f7af7"],["/tags/Java/index.html","2bd74a201dec67c61983d4087ab1c30a"],["/tags/LeetCode/index.html","358c9555210aa0fb024a845186daa1e0"],["/tags/MSYS2/index.html","75db987fee6eef5cc4ca2f2988148d05"],["/tags/Note/index.html","6087a2164b754b4bd24354124d32f525"],["/tags/PS/index.html","23342166debd04646340def04f0abfa5"],["/tags/Scoop/index.html","7b3fd2219101c09681360af8253090be"],["/tags/Software/index.html","2011e4472b80421dae162fc3add658b4"],["/tags/Swing/index.html","7ba7ad4f5b51c6b62e69bbfe47e9befc"],["/tags/VSCode/index.html","e9ced2e79873aec3d2095b587a4c5cdf"],["/tags/blog/index.html","ab0bedb72c1eeeac711bc929a44055b3"],["/tags/builtin/index.html","9a66b3c512d589b7f6e8248c04847dc2"],["/tags/index.html","e2be5b0e79840efedaad853c8a163ceb"],["/tags/vue/index.html","a4ea0f5a5d167c8d41bff51f61c21ce7"],["/tags/web/index.html","dc6b7e9b068cc73fbb7fce0097fda671"],["/tags/划水/index.html","afefc57911ceb26ebc3463892a591877"],["/tags/包管理器/index.html","c1b9299cdcba9f18a125223f9eb67efd"],["/tags/悦读/index.html","c917df258f5238e6f7aa82b4246212f8"],["/tags/操作系统/index.html","500573f9be1f2f2f541db70fcbad76bc"],["/tags/数据结构/index.html","798846edc7c14d2ca94d979eb65d90a9"],["/tags/数据结构与算法/index.html","634b3a62edd1bd76f82cdf9e8ad561b8"],["/tags/新年/index.html","ac874be22333f8db987f0fdee11f561c"],["/tags/杂谈/index.html","676b091c1314fedfba50f4bc56aa05b0"],["/tags/深搜/index.html","fb8bc338adcab77d0166cdbc7e676953"],["/tags/笔记/index.html","8b04d357f1a2d40b7469df3d1ab336fe"],["/tags/算法/index.html","033dd3c2763cad391b67c003a2608963"],["/tags/线段树/index.html","4f58824f9d2589787901c95657728079"],["/tags/萌新/index.html","9376832e2de09c3cd09ed46aea5ced73"],["/tags/计算机组成原理/index.html","db3e0817a30bd05f26bdbf9aa3386de9"],["/tags/计算机网络/index.html","8961dea1c686b971fcbd1184a15cf8de"],["/tags/质数筛/index.html","775d629c8ffebccac51285da3f89750e"],["/tags/软件/index.html","081151098f7984e04fea455c6ede4d68"],["/theme-sakura/index.html","2f4110d8f9790df9eeff5f0fa20f431e"],["/video/index.html","2fc1351ff807f0ea6b344581ee943643"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
