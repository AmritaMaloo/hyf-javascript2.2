// Step 1 Create a new website with external js file
console.log("script " + document.querySelector("script").src +  " has been loaded successfully");
 
// Step 2 Add a button (e.g. 'click me') that when clicked console.logs 'you clicked me!
document.querySelector("button").addEventListener('click',  ()  =>  console.log('you clicked me!!'));

// Step 3 Create a function that fetches from The Github API
function fetchJSONData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}
fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(data) {
   console.log(data); 
});
