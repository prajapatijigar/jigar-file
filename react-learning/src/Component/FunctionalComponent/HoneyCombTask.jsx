import React, { useRef, useState } from 'react';
import HoneyCombChild from "./HoneyCombChild"

const HoneyCOmbTask = () => {
    const [ele, setele] = useState()
    const childRef = useRef(null)

    const parentData = (data) => {
        setele(data)
    }

    return (
        <>

            {(ele && ele.length) ?
                <table>
                    <thead>
                        <tr>
                            <th>col-1</th>
                            <th>col-2</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>{ele[0]}</td>
                        <td>{ele[1]}</td>
                    </tr>
                    <tr>
                        <td>{ele[2]}</td>
                        <td>{ele[3]}</td>
                    </tr>
                </table> : "no data"}

            <button onClick={() => childRef.current.getAlert()}>shuffle</button>
            <HoneyCombChild onChange={parentData} ref={childRef} />
        </>
    );
};

export default HoneyCOmbTask;