##  Answer the question 1
**getElementById -> it is very fast because id is unique in DOM. if any element did not matches its return NULL.if any single element i select by id.
**getElementsByClassName** -> select all element by given name class.
** querySelector and querySelectorAll** -->  querySelector returns first selector element and querySelectorAll return all of matches.

## Answer the question 02 
  create new element     const newElement = document.createElement("div"); 
  insert a new element    const parent = document.getElementById("parentContainer");
                               parent.appendChild(newElement);



## Answer the question 03

Bubbling --> Event Bubbling  when an event triggered on a specific element “bubbles up” 
                and also triggers on its parent elements, moving up the DOM tree.
      example : <div id="parentNode">
  <button id="child">Click Me</button>
</div>


##  Answer the question 04

Event Delegation is attach a single event listener to a parent and handle events on its children dynamically.
it is useful to newly added <li>



##  Answer the question 05

preventDefault() --> Stops the default browser action for an event. 
when we use form browser provide us default  behaviour so thats ehy we use preventDefault()

stopPropagation()--> Stops the event from bubbling up  the DOM tree.
Example: Preventing a click on a child element from triggering parent event listeners.

