var projects = [
	{"name": "project2", "display": false, 
	"description" : "A really cool website project using bootstrap.", 
	"technologies": "AJAX, Responsive Design, Material Components", "image" : "<some image url>",},
	{"name": "project3", "display" : true ,
	"description" : "A really cool Chicago restaurant inspection search app.", 
	"technologies": "AJAX, Responsive Design, Material Components", "image" : "<some image url>",},
	{"name": "project4", "display" : true ,
	"description" : "A really cool game app.", 
	"technologies": "AJAX, Responsive Design, Material Components", "image" : "<some image url>",},
	{"name": "project5", "display" : true ,
	"description" : "A really cool weather app.", 
	"technologies": "AJAX, Responsive Design, Material Components", "image" : "<some image url>",},
	{"name": "project7", "display" : true ,
	"description" : "A really cool airhorn project.", 
	"technologies": "AJAX, Responsive Design, Material Components", "image" : "<some image url>",},
	


]



var autotemp =  $("#projs");
      
$.each(projects, function(i,v) {
	var template= "<tr><td><div class='resume-content mr-auto'>" +
              "<h3 class='mb-0'>" + v.name + "</h3>" +
              "<div class='subheading mb-3'>" + v.description +"</div>"+
              "<p>" + v.technologies + "</p>"+
              "</div></td><td><span>Image Place Holder"+ 
              v.image 
              +"</span></td></tr>";
	autotemp.append(template);
});