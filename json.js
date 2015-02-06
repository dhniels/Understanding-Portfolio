//EXAMPLE JSON DATA

var family = {
	"jason" : {
		"name" : "Jason Lengstorf",
		"age" : "24",
		"gender" : "male"
	},
	"kyle" : {
		"name" : "Kyle Lengstorf",
		"age" : "21",
		"gender" : "male"
	}
} 


// ACCESSING INFORMATION

document.write(family.jason.name); // Output: Jason Lengstorf
document.write(family.kyle.age); // Output: 21
document.write(family.jason.gender); // Output: male 

//LOAD JSON DATA INTO THE BROWSER
$.ajax(
	type:'GET',
	url:"http://example.com/users/feeds/",
	data:"format=json&id=123",
	success:function(feed) {
		document.write(feed);
	},
	dataType:'jsonp'
); 