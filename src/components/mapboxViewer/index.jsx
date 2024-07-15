import { Component, Fragment } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './index.css';

import { BASEMAP_STYLES, BASEMAP_ID_DEFAULT } from './helper';
import { Insights } from '../insights';

import { GeoJSON, center } from '../../assets/geojson/LA';

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
            zoom: 9
        });

        this.focusSelectedUrbanRegion(map, center, GeoJSON);

        this.setState({currentViewer: map});
    }

    focusSelectedUrbanRegion = (map, center, GeoJSON) => {
        map.setCenter(center);
        map.on('load', () => {
            map.addSource('urban-boundary', {
                'type': 'geojson',
                'data': GeoJSON
            });

            map.addLayer({
                'id': 'boundary-fill',
                'type': 'fill',
                'source': 'urban-boundary',
                'layout': {},
                'paint': {
                    'fill-color': '#888888',
                    'fill-opacity': 0.4
                }
            });

            map.addLayer({
                'id': 'boundary-outline',
                'type': 'line',
                'source': 'urban-boundary',
                'layout': {},
                'paint': {
                    'line-color': '#c3b592',
                    'line-width': 2
                }
            });
        });
    }

    render() {
        return (
            <Box component="main" className="map-section">
                <Grid container className="fullSize">
                    <Grid item xs={12}>
                        {/* <div id="mapbox-container" className='fullSize' style={{ position: "absolute" }}></div> */}
                        <div id="mapbox-container" className='fullSize' style={{ position: "relative", width: "auto", height: "1024px" }}></div>
                    </Grid>
                </Grid>
                <Insights/>
            </Box>
        );    
    }
}