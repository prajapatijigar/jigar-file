import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <MDBCard>
                    <MDBCardImage src={this.props.imgdata} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.Title}</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default ChildComponent;


