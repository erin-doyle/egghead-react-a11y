# Landmark Regions
Landmark regions are used by screen readers to make it easier for users 
to navigate the content on the page

## HTML5 elements and ARIA roles for Landmark regions

| HTML5 element | ARIA role | Use both? |
| --- | --- | --- |
| `<header>` | `role=”banner”` | Only when a descendant of an article, aside, main, nav or section element |
| `<nav>` | `role=”navigation”` | No |
| `<main>` | `role=”main”` | No |
| `<footer>` | `role=”contentinfo”` | Only when a descendant of an article, aside, main, nav or section element |
| `<aside>` | `role=”complementary”` | No |
| `<section>` | `role=”region”` | Only if the section element does NOT have an accessible name |
| `<article>` | `role=”article”` | No |
| `<form>` | `role=”form”` | No |
| none | `role=”search”` | N/A |


## Landmark Examples
* [HTML5](code_examples/html5_example.html)
* [ARIA Attributes](code_examples/aria_attributes_example.html)

## References
* http://www.a11ymatters.com/article/intro-html5-sectioning-elements/
* https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html
* https://www.w3.org/TR/html-aria/#docconformance
