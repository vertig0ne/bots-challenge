import express from "express";
import controller from "../controller/names.controller";

export const name = "name-count";
export const router = express.Router();

router.get("/", controller.get);

export default { name, router };
