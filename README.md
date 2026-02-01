# eyeballs

## the eyeballs you've always wanted!

## standalone
Open `index.html` directly in a browser. No build tools or dependencies required.

Use like this:
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>eyeball</title>

    <link rel="stylesheet" href="eyeball.css" />

  </head>
  <body>
    <div class="wrapper">
      <h1>eyeballs</h1>

      <div id="eyeball-root"></div>
      <span id="eyeball-left"></span>
      <span id="eyeball-right"></span>

      <h2>the eyeballs you've always wanted!</h2>
    </div>

    <script src="eyeball.js"></script>
    <script>

      window.mountEyeball("eyeball-root");
      window.mountEyeball("eyeball-left");
      window.mountEyeball("eyeball-right");

    </script>
  </body>
</html>

```
