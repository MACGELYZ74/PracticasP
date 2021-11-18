import { Model, DataTypes } from 'sequelize';

export default class roles extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Roles',
      }
    );
  }
}