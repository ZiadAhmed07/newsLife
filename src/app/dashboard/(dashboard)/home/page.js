
import TrindNews from "./trindNews";
import Status from "./status";
import Time from "./time";
import SliderNews from "./SliderNews";



export default function page() {

    return (
        <div className="flex flex-col gap-6">
            <Time/>
            <Status/>
            
            <SliderNews/>
            <TrindNews/>
        </div>
    )
}