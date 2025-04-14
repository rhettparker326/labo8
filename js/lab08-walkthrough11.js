// Start the Table
document.write("<table border='1'>");

// Loop through countries array from travel-data.js
for (var i = 0; i < countries.length; i++) {
    document.write("<tr>");
    
    // 1st column → Flag image
    document.write("<td><img src='flags/" + getFlagFilename(countries[i]) + "' width='50'></td>");
    
    // 2nd column → Country Name
    document.write("<td>" + countries[i] + "</td>");
    
    document.write("</tr>");
}

document.write("</table>");


// Function to convert country name to correct flag filename
function getFlagFilename(country) {
    var code = "";

    switch(country) {
        case "Bahamas": code = "BS"; break;
        case "Canada": code = "CA"; break;
        case "Germany": code = "DE"; break;
        case "Ghana": code = "GH"; break;
        case "Hungary": code = "HU"; break;
        case "Italy": code = "IT"; break;
        case "Spain": code = "ES"; break;
        case "United Kingdom": code = "GB"; break;
        case "United States": code = "US"; break;
        default: code = "US"; // fallback
    }

    return code + ".png";
}
