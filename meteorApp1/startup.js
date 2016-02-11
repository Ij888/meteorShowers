if (Meteor.isServer){
	Meteor.startup(function(){
		if (Images.find().count() === 0){
			Images.insert(
				{img_src:"mtr.jpg", img_alt:"a meteor"}
			);
		}//end of if #hasNoImages. append another
	});
}

if (Meteor.isClient){

}
