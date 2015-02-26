/*jslint bitwise: true*/
/**
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
*/
ig.module(
    'plugins.mersenne.twister'
).requires(
    'impact.impact'
).defines(function () {
    /**
     * ## Constructor
     * ```javascript
     * var prng = new ig.MersenneTwister(seed);
     * ```
     * __seed:__ A Integer to be used as the initial seed for the pseudorandom number generator, if absent Date.now() will be used
     * ## Usage
     * ```javascript
     * var prng = new ig.MersenneTwister(1);
     * pnrg.get();
     * 0.057725428480649384
     * pnrg.get();
     * 0.8143797201814594
     * var prng = new ig.MersenneTwister(0.35);
     * pnrg.getFloatRange(3,7);
     * 6.2455029781237705
     * pnrg.getIntRange(-10, 5);
     * 0.057725428480649384
     * ```
     */
    'use strict';
    ig.MersenneTwister = ig.Class.extend({
        mt: [],
        last32: 18122433253 & 0xFFFFFFFF,
        mod: 624,
        index: 0,
        init: function (seed) {
            var s = typeof seed !== 'undefined' ? seed : Date.now();
            this.mt = [s];
            this.generate();
        },
        generate: function () {
            var arrayCopy = [],
                largestNumber,
                smallestNumber,
                i,
                y;
            for (i = 0; i < this.mod - 1; i += 1) {
                this.mt[i + 1] = this.last32 * ((this.mt[i] ^ (this.mt[i] >>> 30)) >>> 0) + 1;
            }
            for (i = 0; i < this.mod; i += 1) {
                y = ((this.mt[i] & 0x80000000) + (this.mt[(i + 1) % this.mod] & 0x7fffffff)) >>> 0;
                this.mt[i] = (this.mt[(i + 397) % this.mod] ^ (y >>> 1)) >>> 0;
                if (y % 2 !== 0) {
                    this.mt[i] = (this.mt[i] ^ 0x9908b0df) >>> 0;
                }
            }
            for (i = 0; i < this.mod; i += 1) {
                this.mt[i] = (this.mt[i] >>> 11);
                this.mt[i] ^= (this.mt[i] >>> 11);
                this.mt[i] ^= (this.mt[i] << 7) & 0x9d2c5680;
                this.mt[i] ^= (this.mt[i] << 15) & 0xefc60000;
                this.mt[i] ^= this.mt[i] >>> 18;
                this.mt[i] >>>= 0;
                arrayCopy[i] = this.mt[i];
            }
            largestNumber = arrayCopy.sort(function (a, b) {
                return a - b;
            })[this.mod - 1];
            smallestNumber = arrayCopy[0];
            for (i = 0; i < this.mod; i += 1) {
                this.mt[i] = this.mt[i].map(smallestNumber, largestNumber, 0, 1);
            }
        },
        /**
         *This method returns a pseudorandom float number between 0 and 1, including both
         *@method .get
         *@return {Number}
         */
        get: function () {
            var y = this.mt[this.index];
            this.index = (this.index + 1) % this.mod;
            return y;
        },
        /**
         *This method returns a pseudorandom integer number between min and max, including both
         *@method .getIntRange
         *@param {Number} min
         *@param {Number} max
         *@return {Number}
         */
        getIntRange: function (min, max) {
            return Math.floor(this.get() * (max - min + 1)) + min;
        },
        /**
         *This method returns a pseudorandom float number between min and max, including both
         *@method .getIntRange
         *@param {Number} min
         *@param {Number} max
         *@return {Number}
         */
        getFloatRange: function (min, max) {
            return (this.get() * (max - min)) + min;
        }
    });
});
/**
 * # The MIT License (MIT)
 * ## Copyright (c) 2015 Talesay
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */