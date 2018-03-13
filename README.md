##1.webpack是什么?以及能够给前端开发人员能做什么？
    ##1.模块化
        ##主要就是模块化，
        ##也就是当你整个项目都完成的时候，
        ##你可以将整个项目进行模块化，模块化的文件，
        ##包活两种文件：
        ##1.你自己创建的js文件、css文件或者其他文件；
        ##2.通过npm下载下来的文件，
        ##比如说，jquery，其他第三方库，都可以。
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
##2.安裝webpack 
    ##npm install -g webpack
    ##npm install webpack-dev-server
        ###其实它是给我们准备一个服务器，并且，
        ###实时监听我们里面代码的状况
##3.webpack当中的流程
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
##4.webpackdemo
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
        ###可能的错误，那需要安装一下npm install -g webpack-cli 再重复上面的操作，如果没有错误继续往下。
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

    ##11.多个文件打包
        ###1.创建一个文件名为people.js
        ###2.内容为module.exports = "Hello EveryBody"
        ###3.将app.js中的文件改为alert(require('./people.js'));
        ###4.require中的./ 不要丢了！，要引入自己的创建的文件
        ###5.必须要在前面加上 ./ 即使在当前的文件，
        ###6.这个就是区别于，是npm下载下来的文件还是自己创建的文件

        ###7.打开index.html，弹出Hello EveryBody
        ###8.这就是模块化打包工具。不管你有几个文件，只要你
        ###9.只要有一个入口文件，app.js,然后在入口文件引入就可以
        ###10.这样子就可以拿到一些数据，对象等等
    ##12.不想在终端中一直使用webpack app.js
        ###1.webpack app.js --watch  这个命令的好处就是，
        ###2.watch会一直监听你的app.js，
        ###3.app.js如果发生变化，那么它就会监听到，
        ###4.就会对当前的内容进行模块，打包
        ###5.修改一下people.js，内容改为hello world
        ###6.然后刷新浏览器，弹出hello world。
        ###7.只要app.js有变化就会监听到

        ###8.将people.js的内容注释掉
        ###9.写入以下语句
            function getHello(){
                return "Hello Everyone Welcome to Xierduos GitHub!"
            }
            module.exports = getHello();
        ###10.打开index.html，并刷新，弹出 Hello Ever....
        ###11.注释掉，people.js的内容
        ###12.写入
            let people = [
                {name:"Henry"},
                {name:"Bucky"},
                {name:"Emily"}
            ];
            module.exports = people;
        ###13.app.js中，注释掉其他内容，并写入一下内容
            // alert(require('./people.js'));
            console.log(require('./people.js'));
        ###14.打开index.html，进入控制台，
        ###15.你会发先一个数组，数组有3个值
        ###16.注释掉app.js的以上内容，写入
            let people = require('./people.js');
            console.log(people[0].name);
        ###17.你会拿到Henry这个值。
            修改people数组的下标就会得到相对应的值
        ###18.以上是初步认识，webapck能狗帮助我们做什么，感受一下
##5.以下会讲到的内容：
    ##1.使用第三方(jquery)
    ##2.模块化静态文件
    ##3.使用配置文件webpack.config.js
    ##4.使用webpack-dev-server
##6.使用第三方(jquery)--举一反三
    ##1.下载第三方库
    ##2.npm install jquery --save
    ##3.测试一下，jquery能不能在当前项目中使用。
    ##4.在app.js中写入
        let $ = require("jquery");
        $("body").append("<h1>"+people[0]+"</h1>");
    ##5.webpack app.js --watch

    ##6.这样子拿到了Henry,
    ##7.既然可以拿到一个对象，那么就可以拿到所有的数据。

    ##8.在app.js中输入：
        $.each(people,function(key,value){
            $("body").append("<h1>"+people[key].name+"</h2>");
        });
    ##9.终端，Ctrl+C，然后输入webpack app.js --watch
    ##10.打开浏览器，index.html页面。得到三个值。
    ##11.现在，可以拿到了第三方的库，这时候，可以举一反三。
    ##12.拥有一个模块，一个框架，都是没有问题的。
##7.如何将一个静态文件css模块化，可以在当前项目正常使用。
    ##1.在当前项目文件夹下，创建一个css文件,style.css
    ##2.
        body{
            background: skyblue;
        }
    ##3.静态文件是无法模块化的，如果需要模块化，
    ##4.必须借助插件，
    ##5.下载两个css插件
        ###1.npm install css-loader  --save-dev
        ###2.npm install style-loader --save-dev
    ##6.app.js中，添加
        ###1.require('./style.css);应该是这样的，
        ###2.由于是静态文件。所以前边加上修饰 用叹号
        ###3.require("!style-loader!css-loader!./style.css")
        ###4.webpack app.js --watch  
        ###5.打开index.html  样式已经应用上来
        ###6.回到样式里面，背景色变为红色。结果网页会变成红色。
        
    ##7.当然啦，这样的写出来的效果，是不够人性化的。
    ##8.因为当我们有很多loader的化，那得写多少。
    ##9.所以，优化当前项目
    ##10.注释
       ####1.//require("!style-loader!css-loader!./style.css");
    ##11.使用webapck配置文件
    ##12.当前文件夹中，创建一个文件，webpack.config.js
    ##13.内容为
        // 1.将这个配置文件公开出去
        module.exports = {
            // 2.入口文件，也就是说当你使用webpack运行config的时候，
            // 3.它会找到webpack.config.js，然后找到入口文件app.js
            entry:{main:"./app.js"}, 
            // 4.出口文件
            output:{
                path:__dirname,
                filename:"./dist/[name].js"
            },
            // 需要依赖的插件或者是装载器。
            module:{ 
                rules:[
                    {test:/\.css$/,loader:"style-loader!css-loader"}
                ]
            }
        }
    ##14.上面这样子写，这个整个文件，整个项目。
    ##15.所有的css就可以正常的模块化了。
    ##16.将app.js里面的
        ###1.require("!style-loader!css-loader!./style.css");
        ###2.改为require("./style.css");
    ##17.webpack app.js --watch

    ##18.在webpack-my-demo中创建一个src文件夹
        ###1.src下面再创建两个文件夹js和css
        ###2.分别把未打包的文件移引进。
        ###3.将app.js上面的文件的相应的路径改一下。
        ###4.将配置文件webapck.config.js的入口文件路径改一下。
        ###5.启动项目用webpack --watch

##7.以下将涉及两个内容
    ##1.使用webpack-dev-server
    ##2.使用babel转换插件
    
    ##3.webapck-dev-server是实时监听当前项目，是否发生变化
    ##4.babel是将浏览器不能识别的语言转换成浏览器可识别的语言
        ###1.jsx，es6等

##8.用代替的命令，来启动项目
    ##1.找到package.json
    ##2.找到一个名为scrits的对象
    ##3.在这个对象的值的对象中，写入一个对象，
        ###1."build":"webpack --watch"
    ##4.然后你可以通过输入npm run build启动项目
    ##5.效果跟webpack --watch 是一样的。
    ##6.npm run build      
##9.怎么使用webpack-dev-server
    ##1.使用webpack-dev-server的好处是，
    ##2.可以让你的本地项目直接在服务器上运行。
    ##3.有的时候，我们还是要借助服务器的，
    ##4.比如说，我们要请求的数据库的内容，
    ##6.这肯定要将项目放到服务器上去
    ##7.这样才能跟后台进行请求。
    ##8.安装webpack-dev-server
		###1.在全局环境中安装webpack-dev-server：
			npm install webpack-dev-server -g
		###2.在根目录下执行命令：
			webpack-dev-server
    ##9.在浏览器地址栏上输入http://localhost:8080就可以打开项目index.html了
	##10.实时刷新
	##11.webpack-dev-server提供了两种模式用于自动刷新页面：
        ###1.iframe模式
        ###2.我们不访问http://localhost:8080，
        ###3.而是访问http://localhost:8080/webpack-dev-server/index.html。
        ###4.inline模式
        ###5.在命令行中指定该模式，
        ###6.webpack-dev-server  --inline。
        ###7.这样
        ###8.http://localhost:8080/index.html 
        ###9.页面就会在js文件变化后自动刷新了。
					
    ##12.以上说的两个页面自动刷新的模式都是指刷新整个页面，
    ##13.相当于点击了浏览器的刷新按钮
##10.babel转换插件的使用
    ##1.npm install balel-loader babel babel-core babel-preset-es2015 --save-dev
    ##2.修改webapck.config.js

    // 1.将这个配置文件公开出去

    module.exports = {
        // 2.入口文件，也就是说当你使用webpack运行config的时候，
        // 3.它会找到webpack.config.js，然后找到入口文件app.js
        entry:{index:"./src/js/app.js"}, 
        // 4.出口文件
        output:{
            path:__dirname,
            filename:"./dist/[name].js"
        },
        // 需要依赖的插件或者是装载器。
        module:{ 
            rules:[
                {test:/\.css$/,loader:"style-loader!css-loader"},
                {test:/.js$/,loader:"babel-loader",exclude:/node_modules/,query:{presets:["es2015"]}}
            ]
        }
    }
    
