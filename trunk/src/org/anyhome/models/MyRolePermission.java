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
/**
 * @author Ayhome
 *
 */
@Table(name="Ay_RolePermission")
public class MyRolePermission extends ActiveRecordBase {
	@Id private Integer PermissionID;
	@Column private Integer P_RoleID;
	@Column private Integer P_ApplicationID;
	@Column private String P_PageCode;
	@Column private Integer P_Value;
	public Integer getPermissionID() {
		return PermissionID;
	}
	public void setP_RoleID(Integer p_RoleID) {
		P_RoleID = p_RoleID;
	}
	public Integer getP_RoleID() {
		return P_RoleID;
	}
	public void setP_ApplicationID(Integer p_ApplicationID) {
		P_ApplicationID = p_ApplicationID;
	}
	public Integer getP_ApplicationID() {
		return P_ApplicationID;
	}
	public void setP_PageCode(String p_PageCode) {
		P_PageCode = p_PageCode;
	}
	public String getP_PageCode() {
		return P_PageCode;
	}
	public void setP_Value(Integer p_Value) {
		P_Value = p_Value;
	}
	public Integer getP_Value() {
		return P_Value;
	}
}
