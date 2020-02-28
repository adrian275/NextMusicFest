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
                                        htmlString += '<div class="card mb-4 p-3" style="width: 100%;">'
                                        htmlString += '<img class="card-img-top" src="" alt="">'
                                        htmlString += '<div class="card-body">'
                                        htmlString += '<h5 class="card-title display-4">' + dataEvent.resultsPage.results.event.series.displayName  + '</h5>'
                                        htmlString += '<div id="mapid" style="width: 100px; height: 100px;"></div>'
                                        htmlString += '<p class="display-5 text-primary"> Upcoming Event Dates: ' + dataEvent.resultsPage.results.event.start.date + ' to ' + dataEvent.resultsPage.results.event.end.date + '</p>'
                                        htmlString += '<img class="mt-5 img-fluid img-thumbnail" src="https://images.sk-static.com/images/media/profile_images/events/' + value.imgId +'/huge_avatar"></img>'
                                        htmlString += '<ul class="list-group list-group-flush">'
                                        htmlString += '<li class="list-group-item bg-transparent">' + 'Location:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + dataEvent.resultsPage.results.event.location.city + '</li>'
                                        htmlString += '<li class="list-group-item bg-transparent">' + 'Popularity:&nbsp;&nbsp;&nbsp;' + dataEvent.resultsPage.results.event.popularity + '</li>'
                                        htmlString += '<li class="list-group-item bg-transparent">' + 'More Info:&nbsp;&nbsp;' + '<a href="' + dataEvent.resultsPage.results.event.uri + '" class="card-link">Songkick Page</a>' + '</li>'
                                        htmlString += '</ul>'
                                        htmlString += '<div class="card-body">'
                                        htmlString += '<h4>Headliners</h4>'
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