import React, { useState, useEffect } from 'react';

const SpaceXLaunchesComponent = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(data => {
                const filteredLaunches = data.filter(launch => launch.launch_year !== '2020');
                setLaunches(filteredLaunches);
            })
            .catch();
    }, []);

    return (
        <div>
            {launches.map(launch => (
                <div key={launch.flight_number}>
                    <h2>{launch.mission_name}</h2>
                    <p>Launch Year: {launch.launch_year}</p>
                    {launch.links.mission_patch_small && (
                        <img src={launch.links.mission_patch_small} alt={launch.mission_name} />
                    )}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default SpaceXLaunchesComponent;
