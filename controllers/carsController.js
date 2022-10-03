const CarModel = require("../models/carModel");
const { Op } = require("sequelize")

class CarsController {
  
    createCar(req, res) {

    const { uuid } = require("uuidv4");
    const data = {  id: uuid(), ...req.body };

    CarModel.create(data)
    .then(() => res.status(201).json(data))
    .catch((err) => res.status(500).json( { error:err }));
 
  }

  getAllCars(req, res) {

  const{ name } = req.query;

  const filter = name
  ? {
    where: {
      name:{
        [Op.iLike]: `%${name}%`,
      }
    }
  }
  :{};
    
    CarModel
     .findAll(filter)
     .then(result => res.status(200).json(result))
     .catch(err => res.status(500).json( { error:err }));
    
}

  getCarById(req, res) {

    const { id } = req.params

    CarModel
     .findOne( { where: {id} } )
     .then(function (result) {
       if(result) {
        res.status(200).json(result)
       } else {
        res.status(404).json({ message: `Car not found`}) 
       }
     })
     .catch(err => res.status(500).json( { error:err }));

  }

  updateCar(req, res) {

  const { id } = req.params;

    CarModel
    .update(req.body, {where: { id }})
    .then(() => res.status(204).end())
    .catch((err) => res.status(500).json( { error:err }));
  }

  removeCar(req, res) {

    const { id } = req.params;

    CarModel.destroy({ where: { id }})
    .then(() => res.status(204).end())
    .catch((err) => res.status(500).json( { error:err }));
     
  }

 }


module.exports = new CarsController();

