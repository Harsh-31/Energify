import React from 'react'
import '../styles/checkout.css';


export default function Checkout() {
  return (
    <div><div class="ab">

    <form action="">

        <div class="abc">

            <div class="abcd">

                <h3 class="abcde">billing address</h3>

                <div class="ib">
                    <span>Full name:</span>
                    <input type="text" placeholder="Enter name here"/>
                </div>
                <div class="ib">
                    <span>Email:</span>
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div class="ib">
                    <span>Address:</span>
                    <input type="text" placeholder="Full address"/>
                </div>
                <div class="ib">
                    <span>City:</span>
                    <input type="text" placeholder="Eg-Delhi"/>
                </div>

                <div class="temp">
                   
                    <div class="ib">
                        <span>Zip :</span>
                        <input type="text" placeholder="123456"/>
                    </div>
                </div>

            </div>

            <div class="abcd">

                <h3 class="abcde">Payment</h3>

                <div class="ib">
                    <span>cards accepted :</span>
                    <img src="images/card_img.png" alt=""></img>
                </div>

              
                <div class="ib">
                    <span>Name on Card :</span>
                    <input type="text" placeholder="Devashish"/>
                </div>
                <div class="ib">
                    <span>Credit card number :</span>
                    <input type="number" placeholder="****-2222-3333-****"/>
                </div>
                <div class="ib">
                    <span>Expiry month :</span>
                    <input type="text" placeholder="1"/>
                </div>

                <div class="temp">
                    <div class="ib">
                        <span>Expiry Year:</span>
                        <input type="number" placeholder="2030"/>
                    </div>
                    <div class="ib">
                        <span>CVV :</span>
                        <input type="text" placeholder="567"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout" class="sb"></input>

    </form>

</div>    </div>
  )
}