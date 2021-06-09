import { BehaviorSubject, noop } from "rxjs";
import { Game } from "./interfaces";
import * as Constants from "./constants";

const handleScoreIncrease = ([state, road, player]: Game) =>
  !road.cars[0].scored &&
  road.cars[0].y !== player.y &&
  road.cars[0].x === Constants.gameHeight - 1
    ? ((road.cars[0].scored = true), (state.score += 1))
    : noop;

const handleCollision = ([state, road, player]: Game) =>
  road.cars[0].x === Constants.gameHeight - 1 && road.cars[0].y === player.y
    ? (state.lives -= 1)
    : noop;

const updateSpeed = ([state]: Game, gameSpeed: BehaviorSubject<number>) => (
  (state.duration -= 10),
  state.duration < 0
    ? ((state.duration = Constants.levelDuration * state.level),
      state.level++,
      (state.interval -= state.interval > 60 ? 20 : 0),
      gameSpeed.next(state.interval))
    : () => {}
);

export const updateState = (gameSpeed: BehaviorSubject<number>) => (
  _,
  game: Game
) => (
  handleScoreIncrease(game),
  handleCollision(game),
  updateSpeed(game, gameSpeed),
  game
);