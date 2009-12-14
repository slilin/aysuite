<#include "/common/control.ftl">

<div class="window_aside">
</div>
<div class="window_main">
	<table class="data" id="Applications">
		<tr>
			<th class="shrink" >
				&nbsp;
			</th>
			<th>
				应用ID
			</th>							
			<th>
				应用名称
			</th>
			<th>
				应用地址
			</th>
			<th>
				应用描述
			</th>
		</tr>
		<#list myApp as item>	
		<tr>
			<td>				
				<@ImgQButton id="Delete" action="Delete" title="删除" class="close"/>
			</td>	
			<td>
				${item.applicationID}
			</td>	
			<td>
				${item.a_AppName}
			</td>
			<td>
				${item.a_AppUrl}
			</td>
			<td>
				${item.a_AppDescription}
			</td>	
		</tr>		
		</#list>						
	</table>	
	<@ImgQButton id="Add" action="Add" title="新增" class="plusthick"/>
	<@AButton id="Add" icon="Add" class="l-btn-plain" title="新增" />
</div>
<div id="appid">
	<table>
		<tr>
			<td colspan="2">								
				<@ImgQButton action="Save" title="保存" class="disk"/> &nbsp;			
				<@ImgQButton action="Delete" title="取消" class="circle-close"/>		
			<td>
				<input type="text" id="a_AppName" name="a_AppName" class="text ui-widget-content ui-corner-all" /> 
			</td>	
			<td>
				<input type="text" id="a_AppUrl" name="a_AppUrl" class="text ui-widget-content ui-corner-all" /> 
			</td>
			<td>
				<input type="text" id="a_AppDescription" name="a_AppDescription" class="text ui-widget-content ui-corner-all" /> 
			</td>
		</tr>
	</table>
</div>

<script>
$(function() {		
	$('#appid').hide()
	$('div.window_main').find('A#Add').click(function(){
		$('table#Applications').append($('#appid>table>tbody>tr').clone());
		return false;
	});	
});		
</script>