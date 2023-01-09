import { Sequelize, DataTypes } from "sequelize";
import sqlite3 from "sqlite3";

import { champion_list } from "../assets/champion_list";

let sequelize;
let Champions;
let Record_1;
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
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name_en: DataTypes.STRING,
      name_ch: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      timestamps: false,
    }
  );

  Record_1 = sequelize.define(
    "record_1",
    {
      champ_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "champions",
          key: "id",
        },
      },
      champion: DataTypes.STRING,
      state: DataTypes.BOOLEAN,
    },
    {
      freezeTableName: true,
    }
  );

  Pages = sequelize.define("pages", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
  });

  sequelize.sync();
};

const init_champ = async () => {
  for (let i = 0; i < champion_list.length; i++) {
    await Champions.create({
      id: i + 1,
      name_en: champion_list[i].name,
      name_ch: champion_list[i].name_chinese,
      date: champion_list[i].date,
    }).catch((error) => {
      console.log(error.message);
    });
  }
};

const init_page = async () => {
  await Pages.create({
    id: 1,
    title: "S-",
  }).catch((error) => {
    console.log(error.message);
  });
};

// TODO: User.findOrCreate
const save_record = async (record) => {
  //
};

const load_record = async () => {
  //
};

export { init_db, init_champ, init_page, save_record, load_record };
