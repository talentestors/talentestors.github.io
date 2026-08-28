/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","6ac99f5b7854461285e80766e73bfe22"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","025dbca50b97dd6ee267c82ef2205673"],["/2023/02/06/C语言链表/index.html","b5214d01d12470b8520f2fd8abc6244f"],["/2023/02/06/书籍资源/index.html","d1a00d4b467f3fa46cafb036a9168dac"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","e153deb19341b9869596d550d3754999"],["/2023/02/07/为水而水（笑/index.html","b87e56bccd7f1084c516fd18a04d6a4a"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","a47fff9f9757a3c30f45c8a2fea4c552"],["/2023/03/09/Web前端笔记-Emmet/index.html","d4e9ac1875a6c360684a3db69ea4599a"],["/2023/03/23/gitalk-评论/index.html","325e333ad60e3eab0f69a67994c4febe"],["/2023/04/10/用C语言实现字符串全排列/index.html","ddaffb1fc2a405b18ebcdace3244f717"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","8871589873b45999c438750885e6bef5"],["/2023/05/15/C语言基础排序-demo/index.html","2e339e89d6910561341435dc61fa2164"],["/2023/06/14/闲着没事干/index.html","1c40554e82bdc0bd8f5b4e4483f3c797"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","8fccadd69d168a109d61d43835148f36"],["/2023/08/01/javase-note/index.html","fb9e92fbb58a5f57d8bb8e9f20032194"],["/2023/09/14/vue-pure-admin/index.html","439e681b2d062bf981051642be3f8f46"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","476402fcad47a6142cf3bdf9b6256ed1"],["/2023/11/28/C-CPP-the-memset-function/index.html","1809491544dae8354a628bf61114c1e9"],["/2023/12/13/javaSwing-DynamicClock/index.html","83a15982408c047649bc77e52ea2b265"],["/2024/01/24/builtin-系列函数/index.html","13bf61fc19fa7cfadfecdb296c10a734"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","0e715c20140de3dc06b83116f2d55cc9"],["/2024/02/09/新年快乐/index.html","7bc3ed550351b2fed74482b5b0e109fb"],["/2024/04/07/转载-线段树专题-xyw813/index.html","e9ced64e3be8216458c5d70772681581"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","d015c6c1598cc773f368b4d6824a1d7b"],["/2024/05/06/cloudflare-display-issue/index.html","6dd76fff470bce3f6db2bc3053e27eaf"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","c78d3cc0eda7f7508a181f3b693c1606"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","5ce30d7ea00d3d101cae91f67950eb0b"],["/2024/06/25/open-source-LinuxMirrors/index.html","2694b90563e34547d981850d128afa06"],["/2024/09/02/Dinic-算法/index.html","14026b020637bb5f6879e4c428a8061d"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","bf7aa6d328cf93a86b3b42027a8b3520"],["/2024/10/11/常用STL算法库/index.html","f69486df252dd2206a3c7a3d2ddcfa41"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","e63e1b58d0b3f41610e160178e9ae5ef"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","37b4545c1c018a2b7e6e6dc34edb436b"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","af98a4e3362d2d7e4e80a7a306f33208"],["/2024/12/17/Where-are-those-algorithms/index.html","8d1e05c3e1dfe9efdd7aaf80934be80a"],["/2024/12/26/重构评论系统/index.html","05f5c754f0f31b338a2fec35132fb612"],["/2025/01/01/blacklist/index.html","62d8edc8598f47e963ee5036a336860c"],["/2025/03/15/GitHub-Skills/index.html","7b8d0fe919a3d144e6097801e0a86cb1"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","634237ac870093141242303216c4ca39"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","c2acbe2132d9ced03092945d646c664f"],["/2025/08/23/github-special-files-guide/index.html","e53e6bf80549686980f44b87ca2f83d4"],["/2025/09/28/408-route/index.html","c3bf5fe663f68fc25bd8f417bbf82998"],["/2025/10/14/rvo/index.html","61d086153cc4dbcbe25d16d1106d7fd3"],["/2025/11/13/What-is-OSINT/index.html","a0aa6392b07648336f0f2caa1d385680"],["/2025/11/20/DDoS-and-CC/index.html","7cb66e1ed1ad135da927e0a413048025"],["/2026/01/02/2025-summary/index.html","02e00c6f9f0f8a63073bbeb1fd09e3e4"],["/2026/07/26/reincarnation/index.html","b91c863ec37896a78114b47300119553"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","523ca96286f2730830fe6f7e640300b8"],["/archives/2023/02/index.html","8e44200910de628287b904003bc1b7db"],["/archives/2023/03/index.html","3633b59d0cbd77887a52b6c15d6d19e5"],["/archives/2023/04/index.html","9820b0510dc1e20a283414ed471ab618"],["/archives/2023/05/index.html","c709984dda8d5b9cf6c1b1215e5f70ef"],["/archives/2023/06/index.html","f14d9cb2e05c7874e998d2c0230e8e3e"],["/archives/2023/08/index.html","9cb529c7b397606a98a7da2d5f3e7321"],["/archives/2023/09/index.html","5a7e6372f30aa33b64a7c1776fc7519f"],["/archives/2023/10/index.html","8b128688d79134c8694457ec4df26686"],["/archives/2023/11/index.html","7fa06b0a235c6712b5384a50a5063414"],["/archives/2023/12/index.html","c68b37a3477025622ec8b94810cca3ff"],["/archives/2023/index.html","40129909f15e39fb9600571b940f45f6"],["/archives/2023/page/2/index.html","40129909f15e39fb9600571b940f45f6"],["/archives/2024/01/index.html","366ec140673da90caf952cf56ff18038"],["/archives/2024/02/index.html","8d94c6597b10b9676434a8b96b8d7e7d"],["/archives/2024/04/index.html","43b547684991292c3dca5cf54aed09ea"],["/archives/2024/05/index.html","854e11c9764f3042ddc8f9d8fb6b92a1"],["/archives/2024/06/index.html","d693c1b492f01718b55dec9cc79b9a85"],["/archives/2024/09/index.html","298ca6d907693440cabf603f19ceace4"],["/archives/2024/10/index.html","26d86c0686d8d0338531d4f5a85c0614"],["/archives/2024/11/index.html","e14d104251131a50618ef7f165472e32"],["/archives/2024/12/index.html","72d565036acc4fb0a30b21bdef8a3da1"],["/archives/2024/index.html","5e4e64feb552e9fb326eda605d07fcfe"],["/archives/2024/page/2/index.html","5e4e64feb552e9fb326eda605d07fcfe"],["/archives/2025/01/index.html","61f580a430345919f7f8245077a045a8"],["/archives/2025/03/index.html","fb62a5fd1ff25b172c31c0f02af69921"],["/archives/2025/04/index.html","32394ee8cd04ed5975e623334c4f0999"],["/archives/2025/08/index.html","c2c14f5ef46ba944788eba9a5b0cbfda"],["/archives/2025/09/index.html","382aac0d1cb17f8ba69270d75c126874"],["/archives/2025/10/index.html","1bf413fa94cc904cb8a7035f921ca591"],["/archives/2025/11/index.html","a075c3bb32e9955007ff8e474c2c1923"],["/archives/2025/index.html","a9a02e98a880decc490c65f036757d07"],["/archives/2026/01/index.html","65db8f13335a3f1626e11db52f3e315d"],["/archives/2026/07/index.html","63a1d6a63a2d9d440064e0139ce36244"],["/archives/2026/index.html","cbca1b9905dc4f77354e41b5a14b1755"],["/archives/index.html","2910b59af99cea54b1303a828a9dd303"],["/archives/page/2/index.html","2910b59af99cea54b1303a828a9dd303"],["/archives/page/3/index.html","2910b59af99cea54b1303a828a9dd303"],["/archives/page/4/index.html","2910b59af99cea54b1303a828a9dd303"],["/archives/page/5/index.html","2910b59af99cea54b1303a828a9dd303"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","a843055071ecc7163cdeea308131c92a"],["/bangumis/index.html","7cdaff968118d41b5e83f1905f1fc45e"],["/categories/技术/index.html","1246519efb06341bbcfc5ac1ad07551c"],["/categories/技术/page/2/index.html","c45400f2a98db1637ea8c940041c8863"],["/categories/技术/page/3/index.html","e12e29e769614bfe86561b1b4230bcaa"],["/categories/技术/page/4/index.html","4a2fb0ec39a64faac410f198da9c4599"],["/categories/资源/index.html","06c384f8d69fb2663e55203374de76f6"],["/categories/转载/index.html","8f95425bf0960422fa76de982c797922"],["/categories/随想/index.html","e3a7f710549712e61efa1e8889425abe"],["/comment/index.html","0288c3f2cf8bdb199b77ed06170c7d61"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","ffd95f599665b12041bbf7f26a9b450f"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","95a5f0bb798373e03e97a99599a1a024"],["/index.html","5cc57c03f64ba8e3e181a2f5c77c1bf1"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","d658b18283447d8c45a298ddbd7b5000"],["/links/index.html","abe0afb7bc69d83b85828e291f2b86dc"],["/music/index.html","a94f8f678897ae39fd839827ab0add28"],["/page/2/index.html","17598d2e6e7879cda667cd9c518ce282"],["/page/3/index.html","0f4946a7b65480417a98678ddb475fca"],["/page/4/index.html","bbb9e7cd8fd94a4b295e4636a54e19ec"],["/page/5/index.html","77b93e3eeed7901982b88e4031f4fc6e"],["/rss/index.html","50b5dffa0767024ea59bc02a9bf343ac"],["/sw-register.js","c366c40d674171926413ae01d838e5ab"],["/tags/408/index.html","fad53e7945016798cd84c48663954720"],["/tags/C-C/index.html","c774385f01c5e151934b488ebde5739b"],["/tags/C-CPP/index.html","c53049f155c1a3339589c2d7b6ddec5e"],["/tags/C/index.html","30faf12ec05114c5d611e234a811bda2"],["/tags/CC攻击/index.html","86844785e0b69343ecd1e9ab2bfe0222"],["/tags/CONTRIBUTING/index.html","c482b21c060c2523e852522eca3c2f06"],["/tags/CPP/index.html","5eb07ea11386c5c9fca48fbf2d2a2e6b"],["/tags/CSS/index.html","1172fe25050e923fd209874989426310"],["/tags/CodeForces/index.html","f5e8a6fdb1ac165d4a4b9d6ba8a53b37"],["/tags/Color/index.html","07f6214cf70879d04136c1ced761fd0f"],["/tags/Comment/index.html","50cbe58ab4902d1b1bae7cb23d0ccf75"],["/tags/C语言/index.html","e827d4f9cdc681745c51b33c0e96bca0"],["/tags/DDoS/index.html","9ae89ffe09e3e5d1a465ad319087ef5a"],["/tags/Dinic/index.html","7d083a5d9185e63847d35a4c663d6502"],["/tags/Div2/index.html","47b6608b6fe493b91fee304be73b2634"],["/tags/Div3/index.html","8bb4e9c03c6b829c4f375c8e495c969f"],["/tags/GitHub-Actions/index.html","2250af45719e6b33d5edab465dab7403"],["/tags/GitHub/index.html","e48ecc23cb47cae7ec5b1d18c2ead58d"],["/tags/Gradle/index.html","964a2a8e01708a354364ff3cdd0b351e"],["/tags/JDK/index.html","cc9aa8aa5a2ec9cd58bf9a3e93101d4e"],["/tags/Java/index.html","1fdefb0c198cd037840b7ca46a070386"],["/tags/JavaScript/index.html","38e68f55aba3c7069c81f529db7a32d4"],["/tags/LICENSE/index.html","95dbf8173f3a2aba2e570357b2ca59b2"],["/tags/LeetCode/index.html","b31327cc88eb8b323b12fdaeb8731f26"],["/tags/Linux/index.html","eea00fef7dc5a9059727c13f77fcd3ed"],["/tags/Lombok/index.html","7063912eb8fc458d919f0c596c4c0169"],["/tags/MSYS2/index.html","3ec1f2873fa4d36b23a0e4d579fba017"],["/tags/NoneBot/index.html","a852611e48520cf7d7eb9446b6d43518"],["/tags/Note/index.html","0965be030a7494dfac63e9aa19f9bc64"],["/tags/OSINT/index.html","1c3a18aff543b5755e5dd6fc872eee72"],["/tags/PrintStream/index.html","af9f81b46b56ff7b8922c889a0cd3039"],["/tags/Python/index.html","4c0443e0cc9e01601071b6dcc9199db5"],["/tags/README/index.html","a213d856f2282602be7b1faac4918c71"],["/tags/RVO/index.html","e5d4310b69d04ce6e3bf718bebf8cd94"],["/tags/Rocket-Loader/index.html","512705a77a6c9ba733d2f77242c90f0e"],["/tags/STL/index.html","bbece0e3be37258bc9d0e5007075daf4"],["/tags/Scoop/index.html","f7269c842aefc8d30b5d676a49770e30"],["/tags/Swing/index.html","d7ac267e5466501d8f705acce321ef12"],["/tags/Tomcat/index.html","e39b219cbcbb87bd09dce7fa36956c5a"],["/tags/UTF-8/index.html","1ad758eb35986fd49b6c254727747b50"],["/tags/VSCode/index.html","965fb0c37a892a0287effc9e2137c5c8"],["/tags/blacklist/index.html","63385b05072c1abf18fa1917a72a12ba"],["/tags/blog/index.html","b011e7ba75dc1f79a79b7e31906a4562"],["/tags/builtin/index.html","7bbdfff44e74073bc77e6417023cf556"],["/tags/cloudflare/index.html","9323c51ec3af143b01a28501fe1eeeca"],["/tags/giscus/index.html","5b3eb59e10af15ab93cc059ad115aedf"],["/tags/gitalk/index.html","c54745a042e297fc795b34a86a6b8700"],["/tags/index.html","7912e2e39d63939ebdf9606e85a87f8a"],["/tags/tools/index.html","734ed3aad181bb612961d2cd0e55e227"],["/tags/utteranc/index.html","6491aca63f5ee6d606cd5d453537296e"],["/tags/vue/index.html","a89c998bedd92e123e716ab117718875"],["/tags/web/index.html","d6fd84fbde568274cd93229649c339d0"],["/tags/乱码/index.html","c5ae35739e0547f8cd465c91d7bbaa0f"],["/tags/二分套二分/index.html","ed7b8138c5a988474ba4c98f2f7f148a"],["/tags/云计算/index.html","d4d12baf73c3d6946b1f996b81239933"],["/tags/仓库管理/index.html","15aa6d5b3b2bfcb1320cb47033db5b53"],["/tags/信息分析/index.html","8b403431242975ffbacc73a2f8744dd9"],["/tags/划水/index.html","1cd98cb46a7cfe6f5f1e9c4b6d1b933d"],["/tags/包管理器/index.html","08bc20953bbb4b1df1706ccac13bb487"],["/tags/图论/index.html","6fbfe0fb884a70d96ea8bbc766184843"],["/tags/字符集/index.html","e7d187ff31791a563adebfb278131a96"],["/tags/应用/index.html","0ab723caa2a4b8cf0f64e760473623a7"],["/tags/开源/index.html","523c19c4a79144e5f10bb6ede7dc291e"],["/tags/开源情报/index.html","b21b75c70569c0410a3d2ed84799032c"],["/tags/悦读/index.html","bf4c3639165a1390520c36a56bb94610"],["/tags/技术总结/index.html","c5bafa7cf84f2b9844090144b40b3e41"],["/tags/操作系统/index.html","5ab8625aebf36a77cfc5e5955cb6be2b"],["/tags/数据合规/index.html","2f0b4f78cf6da4650ecec9513dbcf1d2"],["/tags/数据结构/index.html","25e8970c77e2a3a518860cfb847e3dc2"],["/tags/数据结构与算法/index.html","9d322f0171e414f5fb401d922955b183"],["/tags/新年/index.html","4789478187c2277acdb6abe798458804"],["/tags/服务器运维/index.html","707d29dc38b23ec0f6feda7593be1f3d"],["/tags/杂谈/index.html","9f6b465d41c0838852dc93e753d7edc8"],["/tags/笔记/index.html","035bbfc0d0940cadf38dd495fd6a972a"],["/tags/算法/index.html","4cc6f10b19b14c4f37da0084ef11c554"],["/tags/线段树/index.html","71e3a345eadf2ef930d7012af3e901e0"],["/tags/编码/index.html","276f4411423595d05a4027403e64ea5d"],["/tags/编程技巧/index.html","f8acb80d5da386961610e5f16651bf58"],["/tags/网络安全/index.html","4df7414d6c92599063a6568f5022238e"],["/tags/网络流/index.html","31289775ed81731fb4443440f1aa64aa"],["/tags/职业发展/index.html","9ff76bbed3564dffbc8bbd8f1b7ca263"],["/tags/萌新/index.html","513e8910f60c86c8ced5f1b9d54f181c"],["/tags/计算几何/index.html","795e87c7887e3a59f1a6a7b14eda9f86"],["/tags/计算机组成原理/index.html","afec37b942a5d54e3d83c82422c1c60c"],["/tags/计算机网络/index.html","6fe3e4e5a5da02dc889b22624282ba0f"],["/tags/课程/index.html","7b4c60dbb134d045b07baee306a30300"],["/tags/软件/index.html","c6ad467bb364f42530e271fd89b168ef"],["/tags/输出流/index.html","c9825ebe61fb9fc12c73a34a57f66da0"],["/tags/镜像源/index.html","485bbd68ce55cbb6ad1c33fe38b8a0ed"],["/tags/随机增量法/index.html","caba26eefb3feb5d10f76e2904822ba3"],["/tags/隐私伦理/index.html","ac9b67e6afc096aeecf08d52bef5cb27"],["/tags/题解/index.html","d614b2570e432fc5ba2e38671a90ae4b"],["/theme-sakura/index.html","e12cb54165303530335eca5dc98b98e7"],["/video/index.html","0ce3d0ec13a94e0a5684ee6bc6b44d32"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
