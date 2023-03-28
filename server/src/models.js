import { Model, DataTypes } from "sequelize";
import { dbConnection } from "./connections.js";
import { quotes, authors } from "../data/quotes.js";

const { STRING, INTEGER, FLOAT } = DataTypes;

class Quote extends Model {}

Quote.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quotetext: { type: STRING, allowNull: false },
    source: { type: STRING, allowNull: true },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "quote",
      plural: "quotes",
    },
  }
);

class Author extends Model {}

Author.init(
  {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: STRING, allowNull: false },
    photo: { type: STRING, allowNull: true },
  },
  {
    sequelize: dbConnection,
    name: {
      singular: "author",
      plural: "authors",
    },
  }
);

// Define our associations
Quote.belongsTo(Author);
Author.hasMany(Quote);

await dbConnection.sync({ force: true });

// // seed the database!
await Author.bulkCreate(authors);
await Quote.bulkCreate(
  quotes.map((m) => {
    const { id, ...Quote } = m;
    return Quote;
  })
);

export { Quote, Author };