# marko-include-bug

WHen including nexted <include> tags you get strange results if the inner include has nested HTML. 

Running the `server` script produces the same result for all examples, but running the `webpack` build and loading `index.html` you get varying results for each example.
