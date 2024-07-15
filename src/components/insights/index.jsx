import { LeftInsights } from "./helper/left";
import { RightInsights } from "./helper/right";
import './index.css';

import { PopulationCard } from "../cards/population";
import { TransportationCard } from "../cards/transportation";
import { LandCoverageCard } from "../cards/landCoverage";
import { AirQualityCard } from "../cards/defaultAir";
import { ExploreMoreCard } from "../cards/explore";

export function Insights() {
    const towerDataViewerUrl = "https://ghgc-custom-interfaces-develop.s3.us-west-2.amazonaws.com/ghgcenter/custom-interfaces/noaa-gggrn-ghg-concentrations-temp/index.html?ghg=co2&frequency=all&station_code=WGC";
    const airborneViewerUrl = "https://ghgc-custom-interfaces-develop-airborne-visualization.s3-website-us-west-2.amazonaws.com";

    return (
        <div className="insights">
            <LeftInsights>
                <PopulationCard/>
                <TransportationCard/>
            </LeftInsights>
            <RightInsights>
                <LandCoverageCard/>
                <AirQualityCard/>
                <ExploreMoreCard description="Explore the Tower Data" link={towerDataViewerUrl}/>
                <ExploreMoreCard description="Explore the Airborne Data" link={airborneViewerUrl}/>
            </RightInsights>
        </div>
    );
}