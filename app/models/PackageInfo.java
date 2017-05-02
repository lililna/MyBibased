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
@Entity(name = "package_info")
public class PackageInfo extends Model{
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
	 * 商品类别号
	 */
	@Required
	public int typenum;

}
