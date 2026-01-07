/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","db518f8061d9f023e3bc8f949145c279"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","3ddcd9ab1576d3e2144d659c99214551"],["/2023/02/06/C语言链表/index.html","d250dae2bb009ac68e48acf70a1292b4"],["/2023/02/06/书籍资源/index.html","1c4894a01e988a5c8d0980807ad7b291"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","14c4879d54f802789f4ab2222a702913"],["/2023/02/07/为水而水（笑/index.html","4dcfb3318acd2479d5589efa44be3dd9"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","9ca40dfd1875f6f2980b389ee0e81d6e"],["/2023/03/09/Web前端笔记-Emmet/index.html","8be8f4c4feb2edd8256e5f9d674ad246"],["/2023/03/23/gitalk-评论/index.html","675138178fa9a67a9ba0c227c238bc07"],["/2023/04/10/用C语言实现字符串全排列/index.html","69dfd835d0750fbd25733039c8900bca"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","84ea93515466dbefbfd170eae9d3feec"],["/2023/05/15/C语言基础排序-demo/index.html","f06359f2c5b98ac684aa858bca2cf5eb"],["/2023/06/14/闲着没事干/index.html","5de1e15f47ebb86690941b214da050e7"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","109ad5b0249f677ccb44bb5e0711b314"],["/2023/08/01/javase-note/index.html","b23fcee35ea11e7c1a00dd5152bc4cb3"],["/2023/09/14/vue-pure-admin/index.html","3ac0764f42eacf407ba47e35b905d7cc"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","afb17f5d102c387f1367a988c2241254"],["/2023/11/28/C-CPP-the-memset-function/index.html","acfa644ce579c8db6d535db7f3539ed9"],["/2023/12/13/javaSwing-DynamicClock/index.html","a3bde33d35565e9863f978c544d61ffb"],["/2024/01/24/builtin-系列函数/index.html","bf75c76faffc8422dcd3e0a4bfb0c381"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","e211cd34acdddddcaac6b77bc66dbca0"],["/2024/02/09/新年快乐/index.html","ef6465eacad6401b050b1bd57f626cee"],["/2024/04/07/转载-线段树专题-xyw813/index.html","18a2088b7ae0a23e3f83ea612c1fa715"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","8e4d55a6abf14cf3826de425dbf6fcab"],["/2024/05/06/cloudflare-display-issue/index.html","ac5f6be312a4ba81393f20dc24e75166"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","cabe1ae0fb27ba955581478dc54be9eb"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","1f37b1b428a29b8336773788375281a9"],["/2024/06/25/open-source-LinuxMirrors/index.html","e63452cd5ba279937f9a71d4913c1899"],["/2024/09/02/Dinic-算法/index.html","fb9556be89ecc27bf9cd6580f85fb57c"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","614e29cd4eb4120f6640033c0e14947e"],["/2024/10/11/常用STL算法库/index.html","5481c001be9912cf31450b0372370b1f"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","c55f3c0a0db780909e236e8f67fec1bb"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","a3a2c2396b91e69d2c5f44572d74ddfd"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","ab72e1d1480c4d0b20ba6acf055b7b08"],["/2024/12/17/Where-are-those-algorithms/index.html","afee0e8e59e868e0ad9ef85706039f52"],["/2024/12/26/重构评论系统/index.html","1e52dcfee906866fddac66328bdac99c"],["/2025/01/01/blacklist/index.html","9714442ffc16e59db3f0641c11d20eb3"],["/2025/03/15/GitHub-Skills/index.html","48ac57f9871804b3f08e37ca416dad24"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","d41c98f75482b0c0423e364964edbc00"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","7d080250423b4f584c1461bc0b12de09"],["/2025/08/23/github-special-files-guide/index.html","f3744a0d7e1e6bbace6a19e57f3a6ef5"],["/2025/09/28/408-route/index.html","39d29606fc4003b3383efddcad6be70c"],["/2025/10/14/rvo/index.html","85bd134b7c43e0d59dc0ecf74d4c7a10"],["/2025/11/13/What-is-OSINT/index.html","bc280edbd2fe41176af459ef3b5902ea"],["/2025/11/20/DDoS-and-CC/index.html","665585e2f122d3665480fd54758098fe"],["/2026/01/02/2025-summary/index.html","17cf687a1dba67d46a931ac5278f2658"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","b2eb66adb2974b705508bc7b0fc2a0b3"],["/archives/2023/02/index.html","3ca645d1f8075c316bf4bfc209930027"],["/archives/2023/03/index.html","ce65d0c798e94e45f15b7fef63a41384"],["/archives/2023/04/index.html","6f45a6bab47f3b7d03a1e927ce4fca7e"],["/archives/2023/05/index.html","b3afe717af613facd16d467b74fbcdca"],["/archives/2023/06/index.html","da380468c6fecf17b2939179fe9a5e66"],["/archives/2023/08/index.html","341fbf24544507bf243a1dbb40a58d25"],["/archives/2023/09/index.html","73bf7f9dfbcb68adf415081bf131b053"],["/archives/2023/10/index.html","bb605ba351b712c902c5aab315f5d500"],["/archives/2023/11/index.html","424cee207833e0f881f2e01ef81a8145"],["/archives/2023/12/index.html","075a03630a627ffb9257cf5735add175"],["/archives/2023/index.html","309d2effb70878df01c5506dff76dbd6"],["/archives/2023/page/2/index.html","309d2effb70878df01c5506dff76dbd6"],["/archives/2024/01/index.html","b9adb79f1cdfc827c735f1502048a8e1"],["/archives/2024/02/index.html","c32f751c6b79d958a6f7cd25276e8d79"],["/archives/2024/04/index.html","03a14d4f946a056714c69868bdf63728"],["/archives/2024/05/index.html","52025265a00941d16363b50ea0294ac0"],["/archives/2024/06/index.html","e3824fa97bdbe6406ccaf193adab99f6"],["/archives/2024/09/index.html","13fdad64ccba50f4f26cb8194d413d6d"],["/archives/2024/10/index.html","37c897a37a340835d38f2d88e47ad126"],["/archives/2024/11/index.html","90d356db3aa1148bcdf53542e2c25b8a"],["/archives/2024/12/index.html","30054167249f3e9bb40768e03d8e58ab"],["/archives/2024/index.html","2cb113846e25f734138f1a1c4362bc3a"],["/archives/2024/page/2/index.html","2cb113846e25f734138f1a1c4362bc3a"],["/archives/2025/01/index.html","57ec4e5f63530745d56599ea893c59b9"],["/archives/2025/03/index.html","87c64f034d8824ad2b4d0d2a6272cedb"],["/archives/2025/04/index.html","8e4cb5cc76a2d84b2acf0afe7ef8eaae"],["/archives/2025/08/index.html","2f5fc72281ffd8e68f056ad2ee2a31aa"],["/archives/2025/09/index.html","17ab2cac67e2b76a7c084518b0c0513c"],["/archives/2025/10/index.html","4518167077b43a14cb528c4082e6a936"],["/archives/2025/11/index.html","3d5f0c0caf43d6ebc7a1e25e0ba4289f"],["/archives/2025/index.html","b4672b75033c9f0cf71d9e99dcdc02e4"],["/archives/2026/01/index.html","ff0017b79a11192b06b59e7f37226de5"],["/archives/2026/index.html","489fb4b3859f73d4c34686622d8c263d"],["/archives/index.html","af576db4ab18c66450c612b14b603ede"],["/archives/page/2/index.html","af576db4ab18c66450c612b14b603ede"],["/archives/page/3/index.html","af576db4ab18c66450c612b14b603ede"],["/archives/page/4/index.html","af576db4ab18c66450c612b14b603ede"],["/archives/page/5/index.html","af576db4ab18c66450c612b14b603ede"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","41ffee63d85e1b88de93a5d6c5bb53cd"],["/bangumis/index.html","b18be9acbb9032cfa90f88ca6eb14f2e"],["/categories/技术/index.html","272baed86f323974935c7d378046c949"],["/categories/技术/page/2/index.html","9c52fddb5d72d11c1ba3bf813c2ba239"],["/categories/技术/page/3/index.html","6cea03978998e5c7ce1f851a5ba5f0d6"],["/categories/技术/page/4/index.html","c06ad2a16a2f24c62f23ba7f5f07329f"],["/categories/资源/index.html","b920fd8b749c15a72601ad0459d54f4b"],["/categories/转载/index.html","49e252dcefa03647b06b9854399f61a4"],["/categories/随想/index.html","33726b71e89ae8849a4a9ccdf24027e0"],["/comment/index.html","e1e5464d64398b0267aa245c534df8df"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","f0ec17089f5f450c2d109c7b9073f0e7"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","7dc2f1008731dbdaa2c54f820f34e5d1"],["/index.html","243710b2a8690e8f83caddaa5c35c606"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","5034c3872d79f0b7d102da6e1e888e91"],["/links/index.html","db7e90f0fbadae37eb4343ff841b960d"],["/music/index.html","ad635ab17e75b61040f027e35a50cd21"],["/page/2/index.html","345acc4f1a9f7195516d0e15cf9868d4"],["/page/3/index.html","e5bdaaf85ab17e1e559409e02905add2"],["/page/4/index.html","2c56625402ce3e695b42d53835c2fdfd"],["/page/5/index.html","8a8ea16b1c8fe8f28c8fa2ce13bfa20f"],["/rss/index.html","bd1b6218fc2f4ebc340e6a8a602b8266"],["/sw-register.js","1dca60807ac33b41f34eaa35cf0b13cf"],["/tags/408/index.html","9c0018958acbeeae90a37a95ecff3720"],["/tags/C-C/index.html","4c9b1a3cef0fa5aeee4c4b206270e575"],["/tags/C-CPP/index.html","34cc5d99b30486a392c6b62ec8f6414d"],["/tags/C/index.html","5fe673a433b12f449dbbc5880d17c799"],["/tags/CC攻击/index.html","32291f63a121a36f47faa459089d7e70"],["/tags/CONTRIBUTING/index.html","8deb40e12d6501b7d6d0f002561df8c9"],["/tags/CPP/index.html","82635f44d90d7519a10027a93f3e22ec"],["/tags/CSS/index.html","ca8549776ffcd4f09e81cce1bafe9ac0"],["/tags/CodeForces/index.html","fb98d378d808fd8cf5fbd97767b70738"],["/tags/Color/index.html","4ab16e66bd1132ecb3929108f3506eb9"],["/tags/Comment/index.html","eb91f2f91a00cc8408c72ac44aa48844"],["/tags/C语言/index.html","3893709359e683868e99e5742c3d7c6e"],["/tags/DDoS/index.html","0c40a8e2be3d272257e41fd9e4781dcb"],["/tags/Dinic/index.html","7320ca8d02a0980965ef5c5a81ff012f"],["/tags/Div2/index.html","e70a7bf5f86a978445cd3e981abe83e7"],["/tags/Div3/index.html","c1fbfe04edc4d02b215c4214502ff077"],["/tags/GitHub-Actions/index.html","b3dd34efd47826d87d984491baf00adb"],["/tags/GitHub/index.html","27d4fa5de7bcc92d40fc0eca445708d4"],["/tags/Gradle/index.html","69cc495cd9f65cb9c7dc6454d2b8c90b"],["/tags/JDK/index.html","34ff2a289d4700eedf7834b6e852a6f1"],["/tags/Java/index.html","15767c3352cb92f3f98a2b61bd6506a8"],["/tags/JavaScript/index.html","0b42cadccbb00d3de2f8c4c38076ea27"],["/tags/LICENSE/index.html","8ac4a2a07a2b0560a291bf17ccf56693"],["/tags/LeetCode/index.html","848568da6c788aaa3c288898a1779f12"],["/tags/Linux/index.html","53ff4b89cabbf97a64c36173ba98d4cf"],["/tags/Lombok/index.html","3d25f4172468d0e8d0b5c83086a2d7e6"],["/tags/MSYS2/index.html","91021cedde02b95a79033817c8fbd621"],["/tags/NoneBot/index.html","2e8ef37b0519ba41095270dc5c73dfff"],["/tags/Note/index.html","70918086cc2094e97c780c12d136b846"],["/tags/OSINT/index.html","9adaf7202beac78bf823df6f88fc96d3"],["/tags/PrintStream/index.html","a5f4524dd7426cbe62d5ead5243068ac"],["/tags/Python/index.html","08df8ca52732b8a627af493e56177174"],["/tags/README/index.html","c273ffd862876daa73b632de12f07125"],["/tags/RVO/index.html","a8aa57a947ae3780e37a6f7ee514b6d4"],["/tags/Rocket-Loader/index.html","5a0e562e62c6d3d57a2aab9b0c791a6d"],["/tags/STL/index.html","7cab7dcbd291ee3d7d78dbd07288b2e2"],["/tags/Scoop/index.html","e7f347407239dcbef73e44a4e24347fd"],["/tags/Swing/index.html","8cc3a4526d724cdddc57e1901c5aaf59"],["/tags/Tomcat/index.html","c63a0ae357255c297d8c621c99c3804d"],["/tags/UTF-8/index.html","0fb8ff7d0c14e16d0e6d4c25dc0252bc"],["/tags/VSCode/index.html","576c14550ec32b246d2a9426a4aadc1a"],["/tags/blacklist/index.html","72e5111c976434ba8e9c739d5d72dc14"],["/tags/blog/index.html","859a4ec64e393a9315a748cc49620f5c"],["/tags/builtin/index.html","088d39bb20b2a8a6a3d2e020be3cf417"],["/tags/cloudflare/index.html","2ea3653473ce5ba8b5d04be652852c90"],["/tags/giscus/index.html","975c00bb231cbcf49ed5c25e0b90dd53"],["/tags/gitalk/index.html","c54541b904259b59ed8d9cfc4cc75940"],["/tags/index.html","3512297856a230024f4ea1c59fa01c56"],["/tags/tools/index.html","225c36cc3a4586a9d1d2692700a75cd1"],["/tags/utteranc/index.html","5fc5275f9c45f4319b3f6275b9b7edbd"],["/tags/vue/index.html","9d3ff14acde5010feee2c52f5abd2d8c"],["/tags/web/index.html","80e9a5c2068c9d32e1108245d0b591a1"],["/tags/乱码/index.html","5377bf078731291f6ad4683906cb40d1"],["/tags/二分套二分/index.html","e1dc4a18013e8ed683d7ec568752dc94"],["/tags/云计算/index.html","3f76310e2fa83dfca855caa0a825d21b"],["/tags/仓库管理/index.html","1d740f84d8816cbefbd964ff5fdecdc7"],["/tags/信息分析/index.html","03392f23fbd32d1ac58aaa33b774c7f0"],["/tags/划水/index.html","a3043d4abff0663952a3c78028432fbf"],["/tags/包管理器/index.html","a34fb7ecffeadb012b3a056439baf079"],["/tags/图论/index.html","a15cb826dd2ee00eeb7a53ffd918d605"],["/tags/字符集/index.html","71907d4ce67a5533798730970ea9924c"],["/tags/应用/index.html","6188da468d38e042e36c5317068e241b"],["/tags/开源/index.html","cc1d7136ad760bf769075fbae8139111"],["/tags/开源情报/index.html","ff2273dafcc1485591a2fa29cc477534"],["/tags/悦读/index.html","d89d8feca19c15dfd5feef4b85a46625"],["/tags/技术总结/index.html","0d4a857aece9afb12cd6c61bb88b6558"],["/tags/操作系统/index.html","e81389bb435772b7095779c53005ddab"],["/tags/数据合规/index.html","ed645d2b0b333a51261720adb0d35cac"],["/tags/数据结构/index.html","1cc87d091e860aab287345591bb09cd5"],["/tags/数据结构与算法/index.html","415a706b5ee919e32c88eae5ad3e71d9"],["/tags/新年/index.html","5932fc89a035de36919e943bdde60793"],["/tags/服务器运维/index.html","2b7d50d042d171cb2ed27d3640a5f8ca"],["/tags/杂谈/index.html","33fddb7b66f092dd1d1cd20e5d3c3367"],["/tags/笔记/index.html","3bd0e9a0a14b42c1bd7ff957282ee2f2"],["/tags/算法/index.html","12a872d7ad5dc11c9e9100ac10a197b9"],["/tags/线段树/index.html","92225f225d16237d0a57eadacff51f87"],["/tags/编码/index.html","6b475a4c238fc69b1363f3b2190d9290"],["/tags/编程技巧/index.html","dab78cdc18e14a654157c79e6400c877"],["/tags/网络安全/index.html","8ff2e79677ab9b21d1afbeb186343eeb"],["/tags/网络流/index.html","f6cc8f7bb866ceda9f9e3aeac03ee311"],["/tags/职业发展/index.html","30699692e1dc268f86d734bd11905e77"],["/tags/萌新/index.html","24c630a629504bc656038a2324c43226"],["/tags/计算几何/index.html","95267fa1a80152449ed773803a953793"],["/tags/计算机组成原理/index.html","a9ac457501c05ab915ff70b5b57ca564"],["/tags/计算机网络/index.html","9adb3fef32dc1ab2cc6097f9435ba83e"],["/tags/课程/index.html","643b1a56f65c2f8766c1023e104692ff"],["/tags/软件/index.html","f3c61b3dd16b19ba3354520b13752f4b"],["/tags/输出流/index.html","94715756a3464bfc0a628db88952e79b"],["/tags/镜像源/index.html","082aa15964a2ed2755f0105fd93f0804"],["/tags/随机增量法/index.html","341d0d36ac3277c0fb304a19612b24e3"],["/tags/隐私伦理/index.html","5a329e67d3544df31e6d91aaf8c9683d"],["/tags/题解/index.html","296a15524334b005b788c907e013b0ee"],["/theme-sakura/index.html","976d6307875588e97ed06a6a5a2562c2"],["/video/index.html","847f462027b34183b39c972bba3ac095"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
