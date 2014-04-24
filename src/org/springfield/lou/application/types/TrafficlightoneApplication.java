/* 
* TrafficlightoneApplication.java
* 
* Copyright (c) 2013 Noterik B.V.
* 
* This file is part of smt_trafficlightoneapp, an app for the multiscreen toolkit 
* related to the Noterik Springfield project.
*
* smt_trafficlightoneapp is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* smt_trafficlightoneapp is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with smt_trafficlightoneapp.  If not, see <http://www.gnu.org/licenses/>.
*/

package org.springfield.lou.application.types;

import org.springfield.lou.application.Html5Application;
import org.springfield.lou.application.components.types.external.ExternalSubscriber;
import org.springfield.lou.application.components.types.proxy.RemoteProxy;
import org.springfield.lou.screen.Capabilities;
import org.springfield.lou.screen.Screen;

/**
* Example application that shows a trafficlight on the first screen that joins
* (mainscreen) and makes the next screen(s) that join a controller to control 
* the traffic light on this main screen, allowing to change it colors.
*
* @author Daniel Ockeloen
* @copyright Copyright: Noterik B.V. 2013
* @package org.springfield.lou.application.types
*
*/
public class TrafficlightoneApplication extends Html5Application{
			
	public TrafficlightoneApplication(String id) {
		super(id, "trafficlight");
	}
	
	ExternalSubscriber es;
	public void onNewScreen(Screen s) {

		String fixedrole = s.getParameter("role");
		// so we want to load based on device type
		Capabilities caps = s.getCapabilities();
		String dstyle = caps.getDeviceModeName();
		
		// try to load special style first if not fallback.

		// Do we already have a screen in the application that claims to be a mainscreen ?
		if (screenmanager.hasRole("mainscreen") && (fixedrole==null || !fixedrole.equals("mainscreen"))) {
			System.out.println("LOADING TRAFFICCONTROLLER STYLESHEET");
			loadStyleSheet(s,"trafficcontroller",appname);
			// yes, so this is a secondary screen, set its role and load its components
			s.setRole("secondaryscreen");
			loadContent(s, "trafficlightcontroller");
		} else {
			loadStyleSheet(s,"generic",appname);
			s.setRole("mainscreen");
			loadContent(s, "trafficlight");
		}
		loadContent(s, "signal");
		loadContent(s, "notification");
		if(!this.paired) s.putMsg("notification", "", "showlong(pair id: " +this.externalInterfaceId+")");
	}
}