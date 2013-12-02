  $(document).ready(function () { 						 
    var buttonpressed;	
	var strin;
	var data_len;
	debugger;
	$('.submitbutton').click(function(){
	    buttonpressed = $(this).attr('name');
			if( buttonpressed=="products"){
				$.mobile.changePage('#two',{transition:'flip'});
				//debugger;
				
				strin = "<thead><tr><th>ID</th><th>Name</th><th>Description</th></tr></thead>";
				var url_products = "http://services.odata.org/V3/(S(b2rgqwb2jrscjyextugyav2p))/OData/OData.svc/Products?$format=json";
				//$('#resultList').text("");
				$('#result_data').text("");
				$('#StatusDiv').text("Please wait,Loading data...");
				//$('#resultList').empty();
				//$('#resultList').append("<li class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='d'>" + "ID" +" " + "Name" + " " + "Description" + "</li><br></br>");
				$.getJSON( url_products, function(results){
				//$('#resultsList').text("");
                $.each(results.value, function(i, item) {
				//debugger;
					//$('#resultList').append("<li class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='d'>" + (item.ID + 1) +" " + item.Name + " " + item.Description + "</li>");
					data_len = results.value.length;
					strin= strin + "<tbody><tr><th>" + (item.ID+1) + "</th><td>" + item.Name + "</td><td>" + item.Description + "</td></tr></tbody>";
					if (i=data_len){
						$('#result_data').html(strin);
					$('#StatusDiv').hide();
					}
                });	
				
            });
		
		
		}	else if( buttonpressed=="advertisements"){
		var url_advertisements = "http://services.odata.org/V3/(S(b2rgqwb2jrscjyextugyav2p))/OData/OData.svc/Advertisements";
		//debugger;
		$.mobile.changePage('#two',{transition:'flip'});
		strin = "<thead><tr><th>ID</th><th>Name</th><th>Airdate</th></tr></thead>";
		$('#resultList').text("");
            $('#StatusDiv').text("Please wait,Loading data...");
			//$('#resultList').empty();
			$('#result_data').text("");
			//$('#resultList').append("<li class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='d'>" + "ID" + " " + "Name" + " " + "AirDate" + "</li><br></br>");
			$.getJSON( url_advertisements, function(results){
				//$('#resultsList').text("");
					
                $.each(results.value, function(i, item) {
					//$('#resultList').append("<li class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='c'>" + (i+1) + " " + item.Name + " " + item.AirDate + "</li>");
					data_len = results.value.length;
					strin= strin + "<tbody><tr><th>" + (i+1) + "</th><td>" + item.Name + "</td><td>" + item.AirDate + "</td></tr></tbody>";
					if (i=data_len){
						$('#result_data').html(strin);
					$('#StatusDiv').hide();
					}
                     });
                 });
    } else if( buttonpressed=="categories"){
        /* specific code for button3 */
		var url_categories = "http://services.odata.org/V3/(S(b2rgqwb2jrscjyextugyav2p))/OData/OData.svc/Categories";
		//debugger;
		$.mobile.changePage('#two',{transition:'flip'});
		strin = "<thead><tr><th>ID</th><th>Name</th></tr></thead>";
		//$.mobile.changePage('#two','flip', {reloadPage: true});
		//$('#resultList').text("");
			$('#result_data').text("");
            $('#StatusDiv').text("Please wait,Loading data...");
			//$('#resultList').empty();
			//$('#resultList').append("<li class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='d'>" + "ID" +" " + "Name" +  "</li><br></br>");
			$.getJSON( url_categories, function(results){
				//$('#resultsList').text("");
                $.each(results.value, function(i, item) {
					//$('#resultList').append("<li class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='c'>" + (item.ID + 1) +" " + item.Name +  "</li>");
					data_len = results.value.length;
					strin= strin + "<tbody><tr><th>" + (item.ID+1) + "</th><td>" + item.Name + "</td></tr></tbody>";
					if (i=data_len){
						$('#result_data').html(strin);
					$('#StatusDiv').hide();
					}
                     });
	            });
    } else if( buttonpressed=="suppliers"){
        /* specific code for button4 */
		//debugger;
		var url_suppliers = "http://services.odata.org/V3/(S(b2rgqwb2jrscjyextugyav2p))/OData/OData.svc/Suppliers";
		$.mobile.changePage('#two',{transition:'flip'});
		strin = "<thead><tr><th>ID</th><th>Name</th><th>Address</th></tr></thead>";
		//$.mobile.changePage('#two','flip', {reloadPage: true});
		$('#resultList').text("");
            $('#StatusDiv').text("Please wait,Loading data...");
			//$('#resultList').empty();
			//$('#resultList').append("<li class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='d'>" + "ID" +" " + "Name" + " " + "Address" + "</li><br></br>")
			
			$.getJSON( url_suppliers, function(results){
				//$('#resultsList').text("");
				$('#result_data').text("");
                $.each(results.value, function(i, item) {
					debugger;
					//$('#resultList').append("<li class='ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c' data-corners='false' data-shadow='false' data-iconshadow='true' data-wrapperels='div' data-icon='arrow-r' data-iconpos='right' data-theme='c'>" + (item.ID + 1) +" " + item.Name + " " + item.Address + "</li>");
					data_len = results.value.length;
					strin= strin + "<tbody><tr><th>" + (item.ID+1) + "</th><td>" + item.Name + "</td><td>" + item.Address.Street+"</td></tr></tbody>";
					if (i=data_len){
						$('#result_data').html(strin);
					$('#StatusDiv').hide();
					}
                     });
                 });
		}
	});
	//debugger;
	$('.returnback').click(function(){
	
		$.mobile.changePage('#one',{transition:'turn'});
	});
	/*$('#id_load').load(function(){
		var visit = $('#visit').val();
		if(visit==""){
			 visit = "1";
			 }
		else	 
		{
		$.mobile.changePage('#one','pop', {reloadPage: true});
		}
		
		});*/
});
