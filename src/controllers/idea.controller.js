let _ideaService = null;

class IdeaController{
    constructor({IdeaService}){
    _ideaService = IdeaService;
    }

    async get(req,res){
        const {ideaId} = req.params; 
        const idea = await _ideaService.get(ideaId);
        return res.send(idea);
    }

    async getAll(req,res){
        const ideas = await _ideaService.getAll();
        return res.send(ideas);
    }

    async create(req,res){
        const {body} = req;
        const createIdea = await _ideaSerevice.create(body);
        return res.status(201).send(createIdea);
    }
    
    async update(req,res){
        const {body} = req;
        const { ideaId } = req.params;
        const updatedIdea = await _ideaService.update(ideaId,body);
        return res.send(updatedIdea);
    }

    async delete(req,res){
        const {ideaId} = req.params;
        const deletedIdea = await _ideaService.delete(ideaId);
        return res.send(deletedIdea);
    }

    async getUserIdeas(){
        const { userId } = req.params;
        const ideas = await _ideaSerevice.getUserIdeas(userId);
        return res.send(ideas);
    }

    async upVoteIdea(req,res){
        const {ideaId} = req.params;
        const idea = await _ideaSerevice.upVoteIdea(ideaId);
        return res.send(idea);
    }

    async downVoteIdea(req,res){
        const {ideaId} = req.params;
        const idea = await _ideaSerevice.downVoteIdea(ideaId);
        return res.send(idea);
    }





}
module.exports = IdeaController;