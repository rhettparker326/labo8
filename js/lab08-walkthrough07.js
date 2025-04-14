// Step 1: Create Array of Weekdays
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");

// Step 2: Add Sat & Sun
daysOfWeek.push("Sat");        // Adds to end
daysOfWeek.unshift("Sun");     // Adds to front

// Step 3: Start Table
document.write("<table border=1>");
document.write("<tr>");

// Step 4: Loop through Array and Format Long Days with <em>
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";

    document.write("<th>" + day + "</th>");
}

document.write("</tr>");

// Step 5: Output Days 1 - 30 in Rows of 7
for (var row = 0; row < 5; row++) {
    document.write("<tr>");
    for (var col = 0; col < 7; col++) {
        var dayNum = row * 7 + col + 1;
        if (dayNum <= 30)
            document.write("<td>" + dayNum + "</td>");
        else
            document.write("<td></td>");
    }
    document.write("</tr>");
}

document.write("</table>");



