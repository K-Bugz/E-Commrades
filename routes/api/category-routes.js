// Inspired from 13-ORM main in the UT code on routes!
const router = require('express').Router();
const { Category, Product } = require('../../models');

// find all categories be sure to include its associated Products
router.get('/categories', (req, res) => { // The `/api/categories` endpoint
  Category.findAll({
    include: [Product]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// find one category by its `id` value be sure to include its associated Products
router.get('/categories/:id', (req, res) => {
  Category.findOne({
    include: [Product],
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'Category not found with this id!' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// create a new category
router.post('/categories/', (req, res) => {
  Category.create({
    category_name: req.body.category
  })
    .then(dbCategoryData => { dbCategoryData })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// update a category by its `id` value
router.put('/categories/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData[0]) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// delete a category by its `id` value
router.delete('/categories/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
