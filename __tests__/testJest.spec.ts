import request from "supertest";
import app from '../index';

describe("Testes das rotas de Users", () => {
  it("Deve retornar todos os Users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
  });

  it("Deve criar um novo User", async () => {
    const novoUser= {
      name: "Airton",
      email: "airton@test.com",
      profissao: "Desenvolvedor",      
      idade: 28,
    };
    const response = await request(app).post("/users").send(novoUser);

    expect(response.status).toBe(200);
  });
});