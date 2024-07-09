import React, { useEffect, useState, useRef } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Form,
  Container,
  CardGroup,
  Carousel,
  Modal,
} from "react-bootstrap";

import Shoplogo4 from "./assets/images/996.jpg";
import Shoplogo1 from "./assets/images/77.jpg";
import Shoplogo2 from "./assets/images/50.jpg";
import Shoplogo3 from "./assets/images/51.jpg";
import Shopimage from "./assets/images/88.jpg";
import Logo from "./assets/images/logo.jpg";
// import { useNavigate } from "react-router-dom";
//change
import "./App.css";
import laptop from "./assets/images/50.jpg";
import laptop2 from "./assets/images/51.jpg";
import laptop3 from "./assets/images/53.jpg";
import axios from "axios";
export default function Shop() {
  const [item, setItem] = useState();
  const [changeState, setChangeState] = useState(false);
  const [name, setName] = useState();
  const [itemId, setItemId] = useState();
  const [price, setPrice] = useState();
  const [editName, setEditName] = useState();
  const [edititemId, seteditItemId] = useState();
  const [editId, setEditId] = useState();
  const [editPrice, setEditPrice] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/all/", {})
      .then((res) => {
        setItem(res.data.data);
      })
      .catch();
  }, [changeState]);

  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <h1>Welcome to our store</h1>
            <h2>You can find your desired item through the form below</h2>
            <div>
              <img src={Shoplogo1} alt="shoplogo-image" className="shoplogo" />
              <img src={Shoplogo2} alt="shoplogo-image" className="shoplogo" />
              <img src={Shoplogo3} alt="shoplogo-image" className="shoplogo" />
            </div>
            <label className="label text-start">Name:</label>
            <Form.Control
              type="text"
              onChange={(element) => {
                setName(element.currentTarget.value);
              }}
            />
            <label className="label text-start">Item Id</label>
            <Form.Control
              type="text"
              onChange={(element) => {
                setItemId(element.currentTarget.value);
              }}
            />
            <label className="label text-start">Price</label>
            <Form.Control
              type="text"
              onChange={(element) => {
                setPrice(element.currentTarget.value);
              }}
            />
            <div className="d-grid gap-2">
              <br></br>
              <Button
                variant="primary"
                onClick={() => {
                  axios
                    .post("http://127.0.0.1:8000/add/", {
                      item_id: itemId,
                      name: name,
                      price: price,
                    })
                    .then((res) => {
                      alert("adding item was succesfull");
                    });

                  setChangeState(!changeState);
                }}
              >
                add item
              </Button>
              <br></br>
            </div>
            <div className="carousel">
              <Carousel>
                <Carousel.Item>
                  <img src={Shoplogo1} text="first slide" />
                  <Carousel.Caption>
                    <h1>wordpress</h1>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Shoplogo4} text="Second slide" />
                  <Carousel.Caption>
                    <h1>frontend</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Shoplogo3} text="Third slide" />
                  <Carousel.Caption>
                    <h3>css&html</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <h1>Sign up</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          {item == null ? (
            <></>
          ) : (
            <Col sm={4}>
              {item.map((value) => (
                <>
                  {/* <h1>{value.name}</h1> */}
                  {/* <h2>{value.price}</h2> */}
                  {/* <h5>{value.item_id}</h5> */}
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <div className="text-center">
                        <img src={Shopimage} className="laptop" alt="" />
                      </div>
                      <Card.Title className="mt-4">{value.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {value.item_id}
                      </Card.Subtitle>
                      <Card.Text>
                        Front-end programming training course
                      </Card.Text>

                      <Card.Link href="#">shop</Card.Link>
                      <Card.Link href="#">{value.price} $</Card.Link>
                      <div>
                        <Button
                          variant="outline-primary"
                          onClick={(element) => {
                            axios.post("http://127.0.0.1:8000/delete/", {
                              id: value.id,
                            });
                            setChangeState(!changeState);
                          }}
                        >
                          delete
                        </Button>
                      </div>
                      {/* button to open the modal */}
                      <Button
                        variant="outline-primary"
                        onClick={(element) => {
                          axios
                            .post("http://127.0.0.1:8000/get/", {
                              id:value.id,
                            })
                            .then((res) => {
                              setEditName(res.data.data.name);
                              seteditItemId(res.data.data.item_id);
                              setEditPrice(res.data.data.price);
                              setEditId(value.id);
                              setShow(true)
                            });
                        }}
                      >
                        edit
                      </Button>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>edit your shop feild</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <label className="label text-start">Name:</label>
                          <Form.Control
                            type="text"
                            value={editName}
                            onChange={(element) => {
                              setEditName(element.currentTarget.value);
                            }}
                          />
                          <label className="label text-start">Item Id</label>
                          <Form.Control
                            type="text"
                            value={edititemId}
                            onChange={(element) => {
                              seteditItemId(element.currentTarget.value);
                            }}
                          />
                          <label className="label text-start">Price</label>
                          <Form.Control
                            type="text"
                            value={editPrice}
                            onChange={(element) => {
                              setEditPrice(element.currentTarget.value);
                            }}
                          />
                          <label className="label text-start">Price</label>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={()=>{
                            setEditName("")
                            seteditItemId("")
                            setEditPrice("")
                            setEditId("")
                            setShow(false)
                          }}>
                            Cansell
                          </Button>
                          <Button variant="primary"
                          onClick={()=>{
                            axios
                            .post("http://127.0.0.1:8000/edit/",{
                              "id":editId,
                              "item_id":edititemId,
                              "name":editName,
                              "price":editPrice,
                            })
                            .then((res)=>{
                              if(res.data.error==false){
                                setEditName("")
                                seteditItemId("")
                                setEditPrice("")
                                setEditId("")
                                setShow(false)
                                alert("item edited successfully")
                                setChangeState(!changeState)
                              }else
                              {

                                alert("error on server")
                              }
                              
                            })
                          }}
                          >
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Card.Body>
                  </Card>
                </>
              ))}
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}
