== jQuery.readMore

jQuery.readMore adds a read more link to HTML elements that will overflow regarding its content. The plugin respects existing CSS and fits within the box it is placed, regardless of padding, line-height, font-face, or letter-spacing. This is an alternative to CSS rule "text-overflow: ellipsis". With jQuery.readMore it is possible to create custom read more links and display cool excerpts.


```html
      <div class="test__box vertCentered">
        Vertically Centered Text
      </div>
      <div class="test__box centeredMultiLine">
        "Centered<br>
              Multiline<br>
              Text"
      </div>
```	

```js
$('.test__box').readMore({ 
  title:'Read more',
  text:'...',
  href:function () {
    return '#'+$(this).index();
  }
});
```


== Project home, documentation, live demos etc.:

http://saquery.com/jquery-readmore/ ‎

 

== Forks and Pull Requests

Bug fixes and tweaks are very welcome!
 