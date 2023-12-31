import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FacebookShareButton, FacebookIcon, EmailIcon, EmailShareButton, LinkedinShareButton, LinkedinIcon, TwitterIcon, TwitterShareButton, WhatsappShareButton, WhatsappIcon, FacebookMessengerIcon, FacebookMessengerShareButton } from 'react-share';

function Share(props) {
    return (
        <Modal
            { ...props }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Share . . . 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='row'>
                
                <span className='icon-share col m-1'>
                <FacebookShareButton url={ `https://mega.com/products/${props.id}` }  >
                    <FacebookIcon />
                </FacebookShareButton>
                </span>
                <span className='icon-share col m-1'>
                <EmailShareButton url={ `https://mega.com/products/${props.id}` }  >
                    <EmailIcon />
                </EmailShareButton>
                </span>
                <span className='icon-share col m-1'>
                <LinkedinShareButton url={ `https://mega.com/products/${props.id}` }  >
                    <LinkedinIcon />
                </LinkedinShareButton>
                </span>
                <span className='icon-share col m-1'>
                <TwitterShareButton url={ `https://mega.com/products/${props.id}` }  >
                    <TwitterIcon />
                </TwitterShareButton>
                </span>
                <span className='icon-share col m-1'>
                <WhatsappShareButton url={ `https://mega.com/products/${props.id}` }  >
                    <WhatsappIcon />
                </WhatsappShareButton>
                </span>
                <span className='icon-share col m-1'>
                <FacebookShareButton url={ `https://mega.com/products/${props.id}` }  >
                    <FacebookIcon />
                </FacebookShareButton>
                </span>
                <span className='icon-share col m-1'>
                <FacebookMessengerShareButton url={ `https://mega.com/products/${props.id}` }  >
                    <FacebookMessengerIcon />
                </FacebookMessengerShareButton>
                </span>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ props.onHide }>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Share;