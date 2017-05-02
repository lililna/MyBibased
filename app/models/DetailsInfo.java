package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

import play.data.validation.Required;
import play.db.jpa.Model;
import play.libs.Crypto;
import play.libs.Crypto.HashType;

/**
 * 商品信息
 * 
 * @author Administrator
 * 
 */
@Entity(name = "details_info")
public class DetailsInfo extends Model{
	/**
	 * 商品图
	 */
	@Required
	public String src;
	/**
	 * 商品名
	 */
	@Required
	public String name;
	
	/**
	 * 商品现价
	 */
	@Required
	public String price;

	/**
	 * 商品原价
	 */
	@Required
	public String delprice;

	/**
	 * 商品类型
	 */
	public String goodstype;


	/**
	 * 商品展示图a
	 */
	@Required
	public String imga;
	
	/**
	 * 商品展示图b
	 */
	@Required
	public String imgb;
	
	/**
	 * 商品展示图c
	 */
	@Required
	public String imgc;
	
	/**
	 * 商品展示图d
	 */
	@Required
	public String imgd;


}
