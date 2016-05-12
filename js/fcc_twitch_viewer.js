/**
 * Created by chris_000 on 20/04/2016.
 */
function getStreams() {
    var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "streamerhouse", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404"],
        streamsDiv = document.getElementById("streams"),
        hr = document.createElement("hr");

    function channelNameFunc(name, error, url, game) {
        console.log(name, error, url, game);
        var channel = document.createElement("a"),
            summary = document.createElement("p"),
            channelName = document.createTextNode(name),
            summaryLine = document.createTextNode(game);

        if (url !== undefined) {
            channel.setAttribute('href', url);
        }
        channel.appendChild(channelName);
        if (error === "Unprocessable Entity") {
            channel.className = "strikethrough";
        }

        streamsDiv.appendChild(channel);
        summary.appendChild(summaryLine);
        streamsDiv.appendChild(summary);
        streamsDiv.appendChild(hr);
    }

    function dataCaller(stream) {

        $.getJSON('https://api.twitch.tv/kraken/streams/' + stream + '?callback=?', function (data) {
            console.log(data);

            if (data._links !== undefined && data.stream !== null) { //channel is streaming
                channelNameFunc(stream, data.error, "https://www.twitch.tv/" + stream, data.stream.game);
            } else if (data._links !== undefined && data.stream == null) { //chanel is not streaming
                channelNameFunc(stream, data.error, "https://www.twitch.tv/" + stream, "No stream");
            } else if (data._links == undefined && data.stream !== null) {
                channelNameFunc(stream, data.error, undefined, data.message);
            } else {
                channelNameFunc(stream, data.error, undefined, data.message);
            }
        }
        );

    }

    for (var i = 0; i < streams.length; i++) {
        dataCaller(streams[i]);
    }
}









               
          