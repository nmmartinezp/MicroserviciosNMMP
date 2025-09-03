import calculatorService from "./service.js";

class CalculatorController {
  async add(req, res) {
    try {
      const { a, b } = req.body;
      const result = await calculatorService.add(a, b);
      res.status(200).json({ result: result });
    } catch (err) {
      res.status(400).json({ result: err.message });
    }
  }

  async substract(req, res) {
    try {
      const { a, b } = req.body;
      const result = await calculatorService.substract(a, b);
      res.status(200).json({ result: result });
    } catch (err) {
      res.status(400).json({ result: err.message });
    }
  }

  async multiply(req, res) {
    try {
      const { a, b } = req.body;
      const result = await calculatorService.multiply(a, b);
      res.status(200).json({ result: result });
    } catch (err) {
      res.status(400).json({ result: err.message });
    }
  }

  async split(req, res) {
    try {
      const { a, b } = req.body;
      const result = await calculatorService.split(a, b);
      res.status(200).json({ result: result });
    } catch (err) {
      res.status(400).json({ result: err.message });
    }
  }
}

export default new CalculatorController();
