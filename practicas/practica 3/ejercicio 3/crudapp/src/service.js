import Task from "./model.js";

class TaskService {
  async getAll() {
    return await Task.find();
  }

  async getById(id) {
    return await Task.findById(id);
  }

  async create(data) {
    const nuevo = new Task(data);
    return await nuevo.save();
  }

  async update(id, data) {
    return await Task.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Task.findByIdAndDelete(id);
  }
}

export default new TaskService();
