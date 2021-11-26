import { Model, DataTypes } from 'sequelize';

export default class Curso extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Curso',
      }
    );
  }
}