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
 * 订单商品信息
 * 
 * @author Administrator
 * 
 */
@Entity(name = "order_info")
public class OrderInfo extends Model{
	
	/**
	 * 用户id
	 */
	@Required
	public int userId;
	
	/**
	 * 用户名
	 */
	@Required
	public String userName;

	/**
	 * 手机号
	 */
	@Required
	public String phoneNum;

	/**
	 * 商品id
	 */
	public String goodsId;


	/**
	 * 商品名
	 */
	@Required
	public String goodsName;
	
	/**
	 * 商品数量
	 */
	@Required
	public String count;
	
	/**
	 * 商品价格
	 */
	@Required
	public String price;
	
}
