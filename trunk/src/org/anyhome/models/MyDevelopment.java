/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-12-12
 * history:  created by Anyhome
 * ***********************************************/
 
/**
 * 
 */
package org.anyhome.models;

import com.et.ar.ActiveRecordBase;
import com.et.ar.annotations.Column;

/**
 * @author Ayhome
 *
 */
public class MyDevelopment extends ActiveRecordBase {
	@Column private String Tablename;
	@Column private String DatabaseType;
	@Column private String ColumName;
	@Column private String ColumnType;
	public void setDatabaseType(String databaseType) {
		DatabaseType = databaseType;
	}
	public String getDatabaseType() {
		return DatabaseType;
	}
	public void setTablename(String tablename) {
		Tablename = tablename;
	}
	public String getTablename() {
		return Tablename;
	}
	public void setColumName(String columName) {
		ColumName = columName;
	}
	public String getColumName() {
		return ColumName;
	}
	public void setColumnType(String columnType) {
		ColumnType = columnType;
	}
	public String getColumnType() {
		return ColumnType;
	}

}
