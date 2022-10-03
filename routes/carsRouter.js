const { Router } = require("express");
const router = Router();
const CarsController = require("../controllers/carsController");

// Create - Criando um Carro
router.post("/", CarsController.createCar);

// Read - Pegando os carros
router.get("/", CarsController.getAllCars);

// Read - Pegando um carro
router.get("/:id", CarsController.getCarById);

// Update - Atualizando um carro (total)
router.put("/:id", CarsController.updateCar);

// Delete - Excluindo um carro
router.delete("/:id", CarsController.removeCar);

module.exports = router;