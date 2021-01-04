const router = require('express').Router();
const { Jets } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allJets = await Jets.finAll({
      // what data you want returned from the DB for allJets
    });

    res.status(200).json(allJets);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/freight', async (req, res) => {
  try {
    const allJets = await Jets.finAll({
      // what data you want returned from the DB for freight
    });

    res.status(200).json(allJets);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/international', async (req, res) => {
  try {
    const allJets = await Jets.finAll({
      // what data you want returned from the DB for international
    });

    res.status(200).json(allJets);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/private', async (req, res) => {
  try {
    const allJets = await Jets.finAll({
      // what data you want returned from the DB for private
    });

    res.status(200).json(allJets);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;