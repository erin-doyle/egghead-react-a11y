# Live Regions
## Problems
Checkout `TAG v6.0.1`
1. VoiceOver:
    1. When the **Login** form is submitted without entering the **Username** or **Password** 
    no error message is read to the user
        * [Login form demo](https://drive.google.com/open?id=1VMH6I3T3pITjbZqg-kJhd7BzB6pK-I7e)

## Exercises
1. Add the appropriate aria live region attribute(s) and/or role to the error messages  
for each `<input>` on the [Login][login] form `TAG v7.0.0`

## Validate
Checkout `TAG v7.0.0`
1. VoiceOver:
    1. The error messages should now be read to the user when they appear
        * [Login form demo](https://drive.google.com/open?id=1RPKjuwFLi705YRM9EAaQtAkXPazMcDLu)
   

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
