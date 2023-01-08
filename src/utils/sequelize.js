import { Sequelize, DataTypes } from "sequelize";
import sqlite3 from "sqlite3";

let sequelize;
let Champions;
let Record;
let Pages;

const init_db = (path) => {
  sequelize = new Sequelize({
    dialectModule: sqlite3,
    dialect: "sqlite",
    storage: `${path}/database.sqlite`,
  });

  Champions = sequelize.define(
    "champions",
    {
      id: DataTypes.INTEGER,
      name_en: DataTypes.STRING,
      name_ch: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      timestamps: false,
    }
  );

  Record = sequelize.define("record", {
    champion: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
  });

  Pages = sequelize.define("pages", {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
  });

  sequelize.sync();
};

// TODO: User.findOrCreate
const save_record = async (record) => {
  //
};

const load_record = async () => {
  //
};

export { init_db, save_record, load_record };
