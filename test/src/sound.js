import Born from "./sound/Born.mp3"
import Grow from "./sound/Grow.mp3"
import Strong from "./sound/Strong.mp3"
import Intro from "./sound/Intro.mp3"
import Click from "./sound/Click.mp3"
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
        case "Click":
            return  {music:Click}
        case "Intro":
            return  {music:Intro}
        default:
            return{music:Intro,json:null}
    }
}
export { setData }