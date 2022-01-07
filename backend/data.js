const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const postmsg = async (msg) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "wexam",
  });

  await connection.connectAsync();
  console.log("Server started");
  const sql = `INSERT INTO message (msg) values (?)`;
  await connection.queryAsync(sql, [msg]);
  await connection.endAsync();
};

const getmsg = async () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "cdac",
        database: "wexam",
      });
    
      await connection.connectAsync();
      console.log(" Get msg Server started");
      const sql = `SELECT   *  from message `;
      const list = await connection.queryAsync(sql);
      console.log(list);
      await connection.endAsync();
      return list;
}

postmsg("I am going to placed in google ,and cdac i..");
module.exports = {getmsg,postmsg};

