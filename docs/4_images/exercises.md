# Images
## Problems
Checkout `TAG v3.0.6`
1. VoiceOver:
    1. The alt text _“movie”_ is read for each image providing no context (which movie is it?)
        * [Movie images demo](https://drive.google.com/open?id=1AI_9jWJqbbMkkppTQmSgxnZQe9oaMPDd)
2. eslint-plugin-jsx-a11y: 
    1. Reports missing `alt` prop

## Exercise
1. Test the result when no `alt` attribute is provided to the `<img>` element in the [Movie component][movie]

## Validate
1. VoiceOver: 
    1. The file name is read for each movie poster image
        * [Movie images with no alt demo](https://drive.google.com/open?id=1lOGuNJlJMUcZJJDI8tGZM6oUSS9okKKF)
2. eslint-plugin-jsx-a11y: 
    1. Still reports missing `alt` prop

## Exercise
1. Test the result when supplying an empty `alt` attribute to the `<img>` element in the [Movie component][movie]

## Validate
1. VoiceOver: 
    1. The VO cursor skips each of the movie poster images completely and nothing is read
        * [Movie images with empty alt demo](https://drive.google.com/open?id=1Hgyx-1CdchsjQhBLWsBhgd4m0wMo_KNP)

## Exercise
1. Supply a more useful text value in the `alt` attribute to the `<img>` element in the [Movie component][movie] `TAG v4.0.0`

## Validate
Checkout `TAG v4.0.0`
1. VoiceOver: 
    1. Each movie poster image should now have appropriate alt text
        * [Movie images with helpful alt demo](https://drive.google.com/open?id=1XtoTPleT85emZLT9HLu_7wmqmuZwQ3cO)


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
