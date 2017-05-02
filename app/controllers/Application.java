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
    public static void login() {
        render();
    }
}