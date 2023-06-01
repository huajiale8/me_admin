import {defineStore} from 'pinia'

export const dataKnowledgeStore = defineStore(
    'dataKnowledgeStore',
    () => {
        return {
            dataList: [
                {
                    title: '学习 · AI',
                    id: 0,
                    url: '',
                    tag: '导航目录',
                    data: [
                        {
                            title: '去问',
                            url: 'https://quwenai.com/',
                            tag: '导航菜单',
                        },
                        {
                            title: '无界',
                            url: 'https://www.wujieai.com/',
                            tag: '导航菜单',
                        },
                        {
                            title: 'GPT',
                            url: 'https://chat.openai.com/',
                            tag: '导航菜单',
                        }, {
                            title: '绘画',
                            url: 'https://clipdrop.co/stable-diffusion',
                            tag: '导航菜单',
                        }, {
                            title: '抠图',
                            url: 'https://www.6k6k.cn/',
                            tag: '导航菜单',
                        }, {
                            title: 'truthgpt',
                            url: 'https://talk.truthgpt.one/',
                            tag: '导航菜单',
                        }, {
                            title: '英文单词',
                            url: 'https://kaiyiwing.gitee.io/qwerty-learner/',
                            tag: '导航菜单',
                        }, {
                            title: '图片压缩',
                            url: 'https://docsmall.com/gif-compress',
                            tag: '导航菜单',
                        }, {
                            title: '影视森林',
                            url: 'https://549.tv/',
                            tag: '导航菜单',
                        }, {
                            title: 'P站',
                            url: 'https://www.pixiv.net/',
                            tag: '导航菜单',
                        },
                    ]

                },
                {
                    title: '学习 · 生活',
                    id: 1,
                    url: '',
                    tag: '导航目录',
                    data: [
                        {
                        title: '淘宝',
                        url: 'https://www.taobao.com/',
                        tag: '导航菜单',
                    },    {
                        title: '京东',
                        url: 'https://www.jd.com/',
                        tag: '导航菜单',
                    },  {
                        title: '盖得排行',
                        url: 'https://guiderank-app.com/',
                        tag: '导航菜单',
                    },{
                        title: '银行',
                        url: 'http://www.hao123.com/bank',
                        tag: '导航菜单',
                    },{
                        title: '地图',
                        url: 'https://www.amap.com/',
                        tag: '导航菜单',
                    },{
                        title: '翻译',
                        url: 'https://translate.google.cn/',
                        tag: '导航菜单',
                    },{
                        title: '邮箱',
                        url: 'http://www.hao123.com/mail',
                        tag: '导航菜单',
                    },{
                        title: '菜鸟教程',
                        url: 'https://www.runoob.com/',
                        tag: '导航菜单',
                    },{
                        title: 'MOOC',
                        url: 'https://www.icourse163.org/',
                        tag: '导航菜单',
                    },{
                        title: '多邻国',
                        url: 'https://www.duolingo.cn/lesson',
                        tag: '导航菜单',
                    },
                    ]
                },{
                    title: '常用 · 社区',
                    id: 2,
                    url: '',
                    tag: '导航目录',
                    data: [
                        {
                            title: '微信',
                            url: 'https://wx.qq.com/',
                            tag: '导航菜单',
                        },    {
                            title: '微博',
                            url: 'https://weibo.com/',
                            tag: '导航菜单',
                        },  {
                            title: '知乎',
                            url: 'https://www.zhihu.com/',
                            tag: '导航菜单',
                        },{
                            title: '贴吧',
                            url: 'https://tieba.baidu.com/ ',
                            tag: '导航菜单',
                        },{
                            title: 'Soomal',
                            url: 'http://www.soomal.com/',
                            tag: '导航菜单',
                        },{
                            title: 'Topbook',
                            url: 'https://topbook.cc/overview',
                            tag: '导航菜单',
                        },{
                            title: 'GitHub',
                            url: 'https://github.com/',
                            tag: '导航菜单',
                        },{
                            title: '豆瓣',
                            url: 'https://www.douban.com/',
                            tag: '导航菜单',
                        },{
                            title: 'V2EX',
                            url: 'https://www.v2ex.com/',
                            tag: '导航菜单',
                        },{
                            title: '插画',
                            url: 'https://www.vcg.com/creative/',
                            tag: '导航菜单',
                        },
                    ]
                },{
                    title: '影音 · 娱乐',
                    id: 3,
                    url: '',
                    tag: '导航目录',
                    data: [
                        {
                            title: '爱奇艺',
                            url: 'https://www.iqiyi.com/',
                            tag: '导航菜单',
                        },    {
                            title: '腾讯视频',
                            url: 'https://v.qq.com/',
                            tag: '导航菜单',
                        },  {
                            title: '哔哩哔哩',
                            url: 'https://www.bilibili.com/',
                            tag: '导航菜单',
                        },{
                            title: '芒果TV',
                            url: 'https://www.mgtv.com/ ',
                            tag: '导航菜单',
                        },{
                            title: '优酷',
                            url: 'https://www.youku.com/',
                            tag: '导航菜单',
                        },{
                            title: '音乐',
                            url: 'https://music.163.com/',
                            tag: '导航菜单',
                        },{
                            title: '电影FM',
                            url: 'https://dianying.fm/',
                            tag: '导航菜单',
                        },{
                            title: '低端影视',
                            url: 'https://ddrk.me/',
                            tag: '导航菜单',
                        },{
                            title: 'ZzzFun',
                            url: 'http://www.zzzfun.com/',
                            tag: '导航菜单',
                        }
                    ]
                },{
                    title: '发现 · 世界',
                    id: 4,
                    url: '',
                    tag: '导航目录',
                    data: [
                        {
                            title: '凤凰资讯',
                            url: 'https://news.ifeng.com/',
                            tag: '导航菜单',
                        },    {
                            title: '知微事见',
                            url: 'https://ef.zhiweidata.com/#!/index',
                            tag: '导航菜单',
                        },  {
                            title: '少数派',
                            url: 'https://sspai.com/',
                            tag: '导航菜单',
                        },{
                            title: '小鸡词典',
                            url: 'https://jikipedia.com/ ',
                            tag: '导航菜单',
                        },{
                            title: '煎蛋',
                            url: 'https://jandan.net/',
                            tag: '导航菜单',
                        },{
                            title: '有趣网址',
                            url: 'https://youquhome.com/',
                            tag: '导航菜单',
                        },{
                            title: '注销指南',
                            url: 'https://zhuxiao.wiki/',
                            tag: '导航菜单',
                        },{
                            title: '后续',
                            url: 'https://houxu.app/',
                            tag: '导航菜单',
                        },{
                            title: '思谋学术',
                            url: 'https://ac.scmor.com/',
                            tag: '导航菜单',
                        }
                    ]
                },{
                    title: '在线 · 工具',
                    id: 5,
                    url: '',
                    tag: '导航目录',
                    data: [
                        {
                            title: '在线修图',
                            url: 'https://www.photopea.com/',
                            tag: '导航菜单',
                        },    {
                            title: '收发文件',
                            url: 'https://cowtransfer.com/',
                            tag: '导航菜单',
                        },  {
                            title: '二维码',
                            url: 'https://cli.im/',
                            tag: '导航菜单',
                        },{
                            title: '临时邮箱',
                            url: 'https://www.linshiyouxiang.net ',
                            tag: '导航菜单',
                        },{
                            title: '临时短信',
                            url: 'https://www.materialtools.com/',
                            tag: '导航菜单',
                        },{
                            title: '格式转换',
                            url: 'https://convertio.co/zh/',
                            tag: '导航菜单',
                        },{
                            title: '文档下载',
                            url: 'http://www.hiwenku.com/',
                            tag: '导航菜单',
                        },{
                            title: '视频下载',
                            url: 'https://weibomiaopai.com/',
                            tag: '导航菜单',
                        },{
                            title: '音乐下载',
                            url: 'https://www.eggvod.cn/music/',
                            tag: '导航菜单',
                        },{
                            title: 'MP4免费资源',
                            url: 'https://coverr.co/',
                            tag: '导航菜单',
                        },{
                            title: 'Adobe全家桶',
                            url: 'https://www.yuque.com/laojiu-nziig/uc02bk?',
                            tag: '导航菜单',
                        }
                    ]
                },{
                    title: '搜索 · 资源',
                    id: 6,
                    url: '',
                    tag: '导航目录',
                    data: [
                        {
                            title: '茶杯狐',
                            url: 'https://www.cupfox.com/',
                            tag: '导航菜单',
                        },    {
                            title: '电影天堂',
                            url: 'https://www.dy2018.com/',
                            tag: '导航菜单',
                        },  {
                            title: '酷软清单',
                            url: 'https://www.coolist.net/',
                            tag: '导航菜单',
                        },{
                            title: '知晓程序',
                            url: 'https://minapp.com/',
                            tag: '导航菜单',
                        },{
                            title: '软件限免',
                            url: 'https://zhengbanxianmian.com/',
                            tag: '导航菜单',
                        },{
                            title: '搜酷站',
                            url: 'https://www.soukuzhan.com/',
                            tag: '导航菜单',
                        },{
                            title: '电子书',
                            url: 'https://www.jiumodiary.com/',
                            tag: '导航菜单',
                        },{
                            title: '常用软件',
                            url: 'https://cloud.coolist.net/',
                            tag: '导航菜单',
                        },{
                            title: '字幕库',
                            url: 'http://www.zimuku.la/',
                            tag: '导航菜单',
                        }
                    ]
                }
            ]
        }
    },
    {
        persist: true,
    }
)
