let myLeads = [];
let inputEl = $("#input-el");
let ulEl = $("#ul-el")
// for (const website in myLeads) {
//     console.log(myLeads[website])
// }
// ulEl.each(function() {
//     console.log($(this).text())
// })
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
}
console.log(leadsFromLocalStorage)
for (let i = 0; i < myLeads.length; i++) {
    const element = myLeads[i];
    ulEl.append(`<li><a href="https://${element}">${element}</a></li>`)
}

$("#input-btn").click(function() {
    myLeads.push(inputEl.val())
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    ulEl.append(`<li><a href="https://${inputEl.val()}">${inputEl.val()}</a></li>`)
    inputEl.val("")
    console.log(myLeads)
});

$("#get-tab-btn").click(function() {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        // and use that tab to fill in out title and url
        var tab = tabs[0];
        console.log(tab.url);
        myLeads.push(tab.url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        ulEl.append(`<li><a href="https://${tab.url}">${tab.url}</a></li>`)
        console.log(myLeads)
    
    });
})