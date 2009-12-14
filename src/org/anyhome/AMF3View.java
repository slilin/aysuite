/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-10-30
 * history:  created by Anyhome
 * ***********************************************/
 
package org.anyhome;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.et.mvc.View;
import com.et.mvc.ViewRendererClass;

@ViewRendererClass(AMF3ViewRenderer.class)
public class AMF3View extends View {
	private Object amf3pojo;
	public AMF3View(Object amf3pojo){
		//this.amf3pojo = PojoToMap(amf3pojo);
		this.amf3pojo = amf3pojo;
	}	
	
	/**
	 * @param amf3pojo the amf3pojo to set
	 */
	public void setAmf3pojo(Object amf3pojo) {
		this.amf3pojo = amf3pojo;
	}
	
	/**
	 * @return the amf3pojo
	 */
	public Object getAmf3pojo() {
		return amf3pojo;
	}	
}
