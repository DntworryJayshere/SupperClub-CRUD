class Dish extends Model {}
Dish.init(
	{
		// attributes
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		prepTime: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		totalTime: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		yield: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		servings: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		yield: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: 'dish',
		// options
	}
);

Dish.sync();
