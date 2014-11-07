// saves the data in variables
var name = "MUUHAMMAD SAQIB";
var role = "Web Developer";

// replaces the placehoders in helper.js file
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

// appends or prepends the formatted html in index.html
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

