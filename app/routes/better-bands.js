import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

let BetterBand = EmberObject.extend({
  name: '',
  coolFact: ''
});

export default Route.extend({
  model() {
    let realEstate = BetterBand.create({
      name: 'Real Estate',
      coolFact: 'has a pervert ex-guitarist'
    })

    let sjowgren = BetterBand.create({
      name: 'Sjöwgren',
      coolFact: 'no one knows who the fuck they are'
    });

    return [realEstate, sjowgren]
  }
});
