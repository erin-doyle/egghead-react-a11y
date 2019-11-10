# Building Blocks of Web Accessibility
## HTML5 Elements and Attributes
### Sections and Grouping
* `<main>`
* `<article>`
* `<section>`
* `<header>`
* `<footer>`
* etc

### Controls
#### Types of `<input>`
* `<input type="search">`
* `<input type="tel">`
* `<input type="email">`
* `<input type="date">`
* `<input type="number">`
* etc

#### Widgets
* `<progress>`
* `<meter>`
* `<menu type="toolbar">`
* `<dialog>`
* etc

### Properties
* `hidden`
* `required`
* `placeholder`

### Text level
* `<time>`
* `<mark>`

### Graphics and Media
* `<canvas>`
* `<audio>`
* `<video>`
* `<track>`


## WAI-ARIA
_"Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)"_

ARIA attributes provide roles and properties describing things such as:
* type of widget 
    * `menu`, `treeitem`, `slider`, `progressmeter`
* structure of the Web page 
    * headings, regions, and tables (grids)
* the state widgets are in 
    * `checked` for a check box, `haspopup` for a menu
* define live regions of a page that are likely to get updates 
    * stock quotes, error messages, progress bars
    * define interruption policy for those updates 
        * critical updates may be presented in an alert dialog box
        * incidental updates occur within the page
* drag sources and drop targets for drag-and-drop
