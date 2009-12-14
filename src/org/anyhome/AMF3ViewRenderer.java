/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-10-30
 * history:  created by Anyhome
 * ***********************************************/
 
package org.anyhome;

import java.io.DataOutputStream;
import java.io.PrintWriter;
import java.util.zip.DeflaterOutputStream;

import com.et.mvc.ViewContext;
import com.et.mvc.renderer.AbstractViewRenderer;

import flex.messaging.io.SerializationContext;
import flex.messaging.io.amf.Amf3Output;

public class AMF3ViewRenderer extends AbstractViewRenderer<AMF3View> {

	@Override
	protected void renderView(AMF3View viewObject, ViewContext viewContext)
			throws Exception {		
		SerializationContext context = new SerializationContext();
        Amf3Output out = new Amf3Output(context);           
		DeflaterOutputStream stream = new DeflaterOutputStream(new DataOutputStream(viewContext.getResponse().getOutputStream()));  
        out.setOutputStream(stream);            
        out.writeObject(viewObject.getAmf3pojo());         
        stream.finish(); 
	}
	
}
