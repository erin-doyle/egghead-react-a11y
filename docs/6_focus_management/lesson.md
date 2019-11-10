# Focus Management
Keyboard/screen reader navigation relies on focus proceeding in a logical 
order and not getting lost such that the user does not know where they are 
or how to get back to the desired point in a web page.

## Rules for focus
* Focus should begin at the first focusable element on each page
* When content is added or removed from the DOM in response to a user-initiated event:
    * Shift focus to the new content that is added
    * Move the focus to the next logical spot on the web page when content is removed
* Make sure focus doesn't jump to the top of the web page or becomes lost after a user-fired event.
* Be sure to move focus to an area on the web page that has discernible text for screen readers to convey to users.
* Keep order linear/logical so screen reader users don’t feel lost or lose context

## Using refs
A ref is a variable that references a given DOM element
* The ref attribute on the element can be passed the variable or a callback to set the variable (support depends on React version)
* Then focus() can be called on the ref variable, either:
    * During a desired point in the component lifecycle, (i.e. componentDidMount componentDidUpdate, or useEffect)
    * After a user initiated event (i.e. button onClick, or some element being removed from the DOM, etc)

### Examples
* [< React 16.3 example](code_examples/pre_React_16.3_example.js)
* [>= React 16.3 example](code_examples/post_React_16.3_example.js)
* [>= React 16.8 stateless functional component example](code_examples/post_React_16.8_stateless_example.js)

## References
* https://www.w3.org/TR/wai-aria-1.1/#managingfocus
* https://developers.google.com/web/fundamentals/accessibility/focus/
* https://reactjs.org/docs/accessibility.html#programmatically-managing-focus 
* https://reactjs.org/docs/accessibility.html#programmatically-managing-focus
* https://reactjs.org/docs/refs-and-the-dom.html
* https://reactjs.org/docs/hooks-reference.html#useref
    * https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
* https://www.gatsbyjs.org/blog/2019-07-11-user-testing-accessible-client-routing/
