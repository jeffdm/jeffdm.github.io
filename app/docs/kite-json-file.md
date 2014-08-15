---
layout: docs
title: Kite JSON File
permalink: /kite-json-file/
published: true
---

## Kite JSON File

---

The Kite JSON file (kite.json) is similar to package.json for NPM. It describes
meta data for different Docker images, such as the image name, version,
description and logo.

### Example

{% highlight js %}
{
  "name": "html",
  "version": "0.1.0",
  "description": "A HTML app powered by Nginx.",
  "author": "Kite Development Group",
  // Path to the logo in the current directory
  "logo": "logo.png",
  "app": {
    // When app has multiple exposed ports, specify which one people should see
    "webPort": 8000
  }
}
{% endhighlight %}

### Created Image

![Created Image](/img/kite-json-file/created-image.png)

### Created App

![Created App](/img/kite-json-file/created-app.png)
