/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-10-29
 * history:  created by Anyhome
 * ***********************************************/
 
package org.anyhome.controllers;

import java.util.HashMap;
import java.util.Map;

import com.et.mvc.Controller;

public class ApplicationController extends Controller {	
	
	public Map PojoToMap(Object obj) {
		  Map hashMap = new HashMap();
		  try {
		   Class c = obj.getClass();
		   java.lang.reflect.Method m[] = c.getDeclaredMethods();
		   for (int i = 0; i < m.length; i++) {
		    if (m[i].getName().indexOf("get")==0) {
		     hashMap.put(m[i].getName(), m[i].invoke(obj, new Object[0]));
		    }
		   }
		  } catch (Throwable e) {
		   System.err.println(e);
		  }
		  return hashMap;
		}
}
