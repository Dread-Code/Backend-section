let _homeService =null; 

//esta clase no va a necesitar nada ya que awilix va inyectar que solicite

class HomeController {

    constructor({ HomeService }){ // esto lo inyecta awilix desde el container y debe tener exactamente el mismo nombre que en el mismo 

        _homeService = HomeService; /* NOTA: no se pone this porque no utiliza this._homeservice 
        porque estaria diciendo que esta clase pertenece a esta y no es asi estas inyectando 
        duirectamente esa clase de otra dependencia y de esta manera tambien nos aseguramos
        que la variable _homeservice sea de tipo privado y solo sea utilizada en este modulo */
    }

    index(req,res){
        return res.send(_homeService.index());
    }
}


    module.exports = HomeController;

    
