import React from 'react'
import {  Modal, Button, Header} from 'semantic-ui-react'

function GameOver({score, btnHandler, facts}) {
  return (
    <Modal
      open={true}
    >
      <Modal.Header>Game Over! Score: {score}</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <Header>Did you know?</Header>
          <p>
            {facts}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color={"green"} onClick={() => btnHandler()}>
          Play again!
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default GameOver;
