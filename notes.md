child routes render their content into their parent routes through {{outlet}}

All routes are children of the application route

Each template has a ‘main thing’ it works on, given by `model`. it isn't defined anywhere, but ember does this magically.

a route can have a function called `model()`. when the route is visited, the return value of `model()` is given to the corresponding controller as a property called `model:`.

  properties in the template need to be defined on the controller. the controller has the stuff that's rendered in the template. "that is the context that the template is rendered with."

  in the template, `model` corresponds to `model:` in the controller!

  (?) why did we define the bands in the route, rather than the controller?
    when the router enters that route, it calls `model()`

when you nest routes in the router file, it adds to the url path. so if songs is nested under bands, then the url would be something like /band/songs

  thinking of the route map like a tree, any points that can be formed amongst these routes will form a url that is served by the app

  by nesting routes in this way, the router maps those possible urls to route objects

  full route names

    bands.band.songs

      used as an arg to `link-to`
      used to determine file paths of the module name

this is a class:

  let Song = EmberObject.extend({
    title: '',
    band: '',
    rating: 0 
  });

router always checks index route first

routes are so important in ember that they have their own object. 

  when entering a route, the `model()` hook of the matching route is called

  the param wildcard `:slug`, when given a value, will be parsed by ember, and ember will try to deserialize the url segment and create a model object that's useful to ember

`modelFor()` can access any data that any parent routes have in their respective models. any route that is a parent can be used a parameter for `modelFor()`

  `this.modelFor('bands');` allows us to get access to whatever was returned in the model of the parent route `bands`

to get or set any property from an ember object (routes, controllers, components, etc.), you need to use Ember.get or Ember.set, because of performance

computed properties

  have dependent keys are args
  and a function as the last arg, which computes the value of the CP
  the value of the CP changes only if any of the dependent keys' values change

  they can serve as dependent keys for other computed properties

`bands.findBy('slug', params.slug)`

  bands = an array of band objects
  `slug` = a property of a band, and it's a dasherized version of the band's name
  `params.slug` = the param passed in from the URL. `slug` and `params.slug` have to match

given a url path bands/band/songs, at each segment of the url, ember is looking for a route object to activate

the hierarchical nature of ember routes is only triggered when the app first loads. if a user clicks a `link-to`, it'll go straight to that route without descending through its parent routes.

  data that we want to fetch only once should be in the topmost route

`{{outlet}}` is where child routes are rendered, and it's the default template for routes