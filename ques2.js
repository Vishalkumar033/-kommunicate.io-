
var url_str =
"https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"

var url=new URL(url_str)

var parameter="utm_campaign"
function getUrlParameterValue(url, parameter) {
    return url.searchParams.get(parameter)
    //Todo: complete this code
    }

console.log(getUrlParameterValue(url,parameter))