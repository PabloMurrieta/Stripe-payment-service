import { Request, Response } from "express";

import Stripe from "stripe";

const stripe = new Stripe(`sk_test_51O9hE0AKuedb3a7QqimTWrnCO1X53VRgXZHSP0SOWyet8iFnaspkhHv0BLwQB0QXFjmMayNYYHQs5FqJW8Jzwo3i00aCKLDpHb`);


export const createSubscription = async (req: Request, res: Response) => {
    try {
        const paymentLink = await stripe.paymentLinks.create({
            line_items: [
              {
                price: `price_1OA1etAKuedb3a7QdTmWNC7g`,
                quantity: 1,
              },
            ],
          });
          
  
      res.status(303).redirect(( paymentLink).url || '');
    } catch (error) {
      res.status(500).json({ msg: { error } });
    }
  }

export const captureSubscription = async (req: Request, res: Response) => {

    
    console.log('llego');
    res.send({msg:'succes'})


};


export const cancelSubcription = (req: Request, res: Response) => {

    res.redirect('/');

};






