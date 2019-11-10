# Toolbar
## Problems
Checkout `TAG v8.0.5`
1. VoiceOver:
    1. It is not clear that these buttons are part of a grouping such as a toolbar
        * [Toolbar demo](https://drive.google.com/open?id=1AeW-BtabZH_x3dtD9z5FPbyTO3ZBi6Y9)
2. Keyboard interaction:
    1. What looks like a toolbar widget does not follow the expected keyboard interaction behavior 
    for a toolbar widget
        1. Hitting the tab key moves to each button in the toolbar 
        2. Arrow keys move cursor into text of next **Movie** rather than moving focus between 
        buttons in the toolbar

## Exercises
1. Create [MovieToolbar component][toolbar] to be used by `getWishlistActions.js`
which contains the [MovieToolbarButton components][toolbarbutton] `TAG v9.0.0`
2. Add an `aria-label` and a role of `toolbar` to [MovieToolbar][toolbar] `TAG v9.0.1`
3. Add `tabIndex` and focus management based on the selected button in the toolbar `TAG v9.0.2`
4. Add the required keyboard interaction support `TAG v9.0.3`

## Validate
Checkout `TAG v9.0.3`
1. Chrome Dev Tools:
    1. Check accurate setting of the `tabIndex` values in DOM inspector
2. VoiceOver:
    1. The toolbar should now be read as such with a description providing context
        * [Toolbar demo](https://drive.google.com/open?id=1bpo_PF0XE5T9W5DGgQLFa190elX6ZKIk)
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
