<%@ page import="java.sql.ResultSetMetaData" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<%
		ResultSetMetaData rsmd = (ResultSetMetaData)request.getAttribute("tableinfo") ;	 
		String table = (String)request.getParameter("tableName") ;	
	%>	
<pre>

/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-10-30
 * history:  created by Anyhome
 * ***********************************************/
 
package org.anyhome.models;

import com.et.ar.ActiveRecordBase;
import com.et.ar.annotations.Column;
import com.et.ar.annotations.Id;
import com.et.ar.annotations.Table;

@Table(name="<%=table%>")
public class <%=table%> extends ActiveRecordBase {
	<%
        for(int i=1;i<=rsmd.getColumnCount();i++)
        {
        	String s = rsmd.getColumnTypeName(i);
        	String sid = "Column";
        	if (s.trim().equalsIgnoreCase("int"))  
        		s = "Integer";
        	else if(s.trim().equalsIgnoreCase("int identity")) 
        	{
        		s = "Integer"; 
        		sid = "Id";
        	}
        	else
        		s = "String";
        	String outs = "@"+sid+" private " + s + " "
			+rsmd.getColumnName(i);
        	%>
        <%=outs %>
        	<%        	
        }
	 %>
	 
	<%
        for(int i=1;i<=rsmd.getColumnCount();i++)
        {
        	String s = rsmd.getColumnTypeName(i);
        	String sid = "Column";
        	if (s.trim().equalsIgnoreCase("int"))  
        		s = "Integer";
        	else if(s.trim().equalsIgnoreCase("int identity")) 
        	{
        		s = "Integer"; 
        		sid = "Id";
        	}
        	else
        		s = "String";
        	%>
	public void set<%=rsmd.getColumnName(i)%>(<%=s %> <%=rsmd.getColumnName(i).replaceFirst(String.valueOf(rsmd.getColumnName(i).charAt(0)), String.valueOf(rsmd.getColumnName(i).charAt(0)).toLowerCase()) %>) {
		<%=rsmd.getColumnName(i)%> = <%=rsmd.getColumnName(i).replaceFirst(String.valueOf(rsmd.getColumnName(i).charAt(0)), String.valueOf(rsmd.getColumnName(i).charAt(0)).toLowerCase()) %>;
	}        	
	public <%=s %> get<%=rsmd.getColumnName(i)%>() {
		return <%=rsmd.getColumnName(i)%>;
	}        	
        	<%
        }
	 %>	 
}
</pre>
</body>
</html>