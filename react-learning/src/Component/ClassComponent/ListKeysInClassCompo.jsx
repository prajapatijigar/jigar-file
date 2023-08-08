import React from 'react';


const ListKeysInClassCompo = () => {

    const person = [
              "jigar",
              "kasamali",
              "viru",
              "rock",
              "hemang",
              "jay"
    ]

    const Listdata = person.map ((data) => <li>{data}</li>)
    return (
        <div>
            <ul>
                {Listdata}
            </ul>
        </div>
    );
};

export default ListKeysInClassCompo;