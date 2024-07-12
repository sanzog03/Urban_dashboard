import { LeftInsights } from "./helper/left";
import { RightInsights } from "./helper/right";
import './index.css';

export function Insights() {
    return (
        <div className="insights">
            <LeftInsights>
                <h1>Left Insights</h1>
            </LeftInsights>
            <RightInsights>
                <h1>Right Insights</h1>
            </RightInsights>
        </div>
    );
}