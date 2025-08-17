export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";




export async function POST(req:NextRequest) {
   const body = await req.json()
const stripe = new Stripe(process.env.SECRET_KEY as string);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: body.product,
            },
            unit_amount: body.price * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "https://omnipay-hcgwf9hsarfxe2f7.centralindia-01.azurewebsites.net/success",
      cancel_url: "https://omnipay-hcgwf9hsarfxe2f7.centralindia-01.azurewebsites.net/cancel",
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
