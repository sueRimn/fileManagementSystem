/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @LastEditors: sueRimn
 * @Date: 2019-03-10 14:42:19
 * @LastEditTime: 2019-03-10 16:12:37
 */
/**
 * 初始化
 * 配置对象
 * 
 * 数据驱动视图：页面中的表现/功能 是通过数据的形式反馈的
 * 1.数据化：data配置项-存储应用中需要用到的数据，是一个对象
 * 2.模板：
 * (1)语法：{{表达式}}
 * 3、指令 v-for v-if v-show v-on/@
 * 4.computed:
 * 计算属性：产生派生数据，data存放原始数据，这里存放根据原始数据计算（派生）出来的数据
 * 
 * 
 */
new Vue({
    el: '#app',
    data: {
        appName: '云盘',
        //显示模式：缩略图、列表
        showMode: 'thumb',
        showType: 'all',
        //定义类型与MIME的映射关系
        MIMIEMAPS: {
            doc: ['text/html', 'text/css'],
            pic: ['image/png', 'image/gif'],
            music: ['audio/mp3'],
            video: ['video/mp4']
        },
        //所有的文件夹、文件信息
        files: [
            //每一个对象就是一个文件夹、文件信息
            {
                //每个文件夹、文件的名称
                name: '文件夹1',
                //类型：如果为空，则为文件夹
                type: ''
            },
            {
                name: '文件夹2',
                type: ''
            },
            {
                name: '1.html',
                type: 'text/html' //MIME 多用途互联网文件类型
            },
            {
                name: '1.css',
                type: 'text/css' //MIME 多用途互联网文件类型
            },
            {
                name: '朋友.mp3',
                type: 'audio/mp3'
            },
            {
                name: 'vue.mp4',
                type: 'video/mp4'
            }
        ]
    },
    //计算属性  存放派生数据
    computed: {
        //每一个计算属性都是一个函数，函数的返回值就是这个函数对于的属性的值
        //计算属性使用的时候，使用的是方法对于的属性  当成属性去用
        folderFiles() { //显示全部
            return this.showType == 'all' ? this.files.filter(file => file.type == '') : [];
        },
        otherFile() { //显示文件
            console.log(this.MIMIEMAPS[this.showType]);
            let otherFiles = this.files.filter(file => file.type != '');
            if (this.showType == 'all') {
                return otherFiles;
            } else { //当前目录是否包含文件类型
                return otherFiles.filter(file => this.MIMIEMAPS[this.showType].includes(file.type));
            }
        }
    },
    //存放所有vue中使用的函数
    methods: {
        //切换显示模式
        changeShowMode(type) {
            this.showMode = type;
        },
        //切换显示类型
        changeShowType(type) {
            this.showType = type;
        }
    }
})