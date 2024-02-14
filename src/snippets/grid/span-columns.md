---
title: Span columns in CSS Grid
---

As well as explicitly telling a child where to sit within the grid, we can also do the below to achieve a similar effect. Again, a media query is required for this to work responsively.

<pre>
<code class="language-css line-numbers"> 

#card-container-3 { 
  display: grid; 
  gap: 1rem; 
} 
  
@media screen and (min-width: 500px) { 
  #card-container-3 { 
    grid-template-columns: repeat(4, 1fr); 
  } 
  
  #card-container-3 .span-2 { 
    grid-column: span 2; 
  } 
}

</code>
</pre>

<div class="demo">
  <div id="card-container-3">
    <div class="card card-1 span-2"></div>
    <div class="card card-2"></div>
    <div class="card card-3"></div>
    <div class="card card-4"></div>
    <div class="card card-5"></div>
    <div class="card card-6 span-2"></div>
  </div>
</div>
