const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
console.log("Before");
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}
function extractHTML(html) {
    let $ = cheerio.load(html);
    // full page search
    let teamsArr = $(".ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo-title.ds-mb-2");
    let wTeamName;
    for (let i = 0; i < teamsArr.length; i++) {
        let hasclass = $(teamsArr[i]).hasClass("ds-opacity-50");
        if (hasclass == false) {
            // find 
            let teamNameElem = $(teamsArr[i]).find(".ds-text-tight-l.ds-font-bold");
            wTeamName = teamNameElem.text().trim();
            // console.log(teamNameElem.text());
            // console.log(wTeamName);
        }
    }
    // segregate 
    // shorter form html
    let innigsArr = $(".ds-bg-fill-content-prime.ds-rounded-lg");
    // let htmlStr = "";
    for (let i = 0; i < innigsArr.length; i++) {
        // let cHtml = $(innigsArr[i]).html();
        // htmlStr += cHtml;
        // console.log(htmlStr);
        // team names
        let teamNameElem = $(innigsArr[i]).find(".ds-py-3");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        // team table
        // console.log(teamName);
        let hwtName = "";
        let hwt = 0;
        if (wTeamName == teamName) {
            // console.log(teamName);
            let tableElem = $(innigsArr[i]).find(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed");
            let allBowlers = $(tableElem).find("tr");
            for (let j = 0; j < allBowlers.length; j++) {
                let allColsOfPlayer = $(allBowlers[j]).find("td");
                let playerName = $(allColsOfPlayer[0]).text();
                let wickets = $(allColsOfPlayer[4]).text();
                if (wickets >= hwt) {
                    hwt = wickets;
                    hwtName = playerName;
                }
            }
        //     // console.log()
            console.log(`Winning Team ${wTeamName} highest wicket Taker playerName: ${hwtName} wickets: ${hwt}`)
        }


    }
    // console.log(htmlStr);

}