# `aria-labeledby`
## Problems
Checkout `TAG v3.0.4`
1. VoiceOver:
    1. The text _“No Movies in your Wish List!  Add some!”_ is read in a disconnected way that makes it unclear that “Add some” is a link.
    2. The Rotor shows under Links _“Add some”_ but it has no context (what are we adding some of?)
        * [Wishlist demo](https://drive.google.com/open?id=1_t95RCB83nhPaIbY8qPrGWOq6KN2vg5-)

## Exercises
1. Add an `aria-labeledby` around the message on the [Wishlist][wishlist] page `TAG v3.0.5`

## Validate
Checkout `TAG v3.0.5`
1. VoiceOver: 
    1. The text message should now make more sense, it should be clear what we are adding some of
    2. The Rotor should now display the full text for the link _“Add some Movies!”_
        * [Wishlist demo](https://drive.google.com/open?id=1YHXJDV_hS2pQ9AIfHpyt_DipI-2AiF2T)


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
