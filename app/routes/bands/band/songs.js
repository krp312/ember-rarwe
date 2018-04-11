import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return this.modelFor('bands.band'); // this gets the band that was retrieved one level above (in band)
  }
});