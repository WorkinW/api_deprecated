import { hash } from "bcrypt";
import { response } from "express";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("CreateSpotController", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuid();
    const password = await hash("123456", 8);

    await connection.query(`
    INSERT INTO users (id, name, username, email, password, cpf, created_at) VALUES ('${id}', 'Admin', 'admin', 'admin@workin', '${password}', '123456789', 'now()')
  `);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to create a spot supertest", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "johndoe@gmail.com",
      password: "123456",
    });

    const { token } = responseToken.body;

    await request(app)
      .post("/spots")
      .send({
        user_id: "8e177ea9-af3e-4f2b-ab73-c978d670b6dd",
        company_id: "32dc0763-c291-4abf-ae09-5f3313ad0949",
        time_position: "entry",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(response.status).toBe(201);
  });
});
