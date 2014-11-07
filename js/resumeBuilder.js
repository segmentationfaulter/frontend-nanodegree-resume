// saves the bio in an object
var bio = {
		"name" : "MUHAMMAD SAQIB",
		"role" : "Web Developer",
		"contact_info" : {
					"mobile" : "+92 315 0776 708",
					"email" : "saqib@geekysense.com",
					"github" : "segmentationfaulter",
					"twitter" : "muhammadsackib",
					"location" : "Lahore"
				},
		"pic_url" : "images/fry.jpg",
		"welcome_message" : "Welcome to Saqib's resume",
		"skills" : ["Programming", "System Administration", "Web Development"] 
	} 

// stores the work description
var work = {
		"jobs" : [
		{
			"employer" : "Ansar Management Company",
			"title" : "Assistant Resident Engineer",
			"location" : "Kala Shah Kaku",
			"dates" : "2010-2011"
		},
		{
			"employer" : "Freelancer",
			"title" : "Learner",
			"location" : "Home",
			"dates" : "2011-2015"
		}
			]

	};

// stores the education info
var education = {
		"schools" : [
			{
				"name" : "Govt. High School Saroki",
				"location" : "Saroki",
				"degree" : "Matric",
				"majors" : ["Physics", "Chemistry", "Mathematics"],
				"dates" : "2000-2002"
			},
			
			{
				"name" : "Govt. Zamindar College",
				"location" : "Gujrat",
				"degree" : "Intermediate",
				"majors" : ["Physics", "Chemistry", "Mathematics"],
				"dates" : "2002-2004"
			}
		]

	};

// stores projects
var projects = {
		"projects" : [
		{
			"title" : "Backing up SMS Messages in a Featured Phone",
			"dates" : "2014",
			"description" : "A web app which can back up messages in a featured phone"
		}

		]

		};

// replaces the placehoders in helper.js file
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// appends or prepends the formatted html in index.html
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

