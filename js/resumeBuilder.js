// replaces the placehoders in helper.js file
var formattedName = HTMLheaderName.replace("%data%", "MUHAMMAD SAQIB");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

// appends or prepends the formatted html in index.html
$("#header").append(formattedName);
$("#header").append(formattedRole);
