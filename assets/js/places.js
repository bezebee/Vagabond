//58bbb3f1eaa946a98e0ef4604163b217

$(document).ready(function(){

let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=58bbb3f1eaa946a98e0ef4604163b217";

$.ajax({
    url:url,
    method:"GET",
    dataType:"JSON",

    beforeSend: function(){
        $(".progress").show();
    },

complete:function(){
    $(".progress").hide();
},

success: function(news){
let output = "";
let latestNews = news.articles;

for(var i in latestNews){
    output += `
    <div class="col-12 col-6 col-4">
    <h6>${latestNews[i].title}</h6></div>`;
}

if(output !== ""){
    $("#newsResults").html(output);
}
},

error: function(){}
    
})
});

