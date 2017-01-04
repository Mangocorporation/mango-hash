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

##How to convert this hash?
It's simple. Just pass one more parameter _true_ and de hash will be reverted.

**JavaScript**
```javascript
    mangoHash = require("mango-hash");
    
    var data = 'rlWhLJ1yVwbtVyWuqJjtGJShM29fnJ4vsD==';
    var result = mangoHash(data, true);
    
    console.log(result); 
    //this will print "Raul mangolin"
```

If you want decode this hash in another code language, try to use rot13 and base64 decode like this PHP code bellow:

**PHP**
```php
    $hash = 'rlWhLJ1yVwbtVyWuqJjtGJShM29fnJ4vsD==';
    echo base64_decode(str_rot13($hash));
```