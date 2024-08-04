import React from 'react';
import '../assets/CSS/Flower.css';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { GiFlowerPot } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { TbMoneybag } from 'react-icons/tb';
import { FaGifts } from "react-icons/fa";
import { FaCreditCard } from 'react-icons/fa';

export const Flower = () => {
  return (
    <div>
        {/* Header Section Starts */}
        <div className='header row justify-content-center align-content-center align-items-center row-cols-1 row-cols-md-3 border-bottom p-3'>
            <div className='logo col'>
                <h2 style={{color:"#d81159",textShadow:"2px 2px #000",letterSpacing:"4px"}} className='fs-2 fw-semibold d-inline text-center'>FlOwEr.</h2>
                <GiFlowerPot className='fs-1'/>
            </div>
            <div className='nav-links col'>
                <nav class="navbar">
                    <a href="#home" className='m-1'>Home</a>
                    <a href="#about"  className='m-1'>About</a>
                    <a href="#products"  className=''>Products</a>
                </nav>
            </div>
            <div className='icons col d-none d-lg-block'>
                <FaHeart className='icon fs-3 p-1'/>
                <FaShoppingCart className='icon fs-3 p-1'/>
                <FaUser className='icon fs-3 p-1'/>
            </div>
        </div>
        {/* Header Section Ends */}
        {/* Body Section Starts */}
        <div className='container-fluid main row row-cols-1 justify-content-center align-items-center align-content-center pt-lg-5 '>
            <div class="content col align-items-center justify-content-center p-xl-5 m-xl-5">
            <img src="BlackFlower.jpg" alt="" className='image img-fluid w-25 float-end'/>
            <h3>Fresh flowers</h3>
            <span>( Natural & beautiful flowers )</span>
            <p id="para" className='m-xl-5'>One of the most significant characteristics of flowers is their ephemeral nature.The bloom,the florish,and then they wither away,often in a matter of days or weeks.This transience is what makes them so alluring,so haunting, and so deeply symbolic.</p>
            <h4 className=''>"LIFE IS THE FLOWER FOR WHICH LOVE IS THE HONEY."</h4>
            </div>
            <div class="content col align-items-center justify-content-center d-md-block d-xl-none">
            <img src="lightpinkflower.jpg" alt="" className='image img-fluid w-25 float-end'/>
            <h3 className='text-justify'>The Rose</h3>
            <p className='mt-2'>The love the way a rose perfumes through the air</p>
            <p>singing her song of summer with flare</p>
            <p>showcasing her colors true</p>
            <p>bothing us anew</p>
            <p>with beauty</p>
            <p>THE ROSE*</p>
            <p>poetry</p>
            <p>in motion,the rose</p>
            <p>always belivers her rose</p>
            <p>with reminds me,that a spirit lives free</p>
            <h5 className='text-end text-light px-5'>Mystic.R</h5>
            </div>
        </div>
        {/* Body Section Ends */}
        {/* About Section Starts */}
        <div className='container'>
            <section class="about">
                <h1 class="heading"><span>about</span>us</h1>
                <div className="row">
                <div class="video-container w-25">
                    <video src="computer.mp4"  muted autoPlay></video>
                    <h3>Best Flower Sellers</h3>
                </div>
                <div class="paragraph">
                    <h3>why choose us?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum debitis nisi ea dolor nulla incidunt harum architecto sint quibusdam suscipit qui recusandae quas exercitationem inventore, similique deserunt quisquam nihil aliquam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque quaerat nam cupiditate exercitationem consequatur, assumenda sit magnam accusantium quis!</p>
                    <a href="#" class="btn">Learn more</a>
                </div>
                </div>
            </section>
        </div>
        {/* About Section Ends */}
        {/* Customer Section Starts */}
        <div  class="icons-container row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center align-items-center">
            <div class="icons col">
                <TbTruckDelivery className='fs-1'/>
                <h3 className='fs-4 mt-3'>free delivery</h3>
                <span>on all orders</span>
            </div>
            <div class="icons col">
                <TbMoneybag className='fs-1'/>
                <h3 className='fs-4 mt-3'>10 days returns</h3>
                <span>moneyback guarantee</span>
            </div>
            <div class="icons col">
                <FaGifts className='fs-1'/>
                <h3 className='fs-4 mt-3'>offer & gifts</h3>
                <span>on all orders</span>
            </div>
            <div class="icons col"> 
                <FaCreditCard className='fs-1'/>
                <h3 className='fs-4 mt-3'>secure payments</h3>
                <span>protected by paypal</span>
            </div>
        </div>
        {/* Customer Section Ends */}
        {/* Footer Section Starts */}
        <section class="container-fluid footer" id="footer">
        <div class="foot row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center align-items-start mt-4">
            <div class="links col">
                <h3 className='text-capitalize fs-4'>quick links</h3>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="links col">
                <h3 className='text-capitalize fs-4'>extra links</h3>
                <a href="#">my account</a>
                <a href="#">my ordre</a>
                <a href="#">my favorite</a>
            </div>
            <div class="links col">
                <h3 className='text-capitalize fs-4'>locations</h3>
                <a href="#">india</a>
                <a href="#">USA</a>
                <a href="#">japan</a>
                <a href="#">frabce</a>
                <a href="#">canada</a>
            </div>
            <div class="links col">
                <h3 className='text-capitalize fs-4'>contact info</h3>
                <a href="#">+123-456-7890</a>
                <a href="#">example@gmail.com</a>
                <a href="#">mumbai, india - 5632565</a>
            </div>
        </div>
        <div class="credit">@Created by <span>mahesh :)</span></div>
        </section>
        {/* Footer Section Ends */}
    </div>
  )
}
