/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-11-13
 * history:  created by Anyhome
 * ***********************************************/
 
/**
 * 
 */
package org.anyhome.models;

import com.et.ar.ActiveRecordBase;
import com.et.ar.annotations.Column;
import com.et.ar.annotations.Id;
import com.et.ar.annotations.Table;
@Table(name="Ay_Roles")
/**
 * @author Ayhome
 *
 */
public class MyRoles extends ActiveRecordBase {
	@Id private Integer RoleID;
	@Column private Integer R_UserID;
	@Column private String R_RoleName;
	@Column private String R_Description;
	public Integer getRoleID() {
		return RoleID;
	}
	public void setR_UserID(Integer r_UserID) {
		R_UserID = r_UserID;
	}
	public Integer getR_UserID() {
		return R_UserID;
	}
	public void setR_RoleName(String r_RoleName) {
		R_RoleName = r_RoleName;
	}
	public String getR_RoleName() {
		return R_RoleName;
	}
	public void setR_Description(String r_Description) {
		R_Description = r_Description;
	}
	public String getR_Description() {
		return R_Description;
	}
}
