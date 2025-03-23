/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","26f2df72631f77612913af924e053c55"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","2698672eddd03e0ca1527e96ca5398b1"],["/2023/02/06/C语言链表/index.html","c0bd0c6b63f8ea90201c063d267731ba"],["/2023/02/06/书籍资源/index.html","7945668ee41c858eb98e5ab57c85ab73"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","f4f0a7b7e17527164e87f2facc5f8622"],["/2023/02/07/为水而水（笑/index.html","ccf5e1419c4e7d71a028440dd99246d7"],["/2023/02/08/洛谷主页源码/index.html","954e0dd0ec40f7745608135dde8d7a10"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","ee687544a5e3f197c03bbb0aad434976"],["/2023/03/09/Web前端笔记-Emmet/index.html","4c77432c0fa14b8c67d47b5aba1f7f0d"],["/2023/03/23/gitalk-评论/index.html","6356dfa2df7c4a056ab60327f9f623b6"],["/2023/04/10/用C语言实现字符串全排列/index.html","c8173c2070bab8b24302067c52231671"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","6b2d6db667dae64ded5681805f1cd147"],["/2023/05/15/C语言基础排序-demo/index.html","4c8b2887faa3deb686a2f87d7b2e0618"],["/2023/06/14/闲着没事干/index.html","508de1e1d6e75daf36fd90198b627c8e"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","87541eb86a6e7a03554caeaab52c323a"],["/2023/08/01/javase-note/index.html","cccabf92cd82273999ddbad47d5b9f5b"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","852521b6dd58aed93fe091a8d9c02efd"],["/2023/09/14/vue-pure-admin/index.html","19ad31991ff1c46f8bb21c7edfc6da1a"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","c1760347ce61e45b29a32e0509353429"],["/2023/11/28/C-CPP-the-memset-function/index.html","d12ff5604811630602897fd74cd820ba"],["/2023/12/13/javaSwing-DynamicClock/index.html","cc238cc06e154a2f75726c955ac3de8f"],["/2024/01/24/builtin-系列函数/index.html","c775b9d4c5f69753a488c9fe8c721690"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","483efcba588cbd569b0407200d9a7985"],["/2024/02/09/新年快乐/index.html","bacdc9ae10442ad38988e4203e869490"],["/2024/03/26/408-route/index.html","0ff7f6f384de62f1c0e6e90ea513fbe2"],["/2024/04/07/转载-线段树专题-xyw813/index.html","7da45f73fb33cdd3384bc3b55b02c83d"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","9047e78fabe9e53e9ee1de09ae0af943"],["/2024/05/03/Adobe-PS-2024-软件分享-torrent/index.html","bc755b06aa7df299e659cc3a6b770614"],["/2024/05/06/cloudflare-display-issue/index.html","80e7ca0dc6c72e0f5958b790e8f63127"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","832dcc73cef34892a99f309ebfdb35c4"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","1a6dea7aa4302eefd04ff1253e0274c8"],["/2024/06/25/open-source-LinuxMirrors/index.html","94589fb48e198fd78e94dd27eeca7fc4"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","30ba41958cc810ff0c2091e351ea06aa"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","d6d150a625e9da6c5fec95f059721014"],["/2024/10/11/常用STL算法库/index.html","227d75c665e39844b18bb60fc248198c"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","ee7a4415c667d5c9b8c792d7fefd4c58"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","7ff9aa4850d90012e745e53852ea777a"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","1c0760306464cb19386cae7bfa4fe14d"],["/2024/12/17/Where-are-those-algorithms/index.html","da5fea1e051c6bbb1cc9344689bd269c"],["/2024/12/26/重构评论系统/index.html","90c329c06321a8f0cf646c73cf269677"],["/2025/03/15/GitHub-Skills/index.html","a8b83247b9cb2ab9c22b3c84a72a62eb"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","56bd1cded679a919b3084ef26e409a02"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","fbad07cd5be4b0e460f3e4b2ebbc4b34"],["/archives/2023/02/index.html","3723f09fdfa008acfb3fbbb13f154c26"],["/archives/2023/03/index.html","166f83c0ec5a34aa2ce9416d8c8c991f"],["/archives/2023/04/index.html","24dbb72135e387c7d6e0975fe072f1cf"],["/archives/2023/05/index.html","548fe1e4bd4cf4a464b7ea22f7bc1c51"],["/archives/2023/06/index.html","3818e4346c150ac2aa936cf8052c84e0"],["/archives/2023/08/index.html","dc996cdff35d557ffda878afeec3916b"],["/archives/2023/09/index.html","c3320a1534c20108b4ba862f365509ef"],["/archives/2023/10/index.html","9ed32ef9cb95305e26fdf6bff9ddf721"],["/archives/2023/11/index.html","f1842a0253c110631d74bb67b1fefcf4"],["/archives/2023/12/index.html","a511bc13d7677d3dd2303bd2420e4ee1"],["/archives/2023/index.html","044897ecb293d9cf5b12e122653d7b27"],["/archives/2023/page/2/index.html","044897ecb293d9cf5b12e122653d7b27"],["/archives/2023/page/3/index.html","044897ecb293d9cf5b12e122653d7b27"],["/archives/2024/01/index.html","f8901b1cf4a6bf059821db029e0cf6ea"],["/archives/2024/02/index.html","162953ff0e3e229c43cefa82c99d442b"],["/archives/2024/03/index.html","8eeab5b523f81e871e153186b27201b0"],["/archives/2024/04/index.html","c65c1832c504583f45f4e71c0fa495dd"],["/archives/2024/05/index.html","9339579843162bb3c47eb349c0d374be"],["/archives/2024/06/index.html","b4f8e38c68adcd70caea3229acef9e44"],["/archives/2024/09/index.html","a4d8d9281e00bf154170543afbac41e6"],["/archives/2024/10/index.html","f20de3406f50103cd96079555ebfca0b"],["/archives/2024/11/index.html","f7d41a76293c9e0ae110d1f252098be0"],["/archives/2024/12/index.html","63e02ea371bdb8e72291a1180ff9874e"],["/archives/2024/index.html","f2097e4e273f838b6e7219795a509f30"],["/archives/2024/page/2/index.html","f2097e4e273f838b6e7219795a509f30"],["/archives/2025/03/index.html","238c098f82e9814fcd1bc5a9ab858098"],["/archives/2025/index.html","f52055128a7198acd549b36edcbe4160"],["/archives/index.html","b0c05bdbe0f36898fdece45301bacacb"],["/archives/page/2/index.html","b0c05bdbe0f36898fdece45301bacacb"],["/archives/page/3/index.html","b0c05bdbe0f36898fdece45301bacacb"],["/archives/page/4/index.html","b0c05bdbe0f36898fdece45301bacacb"],["/archives/page/5/index.html","b0c05bdbe0f36898fdece45301bacacb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","d420cc59c27d27fc03807a2c723161a1"],["/bangumis/index.html","5087a0c12249197d96fd356213db4338"],["/categories/技术/index.html","dfc6e70223d71470004399f47d8e92d6"],["/categories/技术/page/2/index.html","8c5bff28e59f214a55c73fed4b0723ff"],["/categories/技术/page/3/index.html","d21393e3a3b1068812734ce0160228d0"],["/categories/资源/index.html","95bd7fed4d4fd791c95577b0c93c375e"],["/categories/转载/index.html","05685605cbd5da1d7ac87d9aeed485f9"],["/categories/随想/index.html","95e182b19a7462564fc7326e49a1bc94"],["/comment/index.html","9403432108e2e47fb9208931600afc88"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","8e6baa11910de635737babf60ad464c3"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","d7bd23ac4ac7d9d71ba9a077a81342d8"],["/index.html","8d2d6ca72b111f5f424af511eb74dfcf"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","d0e2fa4c61e03a3f31061b6b8d68d84e"],["/links/index.html","6206d785ecb9b7566cef51cc513f37d0"],["/music/index.html","c9614ff3cb8a97c093c5488ba12ffe19"],["/page/2/index.html","d666d8dd37b2825986c61b4e08953045"],["/page/3/index.html","0a674daaf37557f7e8ded61d71e81ad8"],["/page/4/index.html","38c47ab772ee14e18ae727c275beacc4"],["/page/5/index.html","44496398d9ebcc42e1a4ab3846d32e70"],["/rss/index.html","6f03cae64df6eec851a6703c655ca31b"],["/sw-register.js","3d633e63ec425baca4826de17d71ed37"],["/tags/408/index.html","ee80e84d94bc0cccd3892af4f268be08"],["/tags/Adobe/index.html","c15d28820b445babdff76eb9c23786f6"],["/tags/C-C/index.html","1ff28ac9e0253c6ef7cc9c2a2d120fc4"],["/tags/C-CPP/index.html","ba091f5ab9d34a2d084b075c71e9dc40"],["/tags/C/index.html","fa47470a08b1a903dad4ae642cd81202"],["/tags/CPP/index.html","27df81be2ef295908837c70ca56a988a"],["/tags/CSS/index.html","b3b087c3585e394af9ac6662fd573c83"],["/tags/CodeForces/index.html","427a08c51ba5221aad62a2317061bef9"],["/tags/Color/index.html","cc16ef6e8d8cbef965558886a580b2b0"],["/tags/Comment/index.html","0d70d81df26e4e0b0c2371a246c89467"],["/tags/C语言/index.html","87e9bc4583871ff77bddff5c6c6bfbd1"],["/tags/Dinic/index.html","dd8bbb200dc43a06b1d439195a96b69b"],["/tags/Div-2/index.html","08ccf6761043eda8d07349cfce355058"],["/tags/GitHub-Actions/index.html","36cb09557a7f49c91ce455940630a532"],["/tags/GitHub/index.html","8ed5a354aa51e3e6219df32b3a417d78"],["/tags/Gradle/index.html","70c3c16671c13d0f0b3e5122ca851e57"],["/tags/JDK/index.html","23f1c19553e79bea3c50462ae637505f"],["/tags/Java/index.html","10b010b20086aec37f5d856fdffc9663"],["/tags/JavaScript/index.html","d95b106fb3e773478a9d60c16e4503ff"],["/tags/LeetCode/index.html","b40dcaf64163c278311d4a30c387b5a0"],["/tags/Linux/index.html","dc48cb7aedf474b3d98c8e89d0ed0f31"],["/tags/Lombok/index.html","13741467d3c188257229cd258c1e709b"],["/tags/MSYS2/index.html","9548c3fe2b14bc9e366680ece11a62e0"],["/tags/Note/index.html","538d4ef9e48a5b095e767203fedc9599"],["/tags/PS/index.html","81d5009d9dd220d0c3e23ab98b489d56"],["/tags/PrintStream/index.html","bd691e6a7304d7dbab0ea4c48efa1731"],["/tags/Rocket-Loader/index.html","144f26cf015fbab2ed0441a6280f11f6"],["/tags/STL/index.html","9146bc73bbcb51e53cdd3d1801a99fba"],["/tags/Scoop/index.html","5c75d60b7fa3509620e305c70dd14d09"],["/tags/Software/index.html","8a7d79d63aec430a076e603704e2f88a"],["/tags/Swing/index.html","113a33bbe8d9290f5d71b4e8d56a2967"],["/tags/Tomcat/index.html","3a4b2dd7244bff5fae9fe9b766d3e527"],["/tags/UTF-8/index.html","9a041e2049e82ae5908dd70e24907b7e"],["/tags/VSCode/index.html","70d24233c99915fe3ae697eaa9c89ab9"],["/tags/blog/index.html","a860be2648dec9f5460935b5403dcd86"],["/tags/builtin/index.html","8607582d57ca6c6335367b3eb81cc114"],["/tags/cloudflare/index.html","3d5e6d44b81c861ac5a2284979968ebb"],["/tags/giscus/index.html","32a86d0e9b6c487a8b68c4e300339f73"],["/tags/gitalk/index.html","cbb4307d0f30e51fbfd2c9dc2434901c"],["/tags/index.html","97b769c6963b5517cd56f1db48097533"],["/tags/tools/index.html","88d67ec1854ac5f87d1a0dda66e0a8c6"],["/tags/utteranc/index.html","72e2652f365211db3e453f3ba5515174"],["/tags/vue/index.html","b3ffb21a2c724b3ac82ba37e3caf8e88"],["/tags/web/index.html","3da058793ef198bff726fd81db3b1446"],["/tags/乱码/index.html","f7c806257d2d0867ac655136dadd3130"],["/tags/二分套二分/index.html","96bbf0f2881dc93c8fa9f7d82f1d4ead"],["/tags/划水/index.html","d19cdb079930f046e9e15b22a2516be1"],["/tags/包管理器/index.html","a253c51c046a77731602a02dda226a23"],["/tags/图论/index.html","136b2d8a56be4ff70600fd87dd48b1c5"],["/tags/字符集/index.html","699db2d1fee612fd11be449101a1e549"],["/tags/应用/index.html","c6bbd64aeb7d11d73163f22fa84c9a01"],["/tags/悦读/index.html","b68800784d78c03dda5a163ddb302c44"],["/tags/操作系统/index.html","ed56f6a6effc07deabf8012fb2b905e4"],["/tags/数据结构/index.html","b67d1ee62e3c8b956735c4f4dc06e5c7"],["/tags/数据结构与算法/index.html","4697de3f1e1359b197cccda6cc91e046"],["/tags/新年/index.html","3c9d802f2a99a8b12fd68f80763ea3b1"],["/tags/杂谈/index.html","3c905a2b9f7a8042e18b7233626085aa"],["/tags/深搜/index.html","9c234ff3e8521898f760494acdfec2de"],["/tags/笔记/index.html","bcc1e9de85beed32fbced5013d9a250c"],["/tags/算法/index.html","21ed5445e880b06e698d2c4d8f086ba0"],["/tags/线段树/index.html","d0bb4a92bcb524b84abf863c8cf18031"],["/tags/编码/index.html","f4a1c9c43f3e4695d759379da69ecebc"],["/tags/编程技巧/index.html","7f3d1ead2a7c86f986623ad80330a4bf"],["/tags/网络流/index.html","5ddb09c6f501d12fc1d8567cc478fff9"],["/tags/萌新/index.html","9117addcc27002f3ae22f5717426d450"],["/tags/计算几何/index.html","5408046bb0e598049ba544000745b92a"],["/tags/计算机组成原理/index.html","56513672b06998be93a14823f4cf74ff"],["/tags/计算机网络/index.html","c014ffed3ff3e3aec9846c955114312a"],["/tags/课程/index.html","6dd4047b15fdb8f8c9a738195103decd"],["/tags/质数筛/index.html","2bc1913686cf608997510ce0661ffa58"],["/tags/软件/index.html","e27c05acb8da7e82eac3dbe7c0638914"],["/tags/输出流/index.html","4ceb0c318e31a0f23c60d298585f9f73"],["/tags/镜像源/index.html","7546223895087eb9f763ced9865157cd"],["/tags/随机增量法/index.html","38be1122765a07150fd6222f0a5d60bd"],["/tags/题解/index.html","61a390520ee059ecdd1bc398831d1444"],["/theme-sakura/index.html","6d94afda037d25b91ff61f12610ceb8b"],["/video/index.html","8249bbb5807a89c1ef492a76f6f2dddb"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
