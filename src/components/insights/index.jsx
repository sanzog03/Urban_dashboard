import { LeftInsights } from "./helper/left";
import { RightInsights } from "./helper/right";
import './index.css';

import { RootCard } from "../cards/root";
import { PopulationCard } from "../cards/population";

export function Insights() {
    return (
        <div className="insights">
            <LeftInsights>
                <PopulationCard/>
                <PopulationCard/>
            </LeftInsights>
            <RightInsights>
                <PopulationCard/>
                <PopulationCard/>
            </RightInsights>
        </div>
    );
}