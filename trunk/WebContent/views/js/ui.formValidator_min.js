/* jQuery UI FormValidator (09.11.09)
 * Copyright (c) 2009 Felix Nagel for Namics (Deustchland) GmbH
 * Licensed under Creative Commens Attribution-Share Alike 3.0 Unported (http://creativecommons.org/licenses/by-sa/3.0/)
 */
(function(a){a.widget("ui.formValidator",{_init:function(){var c=this.options,b=this;b._updateVirtualBuffer();if(c.submitUrl==""){c.submitUrl=b.element.attr("action");}b.element.submit(function(d){if(!c.disabled){b.formSubmitted();}return c.disabled;});if(c.validateLive&&!c.disabled){b.element.find("#ui-formular-info").append('\t<p><a id="ui-formular-live" href="#nogo">'+c.validateOff+"</a></p>\n\t\t");b._updateVirtualBuffer();b.element.find("#ui-formular-live").toggle(function(){c.validateLive=false;a(this).attr("aria-live","polite").attr("aria-relevant","text").html(c.validateOn);b._updateVirtualBuffer();},function(){c.validateLive=true;a(this).attr("aria-live","polite").attr("aria-relevant","text").html(c.validateOff);b._updateVirtualBuffer();});}b._makeHover(b.element.find("input:submit, input:reset"));errors=b.options.errorsArray;a.each(c.forms,function(f){errors[f]=[];var d=b.element.find("#"+f);if(!d.length){d=b.element.find("input."+f);if(!d.length){alert("Error: Configuration corrupted!\n\nCan' find element with id or name = "+f);}else{value="group";b._makeHover(d.next());d.bind("mouseenter",function(){a(this).next().addClass("ui-state-hover");}).bind("mouseleave",function(){a(this).next().removeClass("ui-state-hover");}).bind("focus",function(){a(this).next().addClass("ui-state-focus");}).bind("blur",function(){a(this).next().removeClass("ui-state-focus");});}}else{b._makeHover(d);if(c.forms[f].rules.required){d.attr("aria-required",true);}if(d[0].nodeName.toLowerCase()=="select"){value="select";}else{value="single";}}c.forms[f].element=d;c.forms[f].type=value;if(c.validateLive){if(c.forms[f].type!="group"){var e="keypress";if(c.forms[f].type=="select"){e="change";}}else{var e="change";}c.forms[f].element.bind(e,function(){if(c.validateLive&&!c.disabled){if(c.forms[f].timeout){window.clearTimeout(c.forms[f].timeout);}if(f=="captcha"){var g=c.validateTimeout*3;}else{var g=c.validateTimeout;}c.forms[f].timeout=window.setTimeout(function(){b._validator(c.forms[f].element,f,errors);b._showErrors(false);},g);}});}});c.errorsArray=errors;b._trigger("onInit",0);},_validator:function(d,g,f){var c=this.options,b=this;var e=b._getValue(g);a.each(c.forms[g].rules,function(h,i){if(e==""){if(h!="required"){f[g][h]=b._whichError(true,f[g][h]);}if(h=="required"&&i){f[g][h]=b._whichError(false,f[g][h]);}}else{if(h=="required"&&i){f[g][h]=b._whichError(true,f[g][h]);}switch(h){case"regEx":switch(i){case"number":f[g][h]=b._whichError(b._number(e),f[g][h]);break;case"numberDE":f[g][h]=b._whichError(b._numberDE(e),f[g][h]);break;case"numberISO":f[g][h]=b._whichError(b._numberISO(e),f[g][h]);break;case"email":f[g][h]=b._whichError(b._email(e),f[g][h]);break;case"url":f[g][h]=b._whichError(b._url(e),f[g][h]);break;case"plz":f[g][h]=b._whichError(b._plz(e),f[g][h]);break;case"dateDE":f[g][h]=b._whichError(b._dateDE(e),f[g][h]);break;case"dateISO":f[g][h]=b._whichError(b._dateISO(e),f[g][h]);break;case"captcha":f[g][h]=b._whichError(b._captcha(e),f[g][h]);break;default:f[g][h]=b._whichError(b._regEx(e,i),f[g][h]);break;}break;case"lengthMin":f[g][h]=b._whichError(b._lengthMin(e,i),f[g][h]);break;case"lengthMax":f[g][h]=b._whichError(b._lengthMax(e,i),f[g][h]);break;case"equalTo":f[g][h]=b._whichError(b._equalTo(e,i),f[g][h]);break;case"custom":f[g][h]=b._whichError(i(e),f[g][h]);break;}}});b.options.errorsArray=f;},formSubmitted:function(){var c=this.options,b=this;b._trigger("onformSubmitted",0);b.element.find("#ui-formular-success").remove();errors=b.options.errorsArray;a.each(c.forms,function(f){var e=false;var d=c.forms[f].element;if(c.forms[f].type=="single"){b._validator(d,f,errors);}else{if(!e){e=true;b._validator(d,f,errors);}}});b._showErrors(true);},_showErrors:function(k){var n=this.options,m=this;var g,o,d=false;var j=msg="";var l=m.options.errorsArray;for(var b in l){var c=false;for(var i in l[b]){if(l[b][i]=="corrected"){var f=n.forms[b].element;f.attr("aria-invalid",false);if(n.forms[b].type=="group"){f=f.next();}f.removeClass("ui-state-error");d=true;}if(l[b][i]=="new"||l[b][i]=="old"){switch(i){case"required":msg=n.forms[b].msg.required;break;case"regEx":msg=n.forms[b].msg.regEx;break;case"lengthMin":msg=n.forms[b].msg.length;break;case"lengthMax":msg=n.forms[b].msg.length;break;case"equalTo":msg=n.forms[b].msg.equalTo;break;case"custom":msg=n.forms[b].msg.custom;break;}j+='					<li><a href="#'+b+'">'+msg+"</a></li>\n";g=c=true;}if(l[b][i]=="new"){o=true;}}if(c){var f=n.forms[b].element;f.attr("aria-invalid",true);if(n.forms[b].type=="group"){f=f.next();}f.addClass("ui-state-error");}}var h=' aria-live="assertive"';if(o||d){h+=' aria-relevant="text';}if(o){h+=" additions";}if(d){h+=" removals";}if(o||d){h+='"';}var e="\n";if(g){e+="			<div"+h+' class="info ui-state-highlight ui-state ui-corner-all">'+"\n";e+='				<p id="ui-error-title">'+"\n";e+='					<span class="ui-icon ui-icon-alert" style="float: left; margin-right: 0.3em;"></span>'+"\n";e+="					"+n.errorsTitle+"\n";e+="				</p>"+"\n";e+='				<ul aria-labelledby="ui-error-title">'+"\n";e+=j;e+="				</ul>"+"\n";e+="			</div>"+"\n\t\t";}errorElement=m.element.find("#ui-formular-error");errorElement.html(e);if(g){errorElement.find("a").click(function(p){p.preventDefault();var r=a(this).attr("href").split("#");r=r[1];if(n.forms[r].type=="single"){var q=n.forms[r].element;}else{var q=n.forms[r].element[0];}q.focus();});if(k){errorElement.attr("tabindex",-1).focus();}}else{if(k){m._sendForm();}}m._updateVirtualBuffer();m._trigger("onShowErrors",0);},_sendForm:function(){var d=this.options,c=this;switch(d.submitHowTo){case"post":d.disabled=true;c.element.submit();break;case"ajax":a.ajax({data:c.element.serialize(),type:"post",url:d.submitUrl,error:function(f){c._showSuccess(f);},success:function(f){c._showSuccess(f);}});break;case"iframe":d.originalUrl=c.element.attr("action");c.element.attr("action",d.submitUrl);var b=("upload"+(new Date()).getTime());var e=a('<iframe name="'+b+'"></iframe>');e.css("display","none");e.load(function(f){c._showSuccess(a(this).contents().find("body").html());d.timeout=window.setTimeout(function(){e.remove();},200);});a("body").append(e);c.element.attr("target",b);d.disabled=true;c.element.submit();break;}},_showSuccess:function(f){var c=this.options,b=this;var g="",e="";c.disabled=false;switch(f){case"true":g=c.submitSuccess;e="check";break;case"false":g=c.submitError;e="alert";break;default:g=f;e="alert";}var d="\n";d+='		<div id="ui-formular-success">'+"\n";d+='			<div aria-live="assertive" class="info ui-state-highlight ui-state ui-corner-all">'+"\n";d+="				<p>"+"\n";d+='					<span class="ui-icon ui-icon-'+e+'" style="float: left; margin-right: 0.3em;"></span>'+"\n";d+="					"+g+"\n";d+="				</p>"+"\n";d+="			</div>"+"\n\t\t";d+="		</div>"+"\n\t\t";b.element.prepend(d);b.element.find("#ui-formular-success").attr("tabindex",-1).focus();b._updateVirtualBuffer();b._trigger("onShowSuccess",0);},_whichError:function(b,d){var c="";if(!b){if(d=="new"||d=="old"){c="old";}else{c="new";}}else{if(d=="new"||d=="old"){c="corrected";}else{if(d=="corrected"){c="";}}}return c;},_getValue:function(g){var d=this.options,c=this;var e=d.forms[g].type;var f="";switch(e){case"single":f=d.forms[g].element.val();break;case"group":var b=d.forms[g].element.filter(":checked");f=(b.length)?b:"";break;case"select":var b=d.forms[g].element.find("option").filter(":selected");f=(b.length)?b:"";break;}return f;},_makeHover:function(b){b.bind("mouseenter",function(){a(this).addClass("ui-state-hover");}).bind("mouseleave",function(){a(this).removeClass("ui-state-hover");}).bind("focus",function(){a(this).addClass("ui-state-focus");}).bind("blur",function(){a(this).removeClass("ui-state-focus");});},_regEx:function(c,b){b=new RegExp(b);return b.test(c);},_number:function(b){return/^\d+$/.test(b);},_numberDE:function(b){return/^[-+]?([0-9]*\,)?[0-9]+$/.test(b);},_numberISO:function(b){return/^[-+]?([0-9]*\.)?[0-9]+$/.test(b);},_email:function(b){return/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test(b);},_url:function(b){return/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(b);},_plz:function(b){return/^\b((?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3}))\b$/.test(b);},_dateDE:function(b){return/^\d\d?\.\d\d?\.\d\d\d?\d?$/.test(b);},_dateISO:function(b){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(b);},_lengthMin:function(b,c){return(b.length>=c)?true:false;},_lengthMax:function(b,c){return(b.length<=c)?true:false;},_equalTo:function(b,c){return(b==a("#"+c).val())?true:false;},_captcha:function(b,c){return this._trigger("checkCaptcha",null,b);},destroy:function(){var b=this.options;a.each(b.forms,function(c){b.forms[c].element.removeClass("ui-state-error").removeClass("ui-state-hover").removeAttr("aria-invalid").removeAttr("aria-required").unbind();if(b.forms[c].type=="group"){b.forms[c].element.next().removeClass("ui-state-error").removeClass("ui-state-hover").removeAttr("aria-invalid").removeAttr("aria-required").unbind();}});this.element.unbind(".formValidator").unbind("submit").removeData("formValidator");if(b.originalUrl!=""){this.element.attr("action",b.originalUrl);}this.element.find("#ui-formular-live, ##ui-formular-error, #ui-formular-success").remove();a("#virtualBufferForm").parent().remove();},_updateVirtualBuffer:function(){var c=a("#virtualBufferForm");if(c.length){(c.val()=="1")?c.val("0"):c.val("1");}else{var b='<form><input id="virtualBufferForm" type="hidden" value="1" /></form>';a("body").append(b);}}});a.extend(a.ui.formValidator,{version:"1.7.1",defaults:{validateLive:true,validateTimeout:500,validateOff:"Bitte klicken Sie hier um die Live Validierung zu deaktivieren.",validateOn:"Bitte klicken Sie hier um die Live Validierung zu aktivieren.",errorsTitle:"Bitte korrigieren Sie folgende Fehler:",submitHowTo:"ajax",submitUrl:"",submitError:"Bei der Datenübertragung ist ein Fehler aufgetreten. Entschuldigen Sie bitte und versuchen Sie es noch einmal.",submitSuccess:"Die Daten wurden erfolgreich übermittelt. Vielen Dank!",errorsArray:[],originalUrl:""}});})(jQuery);