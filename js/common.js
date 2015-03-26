/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
  		if(!app.total){
  			app.total = true;
        /*调用iscorll*/
              var myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true });
              document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

  			var init = setTimeout(function(){
  			    app.caches.route = new app.routers();	/*实例化路由*/
            Backbone.history.start({pushState : true});/*启动路由*/
  			},100);
  		}
    }
};

var socket = io.connect('http://localhost:8888');/*连接nodejs*/
   socket.on('connected', function (data) {
     console.log('nodejs connected');
   });

var resizeArry = {}/*自适应*/
var fontSize/*根节点字号*/
var touchTime/*点击毫秒数*/

$(window).resize(function(){/*自适应*/
	if(resizeArry){
		var w = $(window).width()
		var h = $(window).height()
		$.each(resizeArry,function(i,n){
			n(w,h);
			})
		}
	})

var $_GET = function(){/*获取get*/
  var url = window.document.location.href.toString();
  var u = url.split("?");
  if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
		$.each(u,function(o,p){
			var j = p.split("=");
			get[j[0]] = j[1];
			})
        return get;
    }else{
       return {};
    }
};

function suit(){/*自适应计算*/
    /*body*/
    $("body").height($(window).height())
    /*改字号*/
        fontSize=($(window).width()/320)*10;
        $("html").css("font-size",($(window).width()/320)*10+"px");
};
resizeArry.suit=suit/*加入自适应队列*/
app.models = {};/*数据模型*/
app.collections = {};/*集合模型*/
app.apis = {};/*api*/
app.views = {};/*视图模板*/
app.caches = {};/*数据缓存*/
app.fns = {};/*公用方法*/

