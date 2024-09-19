import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";

const geoUrl = "/land-50m.json";

// Coordinati per il Lussemburgo
const luxembourgCoordinates = [6.1296, 49.8153]; // Longitudine e latitudine



function MapChart() {
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 600,  // Modifica la scala per adattare la mappa
                center: [-15, 55],  // Centro della mappa per una visualizzazione più centrata
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#000"
                            stroke="orange"
                            strokeWidth={0.7} // Larghezza del bordo

                        />
                    ))
                }
            </Geographies>
            <Marker coordinates={luxembourgCoordinates}>
                <circle r={7} fill="orange" stroke="orange" strokeWidth={2} />
                <text
                    textAnchor="middle"
                    y={-20}
                    style={{ fontFamily: "system-ui", fill: "#fff", fontWeight: 700 }}
                >
                    Luxembourg
                </text>
            </Marker>
        </ComposableMap>
    );
};

export default MapChart;