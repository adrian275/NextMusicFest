
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

    var zContainer = document.getElementById("z-info");
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
        var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://api.songkick.com/api/3.0/events/38768509-coachella-2020.json?apikey=BcSVaxyGOG1IVR63');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData);
    };  
    ourRequest.send();
    });
    
    function renderHTML(data) {
        var htmlString = "";
        for (i = 0; i < data.length; i++) {
            htmlString += '<div>'
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

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyaWFuMjc1IiwiYSI6ImNpdm8yY3E1azAwdXQyb24yZmxsbHl1aDIifQ.USDLj5nTUv9bEr6YpkObBw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40],
    zoom: 9,
    // causes pan & zoom handlers not to be applied, similar to
    // .dragging.disable() and other handler .disable() funtions in Leaflet.
    interactive: false
    });
    


            
            
              
              
            
            
              
              
              
            
            
              
              
            
           