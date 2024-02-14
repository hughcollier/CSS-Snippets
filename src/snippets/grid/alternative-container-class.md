---
title: Alternative to the inner / outer container classes
---

Since this is such a common design pattern (a section that with a background or image that spans the full width of the page) I have often found myself doing something like this:

<pre><code class="language-html">
				&lt;section class="outer"&gt;
					&lt;div class="inner"&gt;
					&lt;/div&gt;
				&lt;/section&gt;
</code></pre>

And then setting both the outer and inner divs to have a width of 100% with the inner div also getting a `max-width:1400px` and `margin: 0 auto` to keep it centred.

Here, we are making use of a lesser-known CSS feature that allows us to set names for our grid-lines using square brackets. While we can use any names we like for our lines we should avoid names that might appear elsewhere in the css spec - like span or div. Things become very cool when we also append `-start` and `-end`. When we use this syntax grid will create implicit named area for us. For example, in our example below we are using the name `content-start` and `content-end`. We can then place an element inside this area using `grid-column: content`.

<pre><code class="language-css line-numbers"> 
			.content-grid {
				display: grid;
				grid-template-columns: [full-width-start] 1fr [content-start] minmax(250px, 700px) [content-end] 1fr [full-width-end];
			}
			
			.content-grid > * {
				grid-column: content;
			}
			
			.content-grid > .full-width {
				grid-column: full-width;
				background-color: #b639ff;
				color: #3a035e;
			}
</code></pre>
<div class="demo">
  <div class="content-grid">
    <section class="">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aperiam in sit, fugiat deserunt, ipsum aliquam labore impedit nemo quibusdam optio odio eaque nobis iure tempore. Architecto velreprehenderit ipsum?
      </p>
    </section>

    <section class="content-grid full-width">
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aperiam in sit, fugiat deserunt, ipsum aliquam labore impedit nemo quibusdam optio odio eaque nobis iure tempore. Architecto velreprehenderit ipsum?
    </p>
    </section>

    <section>
      <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aperiam in sit, fugiat deserunt, ipsum aliquam labore impedit nemo quibusdam optio odio eaque nobis iure tempore. Architecto velreprehenderit ipsum?
    </p>
    </section>
  </div>
</div>
  
