import React, { Component, Fragment } from 'react';
import Image from './Image';
import Pag from './Pag';

class Got extends Component {

    preImgs = () => {
        const images = this.props.imag;
        if (images.length === 0) return null;
        //console.log(images);
        return (
            <Fragment>
                <div className="col-12 p-5 row">
                    {images.map(img => (
                        <Image
                            key={img.id}
                            img={img}
                        />
                    ))}
                </div>
                <Pag
                    backPage={this.props.backPage}
                    nextPage={this.props.nextPage}
                />
            </Fragment>
        )
    }

    render() {
        return (
            <Fragment>
                {this.preImgs()}
            </Fragment>
        );
    }
}

export default Got;