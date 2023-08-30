//Select the first `<h1>` element in the list. Change it so that it now displays in green color.
document.querySelector('h1').style.background = "green";

//Change the text of the first `<li class="finished">` to the string "Repay credit card debt"
document.querySelector(".finished").innerText = "Repay credit card debt"

//Select the element `<li id="urgent">`, and give it a black coloured border that has a width of '2px'. Hint: Check the `border-color`
//and the `border-width` css properties on a web page.
document.querySelector('#urgent').style.border = "2px solid black";

//Change the first element with the class `emphasis` such that it is underlined 
//(check out the text decoration css style online)
document.querySelector('.emphasis').style.textDecoration = "underline";

//Select first element with `<p class='emphasis'>` and change its background color to orange,
 //its font size to "32px" and its line height to be "24px".
 document.querySelector('p.emphasis').style.background = "orange";
 document.querySelector('p.emphasis').style.fontSize = "32px";
 document.querySelector('p.emphasis').style.lineHeight= "24px";

 //Select the `<span class="todo">` which is nested inside the `<li id="urgent">` and give
 //it a background color of 'yellow'
 document.querySelector('#top').style.background = "yellow";

\
