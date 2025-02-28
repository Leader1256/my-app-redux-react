import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "../redux/counterSlice";
import { Button, Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h1>Counter: {count}</h1>
          <div className="d-flex justify-content-center mt-3">
            <Button variant="success" onClick={() => dispatch(increment())} className="mx-2">
              +
            </Button>
            <Button variant="danger" onClick={() => dispatch(decrement())} className="mx-2">
              -
            </Button>
            <Button variant="secondary" onClick={() => dispatch(reset())} className="mx-2">
              Reset
            </Button>
          </div>
          <InputGroup className="mt-4 w-50 mx-auto">
            <FormControl
              type="number"
              placeholder="Enter number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <Button variant="primary" onClick={() => dispatch(incrementByAmount(amount))}>
              Add Amount
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};
