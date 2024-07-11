import { Component, Fragment } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { BASEMAP_STYLES, BASEMAP_ID_DEFAULT } from './helper';

const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
const mapboxStyleBaseUrl = process.env.REACT_APP_MAPBOX_STYLE_URL;

export class MapBoxViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentViewer: null
        }
    }

    componentDidMount() {
        mapboxgl.accessToken = accessToken;
        let mapboxStyleUrl = 'mapbox://styles/mapbox/streets-v12';
        if (mapboxStyleBaseUrl) {
            let styleId = BASEMAP_STYLES.findIndex(style => style.id === BASEMAP_ID_DEFAULT);
            mapboxStyleUrl = `${mapboxStyleBaseUrl}/${BASEMAP_STYLES[styleId].mapboxId}`;
        }

        const map = new mapboxgl.Map({
            container: 'mapbox-container',
            style: mapboxStyleUrl,
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