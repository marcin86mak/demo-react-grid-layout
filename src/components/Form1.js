import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, FormText, Input, Label, Row} from "reactstrap";
import SimpleBar from "simplebar-react";


export const Form1 = ({item, currentLayout}) => {
    const cardBodyMargin = 30 * 2;
    const paddingDrag = 10;
    const sumStatic = cardBodyMargin - paddingDrag;
    const maxRow = 55; // heidht row mamy ustwione na 50px i margines na 5px
    const [maxHeight, setMaxHeight] = useState(0)

    useEffect(() => {
        const myHeader = document.querySelector('.drag-header');
        let headerCard = myHeader.clientHeight || myHeader.offsetHeight;
        // console.log({headerCard})
        if (currentLayout) {
            setMaxHeight((maxRow * (currentLayout.h) - sumStatic - headerCard))
        } else {
            setMaxHeight((maxRow * (item.h)) - sumStatic - headerCard)
        }
    }, [currentLayout, item])

    return (
        <Card style={{height: '100%', position: 'relative',overflowX: 'auto'}}>
            <CardHeader className={'drag-header'}>
                Form1 - Drag & Drop of Heder
            </CardHeader>
            <CardBody>
                <SimpleBar style={{maxHeight: maxHeight}}>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleQuestion">
                                        Question
                                    </Label>
                                    <Input
                                        id="exampleQuestion"
                                        name="Question"
                                        placeholder="Question a placeholder"
                                        type="textarea"
                                        rows={7}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleCompany">
                                        Company
                                    </Label>
                                    <Input
                                        id="exampleCompany"
                                        name="Company"
                                        placeholder="Company a placeholder"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleFirstName">
                                        FirstName
                                    </Label>
                                    <Input
                                        id="exampleFirstName"
                                        name="FirstName"
                                        placeholder="FirstName a placeholder"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleLastName">
                                        LastName
                                    </Label>
                                    <Input
                                        id="exampleLastName"
                                        name="LastName"
                                        placeholder="LastName placeholder"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="with a placeholder"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password placeholder"
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="exampleAddress">
                                        Address
                                    </Label>
                                    <Input
                                        id="exampleAddress"
                                        name="address"
                                        placeholder="1234 Main St"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress2">
                                        Address 2
                                    </Label>
                                    <Input
                                        id="exampleAddress2"
                                        name="address2"
                                        placeholder="Apartment, studio, or floor"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCity">
                                        City
                                    </Label>
                                    <Input
                                        id="exampleCity"
                                        name="city"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleState">
                                        State
                                    </Label>
                                    <Input
                                        id="exampleState"
                                        name="state"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="exampleZip">
                                        Zip
                                    </Label>
                                    <Input
                                        id="exampleZip"
                                        name="zip"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label
                                        for="exampleFile"
                                        sm={2}
                                    >
                                        File
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            id="exampleFile"
                                            name="file"
                                            type="file"
                                        />
                                        <FormText>
                                            This is some placeholder block-level help text for the above input. It's a
                                            bit
                                            lighter and easily wraps to a new line.
                                        </FormText>
                                    </Col>
                                </FormGroup>
                                <FormGroup
                                    row
                                    tag="fieldset"
                                >
                                    <legend className="col-form-label col-sm-2">
                                        Radio Buttons
                                    </legend>
                                    <Col sm={10}>
                                        <FormGroup check>
                                            <Input
                                                name="radio2"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                Option one is this and that—be sure to include why it's great
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Input
                                                name="radio2"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                Option two can be something else and selecting it will deselect option
                                                one
                                            </Label>
                                        </FormGroup>
                                        <FormGroup
                                            check
                                            disabled
                                        >
                                            <Input
                                                disabled
                                                name="radio2"
                                                type="radio"
                                            />
                                            {' '}
                                            <Label check>
                                                Option three is disabled
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup check>
                                    <Input
                                        id="exampleCheck"
                                        name="check"
                                        type="checkbox"
                                    />
                                    <Label
                                        check
                                        for="exampleCheck"
                                    >
                                        Check Terms
                                    </Label>
                                </FormGroup>
                                <Button className={'float-end'}>
                                    Send
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </SimpleBar>
            </CardBody>
        </Card>
    )
}