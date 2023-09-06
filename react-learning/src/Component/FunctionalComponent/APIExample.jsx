import React, { useEffect, useState } from 'react';

const APIExample = () => {
    const [Api, setApi] = useState()
    const [excess, setExcess] = useState(false)


    useEffect(() => {
        // console.log("called");   


        fetch('https://jayramin.000webhostapp.com/allusers').then((res) => res.json()).then((data) => {


            setExcess(true)

            const ListData = Object.entries(data.Data).map(([key, value]) => {
                return <li key={key}>{value.username}</li>
            })
            // console.log("apidata", ListData);

            setApi(ListData)

        })
    }, [])

    return (
        <div>
            {/* {Api} */}
            {/* <p>api data</p> */}

            {excess ? <ul>{Api}</ul> : <>Data Loading......</>}

            {/* <div className="container">
                <h2>APIExmapleCompo</h2>
                {excess ? <ol>{Api} </ol> : <>Loading.....</>}

            </div> */}
            {/* {JSON.stringify(apiData)} */}
        </div>
    );
};

export default APIExample;