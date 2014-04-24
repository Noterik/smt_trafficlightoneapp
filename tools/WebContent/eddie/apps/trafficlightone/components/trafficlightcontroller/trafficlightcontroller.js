function Trafficlightcontroller(options){
	var self = {};
	var settings = {};
	$.extend(settings, options);
	
	self.putMsg = springfield_function(msg){
		try{
			var command = [msg.target[0].class];
		}catch(e){
			command = $(msg.currentTarget).attr('class').split(" ");
		}
		var content = msg.content;
		for(i=0;i<command.length;i++){
			switch(command[i]) {
	  			case 'html':
	  				break;
				default:
					alert('unhandled msg in byfriendslider.html : '+msg); 
			}
		}
	}

	$('.button').click(function(){
		var color = $(this).attr('id');
		$('#console').html('sending message to Lou: settrafficcolor('+color+')');
		eddie.putLou('trafficlight', 'settrafficcolor('+color+')');
	});
	
	return self;
}