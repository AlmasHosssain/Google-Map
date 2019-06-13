
function initMap() {

		//Initialize the map of given location

		var option = {
			center: {lat: 23.6850, lng: -90.3563},
         	zoom : 13
		}
        
        var map = new google.maps.Map(document.getElementById('map'),option);


        //Add a marker anywhere I click

         google.maps.event.addListener(map,'click',
         	function(event){
         		addMarker({coords:event.latLng});
         });


         //Array of markArray

         var markArray =[
         	{
	         	coords:{lat : 23.4607, lng : -91.1809},
	         	content : '<h2>Bangladesh</h2>'
			},
			{
	         	coords:{lat : 20.5937, lng : -78.9629},
	         	content : '<h2>India</h2>'
        	 }

         ]
         

         //Call the marker using loop

         for (var i = 0; i <= markArray.length; i++) {
         	 addMarker(markArray[i]);
         }

         function addMarker(proops) {
         	var marker = new google.maps.Marker({
          	position : proops.coords,
         	map : map
         });


         
         //Show the name of the area where I clicked

         	if (proops.content) {

         		var infoWindow = new google.maps.InfoWindow({
		         	content: proops.content
		         })

		         marker.addListener('click',function(){
		         	infoWindow.open(map,marker);
		         });

         	}
         }     
    }