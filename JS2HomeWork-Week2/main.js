// Step 1 Create a new website with external js file
console.log("script " + document.querySelector("script").src +  " has been loaded successfully");
 
// Step 2 Add a button (e.g. 'click me') that when clicked console.logs 'you clicked me!
document.querySelector("button").addEventListener('click', ()  =>  console.log('you clicked me!!'));


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
    function dataOnClick () {
        this.disabled = true;
        document.querySelector('p').innerHTML = "";
        document.querySelector('.repolinks').innerHTML = "";
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
document.querySelector(".step1_6").addEventListener('click', dataOnClick);
// Step 7
document.querySelector(".tosubmit").addEventListener('click', getData);
function getData() {
    document.querySelector(".step1_6").disabled = false;
    document.querySelector(".hyfdata").innerHTML = "";
    const input = document.querySelector('input');
    const url = "https://api.github.com/search/repositories?q=user:HackYourFuture+" + (input.value);
    
    fetchJSONData(url, function(data) {
        
        document.querySelector('p').innerHTML = "";
        document.querySelector('.repolinks').innerHTML = "";

        if(data.total_count === 0 || input.value === "")
            document.querySelector('p').innerHTML = "please enter some valid data";
        else {
            for(let i = 0; i < data.total_count; i++) {
            document.querySelector('.repolinks').innerHTML += `<li><a href="${data.items[i].html_url}">${data.items[i].html_url}</a></li>`
            
            }
        }

    input.value = "" ;     
    });

}

// Step 1.1 You must write a function that takes 4 arguments.

function threeFive(startVal, endVal, threeCallback, fiveCallback) {

    const array = [];
    for(let i = startVal, j = 0; i <= endVal; i++,j++) {
        array[j] = i;
    }
    console.log(array);
    for(let k = 0; k < array.length;k++) {
        threeCallback(array[k]);         
        fiveCallback(array[k]);
            
    }      
        

}

threeFive(10, 15, function (item) {
    if (item % 3 === 0) 
    console.log(item, "divisible by Three");
    }, 
    function (item) {
        if (item % 5 === 0) 
        console.log(item, "divisible by Five");
    });

// Step 1.2 Please solve this problem using: https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num, forCall, whileCall, doWhileCall) {
    
    let strRepeat = " ";
    if(num <= 0) {
      return " ";
      
    } else 
        forCall(str, num, strRepeat);
        whileCall(str, num, strRepeat);
        doWhileCall(str, num, strRepeat);
    

  }
  
  setTimeout(repeatStringNumTimes.bind(null, "abc", 3, function (str, num, strRepeat) { 
      // Step 1.3 A for Loop
    for(let i = 1; i <= num; i++) {
      
        strRepeat += str;
   
    } 
    console.log('repeat string abc 3 times using for ', strRepeat);},
    

    function (str, num, strRepeat) { 
        let i = 1;
        // Step 1.4 A while Loop
        while (i <= num) {
            strRepeat += str;
            i++;
        }
        console.log('repeat string abc 3 times using while ', strRepeat);
   }, 
    function (str, num, strRepeat) {
       let i = 1;
       // Step 1.5 A DO Loop
       do { strRepeat += str; i++} while (i <=num);
       console.log('repeat string abc 3 times using DOwhile ', strRepeat);
   }),1000);
// step 1.9 Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.
var x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
} 
//call by value
f1(x);
console.log('CALL BY VALUE: Here only the value of x was passed when the function f1(x) was called, and whatever calculation was done in another variable "val" and when we return the variable "val" it is stored at some other location not where the x was stored. so if we want to log the value of x it will display the same value of x that is: ', x);

var y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
//call by reference
f2(y);
console.log('CALL BY REFERENCE: Here we are passing the object y when the function f2(y) is called. y holds the value/address where x is stored and calculation is done at the same address because we are using val.x , so when y is logged it will store the new value of x', y );







