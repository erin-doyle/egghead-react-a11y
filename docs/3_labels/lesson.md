# Labels
Labelling inputs, elements and widgets add context and clarity for screen readers.

## `<label>` elements
Use `<label>` element for labeling `<input>` elements:
* Either wrap the `<input>` that’s being labeled
```html
<label>Some Field:
   <input type="text" name="myField" />
</label>
```
* Or use the `htmlFor` attribute (in React, otherwise `for`) with the id of the `<input>` being labeled
```html
<label htmlFor="someField">Some Field:</label>
<input id="someField" type="text" name="myField"/>
```

## `aria-label` attributes
Use `aria-label` for non `<input>` elements
(such as a `<button>` or an `<icon>` that does not have its own descriptive text)
```html
<button onClick="myDialog.close()" aria-label="Close”>
    X
</button>
```
```html
<i class="icon-close" aria-label="Close” />
```

## `aria-labeledby` attributes
Takes a string of one or more ids of elements that themselves provide a label
* Use with one element or a grouping of elements or a widget
* Use Cases: 
    * Combine multiple labels together
    * Associate headings with regions
    * Label for a widget
```html
<div id="billing">Billing</div>
<div>
    <div id="name">Name</div>
    <input type="text" aria-labelledby="billing name"/>   
</div>
```
```html
<div role="main" aria-labelledby="foo">
    <h1 id="foo">
        Wildfires spread across the San Diego Hills
    </h1>
    <p>
        Strong winds expand fires ignited by high temperatures ...
    </p>
</div>
```

## `aria-describedby` attributes
Works the same as aria-labelledby but provides extended information. Good for: 
* providing instructions
* important usage details
```html
<div 
    role="application" 
    aria-labelledby="calendar"  
    aria-describedby="info"
>
    <h1 id="calendar">Calendar</h1>
    <p id="info">
        This calendar shows the game 
        schedule for the Boston Red Sox.
    </p>
    <div role="grid">
        ...
    </div>
</div>
```
