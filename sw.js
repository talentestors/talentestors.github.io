/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","87dec809190b3476d44ceb602790b479"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","e02e98c1e1dd51e15f7756619c75e9ad"],["/2023/02/06/C语言链表/index.html","3e74f1fa4835924e576d256f86fc55cf"],["/2023/02/06/书籍资源/index.html","de3aa4afe4d5390fc2d3e504ff9e1d8a"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","dec004af75fde9ed9080795ae6442238"],["/2023/02/07/为水而水（笑/index.html","87ad7ebd6a993a298bf2e8a41df3af49"],["/2023/02/08/洛谷主页源码/index.html","78d12935dc5aeae7dd100c6c84ca4136"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","fe6d8a55b8f58860aa4aefaa5190891d"],["/2023/03/09/Web前端笔记-Emmet/index.html","1ddcfb3fd200da9052021d4c60a782ef"],["/2023/03/23/gitalk-评论/index.html","fb66922b0e247f3ce7d1a5c5f8deda85"],["/2023/04/10/用C语言实现字符串全排列/index.html","b612c45689ce7a98870105fc6d4e39d3"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","5b37fc8fcf51f78ee29356a0ba149074"],["/2023/05/15/C语言基础排序-demo/index.html","643360edaefc22fc75a4a856a326053e"],["/2023/06/14/闲着没事干/index.html","b04faa9086249328b61f9c39f393d295"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","ed567cf436cb2e9aad4d953c58305127"],["/2023/08/01/javase-note/index.html","d5c0b085bb8d0d81d140e1b3ff5b566e"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","93a003ca44c6bf7591bb99022b66b936"],["/2023/09/14/vue-pure-admin/index.html","ad3cb49ed64402e9fd2d5e0767cc3ebb"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","68636bb8606ea1abe450323000a8083f"],["/2023/11/28/C-CPP-the-memset-function/index.html","bdc328b9099520a468836e5cac6a1833"],["/2023/12/13/javaSwing-DynamicClock/index.html","6530418ef188eff85bdb3d93b310359b"],["/2024/01/24/builtin-系列函数/index.html","b56ea67f3dee4a94011be86bf6246b38"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","902e5208555263461be6784dfe43743a"],["/2024/02/09/新年快乐/index.html","c6380b2e29366f0845281f136cfc64d2"],["/2024/03/26/408-route/index.html","c51b66bdc8cf0b7b8ab4a5675de2d49c"],["/2024/04/07/转载-线段树专题-xyw813/index.html","0731bc49ccc8435ee4ff2ff7bda22d41"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","3ba0d7b2eb42a0f6d357127626ec8e56"],["/2024/05/06/cloudflare-display-issue/index.html","598d55d8c210b89af949f269bc9e7c97"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","ab7dfb4c747c883178ffe10d16b39d70"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","b51c08a33c83bde89dfbd3eb2fde9799"],["/2024/06/25/open-source-LinuxMirrors/index.html","efaf6db9e1fb0960c1259c92bbdf9d5b"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","ebd1bef2d388e00966cec504b0a24e12"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","ab25589798cb2b6c2224dfd67e21cc03"],["/2024/10/11/常用STL算法库/index.html","f778798f0c5512e9d8efc1d8e966b202"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","96c24f1ed0e98d559df88906af34cfb4"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","e7105eb5ca34b796502a0d6e8dc9ed26"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","672f480d538e474aebad9a60de0e1385"],["/2024/12/17/Where-are-those-algorithms/index.html","68271a7ba12ba8f6edb5930b6a316e8e"],["/2024/12/26/重构评论系统/index.html","2c074d40234cc8aaf341bde0bf6cc1c8"],["/2025/03/15/GitHub-Skills/index.html","eae7a750ae991fe51c7200e062b06322"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","4c0ca61d8a466c4711713edcd9c4b320"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","b89fc06922a4e9bea86fbc75bdeb5924"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","0dad8e9804d961ed5f198d07300b49bb"],["/archives/2023/02/index.html","9ffb30cf1263e2c5eafadbe3dba89671"],["/archives/2023/03/index.html","442304d19776d2f70f16a5fdcf2606c0"],["/archives/2023/04/index.html","68b5c0f32355efba16fdd2fbbbc866db"],["/archives/2023/05/index.html","e03b8cc1699e649d42d72ef214bbf023"],["/archives/2023/06/index.html","9c0f4abd7c9ccec46253303a192d4c38"],["/archives/2023/08/index.html","abd0475b9da0a0608adbc37dfc7ffc55"],["/archives/2023/09/index.html","0ea9959b12b7ad65289790e6c66d6740"],["/archives/2023/10/index.html","24f13e146033921c7fd37fd6f26ee02a"],["/archives/2023/11/index.html","ca4addf439342d0ffe1ceb865aec2448"],["/archives/2023/12/index.html","d466b8d848052aeb3ebb25c16bcda6a0"],["/archives/2023/index.html","8ac9a79fb07684433d2a47b934214485"],["/archives/2023/page/2/index.html","8ac9a79fb07684433d2a47b934214485"],["/archives/2023/page/3/index.html","8ac9a79fb07684433d2a47b934214485"],["/archives/2024/01/index.html","6a2788390307567b193f329d07c7a0ed"],["/archives/2024/02/index.html","cc229c598bf308d33594dbc2c93975a0"],["/archives/2024/03/index.html","2dce23e11d3ed39f01969ab6359ff7dc"],["/archives/2024/04/index.html","bbd1fc302f79a5080ba4091134a44879"],["/archives/2024/05/index.html","b4b88d4ae440acfcb09c96f1b066badd"],["/archives/2024/06/index.html","ed5eea9a02e9c7d3f73f749bdf9304fe"],["/archives/2024/09/index.html","539d1078701d17eeb5244b3c44d2ac6b"],["/archives/2024/10/index.html","74a6f9db54f2d13694f18e3a10c7b56e"],["/archives/2024/11/index.html","4d65865da40195c514fe35f71199e561"],["/archives/2024/12/index.html","e2cffa493ad7111b78ff5ab6a73ec068"],["/archives/2024/index.html","21bd28bc33aa0789c48ef9187e579357"],["/archives/2024/page/2/index.html","21bd28bc33aa0789c48ef9187e579357"],["/archives/2025/03/index.html","1b37482b7b3781fdfeb80043b73febda"],["/archives/2025/04/index.html","cf7d7f10955132bb66ca2c507ef9a3ba"],["/archives/2025/index.html","deb572131aeee9d946fe884535d36590"],["/archives/index.html","b71b9669a17160dca4325b82550d2601"],["/archives/page/2/index.html","b71b9669a17160dca4325b82550d2601"],["/archives/page/3/index.html","b71b9669a17160dca4325b82550d2601"],["/archives/page/4/index.html","b71b9669a17160dca4325b82550d2601"],["/archives/page/5/index.html","b71b9669a17160dca4325b82550d2601"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","7c752c5d3cd98867fba2591966999fc3"],["/bangumis/index.html","aefc81e8a76379f09592fee8faf8056b"],["/categories/技术/index.html","07820a528ad7403788880aff589308a1"],["/categories/技术/page/2/index.html","290464c58dd188019ceb70ffdee5b6ee"],["/categories/技术/page/3/index.html","abff8e1bff186625002e24dabbba2b0f"],["/categories/资源/index.html","7dcb90ded96342fbdf602852f18da27c"],["/categories/转载/index.html","6227a4c493cdf5daba6cf6a67ff133db"],["/categories/随想/index.html","f1b55ff599ac31fe3392995799458794"],["/comment/index.html","896b8a8ee35a2b183bba84ef6ddf3e17"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","efe0b02bc0de7c412a474319e043351e"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","3a815c469bd9425ec42f94daf65ae090"],["/index.html","50359905c586e4260bcc1800e05bb934"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","6b21e65b642e347d0cbdd0fe5a32cb4b"],["/links/index.html","e14d746c6236e00dc93fc7a655fce08d"],["/music/index.html","21257623b138aea3bbecd04fde3845d3"],["/page/2/index.html","efb6583da92e9914034d4f22c13943f2"],["/page/3/index.html","190fc7c8dd8e09b49138fae612a29936"],["/page/4/index.html","3143175eaea13943f5ad7dbef8cb7f7d"],["/page/5/index.html","921ea3ff4a7728d03d90d097b3544da9"],["/rss/index.html","ef42a64a2148127b2b3d4019039864c9"],["/sw-register.js","ed7e2c6704da8da8a1e1f29b5222a2a8"],["/tags/408/index.html","ebe24539df81fe57a1f7f7b8bc3643d0"],["/tags/C-C/index.html","376daed4fdf70de745bb113669e22579"],["/tags/C-CPP/index.html","c3ba0d33d358742c5ae652ea0f02c96b"],["/tags/C/index.html","0f49a5904c0f66d14cd66c0799c5584f"],["/tags/CPP/index.html","e22aafd976a43418935339eae8b11313"],["/tags/CSS/index.html","e2b64248f2da7cdefda3b4db33b13a1d"],["/tags/CodeForces/index.html","6f62076658c5facd629991be1edb5020"],["/tags/Color/index.html","5ea89c9a2bc6edcb27cb65768d8f4274"],["/tags/Comment/index.html","664bffbe73826ded3a684fb2a550179a"],["/tags/C语言/index.html","5d87f16ee1b524fdb953fa9d70a82e19"],["/tags/Dinic/index.html","cc46c235615ba62f482c4cf901649b41"],["/tags/Div2/index.html","1ce607e9d15cc2854e81e6386d2bfe11"],["/tags/Div3/index.html","625415fb49372f4f6a0917bc5a5f3c62"],["/tags/GitHub-Actions/index.html","343dd5d1972d77b2096970d34a766152"],["/tags/GitHub/index.html","60387841d4fe6058770e6add0c674a11"],["/tags/Gradle/index.html","570e532548a9a77f1b15ed94c3d35a2d"],["/tags/JDK/index.html","3b3e8376bac9068a7d10b7c154cb9f84"],["/tags/Java/index.html","782a0feeae8570a055a59f14847cecc9"],["/tags/JavaScript/index.html","e00274396a1a14e3c3710185bf3bde2a"],["/tags/LeetCode/index.html","72dc2c71676c32807869a115584f36e5"],["/tags/Linux/index.html","32cecec06fca7861bceec09c1c68bf32"],["/tags/Lombok/index.html","d8c363ef443c18153204c54de70806b0"],["/tags/MSYS2/index.html","cc14fb78e0eed485dba7f6696730cc39"],["/tags/Note/index.html","70b39dc9264694fa44cec0450b903d0d"],["/tags/PrintStream/index.html","6fabfbef44c17b9250a870997e0c4b80"],["/tags/Rocket-Loader/index.html","8efa111cc0549dc2f1035b14c2cefc25"],["/tags/STL/index.html","e68d4442c2e368d58a9fe2e2f7a4b495"],["/tags/Scoop/index.html","237d0e6d31b20d3bd370b9fe01161ac4"],["/tags/Swing/index.html","c62b9120324b25d96661594e0115025f"],["/tags/Tomcat/index.html","568a757d236d3819e9e14e256e9dea6a"],["/tags/UTF-8/index.html","cc2fb82cdab23eb4e39e4ab205db97a9"],["/tags/VSCode/index.html","029facb2839b1312210dd9389ead6ba3"],["/tags/blog/index.html","ed0589d54b34158f19d1cf9c9984f9cb"],["/tags/builtin/index.html","6f5a4fe85ba4ed7cb20347e4ec53a814"],["/tags/cloudflare/index.html","26de5e7fa8214b7e9b44abff5fc61bf1"],["/tags/giscus/index.html","99e4a41255faa1596a43ed8d345183c3"],["/tags/gitalk/index.html","16c9d37989e89bedfc210450a6062293"],["/tags/index.html","3124371c5e87dd64fb8df1377bebd5d4"],["/tags/tools/index.html","613aedb2764cb43bb81f2fcfd36e088f"],["/tags/utteranc/index.html","d0702c37f65ae7087bdb3a75f351fd43"],["/tags/vue/index.html","3b3fa112bc487cd8089fe4e52608df85"],["/tags/web/index.html","988ecf1ebbbe8521b858708a3a3cbea1"],["/tags/乱码/index.html","9db405a4e460ae25f4ad72127e64e946"],["/tags/二分套二分/index.html","ee9acf826a2a6249d0b74347ec77c16e"],["/tags/划水/index.html","1041ed384d1b22708dab1da6391b05e5"],["/tags/包管理器/index.html","67809ba9aefe34bc8b5087004f3e6b03"],["/tags/图论/index.html","6ec07507e817b6ba7a36050f6df27587"],["/tags/字符集/index.html","74e0838e99de84b1fef24e18e2bd1433"],["/tags/应用/index.html","0946aead4d0a0f243c1ee73c5cff0de8"],["/tags/悦读/index.html","e32d72bba2ff62f9e8d940573aa907a7"],["/tags/操作系统/index.html","83311a86d1214d992e7aa2e4f966e7fa"],["/tags/数据结构/index.html","4e0fb3ca2645c5929d9158547beaf1c4"],["/tags/数据结构与算法/index.html","7666785f9e7e0d3100906c1d243b9724"],["/tags/新年/index.html","e47b71298efb012c291ed5f7192b4967"],["/tags/杂谈/index.html","67a7abcdbf6ba2db0855804c615cdfc1"],["/tags/深搜/index.html","f242232482bea6d006bb5904e6c02aef"],["/tags/笔记/index.html","417ac97e21250b4d310a08e83b9bbc9c"],["/tags/算法/index.html","bcf677b98816a02878cf6ae8dcc1d79d"],["/tags/线段树/index.html","3d3e668a8da75f52ec941de4fce1ce87"],["/tags/编码/index.html","7d1cc1c93331541d0ba05a1fd51886ae"],["/tags/编程技巧/index.html","bec73a56d494f960793ed066b082f8bf"],["/tags/网络流/index.html","a20955274f1165c5386cc8d679d4f267"],["/tags/萌新/index.html","7560c47b79fbc9c897c093fe11ee402d"],["/tags/计算几何/index.html","6297d94f1d8e59f60c622ff728b77c48"],["/tags/计算机组成原理/index.html","42cc29168d7d09e15b157d5a6430cf57"],["/tags/计算机网络/index.html","5c68b243fc28ca796c184c2458197b9d"],["/tags/课程/index.html","7db09997eed0a730b22a3daca3abcdeb"],["/tags/质数筛/index.html","e9763081baf15214a94db864eda06a78"],["/tags/软件/index.html","b9b872f88c37d163959ed41f1a3affd8"],["/tags/输出流/index.html","1b62c5e5606ae3a8338c0f57feadbf17"],["/tags/镜像源/index.html","024e96e526759477a2a70e4767002a88"],["/tags/随机增量法/index.html","b132bbf4bfd0b7f83cf2fec73f952907"],["/tags/题解/index.html","87f9925677d00f554acff8167cea864f"],["/theme-sakura/index.html","747a6f90329fdb407387ac4fc63ba1c2"],["/video/index.html","be1ab53b2a22dbff2bc4fd7e3a67f3f5"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fastly.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"gcore.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});





/* eslint-enable */
