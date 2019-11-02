# LORISS

Loriss is a css framework based on a 5 colour, 3 font and 12 column 
style system. Written in sass, loriss is intended to be used in your 
sass code but the compiled output is available in both .scss 
(required if you want to use loris' vairables in your own 
code base) or .css if you want to use the out-of-the-box theming and 
compose your styles with class names in your markup

To use Loriss run:
`npm i loriss`

## Sass import
To use either import in your main scss file:
`@import "loriss";`

Or import in a js file. For example in a React project, add this line 
near the top of App.js:
`import "loriss"`

You can then use all the loriss styles in your sass code:
```
h1 {
  @include set-grid-span(8);
  color: $color--complementary;
}
```

or in your markup:
```
<h1 class="color--complementary font-family--serif">Loriss</h1>
```

## CSS import
For the compiled css output, use the following import statement in your 
main .css file:
`@import "~loriss/css/index.css";`


_in many of the above cases, you will need a tool such as webpack 
configured to resolve the node_modules file paths_

### src files
You also have access to all of the source files if you only want to 
import a subset of loriss styles. For example, to just get the 
variables, include this line in your sass file:
`@import '~loriss/src/variables'`

You then be able to do stuff like this:
```
h1 {
    color: $color--secondary;
}
```

But this would throw an error because we haven't included the mixins:
```
h1 {
    @include set-grid-span(8);
}
```


## Resets
Loriss includes some global css resets. If you want to use your own resets you should make sure you include loriss before your own styles. 