/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/05/My-first-blog/index.html","905ec5cb697337e51975f5486eb0e0e6"],["/2023/02/05/sublime-text-3-运行-运行java＜控制台＞/index.html","a1cb444f0af2207245cde8dacdb6c37b"],["/2023/02/06/C语言链表/index.html","8dec8425b58d9e8f1b9fac00c882ac82"],["/2023/02/06/书籍资源/index.html","6190a5d6f68644cfe58118d7e30b2149"],["/2023/02/06/力扣新手村题412-Fizz-Buzz-C语言/index.html","04b24770df6e35256a3ab749cbbeb582"],["/2023/02/07/为水而水（笑/index.html","dd3afb7d4a6cc78dd87f7f2468f31646"],["/2023/03/08/《Python编程：从入门到实践（第2版）》/index.html","51fefd87006686d7f7e40ceaccc7baf5"],["/2023/03/09/Web前端笔记-Emmet/index.html","09fe8d0119df7139b706d29da62a1556"],["/2023/03/23/gitalk-评论/index.html","5e1dd6b73252c172cf92c95fb4cb972d"],["/2023/04/10/用C语言实现字符串全排列/index.html","f7a59e1df45d90a207f2f998bdf63707"],["/2023/05/12/Windows系统安装使用Scoop包管理器/index.html","30161743d10c3e1a390756ab6c21ed5e"],["/2023/05/15/C语言基础排序-demo/index.html","b32760b5d16d18eeddeef63bb121acd6"],["/2023/06/14/闲着没事干/index.html","82d3db1a4220a2dd413e19ad7e876caf"],["/2023/06/25/力扣1401-圆和矩形是否有重叠/index.html","e79e37bd3d387c9e47b31e5d5ce21dea"],["/2023/08/01/javase-note/index.html","e6ca654410cc621d64efaf170ee107e5"],["/2023/09/14/vue-pure-admin/index.html","d3208f0162d122228a51308f04b85b6c"],["/2023/10/04/Sorting-algorithm-speed-measurement/index.html","0992fdee2a64869c12c3b9cce0f2b9dd"],["/2023/11/28/C-CPP-the-memset-function/index.html","d61455ed56b02b96f66c0e89543800b1"],["/2023/12/13/javaSwing-DynamicClock/index.html","40a7d644eba044efd4196ad7772815a5"],["/2024/01/24/builtin-系列函数/index.html","bdf4416d6e89096649110c722d7a5b34"],["/2024/01/24/文章推荐-C-CPP-环境搭建攻略/index.html","0a08504a9908316a3cdf306987460ca2"],["/2024/02/09/新年快乐/index.html","a06805e289d26219634f4d0dc926f01b"],["/2024/04/07/转载-线段树专题-xyw813/index.html","98ea23666575489f38b2972813cc8434"],["/2024/04/30/关于tomcat在idea上的中文编码问题/index.html","f321ccde9ceb01d7a689762c15cab6d1"],["/2024/05/06/cloudflare-display-issue/index.html","0947d2af299c627f79fd48ab6a17fd5a"],["/2024/05/09/to-decide-font-color-in-white-or-black-depending-on-background-color/index.html","b41846fb193c98f34311f95e3eb6dce4"],["/2024/06/18/POI2011-WYK-Plot-Solved/index.html","eecde01f328f26ba012aca144f16c65d"],["/2024/06/25/open-source-LinuxMirrors/index.html","3c51d8c7cbb7d5272c13ceab5924b46a"],["/2024/09/02/Dinic-算法/index.html","94f30515257f39b2a8d56a4c296ebf50"],["/2024/10/08/黑题记录-2D-Geometry-110-in-1/index.html","37e74fc112c7ad25f518d556d8427825"],["/2024/10/11/常用STL算法库/index.html","1a62d54b23a7aa600da8cb2e9bdeb98f"],["/2024/11/28/在-Java-中设置输出流的字符集/index.html","f512a6df29305ffd6f1cab03bc62b335"],["/2024/12/05/JDK-18-以上使用标准输出流中文输出乱码问题/index.html","59e037cae06138544b64b644e8934d7f"],["/2024/12/09/Codeforces-Round-992-Div-2-解题报告/index.html","dc8ab1fee96d519e481812083fbe81c2"],["/2024/12/17/Where-are-those-algorithms/index.html","aa1c12d70903166e5c5120d7348b8e5f"],["/2024/12/26/重构评论系统/index.html","5d101b60c8484845da479aece19780c8"],["/2025/01/01/blacklist/index.html","574f6da5385a5c0dcb6768028e46b06f"],["/2025/03/15/GitHub-Skills/index.html","fd7a763626d17a97b34bce475f45ef47"],["/2025/03/16/lombok与delombok-在gradle上的配置方法/index.html","072e14148754a6407d04719f896b7c96"],["/2025/04/09/Codeforces-Round-1016-Div-3-解题报告/index.html","7e84d8d6a5054a64a7d33264700fdb45"],["/2025/08/23/github-special-files-guide/index.html","d08514c75a8a6b5e26afef0d3cbeb6c7"],["/2025/09/28/408-route/index.html","92f3ecbc3c4ba3889b9e6c690150e41e"],["/2025/10/14/rvo/index.html","beb3926878272b439ca0cc529b06969a"],["/2025/11/13/What-is-OSINT/index.html","e021e0aac9c604538382a14f9d9a91b5"],["/2025/11/20/DDoS-and-CC/index.html","f349fb74a92cfc3c4fb19f798001c2aa"],["/2026/01/02/2025-summary/index.html","8c9da9edc7a3e52cb22a862f5fbdc98a"],["/2026/07/26/reincarnation/index.html","2d1e22826557a65f945eaf10bf39fdcd"],["/404.html","edd5f4c87db88fbfd6dfed4ff9b11f64"],["/about/index.html","b3978496d0fff2794a2128105c76b396"],["/archives/2023/02/index.html","86fb8a74f98a6ae568fc52705693cb09"],["/archives/2023/03/index.html","3c4120dd9987384e41281d16e77f39d6"],["/archives/2023/04/index.html","790b2fc2ed4faaee3d02eaa27ed84a9c"],["/archives/2023/05/index.html","2db24f103cd7f30d3bbd00eb56cd2e6a"],["/archives/2023/06/index.html","62812abe0faaa7f8198ac0ce6d1df8a6"],["/archives/2023/08/index.html","81717abce0500f83cfebd3c36347ca12"],["/archives/2023/09/index.html","830a80782ca4647f48691fa35c04ddba"],["/archives/2023/10/index.html","9348a3e7e078dd5c8ebcd1bb2565f60c"],["/archives/2023/11/index.html","cff65cdb773bc01d22973d30f7bc2b8f"],["/archives/2023/12/index.html","397b9ceb9ced84f6f76dfb6cc79d273d"],["/archives/2023/index.html","2413da7d629975cdd1d05fceb2a010dd"],["/archives/2023/page/2/index.html","2413da7d629975cdd1d05fceb2a010dd"],["/archives/2024/01/index.html","e6fac1b94a15afb0cf5096d213e75edb"],["/archives/2024/02/index.html","e103fb0f315972de6cd79e86280010a5"],["/archives/2024/04/index.html","d7936d74558f3c9f2a74de74ad5d5c4c"],["/archives/2024/05/index.html","a5e6284a14741e0cb6599e64ada86fda"],["/archives/2024/06/index.html","095d7618912d790d2be93bf70b9cf889"],["/archives/2024/09/index.html","dcd41bc9fc7a7d28dc3b6067bae9de85"],["/archives/2024/10/index.html","bff6de2805bde937ce1521e78a0c504a"],["/archives/2024/11/index.html","37ad9a6037d7c7ecf92ea488182234b5"],["/archives/2024/12/index.html","0b52a6cce93c45a90ee9e40f45292101"],["/archives/2024/index.html","caa6f63bdc2f6aab6a5062ce7afe697c"],["/archives/2024/page/2/index.html","caa6f63bdc2f6aab6a5062ce7afe697c"],["/archives/2025/01/index.html","ed689a314fa2cf233156eb00c9e6df53"],["/archives/2025/03/index.html","764d029fa0a0e5bc9ffa054f1773cf06"],["/archives/2025/04/index.html","dc5ffd170c34e018836b27d91a355714"],["/archives/2025/08/index.html","c9ac127ca6dd493eefdab12e441a3442"],["/archives/2025/09/index.html","83a7495f74f6285ae0791ea459bfd358"],["/archives/2025/10/index.html","1c6ca86f038cc3f7c843160ae2492921"],["/archives/2025/11/index.html","9b6bc88afe49f70104c8d36fbf114060"],["/archives/2025/index.html","5b4fefd84f61d2be8fb3ac827fe82aa1"],["/archives/2026/01/index.html","1bdc8e38b9b1a92d5270af8f2edb0030"],["/archives/2026/07/index.html","dc78e536d7bcf4f8f387f4e45c305ea7"],["/archives/2026/index.html","b42fc25c7ca78350867f12884afc3b8b"],["/archives/index.html","85b14e847c25b8d6d80168e0a6abdf24"],["/archives/page/2/index.html","85b14e847c25b8d6d80168e0a6abdf24"],["/archives/page/3/index.html","85b14e847c25b8d6d80168e0a6abdf24"],["/archives/page/4/index.html","85b14e847c25b8d6d80168e0a6abdf24"],["/archives/page/5/index.html","85b14e847c25b8d6d80168e0a6abdf24"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_codeva-FUXEtNSWPD.html","3e2eec0e5d15b2bea8faa7656ae0facf"],["/bangumi/index.html","742a013dd11f65e3a81ff02dde75f69d"],["/bangumis/index.html","6d3910bab0572ed6ea226c0c1a095223"],["/categories/技术/index.html","adf5c17cb4add7982849fdc866c5c704"],["/categories/技术/page/2/index.html","a522831687502c1b46d070f35f3b9e70"],["/categories/技术/page/3/index.html","6461c6a0f35dc4f6c92a3a43c484f477"],["/categories/技术/page/4/index.html","6308b6089d5484bcddb5abfde3e55bba"],["/categories/资源/index.html","61a4df1b397dda1b5775703a4da161dc"],["/categories/转载/index.html","ded73ca7b55a7aa0eab521773ee4a4d8"],["/categories/随想/index.html","173e11489f71baf43024848e1c009dda"],["/comment/index.html","9a270873f35cc85a9a74e4331a5b5a31"],["/css/APlayer.min.css","f5730f0da86ec174b764ab05e1733b83"],["/css/bangumi.css","c652b32174ff54cf044bcd46519007a3"],["/css/donate.css","c2883e5480a072be94a437024dec55e9"],["/css/font.css","07eb48b7670c2da8ef6127b7ec6943c3"],["/css/giscus.min.css","96c42b2029f44095aaf46f6dc0628ded"],["/css/insight.css","6f093040383f8c9bd73189600550c8fc"],["/css/jquery.fancybox.min.css","71cebc0cd666f182f1ab1dbe4a9f15c1"],["/css/lib.min.css","d994fb64b9a515c2bc723079a73b67e6"],["/css/sharejs.css","56623267de3e2f1d9fade2f5b0848044"],["/css/style.css","73bb864d038d4bb3d83361b8910786bb"],["/css/style.min.css","45b4cf23f077e45f4776fb3f47a7cdd6"],["/css/tags.css","eba03aebbf2f44113682d0ca1e19fcbb"],["/css/zoom.css","b4d65c607f798dc8e39d094e8af47684"],["/donate/index.html","d9f1aa978e63fa5446447f112f91af32"],["/fonts/SAKURASO.old/icon.css","ace51599b410f0a2aeb245c0e9b7ee53"],["/fonts/SAKURASO.old/sakuraso-symbol.svg","54c980882f96dec7061647ee30537805"],["/fonts/SAKURASO.old/sakuraso.eot","79eae38d0e58db052ef6ba585519829e"],["/fonts/SAKURASO.old/sakuraso.svg","e41b8574dfc5156adaa4dd7dab1f50c2"],["/fonts/SAKURASO.old/sakuraso.ttf","002d706815e3b8e6d14f0bbfff5c4579"],["/fonts/SAKURASO.old/sakuraso.woff","d93b41c816432c7cfa2aa55ab07b3c8e"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/iconfont.eot","b408ae02f9bf10f6f3113af91cbf8eaa"],["/fonts/iconfont.svg","84a843e0a2befaf80c389a333385c63b"],["/fonts/iconfont.ttf","0a2c771c2f9ef9ed58cf83218d2e9aa5"],["/fonts/iconfont.woff","f052fc9e9077c407ee6e934d968b3b03"],["/images/donate/AliPayQR.jpg","0dee19187a54e54ee073efcbb5096a9e"],["/images/donate/BTCQR.png","3d0a570e222ebb1fc9e0ee919dd92521"],["/images/donate/WeChanQR.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/WeChanSQ.jpg","dfdd870a362680af641485fd6a87e49a"],["/images/donate/alipay.svg","8701cc6229ab9a0b625126cdc1838777"],["/images/donate/bitcoin.svg","5f3e55319a544aa673325ebc043af11c"],["/images/donate/buymeacoffee.svg","b8000c1eaa3fe191b34fcc6314d259f9"],["/images/donate/coffee.svg","97b8ecfdccc35cde171d265ab39361ac"],["/images/donate/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/images/donate/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/images/donate/paypal.svg","0614c8ec69152b15a48a6508c9ab7373"],["/images/donate/wechat.svg","702bca7befb1db3ac5dace5bb9912188"],["/images/index.html","4923cd1756a19d5a59f3844dd169a794"],["/index.html","1c52ebf274463e98ba72d411e8819ee0"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/InsightSearch.js","9a88efd8b32106d4f9f7f7f38d753451"],["/js/botui.js","5132d9c9a907e42c82f678b7b58a7552"],["/js/hititle.js","1ef40c94620b06c00a4827704c1a2f46"],["/js/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/js/lib.js","65f02458a8e38579dac5594f252bd66f"],["/js/lib.min.js","05e368c48c3d970bbc97cc6b0634efd3"],["/js/sakura-app.js","202c751aef91535fd84ba360224674d1"],["/js/sakura-app.min.js","b0060bc00f258957442c264d7f0450ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","c757e76be80d1da11f5c02c68665312c"],["/js/wrapImage.js","4b4646b7e9ebf8781487aa57053fb59c"],["/js/wrapImage.min.js","f366dcba793c09c735153652842d92e6"],["/js/zoom.min.js","c45196d911ee4c2cf919cce50ebd0330"],["/lab/index.html","7b566faf16e6b157d99a7894b8405f6f"],["/links/index.html","069a002cf7ce3d1d4aadb1f704a724fc"],["/music/index.html","77fb4c06aacb68ac74a2a9c2e53fd52b"],["/page/2/index.html","d8a9d418e90a04dc089aa2ab5e1d3cfd"],["/page/3/index.html","c02515ec752ff5fdf7770539caab413b"],["/page/4/index.html","a520da8fc3dd58fd43b22dd5c98b502a"],["/page/5/index.html","9c863413a131c1037043a016d4d051c9"],["/rss/index.html","13bfddbc75476339cb9d358f0a4ea85b"],["/sw-register.js","e9f7a263ffbe9a2d8cff8be35d3b4d61"],["/tags/408/index.html","e429fa9b6e1990468dcff7be89f5c74b"],["/tags/C-C/index.html","86ff32bc786fcf08449583872aa711d3"],["/tags/C-CPP/index.html","404186c28f33d23c8172470c7d4640cc"],["/tags/C/index.html","1e37ef1a7ab239330265f449141e59f2"],["/tags/CC攻击/index.html","46beebd10044b9ce9669710b96af6fab"],["/tags/CONTRIBUTING/index.html","9062958b01d04b3e63945319abdc9bd8"],["/tags/CPP/index.html","19311a96217a6b5e9ac9781d87267f86"],["/tags/CSS/index.html","75b6cc256581c3e4d56742a9ae489116"],["/tags/CodeForces/index.html","04171a0e1b666ca6494212d40459763d"],["/tags/Color/index.html","08d36afb425eeb4afd7a8c9c346b70bf"],["/tags/Comment/index.html","ac1d10f1ae9c5a130b715dfefa78096e"],["/tags/C语言/index.html","23951bf302f8a3470cd35ec41557fde6"],["/tags/DDoS/index.html","2a79c9df1a7a1c6abb271a2513715c88"],["/tags/Dinic/index.html","19c92861c6ac63847368e39cd1678ec9"],["/tags/Div2/index.html","cb5ef18311a3972abc7bd3d516c9b765"],["/tags/Div3/index.html","604bc19f0b8c3fe5199610df0991d032"],["/tags/GitHub-Actions/index.html","3567a78e906bbd55326ba69e48e31a8e"],["/tags/GitHub/index.html","80f6bd3cc54a7b455e4fef7c940dc801"],["/tags/Gradle/index.html","ec1ec544ba08e9e0060b5946d038084a"],["/tags/JDK/index.html","403a4a4760743a21b0ac87c6e0d935ec"],["/tags/Java/index.html","c8602f472ffd8468bf0d75b38206201b"],["/tags/JavaScript/index.html","fe00b7b50eac71bdcabe53feeca150b2"],["/tags/LICENSE/index.html","f151be9348386957aad80f87131f4703"],["/tags/LeetCode/index.html","67cd72f318d08ba888ceef765efe3d10"],["/tags/Linux/index.html","98b26056f30508f88ac18ec6151d49d1"],["/tags/Lombok/index.html","125ef2f4785e636c12f928146e001463"],["/tags/MSYS2/index.html","22c79b54e4434d30508a73ea578d1fdb"],["/tags/NoneBot/index.html","d9f2cb1ed0bc771dc381401e4f4331e8"],["/tags/Note/index.html","27ad7b2ea898d8b57416e1d454c42f40"],["/tags/OSINT/index.html","c2b81840a58d785efc4a1028bc1a991a"],["/tags/PrintStream/index.html","2967887435cdb8355f65dae1573fbb96"],["/tags/Python/index.html","68d03fe3ed0bf853cc6889664c4f2690"],["/tags/README/index.html","804f7eafa9ec1e19f97b200a39293149"],["/tags/RVO/index.html","2d08c321d74b7b62e55022528c6068d1"],["/tags/Rocket-Loader/index.html","3687fc004f8fd935c4d252a824257c5d"],["/tags/STL/index.html","8dfaa0ae26f7e7c9f34143f28aad287d"],["/tags/Scoop/index.html","7177911d5c723405bebd0b8df7bc312a"],["/tags/Swing/index.html","7935ce6a7bf3bbac8d9d1fde9e1df209"],["/tags/Tomcat/index.html","32e503dcbc877eebb3647da4ac325b9e"],["/tags/UTF-8/index.html","d120910ad15dce4d141c9064d13511ce"],["/tags/VSCode/index.html","25df38181fdf721182efd36aceb176a9"],["/tags/blacklist/index.html","128bbbab6ed22b1febdb46c3d7ecf6f9"],["/tags/blog/index.html","09bf01eab29a66419aefdb16190401ab"],["/tags/builtin/index.html","a3fbc529e50e9f0935b6162a4c9b9544"],["/tags/cloudflare/index.html","ac26a07eb99a3d526448fea50e4a592e"],["/tags/giscus/index.html","620ac155a14a0d5978f682f1c831e9c4"],["/tags/gitalk/index.html","2c06783e19f99909159b4d4c2d563891"],["/tags/index.html","a4d61c2cbf5cd8ca551b323cb3b8b318"],["/tags/tools/index.html","1aafff9cace525c6af787a845908b382"],["/tags/utteranc/index.html","6c82fd21febaec9da2d012eb0ed2a828"],["/tags/vue/index.html","f9a7ad639f29e28dfd00f38c64d4b300"],["/tags/web/index.html","b096663313ea71dd62abc3cdce0e8f31"],["/tags/乱码/index.html","72ee1372aaaee4c27357d90c4e35d4b2"],["/tags/二分套二分/index.html","4aca375436aef4a7d4ef8b48df9c3c56"],["/tags/云计算/index.html","ae80c720d1a61184c2697a07be7ae6ed"],["/tags/仓库管理/index.html","34402e87a8c53870597f70d6518c1ccf"],["/tags/信息分析/index.html","1ddf4a576ea595721de7822ea1af7d16"],["/tags/划水/index.html","0351ac4b4c7ac77963feace2b734173e"],["/tags/包管理器/index.html","e46d0ac5f49f28cdd876122db87f83d1"],["/tags/图论/index.html","3c92d1880acd0b596b36a1e6dbbfff2b"],["/tags/字符集/index.html","3b429788ffad8c457ec178cdddeefdd8"],["/tags/应用/index.html","ec1ef2b391743031d76c38e9787bd981"],["/tags/开源/index.html","5b2a957e31031a14f3bbf2529fab8810"],["/tags/开源情报/index.html","6c125b0df393e7de69948f2c40d691b2"],["/tags/悦读/index.html","fb44ab003a04a326a636a534f7efc204"],["/tags/技术总结/index.html","31e01c30d8a3cd5f9d984819f4f92e96"],["/tags/操作系统/index.html","35bbf0f8dca8729ed687010383788461"],["/tags/数据合规/index.html","c8ac6958e2f1029948ffedd3c0bc87ee"],["/tags/数据结构/index.html","172af88ec6fb60344c2b8d6f40fb3110"],["/tags/数据结构与算法/index.html","158715cb291935334f35d7721c760887"],["/tags/新年/index.html","b6b67e3a36ae23406dedfc2795ca85b8"],["/tags/服务器运维/index.html","4299a2b59decfc6414b12c4f2b542944"],["/tags/杂谈/index.html","23c7520c576dd6a110827876c98e4ab9"],["/tags/笔记/index.html","60819fa1b36b097e2f204711a740741d"],["/tags/算法/index.html","9d53d8ff42c5a728b9e84b5e33923fd1"],["/tags/线段树/index.html","e82b960a52ad2e7ce4a765ff81e7e122"],["/tags/编码/index.html","31f258ed38574b74d5b6568f35d91d81"],["/tags/编程技巧/index.html","525cb58dc944fe194293ab5eac7e3d17"],["/tags/网络安全/index.html","6a8eb61c92d48a7f610d0cb2a8dbf559"],["/tags/网络流/index.html","f1d6a814a9856b0bb92634f6580fbcdc"],["/tags/职业发展/index.html","296a19a42cc9d619aedb3314bf39facf"],["/tags/萌新/index.html","8b0fdf133cfdc36dcad1783eb446bedf"],["/tags/计算几何/index.html","f53701da5fbd7820971e22bde1f80c23"],["/tags/计算机组成原理/index.html","36cc0deecbcb03fc5aa9144e3fc0c8f4"],["/tags/计算机网络/index.html","092ca662c588bdaf1c5820428881352c"],["/tags/课程/index.html","78d60403136267ae53cd592c7c630be0"],["/tags/软件/index.html","33c956b258010ba35082372b58238892"],["/tags/输出流/index.html","cec526c887ffea36e6cb5aeaeb296006"],["/tags/镜像源/index.html","9b08e2d18607cad644d6867a4e7dda48"],["/tags/随机增量法/index.html","a668f29fbea6a49ac0506fbcb76c4e1e"],["/tags/隐私伦理/index.html","949b75760361e9ad4884dd2adcb44604"],["/tags/题解/index.html","efdc612ea7c7db6e3348b31a03f17e0b"],["/theme-sakura/index.html","abb8a48c25dfc00777a228ec6ba4cf12"],["/video/index.html","4c477ea8f53b2af6f3fefc342244848a"],["/warn.html","63bea20d266fc16b8a349ea16462cf9d"],["/webfonts/fa-brands-400.ttf","0ab3921d9b80975c5597432ab59f5d0a"],["/webfonts/fa-brands-400.woff2","8b0ddedbb27cbc9971c8667caa8a0cc1"],["/webfonts/fa-regular-400.ttf","20206738b2bffb741b00200d5d3d6d20"],["/webfonts/fa-regular-400.woff2","61f30b79daf5b31f0d254a31fba66158"],["/webfonts/fa-solid-900.ttf","e2ceb83946c9e5fc7eab24453a03bffb"],["/webfonts/fa-solid-900.woff2","c64278386c2bbb5e293e11b94ca2f6d1"],["/webfonts/fa-v4compatibility.ttf","d20cedd7e254d4b58b721b6995ca52b4"],["/webfonts/fa-v4compatibility.woff2","4bc58bc16bb05a05d3a47a4f7e143b75"]];
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
