import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Modal from 'react-awesome-modal'
import { FaTimes } from 'react-icons/fa'
import {
    CardWrapper,
    CardImage,
    CardDescription, 
    CardButtons,
    ModalContent
} from './Card.styled'

export const Card = ({image, name, price, startDate, place, modality, pdf})=>{
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <>
            <CardWrapper>
                { image ? 
                    <CardImage>
                        <LazyLoadImage src={image} alt="" effect='blur'/>
                    </CardImage>
                    :
                    <CardImage>
                        <LazyLoadImage src={'https://i.ibb.co/tcT8hb8/Banner-01.jpg'} effect='blur'/>
                    </CardImage>
                }
                <CardDescription>
                    <h4>{name}</h4>
                </CardDescription>
                    <CardButtons>
                       <button onClick={onOpenModal}>
                            Cosultar informaciòn
                        </button>
                    </CardButtons>
                <Modal
                    visible={open}
                    height="600"
                    effect="fadeInRight"
                    onClickAway={onCloseModal}
                    >
                   <ModalContent>
                    <div className='close-modal'>
                        <button onClick={onCloseModal}>
                            <FaTimes />
                        </button>
                    </div>
                   { image ? 
                    <CardImage>
                        <LazyLoadImage src={image} alt="" effect='blur'/>
                    </CardImage>
                    :
                    <CardImage>
                         <LazyLoadImage src={'https://i.ibb.co/tcT8hb8/Banner-01.jpg'} effect='blur'/>
                    </CardImage>
                    }
                    <CardDescription>
                        <h4>{name}</h4>
                        <p>
                            <span>Modalidad: </span>{modality}
                        </p>
                        <p>
                            <span>Fecha: </span>{startDate}
                        </p>
                        <p>
                            <span>SEDE: </span> {place}
                        </p>
                        {
                        price == '0'
                        ?
                        <p className='course-free'>Gratuito</p>
                        :
                        <p>
                            <span>Precio del curso: </span>${price} MXN
                        </p>
                        }
                        <CardButtons>
                            {/*<Link to='/register'>Inscripción online</Link>*/}
                            {
                            pdf ?
                                <a href={pdf} target={'_blank'}>Ver programa</a>
                                :
                                <p className='disabled-link'>Programa no disponible</p>
                            }
                        </CardButtons>
                    </CardDescription>
                   </ModalContent>
                </Modal>
            </CardWrapper>
        </>
    )
}
Card.propTypes = {
    image : PropTypes.node,
    description : PropTypes.string
}