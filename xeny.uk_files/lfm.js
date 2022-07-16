// yeah credits to this guy
/**
  Developed by Prashant Shrestha
  + https://prashant.me
*/
var lastfmData = {
    baseURL:
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
    // Your Last.fm Username
    user: "syskeyed",
    // Your API key
    api_key: "6628d543d56243388312c0a24ad871e4",
    additional: "&format=json&limit=1"
  };
  
  var getSetLastFM = function() {
    $.ajax({
      type: "GET",
      url:
        lastfmData.baseURL +
        lastfmData.user +
        "&api_key=" +

        lastfmData.api_key +
        lastfmData.additional,
      dataType: "json",
      success: function(resp) {
        var recentTrack = resp.recenttracks.track[0];
        var formatted =
           // xeny
          recentTrack.name;
        $("a#tracktitle")
          .html("listening to <i>" + recentTrack.name + "</i> by <i>" + recentTrack.artist["#text"] + "</i> on spotify")
          .attr("href", recentTrack.url)
          .attr("target", "_blank");
  
      },
      error: function(resp) {
        $("a#tracktitle").html(
          ""
        );


      }
    });
  };
  
  // Get the new one.
  getSetLastFM();
  // Start the countdown.
  setInterval(getSetLastFM, 10 * 1000);
  
