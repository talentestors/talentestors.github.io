/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","888c27d59a18c9fb9bea030840e63840"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","2eadc80bd4aeb792ebede0bea7ea384e"],["/2023/02/06/C语言链表/index.html","a5abd50aad545db36c8dff8f235717f5"],["/2023/02/06/书籍资源/index.html","be7cb9dd0464f0c86609e8bc09b4b1b6"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","ddad88fc8b968d0bff348e3161102f7f"],["/2023/02/07/为水而水（笑/index.html","575aa2a1627f837703ddf8890fed0504"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","4201d3cd949fbc476df83145d640ed8c"],["/2023/03/09/Web前端笔记-Emmet/index.html","d57daccdcbf750d5cfe5c4d1be53adb5"],["/2023/03/23/gitalk-评论/index.html","d6f23f233bb60548da4ced5c9123c611"],["/2023/04/10/用C语言实现字符串全排列/index.html","97b7e8f69140fb3ad2b8620b7c09af40"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","8aac5cc867f62f377d10a3b46074996f"],["/2023/05/15/C语言基础排序-demo/index.html","091bc3d3395a0f283fd09514a0542c42"],["/2023/06/14/闲着没事干/index.html","12f7891844a9eddb77d55221d473084a"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","1cc4039121fd2957ac993ee297077ab2"],["/2023/08/01/javase-note/index.html","e08bd5ba38e18e2f7594ea216fc01c17"],["/2023/09/14/vue-pure-admin/index.html","4a8b291ef476320cf5fefe7a8629303d"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","b656290371b834ccca3d6b0282a307fe"],["/2023/11/28/C-CPP-the-memset-function/index.html","e43afc6c31eb3bea7be5a1c64c9becaf"],["/2023/12/13/javaSwing-DynamicClock/index.html","7859d0c62f73a2428552e76e77290a86"],["/2024/01/24/builtin-系列函数/index.html","37f743e35ba18a390d5a88268feea137"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","11ad9cdfb68bbae1a29de1cc66e4bf57"],["/2024/02/09/新年快乐/index.html","ec88af19aceb44b66748d8f417e6fd64"],["/2024/04/07/转载-线段树专题-xyw813/index.html","9a144e6b0b9888d6d94b9945fa0e7e56"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","108b7f52c096a1fb1ab38737077eeb75"],["/2024/05/06/cloudflare-display-issue/index.html","81822750867063eff129403e99f9c9c8"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","e4310a03abe38ae2bf85ca0aff7fe683"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","fbf03cb47995247a676b5d4580780859"],["/2024/06/25/open-source-LinuxMirrors/index.html","781689b7ffb3fd61a8e04467391f3d22"],["/2024/09/02/Dinic-算法/index.html","3a81fed08f25cf59dd7393d01d9310e1"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","72152b2bbef08447f7738657772fb3c2"],["/2024/10/11/常用STL算法库/index.html","2349e5a7a4d7718ce478946224454320"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","6fb5a4bf6cd5c614542d54ff76f1b3fb"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","2fa8702ba099c11deec7e5b1247949bd"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","f2fd0fed58764bda275cec4ac0a45b9d"],["/2024/12/17/Where-are-those-algorithms/index.html","5480661b2626b4ee3a7af6d0fb8fe567"],["/2024/12/26/重构评论系统/index.html","f0476b8195a0dbec5ddd4959de00a1d3"],["/2025/01/01/blacklist/index.html","312c89ceb2a8df953a6f5693bfa8e25b"],["/2025/03/15/GitHub-Skills/index.html","dfc82a19ff02fd6fbb86d303bf2e587c"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","c96b1f90768ca7cf48594b4960cfba99"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","beb81a39098d5c9806600adc7a59a35b"],["/2025/08/23/github-special-files-guide/index.html","f75579aba8b3fe552152c09eceb1f0a9"],["/2025/09/28/408-route/index.html","dc4067e8c4912c827c335a5c309ea44a"],["/2025/10/14/rvo/index.html","352027f9ca4322640095b28cad86b270"],["/2025/11/13/What-is-OSINT/index.html","37eb0e6c2d6dbe25817ff6065d94bd80"],["/2025/11/20/DDoS-and-CC/index.html","ef7b2ff800d82547bb929a67cf6592c0"],["/2026/01/02/2025-summary/index.html","ff8f94c7aee721a993d4d0109d6e7798"],["/2026/07/26/reincarnation/index.html","089f6ff98bb9d994696d6a9de46f1c19"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","5e213b8664bc3b75fb6dbc3d239c7e76"],["/archives/2023/02/index.html","a4f0a138f5cfa0ca2a5431c738e16357"],["/archives/2023/03/index.html","872f1ef0bfd982c1eb5796e1ddc24f03"],["/archives/2023/04/index.html","8da5adb88cc2296ab152bc243c211c65"],["/archives/2023/05/index.html","df4f6550d8338b8f91ceb3d09388c38a"],["/archives/2023/06/index.html","d091b8ed1d38919b5c78af8e8ab9c615"],["/archives/2023/08/index.html","aa1854395edd7328270254e274908058"],["/archives/2023/09/index.html","1b20e8d084c6d1f5399b86bcb72fde55"],["/archives/2023/10/index.html","25b52b324298d9494d8063e3701de01b"],["/archives/2023/11/index.html","254059ec9bb6d406c2d66fc1a7768303"],["/archives/2023/12/index.html","dad783e279888451885cebe219d67503"],["/archives/2023/index.html","d59516f6f4656fe579cf933310886189"],["/archives/2023/page/2/index.html","d59516f6f4656fe579cf933310886189"],["/archives/2024/01/index.html","7401aabb8dc0d224762366fa5188e263"],["/archives/2024/02/index.html","0cd085a6e394f115bef95b171cbfd4f8"],["/archives/2024/04/index.html","d98fea98dcc46794802c0fa32b65a88d"],["/archives/2024/05/index.html","7f399b691b9c99170ae596c6f5e0c688"],["/archives/2024/06/index.html","c0aeefe290d96e2f3f2e329029bb1c41"],["/archives/2024/09/index.html","77777b3bbff5e6025ed21e66c4fcb1ea"],["/archives/2024/10/index.html","14aa4c1c7578742159aeffc09dcff399"],["/archives/2024/11/index.html","753ac3b7b53be14330531a514969c7b7"],["/archives/2024/12/index.html","43885762937e135ecf84dfcd864ceba9"],["/archives/2024/index.html","295ab2689c5dc00eb12382c48381378e"],["/archives/2024/page/2/index.html","295ab2689c5dc00eb12382c48381378e"],["/archives/2025/01/index.html","47135f389e72dcf59d1893b98e677f46"],["/archives/2025/03/index.html","b5f7c39f541d77b375a971ebff3be69e"],["/archives/2025/04/index.html","ee97549cae562f85dbf35c3e30642647"],["/archives/2025/08/index.html","379d41ff7d80fbc4c2aa28a019335c8a"],["/archives/2025/09/index.html","74396a4fba17c7f072c81756e140a38c"],["/archives/2025/10/index.html","a1c4e50fdecc6cc75213a921dae3cf0d"],["/archives/2025/11/index.html","0db4a002ef57e53f16965eaf70c00ee4"],["/archives/2025/index.html","2aa893ee4d2a1015387d9a7ce1714514"],["/archives/2026/01/index.html","8b25b0ea5937ffc5be576e471204943c"],["/archives/2026/07/index.html","472b9c34708d8d6d14a741cd47c63ecf"],["/archives/2026/index.html","f495b1b888bf9b0cd50896d7fea8f61f"],["/archives/index.html","855667bf4048740f3fd79875e0090c4f"],["/archives/page/2/index.html","855667bf4048740f3fd79875e0090c4f"],["/archives/page/3/index.html","855667bf4048740f3fd79875e0090c4f"],["/archives/page/4/index.html","855667bf4048740f3fd79875e0090c4f"],["/archives/page/5/index.html","855667bf4048740f3fd79875e0090c4f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","320fda73b5d8f1dd2e47f7c4a81147b5"],["/bangumis/index.html","27bf3f7d84f96511aa7016307511e64a"],["/categories/技术/index.html","93dbf7d2908495235b134585972f9ec4"],["/categories/技术/page/2/index.html","d0490ed167e193cef3f93a19b4e6a8e4"],["/categories/技术/page/3/index.html","f06438bf4d2a7d23931c9b3896a6eae4"],["/categories/技术/page/4/index.html","a5a09c5b9af192d16c87be7965f2bad5"],["/categories/资源/index.html","0878714551f53feb73da821f47979a5b"],["/categories/转载/index.html","7498f46597901e7ff14851a7c84da88c"],["/categories/随想/index.html","861422330488d31924c7b9331508cc1f"],["/comment/index.html","38fffd41dabea3d55abd5e3e240a126d"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","eb8f6d9bcf39be6222631eb87411274d"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","84434e32735a98f810aec3975867034b"],["/index.html","73df2f1c375e854db8711e87589c154c"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","418e3347ca00bc0a03e0758e22820186"],["/links/index.html","e31c60ab28c33a59ca19cae67eaf8b44"],["/music/index.html","e17de00300bf197e88586cb723220f02"],["/page/2/index.html","2f5c7b34e7007e1cab807090f876797f"],["/page/3/index.html","4becba27bcfd1ac1b515987e09df02cc"],["/page/4/index.html","ddcc3bbcac3cd59a18e3f230c5ac86bd"],["/page/5/index.html","66d7b90837b06f4bd16511977c75ff90"],["/rss/index.html","fa041ec922722694972a5527d27b86b1"],["/sw-register.js","2ae820a41ec2380fd3109ca17907e14b"],["/tags/408/index.html","9da830a9eb86f0975bc96b59c90ae56f"],["/tags/C-C/index.html","cad937693e6772317d947792e84271e1"],["/tags/C-CPP/index.html","b7dbbd3a3cfdf3633a7301950abf8c2e"],["/tags/C/index.html","fb2cff638dd8edf58257bbb94fa068e2"],["/tags/CC攻击/index.html","28d542211c7cf9f329b59bdf78500504"],["/tags/CONTRIBUTING/index.html","def236ffc580250d6abd2c24894f2026"],["/tags/CPP/index.html","32c3c4ebdbe5771581a0c37ad85e186f"],["/tags/CSS/index.html","76c26a4ca146c359caee6f6ccf42d3a1"],["/tags/CodeForces/index.html","95b802ac72492b087fff00cd018d3ffd"],["/tags/Color/index.html","90adc990af448d2d00852246a33a6f9b"],["/tags/Comment/index.html","3882cd7a3902e8c9fce6f2adb8bb49f1"],["/tags/C语言/index.html","05cc59e429e48a1ddae65062928e7d15"],["/tags/DDoS/index.html","58607ea0611fa2421e8a04487bf64b89"],["/tags/Dinic/index.html","070585b6318c62fdf3e9eec152a57d51"],["/tags/Div2/index.html","5ca6af1897174ea2d4755e48024d937b"],["/tags/Div3/index.html","25abc3934c1f48e2cd429ef63ffd4be5"],["/tags/GitHub-Actions/index.html","a84b214520c93e3967cd300aeacadedc"],["/tags/GitHub/index.html","4a04be74472082505dee2ee44016eb0b"],["/tags/Gradle/index.html","12ba447f9e17b9e453fcaa23b9e5d7b6"],["/tags/JDK/index.html","bf4d04bcfa366a5a63c3bd8c9cdb75f2"],["/tags/Java/index.html","14bfa72a616ff595bc4bd3957f00ad84"],["/tags/JavaScript/index.html","5e425c8ae340e2c21029144687312236"],["/tags/LICENSE/index.html","31fc6443d129c60c0a32485d53e38212"],["/tags/LeetCode/index.html","3e6d74309f242aad5dd1931de2b7b8b8"],["/tags/Linux/index.html","c86436c3501b9894bacff053dcd93251"],["/tags/Lombok/index.html","88df54422582c17ed3237fd613023883"],["/tags/MSYS2/index.html","b8d919910e1d3df20dc41587109015c1"],["/tags/NoneBot/index.html","9ebaba6008f393c1145c4829aad65265"],["/tags/Note/index.html","226668da0d6234a7a062620060a44df5"],["/tags/OSINT/index.html","c580da05b635f1791d139529d2ab49c9"],["/tags/PrintStream/index.html","a4b9a8f618a0744325de5b9e7f616c82"],["/tags/Python/index.html","58297af3839cf96ff2a39d26eb0c4a7a"],["/tags/README/index.html","668e3e6339710c769e86e3a97f89536c"],["/tags/RVO/index.html","88b3221f74773bb39a8f64e99b43bc07"],["/tags/Rocket-Loader/index.html","fa0044135151b4721d60c24b63071559"],["/tags/STL/index.html","4eb8434669f15061a3aab8afc1894d51"],["/tags/Scoop/index.html","5209cad26b8cc0b4cc082c82ec5aab01"],["/tags/Swing/index.html","f6939024be5b5263d64d9f2553c12255"],["/tags/Tomcat/index.html","c1fb09bcbb5170efadd9a631363b66cd"],["/tags/UTF-8/index.html","184a921492df1fc77924902cae6a2479"],["/tags/VSCode/index.html","2db41cbd6a055929115f9f8580c2595d"],["/tags/blacklist/index.html","cdf340cf6bd80eebcf2c4514a1584f25"],["/tags/blog/index.html","957899990e2b61ef1067383c099502f1"],["/tags/builtin/index.html","6be9e5fe2cbe1b8574d24bcbba7e51d1"],["/tags/cloudflare/index.html","0d1a3d35d0f80fc3f3ec94fcb32f309f"],["/tags/giscus/index.html","5529b9c4416ab891da19dbb514fb16d5"],["/tags/gitalk/index.html","c31b74268e40d0ea004dbfe36989269d"],["/tags/index.html","5eddfa6e6d632cea5f157483ce7280a0"],["/tags/tools/index.html","b570d9a9bac2e451e99f3865a1460e93"],["/tags/utteranc/index.html","2b7354cb5b1663831f58811cc1a5b4b2"],["/tags/vue/index.html","2eaeb68f5f28c749cfb5659c1a464614"],["/tags/web/index.html","ae7792b002c88a245782820f2563d585"],["/tags/乱码/index.html","02d0b8d9e0495d0c570fd1d20bb6529c"],["/tags/二分套二分/index.html","7cada667b19ee6d5f88a2d28d56ae2c2"],["/tags/云计算/index.html","f3ed89e2ce0dd1dc4c819cab2508c694"],["/tags/仓库管理/index.html","e1b356d8c79b6f79027d614661d45379"],["/tags/信息分析/index.html","a996db50eb22ac3ffb27cc32bd28f317"],["/tags/划水/index.html","7fdaaea7559db989803afd79c881e8b7"],["/tags/包管理器/index.html","7ce54c04bd331a642e003057a3ed1120"],["/tags/图论/index.html","ca2cd8bf0166125785eb77e1ce0bde7a"],["/tags/字符集/index.html","e2c489f4dac522f9ae0fbe8e059e7b5e"],["/tags/应用/index.html","5bd26d51cf7253d2ef582f190cacf8eb"],["/tags/开源/index.html","64c518425c23a3d5384813c1a231696c"],["/tags/开源情报/index.html","5158ab93d2f2b44570751d3686a61cc0"],["/tags/悦读/index.html","dbd14122f949075ea0b4aeaf92c37d96"],["/tags/技术总结/index.html","375dcd69927252c79dc3a6177cbc4db4"],["/tags/操作系统/index.html","f361a126ffdfeda38e06d0a6ad699bac"],["/tags/数据合规/index.html","70f2a1d7cea1cb92f5d5de35a3f31d69"],["/tags/数据结构/index.html","673d319db7e57976912535bad446372b"],["/tags/数据结构与算法/index.html","4f1efee0437b54699f5b884e23f2e33d"],["/tags/新年/index.html","cb4225b333f9dfccfc7e8327619e19a2"],["/tags/服务器运维/index.html","f5835b91c860e38d5150c556a340c298"],["/tags/杂谈/index.html","2d9b8b5e7373d5422c83d67f0ac6ed0a"],["/tags/笔记/index.html","f5fc914d27cf194226dea2c692670b89"],["/tags/算法/index.html","d444f13afc63b371e105f3ace60cdf48"],["/tags/线段树/index.html","64cfd67680f0a8339717b27e3a7b1a05"],["/tags/编码/index.html","6dcaa96659b25b687924cf356c17b1a4"],["/tags/编程技巧/index.html","b2e7d29aa93a420314ac29b2b991c6d9"],["/tags/网络安全/index.html","b0a2523bc3d76ffd07e4b1de265c63da"],["/tags/网络流/index.html","08c50d91baf0717fa88d7dc914f441e7"],["/tags/职业发展/index.html","4b781184bcac0ad934a0a6741ba9c5ae"],["/tags/萌新/index.html","6fe4bc4f40adce496fb2bb54bac396a7"],["/tags/计算几何/index.html","81bf259c54825f2d32cbc6314b670a0b"],["/tags/计算机组成原理/index.html","8fe455edff8b10e059164b7e892c6a24"],["/tags/计算机网络/index.html","a09f33621e612287e4c3046eeca03763"],["/tags/课程/index.html","2701b37193b0ad58b1de22c5a0daaa82"],["/tags/软件/index.html","50e251dacea8ba97e6862f932ddade6a"],["/tags/输出流/index.html","bae8328b032dd3d5280bb1e1a012d71d"],["/tags/镜像源/index.html","2a4d4c6864d7a501afccfa34af26dbbb"],["/tags/随机增量法/index.html","d264580e0f24970d503c43320d2e98b2"],["/tags/隐私伦理/index.html","63ad428078c3136aaa73ca385acacf04"],["/tags/题解/index.html","d9f054563a794cb173389de641b21beb"],["/theme-sakura/index.html","e5d58eb4abe3b427d6130ef39eba8c80"],["/video/index.html","da10a0409233509bc66451b22586bcff"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
