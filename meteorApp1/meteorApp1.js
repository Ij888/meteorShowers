Images = new Mongo.Collection("images");
	console.log(Images.find().count);

if (Meteor.isClient) {
    var img_data = [
	{img_src:"mtr.jpg", img_alt:"a meteor"},
	{img_src:"geyser.jpg", img_alt:"a geyser"},
	{img_src:"anthill.jpg", img_alt:"an anthill"},
	{img_src:"bolts.jpg", img_alt:"some old bolts"}
	];
	//console.log("client")
	
	Template.dataStore.helpers({delta:img_data});//what nuance is this-- delta:img_data??
	//dataStore above needs be the same name as the template in webApp1.html
   
   Template.dataStore.events({
	   'click .js-image':function(event){
		   //alert("an image.");
		   //console.log(event);
		   $(event.target).css("width", "100%");
	   }
	   
   })
}

if (Meteor.isServer) {
   console.log("server")
}
