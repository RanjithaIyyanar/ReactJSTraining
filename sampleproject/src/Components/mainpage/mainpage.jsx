import React from 'react'
import "./mainpage.css"

export default function MainPage() {
  return (
    <div>
        <div className='MySlides'>
            <img src='https://img.freepik.com/premium-photo/black-desk-with-laptop-plant-it_896360-4108.jpg'></img>
            <div className='MainContent'>
                <div className='BoldCon'>
                  <h3>A Blog for Passionate People </h3>
                  <h3>and Website Lovers</h3>
                </div>
                <div className='paraCon'>
                  <p>Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. </p>
                  <p>Those attacking wealth creation are often just seeking status.</p>
                </div>
                <div className='Btn'>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    </div>
   
    // <div className="mySlides">
    //     <img src="/w3images/la.jpg" style="width:100%"></img>
    // </div>
  )
}
