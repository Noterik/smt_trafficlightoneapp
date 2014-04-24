/* 
* signal.js
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

function Signal(options){

	var self = {};
	var settings = {};
	$.extend(settings, options);

	self.subscribe = function(observable, subscriber) {
		eddie.putLou('signal', 'subscribe(' + subscriber + ',' + observable + ')', false);
	}

	self.unsubscribe = function(observable, subscriber) {
		eddie.putLou('signal', 'unsubscribe(' + subscriber + ',' + observable + ')', false);
	}

	self.notify = function(source, action){
		eddie.putLou('signal', 'notify(' + source + ',' + action + ')', false);
	}

	self.putMsg = function(msg){
		try{
			var command = [msg.target[0].class];
		}catch(e){
			command = $(msg.currentTarget).attr('class').split(" ");
		}
		var content = msg.content;
		for(i=0;i<command.length;i++){
			switch(command[i]) { 
			}
		}
		console.log('signal.putMsg()');
	}

	return self;
}