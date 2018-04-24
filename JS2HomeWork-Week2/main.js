// Step 1 Create a new website with external js file
console.log("script " + document.querySelector("script").src +  " has been loaded successfully");
 
// Step 2 Add a button (e.g. 'click me') that when clicked console.logs 'you clicked me!
document.querySelector("button").addEventListener('click', ()  =>  console.log('you clicked me!!'));

function dataOnClick () {
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
        // Step 4 Display the data that you get from the Github API on your web page
        const ul = document.querySelector(".hyfdata");
        for(let i = 0; i < data.length; i++) {
            let li = document.createElement("li");
            // Step 6 Make all the repositories link their own page in Github.
            let htmlurl = "https://api.github.com/repos/HackYourFuture/" + data[i].name;
            let a = document.createElement("a");
            a.setAttribute("href", htmlurl);
            a.setAttribute("target", "_blank");
            a.appendChild(document.createTextNode(htmlurl));
            li.appendChild(a);
            ul.appendChild(li);
                       
        }
              
        

    });
}
// Step 5 When you click the button -> get the data from the Github API and display it on your website
document.querySelector("button").addEventListener('click', dataOnClick);

// Step 1.1 You must write a function that takes 4 arguments.

function threeFive(startVal, endVal, threeCallback, fiveCallback) {

    const array = [];
    for(let i = startVal, j = 0; i <= endVal; i++,j++) {
        array[j] = i;
    }
    console.log(array);
    for(let k = 0; k < array.length;) {
        if(array[k] % 3 == 0 && array[k] % 5 == 0)
        {
            setTimeout(threeCallback, 1000);
            setTimeout(fiveCallback, 1000);
            k++;

        } else if(array[k] % 3 == 0) {
            threeCallback();
            k++;
        }
        else if(array[k] % 5 == 0) {
            fiveCallback();
            k++;
        }
           
        else k++;
        
    }

}

threeFive(10, 15, function () {console.log("sayThree");}, function () {console.log("sayFive");});




