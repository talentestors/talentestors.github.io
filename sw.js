/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","7cfdab24e6d154f36c64923725148c2a"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","e830ff9dd19b2af79233f33fc2a21afd"],["/2023/02/06/C语言链表/index.html","d80690624ffe62b19b98901b48fdcdd5"],["/2023/02/06/书籍资源/index.html","a861b6611a4d0b9f6b42334bf593f8ed"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","e28f2f4cf796682a281d94e609441dec"],["/2023/02/07/为水而水（笑/index.html","4d4ec2b8545f864f30cbb18755597ad9"],["/2023/02/08/洛谷主页源码/index.html","f1a0523807e3df0970ff6baa978c6092"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","605bf937dce39b5b186f7e0d7b7f4f89"],["/2023/03/09/Web前端笔记-Emmet/index.html","bde85ab4a171eacbf62a6d656581a1bd"],["/2023/03/23/gitalk-评论/index.html","7f5e78dfb0e0fb854bc278ba6b64d41d"],["/2023/04/10/用C语言实现字符串全排列/index.html","905ccf1ffa5fb740920fd7b3f2fba06c"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","33784e975013b65796eee5cea4b11960"],["/2023/05/15/C语言基础排序-demo/index.html","723398153c9aadbe6572fad5765d0d09"],["/2023/06/14/闲着没事干/index.html","7414ec4646d38bdbd3a38e7b78aa1dce"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","af225b2c7994c574c2120636517bf9bd"],["/2023/08/01/javase-note/index.html","cdeb7f34c63bce9e0fc984302bea1b86"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","0f4e313d56c0ffcd29857f3d45a796fa"],["/2023/09/14/vue-pure-admin/index.html","15cd1cd936897c6d30220e4613679d51"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","b7929279c62e09e2f32ea23191e28d36"],["/2023/11/28/C-CPP-the-memset-function/index.html","5892be739bd34d2808a74ce831c4810a"],["/2023/12/13/javaSwing-DynamicClock/index.html","1d7ebcaccbe7d0ee157435ed8851fe99"],["/2024/01/24/builtin-系列函数/index.html","56309825268c40b654bb91f99bfea9c5"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","730518fad5fc81d2fa05f34a240a79a0"],["/2024/02/09/新年快乐/index.html","d68a3edba9ee74f947c9faf9e7e494ff"],["/2024/03/26/408-route/index.html","cbb5384a689f41e827f50d3620d8a5ee"],["/2024/04/07/转载-线段树专题-xyw813/index.html","a367ef696e539b9bd8317419931ed58c"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","11f1833c9c21c2055dfecb5046057400"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","40f19a1c1d8a0a673f0f22a98d314493"],["/2024/05/06/cloudflare-display-issue/index.html","06a820bcd211637afb536204d7af0abc"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","85fc53a8e55e3fbfd7a9f5d1daed5443"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","16e5db5b36ed9801fe3b0e63e367095d"],["/archives/2023/02/index.html","7057f3b4dc98b358f1e880541db8bb62"],["/archives/2023/03/index.html","cb966f5c99d31f33e2df2de2afdff87f"],["/archives/2023/04/index.html","0bb64bc5c044950a5dc0a7cc802b2510"],["/archives/2023/05/index.html","83f5aae1f9ffe1f7a9b5151ddee1316d"],["/archives/2023/06/index.html","152d719b1efc40a4486d424837050be3"],["/archives/2023/08/index.html","2629090948c3ef328d96b8ad58faaf6d"],["/archives/2023/09/index.html","91d4045c1c3ca0e80c977d15e1c2c6ee"],["/archives/2023/10/index.html","605b7ba69f8c005af057fc1de60d5d1c"],["/archives/2023/11/index.html","61e577f2eef5c676e32f34db625f63f1"],["/archives/2023/12/index.html","9a3041df6ce9b6e4bf7be31ac8457615"],["/archives/2023/index.html","90e82eacb3fe419008f104f21dbc5cde"],["/archives/2023/page/2/index.html","90e82eacb3fe419008f104f21dbc5cde"],["/archives/2023/page/3/index.html","90e82eacb3fe419008f104f21dbc5cde"],["/archives/2024/01/index.html","ecdcdbb4ab8fc063d5f7f10a38ea0e3f"],["/archives/2024/02/index.html","418d0a33cb738d3496a42340106f5660"],["/archives/2024/03/index.html","1111126abe301501bf1f0822563800a3"],["/archives/2024/04/index.html","319cd3f1c8a096df5156ec3be50438ee"],["/archives/2024/05/index.html","a0fbf83c93f53970d7fb92d30312a3ba"],["/archives/2024/index.html","32e0769ecaf0d83149b3599ab3270491"],["/archives/index.html","24dd72d4b60c7abe6771c525c5b773b6"],["/archives/page/2/index.html","24dd72d4b60c7abe6771c525c5b773b6"],["/archives/page/3/index.html","24dd72d4b60c7abe6771c525c5b773b6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","82ea00e64bd7c7e6c2c9f79358579e36"],["/categories/技术/index.html","5c70ee31657183e2333d91e3d5e9e606"],["/categories/技术/page/2/index.html","bfeb8a8ce5529bb0cd4a5757f003eb9a"],["/categories/资源/index.html","ba9a7730e4900306c5b9ee02ae4a4452"],["/categories/转载/index.html","f32f37e7b91a1cf39d239f93d7d56a63"],["/categories/随想/index.html","6304e02c5e669436ca031a3f9d3efa30"],["/comment/index.html","804fe8582442a3d57d0789a929d2243d"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","b85337c21dc8ac27ef1638c338ab287c"],["/css/donate.css","e643c2b81533bf16ef9cec95397782b1"],["/css/font.css","c7807858238976b6ad3b057f18a64462"],["/css/insight.css","d794d9f2f2fe076c88766300f504870b"],["/css/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","b2f9f3131caf21f78f5fa0da52b766e2"],["/css/style.css","d6e1c153572a0a7056d286264660e92e"],["/css/zoom.css","57947d79a2a30fa3bf130ecb9d26aebb"],["/donate/index.html","d2e2922c20914e60823a1dfa3ddc10ac"],["/fonts/SAKURASO.old/icon.css","de62290299a00db1f9b10cbd65dd86cf"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","a32f0b0a39c3aa04ff6ddc68dc939d72"],["/index.html","3027a962038fb0db9447d53296315586"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","3bdfcef62390553b102cc9942def565c"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","bd288c24395ba5f78de9a6d2cb7ccff7"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","9e4c19a8db153d3b29663eeb34615c84"],["/links/index.html","9943f5d61a1e15d573c59bed91910bd6"],["/music/index.html","2ff005e1c8b5b5eb21b9356d501fe458"],["/page/2/index.html","2682bd6187ac3a50696399c7b2db17a3"],["/page/3/index.html","c24f1ed70676769408ac8114c093c990"],["/rss/index.html","a9a9da60a0df693837bf332889a3f278"],["/sw-register.js","65dbdd879fe941dec6daffdbbefd6cc7"],["/tags/408/index.html","cb2c925f4f498a36e0d573342be3be41"],["/tags/Adobe/index.html","6a01865be57ff819bd1b5e5d1913985f"],["/tags/C-C/index.html","76c3756d7936a13bef4b1bcc8734bf67"],["/tags/C/index.html","135b554d44803445a38aeed58ce88524"],["/tags/CPP/index.html","bb19f4ff8eb68d556facff513ba35b58"],["/tags/CSS/index.html","cbb23100692150e80b3ab9d4b04b990f"],["/tags/Color/index.html","58dd3476f763df3d7d2af42a0dd612a8"],["/tags/C语言/index.html","9856fd80bb3f04fbb7a643875d610323"],["/tags/Java/index.html","4312ed8cd3512b67ec1586799d73bd22"],["/tags/JavaScript/index.html","db62532729700bf77e15f9f14cc6a4b3"],["/tags/LeetCode/index.html","7a0fbb934d814e5f21aa7b80a7a47646"],["/tags/MSYS2/index.html","ae68a00c7e109db045ea206bb1718950"],["/tags/Note/index.html","5a319e8784eda3ac5fcc1eeb635f6ac9"],["/tags/PS/index.html","a233e880a886b0e2dad10207489b1c86"],["/tags/Rocket-Loader/index.html","f31189abfa2ad1b0782a1ea96523a658"],["/tags/Scoop/index.html","d3d44583756593ddaea1c71b55dc9de4"],["/tags/Software/index.html","0139205b2d131f1a10a1ead44c0e406b"],["/tags/Swing/index.html","e5f9b12a555ee5cc9d61c4fb1abf1bbd"],["/tags/VSCode/index.html","4dbfb6fccce21cb1c55a2da6e2ef2601"],["/tags/blog/index.html","b4e3e731525cb3e3ebbbd141d9c36c32"],["/tags/builtin/index.html","9ce4768da99fd767f3da0ab5a87b18fc"],["/tags/cloudflare/index.html","38ed9d86c79700b424dcf49b5e67914c"],["/tags/index.html","775b62834fb4ab99bd787d4eb85ff21e"],["/tags/vue/index.html","bb19a8c748baa7f70feb5fefcebe8c83"],["/tags/web/index.html","ba9b21b3b1e963e344c7110cc41edca1"],["/tags/划水/index.html","0bdaa6995f4b3a9c6e1eb9e6517627e7"],["/tags/包管理器/index.html","c93e63b15405ab169963bc45f5fc0aac"],["/tags/悦读/index.html","fa95b0a9e6e58c5749094e9a1128ea34"],["/tags/操作系统/index.html","fd72f286650d2de9cca0dc455c7026a4"],["/tags/数据结构/index.html","ff3dfa3d2202b86987c712c5286a61a3"],["/tags/数据结构与算法/index.html","daa07b983af91b340fa584b001543425"],["/tags/新年/index.html","97302316ea9198da9e1c1ddeba3bed83"],["/tags/杂谈/index.html","e54d0aff4fa036ce0eb2be6397c572bb"],["/tags/深搜/index.html","9b5baadfc22c889e2abb7691f4e6925c"],["/tags/笔记/index.html","3650bddb5c1b888f3cf62c8acf1f0b46"],["/tags/算法/index.html","573eeef66f9a6271dfe91c04c9136b0e"],["/tags/线段树/index.html","186c379ecfc2e82ed9dc05cabfb9ad37"],["/tags/萌新/index.html","5bf059d38ad46873d70fa60d47acf2d3"],["/tags/计算机组成原理/index.html","4f1a595e6c8f8f220b789ddf9f5988ae"],["/tags/计算机网络/index.html","b7d3615948f83f2dbdb1586609f3e896"],["/tags/质数筛/index.html","da9e1b7052d025ab9e3ab04387621e44"],["/tags/软件/index.html","cc1018675fe6c28dc5ad04dd1bfcd4e9"],["/theme-sakura/index.html","f0603cfe76129cee7198fa5418b9ab4e"],["/video/index.html","76278c4984650a49ff5f5aac525311ee"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"]];
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
