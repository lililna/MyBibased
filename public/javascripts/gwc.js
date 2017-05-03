/*$(function(){
	var pricezj = 0;
	if(localStorage.key(0)){
		for(var i = 0;i<localStorage.length;i++){
			var keys = localStorage.key(i);
			var arr = keys.split("")[0];
			if(arr == "a"){
				var sp = localStorage.getItem(keys);
				var spa = JSON.parse(sp);
				var count = spa.count;
				var price = spa.price.slice(1);
				var allprice = spa.count*price;
				allprice = Math.floor(Number(allprice)*100)/100;
				var html = '';
				html+='<div class="sp">'
				html+='<img src="'+spa.goodsimg+'">'
				html+='<div>'+
					'<p>'+spa.name+'</p>'+
					'<p class="colors">'+"单价: "+'<span class="jiage">'+price+'</span>'+'</p>'+
					'<p class="colors xiaoji">'+"小计: ￥"+"<span class='pri'>"+allprice+"</span>"+'</p>'+
					'<div>'+
						'<div>'+
							'<input value="-" class="btn1" type="button">'+
							'<input value="'+count+'" class="txt" type="text">'+
							'<input value="+" class="btn2" type="button">'+
						'</div>'+
						'<span class="sanchu" keyss="'+keys+'">✖删除</span>'
					'<div>'+
				'<div>'
				html+='</div>'
				$("#mainc").append(html);
				var pr = $(".pri").eq(i).html();
				var prr = Math.ceil(Number(pr)*100)/100;
				pricezj+=prr;
				pricezj = Math.floor(Number(pricezj)*100)/100;
			}
		}
		
		//数量减少按钮
		$("#mainc").on("click",".btn1",function(){
			var txtval = $(this).siblings(".txt").val();
			var jiage = $(this).parent().parent().parent().find(".jiage").html();		
			if(txtval>1){
				txtval--;
				allprice = txtval*jiage;
				allprice = Math.floor(Number(allprice)*100)/100;
				$(this).parent().parent().siblings(".xiaoji").find(".pri").html(allprice);
				$(this).siblings(".txt").val(txtval);
				jiage = Number(jiage);
				pricezj -= jiage;
				pricezj = Math.floor(Number(pricezj)*100)/100;								
				console.log(pricezj);
				$("#bottomc #hj").html(pricezj);
			}
		})
		//数量增加按钮
		$("#mainc").on("click",".btn2",function(){
			var txtval = $(this).siblings(".txt").val();
			var jiage = $(this).parent().parent().parent().find(".jiage").html();
				txtval++;
				allprice = txtval*jiage;
				allprice = Math.floor(Number(allprice)*100)/100;
				$(this).parent().parent().siblings(".xiaoji").find(".pri").html(allprice);
				$(this).siblings(".txt").val(txtval);
				jiage = Number(jiage);
				pricezj += jiage;
				pricezj = Math.floor(Number(pricezj)*100)/100;				
				console.log(pricezj);
				$("#bottomc #hj").html(pricezj);
		})
		//删除按钮
		var arr3 = [];
		$("#mainc").on("click",".sanchu",function(){
			var pce = $(this).parent().parent().find(".pri").html();		
			pricezj-=pce;
			pricezj = Math.floor(Number(pricezj)*100)/100;			
			$("#bottomc #hj").html(pricezj);
			var keyss = $(this).attr("keyss");
			localStorage.removeItem(keyss);
			$(this).parent().parent().parent().remove();
			var maht = $("#mainc").html();
			console.log(maht);
			if(maht ==""){
				var str = '';
			    str += '<div id="kong">'
				str += '<img src="/public/images/gwcpic1.png">'
				str += '</div>'
				$("#mainc").append(str);
				$("#bottomc #hj").html(0);
			}						
		})
		//加载时自动计算合计与判断是否该加载空购物车图片
		$("#bottomc #hj").html(pricezj);
		var maht = $("#mainc").html();
		if(maht ==""){
				var str = '';
			    str += '<div id="kong">'
				str += '<img src="/public/images/gwcpic1.png">'
				str += '</div>'
				$("#mainc").append(str);
				$("#bottomc #hj").html(0);
		}	
		//清空按钮
		$("#emp").on("click",function(){
			$("#mainc").empty();
			localStorage.clear();
			$("#bottomc #hj").html(0);
			var str = '';
			    str += '<div id="kong">'
				str += '<img src="/public/images/gwcpic1.png">'
				str += '</div>'
			$("#mainc").append(str);
		})
	}else{
		var str = '';
		    str += '<div id="kong">'
			str += '<img src="/public/images/gwcpic1.png">'
			str += '</div>'
		$("#mainc").append(str);
	}	
})
*/
$(function(){
	var pricezj = 0;
	var userName = $.cookie("userName");
	$("#bottomc #hj").html(pricezj);
	$.ajax({
	    type:"POST",
	    url:"/getcartinfo",
	    dataType:"json",
	    data:{userName:userName},
	    success:function(msg){
	    	console.log(msg);
	    	if(msg.length>0){
	    		for(var i=0;i<msg.length;i++){
	    			var count = msg[i].count;
					var price = msg[i].price.slice(1);
					var allprice = msg[i].count*price;
					allprice = Math.floor(Number(allprice)*100)/100;
	    			var html = '';
					html+='<div class="sp">'
					html+='<img src="'+msg[i].goodsImg+'">'
					html+='<div>'+
						'<p>'+msg[i].goodsName+'</p>'+
						'<p class="colors">'+"单价: "+'<span class="jiage">'+msg[i].price.slice(1)+'</span>'+'</p>'+
						'<p class="colors xiaoji">'+"小计: ￥"+"<span class='pri'>"+allprice+"</span>"+'</p>'+
						'<div>'+
							'<div>'+
								'<input value="-" class="btn1" type="button" type-id="'+msg[i].typeId+'">'+
								'<input value="'+msg[i].count+'" class="txt" type="text">'+
								'<input value="+" class="btn2" type="button" type-id="'+msg[i].typeId+'">'+
							'</div>'+
							'<span class="sanchu" type-id="'+msg[i].typeId+'">✖删除</span>'
						'<div>'+
					'<div>'
					html+='</div>'
					$("#mainc").append(html);
					var pr = $(".pri").eq(i).html();
					var prr = Math.ceil(Number(pr)*100)/100;
					pricezj+=prr;
					pricezj = Math.floor(Number(pricezj)*100)/100;
					$("#bottomc #hj").html(pricezj);
	    		}
	    	}else{
	    		var str = '';
			    str += '<div id="kong">'
				str += '<img src="/public/images/gwcpic1.png">'
				str += '</div>'
				$("#mainc").append(str);
	    	}
	    	
	    }
	}) 
	
	//数量减少按钮
		$("#mainc").on("click",".btn1",function(){
			var txtval = $(this).siblings(".txt").val();
			var jiage = $(this).parent().parent().parent().find(".jiage").html();		
			if(txtval>1){
				txtval--;
				allprice = txtval*jiage;
				allprice = Math.floor(Number(allprice)*100)/100;
				$(this).parent().parent().siblings(".xiaoji").find(".pri").html(allprice);
				$(this).siblings(".txt").val(txtval);
				jiage = Number(jiage);
				pricezj -= jiage;
				pricezj = Math.floor(Number(pricezj)*100)/100;								
				$("#bottomc #hj").html(pricezj);
				
				var typeId = $(this).attr("type-id");
				$.ajax({
				    type:"POST",
				    url:"/changecount",
				    dataType:"json",
				    data:{userName:userName,typeId:typeId,count:txtval},
				    success:function(msg){
				    	console.log(msg);
				    	
				    }
				}) 
			}
		})
		
		//数量增加按钮
		$("#mainc").on("click",".btn2",function(){
			var txtval = $(this).siblings(".txt").val();
			var jiage = $(this).parent().parent().parent().find(".jiage").html();
				txtval++;
				allprice = txtval*jiage;
				allprice = Math.floor(Number(allprice)*100)/100;
				$(this).parent().parent().siblings(".xiaoji").find(".pri").html(allprice);
				$(this).siblings(".txt").val(txtval);
				jiage = Number(jiage);
				pricezj += jiage;
				pricezj = Math.floor(Number(pricezj)*100)/100;				
				console.log(pricezj);
				$("#bottomc #hj").html(pricezj);
				var typeId = $(this).attr("type-id");
				$.ajax({
				    type:"POST",
				    url:"/changecount",
				    dataType:"json",
				    data:{userName:userName,typeId:typeId,count:txtval},
				    success:function(msg){
				    	console.log(msg);
				    	
				    }
				}) 
		})
		
		//删除按钮
		var arr3 = [];
		$("#mainc").on("click",".sanchu",function(){
			var pce = $(this).parent().parent().find(".pri").html();		
			pricezj-=pce;
			pricezj = Math.floor(Number(pricezj)*100)/100;			
			$("#bottomc #hj").html(pricezj);
			$(this).parent().parent().parent().remove();
			var maht = $("#mainc").html();
			console.log(maht);
			if(maht ==""){
				var str = '';
			    str += '<div id="kong">'
				str += '<img src="/public/images/gwcpic1.png">'
				str += '</div>'
				$("#mainc").append(str);
				$("#bottomc #hj").html(0);
			}	
			var typeId = $(this).attr("type-id");
			$.ajax({
			    type:"POST",
			    url:"/deletegoods",
			    dataType:"json",
			    data:{userName:userName,typeId:typeId},
			    success:function(msg){
			    	layer.msg("删除成功");
			    	
			    }
			}) 
		})
		
		//清空按钮
		$("#emp").on("click",function(){
			$("#mainc").empty();
			localStorage.clear();
			$("#bottomc #hj").html(0);
			var str = '';
			    str += '<div id="kong">'
				str += '<img src="/public/images/gwcpic1.png">'
				str += '</div>'
			$("#mainc").append(str);
		    $.ajax({
			    type:"POST",
			    url:"/cleargoods",
			    dataType:"json",
			    data:{userName:userName},
			    success:function(msg){
			    	
			    }
			}) 
		})
})