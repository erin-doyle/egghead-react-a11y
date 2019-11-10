# Tablist
## Problems
1. VoiceOver:
Checkout `TAG v7.0.0`
    1. Each item in the tablist just says _“Visited Link”_ but it’s unclear what the user can 
    expect to happen by selecting any of the links
    2. There is no label/context/description of what this group of links represents
        * [Tablist demo](https://drive.google.com/open?id=1xMNAUn-inP9w2N48EvFc-x0gF5MqlOCZ)
2. Keyboard interaction:
    1. What looks like a tablist widget does not follow the expected keyboard interaction behavior 
    for a tablist widget
        1. Hitting the tab key moves to each tab in the tablist 
        2. Arrow keys do nothing
        3. Space bar jumps down the page - does not select

## Exercises
1. Add `aria-label` and roles (`tablist`, `tab` and `tabpanel`) to the [TabList component][tablist] `TAG v8.0.0`
2. Add dynamic setting of `aria-selected` based on which tab is currently selected  `TAG v8.0.1`
3. Add dynamic setting of `aria-controls` based on ID of the corresponding `tabpanel` `TAG v8.0.2`
4. Add `aria-labelledby` to `tabpanel`s `TAG v8.0.3`
5. Create [TabPanel component][tabpanel] and refactor [Wishlist][wishlist] and [Browse][browse] 
pages to use it `TAG v8.0.4`
6. Add required keyboard interaction support `TAG v8.0.5`

## Validate
Checkout `TAG v8.0.5`
1. Chrome Dev Tools:
    1. Check accurate setting of aria attributes in DOM inspector
2. VoiceOver:
    1. The tablist should now be read as such with a description providing context
        * [Tablist Demo](https://drive.google.com/open?id=1hStAprQviLCzBgp6zZGuMWPQ0KTLsQR-)
3. Keyboard Interaction:
    1. All keys should now behave as expected


[login]: ../../src/login/Login.js
[wishlist]: ../../src/wishlist/MovieWishlist.js
[browse]: ../../src/browse/MovieBrowser.js
[editor]: ../../src/wishlist/MovieEditor.js
[movie]: ../../src/primitives/Movie.js
[forminput]: ../../src/primitives/FormInput.js
[header]: ../../src/primitives/Header.js
[toolbar]: ../../src/primitives/MovieToolbar.js
[toolbarbutton]: ../../src/primitives/MovieToolbarButton.js
[tablist]: ../../src/primitives/TabList.js
[tabpanel]: ../../src/primitives/TabPanel.js
