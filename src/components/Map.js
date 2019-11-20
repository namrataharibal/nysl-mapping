import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import FarmData from './FarmData'


function Map() {

  const [viewport, setViewport] = useState({
    width: '90vw',
    height: '80vh',
    latitude:  42.2994,
    longitude: -75.2179,
    zoom: 6
  })

  const [selectedFarm, setSelectedFarm] = useState(null)


    return(
      <div className="Map">

        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/namrata-haribal/ck1uz9gna7ukn1cqrpb4gx5np"
          onViewportChange={(viewport) => {setViewport(viewport)}}>



          {FarmData.map(farm => (
            <Marker
              key={farm.id}
              latitude={farm.latitude}
              longitude={farm.longitude}
              >

                <img
                  className="soil-icon"
                  src="soil-icon.png"
                  alt="soil icon"
                  onClick={ e => {
                    e.preventDefault();
                    setSelectedFarm(farm);
                  }}

                />
            </Marker>
          ))}


          { selectedFarm !== null ? (
            <Popup
              className="Popup"
              latitude={selectedFarm.latitude}
              longitude={selectedFarm.longitude}
              onClose={() => {
                setSelectedFarm(null);
              }}
              >
                <div>
                  <h5> <b> Farm Name: </b>{selectedFarm.farmname}</h5>
                  <h6> {selectedFarm.soilhealthpractices} </h6>
                  <div className="CaseStudyDisplay" onClick={() => {
                    displayCaseStudy(true)
                  }}>
                  </div>
                </div>
            </Popup>

          ) : null}

        </ReactMapGL>
      </div>
    )}


export default Map
