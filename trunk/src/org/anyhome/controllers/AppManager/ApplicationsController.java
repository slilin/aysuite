/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-10-30
 * history:  created by Anyhome
 * ***********************************************/
 
package org.anyhome.controllers.AppManager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.anyhome.AMF3View;
import org.anyhome.controllers.ApplicationController;
import org.anyhome.models.MyApplications;
import org.anyhome.models.MyModule;
import org.anyhome.models.MyUser;

import com.et.ar.exception.ActiveRecordException;
import com.et.mvc.FreeMarkerView;


public class ApplicationsController extends ApplicationController {
	/*
	public AMF3View index() throws Exception{
		List<MyApplications> myApp = MyApplications.findAll(MyApplications.class);
		List<Map> lst = new ArrayList<Map>(); 
		for(MyApplications items:myApp)
		{
			lst.add(PojoToMap(items));
		}
		return new AMF3View(lst);
	}
	*/
	public FreeMarkerView index() throws ActiveRecordException{
		FreeMarkerView view = new FreeMarkerView();		
		List<MyApplications> myApp = MyApplications.findAll(MyApplications.class);
		view.setAttribute("myApp", myApp);
		return view;	
	}
	public void Edit(int id){
		
	}
	
	public void SaveEdit(MyApplications myApp){
		
	}
	
	public void Create(){
		
	}
	
	public void SaveCreate(){
		
	}
	
	public void Details(int id){
		
	}
	
	public void Delete(int Id){
		
	}
	
	public AMF3View test() throws ActiveRecordException{
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		MyUser myUser = MyUser.findFirst(MyUser.class,"U_LoginName=?",
				new Object[]{userName});
		return new AMF3View(myUser);		
	}		
}

