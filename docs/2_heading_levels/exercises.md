# Heading Levels
## Problems
Checkout `TAG v1.0.2`
1. VoiceOver:
    1. The Rotor shows the Headings are not useful
        * [Login and Browse demo](https://drive.google.com/open?id=1HR1tK9aZzFCeUaY0o__JmKLN8vaWCtM1)
2. aXe findings: 
    1. Page must contain a level-one heading
    2. Heading levels should only increase by one
3. tota11y:
    1. Non-contiguous heading levels are annotated

## Exercises
1. Fix the [Login page][login] `TAG v2.0.0`
2. Add a heading level 1 to the [Browse page][browse] and 
the [Wishlist page][wishlist] around the text functioning as
the top level heading for each page respectively. `TAG v2.0.1`
3. Fix the heading levels to be contiguous for each [Movie][movie] and 
the [MovieEditor][editor] `TAG v2.0.2`

## Validate
Checkout `TAG v2.0.2`
1. aXe:
    1. Reinspect to see findings resolved
2. tota11y:
    1. Annotate to show heading levels are acceptable
3. VoiceOver:
    1. Heading-level one should now read and be available in the Roter 
    and other levels should now appropriate in the Rotor
        * [Login demo](https://drive.google.com/open?id=1HIP6HDpR1ReQiRHt7RwVEATdUXDfos_c)
        * [Browse demo](https://drive.google.com/open?id=1Qze2v6R9m79x_MSHZIL4NGQIITtTK6Dq)


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
