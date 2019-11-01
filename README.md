# LORISS

Loriss is a css framework based on a 5 colour, 3 font and 12 column 
style system

To use Loriss run:
`npm i loriss`

## Resets
Loriss includes some global css resets. If you want to use your own resets you should make sure you include loriss before your own styles. 

To use either import in your main css file:
`@import "~loriss";`
(You will need a tool like webpack configured to resolve node_modules 
paths.)

Or import in a js file. For example in a React project, add this line 
near the top of App.js:
`import "loriss"`
