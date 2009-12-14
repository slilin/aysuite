/* ***********************************************
 * author :  Anyhome
 * email  :  ayhome@gmail.com 
 * function: 
 * @date 2009-10-27
 * history:  created by Anyhome
 * ***********************************************/
 
package org.anyhome.controllers.AppManager;

import com.et.mvc.Controller;
import com.et.mvc.TextView;

public class HelloController extends Controller {
    public TextView say(){
        return new TextView("hello,world!!!!ayhome");
    }
}
