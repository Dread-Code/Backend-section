const mongoose = require('mongoose');

const { Schema } = mongoose;

const { compareSync, hashSync, genSaltSync } = require('bcryptjs');

/** CompareSync: ayuda a compara constrase;as una vez integradas,
 * hasssync: crea hash a la contrase;a
 * salt a;ade saldo al hash
  */

  const UserSchema = new Schema({
      name:{
          type:String,
          required: true
      },
      username:{
          type: String,
          required: true
      },
      password:{
          type:String,
          required: true
      }
  });

  
  UserSchema.methods.toJSON = function () {
        /**Cada vez que se lea un elemento user queremos 
         * que el campo contase;a sea eliminado
         */
        let user = this.toObject();
        delete user.password;
        return user;
  }


  UserSchema.methods.comparePasswords =  function(password){
    /**comparamos la contrase;a */
    return compareSync(password, this.password);

  }

  UserSchema.pre('save', async function (next) {
      const user = this; /** Una vez el metodo se guarde 
      la funcion con el this estara haciendo referencia al 
      schema dentro del modulo */

      if (!user.isModified('password')) {/**
        validar que la contrase;a si se este modificando
        si no lo hace que continue con el flujo NEXT  */

          return next();
          
      }

      const salt = genSaltSync(10); // creamos el salt de 10 caracteres
      const hashedPassword = hashSync(user.password,salt);
      user.password = hashedPassword;/**
      para que la password sea asignada de una vez en el objeto en
      cuestion */
      next();

  });

  module.exports = mongoose.model('user', UserSchema);