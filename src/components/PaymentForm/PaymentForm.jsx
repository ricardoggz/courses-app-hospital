import { PaymentWrapper, PaymentInput, PaymentLabel, PaymentButtons } from "./Payment.styled"
export const PaymentForm = ()=>{
    return (
        <PaymentWrapper>
            <PaymentLabel>Nombre del tarjetahabiente:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Apellido del tarjetahabiente:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Calle:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Numero exterior:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Numero interior (opcional):</PaymentLabel>
            <PaymentInput
                type='text'
            />
            <PaymentLabel>Colonia:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Municipio:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Ciudad:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Estado:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>País:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Numero de teléfono:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Código postal:*</PaymentLabel>
            <PaymentInput
                type='text'
                required
            />
            <PaymentLabel>Correo electrónico:*</PaymentLabel>
            <PaymentInput
                type='email'
                required
            />
            <PaymentButtons>
                <button className="btn-success">Realizar pago</button>
                <button className="btn-unsuccess" type="reset">Cancelar</button>
            </PaymentButtons>
        </PaymentWrapper>
    )
}