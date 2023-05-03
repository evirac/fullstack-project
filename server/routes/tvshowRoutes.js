const express = require('express');
const router = express.Router();
const tvshowController = require('../controllers/tvshowController');

/**
 * App Routes 
*/
router.get('/', tvshowController.homepage);
router.get('/tvshow/:id', tvshowController.exploreTvshow );
router.get('/categories', tvshowController.exploreCategories);
router.get('/categories/:id', tvshowController.exploreCategoriesById);
router.post('/search', tvshowController.searchTvshow);
router.get('/explore-latest', tvshowController.exploreLatest);
router.get('/explore-random', tvshowController.exploreRandom);
router.get('/submit-tvshow', tvshowController.submitTvshow);
router.post('/submit-tvshow', tvshowController.submitTvshow);

 
module.exports = router;
