# Interaction/Design Patterns
Although elements that are natively keyboard accessible should be used when 
possible, there are times when HTML falls short and custom "widgets" are 
necessary. Complex menus, sliders, dialogs, tab panels, etc. must all be built 
to support keyboard and screen reader accessibility.

## Widget behavior expectations
* For more complex widgets there are expectations by keyboard and screen reader users as to how these specific widgets will behave and can be navigated
* Interactions must be intuitive and predictable
* Events triggered by mouse clicks should also be able to be triggered via keyboard
* The state of the widget should always be clear

[Interaction/Design Patterns](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex) 
define the specific interaction requirements for the widget:
* What ARIA roles should be defined on which elements making up the widget
* What ARIA states should be provided to which parts of the widget and under what scenarios should which values apply
* What other ARIA properties should be set on which parts of the widget
* What event handling should be implemented to support keyboard navigation (i.e. which keyboard keys should trigger what behavior in the widget)

## Tablist Design Pattern
### ARIA Roles: 
* The element that serves as the container for the set of tabs has [`role="tablist"`](https://www.w3.org/TR/wai-aria-1.1/#tablist)
* Each element that serves as a tab has [`role="tab"`](https://www.w3.org/TR/wai-aria-1.1/#tab) and is contained within the element 
with `role="tablist"`
* Each element that contains the content panel for a tab has [`role="tabpanel"`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel)

### Labeling:
* If the tab list has a visible label, the element with `role="tablist"` uses `aria-labelledby`, 
otherwise use `aria-label`
* Each element with `role="tabpanel"` has the property `aria-labelledby` referring to its associated
tab element

### Attributes:
* Each element with `role="tab"` has the property [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) referring to its associated 
tabpanel element
* The active tab element has the state [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) set to `true` and all other tab elements have
it set to `false`

### Keyboard interaction
#### tablist focus: 
* When focus moves into the `tablist`, place focus on the active `tab` element
* When the `tablist` contains the focus, moves focus to the next element in the page tab sequence 
outside the `tablist`

#### When focus is on a tab:
* Left Arrow: moves focus to the previous `tab`. If the first `tab`, moves focus to the last `tab`
* Right Arrow: Moves focus to the next `tab`. If the last `tab` element, moves focus to the first `tab`
* Space or Enter: Activates the `tab` if it was not activated automatically on focus
* Home (Optional): Moves focus to the first `tab`. Optionally, activates the newly focused `tab`
* End (Optional): Moves focus to the last `tab`. Optionally, activates the newly focused `tab`


## Toolbar
A container for grouping a set of controls, such as `buttons`, `menubuttons`, or `checkboxes`
* Use as a grouping element only if the group contains 3 or more controls

### Keyboard interaction
* Focus starts on the first control that is not disabled. Optionally, if the toolbar has previously 
contained focus, focus is set on the control that last had focus.
* Left Arrow: Moves focus to the previous control. Optionally, focus movement may wrap from the 
first element to the last element.
* Right Arrow: Moves focus to the next control. Optionally, focus movement may wrap from the last 
element to the first element.
* Home (Optional): Moves focus to first element.
* End (Optional): Moves focus to last element.


## References
* https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex
* https://inclusive-components.design/
* https://a11yproject.com/patterns/
* https://webaim.org/techniques/keyboard/
### Tablist:
* https://www.w3.org/TR/wai-aria-practices/#tabpanel
* https://www.w3.org/TR/wai-aria-1.1/#tablist
* https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
### Toolbar:
* https://www.w3.org/TR/wai-aria-practices/#toolbar 
* https://www.w3.org/TR/wai-aria-practices/examples/toolbar/toolbar.html 
