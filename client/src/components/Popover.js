import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import React, { Component } from 'react';


class PopoverComponent extends Component {
    render() {
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
                And here's some <strong>amazing</strong> contesnt. It's very engaging.
                right?
              </Popover.Content>
            </Popover>
          );
          
          const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
          );
        return (
            <Example />
        )
    }
    
}
export default PopoverComponent;
