import express from "express";
import controller from "../controller/names.controller";

export const name = "check-names";
export const router = express.Router();

router.get("/", controller.get);

export default { name, router };
