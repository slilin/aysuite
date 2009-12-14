<#macro AButton controller="" action="" id="" title="" auth=true disabled=true class="" xtype="" icon="" >
      <a id="${id}" href="${controller}/${action}" action="${action}" class="l-btn ${class}" icon="icon-${icon}" title="${title}">${title}</a> 
</#macro>

<#macro ImgButton controller="" action="" id="" title="" auth=true disabled=true xtype="" icon="" >
      <a id="${id}" action="${action}" href="${controller}/${action}" title="${title}"><img src="views/css/icons/${icon}.png"></a> 
</#macro>

<#macro ImgQButton controller="" action="" id="" title="" auth=true disabled=true xtype="" class="" >
      <a id="${id}" class="ui-state-default ui-icon ui-icon-${class}" action="${action}" href="${controller}/${action}/${id}" title="${title}"></a>       
</#macro>