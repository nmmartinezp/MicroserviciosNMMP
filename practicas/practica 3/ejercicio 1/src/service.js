class CalculatorService {
  async add(numberA, numberB) {
    const a = Number(numberA);
    const b = Number(numberB);
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Operación inválida: los valores deben ser números");
    }
    return await (a + b);
  }

  async substract(numberA, numberB) {
    const a = Number(numberA);
    const b = Number(numberB);
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Operación inválida: los valores deben ser números");
    }
    return await (a - b);
  }

  async multiply(numberA, numberB) {
    const a = Number(numberA);
    const b = Number(numberB);
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Operación inválida: los valores deben ser números");
    }
    return await (a * b);
  }

  async split(numberA, numberB) {
    const a = Number(numberA);
    const b = Number(numberB);
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Operación inválida: los valores deben ser números");
    }
    if (b === 0) {
      throw new Error("Operación Inválida: No se puede dividir por cero");
    }
    return await (a / b);
  }
}

export default new CalculatorService();
