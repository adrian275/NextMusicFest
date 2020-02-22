
    var animalContainer = document.getElementById("animal-info");
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
        var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'js/data.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };  
    ourRequest.send();
    });
    
    function renderHTML(data) {
        var htmlString = "";
        for (i = 0; i < data.length; i++) {
            htmlString += '<div class="card mb-4 p-3" style="width: 100%;">'
            htmlString += '<img class="card-img-top" src="" alt="">'
            htmlString += '<div class="card-body">'
            htmlString += '<h5 class="card-title display-4">' + data[i].name + '</h5>'
            htmlString += '<p class="card-text">Description Here</p></div>'
            htmlString += '<ul class="list-group list-group-flush">'
            htmlString += '<li class="list-group-item">' + 'Location:' + data[i].location + '</li>'
            htmlString += '<li class="list-group-item">' + 'Attendees:' + data[i].attendees + '</li>'
            htmlString += '<li class="list-group-item">' + 'Next Event:' + data[i].event + '</li>'
            htmlString += '</ul>'
            htmlString += '<div class="card-body">'
            htmlString += '<a href="#" class="card-link">Card link</a>'
            htmlString += '<a href="#" class="card-link">Another link</a>'
            htmlString += '</div>'
            htmlString += '</div>'

        }
        animalContainer.insertAdjacentHTML("beforeend", htmlString)
    };


            
            
              
              
            
            
              
              
              
            
            
              
              
            
           