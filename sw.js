/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","dbecf822ec618fd3345f7e6e3db60c4d"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","62f8df69d21fc20b50b7f909ec9227d3"],["/2023/02/06/C语言链表/index.html","43d0203920dd9d13dbb7de05b420b2c1"],["/2023/02/06/书籍资源/index.html","54ddc5a82bf97026eef071d387ca28c9"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","4f32eeae2272a03f975891e9cbbd9c2a"],["/2023/02/07/为水而水（笑/index.html","36916608f6ce8e17b0993c8e2dc1137a"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","3e4bb5883a7c77f5d25fe1ad3fdead27"],["/2023/03/09/Web前端笔记-Emmet/index.html","1172f8f42b54fba6a4d077f76b95c401"],["/2023/03/23/gitalk-评论/index.html","ccaddcb668f52594c73f9965b5fc3344"],["/2023/04/10/用C语言实现字符串全排列/index.html","6a6ac950212a7e1d59359b3b54ce3fa7"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","d6fd5c0695e0a54d5f63a0a0b85dc87c"],["/2023/05/15/C语言基础排序-demo/index.html","b7240954f0d5d291c0500795a51ab407"],["/2023/06/14/闲着没事干/index.html","6535dd8eb95d72cb138cf193c52b9ca4"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","85250587106685122243f065179ac12c"],["/2023/08/01/javase-note/index.html","805d3b4079425a6a6cd341744b3157e3"],["/2023/09/14/vue-pure-admin/index.html","ef68f87764f88312d5f6ec95a53ec3e8"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","163082198a5c91c088742d2839a164d8"],["/2023/11/28/C-CPP-the-memset-function/index.html","e96b4bc6474eedc9d664ada9db9721f0"],["/2023/12/13/javaSwing-DynamicClock/index.html","32475033a2a327c6ff0d32f73c8965c8"],["/2024/01/24/builtin-系列函数/index.html","4af649be99b1822babd903d011d0d7f9"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","4630ba347872cc4bf901dc2dee5bc125"],["/2024/02/09/新年快乐/index.html","e3e8e3e8acc0032a7303e732494d4114"],["/2024/03/26/408-route/index.html","5c9611dbccaa7963b4378014a57733eb"],["/2024/04/07/转载-线段树专题-xyw813/index.html","ab41360c9e0d99424301bc59fb4026fa"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","8146f77938dca801f3d6c15078ccc95d"],["/2024/05/06/cloudflare-display-issue/index.html","46b40b0f144793c9d51e566873a88145"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","74a0f99e40cf1d61e3bb86e5aa0a513e"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","ab1dac3dbb9d7fb2181815679ec27049"],["/2024/06/25/open-source-LinuxMirrors/index.html","ee9aa8f0b45fb3a487fb53da9434fc58"],["/2024/09/02/Dinic-算法/index.html","3a6740a89fe5111e2d31fdb164cdd9be"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","45cd3d6327f180ad461db11e1944f89f"],["/2024/10/11/常用STL算法库/index.html","0fe9a128ae56f9d27191cecb2480f8bc"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","a2079893e5dd64a994f94562533ed6a4"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","568ad01fbb537f6d4643932b8d75d81b"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","c1d808f97efc53fd5223dc0af5c8d9b4"],["/2024/12/17/Where-are-those-algorithms/index.html","dd3a1a778bd0b3715e72badde0fc24c2"],["/2024/12/26/重构评论系统/index.html","051229db4270e1a6c5501f3480ec6250"],["/2025/01/01/blacklist/index.html","c677b710a9cdf0d96a1f683eefbd124e"],["/2025/03/15/GitHub-Skills/index.html","fdc1c5f925e1701ace8ce3d0a22c67ab"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","642fc964a56bfe955b2bd4734a2efd9d"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","aa2b148630a9f6d71a54db1f0d280298"],["/2025/08/23/github-special-files-guide/index.html","e7a462a3419bb30758358fc307416287"],["/404.html","7b7c2b12ef5e2b95eda92262d85e6cd6"],["/about/index.html","7fa4ad9668ba7940e4b401c161655405"],["/archives/2023/02/index.html","a635a3e810ae27451031062268b9e298"],["/archives/2023/03/index.html","f2d84dbb90e2a2d89b3946b6c48c8b3b"],["/archives/2023/04/index.html","ba640786b8f01ba2860d5feb5014716e"],["/archives/2023/05/index.html","7ad47f53a58087bc9b4a8356ed06d8f8"],["/archives/2023/06/index.html","8629906729570b9b396f7ff5c0092f15"],["/archives/2023/08/index.html","ef360c00bc5935614b3eec008b2eab7b"],["/archives/2023/09/index.html","58f267d08d5d6ded405cb196fa7b23c3"],["/archives/2023/10/index.html","0e4e22ce9890154a50895527ddb3c3c1"],["/archives/2023/11/index.html","5216708cd9c18591204c7c643d0efe4e"],["/archives/2023/12/index.html","4f5806d0fd7479aaa1942e72f58d9a92"],["/archives/2023/index.html","a34bc5cef364777579768888e07720c5"],["/archives/2023/page/2/index.html","a34bc5cef364777579768888e07720c5"],["/archives/2024/01/index.html","3ebc15c97619fdc20657ffb7567e1c58"],["/archives/2024/02/index.html","dc05c35f5f51b5b85475d255e2ebad36"],["/archives/2024/03/index.html","53e8a90489edc1f00c7c4fb946116661"],["/archives/2024/04/index.html","9bb613609401cf827103ca344857354a"],["/archives/2024/05/index.html","6c09fd66355de28bb5d74f295249c36c"],["/archives/2024/06/index.html","442372027c2400f38d7d10d878c968ac"],["/archives/2024/09/index.html","60c4319a56371db2fcdf40c1f260fc4a"],["/archives/2024/10/index.html","6432eeff0a20b4262f727f578b9d17da"],["/archives/2024/11/index.html","75e4b128709abe2bed6c7478c722d0e8"],["/archives/2024/12/index.html","8df2b63c4997b143c9e89fc2406aab8d"],["/archives/2024/index.html","d9d61cffb8adeaaaa9de773bd54eaee7"],["/archives/2024/page/2/index.html","d9d61cffb8adeaaaa9de773bd54eaee7"],["/archives/2025/01/index.html","0eb30f4a4b692d82f79cb6bb1c4ce844"],["/archives/2025/03/index.html","77ee17261371174c1667121e14b736d2"],["/archives/2025/04/index.html","ac95541670e7332b168a7e0fdbeb9dca"],["/archives/2025/08/index.html","d54645f26a7d3086be8922534b43e1d4"],["/archives/2025/index.html","86f3c259311280bb388d2d9b43598530"],["/archives/index.html","eb4715d60102ccc648e7aad292890531"],["/archives/page/2/index.html","eb4715d60102ccc648e7aad292890531"],["/archives/page/3/index.html","eb4715d60102ccc648e7aad292890531"],["/archives/page/4/index.html","eb4715d60102ccc648e7aad292890531"],["/archives/page/5/index.html","eb4715d60102ccc648e7aad292890531"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-1SOvC6lkkF.html","2d284f3bc0fc650c7f7c964089cacc28"],["/bangumi/index.html","6c884449b5fab92b9d5cae9649e8ec33"],["/bangumis/index.html","deb363986de2d1110df0c075085d952e"],["/categories/技术/index.html","eec7455fd2c1b5838e7d6f85e4cfad2c"],["/categories/技术/page/2/index.html","60a3d1bc48ed22f21b35146da3220a21"],["/categories/技术/page/3/index.html","85a47027e94d0a15c4aa37310fc14e7d"],["/categories/资源/index.html","ee851ff1513bc1b37bd6606995535068"],["/categories/转载/index.html","dc9913593642adf8cb4d4e7d4dfbb327"],["/categories/随想/index.html","82904e5caefe0df22f59b4fc23fcf509"],["/comment/index.html","b63f958289845ed7978eb386d934c333"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","6b47a6e78a5a9efd86b0f3e7d8e6b39b"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","61ba97fd37f5a81a525c642a2ee194a4"],["/index.html","527d45da00b24f42d27600974c2f75fb"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","f8cec03951c058ff0f819329811c316c"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","f1afa64bc2698ed86b55ab396a0c7ac3"],["/js/sakura-app.min.js","115ca9549a404cd11acd81cd31abe374"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","29007a235330279921b40783f3752c1c"],["/js/wrapImage.min.js","fa46e73ad4d52096338f455d716a71a2"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","bc252f4afc73fece4dd71a20d7e7c06b"],["/links/index.html","9a71bc3f481a2175b006d332e836b428"],["/music/index.html","e33a7d1efe901534108617a2ecf56498"],["/page/2/index.html","416e33523810da7ad4517997d919af74"],["/page/3/index.html","b4808fdc514af7a24eec8e02694283c1"],["/page/4/index.html","46cf36f6534fadc5aa660c04c915d260"],["/page/5/index.html","867ef6f13584ad4f93897a5f1c5d39ad"],["/rss/index.html","2dd8783234169e4bc148da07ce08f7f7"],["/sw-register.js","3df967d0155de59dd1068de8fb428383"],["/tags/408/index.html","56857e7ab9bcae9484c25019196b2e39"],["/tags/C-C/index.html","ee9bfe354e7cb2fce5edfeee4d7979ee"],["/tags/C-CPP/index.html","62d53c025bde8c01bff12893c6936b76"],["/tags/C/index.html","234327c47b20957adf3b11f7142c7ae5"],["/tags/CONTRIBUTING/index.html","3499d20e6efc5aa4377e79063af17475"],["/tags/CPP/index.html","1576e58da906e34f1234d6ccadc5c951"],["/tags/CSS/index.html","c0bbe5a82a46ed9c68fff295b129cbf6"],["/tags/CodeForces/index.html","267e68d18773d1930eef49448215fefa"],["/tags/Color/index.html","f83cd67f66519e4a4a34b89e06ffcd73"],["/tags/Comment/index.html","95ff40aeaf123d1158c7ce11dddf3748"],["/tags/C语言/index.html","754c434dd0f535fce2869a5eaa1ce180"],["/tags/Dinic/index.html","193c06929af93573a5e8910f89b52455"],["/tags/Div2/index.html","4e320f4d90822bc9906d60b81aece5e6"],["/tags/Div3/index.html","62b82293497ebf389478f18fd1d2aa40"],["/tags/GitHub-Actions/index.html","d9674ad9f355ff6fce3687d60a345113"],["/tags/GitHub/index.html","7c41b6052bd8be911ba20d65c4cf0f17"],["/tags/Gradle/index.html","e05e8b4d21d6ea70aff7f2241a57ea5a"],["/tags/JDK/index.html","c90ae62da9772e207ec3c1f1fce4ec84"],["/tags/Java/index.html","270685bd66192e6072761e531706f770"],["/tags/JavaScript/index.html","327c15cb9be26a62a8f5eaf16921ebe5"],["/tags/LICENSE/index.html","aaba98620e0c71e5a5b6799b8f0db866"],["/tags/LeetCode/index.html","2d83223fa76fa088ff342ea791818dac"],["/tags/Linux/index.html","11c36ba02cd58a60d509cad4f65e8e4e"],["/tags/Lombok/index.html","679b1bcc330f99af4b5e308b292ab6ad"],["/tags/MSYS2/index.html","992f7488a0d7421f76825ad4b7757ec3"],["/tags/Note/index.html","f4bf734ed1d9b3f5cec1db89e2922834"],["/tags/PrintStream/index.html","35fc8751f1138df96c40a830699b8178"],["/tags/README/index.html","2a77b895f88939a5bc9520facc324b5e"],["/tags/Rocket-Loader/index.html","f2d5d1e08ea805e5e1e6e086e84b79bc"],["/tags/STL/index.html","c2632e8559ab7ef3917ff19feb97f4d8"],["/tags/Scoop/index.html","e794052a5ea2f36bd78599b956910829"],["/tags/Swing/index.html","712748a3e9b0a35b298530991c0f7762"],["/tags/Tomcat/index.html","09d35d05410e684e01c9b6da882c95e7"],["/tags/UTF-8/index.html","fa71808caa5ab9d543e5175ec2399931"],["/tags/VSCode/index.html","b944c6464a4af24ed3e2cbcc53db28bd"],["/tags/blacklist/index.html","6d4ef249b6bb8e0ecbd0ca4efe615948"],["/tags/blog/index.html","6d7642b03423f3d399a4409bea3b0594"],["/tags/builtin/index.html","e2ace8c19c5b4fc965b11ffebead4484"],["/tags/cloudflare/index.html","922c4787c4a83478b00efad919ef94d2"],["/tags/giscus/index.html","2c361aabd3ce3ce8d553a199ad116464"],["/tags/gitalk/index.html","c7675588454daed0e124b3d890e39f4b"],["/tags/index.html","5b87feb683757678337da790838ff326"],["/tags/tools/index.html","e928e0e252e34f6a62198ba068d53ba7"],["/tags/utteranc/index.html","3b60f2070eae22527e26b9aea370e719"],["/tags/vue/index.html","f58649d80b9d7f941829807463028925"],["/tags/web/index.html","846c13c08d2458a3e796f0baffe8b54c"],["/tags/乱码/index.html","dfdaf44374dd8d974de0b789fcf6d707"],["/tags/二分套二分/index.html","39ca3b81aafcdd14e2ec84ef6c7236f8"],["/tags/仓库管理/index.html","59b7282fa672655b32e5f1e28744c85f"],["/tags/划水/index.html","82436d2b9f131895f478cbab7f3796ee"],["/tags/包管理器/index.html","f8d0daf137b2606582800d570618b6dc"],["/tags/图论/index.html","6b2a78e932a3a8a27be0b2023f9fb4dd"],["/tags/字符集/index.html","13f3d2a9a29d3c884e24e123ee4bb845"],["/tags/应用/index.html","3ea1b10fe00fc2efa465b4ef3b61581a"],["/tags/开源/index.html","fcf819e156df96959a631becfdc28b61"],["/tags/悦读/index.html","d480bb73b7a2eeb4099f46a303dc4bab"],["/tags/操作系统/index.html","001742614ec96be90588b64c5fca6425"],["/tags/数据结构/index.html","7c3a4b782dac01d6844ed9a9e6289a0e"],["/tags/数据结构与算法/index.html","089ee28dd0efaaf846a4c30cf3e8ae4f"],["/tags/新年/index.html","8effc9b34576f3c785ec6db9df3e8c3d"],["/tags/杂谈/index.html","0b94edef15d5f5be1852799942cf74f7"],["/tags/笔记/index.html","a30df6084c3f6fefa7737f3b7e137375"],["/tags/算法/index.html","97226370cc8c6a48c03ea14702be64a0"],["/tags/线段树/index.html","90a27e14c9b854b2370091df622f673c"],["/tags/编码/index.html","4b72fb4e9e205d7325ecb7b6df1c88cf"],["/tags/编程技巧/index.html","0412b0dfbc5db020804f7239dda88df6"],["/tags/网络流/index.html","6cba13985390bc4717b8ee2fa5f2a298"],["/tags/萌新/index.html","cb626dc7e9791c701b9316d61b886e02"],["/tags/计算几何/index.html","7fa74929290a6d5c549e93c337b9c2d6"],["/tags/计算机组成原理/index.html","aa301157534ac10d1e110bf644dc79f1"],["/tags/计算机网络/index.html","40fab334f0fc02a7612dfe58d49c93a1"],["/tags/课程/index.html","552a95f076195b27a74e4b6b196a000a"],["/tags/软件/index.html","8a5fa12eded195c3a71a9138641f945c"],["/tags/输出流/index.html","3de03443ff14a10d8b9ec1af7a880ba4"],["/tags/镜像源/index.html","ad47c289257dd92b1650ae85cef28981"],["/tags/随机增量法/index.html","3e250c67e46448d95c22cd6bab434afa"],["/tags/题解/index.html","cc21bc28c43feeccfd075fa61b042cca"],["/theme-sakura/index.html","ca9dbdee5a2c36ffba9db79db491ccbc"],["/video/index.html","8fce0e5b1513e10564f5aae9027bf813"],["/warn.html","ddf5cf958a09188ea0639e38ff3250af"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
