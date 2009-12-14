<%@ page
	import="java.sql.ResultSet"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
<form action="CreateAR" method="post" name="form1" >
<table>
<tr>
	<td>数据表</td>
	<td>
	<select id="tableName" name="tableName">
	<%
	ResultSet resultSet = (ResultSet)request.getAttribute("tablelist") ;
		while (resultSet.next()) {
	      String tableName = resultSet.getString(3);	    
	%>	
		<option value="<%=tableName %>"><%=tableName%></option>
		<%}%>
	</select>
	</td>
	<td> <input type="submit" value="确定" > </td>
</tr>
</table>
</form>


</body>
</html>