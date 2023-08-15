import React from 'react';
import ChildCompo from "./ChildComponent"


const PropsInFuncCompo = () => {
     return (
          <>
               <div className="row">
                    <div className="col-3">
                         <ChildCompo cardtitle="card-one" cardimg="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                    </div>
                    <div className="col-3">
                         <ChildCompo cardtitle="card-one" cardimg="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                    </div>
                    <div className="col-3">
                         <ChildCompo cardtitle="card-one" cardimg="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                    </div>
                    <div className="col-3">
                         <ChildCompo cardtitle="card-one" cardimg="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                    </div>
                    <div className="col-3">
                         <ChildCompo cardtitle="card-one" cardimg="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                    </div>
               </div>
          </>
     );
};

export default PropsInFuncCompo;