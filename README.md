##webpack是什么?以及能够给前端开发人员能做什么？



    ##1.模块化
        ##主要就是模块化，
        ##也就是当你整个项目都完成的时候，
        ##你可以将整个项目进行模块化，模块化的文件，
        ##包活两种文件：
        ##1.你自己创建的js文件、css文件或者其他文件；
        ##2.通过npm下载下来的文件，
        ##比如说，jQuery，其他第三方库，都可以。
        ##通过webpack还可以将静态文件进行模块化，
        ##如果你接触过node的话，
        ##其实你可以发现，
        ##node可以将我们的js进行模块化，
        ##但是它不可以将我们的静态文件模块化，
        ##比如说我们的js文件。
        ##webpack可以将静态文件模块化，
        ##但是你将一些静态文件或者是一些第三方的文件进行模块化过程当中，
        ##你需要借助一些插件，或者加载器。

        ##webpck的优势：
            ##1.代码分离。   
                ##每一个模块或者说每个文件都有它自己的功能。
                ##它只处理好自己的功能就可以了。
                ##我们让它处理的功能给它分出来一个模块，让这个文件专门做一个事情。
                ##另外一个文件做另外的事情。
                ##这样子代码就可以实现高内聚低耦合的状态了。
                ##因为每一个文件都是分离的状态，所以就不会耦合在一起。
            ##2.装载器（css，sass，jsx等等）。  
                ##它可以拥有很多的加载器，那么我们需要用css的话，
                ##我们需要借助，一些loader，style-loader把你的css静态文件进行模块化。
                ##还有就是sass文件，jsx文件等等。
            ##3.智能解析（require("./template/"+names+".esj"))。
                ##智能解析的话，其实就是，当你引入模块的化，
                ##你就可以使用require甚至你可以改变文件的对应的名字，
                ##然后拼接文件的尾缀，就可以了。

            ##装载器的案例，
                ##比如说我们想将css模块化的话，
                ##我们需要是用两个东西，一个是css-loader，
                ##将你当前的css文件进行模块化，另外一个是，##style-loader将你当前模块化的文件，
                ##可以让你当前的文件结构识别出来，你当前使用的是css。
                ##你还可以使用Sass&Less装载器。
                ##jsx装载器能帮助把jsx文件转化为js 文件。
                ##Babel装载器，Babel装载器能帮我们做什么呢？
                ##能将ES6的语法转换成ES5，
                ##将一些其他的脚本的语言的语法，转换成，
                ##我们浏览器可以识别的。
                ##比如TypeScript，Coffee，EJS，Pug，Handlebars，json，
                ##我们都可以通过对应的装载器，将其进行模块化。
    ##2.自定义文件或npm install
    ##3.静态文件模块化
    ##4.借助插件和加载器

##安裝webpack 
    ##npm install -g webpack
    ##npm install webpack-dev-server
        ###其实它是给我们准备一个服务器，并且，
        ###实时监听我们里面代码的状况

##webpack当中的流程

    ##第一步：
    ##cats.js
        ###var cat = ['dave','henry','marta']
        ###module.exports = cats;
    ##上面是一个cats数组，我们在app.js使用它，
    ##就需要在app.js中使用require将它引入，如下：
    ##app.js 
        ###var cats = require('./cats.js'); 
        ###console.log('cats');
    ##我们可以，module.exports一个数组，一个对象，一个number等等。
    ##我们还可以让他返回一个方法，function等等，都可以。
    ##第二步：
    ##当你使用webpack的时候，它可以帮助我们将，
    ##这些文件，弄到一个出口文件里面来，叫bundle.js
    ##在我们bundle.js里面就有我们引入的那些文件。
    ##大部分文件是看不懂的，这个没关系，我们只需要引入即可。
##webpackdemo
    ##1.安装全局webpack
        ###npm install -g webpack  回车
    ##2.创建一个文件夹，webpack-my-app
    ##3.终端进入webpack-my-app，输入npm init 
        ###可以直接一直按回车，或者直接输入webpack init -y
        ###也可以webpack init 后对应的东西就可以了
        ###这里在description：引用于webpack
        ###回车
        ###keywork:webpack 打包工具 webapck-dev-server  
        ###keywork是可以不写的，这里只不过是记录一下
        ###author：xieerduos
        ###Is this ok?ok 回车
        ##可能的错误，那需要安装一下npm install -g webpack-cli 再重复上面的操作，如果没有错误继续往下。
        ###之后在你的项目webpack-my-app下面有一个package.json的文件
    ##4.在vscode中打开webapck-my-demo文件夹
    ##5.创建index.html
    ##6.写对应的结构，和写入一下内容
        ###<title>webapck</title>
        ###<script src="./dist/main.js"></script>
    ##7.在webapck-my-demo文件夹下，创建一个app.js
        ###内容为alert("Hello Everyone)
    ##8.回到终端，输入
    ##9.webpack app.js 
        ###自动在当前目录下创建一个dist文件夹，
        ###下面有一个main.js就是打包好的.js文件，也是出口文件

    ##10.在浏览器中打开index.html文件，

