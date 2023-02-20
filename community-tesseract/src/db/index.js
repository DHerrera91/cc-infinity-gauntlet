import { open } from "sqlite";
import driver from "sqlite3";

export async function getDB() {
  try {
    const db = await open({
      filename: "db.sqlite",
      driver: driver.Database,
    });

    if (!db) {
      throw new TypeError(`DB Connection expected, got: ${db} `);
    }

    return db;
  } catch (error) {
    console.error("There was an error trying to connect to DBMS");
    error;
  }
}
