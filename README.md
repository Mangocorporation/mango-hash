#mangoHash
This code was made to be a simple text to hash convert facilitating the data transport via URL

##How to use
Using require:

```javascript
    mangoHash = require("mango-hash");
    
    var data = '{"name": "Raul Mangolin"}';
    var result = mangoHash(data);
    
    console.log(result); 
    //this will print "rlWhLJ1yVwbtVyWuqJjtGJShM29fnJ4vsD=="
```

##How to convert this data in a backend code?
It's simple

**PHP**
```php
    $hash = 'rlWhLJ1yVwbtVyWuqJjtGJShM29fnJ4vsD==';
    echo base64_decode(str_rot13($hash));
```

I'll code a JavaScript converter soon. 