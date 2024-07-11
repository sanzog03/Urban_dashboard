import { Component, Fragment } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export class MapBoxViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentViewer: null
        }
    }

    componentDidMount() {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            container: 'mapbox-container',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-74.5, 40],
            zoom: 9
        });

        this.setState({currentViewer: map});
    }

    render() {
        return (
            <Fragment>
                <Box component="main" className="fullSize" sx={{ flexGrow: 1 }}>
                    <Grid container className="fullSize">
                        <Grid item xs={12} sx={{ position: "relative" }}>
                            <div id="mapbox-container" className='fullSize' style={{ position: "absolute" }}></div>
                        </Grid>
                    </Grid>
                </Box>
            </Fragment>
        );    
    }
}