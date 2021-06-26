import React, {useEffect, useState} from 'react';
import "./covid.css";

function Covid() {

    const [data, setData] = useState([]);

const getCovidData = async () =>{
    try{
        const res = await fetch('https://api.covid19india.org/data.json');
        const ActualData = await res.json();
        console.log(res);
        console.log(ActualData.statewise[0]);
        setData(ActualData.statewise[0]);

    }
    catch(err){
            console.log(err);
    }

    
}

useEffect(() => {
    getCovidData();
}, []);
    return (
        <div className="covid-main">
            <section>
            <h2>Covid Live</h2>

            <ul>
                <li className="card">
                    <div className="cardMain">
                        <div className="cardInner">
                            <p className="cardName"> <span>Our</span> country</p>
                            <p className="cardContent">India</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="cardMain">
                        <div className="cardInner">
                            <p className="cardName"> <span>Total </span> Recovered</p>
                            <p className="cardContent">{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="cardMain">
                        <div className="cardInner">
                            <p className="cardName"> <span>Total </span> confirmed</p>
                            <p className="cardContent">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="cardMain">
                        <div className="cardInner">
                            <p className="cardName"> <span>Total </span> Death</p>
                            <p className="cardContent">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="cardMain">
                        <div className="cardInner">
                            <p className="cardName"> <span>Total </span>Active</p>
                            <p className="cardContent">{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="cardMain">
                        <div className="cardInner">
                            <p className="cardName"> <span>Last </span>Update</p>
                            <p className="cardContent">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
            </section> 
        </div>
       
    )
}

export default Covid;
