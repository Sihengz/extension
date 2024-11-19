let myLeads = [];
let inputEl = $("#input-el");
let ulEl = $("#ul-el")
// for (const website in myLeads) {
//     console.log(myLeads[website])
    
// }
// ulEl.each(function() {
//     console.log($(this).text())
// })
$("#input-btn").click(function() {
    myLeads.push(inputEl.val())
    ulEl.append(`<li><a href="https://${inputEl.val()}">${inputEl.val()}</a></li>`)
    inputEl.val("")
    console.log(myLeads)
});