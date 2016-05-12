/**
 * Created by chris_000 on 27/04/2016.
 */

function queryWiki() {
    var resultsDiv = document.getElementById("results"),
        searchTerm = document.getElementById("query").value;
    while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.firstChild);
    }

    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        jsonp: "callback",
        dataType: 'jsonp',
        data: {
            action: "query",
            list: "search",
            srsearch: searchTerm,
            format: "json"
        },
        xhrFields: {withCredentials: true},
        success: function (response) {
            displayResult(response);
        }
    });
}

function displayResult(data) {
    console.log(data);
    var searchArr = data.query.search;
    console.log(searchArr);

    for (var i = 0; i < searchArr.length; i++) {
        displayResults(data.query.search[i], i);
    }
}

function displayResults(result, i) {

    var titleNode = document.createElement("h2"),
        linkNode = document.createElement("a"),
        titleText = document.createTextNode(result.title),
        resultsDiv = document.getElementById("results"),
        summaryNode = document.createElement("p"),
        summaryNodeId = "snippet" + i,
        hr = document.createElement("hr");


    titleNode.appendChild(linkNode);
    linkNode.setAttribute("href", "https://en.wikipedia.org/wiki/" + result.title);
    linkNode.appendChild(titleText);
    resultsDiv.appendChild(titleNode);
    summaryNode.setAttribute("id", summaryNodeId);
    resultsDiv.appendChild(summaryNode);
    document.getElementById(summaryNodeId).innerHTML = result.snippet;
    resultsDiv.appendChild(hr);


}