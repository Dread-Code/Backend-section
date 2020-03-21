class BaseRepository { /// plantilla culla responsabilidad va a ser heredada por otros repositorio

    constructor(model){/// recive el modelo de mongo db con la cual va interactuar
        this.model = model;
    }

    async get(id){ // obtener por id 
        return await this.model.findById(id);
    }

    async getAll(){// todas las colecciones 
        
        return await this.model.find();
    }

    async create(entity){

        return await this.model.create(entity);
    }

    async update(id,entity){
        return await this.model.findByIdAndUpdate(id,entity,{new:true});
    }


    async delete(id){
        await this.model.findByIdAndDelete(id);
        return true;
    }

}

module.exports = BaseRepository;