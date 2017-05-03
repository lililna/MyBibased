package controllers;

import play.*;
import play.mvc.*;

import java.util.*;

import models.*;

public class Application extends Controller {

    public static void index() {
    	List<PackageInfo> ctgds = PackageInfo.find("typenum = 1").fetch();
    	List<PackageInfo> xcs = PackageInfo.find("typenum = 2").fetch();
    	List<PackageInfo> rhlls = PackageInfo.find("typenum = 3").fetch();
    	List<PackageInfo> hgscs = PackageInfo.find("typenum = 4").fetch();
    	List<PackageInfo> tdyps = PackageInfo.find("typenum = 5").fetch();
    	List<PackageInfo> bgsps = PackageInfo.find("typenum = 6").fetch();
        render(ctgds,xcs,rhlls,hgscs,tdyps,bgsps);
    }
    public static void detailsInfo() {
    	List<DetailsInfo> allgoods = DetailsInfo.findAll();
        renderJSON(allgoods);
    }
    public static void bangzhu() {
        render();
    }
    public static void daili() {
        render();
    }
    public static void details() {
        render();
    }
    public static void dingdan() {
        render();
    }
    public static void dizhi() {
        render();
    }
    public static void erweima() {
        render();
    }
    public static void fenlei() {
        render();
    }
    public static void gwc() {
        render();
    }
    public static void huanying() {
        render();
    }
    public static void jifen() {
        render();
    }
    public static void naconfirm() {
        render();
    }
    public static void shenqingtixian() {
        render();
    }
    public static void splist() {
        render();
    }
    public static void tuiguangdianji() {
        render();
    }
    public static void tuiguangdingdan() {
        render();
    }
    public static void tuiguangguanzhu() {
        render();
    }
    public static void wodeyinhangka() {
        render();
    }
    public static void wodeyongjin() {
        render();
    }
    public static void yongjinmingxi() {
        render();
    }
    public static void ziliao() {
        render();
    }
    public static void ZX() {
        render();
    }
    public static void register() {
        render();
    }
    public static void registerinfo(String username,String phonenum,String password) {
    	UserInfo theinfo = UserInfo.find("userName = ? and phoneNum = ?",username,phonenum).first();
    	UserInfo name = UserInfo.find("userName = ?",username).first();
    	UserInfo num = UserInfo.find("phoneNum = ?",phonenum).first();
    	if(name!=null){
    		renderJSON(2);
    	}else if(num!=null){
    		renderJSON(3);
    	}else{
    		UserInfo users = new UserInfo();
        	users.userName = username;
        	users.phoneNum = phonenum;
        	users.password = password;
        	users.save();
        	renderJSON(1);
    	}
    	
    }
    public static void login() {
        render();
    }
    public static void logininfo(String username,String password) {
    	List<UserInfo> user = UserInfo.find("userName = ? and password = ?",username,password).fetch();
    	List<UserInfo> name = UserInfo.find("userName = ?",username).fetch();
    	String data;
    	if(user.size()>0){
    		data = "1";
    		renderJSON(user);
    	}else if(name.size()>0){
    		data = "2";
    		renderJSON(data);
    	}else{
    		data = "3";
    		renderJSON(data);
    	}
    	
    }
    public static void addcart(String userName,String goodsName,String goodsImg,String price,String count,String typeId) {
    	List<CartInfo> mygoods = CartInfo.find("userName = ? and typeId = ?",userName,typeId).fetch();
    	if(mygoods.size()<=0){
    		CartInfo goods = new CartInfo();
        	goods.userName = userName;
        	goods.goodsName = goodsName;
        	goods.goodsImg = goodsImg;
        	goods.price = price;
        	goods.count = count;
        	goods.typeId = typeId;
        	goods.save();
        	renderJSON(1);
    	}else{
    		renderJSON(2);
    	}	
    }
    public static void getcartinfo(String userName) {
    	List<CartInfo> mygoods = CartInfo.find("userName = ?",userName).fetch();
        renderJSON(mygoods);
    }
    public static void changecount(String userName,String typeId,String count) {
    	CartInfo thegoods = CartInfo.find("userName = ? and typeId = ?",userName,typeId).first();
    	thegoods.count = count;
    	thegoods.save();
    }
    public static void deletegoods(String userName,String typeId) {
    	CartInfo thegoods = CartInfo.find("userName = ? and typeId = ?",userName,typeId).first();
    	thegoods.delete();
    }
    public static void cleargoods(String userName) {
    	List<CartInfo> mygoods = CartInfo.find("userName = ?",userName).fetch();
    	for(CartInfo goods:mygoods){
    		goods.delete();
    	}
    }
}