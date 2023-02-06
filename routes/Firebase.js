const router = require('express').Router();
const Firebase = require('../models/Firebase');
// create Firebase
router.post('/', async (req, res) => {
    const newFirebase = new Firebase(req.body);
    console.log(req.body)
    try {
      const savedFirebase = await newFirebase.save();
      res.status(201).json(savedFirebase);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET

router.get('/find/:id', async (req, res) => {
  try {
    const Firebase = await Firebase.findById(req.params.id);
    res.status(200).json(Firebase);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all Firebase
router.get('/', async (req, res) => {
    try {
      const Firebase = await Firebase.find();
      res.status(200).json(Firebase);
    } catch (e) {
      res.status(500).json(e);
    }
});

module.exports = router;
