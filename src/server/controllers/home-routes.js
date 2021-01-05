const router = require('express').Router();
// const {Jets} = require('./models');

router.get('/private', async (req, res) => {
    try {
      // const allJets = await Jets.findAll({
        
      // });
      // const jets = allJets.map(jet => jet.get({plane: true}));
  
      // res.render('private-home', {privateOptions: [...jets]});
//       res.render('private-home', {privateOptions: [
//         {imageUrl: "/resources/freight-1.jpg",
//         name: "ATR 42",
//         description: `
//             The ATR 42 is a twin-turboprop, short- to medium-haul regional airliner. The
//             aircraft performs well at high
//             altitude and in hot climates and is suitable for short runway operations. In mid-2000, ATR launched a
//             freighter conversion program for both the -42 and -72, involving installing a forward freight door and
//             modifying the cabin for freight.`,
//         id: 1
// },
// {imageUrl: "/resources/freight-2.jpg",
//         name: "Ilyushin IL76",
//         description: `
//         The Ilyushin Il-76 is a multi-purpose four-engine turbofan medium to long
//         range
//         freighter. It was designed to deliver heavy machinery to remote, poorly served areas. The Il-76 has seen
//         extensive service as a commercial freighter for ramp-delivered cargo, especially for outsized or heavy items
//         unable to be otherwise carried. Because of its ability to operate from unpaved runways, it has been useful
//         in
//         undeveloped areas. It's highlight is an internal winch system that can pull the cargo inside with a max.
//         weight
//         of 10t. per piece.`,
//         id: 2
// }
//       ]});
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
  router.get('/', async (req, res) => {
    try {
      
  
      res.render('home');
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router;