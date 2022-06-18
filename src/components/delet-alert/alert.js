import { useState } from 'react'
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'
import Disabled from './../../assets/content/Disabled.png'
import Ringh from './../../assets/content/ring.png'
import './alert.css'


function Alert() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='alert'>
      <Container>
        <Row>
          <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Col md={12}>
              <Card className="border-0">
                <Card.Header className="border-0">
                  <img src={Disabled} alt='Disabled' />
                  لغو بسته
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <img src={Ringh} alt='ringh' className='ring' />
                    <h6>آیا از لغو کردن
                      <h5>«بسته مایحتاج خانوار»</h5>
                      مطمئن هستید؟</h6>
                    <p>اگر پس از گذشتن از مرحله هماهنگی بسته خود را لغو کنید ۶ درصد
                      از هزینه برگشتی به عنوان خسارت کثر می‌شود</p>
                    <Button className='cansel-box'>لغو بسته</Button>
                    <Button className='dismis' onClick={handleClose}>انصراف</Button>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Modal>


        </Row>
      </Container>
    </div >
  )
}
export default Alert