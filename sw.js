/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","dbe1c5f353deeca0d1122653530210dc"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","f92c192be6485df9c31bc2aaafd6a7d5"],["/2023/02/06/C语言链表/index.html","74bc02bc064cfa50acb0406e86abdec1"],["/2023/02/06/书籍资源/index.html","48f8d637de982d30e46eba759b1172c6"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","28438c5187e916233be03f1516afc0b2"],["/2023/02/07/为水而水（笑/index.html","484f55c25f2b292c1daf1f1b4821fb2c"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","7d5fcd0ca9ccdeb5bf65a5c8c94f989a"],["/2023/03/09/Web前端笔记-Emmet/index.html","99792c2d30144b27f2951cabe538942e"],["/2023/03/23/gitalk-评论/index.html","0b51d120df8a236e14ab09f81f8a76f8"],["/2023/04/10/用C语言实现字符串全排列/index.html","7b07331e680055f50f51aed448c5b27b"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","1c0adddd6202966488520a65d94473e6"],["/2023/05/15/C语言基础排序-demo/index.html","f482971dbe1f5e97edc8a1206c9357dd"],["/2023/06/14/闲着没事干/index.html","da579cb21de3615c258b1ccad3075b3d"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","a736a46b8e3dfe2eafd66000ed35d3cd"],["/2023/08/01/javase-note/index.html","98ee885989f84f1e8359feeefd70b61e"],["/2023/09/14/vue-pure-admin/index.html","3dfc0dae3e10c073118be2202d9c1e3e"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","d5adb2999b07b21f5051d26aee17993f"],["/2023/11/28/C-CPP-the-memset-function/index.html","1c41c10b2a7a322bfccb24727cc31ee0"],["/2023/12/13/javaSwing-DynamicClock/index.html","fffb8667075e422a4a88c031aa26427e"],["/2024/01/24/builtin-系列函数/index.html","d538ccc4c50c6613357d0eae15b77c44"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","a87619dbcb34fd6811cbdced952f8d2c"],["/2024/02/09/新年快乐/index.html","0c43e8c94d1a41e44a2532ccee35ca12"],["/2024/04/07/转载-线段树专题-xyw813/index.html","7f27c1467d506e04ddd3319b774e145f"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","c83a3347215235859c29106b3e5f0d19"],["/2024/05/06/cloudflare-display-issue/index.html","0083593b3ed383bbd8ed1825bdcfb99f"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","b66a95e370bcfe03ca7c4f5b6b22c2bc"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","e518fd56b8c1f8bdb7a72d69460d4d7e"],["/2024/06/25/open-source-LinuxMirrors/index.html","08cabeb969f63a2bf0f8bbf9487bf8ad"],["/2024/09/02/Dinic-算法/index.html","e5ea9b911759e76f6fff71f54ed76841"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","584d0de638f32bd723fd23847cea47f8"],["/2024/10/11/常用STL算法库/index.html","2bd88369f2266a032fa92a8b51bde25c"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","a2d97614faec7c5e8d98b9aa4d123d02"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","95d9b2bd9e5f40739d840481c9b854ba"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","04ceb9373ef0ebabcbb5b04fc5091a8f"],["/2024/12/17/Where-are-those-algorithms/index.html","67a0b309b48c438c3da54c1eea4cbf32"],["/2024/12/26/重构评论系统/index.html","e4acd687e0d924a9843731784b528f93"],["/2025/01/01/blacklist/index.html","7c97fd9f051b460d7fa05db247baca0a"],["/2025/03/15/GitHub-Skills/index.html","a5bff8c7b844697d289a510522e9b226"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","4165490aadde0fcc8fed75716831fcb2"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","c2531e0a3d49af3228323c340dde4fc1"],["/2025/08/23/github-special-files-guide/index.html","3cc18e549e2e3be96eea1ed83fb23c5e"],["/2025/09/28/408-route/index.html","31814d4ee132dbd88e6a284eae24e4f3"],["/2025/10/14/rvo/index.html","2b670d7fe0a1a9e8a47c5e42fcd9b469"],["/2025/11/13/What-is-OSINT/index.html","98d44496d6a98b725e9cf328a27fefbf"],["/2025/11/20/DDoS-and-CC/index.html","1f4334a544dce7d491fdbb85ae7d112a"],["/2026/01/02/2025-summary/index.html","87ac79a2ca36b7855df11bb3fd8a2ed1"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","ede1a6f4adc90707cd852e7e5e6db6d9"],["/archives/2023/02/index.html","06e386bb42c9ad323b398e28aef4ccd6"],["/archives/2023/03/index.html","fc20cc6a429971b156c3af67588f3a94"],["/archives/2023/04/index.html","82fd898d71da1c7bc53749fcf522478d"],["/archives/2023/05/index.html","a32582b2cb2f24fb9703e70a5c73dbd3"],["/archives/2023/06/index.html","647e3d92d9f7c1aa5259689cde4579ee"],["/archives/2023/08/index.html","2e4f164c12cc197ab5ce163d12120e0a"],["/archives/2023/09/index.html","1409d8b3e0aff05c3373f36c669015ef"],["/archives/2023/10/index.html","c486007225352498ac7c127ebc38096d"],["/archives/2023/11/index.html","0092d507baca33b493c66ac2bfb90a93"],["/archives/2023/12/index.html","3ff6af822c9b9b00db818aff71415a10"],["/archives/2023/index.html","7e0a1a173a07e6eeff2c74897a9b7483"],["/archives/2023/page/2/index.html","7e0a1a173a07e6eeff2c74897a9b7483"],["/archives/2024/01/index.html","210af5f0a79b65b2d35c7daef6a47d3d"],["/archives/2024/02/index.html","e1a7f99183cbb38ccfc6b9a97de96320"],["/archives/2024/04/index.html","a7d15d88efd4eaf71c28b20d21855068"],["/archives/2024/05/index.html","90f2bf6f103745495ad2a63920fedfd0"],["/archives/2024/06/index.html","5f7a3341d86d133c56a74d83bc9e918c"],["/archives/2024/09/index.html","02657d60e06a6eff74ba7cb816be81b8"],["/archives/2024/10/index.html","453698f37fa349964d67da38a7f5d4cf"],["/archives/2024/11/index.html","91bc11d294fd9d883e890ed8071507aa"],["/archives/2024/12/index.html","7d461712a5714d2f836d4bf9f3a43762"],["/archives/2024/index.html","ea7732b0bf8770146127833230733b67"],["/archives/2024/page/2/index.html","ea7732b0bf8770146127833230733b67"],["/archives/2025/01/index.html","2cada5ad412c0d4a88ed50c5bbd3598a"],["/archives/2025/03/index.html","509c89f37744e31b9cccfd709a697bfb"],["/archives/2025/04/index.html","d57f5d49b1b105be3e0e60d705cb9340"],["/archives/2025/08/index.html","ca02457c61e1faf26f83048c5a173242"],["/archives/2025/09/index.html","c4e7a1d5d0b6462bcef9de5c2d7d7914"],["/archives/2025/10/index.html","c205ce1d47aa488a258530c0d48d8052"],["/archives/2025/11/index.html","c8f753ec43b77a7972cd5fce36533dbd"],["/archives/2025/index.html","3925c70d3fa57600b32c8fe85c476ca9"],["/archives/2026/01/index.html","e936320ad481995371db34f608762ec7"],["/archives/2026/index.html","c20204258fd8b29f681109a285ede010"],["/archives/index.html","7334bf021e14cbb99f587d344fbf4fb0"],["/archives/page/2/index.html","7334bf021e14cbb99f587d344fbf4fb0"],["/archives/page/3/index.html","7334bf021e14cbb99f587d344fbf4fb0"],["/archives/page/4/index.html","7334bf021e14cbb99f587d344fbf4fb0"],["/archives/page/5/index.html","7334bf021e14cbb99f587d344fbf4fb0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","03dcb621af7c628056f9ddcba042bfd9"],["/bangumis/index.html","a80269f6860355c07885b2bbfc0c959a"],["/categories/技术/index.html","1c11b66bdab19a4c000180d04a410dd0"],["/categories/技术/page/2/index.html","eb20c51633158cc62019d8832bff98cd"],["/categories/技术/page/3/index.html","090bec9ce1ea9c9cac42a4a8c3081e70"],["/categories/技术/page/4/index.html","4d2c1db8b65f09143f8c37612a4b816b"],["/categories/资源/index.html","bc4dafa6c4253427873e47062ba1dc36"],["/categories/转载/index.html","3fac9c1145d86194f6f1895294f693db"],["/categories/随想/index.html","6966f57148d473222e669ca3bc933039"],["/comment/index.html","4c09228d844e48e1259230a20e98f202"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","78d32a97b9b04f3ff4237bc43aa6f56d"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","db977981beb749500101adb8658b4ac8"],["/index.html","36354db738a428df24e20d877c6aa1f1"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","327557214f4ed0fccf481076b83edd19"],["/links/index.html","9598bcc7f64d24c81fcc5131fd8fb3c2"],["/music/index.html","09c08a5e7561b8917b275986e6d1f02c"],["/page/2/index.html","eb73b9ecdcefd53d74e47c9c9a0415a2"],["/page/3/index.html","637f8969a8a1f8e3cd7b8998ab2184d7"],["/page/4/index.html","3e3232b96c0099db219b96350e3bfd11"],["/page/5/index.html","004fcd6b5fd9762e4e389b37588773c5"],["/rss/index.html","c675c20531967218a4dd9125505d3097"],["/sw-register.js","49919fc2da28f42e5a91681c1ed9f030"],["/tags/408/index.html","8beb4145a3c8cdf3abcc4da75d9bfe55"],["/tags/C-C/index.html","76dbd3f880cd9d39fd95c0f63288daf2"],["/tags/C-CPP/index.html","d74c9f1d5b65ebbf2edc92146164d9d0"],["/tags/C/index.html","480c6a43cc8e72a2a94337910e36b8ad"],["/tags/CC攻击/index.html","f206b0b06ee9cc206dbed2e02bb278e1"],["/tags/CONTRIBUTING/index.html","21f50551609ad751d95c6a069827b500"],["/tags/CPP/index.html","e478c9b500c5da7007c228010486c46b"],["/tags/CSS/index.html","b2bfad8629fe5af20e462c99eed0e74b"],["/tags/CodeForces/index.html","80f85702ed8798858051f70d857bec5a"],["/tags/Color/index.html","68adb36e8ce0563227407084496b0822"],["/tags/Comment/index.html","3b1ead1e5e9b7c9570f8858742eed549"],["/tags/C语言/index.html","c6c51b7844f55351afe792c696343213"],["/tags/DDoS/index.html","b3b233ab297cf48f5140ecc96f9ffe5e"],["/tags/Dinic/index.html","89a45edbe4063e9a6143d7d3e4e5240e"],["/tags/Div2/index.html","d1781e1fc6a2f2a943a8d4924cd8f9c3"],["/tags/Div3/index.html","fa5a2b1cdc2f68eb65307f3c7a55df52"],["/tags/GitHub-Actions/index.html","5e2d2e5acdae4661c73190d310e04528"],["/tags/GitHub/index.html","68871fad5e5fc046ae18dc9fd021bd71"],["/tags/Gradle/index.html","b679fa567c63849fa28ebce81f4fecd5"],["/tags/JDK/index.html","62f560d37f06941d1c4fcc47ae87667a"],["/tags/Java/index.html","f0b7e792ba15440b52d13f5573f58705"],["/tags/JavaScript/index.html","1e12aba7abdfa1b0ac008c5161f350cf"],["/tags/LICENSE/index.html","7a3d0c0c152747182bacb374611da049"],["/tags/LeetCode/index.html","77114e9e6ae2e2e34dd8b3e23c458f08"],["/tags/Linux/index.html","b22c6c979e4113ddaaeedcb22fbe776a"],["/tags/Lombok/index.html","6977631a7eba4ea5081944821936a194"],["/tags/MSYS2/index.html","d3e79d90bbf904cddd601b02f37f46dc"],["/tags/NoneBot/index.html","58068db6836c307c07f4ce02193f847c"],["/tags/Note/index.html","c01e6362adf184244da6c97ebd2bcf87"],["/tags/OSINT/index.html","f9a67ee0004438b259299009618699ce"],["/tags/PrintStream/index.html","2465605f9883b27ed9806187b192c0f1"],["/tags/Python/index.html","6fe683d7ef51ba2b289595e3413cda93"],["/tags/README/index.html","c94319bc68434562b2dd5590792e6772"],["/tags/RVO/index.html","161224bfe57ca9992da284925c4b5f7f"],["/tags/Rocket-Loader/index.html","6caffbd97130de766a9abc1549daa24f"],["/tags/STL/index.html","1cf5389f8dea89244d42ba69cceac989"],["/tags/Scoop/index.html","e99d1eca6edcbba4cba9ccb00984f88d"],["/tags/Swing/index.html","d5a1328994305fcc23efce2bebca81d0"],["/tags/Tomcat/index.html","7321f0155fef5cc988262a60f8b3d2a1"],["/tags/UTF-8/index.html","297665dc5f4f86ae7fa797955ae8dfd1"],["/tags/VSCode/index.html","35e5ef0beae45960d1323dd428a8501e"],["/tags/blacklist/index.html","a9f86efc2267c3922e3e329d4f883727"],["/tags/blog/index.html","c721364b46585acce602204672414e2a"],["/tags/builtin/index.html","3bcb1b1169b7774f1b9c92677b167748"],["/tags/cloudflare/index.html","5b92f2a32356649d05314eb49cd8f293"],["/tags/giscus/index.html","3249708512f6cc5e87dcc7a9c7068802"],["/tags/gitalk/index.html","79e58cf8c83b929b09a8778519b58da7"],["/tags/index.html","f6466a17dad10dfd1e5cb70d28849480"],["/tags/tools/index.html","e355bdd63a5911e426568be30b3a40d4"],["/tags/utteranc/index.html","41482acaf1f33443b23360dc0b58886e"],["/tags/vue/index.html","89380e379cb5bb90b775098a429205b9"],["/tags/web/index.html","26a7622de832bc2a9305711df69dcf7a"],["/tags/乱码/index.html","994575991b5a9d43c5e7f668e56ce9e8"],["/tags/二分套二分/index.html","0599291673cefe84b1cf18bc1b534920"],["/tags/云计算/index.html","6b711ba52092020eb7d694863a5f6320"],["/tags/仓库管理/index.html","eb211ab1c569942fb276e84ea5a75199"],["/tags/信息分析/index.html","4afa2068d831faf5f6068f91e9ea903e"],["/tags/划水/index.html","bffeb538a171d4eb7d4321c2a0864644"],["/tags/包管理器/index.html","d27c8c0888c984a5973b2091c6dfc598"],["/tags/图论/index.html","af3b86a98478a90fb91575213cb2a3fb"],["/tags/字符集/index.html","d76ec8fffe4a1354262f5838396286f9"],["/tags/应用/index.html","bb6af164fc8fd45b30f6b8b7fb007916"],["/tags/开源/index.html","95e28927f07246e823e35d064120d6cd"],["/tags/开源情报/index.html","fb750e14ac5c67de08e9f392cd937dbb"],["/tags/悦读/index.html","cf5e833ce3d9162b96995c93d41d2a3a"],["/tags/技术总结/index.html","246b550b77ff012523a1794e1691b4ec"],["/tags/操作系统/index.html","374a4632e82da127fd62caa0bb696749"],["/tags/数据合规/index.html","fb9ffe735e2e214c3d2850fc081c3f82"],["/tags/数据结构/index.html","7b8d5266dc56b9dbccc907fff2778e55"],["/tags/数据结构与算法/index.html","377531fc3e2666790dd932b83dc3c5ff"],["/tags/新年/index.html","1a1fb80ce289ca3ee4bc503f32e803c8"],["/tags/服务器运维/index.html","02419cb966b1c00df45eb9a1c3bff7d1"],["/tags/杂谈/index.html","155949426b9929bbea3f0ffbdf367de9"],["/tags/笔记/index.html","13335c46480a1c650136f9e542d2adf3"],["/tags/算法/index.html","74882e6829fe779c93987caead4c2005"],["/tags/线段树/index.html","27f3a82c27322043c5a03cf137114c8c"],["/tags/编码/index.html","f6c2a0d4c2a01f9a1c01222f785f8b9a"],["/tags/编程技巧/index.html","a473001f4642dc2787f71d911fe74355"],["/tags/网络安全/index.html","277975bba6fbbde365e0d3753117779c"],["/tags/网络流/index.html","114dc29ddd78b528d6187ac7362877de"],["/tags/职业发展/index.html","51a539e8349f9231c42b564a009d0945"],["/tags/萌新/index.html","68bbc1dfd398c77f2b27087a8457eb57"],["/tags/计算几何/index.html","c2b89fd406ff09a21580fda00023d28f"],["/tags/计算机组成原理/index.html","9bc52a5824217619af4bb4928c2b96d0"],["/tags/计算机网络/index.html","b2af7618800338654e36c3c1be11add6"],["/tags/课程/index.html","c3e065911b36ff77a4edd73318856baf"],["/tags/软件/index.html","fc6b700f97f6450e732ef79b5ddb19bf"],["/tags/输出流/index.html","68f47f6de9a8e153e9feee662d0729f8"],["/tags/镜像源/index.html","cb20568366e7fd72f6cfc2e79584c912"],["/tags/随机增量法/index.html","4743fa5d0a1d18eb613be76fdd14f48f"],["/tags/隐私伦理/index.html","18157220787e6f922f06c2526663ea89"],["/tags/题解/index.html","43822f3f8c27268ed6b44b5cf8f5f2ef"],["/theme-sakura/index.html","e1f6f09ccd0cbfdd453ef6e3d131a28d"],["/video/index.html","e97720f207c8dd59acecf673910cd2da"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
