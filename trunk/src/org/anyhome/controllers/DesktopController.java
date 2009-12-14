/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-12-8
 * history:  created by Anyhome
 * ***********************************************/
 
/**
 * 
 */
package org.anyhome.controllers;

import java.util.List;

import org.anyhome.models.MyModule;

import com.et.ar.exception.ActiveRecordException;
import com.et.mvc.FreeMarkerView;

/**
 * @author anyhome
 *
 */
public class DesktopController extends ApplicationController {
	public FreeMarkerView index() throws ActiveRecordException{
		FreeMarkerView view = new FreeMarkerView();		
		List<MyModule> myModule = MyModule.findAll(MyModule.class,"M_Close=0",
				new Object[]{});
		view.setAttribute("myModule", myModule);
		return view;
	}
}
