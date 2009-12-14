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
@Table(name="Ay_Group")
public class MyGroup extends ActiveRecordBase {
	@Id private Integer GroupID;
	@Column private String G_CName;
	@Column private String G_ParentID;
	@Column private String G_ShowOrder;
	@Column private String G_Level;
	@Column private String G_ChildCount;
	@Column private String G_Delete;
	public Integer getGroupID() {
		return GroupID;
	}
	public void setG_CName(String g_CName) {
		G_CName = g_CName;
	}
	public String getG_CName() {
		return G_CName;
	}
	public void setG_ParentID(String g_ParentID) {
		G_ParentID = g_ParentID;
	}
	public String getG_ParentID() {
		return G_ParentID;
	}
	public void setG_ShowOrder(String g_ShowOrder) {
		G_ShowOrder = g_ShowOrder;
	}
	public String getG_ShowOrder() {
		return G_ShowOrder;
	}
	public void setG_Level(String g_Level) {
		G_Level = g_Level;
	}
	public String getG_Level() {
		return G_Level;
	}
	public void setG_ChildCount(String g_ChildCount) {
		G_ChildCount = g_ChildCount;
	}
	public String getG_ChildCount() {
		return G_ChildCount;
	}
	public void setG_Delete(String g_Delete) {
		G_Delete = g_Delete;
	}
	public String getG_Delete() {
		return G_Delete;
	}
}
