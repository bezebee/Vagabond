// //58bbb3f1eaa946a98e0ef4604163b217

// $(document).ready(function(){

// let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=58bbb3f1eaa946a98e0ef4604163b217";

// $.ajax({
//     url:url,
//     method:"GET",
//     dataType:"JSON",

//     beforeSend: function(){
//         $(".progress").show();
//     },

// complete:function(){
//     $(".progress").hide();
// },

// success: function(news){
// let output = "";
// let latestNews = news.articles;

// for(var i in latestNews){
//     output += `
//     <div class="col-12 col-6 col-4">
//     <h6>${latestNews[i].title}</h6></div>`;
// }

// if(output !== ""){
//     $("#newsResults").html(output);
// }
// },

// error: function(){}
    
// })
// });

//https://api.unsplash.com/search/photos?page=1&query=office&client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0

$(document).ready(function(){

$("#searchbtn").on("click",function(e){
e.preventDefault();

let query = $("#searchquery").val();
let url = "https://pixabay.com/api/?key=16614798-97dee92be1a316ad32c69e61d&q="+query+"";

    if(query !== ""){
        $.ajax({
            url:url,
            method: "GET",
            dataType: "json",

            success: function(images){
                let output = "";
                let travelImages = images.hits;

                for(var i in travelImages){
                    output += `
                    <img src="${travelImages[i].pageURL}">
                    `;
                }
            },

            error: function(){
                console.log("error");
            }
        });


    }else{
        console.log("please enter something");
    }
});


});