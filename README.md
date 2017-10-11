# marko-include-bug

When including nested `<include>` in components you get strange results if the inner `input.renderBody` has nested HTML.

1. Running the `server` script produces the same result for all examples
2. Running the `webpack` build and loading `index.html` in the browser you get varying results for each example.
