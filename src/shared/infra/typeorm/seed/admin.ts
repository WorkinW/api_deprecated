import { hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidv4();
  const password = await hash("123456", 10);

  await connection.query(
    `
      INSERT INTO users (id, name, username, email, password, "is_admin", created_at) VALUES ('${id}', 'Admin', 'admin', 'admin@workin', '${password}', true, 'now()')
    `
  );
}

create().then(() => {
  console.log("Admin created");
});
