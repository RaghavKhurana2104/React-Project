import React from 'react'

function Footer() {
  return (
    <div>
      <div class="div" style={{backgroundColor:"black",paddingTop:"10px",display:"flex",flexWrap:"wrap",lineHeight:"20px",justifyContent:"space-around"}}>
            <div class="" style={{borderRight:"2px solid red",width:"100px"}}>
                <ul style={{color:"white",fontSize:"15px",float:"center",listStyle:"none",display:"inline-block",margin: "0", padding: "10px"}}>
                    <li><b>ABOUT</b></li>
					<br></br>
                    <li><a>Contact Us</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Stories</a></li>
                    <li><a>Press</a></li>
                    <li><a>Flipkart</a></li>
                </ul>
            </div>
            <div class="" style={{borderRight:"2px solid red"}}>
                <ul style={{color:"white",fontSize:"15px",listStyle:"none",margin:"0", padding: "10px"}}>
                    <li><b>HELP</b></li>
					<br></br>
                    <li><a>Payments</a></li>
                    <li><a>Shipping</a></li>
                    <li><a>Cancellation and Returns</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Report Infringement</a></li>
                </ul>
            </div>
            <div class="" style={{borderRight:"2px solid red"}}>
                <ul style={{color:"white",fontSize:"15px",listStyle:"none",margin: "0", padding: "10px"}}>
                    <li><b>POLICY</b></li>
					<br></br>
                    <li><a>Return Policy</a></li>
                    <li><a>Terms of Use</a></li>
                    <li><a>Security</a></li>
                    <li><a>Privacy</a></li>
                    <li><a>Sitemap</a></li>
                </ul>
            </div>
            <div class="" style={{borderRight:"2px solid red"}}>
                <ul style={{color:"white",fontSize:"15px",listStyle:"none",margin: "0", padding: "10px"}}>
                    <li><b>SOCIAL</b></li>
					<br></br>
                    <li><a>Facebook</a></li>
                    <li><a>Twitter</a></li>
                    <li><a>YouTube</a></li>
                </ul>
            </div>
            <div class="" style={{color:"white",width:"200px",height:"200px",borderRight:"2px solid red"}}>
                <ul style={{listStyle:"none",margin: "0", padding: "10px",fontSize:"15px"}}>
                    <li><b>Mail Us:</b></li>
					<br></br>
                    <li>Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia &
                        Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village,
                        Bengaluru, 560103, Karnataka, India
                    </li>
                </ul>
            </div>
            <div class="" style={{color:"white",width:"200px",height:"200px"/*,borderRight:"2px solid red"*/}}>
                <ul style={{listStyle:"none",fontSize:"15px",margin: "0", padding: "10px"}}>
                    <li><b>Mail Us:</b></li>
					<br></br>
                    <li>Flipkart Internet Private Limited,
                        Buildings Alyssa, Begonia &
                        Clove Embassy Tech Village,
                        Outer Ring Road, Devarabeesanahalli Village,
                        Bengaluru, 560103, Karnataka, India
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer

