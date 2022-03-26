const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// find all tags and be sure to include its associated Product data
router.get('/', (req, res) => { // The `/api/tags` endpoint
  Tag.findAll({
    include: [Product]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// find a single tag by its `id` and be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findOne({
    include: [Product],
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'Tag not found with this id!' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData[0]) {
        res.status(404).json({ message: 'No Tag with this id!' });
        return;
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No Tag found with this id!' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
