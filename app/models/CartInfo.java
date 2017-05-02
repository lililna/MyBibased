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
 * 微信文章信息
 * 
 * @author Administrator
 * 
 */
@Entity(name = "cart_info")
public class CartInfo extends Model{
	 
	/**
	 * 用户名
	 */
	@Required
	public String userName;
	
	/**
	 * 商品名
	 */
	@Required
	public String goodsName;

	/**
	 * 商品图片
	 */
	@Required
	public String goodsImg;

	/**
	 * 商品价格
	 */
	public String price;


	/**
	 * 商品数量
	 */
	@Required
	public String count;
	
	/**
	 * 商品类别
	 */
	@Required
	public String typeId;

}
