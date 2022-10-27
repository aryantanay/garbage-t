import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
import { Container, Card, Row, Text } from "@nextui-org/react";

function About() {
  const a = useContext(NoteContext)
  return (
    <Container xl>
      <Card css={{ $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
            This is a full stack web application for docker testing by <b>Dr. N Manikandan</b> from DSBS Department
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default About