---
title: repeat()
---

Used to avoid repetitive declarations whens setting properties for `grid-template-columns` and `grid-template-rows`.

The `repeat()` function takes two arguments, the first is the repeat count and the second specifies the set of columns or rows (tracks) to be repeated. The repeat count can either be set as an integer value of 1 or more, or using the keywords `auto-fill` or `auto-fit` both of which will repeat the set of tracks as many times as is needed to fill the grid container.

<pre>
	<code class="language-css line-numbers">
		
		grid-template-columns: repat(4, 1fr)
		
		// is the same as
		grid-template-columns: 1fr 1fr 1fr 1fr
		
	</code>
</pre>