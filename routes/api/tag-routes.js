const router = require('express').Router();
//const { json } = require('sequelize/types');
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  // find all tags
  // include its associated Product data
  try {
    const tagsData = await Tag.findAll({
      include: { model: Product, through: ProductTag }
    });
    if (!tagsData) {
      res.status(404).json({'message': 'No Tags available'});
      return;
    }
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include : { model: Product, through: ProductTag}
    });
    console.log(tagData);
    if (!tagData) {
      res.status(404).json({'message': `No results for the id: ${req.params.id}`});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const newTag = await Tag.update(req.body, {
      where: { 
        id: req.params.id 
      }
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    await Tag.destroy({
      where : {
        id: req.params.id
      }
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
