---
title: clamp()
---

This is a great one and particularly useful when working with viewport units.`clamp()` takes in three arguments - the first is a minimum value, the second is the preferred value and the third is the maximum value.

<pre>
	<code class="language-css line-numbers">
		h2 {
			font-size: clamp(5rem, 10vw, 30rem);
		}
	</code>
</pre>

<h2 style="font-size: 5vw">I am set to 5vw</h2>
<h2 style="font-size: clamp(4rem, 3vw, 10rem)">So am I but using clamp()</h2>

In the example above our h2's font-size property will be set to 10vw, except in cases where 10vw is either smaller or bigger than our minimum / maximum values. In which case the respective min / max value will be used instead.

In normal language - ideally I want your font-size to be 10vw but please don't get any smaller than 4rem or any bigger than 10rem.

The cool thing about this is that we can use relative units like viewport-width without needing media queries to handle edge cases when the