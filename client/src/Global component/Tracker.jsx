import React from 'react'
import style from './tracker.module.css'

export default function Tracker() {
  return (
    <div>

<div className={style.card}>
    <div className={style.title}>Warehouse Name</div>
    <div className={style.info}>
        <div className={style.row}>
            <div className={style.col-7}>
                <span id={style.heading}>Shipment Date</span><br>
                <span id={style.details}>31 March 2025</span>
            </div>
            <div className="col-5 pull-right">
                <span id={style.heading}>Shipment No.</span><br>
                <span id={style.details}>lol__077</span>
            </div>
        </div>      
    </div>      

    <div className={style.tracking}>
        <div className={style.title}>Tracking Order</div>
    </div>
    <div className={style.progress-track} id={style.progressTrack}>
        <ul id={style.progressbar}>
            <li className="step0 active " id="step1">Ordered</li>
            <li className="step0 active text-center" id="step2">Shipped</li>
            <li className="step0 active text-right" id="step3">On the way</li>
            <li className="step0 text-right" id="step4">Delivered</li>
        </ul>
    </div>

    <div className={style.rating-section}>
        <div className={style.title}>Rating</div>
        <div className={style.stars} id={style.stars}>
            <span className={style.star} data-value="1">&#9733;</span>
            <span className={style.star} data-value="2">&#9733;</span>
            <span className={style.star} data-value="3">&#9733;</span>
            <span className={style.star} data-value="4">&#9733;</span>
            <span className={style.star} data-value="5">&#9733;</span>
        </div>
        <div className={style.rating-value} id={style.rating-value}>0</div>
    </div>

    <div className={style.footer}>
        <div className={style.row}>
            <div className={style.col-2}><img className={style.cssimg-fluid} src="https://i.imgur.com/YBWc55P.png"></div>
            <div className={style.col-10}>Want any help? Please &nbsp;<a> contact us</a></div>
        </div>
    </div>
</div>


    </div>
  )
}