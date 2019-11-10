# Live Regions
When dynamic changes occur to content on a page they are usually visually 
apparent to users who can see the page but may not be made apparent to users 
of assistive technologies. ARIA live regions provide a way to make those 
dynamic content changes able to be announced by assistive technologies.

## Rules for defining live regions
* The live region must first be present (and usually empty), so that the browser 
and assistive technologies are aware of it
    * Dynamically adding an element defined as a live region, or adding the live 
    region attributes to an element after initial load will have no effect
    * The live region must be present first and only then should the content be 
    changed
* Any subsequent changes to the live region will be announced
* Distinct attributes can be used to define the screen reader behavior for live 
regions or specialized roles may be used for more common use cases

## ARIA attributes
* [`aria-live`](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-live) - defines the priority with which the screen reader will read updates to the region - values include:
    * `off` - the default setting - won’t read updates to the region
    * `polite` - the screen reader will wait to read updates to the region once it is idle
    * `assertive` - the screen reader will interrupt whatever it may be currently reading to read any updates to the region
* [`aria-atomic`](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-atomic) - 
`true` or `false` as to whether or not the screen reader should always present the live region as a whole, even if only part of the region changes
* [`aria-relevant`](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-relevant) - takes a list of what type of changes should be announced (default is “additions text”) - values include:
    * `additions` - any insertions of any nodes into the live region
    * `removals` - any removals of any nodes from the live region
    * `text` - any changes to textual content within the live region
    * `all` - equivalent to `additions removals text`
    
## Specialized roles
For more common use cases and/or widgets should prefer the available specialized ARIA roles for live regions:
* [`status`](https://www.w3.org/WAI/PF/aria-1.1/roles#status) - a status bar or area of the screen that provides an updated status of some kind. Screen reader users have a special command to read the current status.
* [`alert`](https://www.w3.org/WAI/PF/aria-1.1/roles#alert) - error or warning message that flashes on the screen. Alerts are particularly important for client side validation notices to users. 
* [`progressbar`](https://www.w3.org/WAI/PF/aria-1.1/roles#progressbar) - a hybrid between a widget and a live region. Use this with aria-valuemin, aria-valuenow and aria-valuemax.
* [`marquee`](https://www.w3.org/WAI/PF/aria-1.1/roles#marquee) - for text which scrolls, such as a stock ticker.
* [`timer`](https://www.w3.org/WAI/PF/aria-1.1/roles#timer) - any kind of timer or clock, such as a countdown timer or stopwatch readout.
* [`log`](https://www.w3.org/WAI/PF/aria-1.1/roles#log) - chat, error, game or other type of log.

## References
* https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
* https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-live
* https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-atomic
* https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#aria-relevant
* http://html.cita.illinois.edu/nav/form/aria/index.php?example=3
