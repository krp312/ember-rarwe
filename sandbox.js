let Song = EmberObject.extend({
  title: '',
  band: '',
  rating: 0
});

let achilles = Song.create({
  title: 'Achilles Last Stand',
  rating: 5
})

let sirens = Song.create({
  title: 'Sirens'
});

achilles.get('rating');
sirens.get('rating');