# Implementing the challenge 1 website

## Initialise a new react app

Clear down for the work

## Review the target example

Target has a landing home page component and a shop coponent that can be accessed from navbar or from the Browse plants
The site is responsive

- Create components
- Create pages
- test the basic construct works as coponents

- move the product to a component

  - Setup the product component to take the prop values for price name and url
  - implement the product in the shop as a single unit passing the testdata

- Create multiple objects from the sourcedata with a callback function

- Implement routing from navbar to call each page.

  - Setup BrowserRouter Routes Route (Alias BrowserRouter as Router)
    -configure routes in the app.jsx to pages targets
    -configure Header Nav to take the routes for all pages

- Set Styling for home page

  - import bootstrap using npm install bootstrap

- Set styling for Header

- Set Styling for the products.
  - implement responsive grid on the products for the sizes that could be used.

| Class                | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| `container-fluid`    | Creates a full-width container, spanning the entire width of the viewport           |
| `row`                | Creates a horizontal group of columns                                               |
| `g-0`                | Removes gutters (spacing between columns) in rows and columns                       |
| `col-md-6`           | Creates a column that spans 6 units (half the width) on medium-sized screens and up |
| `d-flex`             | Creates a flexbox container                                                         |
| `align-items-center` | Vertically centers flex items                                                       |
| `bg-light`           | Applies a light background color                                                    |
| `bg-success`         | Applies a green (success) background color                                          |
| `p-0`                | Removes padding on all sides                                                        |
| `p-5`                | Applies large padding on all sides                                                  |
| `mb-3`               | Applies margin to the bottom                                                        |
| `mb-4`               | Applies larger margin to the bottom                                                 |
| `text-success`       | Applies green (success) text color                                                  |
| `text-muted`         | Applies a muted (subdued) text color                                                |
| `text-white`         | Applies white text color                                                            |
| `display-4`          | Applies a large display heading style                                               |
| `lead`               | Makes a paragraph stand out                                                         |
| `btn`                | Base class for buttons                                                              |
| `btn-success`        | Applies green (success) styling to a button                                         |
| `btn-lg`             | Makes a button larger                                                               |
| `img-fluid`          | Makes an image responsive (scale with its container)                                |
| `h-100`              | Sets height to 100%                                                                 |
| `w-100`              | Sets width to 100%                                                                  |
| `object-fit-cover`   | Makes an image cover its container while maintaining aspect ratio                   |
| `py-3`               | Applies padding to the top and bottom                                               |
| `h3`                 | Applies h3 heading styles                                                           |
| `mb-0`               | Removes margin from the bottom                                                      |
| `text-end`           | Aligns text to the right                                                            |
| `me-3`               | Applies margin to the right (end in LTR languages)                                  |

# Implement the challenge 2 website

Concepts
• Handling events
• React state (useState)
• Conditional rendering

Task summary
On the shop page, each item component has an “Add to cart” button that currently does nothing. Change this so that clicking the buttons toggles the text back and forth between “Add to cart” and “In cart”. [link](https://react-simple-shop.pages.dev/items).

At this stage, there’s no need to store the cart data - simply change the appearance of the buttons.

update the shop page to change the button states

**_Note_** Be aware of ensuring that state is a single point of truth for the outcome rather than using several state objects for multiple responses in the page. state is run asynchronously.
