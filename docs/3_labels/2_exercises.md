# `aria-label`
## Problems
Checkout `TAG v3.0.1`
1. VoiceOver:
    1. Header nav button text is not very useful, no context
    2. The Rotor also shows button text is not helpful
        * [Header nav buttons demo](https://drive.google.com/open?id=1JbtsC_-gcA4hSfy58F69qjyUZqNL2C00)
    3. On both **Browse** and **Wishlist** pages Rotor just shows lists of 
    “Add button” or “Watched button” etc without any context
        * [Movie action toolbar button demo](https://drive.google.com/open?id=176uI-g0GThQzRX2HWFqzOH2r2WBKqTiq)

## Exercises
1. Fix the header nav buttons on the [Browse][browse] and [Wishlist][wishlist] pages by adding an `aria-label` `TAG v3.0.2`
2. Create a reusable component for the movie action buttons that can be shared between the 
[Browse][browse] and [Wishlist][wishlist] pages `TAG v3.0.3`
3. Add an `aria-label` to the movie action buttons (now in the shared component) on the 
[Browse][browse] and [Wishlist][wishlist] pages 
and to the close button in the [MovieEditor][editor] `TAG v3.0.4`

## Validate
Checkout `TAG v3.0.4`
1. VoiceOver: 
    1. Buttons should now have helpful text labeling them
    2. The Rotor should now display the new label text for each button
        * [Header nav buttons demo](https://drive.google.com/open?id=1iu0Boxuje-nUCYZ2-WY3vtjb5vcK2ZVF)
        * [Movie Action toolbar buttons demo](https://drive.google.com/open?id=1aSZSjT_sp_l9__JwiMmmbmRvqavHhwkR)


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
