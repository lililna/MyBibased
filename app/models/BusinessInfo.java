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
@Entity(name = "business_info")
public class BusinessInfo extends Model{
	 
	/**
	 * 图片名
	 */
	@Required
	public String img;

	/**
	 * 用户名
	 */
	@Required
	public String name;

	/**
	 * 手机号
	 */
	public String phone;


	/**
	 * 商品名
	 */
	@Required
	public String shopName;

}
