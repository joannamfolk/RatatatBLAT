import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import React, { Component } from 'react';


class PopoverComponent extends Component {
    render() {
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Rules!!!</Popover.Title>
              <Popover.Content>
                The rules go here!
              </Popover.Content>
            </Popover>
          );
          
          const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="success">Rules</Button>
            </OverlayTrigger>
          );
        return (
            <Example />
        )
    }
    
}
export default PopoverComponent;
