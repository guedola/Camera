$(document).on("click", "#Camera", function()
{
navigator.camera.getPicture(onSuccess, onFail, 
{ quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
      correctOrientation: true,
    saveToPhotoAlbum: true
     });

   

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});

navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
