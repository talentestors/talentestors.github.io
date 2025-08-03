/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","9e9521961077839050f4ca5eadce2b4f"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","44645b5dc606cfcdef84cbead18a1de5"],["/2023/02/06/C语言链表/index.html","353defe3bc249faf45dfcd52eee9824f"],["/2023/02/06/书籍资源/index.html","30282e48e1db57a8f403e3f27fb79135"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","f6c661782ae32550e9a5afec101c0e3d"],["/2023/02/07/为水而水（笑/index.html","b63a83a4c9505d22d2096b4206056a09"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","f4db9429fa8caadc65fb8db927554d98"],["/2023/03/09/Web前端笔记-Emmet/index.html","accc4f809757f9c078429881d907f71d"],["/2023/03/23/gitalk-评论/index.html","b616947430e3f05a47705521bfa9a7de"],["/2023/04/10/用C语言实现字符串全排列/index.html","9675eafefbbf628b492e1b917e940d8e"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","506e1e91365c111353581a0d15633871"],["/2023/05/15/C语言基础排序-demo/index.html","18370a494d1d9360818ee2f868cc2cf0"],["/2023/06/14/闲着没事干/index.html","4662faa17ec2272da8968f568c740b20"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","c51552d700aad5b19a076f4481a2b167"],["/2023/08/01/javase-note/index.html","6379b45ac8af4d2040a63635f536d219"],["/2023/09/14/vue-pure-admin/index.html","83ae53b8d7ac9228e798b0b7ec8a1c8c"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","b645f50ad4e508b1f6adc4043fa9a68b"],["/2023/11/28/C-CPP-the-memset-function/index.html","1302eeaf5445db1e6aa7018972cf5bbb"],["/2023/12/13/javaSwing-DynamicClock/index.html","2ee51f8146200bc15ab1ae797678f894"],["/2024/01/24/builtin-系列函数/index.html","44c48685a3748f3f3d5dd9b995a79bd9"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","1055054e1e582655c5bbb0458f0d17c9"],["/2024/02/09/新年快乐/index.html","07934a366aefc93495d464ed8f4e2b61"],["/2024/03/26/408-route/index.html","5dce89e7362fd6eb29b4ce6f1371b7ce"],["/2024/04/07/转载-线段树专题-xyw813/index.html","8c15eef31d55f361a0f3034c36a059b5"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","175ca4144bd145cfa99c05f5070544d6"],["/2024/05/06/cloudflare-display-issue/index.html","268016685e3bdf09631000b00a056a06"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","1a6478a57d4cb9a33803d137e9351bb2"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","2a534343fb59efdacd9a301a38e79ed2"],["/2024/06/25/open-source-LinuxMirrors/index.html","8676eb6b0c43b247025906860251af28"],["/2024/09/02/Dinic-算法/index.html","71dcfc57cc924ed0ead3a20b05df9d62"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","1006e02b11f1cff511f5d3427ebabee5"],["/2024/10/11/常用STL算法库/index.html","3ff758ff5da7a2f0c56c6fa5015cc56a"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","f8f4c8c4114edcdd66d5b67bfa1adafd"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","e7ae8cc0c5c5ec057f1743623888856a"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","42bb74aa1d8f28295e5c09f02c903b1f"],["/2024/12/17/Where-are-those-algorithms/index.html","f42c19082197e1e5be0d40534006585a"],["/2024/12/26/重构评论系统/index.html","2c8587f82a19f0fc63db598867fbec2e"],["/2025/01/01/blacklist/index.html","200dab38fe1adf667b526d9241145520"],["/2025/03/15/GitHub-Skills/index.html","59e57583ae62651a852f448a8909d653"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","6ea7e9747a432ff5221ca01094b5f197"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","bbb71e92760eb0ce440b7a49a43b167f"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/README_zh.html","21d6e9aaccc28c269d3909d3e4b10512"],["/about/index.html","e4f79570d249fc691d1214f134b6c191"],["/archives/2023/02/index.html","746fb496659257342fdce8a916c4464a"],["/archives/2023/03/index.html","6b4f4772faa84c0686468932d4fb10f0"],["/archives/2023/04/index.html","53303d4d1d2b983d11a472e66e30699b"],["/archives/2023/05/index.html","8f32b3bf5376e3b46cadbd380c2fdc53"],["/archives/2023/06/index.html","7e13417d3d4bc9dae72bbe3586849d84"],["/archives/2023/08/index.html","1c046e185b524c5356a3ed55fce29c47"],["/archives/2023/09/index.html","bd9e158d8acbb9842735e94992fa7577"],["/archives/2023/10/index.html","ae7650f46309824904d36138c80c0b40"],["/archives/2023/11/index.html","db145312ec8dce55f884869d2fd10242"],["/archives/2023/12/index.html","4d96a965953ba36c1d9a34c00dac26ae"],["/archives/2023/index.html","996b989b1814644d7ecb65d8f2f473e1"],["/archives/2023/page/2/index.html","996b989b1814644d7ecb65d8f2f473e1"],["/archives/2024/01/index.html","2634dd33d7cdb640fcae227cd8e7ed86"],["/archives/2024/02/index.html","7a54c82cbd7c9cabbef32bc8b9f7299e"],["/archives/2024/03/index.html","0c552d60b217ef52c22980d07ffa6747"],["/archives/2024/04/index.html","12a141b42aeea4ecf3eeadf6d87dbb03"],["/archives/2024/05/index.html","67483bf30dc87cb25fbe0ea3a5b022c4"],["/archives/2024/06/index.html","daef1d16ffa5d8e700d45d49bfc1b081"],["/archives/2024/09/index.html","1a066c5dfd8c407eb8d9b390582775d5"],["/archives/2024/10/index.html","2b0b5e6bc563877193f9ec94d11b56df"],["/archives/2024/11/index.html","5aafce22dc6bfb33930170554246f4cb"],["/archives/2024/12/index.html","d148d2cd2aac5cd7cc836b3311628242"],["/archives/2024/index.html","2b581d1a64e547e080439fda7279d12b"],["/archives/2024/page/2/index.html","2b581d1a64e547e080439fda7279d12b"],["/archives/2025/01/index.html","b031cc0d8221b262b8513a80c05332d7"],["/archives/2025/03/index.html","b1ea2c0c4a3fbab79f415d7bd5edb546"],["/archives/2025/04/index.html","a7df10e7def81d64d0e6739ac647cb1d"],["/archives/2025/index.html","6b26a37e889aadff719e27dbc994733d"],["/archives/index.html","ba2d3e21a40a3a67dfd5875c41dcfaac"],["/archives/page/2/index.html","ba2d3e21a40a3a67dfd5875c41dcfaac"],["/archives/page/3/index.html","ba2d3e21a40a3a67dfd5875c41dcfaac"],["/archives/page/4/index.html","ba2d3e21a40a3a67dfd5875c41dcfaac"],["/archives/page/5/index.html","ba2d3e21a40a3a67dfd5875c41dcfaac"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","9ebc63863d72854499a408ea2db55f59"],["/bangumis/index.html","274d0261f6c20f58f6dd99f743b8c0dd"],["/categories/技术/index.html","bce3ac60763cdd022b7bfe1e0f26d8e6"],["/categories/技术/page/2/index.html","9e45b4b80fe6511ac8107621b5e5df51"],["/categories/技术/page/3/index.html","8e4bf2c816ca19b4191ff886f4d72b08"],["/categories/资源/index.html","f8c1b46282425e536106eb7eff3be037"],["/categories/转载/index.html","0b05566f977c12ea4a9f86c689ecab33"],["/categories/随想/index.html","c3174fab65674acbc39450d44c491659"],["/comment/index.html","146015e923e1c4d76c0def397d821275"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","0da2d1f59e7edb99ff242fb8da0f1f0f"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","52ed58adc6a9a93945ca455c9cf1a581"],["/index.html","e9f083d75bb08a7dd322d4a1e9b1d0e1"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","56744df5b9daf2028aad7384133bec85"],["/links/index.html","5977fe14ad6d50d118f216f4075bcd9a"],["/music/index.html","636ab02118696ab2bf211f33276f79af"],["/page/2/index.html","bde3c9158b54a56517419f20783f5ac7"],["/page/3/index.html","2419e5a65aee0cc60214429a50d4077e"],["/page/4/index.html","bd85c3be21af7bb95d5b7611d003ebd1"],["/page/5/index.html","2efee1af2b57ae14d412d40be921542e"],["/rss/index.html","0003f252007b97904d31567abb759d57"],["/sw-register.js","940c4d6e495bc9329ad1dd3af9bf1431"],["/tags/408/index.html","9209b749403b5ca540e983f646830197"],["/tags/C-C/index.html","c62f05aea72fbd5c8507e4543b1f0507"],["/tags/C-CPP/index.html","ac0bd8fcde54476a97c506c4dee14afc"],["/tags/C/index.html","0498e08fbfca1582a5bcbaa9adfc39f6"],["/tags/CPP/index.html","0062baf4fe08f15d09509b75c3d5f93a"],["/tags/CSS/index.html","f240a64f133c0c8ee83c239480405cbc"],["/tags/CodeForces/index.html","2d79ece73d40f7e94937a1283a0860d6"],["/tags/Color/index.html","5d1b9bf90df648a75071e42477bc9017"],["/tags/Comment/index.html","9dfb7fff78b0db5a7b8509eb7cca8249"],["/tags/C语言/index.html","db70931b94308f9328ea49bc876d480d"],["/tags/Dinic/index.html","51fe4f4d2702ecd2f0bec2fbb8808e5f"],["/tags/Div2/index.html","9ea2549b0e146965d633107b0d9c2b35"],["/tags/Div3/index.html","8fd62c145f7103da7f27ed4d39b2f61e"],["/tags/GitHub-Actions/index.html","2a3854fe3638fba2a756a9a238ca53b1"],["/tags/GitHub/index.html","c85950e71c69062b6e2c8eda6338f135"],["/tags/Gradle/index.html","fa26cd6b439f22a2b3cfc7562de244d0"],["/tags/JDK/index.html","eedf5899c1e0abcb712a00a95e935f04"],["/tags/Java/index.html","16dca9cd8b6b3e28c0459d01a972ba88"],["/tags/JavaScript/index.html","352ffe669d8d219260cbce18960722d1"],["/tags/LeetCode/index.html","2c629bfb8d638d9cac7cedd2c2131843"],["/tags/Linux/index.html","1fe03c208ae73500a547618a30109ceb"],["/tags/Lombok/index.html","992715d8a57eb77806c324f2d3b8b0f1"],["/tags/MSYS2/index.html","c675ff71c3e5e02c50ccc01023300e7e"],["/tags/Note/index.html","d22278c58834356801a60d67b2632856"],["/tags/PrintStream/index.html","8cdb55fcccc60d6d78339727f6951159"],["/tags/Rocket-Loader/index.html","dc3254db7b4104ac41ad0f2a820045e0"],["/tags/STL/index.html","97dac866b7f043a11a477817f83fffa9"],["/tags/Scoop/index.html","66bfa291f6c2480c536036843d3dc20e"],["/tags/Swing/index.html","94b892caf5e334705fb40b457250248a"],["/tags/Tomcat/index.html","2817dbca00c8607be29c2b52c00bc133"],["/tags/UTF-8/index.html","52e494c428ca514838e01b1d97a81622"],["/tags/VSCode/index.html","69f0b818b30510895b995740ac8a81ff"],["/tags/blacklist/index.html","f6236926c5f2e96332eab02e9a8ce75c"],["/tags/blog/index.html","ab4ce64b43ee2202edb7d6fba01fc063"],["/tags/builtin/index.html","404c887bc71ca5e9e7fd0093e623b5ef"],["/tags/cloudflare/index.html","6fa08a640c1d58b1fb9a172ef0e2b494"],["/tags/giscus/index.html","ecaf9bc08b82d19266c0e538e4bbb917"],["/tags/gitalk/index.html","bf1c43edbb688a23d3a63f6e3c985a31"],["/tags/index.html","ceaff48e643df79829ea98bd32225aa7"],["/tags/tools/index.html","1c5ca4ca47e21f5c666dfdb0ed22faeb"],["/tags/utteranc/index.html","a60e34e0434ea7f82b6852eb7075e386"],["/tags/vue/index.html","d07ee75bde61577ba450217bd7dc7950"],["/tags/web/index.html","4d7d70f627ceadadfcba1b265b8cbe46"],["/tags/乱码/index.html","dcc9ae0d00838d91abb6969c21241262"],["/tags/二分套二分/index.html","5d91841fcf6e997c9b280748d75ded44"],["/tags/划水/index.html","c933fefadeb1547fc8ac60a8d717cb16"],["/tags/包管理器/index.html","9fb3222d48360b6ecdf34bbc33d0527f"],["/tags/图论/index.html","2d5629a0723e9c4f2fe55fc45dc961f8"],["/tags/字符集/index.html","62976efc04b60c534f8239cdc0af7127"],["/tags/应用/index.html","ef1537d5ffaf861b9eaa15a372a34f07"],["/tags/悦读/index.html","7fbe9b655e1c94b0d792cd7246f70a0e"],["/tags/操作系统/index.html","26f71c1b75e7f9f664b845e27d0d4f29"],["/tags/数据结构/index.html","c59bf4964a9f55151462866934b5040b"],["/tags/数据结构与算法/index.html","ab1589c85a67126a26e724dc10a0b2a6"],["/tags/新年/index.html","3418cbe7e40d600d0661edfa0751626e"],["/tags/杂谈/index.html","38486d2e91e72001d625c4f959e7e3a4"],["/tags/笔记/index.html","6172c87dd2d90f705d552268c3fecab9"],["/tags/算法/index.html","464f7174c7f98e2651fd44adc68d38f0"],["/tags/线段树/index.html","5adc537dce3ad9f447ba8ccfb12385bb"],["/tags/编码/index.html","1f3da24a7d212f0e6f13c90216830841"],["/tags/编程技巧/index.html","d49b7b511a215b60972ad4399a681159"],["/tags/网络流/index.html","e9bbd59f957ff1aaff2036ba370179f0"],["/tags/萌新/index.html","be2b30afdce1f7e7954f166496452e42"],["/tags/计算几何/index.html","5b86e852563173e4bde3422eb0669314"],["/tags/计算机组成原理/index.html","1272150ca1653bbd22c7b2aac7b5d27a"],["/tags/计算机网络/index.html","bb12f1d5de0c883f6f0533cd19ef8f60"],["/tags/课程/index.html","d03d5520288fb6a58234c53f3220d908"],["/tags/软件/index.html","c6ac10d27c62e8cb239075bdbd821ac1"],["/tags/输出流/index.html","7e2dc553b2a6cef453e31e6ff934b449"],["/tags/镜像源/index.html","bda6fdc9fa6e8e503d4370e85f5d9e17"],["/tags/随机增量法/index.html","6d9d724a865d72f23c67c3abe730766b"],["/tags/题解/index.html","1ff02525cee5428a136ada0385bb6d7f"],["/theme-sakura/index.html","2a0c25eaa45392e065bb512d1191a692"],["/video/index.html","aa04656bbbd45f9f2c2aeb42823f3097"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
