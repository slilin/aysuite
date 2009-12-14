/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-11-16
 * history:  created by Anyhome
 * ***********************************************/
 
/**
 * 
 */
package org.anyhome.controllers.AppManager;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.anyhome.AMF3View;
import org.anyhome.controllers.ApplicationController;
import org.anyhome.models.MyModule;

import com.et.ar.exception.ActiveRecordException;
import com.et.mvc.JsonView;

/**
 * @author Ayhome
 *
 */
public class ModuleController extends ApplicationController {

	public void index(){
		
	}
	
	public JsonView GetAllJson() throws ActiveRecordException{
		List<MyModule> myModule = MyModule.findAll(MyModule.class);
		return new JsonView(myModule);
	}
	
	public AMF3View List(int id) throws ActiveRecordException{
		List<MyModule> myModule = MyModule.findAll(MyModule.class,"M_ParentID=? and M_Close=0",
				new Object[]{id});
		List<Map> lst = new ArrayList<Map>(); 
		for(MyModule items:myModule)
		{
			lst.add(PojoToMap(items));
		}
		return new AMF3View(lst);
	}
	
	public void SaveEdit(MyModule myModule){
		
	}
	
	public void SaveCreate(MyModule myModule){
		
	}
	
	public void Delete(int id){
		
	}	
}
