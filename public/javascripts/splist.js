$(function(){
	$("#navc ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	var key = location.href.split("?")[1].split("=")[0];
	if(key == "num"){
		var num = location.href.split("=")[1];
		var str = "";
		var mainc = $("#mainc");
		$.ajax({
			type:"get",
			url:"/public/json/package.json",
			async:true,
			success:function(data){
				for(var i in data){
					if(data[i].typenum == num){
						str+='<a href="/details?id='+data[i].id+'">'
						str+='<div>'
						str+="<img src="+data[i].src+">"
						str+='<p class="p1">'+data[i].name+'</p>'
						str+='<p class="p2">'+'<span>'+data[i].price+'</span>'+'<span>'+data[i].delprice+'</span>'+'</p>'
						str+='</div>'
						str+='</a>'
					}
				}
				mainc.html(str);
			}
		});
	}else if(key == "keyword"){
		var words = location.href.split("=")[1];
		var mainc = $("#mainc");
		var str = "";
		$.ajax({
			type:"get",
			url:"/public/json/package.json",
			async:true,
			success: function (data) {
				for(var i in data){
					if(data[i].name.indexOf(decodeURI(words)) != -1){
						str+='<a href="/details?id='+data[i].id+'">'
						str+='<div>'
						str+="<img src="+data[i].src+">"
						str+='<p class="p1">'+data[i].name+'</p>'
						str+='<p class="p2">'+'<span>'+data[i].price+'</span>'+'<span>'+data[i].delprice+'</span>'+'</p>'
						str+='</div>'
						str+='</a>'
					}
				}
				mainc.html(str);
			}
		})
	}
	var id = location.href.split("=")[1];
	if(id==1){
		$("header").html("传统糕点");
	}else if(id==2){
		$("header").html("西餐");
	}else if(id==3){
		$("header").html("日韩料理");
	}else if(id==4){
		$("header").html("火锅食材");
	}else if(id==5){
		$("header").html("甜点饮品");
	}else if(id==6){
		$("header").html("办公食品");
	}
})
