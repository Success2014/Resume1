/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("name");
// [string].replace([old],[new])



var name = "Neo Xu";
var role = "Data Analyzing Ninja";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//var skills = ["Python", "Machine Learning", "JavaScript"];
var bio = {
	"name" : "Neo Xu",
	"role" : "Data Analyzing Ninja",
	"contacts" : {
		"mobile": "334-333-3333",
		"email": "ahha@gmail.com",
		"github": "Success2014",
		"twitter": "@xuyi931",
		"location": "Auburn, AL"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMSG" : "Welcome to Neo's HomePage!",
	"skills" : ["Python", "Machine Learning", "JavaScript", "R"]
};

//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contacts);
//$("#main").append(bio.bioPic);
//$("#main").append(bio.welcomeMSG);
//$("#main").append(bio.skill);


var work = {
	"jobs":[
		{
			"employer": "Auburn University",
			"title": "Research Assistant",
			"location": "Auburn, AL",
			"dates": "Jan 2011 - Aug 2015",
			"descriptions": "Conducted research in wireless networking"
		},
		{
			"employer": "NEC Lab America",
			"title": "Research Intern",
			"location": "Princeton, NJ",
			"dates": "May 2013 - Aug 2013",
			"descriptions": "Conducted research in wireless networking"
		},
		{
			"employer": "Tsinghua University",
			"title": "Research Associate",
			"location": "Beijing, China",
			"dates": "Aug 2010 - Dec 2010",
			"descriptions": "Conducted research in wireless networking"
		}
	]
};

var projects = {
	"projects":[
		{
			"title": "User Grouping in Massive MIMO System",
			"dates": "Apr 2012 - Aug 2014",
			"descriptions": "Proposed novel clustering techniques.",
			"images":""
		},
		{
			"title": "Human or Robot?",
			"dates": "March 2015 - May 2015",
			"descriptions": "Predicted whether a user was a human or robot.",
			"images":""
		},
		{
			"title": "Analyzing New York Subway Data",
			"dates": "Apr 2015 - May 2015",
			"descriptions": "Predicted the number of rider of new york city subway.",
			"images":""
		}
	]
};


//$("#main").append(work["position"]);
//$("#main").append(education.name)


var educationnew = {
	"schools": [
		{
			"name":"Auburn University",
			"location":"Auburn, AL",
			"major":"ECE",
			"degree":"PhD",
			"dates":"Jan 2011 - May 2015",
			"url":"http://www.auburn.edu"
		},
		{
			"name":"Auburn University",
			"location":"Auburn, AL",
			"degree": "Master",
			"major":"Statistics",
			"dates":"Aug 2012 - Aug 2014",
			"url":"http://www.auburn.edu"
		},
		{
			"name":"Tsinghua University",
			"location":"Beijing, China",
			"degree": "Master",
			"major":"EE",
			"dates":"Sep 2007 - Jul 2010",
			"url":"http://www.tsinghua.edu.cn/publish/newthuen/index.html"
		}
	],
	"onlineCourses":[
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates":"Jul 2015",
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "Machine Learning",
			"school": "Coursera",
			"dates":"Jan 2015 - Apr 2015",
			"url":"https://www.coursera.org/learn/machine-learning/home/info"
		}
	]

};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}




function displayWork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descriptions);
	$(".work-entry:last").append(formattedDescription);
}
}

displayWork();




/*function inName(name) {
	name = name.trim().split(' ');
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
*/



projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descriptions);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}

		}
	}
}

projects.display()



$("#mapDiv").append(googleMap);