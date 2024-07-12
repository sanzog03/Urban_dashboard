import { LeftInsights } from "./helper/left";
import { RightInsights } from "./helper/right";
import './index.css';

import { PopulationCard } from "../cards/population";
import { TransportationCard } from "../cards/transportation";
import { LandCoverageCard } from "../cards/landCoverage";

export function Insights() {
    return (
        <div className="insights">
            <LeftInsights>
                <PopulationCard/>
                <TransportationCard/>
            </LeftInsights>
            <RightInsights>
                <LandCoverageCard/>
                <PopulationCard/>
            </RightInsights>
        </div>
    );
}