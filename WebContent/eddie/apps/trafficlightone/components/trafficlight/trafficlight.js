/* 
* trafficlight.js
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

function Trafficlight(options){
	var self = {};
	var settings = {
		'imgdirectory': '/eddie/apps/trafficlightone/img/'
};
	$.extend(settings, options);
	
	//Public function putMsg
	self.putMsg = function(msg){
		try{
			var command = [msg.target[0].class];
		}catch(e){
			command = $(msg.currentTarget).attr('class').split(" ");
		}
		var content = msg.content;

		$('#console').html("got message: " + msg.originalMessage + "</br>");
		for(i=0;i<command.length;i++){
			$('#console').html($('#console').html() + 'command is: ' + command +"</br>");
			switch(command[i]) { 
				case 'settrafficcolor':
					changeTrafficColor(content);
	  				break;
	  			case 'buttonClicked':
	  				handleButtonClick(content);
	  				break;
				default:
					console.log('unhandled msg in controller.html : ' + msg); 
			}
		}
	}

	handleButtonClick = function(content){
		var color = '';
		switch(content){
			case 'red':
				color = 'red';
				break;
			case 'yellow':
				color = 'yellow';
				break;
			case 'green':
				color = 'green';
				break;
			default:
				console.log('unkown color');

		}
		if(color!='') changeTrafficColor(color);
	}

	function changeTrafficColor(color){
		$('#console').html($('#console').html() + 'executing method changeTraficColor('+color+')');
		if(color=='green' || color=='yellow' || color=='red'){
			var img = settings.imgdirectory + "traffic_light_" + color + ".png";
			$('img#trafficcolor').attr("src", img);
		}
		else console.log("color not recognised" + color);
	}

	return self;
}