import express from "express";
import {
  getCurrentEvent,
  getEvents
  // addWineFromFavorite,
  // createWine,
  // deleteWine,
  // deleteWineFromFavorite,
  // getAllWines,
  // getCurrentUserWine,
  // getCurrentWine,
  // getFavoriteWine,
  // setWineInfo,
} from "../controllers/event";
// import auth from "../middlewares/auth";

const eventRouter = express.Router();

eventRouter.get("/", getEvents);
eventRouter.get("/:id", getCurrentEvent);

// wineRouter.use(auth);

// wineRouter.post("/", createWine);
// wineRouter.patch('/current/:id', setWineInfo);
// wineRouter.delete("/:wineId", deleteWine);
// wineRouter.get("/my", getCurrentUserWine);
// wineRouter.get('/favorite', getFavoriteWine);
// wineRouter.put("/favorite/:wineId/", addWineFromFavorite);
// wineRouter.delete("/favorite/:wineId", deleteWineFromFavorite);

export { eventRouter };
