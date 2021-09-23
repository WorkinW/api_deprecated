import express from 'express';
import { createEmployee } from './routes';

const app = express();

app.get("/", createEmployee)

app.listen(3333);
