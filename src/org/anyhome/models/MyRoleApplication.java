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

/**
 * @author Ayhome
 *
 */
import com.et.ar.ActiveRecordBase;
import com.et.ar.annotations.Column;
import com.et.ar.annotations.Table;
@Table(name="Ay_RoleApplication")
public class MyRoleApplication extends ActiveRecordBase {
	@Column private Integer A_RoleID;
	@Column private Integer A_ApplicationID;
	public void setA_RoleID(Integer a_RoleID) {
		A_RoleID = a_RoleID;
	}
	public Integer getA_RoleID() {
		return A_RoleID;
	}
	public void setA_ApplicationID(Integer a_ApplicationID) {
		A_ApplicationID = a_ApplicationID;
	}
	public Integer getA_ApplicationID() {
		return A_ApplicationID;
	}
}
