import { Request, Response } from "express";
import axios from "axios";


export const createOrder = async (req: Request, res: Response) => {



    
    const order = {

        "intent": "CAPTURE",
        "purchase_units": [{ "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b", "amount": { "currency_code": "USD", "value": "1.00" } }],
        "description":"maus",
        "payment_source": {
        
            "paypal": {
                "experience_context": {
                    "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                    "brand_name": "Mycompani",
                    "locale": "en-US",
                    "landing_page": "LOGIN",
                    "shipping_preference": "NO_SHIPPING",
                    "user_action": "PAY_NOW",
                    "return_url": "http://localhost:8081/capture",
                    "cancel_url": "http://localhost:8081/cancel"
                }
            }
        }
    }
    //token
    const params = new URLSearchParams()
    params.append("grant_type","client_credentials")
    const {data:{access_token}} = await axios.post(`${process.env.PAYPAL_PAI_URL}/v1/oauth2/token`,params,{
        headers:{
            "Content-Type":'application/x-www-form-urlencoded'
        },
        auth:{
            username:process.env.CLIENT_ID || '',
            password:process.env.SECRET_KEY || ''
        }
    })

  

    
     const {data} = await axios.post(`${process.env.PAYPAL_PAI_URL}/v2/checkout/orders`, order,   
     {
        
        headers: {
            
            Authorization: `Bearer ${access_token}`
        }

     }
     );
     res.status(200).json(data)
}


    


export const captureOrder = (req: Request, res: Response) => {

    res.json({ msg: 'capture Order' })

}

export const cancelOrder = (req: Request, res: Response) => {

    res.json({ msg: 'cancel Order' })

}
