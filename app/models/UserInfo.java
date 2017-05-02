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
@Entity(name = "user_info")
public class UserInfo extends Model{
	 
	/**
	 * 用户名
	 */
	@Required
	public String userName;
	
	/**
	 * 密码
	 */
	@Required
	public String password;

	/**
	 * 手机号
	 */
	@Required
	public String phoneNum;

	/**
	 * 银行卡号
	 */
	public String bank;


	/**
	 * 支付宝账号
	 */
	@Required
	public String payNum;

}
