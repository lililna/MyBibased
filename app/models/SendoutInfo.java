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
 * 发货商品信息
 * 
 * @author Administrator
 * 
 */
@Entity(name = "sendout_info")
public class SendoutInfo extends Model{

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

}
