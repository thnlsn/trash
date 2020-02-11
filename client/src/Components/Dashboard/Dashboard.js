import React, { useContext, useEffect, useState} from 'react';
import UserContext from '../../context/user/userContext';
import SimpleMap from './Map';

// dummy stats

const Dashboard = (props) => {  
    const [balls, setBalls] = useState({
        lat: 0,
        lng: 0
    })

    const userContext = useContext(UserContext);
    const { isAuthenticated, loadUser, user } = userContext;
    const {lbs, pixPoints, zip} = user;

    useEffect(() => {
        if (!isAuthenticated) {
            props.history.push('/');
        }
        setBalls(balls)
/*         setCenter(center) */
        // eslint-disable-next-line
    }, [isAuthenticated, props.history, balls]);

    function getCoordinates(zipcode){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=AIzaSyAObjwKwsn3gcQs7QxH8OGwqjK4erKJMCA&region=us`)
          .then(response => response.json())
          .then(data => {
            let latitude = data.results[0].geometry.location.lat
            let longitude = data.results[0].geometry.location.lng

            setBalls({lat: latitude, lng: longitude})

/*             balls.lat = latitude;
            balls.lng = longitude; */

/*             results.push(latitude, longitude); */
            console.log(balls)
        })
    }

    return (
        <div className="grid-container">
            <div className="item1">
                <SimpleMap center={balls}>
                </SimpleMap>
            </div>
            <div className="item2">
                <container className="stats-container">
                    <ul className='user-stats-list'>
                        <li>
                            Pounds of trash picked up : {lbs}
                        </li>
                        <li>
                            Pix Points: {pixPoints}
                        </li>
                    </ul>
                    <button type='button' onClick={getCoordinates} >Refresh</button>
                </container>
            </div>
        </div>
    );
};

export default Dashboard;
