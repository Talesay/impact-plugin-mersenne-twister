

<!-- Start twister.js -->

# Impact JS Mersenne Twister Plugin

This plugins allows yoy to generate pseudorandom numbers using a Mersenne Twister.
This plugin is based on the MT19937 algorithm, and code by [Ben Lesh](https://github.com/blesh/mersenne-twister.js)

## Installation

As a submodule, from the git command line:

```
git submodule add https://github.com/Talesay/impact-plugin-mersenne-twister.git lib/plugins/mersenne
``` 

Then require this module:

```
'plugins.array.utilities'
```

## Constructor
```javascript
var prng = new ig.MersenneTwister(seed);
```
__seed:__ An Integer to be used as the initial seed for the pseudorandom number generator, if absent Date.now() will be used
## Usage
```javascript
var prng = new ig.MersenneTwister(1);
pnrg.get();
0.057725428480649384
pnrg.get();
0.8143797201814594
var prng = new ig.MersenneTwister(42);
pnrg.getFloatRange(3,7);
4.8493376279088585
pnrg.getIntRange(-7, 5);
-2
```

## .get()

This method returns a pseudorandom float number between 0 and 1, including both

### Return:

* **Number** 

## .getIntRange(min, max)

This method returns a pseudorandom integer number between min and max, including both

### Params:

* **Number** *min* 
* **Number** *max* 

### Return:

* **Number** 

## .getIntRange(min, max)

This method returns a pseudorandom float number between min and max, including both

### Params:

* **Number** *min* 
* **Number** *max* 

### Return:

* **Number** 

# The MIT License (MIT)
## Copyright (c) 2015 Talesay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!-- End twister.js -->

