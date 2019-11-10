# `<label>` elements
## Problems
Checkout `TAG v2.0.2`
1. eslint-plugin-jsx-a11y:
    1. Running lint shows errors concerning labels in Login.js
2. aXe findings: 
    1. Form elements must have labels
3. tota11y:
    1. Missing labels are annotated

## Exercises
1. Fix the labels on the [Login page][login] and the [MovieEditor][editor] `TAG v3.0.0`
2. Refactor the `<input>` elements from the Login page into a reusable component `TAG v3.0.1`

## Validate
Checkout `TAG v3.0.1`
1. eslint-plugin-jsx-a11y:
    1. There should be no more lint errors on `Login.js`
2. aXe: 
    1. Reinspect to see findings resolved
2. tota11y
    1. There should no longer any missing labels annotated


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
