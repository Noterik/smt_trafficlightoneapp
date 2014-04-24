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