## Mock Sever ##

用javascript来模拟Node.js的实现
本例的实现，完全由web控制，无需创建真实服务器

lib文件夹中，文件加载顺序
[Public, Package, [Http, XHR, App, Route]]

## 文件描述 ##
	Package.js 	保存client/server的数据、调用方法
	Http.js 	http类，用来创建服务器
	XHR.js 		自定义的网络请求对象，用来配合Http.js模拟服务端交互
	App.js 		用来捕获用户访问server方式。配合Route.js
	Route.js 	路由处理
	Public.js 	一些通用的工具方法

## 例子：##
	1. 首先我们要确保js的引用顺序
		<script src="./lib/Public.js"></script>
		<script src="./lib/Package.js"></script>
		<script src="./lib/XHR.js"></script>
		<script src="./lib/Http.js"></script>
		<script src="./lib/App.js"></script>
		<script src="./lib/Route.js"></script>
	2. 创建一个server.js并引用
		<script src="./server.js"></script>
		
		file server.js
			var http = new Http();
			var app = new App();
			var route = new Route();
			route.route(app);

			http.creatServer(function (req, res) {
				app.use(req, res);
				app.resolve(function (res) {
					res.end('404: the page lost');
				});
			})

		ps: server.js一定要引用在XHR调用之前，否则相当于服务未开启

	3. 创建XHR请求对象

		function Ajax (url, callback, options) {
			var option = {
				url: url,
				...options
			}
			new XHR(option, callback)
		}

	4. 调用
		Ajax('/user', function (res) {
			console.log(res);
		})
