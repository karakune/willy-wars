import goonTroop from "../assets/Banners/goon-troop.jpg";
import snakeVsSnake from "../assets/Banners/snake-vs-snake.jpg";
import tanknarok from "../assets/Banners/tanknarok.jpg";
import unspottable from "../assets/Banners/unspottable.jpg";

export class Game {
    public name: string = "";
    public banner: string = goonTroop;

    constructor(name?: string, banner?: string) {
        if (name != null) {
            this.name = name;
        }

        if (banner != null) {
            switch (banner) {
                case "tank":
                    this.banner = tanknarok;
                    break;
                case "snake":
                    this.banner = snakeVsSnake;
                    break;
                case "unspot":
                    this.banner = unspottable;
                    break;
                default:
                    break;
            }
        }
    }

    public static getAllBanners(): string[] {
        return [
            snakeVsSnake,
            tanknarok,
            unspottable,
        ];
    }
}