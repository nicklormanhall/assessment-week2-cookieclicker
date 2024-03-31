# assessment-week2-cookieclicker

We're going to build a simple interactive game to include on the website as a fun distraction for our visitors.

It's known as an "idling game" or "incremental game": You run a cookie shop. Every second you produce some number of cookies. Clicking the master cookie gets you you more cookies, too. You can spend your cookies on upgrades to your Cookie factory to increase the number of cookies you have per click.

I made some intial design and layout sketches, using figma so allow me to make a basic plan on what I wanted each sheet to include.

"Build a Cookie Clicker Game" week 2 assessment

31/03/2024 - submission details - Notes added to moodle and READ.md

I believe I have met the required goals and the stretch goals listed for the assignment.

There weren't any goals that I didn't achieve.

MUST DO

DONE: Have a look at the live demo of the game
DONE: Draw a wireframe including the main game sections
DONE: Build out the wireframe using your knowledge of HTML and CSS.
DONE: Style the button. Draw a cookie, use stock assets, or use a giant emoji!
DONE: Add an event listener to the button to increment a cookie counter variable.
DONE: Select the HTML element for the cookie total and update it's contents so the cookie counter starts to increment on the page
DONE: Use localStorage to store the cookie count value on every increment, and load it again when the app runs on page load

STRECH GOALS

DONE: Add a CSS animation of some kind when you click the button.
DONE: Create a list of upgrades available in your game, make them each available to purchase at a cost.
DONE: Add an event listener to each upgrade button that checks if the user has enough cookies to buy it, and if so, subtracts the cost from the cookie count, and tracks the purchased items and their increment bonus.

I initially displayed a message saying not enough cookies, but I decided to go down the route of enabling and disabling the upgrade button if there was not enough cookies.

DONE: Use the owned items and their increment bonus to calculate the total increment value to add every second or every click

I wasn't sure fully what this meant, I assumed it was regarding updating the cookies per second.

I found as I worked through the assignment I came up with new ideas of how I wanted to handle to cookie clicker, for example I initially started with 1 fucntion for each upgrade I decided to see if and how I could use an array to store the cookie values and descriptions etc. With more time I would have looked to use this array in other fuctions.

https://nicklormanhall.github.io/assessment-week2-cookieclicker/ (live)
https://github.com/nicklormanhall/assessment-week2-cookieclicker (github repo)

The still had challenges with the Live server changes not always being reflected on the localhost, but I was more confident of the changes I had made were correct and meant I saved again.

With the assignment working correctly I decided to freeze my changes for the submission, however I wanted to carry on making additional changes to the "upgrade" process so I made a new branch called newupgrade and start making further changes to that branch.
