var $data = $('#festival-info');
            $(function(){
                $.ajax({
                    url: 'js/events.json',
                    dataType: 'json', 
                    type: 'GET',
                    cache: false,
                    success: function(list) {
                        $(list.events.festivals).each(function (index, value) {
                            $.ajax({
                            type: 'GET',
                            url: 'https://api.songkick.com/api/3.0/events/' + value.id +'.json?apikey=BcSVaxyGOG1IVR63',
                            dataType: 'JSON',
                            success: function(dataEvent) {
                            //console.log('success', data);
                            //console.log(data.resultsPage.results.event.displayName);
                                    var htmlString = [];
                                    $.each(dataEvent, function(i, item) {
                                       htmlString += '<div class="card mb-3 p-4" style="width: 100%; height: 100%;">'
                                       htmlString += '<div class="row no-gutters">'
                                       htmlString += '<div class="col-xs-12 col-lg-4">' 
                                       htmlString += '<img class="card-img mx-auto img-fluid d-block img-thumbnail" src="https://images.sk-static.com/images/media/profile_images/events/' + value.imgId +'/huge_avatar" class="card-img" alt="..." style="width: 250px; height: 100%; ">'
                                       htmlString += '</div>'
                                       htmlString += '<div class="col-xs-12 col-lg-8">'
                                       htmlString += '<div class="card-body">'
                                       htmlString += '<h5 class="card-title text-center text-lg-left">' + dataEvent.resultsPage.results.event.series.displayName +'</h5>'
                                       htmlString += '<p class="card-text text-wrap text-xs-justify text-sm-justify d-none d-md-block">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'
                                       //htmlString += '<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>'
                                       htmlString += '<ul class="list-group list-group-flush">'
                                       htmlString += '<li class="list-group-item bg-transparent">' + 'Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + dataEvent.resultsPage.results.event.location.city + '</li>'
                                       htmlString += '<li class="list-group-item bg-transparent">' + 'Popularity:&nbsp;&nbsp;&nbsp;' + Math.round(dataEvent.resultsPage.results.event.popularity * 100) + '%</li>'
                                       htmlString += '</ul>'
                                       htmlString += '<a class="btn btn-primary mt-3 col-md-5 text-white" href="' + dataEvent.resultsPage.results.event.uri + '" class="card-link">Songkick Website</a>'
                                       htmlString += '</div>'
                                       htmlString += '</div>'
                                       htmlString += '</div>'
                                       htmlString += '</div>' 

                                        $data.append(htmlString);
                                        //'<li>' + data.resultsPage.results.event.displayName +'</li>'
                                            });
                                           }
                                        });          
                                    });
                                  }
                              });
                          });

        var options = {
        url: "https://vimeo.com/280815263",
        width: 800
                      };
                        
        var videoPlayer = new Vimeo.Player('myVideo', options);
                        
        videoPlayer.on('play', function() {
        console.log('Played the video');
        });

    /*     htmlString += '<div class="card p-3 d-flex justify-content-center" style="width: 100%;">'
        htmlString += '<h5 class="card-title display-4">' + dataEvent.resultsPage.results.event.series.displayName  + '</h5>'
        htmlString += '<img class="card-img-top img-thumbnail" src="https://images.sk-static.com/images/media/profile_images/events/' + value.imgId +'/huge_avatar" style="width: 50%;"></img>'
        htmlString += '<div class="card-body">'
        
        htmlString += '<div id="mapid" style="width: 100px; height: 100px;"></div>'
        htmlString += '<p class="display-5 text-primary"> Upcoming Event Dates: ' + dataEvent.resultsPage.results.event.start.date + ' to ' + dataEvent.resultsPage.results.event.end.date + '</p>'
        //htmlString += '<img class="mt-5 img-fluid img-thumbnail" src="https://images.sk-static.com/images/media/profile_images/events/' + value.imgId +'/huge_avatar"></img>'
        htmlString += '<ul class="list-group list-group-flush">'
        htmlString += '<li class="list-group-item bg-transparent">' + 'Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + dataEvent.resultsPage.results.event.location.city + '</li>'
        htmlString += '<li class="list-group-item bg-transparent">' + 'Popularity:&nbsp;&nbsp;&nbsp;' + dataEvent.resultsPage.results.event.popularity + '</li>'
        htmlString += '<li class="list-group-item bg-transparent">' + 'More Info:&nbsp;&nbsp;' + '<a href="' + dataEvent.resultsPage.results.event.uri + '" class="card-link">Songkick Page</a>' + '</li>'
        htmlString += '</ul>'
        htmlString += '<div class="card-body">'
        htmlString += '<h4>Headliners</h4>'
        htmlString += '</div>'
        htmlString += '</div>' */