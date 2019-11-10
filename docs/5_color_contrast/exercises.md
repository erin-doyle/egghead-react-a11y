# Color Contrast
## Problems
Checkout `TAG v4.0.0`
1. aXe findings: 
    1. Elements must have sufficient color contrast
2. tota11y:
    1. Contrast ratios annotated to show they are insufficient
3. High Contrast browser extension:
    1. On **Login** page text is hard to read
    2. On **Wishlist** and **Browse** pages header nav buttons can no longer be seen
4. Windows High Contrast Mode:
    1. On **Wishlist** and **Browse** pages the active tab in the tablist is not visible

## Screenshot Examples
[Comparison of the High Contrast browser extension to Windows High Contrast mode](screenshot_examples/high_contrast_comparison_before.md)

## Exercises
1. Fix background and text/border foreground colors `TAG v5.0.0`

## Validate
Checkout `TAG v5.0.0`
1. aXe:
    1. Reinspect to see findings resolved
2. tota11y:
    1. Contrast ratios annotated should show they are acceptable
3. High Contrast browser extension 
    1. Text and buttons should now much easier to read/see
    
## Screenshot Examples
[Before and After comparisons - all modes](screenshot_examples/before_after_comparison.md)
    
## Exercises
1. Update styles to make the nav items look like [tabs](https://getbootstrap.com/docs/4.0/components/navs/#tabs) 
instead of [pills](https://getbootstrap.com/docs/4.0/components/navs/#pills) `TAG v5.0.1`

## Validate
Checkout `TAG v5.0.1`
1. Windows High Contrast Mode:
    1. The active tab in the tablists should now be easy to see/understand

## Screenshot Examples
[Windows High Contrast Mode final Before and After comparisons](screenshot_examples/WHC_before_after_final_comparison.md)


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
