To extract these files from your google forms, preview the form, and paste this code in the console (unfortunately, we can't automatically extract this stuff due to cross-browser constraints):

```javascript
var formElement = document.getElementsByTagName('form')[0];
var fields = {};
Array.from(formElement.getElementsByTagName('input')).forEach(function(inputElement) {
  var humanName = inputElement.getAttribute('aria-label');
  if (humanName) {
    fields[humanName] = inputElement.getAttribute('name');
  }
});
console.log(JSON.stringify({
  actionUrl: formElement.getAttribute('action'),
  fields: fields
}, null, 2));
```

Copy the results into the appropriate `json` file in this directory.
