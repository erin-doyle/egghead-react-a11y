# `aria-describedby`
## Problems
Checkout `TAG v3.0.5`
1. VoiceOver:
    1. When tabbing through the **Login** page we don’t hear about _“Passwords are case sensitive”_ at all.  
    When using the VO cursor we don’t hear about it until after we leave the Password input.
    2. When there is an error on either the **Username** or **Password** inputs we don’t hear 
    about them at all when tabbing.  When using the VO cursor we don’t hear the errors until 
    after we leave the respective input
        * [Login demo](https://drive.google.com/open?id=16L6u-e2of0YF6RiqDmgNUp9mwKyNRz1D)

## Exercises
1. Add an aria-describedby to each `<input>` element on the [Login page][login] `TAG v3.0.6`

## Validate
Checkout `TAG v3.0.6`
1. VoiceOver: 
    1. _“Passwords are case sensitive”_ should now always read when focused on **Password** input
    2. _“Please provide a Username”_ should now read when focused on **Username** input and the error 
    is showing, and should not read when the error is not showing
    3. _“Please provide a Password”_ should now read when focused on **Password** input and the 
    error is showing, and should not read when the error is not showing
        * [Login demo](https://drive.google.com/open?id=1BkPz4ezPHsZ08974YzVknDbhVa0ryaSp)


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
