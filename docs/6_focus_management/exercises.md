# Focus Management
## Problems
Checkout `TAG v5.0.1`
1. VoiceOver:
    1. Screen reader focus remains on the previous button when navigating from one page to another
        * [Page nav demo](https://drive.google.com/open?id=1_G2YvRTFIqhYGHjC9bvyLDYirYNmgX81)
2. Keyboard interaction:
    1. Focus moves to the `<body>` tag when navigating from one page to another 
    (to see this: inspect `document.activeElement` in console)

## Exercises
1. Set focus on the [Wishlist page][wishlist] to the _“Add some”_ text when there are no movies `TAG v6.0.0`
2. Set focus to the `<h1>` of the [Header][header] on both the [Browse][browse] and [Wishlist][wishlist] 
pages (when there are movies in the wishlist) `TAG v6.0.1`

## Validate
Checkout `TAG v6.0.1`
1. VoiceOver:
    1. Now the logical first thing on a page that the user’s attention should be drawn to 
     should be announced when navigating to a new page
        * [Demo page nav](https://drive.google.com/open?id=1ley2Z0ywyMRZ9B1_qumsapQ3E3CBsf4F)
2. Keyboard interaction:
    1. Now the first element to receive focus on each page should be set to the 
    logical first thing (same as screen reader focus) rather than the `<body>`


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
