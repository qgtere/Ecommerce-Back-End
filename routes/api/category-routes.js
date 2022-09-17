const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findAll({
      // Add Book as a second model to JOIN with
      include: { model: Product }
    });
    if (!categoriesData) {
      res.status(404).json({'message': 'No Categories available'});
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
      include: { model: Product }
    });
    if (!CategoryData) {
      res.status(404).json({'message': `No results for the id: ${req.params.id}`});
      return;
    }
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category  
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }  
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const newCategory = await Category.update(req.body, {
      where: {
        id : req.params.id
      }
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
     const productsData = await Product.findAll({ 
      attributes: ['id'], 
      where: { category_id: req.params.id }
    });
    const productsArr = productsData.map(({ id }) => id);
    if (productsArr.length > 0) {
      const productTagsData = await ProductTag.findAll({
        attributes: ['tag_id'],
        where: { product_id : productsArr }
      });
      const productTagsArr = productTagsData.map(({ tag_id }) => tag_id);
      if (productTagsArr.length > 0){
        //destroy ProductTag
        await ProductTag.destroy({
          where: { product_id : productsArr }
        });                        
      }
      //destroy products
      await Product.destroy({
        where: { category_id: req.params.id }
      });
    }
    //destroy category
    await Category.destroy({
      where: {id: req.params.id}
    });
    res.sendStatus(200);
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
