import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Leonardo',
      sobrenome: 'Silva',
      email: 'leonardo@hotmail.com',
      idade: '25',
      peso: 70,
      altura: 1.70,
    });
    res.status(200).json(novoAluno);
  }
}

export default new HomeController();
