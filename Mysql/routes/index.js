const router = require("express").Router()
const postController = require('../controllers/posts')

router.get('/', postController.findAll)
router.get('/:id', postController.findById)
router.post('/', postController.create)
router.put('/:id', postController.update)
router.delete('/:id', postController.delete)
router.delete('/', postController.deleteAll)

module.exports = router