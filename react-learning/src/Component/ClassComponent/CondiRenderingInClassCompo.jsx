import React, { Component } from 'react';

class CondiRenderingInClassCompo extends Component {

    state = {
        // data: "true"
        data: true
    }

    btnHandleClick = () => {
        this.setState({
            data: !this.state.data
            // data : "hello"
        })
    }

    render() {
        return (
            <>
                <h2>hello</h2>
                <button onClick={this.btnHandleClick}>T/F</button>
                <div className="row">
                    <div className="col-lg-3 mt-5">
                        {/* {this.state.data} */}
                        {this.state.data ?
                            <div className="card">
                                <img src="https://www.wallpapers13.com/wp-content/uploads/2016/02/Beautiful-Nature-Mountain-Lake-flowers-Free-Hd-Wallpaper-730x456.jpg"   className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div> : <div class="card" aria-hidden="">
                                <img src="https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title placeholder-glow">
                                            <span class="placeholder col-6"></span>
                                        </h5>
                                        <p class="card-text placeholder-glow">
                                            <span class="placeholder col-7"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-4"></span>
                                            <span class="placeholder col-6"></span>
                                            <span class="placeholder col-8"></span>
                                        </p>
                                        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                                    </div>
                            </div>
                            // <div className="card">
                            //     <img src="https://media.istockphoto.com/id/1256005283/photo/vintage-classic-motorcycle-headlight.jpg?s=1024x1024&w=is&k=20&c=IfhzwIfEGqZOSnwh_rO67g32iASDfaYdn0LyT9QDcKQ=" className="card-img-top" alt="..." />
                            //     <div className="card-body">
                            //         <h5 className="card-title">Card title</h5>
                            //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            //         <a href="#" className="btn btn-primary">Go somewhere</a>
                            //     </div>
                            // </div> : <div className="card" aria-hidden="">
                            //     <img src="https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png" className="card-img-top" alt="..." />
                            //     <div className="card-body">
                            //         <h5 className="card-title placeholder-glow">
                            //             <span className="placeholder col-6"></span>
                            //         </h5>
                            //         <p className="card-text placeholder-glow">
                            //             <span className="placeholder col-7"></span>
                            //             <span className="placeholder col-4"></span>
                            //             <span className="placeholder col-4"></span>
                            //             <span className="placeholder col-6"></span>
                            //             <span className="placeholder col-8"></span>
                            //         </p>
                            //         <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6"></a>
                            //     </div>
                            // </div>



                        }


                    </div>
                </div>
            </>


            // <div>
            //     <div className="row">
            //         <div className="col-lg-3">
            //             <button onClick={this.HandleClick}>click</button>
            //             <div className="row">
            //                 <div className="col-3">
            //                     {(this.state.data) ? <div className="card" style="width: 18rem;">
            //                         <img src="https://www.wallpapers13.com/cool-and-beautiful-nature-desktop-wallpaper-image-1680x1050/" className="card-img-top" alt="..." />
            //                         <div className="card-body">
            //                             <h5 className="card-title">Card title</h5>
            //                             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //                             <a href="#" className="btn btn-primary">Go somewhere</a>
            //                         </div>
            //                     </div> : "hello"
            //                     // <div className="card" aria-hidden="true">
            //                     //     <img src="https://roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg" className="card-img-top" alt="..." />
            //                     //     <div className="card-body">
            //                     //         <h5 className="card-title placeholder-glow">
            //                     //             <span className="placeholder col-6"></span>
            //                     //         </h5>
            //                     //         <p className="card-text placeholder-glow">
            //                     //             <span className="placeholder col-7"></span>
            //                     //             <span className="placeholder col-4"></span>
            //                     //             <span className="placeholder col-4"></span>
            //                     //             <span className="placeholder col-6"></span>
            //                     //             <span className="placeholder col-8"></span>
            //                     //         </p>
            //                     //         <a href="#" tabindex="-1" className="btn btn-primary disabled placeholder col-6"></a>
            //                     //     </div>
            //                     // </div>
            //                     }
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default CondiRenderingInClassCompo;