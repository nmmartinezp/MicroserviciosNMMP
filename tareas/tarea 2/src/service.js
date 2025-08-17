import Agenda from "./model.js";

class AgendaService {
  async getAll() {
    return await Agenda.find();
  }

  async getById(id) {
    return await Agenda.findById(id);
  }

  async create(data) {
    const nuevo = new Agenda(data);
    return await nuevo.save();
  }

  async update(id, data) {
    return await Agenda.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Agenda.findByIdAndDelete(id);
  }
}

export default new AgendaService();
