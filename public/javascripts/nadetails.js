function lunbo(){
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		autoplay : 3000,
		// 如果需要分页器
		pagination: '.swiper-pagination', 
	})
}

    var oCut = document.getElementById("cut");
    var oAdd = document.getElementById("add");
    var oTxt = document.getElementById("txt");
  
    var num = 1;
    var count = 1;
    oAdd.onclick = function(){
	  	num++;
	  	oTxt.value = num;
	  	count = num;
  }
    oCut.onclick = function(){
	  	num--;
	  	if(num<1){
	  		num = 1;
	  	} 	
	  	oTxt.value = num;
	  	count = num;
 	}
  
$(".iknow").click(function(){
    $(".mask").hide();
})
$(".collect").click(function(){
	if($(this).children("p").attr("type")==1){
		$(this).children("p").attr("type","0").css("color","");
		layer.msg("已取消收藏！");
	}else{
		$(this).children("p").attr("type","1").css("color","#ff9900");
		layer.msg("收藏成功！");
	}
	
})

/*加入购物车*/
//var id = 8;
$.ajax({
	type:"POST",
	url:"/detailsInfo",
	async:true,
	success:function(data){
		for(var i in data){
			if(data[i].id==id){
				var str = '';
				str += '<div class="swiper-slide">';
		        str += '<img class="goodsimg" src="'+data[i].imgb+'" />';
		        str += '</div>';
		        str += '<div class="swiper-slide">';
		        str += '<img src="'+data[i].imgc+'" />';
		        str += '</div>';
		        str += '<div class="swiper-slide">';
		        str += '<img src="'+data[i].imgd+'" />';
		        str += '</div>';
		        
		        var showstr = '';
				showstr = '<p id="imga">'+
					'<img src="'+data[i].imgc+'" />'+
				'</p>'+
				'<p id="imgb">'+
					'<img src="'+data[i].imgb+'" />'+
				'</p>'+
				'<p id="imgc">'+
					'<img src="'+data[i].imga+'" />'+
				'</p>';
				$(".price").text(data[i].price);
				$(".name").text(data[i].name);
				var goodsimg = data[i].src;
				var name = $(".name").text();
			}
		}
		$(".lunbo").append(str);
		$("section").append(showstr);
		lunbo();
		var price = $(".price").text();
		$(".addcart").click(function(){
			jsonobj = {name,goodsimg,price,count,id}
			//var all = "all"+id;
		    var all = JSON.stringify(jsonobj);
			localStorage.setItem("all"+id,all);
	
			var userName = $.cookie("userName");
			if(userName==null||userName==undefined||userName=="null"){
				window.location.href = "/login";
			}else{
				$.ajax({
				    type:"POST",
				    url:"/addcart",
				    dataType:"json",
				    data:{userName:userName,goodsName:name,goodsImg:goodsimg,price:price,count:count,typeId:id},
				    success:function(msg){
				    	console.log(msg);
				    	if(msg==1){
				    		layer.msg("加入购物车成功！");
				    	}else if(msg==2){
				    		layer.msg("商品已添加，不可重复添加！");
				    	}			        
				    }
				}) 
			}
		})
		
		/*立即购买*/
		$(".buynow").click(function(){
			j = {name,goodsimg,price,count,id}
			var buy = JSON.stringify(j);
			localStorage.setItem("buy",buy);
			window.location.href = "/naconfirm";
		})
	}
});
/*提取数据*/
url = location.href;
url = url.split('?');
id = url[1].split('=')[1];


