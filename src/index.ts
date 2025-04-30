import express, { Request, Response } from "express";
import { DatabaseMemory } from "./config/database-memory";

const PORT = 3001;
const app = express();

const database = new DatabaseMemory();
app.use(express.json());

app.get(
  "/videos",
  async (request: Request, response: Response): Promise<any> => {
    const search = request.query.search as string;
    const videos = await database.list(search);
    return response.json(videos);
  }
);

app.post(
  "/videos",
  async (request: Request, response: Response): Promise<any> => {
    const { title, description, duration } = request.body;
    await database.create({ title, description, duration });
    return response.status(201).send();
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
