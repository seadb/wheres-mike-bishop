import React from 'react'

const Contact = () => (
 <div>
 <img className="milk-carton" src="public/img/milk-carton-mike.png"/>
    <p>
      If you would like to get ahold of Mike Bishop, write him a letter or 
      call one of his offices. You can also contact him via email on
      &nbsp;<a href="https://mikebishop.house.gov/contact">his website</a>. 
      Ask him when he'd be willing to set up a townhall meeting - maybe
      you'll have better luck than us.<br/>
      <div className="contact">
        <a href="">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/repmikebishop" className="twitter">
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        <a href="" className="facebook">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        <a href="" className="youtube">
          <i className="fa fa-youtube-square" aria-hidden="true"></i>
        </a>
        <a href="" className="rss">
          <i className="fa fa-rss-square" aria-hidden="true"></i>
        </a>
      </div>

    <b>Washington, D.C. office:</b><br/>
    428 Cannon HOB<br/>
    Washington, D.C. 20515<br/>
    <i className="fa fa-phone" aria-hidden="true"></i> (202) 225-4872<br/>
    <br/>
    <b>8th District office:</b><br/>
    711 E. Grand River Ave.<br/>
    Suite A<br/>
    Brighton, MI 48116<br/>
    <i className="fa fa-phone" aria-hidden="true"></i> (810) 227-8600<br/>
    <i className="fa fa-fax" aria-hidden="true"></i> (810) 227-8628<br/>
    </p>

  </div>
)

export default Contact
