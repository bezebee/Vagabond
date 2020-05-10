$.getJSON('https://api.unsplash.com/photos/?client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0',function(data){
    console.log(data);
    $.each(data, function(index, value){
        console.log(value);

        var name = value.user.name;
        var bio = value.user.bio;
        var imageURL = value.urls.regular;

        // $('.name').text(name);
        // $('.bio').text(bio);
        // $('.image img').attr('src',imageURL);

        $('.output').append('<h1 class="name">' + name + '</h1><h2 class="bio">' + bio + '</h2><div class="image"><img src="' + imageURL +'"/></div>')
        
    });
});



