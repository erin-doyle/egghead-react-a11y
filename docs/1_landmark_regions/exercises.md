# Landmark Regions
## Problems
Checkout `TAG v0.0.1`
1. VoiceOver:
    1. The Rotor shows nothing for Landmarks
        * [Login demo](https://drive.google.com/open?id=1hcXjB1vIbBc6gzzkTuhwumAXq9V1kS8z)
        * [Wishlist and Browse demo](https://drive.google.com/open?id=101PU6oogcz9hydhdEyfO76EUe3ga36SF)
2. aXe findings:
    1. Content not contained in landmark regions 
    2. Page must contain one `<main>` region

## Exercises
1. Fix the [Login page][login] using aria roles `TAG v1.0.0`
2. Change the aria roles on the [Login page][login] to use HTML5 Landmark Region 
elements instead `TAG v1.0.1`
3. Add Landmark Regions to the [Browse page][browse] 
and the [Wishlist page][wishlist] `TAG v1.0.2`

## Validate
Checkout `TAG v1.0.2`
1. aXe:
    1. Reinspect to see findings resolved
2. VoiceOver:
    1. Landmarks should now be read and available in the Rotor 
        * [Login demo](https://drive.google.com/open?id=1uhRA1zpQzLe9B0Nu7FxPgDTJmJXsn0q9)
        * [Browse demo](https://drive.google.com/open?id=1_RoodP6HREaN-myAArcvv7DPb1Oi8yfD)


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
