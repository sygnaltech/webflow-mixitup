# webflow-mixitup
WebFlow + MixItUp Framework

This is a framework to simplify and streamline integration of the MixItUp library into WebFlow projects.

It's designed around two key aspects-

** DYNAMIC CARDS**

+ Streamlined markup for a WebFlow Collection List, to prepare it for MixItUp.

** DYNAMIC FILTER BUTTONS **

+ Streamlined markup for dynamic filter buttons, also likely generated via Collection List


The typical base design configuration we're working with is

1. A WebFlow CMS collection (content)
2. A WebFlow CMS collection (categories)
3. A single-reference field from content to category 

## Usage

In your calling page, include these script references before the </body> tag; 

```javascript
<script src="https://cdn.jsdelivr.net/gh/patrickkunka/mixitup@3.3.1/dist/mixitup.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/sygnaltech/webflow-mixitup/dist/webflow-mixitup.js"></script>

<script>
$(function() {

// Initialize 

});
</script>
```

## Working Examples

Sygnal's Blog - https://www.sygnal.com/blog

