/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","625c18f4c5a1fd72b04a4be4fb08159f"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","c1de4bae49b7672199c27caf17e90041"],["/2023/02/06/C语言链表/index.html","32f55f57368c345eb2de72211581c254"],["/2023/02/06/书籍资源/index.html","9d9bea7f03632a765844fe6a055b29a0"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","c4e657f797029123dc544e1379c7aa86"],["/2023/02/07/为水而水（笑/index.html","258bd7430309f9184d603d8302d94654"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","99561495e98b383e33d157c445ad0ab7"],["/2023/03/09/Web前端笔记-Emmet/index.html","d1616014039693e707c03920afff917e"],["/2023/03/23/gitalk-评论/index.html","ae26cd739bba803bb58de5c1f7735df7"],["/2023/04/10/用C语言实现字符串全排列/index.html","89fc9e152b9226b340585d63acc8bcbd"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","502c2016e0e7e0f91845098d63ac4a7f"],["/2023/05/15/C语言基础排序-demo/index.html","25097e5d3bdba261072fc65c24a6bdfb"],["/2023/06/14/闲着没事干/index.html","7fefd1891f7ad1f1a597eceb8facf128"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","6e8dc53f25066dc62ae86cd3d2cb6f9f"],["/2023/08/01/javase-note/index.html","8b7cc7d437ac575a9a4045ab75a2ae04"],["/2023/09/14/vue-pure-admin/index.html","a5340d1eec5582c1187a74a27df04df8"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","0c45519b95fffc9d308ea6c106b8000c"],["/2023/11/28/C-CPP-the-memset-function/index.html","b1207e18ef97b59370cc3b425eb1b52d"],["/2023/12/13/javaSwing-DynamicClock/index.html","acec47a61610b0cb03cedfb56741238b"],["/2024/01/24/builtin-系列函数/index.html","da98710a89621b9b85414c0637db912e"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","7057bf9b1e77ffc404e55d1e310ad7e9"],["/2024/02/09/新年快乐/index.html","0066f02669892a65f65ac9a16e18067b"],["/2024/04/07/转载-线段树专题-xyw813/index.html","bf1616095c0a131999c5e4c1054fed64"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","b822df650152ea7c1335dc62681d0d43"],["/2024/05/06/cloudflare-display-issue/index.html","6ad245f26b337dbedb116bd19c7727b7"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","37762adf408e3067adc94efbd5d08ed3"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","baa693275dcf577dd8575b414602583a"],["/2024/06/25/open-source-LinuxMirrors/index.html","21734a39a8bf8916287fe19ec6b063e7"],["/2024/09/02/Dinic-算法/index.html","55f9aee3533dd5da627fe8375fff7cda"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","a9837a797f8e750fee4fd8215b2b768b"],["/2024/10/11/常用STL算法库/index.html","c448a37f269744f4c48f93e20e60c3f7"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","5840ca4d69b778f79d203b37d4cadf51"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","7ec255c4044eea83f7dd08d176bc3c0b"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","0d5d61ee5d6c5763ba63c719208d88c1"],["/2024/12/17/Where-are-those-algorithms/index.html","a90246fe3ade9174d44c2ec5225415c8"],["/2024/12/26/重构评论系统/index.html","f29df5d5d73c5095c6b5707aa5b5bb30"],["/2025/01/01/blacklist/index.html","52c3549366c09d5dc0d9631350c5ac44"],["/2025/03/15/GitHub-Skills/index.html","409daf8559dab2d3027458182b4f3f63"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","a5edafd8aa4ea0f3314031e2204fae19"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","542afac03aa5e24ef9e8cc989bceab08"],["/2025/08/23/github-special-files-guide/index.html","909f3725dc2f74cf7a79ed86b768abee"],["/2025/09/28/408-route/index.html","194c7a46eea7dadb8eb7b3b954598fe4"],["/2025/10/14/rvo/index.html","cab904593e923515f7b8d9c4e2e8003f"],["/2025/11/13/What-is-OSINT/index.html","d4c26232ca21635faf6b2f46cc7c5351"],["/2025/11/20/DDoS-and-CC/index.html","ed40ea3975f65be54842911ff8d6a5f2"],["/2026/01/02/2025-summary/index.html","51b929b89a61689f6640e83bc63814b1"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","bfc7fcdd6eed68afa65dca9d20198242"],["/archives/2023/02/index.html","318fd7115d39b22508b5e29d3e906d07"],["/archives/2023/03/index.html","089a1d3a20ba0f2110db5587cbc40b4d"],["/archives/2023/04/index.html","a94e52939975af800727fe542f4c8620"],["/archives/2023/05/index.html","4fce886af6939b8303e9554b9d1cc965"],["/archives/2023/06/index.html","f4149feeb73976b1f632c4321e5cd6c0"],["/archives/2023/08/index.html","0f7e1427d727b0c3a5df2ea55b5b0223"],["/archives/2023/09/index.html","eae36b00c5bd39d9b74a2124943335e9"],["/archives/2023/10/index.html","5c6cfe473c19d92cb7e38d8500649d8a"],["/archives/2023/11/index.html","f158311f5dbccc1c8afd11e64e66d836"],["/archives/2023/12/index.html","0c03f0eecd2d807b654b53e9777f5c08"],["/archives/2023/index.html","cb006464b24e4e9ac9833a6b0c5fca2b"],["/archives/2023/page/2/index.html","cb006464b24e4e9ac9833a6b0c5fca2b"],["/archives/2024/01/index.html","43a6cc4d2e770027905b4a5eb591ae58"],["/archives/2024/02/index.html","a72fcfc8e98ddfaf2156e70e684c850d"],["/archives/2024/04/index.html","c95637c67d377619546ecda5424308f5"],["/archives/2024/05/index.html","3c1da8490409ac5bf0f92735158b0aef"],["/archives/2024/06/index.html","e78602f346c10cda7681d09bc31a7f6b"],["/archives/2024/09/index.html","70c0ee260c466e1606969e53e52b7213"],["/archives/2024/10/index.html","ad99357cea83c91a115c77c0f8091a90"],["/archives/2024/11/index.html","e37bf6f66166173b80c7f622c95779c5"],["/archives/2024/12/index.html","3f22bb5788db52d5f36071eeceb8e9ee"],["/archives/2024/index.html","71f5b9c000d83984573a3190bc80bc81"],["/archives/2024/page/2/index.html","71f5b9c000d83984573a3190bc80bc81"],["/archives/2025/01/index.html","02b6977dc4c79a0b18fe8eb589a22f1a"],["/archives/2025/03/index.html","43537948948bf9b24d27d7eccca63803"],["/archives/2025/04/index.html","6fe845584e5da92b7b0fb6eee161f0e3"],["/archives/2025/08/index.html","c34786bf9673cb91066f20c4e994deaa"],["/archives/2025/09/index.html","e900b0a1ce617645b8be8c54044464f8"],["/archives/2025/10/index.html","b76237e645f3ed654e35b369c19d5255"],["/archives/2025/11/index.html","e37153396486b595155a24ad09ef80cc"],["/archives/2025/index.html","3e1f296d2f211a0938019f28712fa08e"],["/archives/2026/01/index.html","aaeeb7c1d0ea901005091248d889b0f5"],["/archives/2026/index.html","63e57b8d829be311f677ad86498dca00"],["/archives/index.html","5ba5ddafb17722a3a7aefeaf69c4912e"],["/archives/page/2/index.html","5ba5ddafb17722a3a7aefeaf69c4912e"],["/archives/page/3/index.html","5ba5ddafb17722a3a7aefeaf69c4912e"],["/archives/page/4/index.html","5ba5ddafb17722a3a7aefeaf69c4912e"],["/archives/page/5/index.html","5ba5ddafb17722a3a7aefeaf69c4912e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","fb5c79b4ef5fbe3880794fcb04ad5984"],["/bangumis/index.html","298764966a100b06148088decdf5d511"],["/categories/技术/index.html","4d2a5297e4936a92152152ede7f0939a"],["/categories/技术/page/2/index.html","9ae87aa45487e50ade892e80cab40ae4"],["/categories/技术/page/3/index.html","3440dba252decd7ba46644f820a477c9"],["/categories/技术/page/4/index.html","ea2d5e33199859dd55a0614adcf38ee6"],["/categories/资源/index.html","e8e26cf06ed1a562f9c525029c844a8e"],["/categories/转载/index.html","5263a5fc1cb441c6a5d08543450798c3"],["/categories/随想/index.html","defdb23f016ed2abfc31ea6650ef66d2"],["/comment/index.html","9e9d0c690ad3c37614041d7510a304f3"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","9e6c89d7ae0fe7579e9f773769da26d7"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","1f5cd8dc0cfbeadb910a603bb9f918f8"],["/index.html","0b40493c66eef6d789c29101e988bb25"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","928fcd8e4468f0da37f6e9b392cfb633"],["/links/index.html","b5b8a2a43bae5ece5556fb0d91c9312e"],["/music/index.html","71c1f2d9395987f8d29d42c3c19767af"],["/page/2/index.html","f27abf321fda035cd95215d65b35ce82"],["/page/3/index.html","df36d4b5ac2e0d5b1625df29294de81f"],["/page/4/index.html","ae3ee4c10d84bff93caec4b3480acf4c"],["/page/5/index.html","8716e69e8b2c3a6c7e774a0555054b91"],["/rss/index.html","0cc2342ba14793e018d115adb6e9ea9a"],["/sw-register.js","17a60675e54845029da0ccf12405b0fb"],["/tags/408/index.html","2cbf39ba9f435dccb16bdab5780fbb90"],["/tags/C-C/index.html","7a24520117cb0071e2a7f4a31889dc38"],["/tags/C-CPP/index.html","dc0f8e226abccc1b4ff19be1c44be98a"],["/tags/C/index.html","cd51d43d902efc7de2802ac480a0f5f8"],["/tags/CC攻击/index.html","a054e89a4d311cbc608535826712ee5f"],["/tags/CONTRIBUTING/index.html","aa63074a81661b2530f48d960c1fbd9c"],["/tags/CPP/index.html","4ff85c3b7328b11fac5a7e0254683a0b"],["/tags/CSS/index.html","04d180eaab666d2922c44f207fa58dc2"],["/tags/CodeForces/index.html","8b887e6f14ceb5538241e59143f7c748"],["/tags/Color/index.html","b17a4f9f3a54d71bad8b51286da695f4"],["/tags/Comment/index.html","a89035599f1bf1736f519dc4a113b332"],["/tags/C语言/index.html","713cc2daf82921e3c1e2b04dd3cc8cc6"],["/tags/DDoS/index.html","3605122d6fe8c73494194184781c61a5"],["/tags/Dinic/index.html","c2c5fc4c8bd65596531c0bcf181c040a"],["/tags/Div2/index.html","3769b1e6befd25a55ae16044dc96404e"],["/tags/Div3/index.html","44ddf8a018fd485810c2b9107525ab25"],["/tags/GitHub-Actions/index.html","e5b454eb9dbe178b0ec077d7990b5185"],["/tags/GitHub/index.html","21e61625c8d1a978137c2bb17e691b44"],["/tags/Gradle/index.html","39f9023a5b63c2ab4f1798d5ca8bb4d0"],["/tags/JDK/index.html","56000aa08308f8e0a98040f969955a1a"],["/tags/Java/index.html","004312c0dbf3f0be495e01e562025f87"],["/tags/JavaScript/index.html","d7a178ad511d7c8ed70a9f9dd7a4ebcc"],["/tags/LICENSE/index.html","4624fc13ca807590f6efd77fa3446d6a"],["/tags/LeetCode/index.html","5bfc3192dc77db69d18e79cd117f3277"],["/tags/Linux/index.html","ab15133242cae8e23f28abcc478db37b"],["/tags/Lombok/index.html","27376f65d8c9b562f0b846a7eb8aebd8"],["/tags/MSYS2/index.html","2bb06e5f47c5de2f0b1e94bcc973cb0a"],["/tags/NoneBot/index.html","1063565d4b4c061fde8be723ec8ae17a"],["/tags/Note/index.html","388da5c3aaebc509ea3bcce47ae12807"],["/tags/OSINT/index.html","1c8b8a089273ab4099691166925eb851"],["/tags/PrintStream/index.html","b75c603800b476604b7719273766648c"],["/tags/Python/index.html","d17d3cc5a07d33c624f15a86ecc6b943"],["/tags/README/index.html","b18799d99c1d69f2ebd8737b90abf7fb"],["/tags/RVO/index.html","d31fa2b0a2c197c3354add54ff6207e6"],["/tags/Rocket-Loader/index.html","6c637372821102fb800f1e1739f7d05f"],["/tags/STL/index.html","ffb8accaf0b4a9be037b7369b82c0d17"],["/tags/Scoop/index.html","f10b7475eb94bedea65e48bc8f8c0226"],["/tags/Swing/index.html","44d32c7288fba076341a0c3fc0e4ee51"],["/tags/Tomcat/index.html","d8ed82cb604a32decbe7d93dbf3365f4"],["/tags/UTF-8/index.html","29686fd2eafda7482c3dfff6d9e44995"],["/tags/VSCode/index.html","47c6a4925a8b32ac359f6999d4af7cd5"],["/tags/blacklist/index.html","af485cfc23dc649fcfe51c8df074bf5a"],["/tags/blog/index.html","966bb9dcb52e0351a02ca8b185e2d40e"],["/tags/builtin/index.html","eb92e685a22c8c7882b1c02d0ca91fb3"],["/tags/cloudflare/index.html","b85528b6c0cd58dcffd634c08926edcf"],["/tags/giscus/index.html","7bd82a3fd2e185c2186990776cda996e"],["/tags/gitalk/index.html","38f78d1c6547ed42996fd2790bb341de"],["/tags/index.html","9fe16be701c0443f728280cc4d4295f3"],["/tags/tools/index.html","75bb39f87d8d76de428489a1f8a19923"],["/tags/utteranc/index.html","3f137d09425a5dd81ffe39ed0f9e1db4"],["/tags/vue/index.html","2f7e731de94370ca4d460eb9fefd226b"],["/tags/web/index.html","3abd0aeb5855e9700ad8dd15d3a20a5d"],["/tags/乱码/index.html","5520c67d105d2309ef9b8ed2fbb6666a"],["/tags/二分套二分/index.html","d7c7caf866e9dd796a18b0c02264f9a3"],["/tags/云计算/index.html","80fe180425a5e4094f3c17a47bf38cc7"],["/tags/仓库管理/index.html","8d34fc144e05ac58247af15f50c3b4e2"],["/tags/信息分析/index.html","55e3c88d005663bcdd66db4f987ff5a4"],["/tags/划水/index.html","166a570fe1641f8a4507145bfe2db74d"],["/tags/包管理器/index.html","f4d81a1f900a6719ab39e78df60fb3f5"],["/tags/图论/index.html","bac9b33c28ca23ff568551c1e72c7675"],["/tags/字符集/index.html","afd0a65320fc3ebcab433cbf88ac69bd"],["/tags/应用/index.html","ac1236ba448d653750c883701576eae2"],["/tags/开源/index.html","2d42bd4c6188c733c18fd551b07179dd"],["/tags/开源情报/index.html","4fd0a22ed56ae63291394b6ad18e1e1d"],["/tags/悦读/index.html","4169633e64236e9ffe5aea6d15d6a3b0"],["/tags/技术总结/index.html","c6efec44c2d976f95ba7540a5e427abf"],["/tags/操作系统/index.html","cd8bcbf6b69cca36a5a7d34b01a37178"],["/tags/数据合规/index.html","ad923297e587cbcb5470776b69918cda"],["/tags/数据结构/index.html","3309ac748c1796d9701da39813874afb"],["/tags/数据结构与算法/index.html","4bd984274abced436b4b3aa105b5add6"],["/tags/新年/index.html","ec17513273c8ff3c22c6f6f5e9f32c71"],["/tags/服务器运维/index.html","d4e6fde7f5c24f16abab465ab23f484f"],["/tags/杂谈/index.html","a9bcdf808404170697ff1833188880ef"],["/tags/笔记/index.html","a8b5c7531e6a125a1f6c5f19df44c86b"],["/tags/算法/index.html","413b2336157cbff00b299ea179864353"],["/tags/线段树/index.html","e9701fdd3f370108b58cf85d4ffaf285"],["/tags/编码/index.html","056fadb0ca30204b3d2adbbe7c1cffb3"],["/tags/编程技巧/index.html","d8856c2196edb946a46a395fb1ccdbac"],["/tags/网络安全/index.html","9b39ef980b1e1384eb3dfab8e39e6377"],["/tags/网络流/index.html","0acdcc84283817dd6d91a42e7a7a7a6c"],["/tags/职业发展/index.html","5da92f4667e3197ace27ced1720a5358"],["/tags/萌新/index.html","96825d5697322fed96c6775000a43515"],["/tags/计算几何/index.html","253860ccb70257ff8c9b2a10f6e561e1"],["/tags/计算机组成原理/index.html","4131ad93d46d1542917d575b8069c809"],["/tags/计算机网络/index.html","94661eaae45128a0481fb928d17d6d64"],["/tags/课程/index.html","d46e5bb222c1d29d244f6822c39a18c9"],["/tags/软件/index.html","fcf30b1ee609857a5f876f1792bad465"],["/tags/输出流/index.html","e8263f839c5da1b780bfa0b712165c97"],["/tags/镜像源/index.html","cd76ff72e86d1d424921e3b112a4c9bb"],["/tags/随机增量法/index.html","4ed6907c7f8f239060d750b6c6ae8812"],["/tags/隐私伦理/index.html","6602ed5604c4d8ecf133ed12f97e4b95"],["/tags/题解/index.html","cac1ed1c66631e951e170d39299f8fd3"],["/theme-sakura/index.html","d25968b66650d15b83e56a1c8f61a7da"],["/video/index.html","fa843c756da8f69d1164fe401653ac71"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
