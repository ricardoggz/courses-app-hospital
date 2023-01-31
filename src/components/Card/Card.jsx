import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Modal from 'react-awesome-modal'
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
                        <LazyLoadImage src={'https://hospitalinfantildemexicofedericogomez.mx/wp-content/uploads/2023/01/Banner-01-scaled.jpg'} effect='blur'/>
                    </CardImage>
                }
                <CardDescription>
                    <h4>{name}</h4>
                </CardDescription>
                {
                    pdf ?
                    <CardButtons>
                       <button onClick={onOpenModal}>
                            Cosultar informaciòn
                        </button>
                    </CardButtons>
                    :
                    <p className='disabled-link'>Informaciòn no disponible</p>
                }
                <Modal
                    visible={open}
                    width="600"
                    height="720"
                    effect="fadeInRight"
                    onClickAway={onCloseModal}
                    >
                   <ModalContent>
                   { image ? 
                    <CardImage>
                        <LazyLoadImage src={image} alt="" effect='blur'/>
                    </CardImage>
                    :
                    <CardImage>
                        <LazyLoadImage src={'https://hospitalinfantildemexicofedericogomez.mx/wp-content/uploads/2023/01/Banner-01-scaled.jpg'} effect='blur'/>
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
                        <p>
                            <span>Precio del curso: </span>${price} MXN
                        </p>
                        <CardButtons>
                            <Link to='/register'>Inscribirme</Link>
                            <a href={pdf} target={'_blank'}>Ver programa</a>
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