import { useContext, useState, useEffect } from 'react';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

import axios from 'axios';

const Checkout = () => {

    const [error, seterror] = useState()
    const [loading, setloading] = useState(false)

    const stripe = useStripe()
    const elements = useElements()

    const paymentSubmit = async (e) => {

        e.preventDefault()

        setloading(true)

        const paymentData = {
            amount: 400,
            
        }

        try {

            const config = {
                headers: {
                    "Content-Type": "application/json",
                }
            }

            const { data } = await axios.post(
                'http://localhost:4000/api/payment',
                paymentData,
                config

            )

            const client_secret = data.client_secret

            if (!stripe || !elements) return

            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: 'dummyUser',
                        email: 'maliksab656@gmail.com',
                        address: {
                          city: 'dummyCity',
                          country: 'US'
                        }
                      }
                }
            })
            
            if (result.error) {
                setloading(false)
                seterror(result.error.message)
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    setloading(false)

                } else {
                    seterror('There is some issue while processing payment')
                }
            }

        } catch (error) {
            setloading(false)
            seterror(error)

        }

    }
   
    console.log(error)

    return (
        <>

            <div>Card Info</div>
            <form onSubmit={paymentSubmit} >
                <div >

                    <div >
                        <CardNumberElement />
                    </div>
                </div>
                <div >

                    <div>
                        <CardExpiryElement />
                    </div>
                </div>
                <div >

                    <div >
                        <CardCvcElement />
                    </div>
                </div>




                <button> {loading ? 'loading...' : 'pay-400'}</button>


            </form>


        </>
    )
}

export default Checkout