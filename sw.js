/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","da04e1ff763973f6e42b135ec2932d3e"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","e92460aa78549038bed7776c3fab3be1"],["/2023/02/06/C语言链表/index.html","1b12fc6d339809fb98a8fa6f05c04663"],["/2023/02/06/书籍资源/index.html","919121849c6dae721fd1f14ab1d00039"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","124c44f1882c8f3e9989d3e9e7f2620d"],["/2023/02/07/为水而水（笑/index.html","68b35f849289ef7f4b8897370ce7fed3"],["/2023/02/08/洛谷主页源码/index.html","f23bdbcf6191332040e05fb69448e031"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","8229e56888c3e94be2d9840fb72ba41e"],["/2023/03/09/Web前端笔记-Emmet/index.html","4b3756dc02dc073f700d576d527b7b0e"],["/2023/03/23/gitalk-评论/index.html","1e60363bd548c400b11fce399b8df37a"],["/2023/04/10/用C语言实现字符串全排列/index.html","6fc48e7e392112cb9126785166807d36"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","3c4df71796dea2c58aee43134cf469e2"],["/2023/05/15/C语言基础排序-demo/index.html","eccccdbbd7d7b0b37ff90f1b067bbaa7"],["/2023/06/14/闲着没事干/index.html","ed23824124d25d9f284fbad7f7ec370d"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","41e696f8038a2b76de059e4d52a70a20"],["/2023/08/01/javase-note/index.html","9a84dc8632bc5c11b6f462eda6632e20"],["/2023/09/10/luogu-P1036-Select-a-number/index.html","5577ed36cec9776b7649ac573a49534f"],["/2023/09/14/vue-pure-admin/index.html","600078eb808928b083f3abc7b4b9e578"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","8853053ac52114f5b362d08e9aa6030b"],["/2023/11/28/C-CPP-the-memset-function/index.html","fc6d5695f828120eb2b376fbc31ee263"],["/2023/12/13/javaSwing-DynamicClock/index.html","54ccf9faeea867bac1fc902dc8c06f23"],["/2024/01/24/builtin-系列函数/index.html","3f6ad429501e522b729ee07e5fc53b2c"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","b000a590ef493b7f3011b24ea8bd6312"],["/2024/02/09/新年快乐/index.html","79014bacb9263ff94cd54d7e9343e5ab"],["/2024/03/26/408-route/index.html","f1da2731137afcc620b95782ad3ad367"],["/2024/04/07/转载-线段树专题-xyw813/index.html","8aa41e3d4e62d6f0a80e9a84a1c3e6b1"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","6e114a00901e2c5ca7947d9f079b9485"],["/2024/05/06/cloudflare-display-issue/index.html","57549bae0c5a47b6c764226eac053763"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","0ae615e4031300ba7becf7d76a28dad6"],["/2024/06/18/P3517-POI2011-WYK-Plot/index.html","a2ad1f319aa93ac9e7c31fee9d166227"],["/2024/06/25/open-source-LinuxMirrors/index.html","5c55797575b90c03533805997c4170f8"],["/2024/09/02/Dinic-and-LuoGu-P1343/index.html","2099f42310fd2bfa7704eac48c45265b"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","03b9557e44f7a324ce16d63610cb25e2"],["/2024/10/11/常用STL算法库/index.html","bfed772634fefe11f52ab2134cc8cdad"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","61b5ad41a2b78a8885fc81b2a4c6a5b8"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","7b609798a706a68359556dfa4edc3286"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","22d5c7b2448aa9ac51f6a0a6fd2b1f35"],["/2024/12/17/Where-are-those-algorithms/index.html","11cc478eca25ffe6dfbed12a968d4767"],["/2024/12/26/重构评论系统/index.html","1b7bc4c33dcd264340c29f02934c70e7"],["/2025/03/15/GitHub-Skills/index.html","adf947d58e474fee3dada4cc45c05236"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","f08c78ece099d7f2a4eb41065a2529e2"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","cc38f491bbc8ff986cc442265b2042d8"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","64fd284d8370dc0c9e5f8edb46c1803b"],["/archives/2023/02/index.html","48332d6481725336c9fabb1684c3833c"],["/archives/2023/03/index.html","d2a497a2aaaa05d258b117910103ef36"],["/archives/2023/04/index.html","119e92acfff3d43f5942eaa3d93aec1d"],["/archives/2023/05/index.html","5688e431483c845bde57129c38bb53b3"],["/archives/2023/06/index.html","e48469c413017d2f391be15189881885"],["/archives/2023/08/index.html","d38227b21c298b694704991f11cd4026"],["/archives/2023/09/index.html","aa2481f674ea9d813c4e8afae93bdc5c"],["/archives/2023/10/index.html","4875f4865b657f445ad8c73efec094b1"],["/archives/2023/11/index.html","540f81b94898ca98836d8e8564541636"],["/archives/2023/12/index.html","61147b0f45a878bc7739435bcc863be5"],["/archives/2023/index.html","899225dc0379c98ff64615b8b550f0d4"],["/archives/2023/page/2/index.html","899225dc0379c98ff64615b8b550f0d4"],["/archives/2023/page/3/index.html","899225dc0379c98ff64615b8b550f0d4"],["/archives/2024/01/index.html","b52b585242ee48473aa59de74cd07495"],["/archives/2024/02/index.html","bf9db032c682518742eda88db6920df1"],["/archives/2024/03/index.html","4ce68c23581c28cda8e4d96e5cd8b1a9"],["/archives/2024/04/index.html","6ed560daca081504532c86677de5f95f"],["/archives/2024/05/index.html","4050d6ee3be54a8feafe626e2c1d66a7"],["/archives/2024/06/index.html","ae6f08b02a2ad9900dc87e9a6e78a607"],["/archives/2024/09/index.html","f809c12fca2a97ae03bc64e6c540df36"],["/archives/2024/10/index.html","45f3ef18da042d58e7a0369a52aa476c"],["/archives/2024/11/index.html","200b6c84264d718a9614b5e8f55a8c95"],["/archives/2024/12/index.html","c6d0ba39ee36f4298f42423ed504dc98"],["/archives/2024/index.html","79d2dcaabf4d1417ff2769cc6333f359"],["/archives/2024/page/2/index.html","79d2dcaabf4d1417ff2769cc6333f359"],["/archives/2025/03/index.html","5ab60acd0b26216025410a5f46d07e0b"],["/archives/2025/04/index.html","1563d2d72ad0135eaa1576dd6f37fd66"],["/archives/2025/index.html","e4018336ddd7c0e337086f13e36a6989"],["/archives/index.html","f24ec237491c3e089871d5fe796039af"],["/archives/page/2/index.html","f24ec237491c3e089871d5fe796039af"],["/archives/page/3/index.html","f24ec237491c3e089871d5fe796039af"],["/archives/page/4/index.html","f24ec237491c3e089871d5fe796039af"],["/archives/page/5/index.html","f24ec237491c3e089871d5fe796039af"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","d2e9d096577bf95867857ad954972dbf"],["/bangumis/index.html","599123173aa89e3128708448c3ed7e6c"],["/categories/技术/index.html","cb8215d5e8fce7671e8889e6fcb960d1"],["/categories/技术/page/2/index.html","f16b97e5343e822cf43881dd36d3f548"],["/categories/技术/page/3/index.html","9b098bdca0f19d3376705f13d8fb69b4"],["/categories/资源/index.html","43b87a9a1b3f7ddb1adb87126cb832a0"],["/categories/转载/index.html","885908dce9d70280d3a40b84263ccd6a"],["/categories/随想/index.html","a911852485c3422dc2ff5e6f9b856970"],["/comment/index.html","f42f9691ee71495e4fb7312bf6c36e6e"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","3886fa77da107001d61c9ea070b2c71d"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","4c1c583f9d05d28ae0aecaf74e013907"],["/index.html","0eeb80aec1009a97df48db0e1d870ace"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","b145db77dbaf0aaf060dc71066e389c6"],["/links/index.html","ead6a14a9876c034ab8976152671b179"],["/music/index.html","b98fc55b9cbfba53779ddef4187cb24a"],["/page/2/index.html","e36d10106e6ae293d8ffd68d09327970"],["/page/3/index.html","f0062a4182a38bafda3a7759a440c5f7"],["/page/4/index.html","850e06ff63f6f59009c798db243f73fc"],["/page/5/index.html","7ad445221d5b64d0ef56d66eaff1bdd4"],["/rss/index.html","afa49ba94a5902eb1cf9cb5f5395edd4"],["/sw-register.js","fd4bc7ce0001cc236c8eb370793f585b"],["/tags/408/index.html","c6fa54cb4ee977188d59c9b43830d3b7"],["/tags/C-C/index.html","b59c2272c1c1b3b5b1c779b080da8fbf"],["/tags/C-CPP/index.html","4f7f8952eb2d83fd3475b7bc28fd38a7"],["/tags/C/index.html","d5a9a3a531aea7719920f0bba3aedf43"],["/tags/CPP/index.html","cd7fa45e6c68400493d804452d826550"],["/tags/CSS/index.html","2a9ceffede6d14ffed325d684825d0d9"],["/tags/CodeForces/index.html","53041375ca2b325db0ef910b836da98a"],["/tags/Color/index.html","976ed1b1c9ab3b8d650d9c22475a8dc8"],["/tags/Comment/index.html","ebf7ad73122a5e2dc38f50ee74ebb262"],["/tags/C语言/index.html","332675d00b360d9e33251d8b1c205644"],["/tags/Dinic/index.html","e0ff1eefcecbca649644abcfd14d976c"],["/tags/Div2/index.html","8a1da5fd3ff66ace9ff05a3a18493437"],["/tags/Div3/index.html","c2e0150879fbc7ff07a644109179abf1"],["/tags/GitHub-Actions/index.html","1bdb86b3aad3e6b84bee12b56db0aad3"],["/tags/GitHub/index.html","3f8932d8ce4feb110f3c5a5f053ce788"],["/tags/Gradle/index.html","df8e593ed70e3e48c044dfdb0bad429c"],["/tags/JDK/index.html","e3b4a054af0da7271783c731d177ec90"],["/tags/Java/index.html","f4d7fd8309bbcf684ac8445db9b6b6e3"],["/tags/JavaScript/index.html","48e24ce9257a191a711f946d61da13ee"],["/tags/LeetCode/index.html","5af49bbdfc0f6ed5b13cfee2c27b5b42"],["/tags/Linux/index.html","12d9741aee9fd9153340e5afc33129fa"],["/tags/Lombok/index.html","9856b99a1c4ff3989d6965871ef03e21"],["/tags/MSYS2/index.html","589e9e3be30a644b5166621704cd4420"],["/tags/Note/index.html","107c0a8f248884cd24876a35adb68669"],["/tags/PrintStream/index.html","c294ab5bce29018f68d39ed9f3077a2c"],["/tags/Rocket-Loader/index.html","2cd74bd7c55d9979297c8f50c0a391f1"],["/tags/STL/index.html","2b4472399cb2c06fc264f1f46e9e902a"],["/tags/Scoop/index.html","eaaeb2c239118461626ba31c03c219cf"],["/tags/Swing/index.html","7f42fa378179779a6c1d4bf2f248cc56"],["/tags/Tomcat/index.html","43b40bc5b0e039ca1e9370d040b4a747"],["/tags/UTF-8/index.html","cee8b524262955a00a22e625743418fd"],["/tags/VSCode/index.html","56a8265ac30e0764e9a9b2e1568f282c"],["/tags/blog/index.html","bcb226ed73fefe91bb5b59d57a8cd822"],["/tags/builtin/index.html","cac8f4428c1ac1220e0624fdb1d89be5"],["/tags/cloudflare/index.html","c29b256d59da80f4a9d9eeeb173a90b0"],["/tags/giscus/index.html","6da4ca1cb49a3302a31c599cedf57fa0"],["/tags/gitalk/index.html","7fa532f1629b29732aadbf19d355514e"],["/tags/index.html","47e6a23ad4c542a15e892b4c7586f33c"],["/tags/tools/index.html","44a79fe19825a4a65cf9a939967b45c1"],["/tags/utteranc/index.html","e067fdaab8cc89b13f7111066424ed27"],["/tags/vue/index.html","ebf0d471e463ca54a354b0678725015b"],["/tags/web/index.html","6fe5c988a7ef1f8e7376aa03594b34e2"],["/tags/乱码/index.html","6deec07ce65cd0ad6d54b410de65aae6"],["/tags/二分套二分/index.html","fe71e29d029f63e55014ea0985483c5b"],["/tags/划水/index.html","19035c07e621bd1519e0683acc976ca6"],["/tags/包管理器/index.html","550074676b2e5796e1079c9ab1d041b7"],["/tags/图论/index.html","339ffd19b4512810da25ce887673bbdd"],["/tags/字符集/index.html","b070d5a762a6e40d17fdf179ab57a7c8"],["/tags/应用/index.html","19fe2bee8a379ab765d4410d2ad48356"],["/tags/悦读/index.html","051d6a79bd2e26ec178440d367facfa1"],["/tags/操作系统/index.html","1353078684e609c503b97d2f4b213786"],["/tags/数据结构/index.html","179a4a7228ce8f00b3b4014e549a5acb"],["/tags/数据结构与算法/index.html","0632d2a3860f57f14b0ac34a945273c0"],["/tags/新年/index.html","2e97be1fb77d87053208ce264b71fc8b"],["/tags/杂谈/index.html","0232412d66eb4f4c3605a5b0cdd3d373"],["/tags/深搜/index.html","00559f6f25b7f4ab3ba706c633b7e299"],["/tags/笔记/index.html","fbabfd73d59be9d43b7f277efb2b7b44"],["/tags/算法/index.html","57ea130e28cc1164c78577543ee9c835"],["/tags/线段树/index.html","93cad012a76cbaa20432ab9b73b72659"],["/tags/编码/index.html","743088334cdcfa13f7199ec5b3558be7"],["/tags/编程技巧/index.html","45352b550308e1351fdac405cefebee9"],["/tags/网络流/index.html","8118235fb148ddb5f5a264e0db3837ac"],["/tags/萌新/index.html","62261a7beae141dad90c4b63cf35c657"],["/tags/计算几何/index.html","f5b765803a2a4f646ccdd7c906fc4b4b"],["/tags/计算机组成原理/index.html","6c4e11e9ab3cca6de67e7a69a2b6b438"],["/tags/计算机网络/index.html","7cc9225d1a3ea69d552db89f2d5e204e"],["/tags/课程/index.html","6700c96e90e1f42bbfb38c8501eb0534"],["/tags/质数筛/index.html","514363d2f5161a9a6e9a6f9fac8bb13c"],["/tags/软件/index.html","51e94b20e3d07f5ea8b468714a065eae"],["/tags/输出流/index.html","95db0dc3e3bd3ae9b1de56b53eb4f2a0"],["/tags/镜像源/index.html","63112b857a13fce34de5c5ad06bb579c"],["/tags/随机增量法/index.html","23c9cbc2ed0f23e6ae696d867bcac26d"],["/tags/题解/index.html","ec40f661201d6bdd17e7891e1428e317"],["/theme-sakura/index.html","e2972d541144da946db1854321fd88dd"],["/video/index.html","c21f2a1228e0b3abffc474dcc90593bd"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
