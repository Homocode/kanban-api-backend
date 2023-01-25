/* eslint-disable @typescript-eslint/no-misused-promises */
import express from "express";
import { user, cardscontainer, card } from "../controllers";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Welcome to the Kanban Board API =D");
});

router.post("/user", user.handleUser);
//router.post("/boards", boards.createBoard);
router.post("/cards-container", cardscontainer.createCardscontainer);
router.post("/card", card.createCard);

//router.delete("/boards", boards.deleteBoard);
router.delete("/cards-container/:id", cardscontainer.deleteCardscontainer);
router.delete("/card/:cardscontainerid/:id", card.deleteCard);
export { router };
