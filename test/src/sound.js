import Born from "./sound/Born.mp3"
import Grow from "./sound/Grow.mp3"
import Strong from "./sound/Strong.mp3"
import Bornjson from "./BornStory.json";
import Growjson from "./GrowStory.json";
import Strongjson from "./StrongStory.json";
const setData = (kind) => {
    switch (kind) {
        case "Born":
            return {music:Born,json:Bornjson}
        case "Grow":
            return {music:Grow,json:Growjson}
        case "Strong":
            return {music:Strong,json:Strongjson}
        default:
            return{music:Born,json:Bornjson}
    }
}
export { setData }