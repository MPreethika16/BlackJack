let myLeads = [];
const inputEl = document.getElementById("input-el");
const SaveBtn = document.getElementById("save-el");
const ulEl = document.getElementById("ul-el");
const delEl = document.getElementById("del-el");
const leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

//let leadsLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
if (leadsLocalStorage) {
  myLeads = leadsLocalStorage;
  render(myLeads);
}
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
delEl.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
SaveBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});
function render(leads) {
  let list = "";
  for (let i = 0; i < leads.length; i++) {
    list += ` <li>
                    <a target="_blank" href='${leads[i]}' >${leads[i]}</a>
                </li>`;
  }
  ulEl.innerHTML = list;
}
