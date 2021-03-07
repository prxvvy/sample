import React, { Component } from 'react';
import { Form, InputGroup, Container, Navbar, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';
import magnifyingGlass from '@iconify-icons/entypo/magnifying-glass';

class WebNav extends Component {

    reactReadInputRef = React.createRef();

    getD = q => {
        q.preventDefault()
        // Get the input
        const term = this.reactReadInputRef.current.value;
        // And pass it to the func in the main comp
        this.props.dSearch(term);
    }

    render() {
        return (
            <Navbar expand="lg" variant="dark" bg="light">
                <Container className="justify-content-center">
                    <Form onSubmit={this.getD}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <Icon icon={magnifyingGlass} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                ref={this.reactReadInputRef}
                                type="text"
                                placeholder="Search"
                            />
                        </InputGroup>
                    </Form>
                </Container>
            </Navbar>
        );
    }
}

export default WebNav;