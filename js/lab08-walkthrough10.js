// Loop through posts array from travel-data.js
for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    
    document.write("<h3>" + post.title + "</h3>");
    document.write("<p>Posted by: " + post.user + "</p>");
    document.write("<p>Date: " + post.postdate + "</p>");
    document.write("<img src='images/travel/" + post.thumb + "' width='300'>");
    document.write("<p>" + post.excerpt + "</p>");
    document.write("<hr>");
}
