child routes render their content into their parent routes through {{outlet}}

All routes are children of the application route

Each template has a ‘main thing’ it works on, given by `model`. it isn't defined anywhere, but ember does this magically.

a route can have a function called `model()`. when the route is visited, the return value of `model()` is given to the corresponding controller as a property called `model:`.

  properties in the template need to be defined on the controller. the controller has the stuff that's rendered in the template. "that is the context that the template is rendered with."

  in the template, `model` corresponds to `model:` in the controller!

  (?) why did we define the bands in the route, rather than the controller?
    when the router enters that route, it calls `model()`