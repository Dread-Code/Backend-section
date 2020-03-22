const { Router } = require('express');
const { ParseIntMiddleware } = require('../middlewares')

module.exports = function ({ IdeaController }) {
    const router = Router();


    router.get("",[ParseIntMiddleware],IdeaController.getAll);
    router.get("/:ideaId",IdeaController.get);
    router.get("/:ideaId/all",IdeaController.getUserIdeas);
    router.post("",IdeaController.create);
    router.patch("/:ideaId",IdeaController.update);
    router.delete("/:ideaId",IdeaController.delete);
    router.delete("/:ideaId/upvote",IdeaController.upVoteIdea);
    router.delete("/:ideaId/downvote",IdeaController.downVoteIdea);

    return router;
};

