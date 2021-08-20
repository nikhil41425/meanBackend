var express= require('express');
var postRouter=express.Router();

var postController = require('../controllers/posts.controller');

postRouter.post('',postController.addPost);
postRouter.get('',postController.getPost);
postRouter.get('/:id',postController.getPostById);
postRouter.put('/:id',postController.updatePost);
postRouter.delete('/:id',postController.deletePost);

module.exports=postRouter;
