$.getJSON('https://api.unsplash.com/photos/?client_id=kZ9sSryGBssi-2T5OUPjVLye-DzTy5ksc6rEMov7fW0',function(data){
    console.log(data);
    $.each(data, function(index, value){
        console.log(value);

        var name = value.user.name;
        var bio = value.user.bio;
        var imageURL = value.urls.regular;
        
    });
});



