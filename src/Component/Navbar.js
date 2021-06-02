import React,{useState,useEffect} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import{BiGridAlt,BiCard,BiDevices,BiMobileLandscape,BiPlanet,BiHeadphone} from 'react-icons/bi';
import{TiTimes} from 'react-icons/ti';
import{AiFillFacebook,AiFillTwitterSquare,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import{BiJoystick} from 'react-icons/bi'
import color from '../Component/color.png';
import joystick from '../Component/joystick1.png'
import joystick2 from '../Component/joystick2.png';
import virtualreality from '../Component/virtualreality.png';
import ps5c from '../Component/ps5c.png';
import pcgames from '../Component/pcgames.png';
import whitejs from '../Component/ps5w.png'


function Navbar() {
    const[navIcons,setNavIcons]=useState(true)
    const[navItem,setNavItems]=useState(true)

    const navIconHandler=()=>
    {
        setNavIcons(!navIcons)
        setNavItems(!navItem)
    }
    useEffect(()=>
    {
        if(window.innerWidth<=850)
        {
            setNavItems(false)
        }
    },[])
    const navResponsiveHandler=()=>
    {
        if(window.innerWidth<=850)
        {
            setNavItems(false)
            setNavIcons(true)
        }
        else
        {
            setNavItems(true)
            
        }
    }

    window.addEventListener('resize', navResponsiveHandler)
    return (
        <>
       
            <div className="navbar">

                <div className="nav-logo">
                    <img src={color} alt="navbar-logo"></img>
                </div>

                <div className="navIcons" onClick={navIconHandler}>
                    {
                        navIcons ? <BiGridAlt/>  : <TiTimes/>
                    }
                </div>
                {
                    navItem
                     ? <nav>
                          <li className="nav-item"><Link to="#section7" smooth className="nav-link">Pre-Order</Link></li>
                        <li className="nav-item"><Link to="#section5" smooth className="nav-link">Console</Link></li>
                        <li className="nav-item"><Link to="#section3" smooth className="nav-link">VR</Link></li>
                        <li className="nav-item"><Link to="#section2" smooth className="nav-link">Games</Link></li>
                        <li className="nav-item"><Link to="#home" smooth className="nav-link">Home</Link></li>
                 </nav>
                 : null
                }
            </div>

            <div id="home">
                <div className="home-content">
                    <div className="home-head-title">
                        <h1>The Best Game Is Here!</h1>
                       
                        <p style={{color:'ghostwhite'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit, volutpat congue dolor lobortis et. Etiam non risus a lectus lobortis accumsan.</p>
                        <br></br>
                        <br></br>
                        <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" className="home-button" >Learn More</a>
                    </div>
                </div>

                <div className="joystick-img">
                   <img src={joystick} alt="joystcik"/>
                   </div>
            </div>



            <div id="section1">
                <div className="section1-content">
                    <div className="sec1-img">
                        <img src="https://i.ibb.co/hssWQ4b/ps5.png" alt="ps5"></img>
                    </div>

                    <div className="sec1-content-title">
                        <h1>The Game is On</h1>
                        <div className="bottom-dec"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit, volutpat congue dolor lobortis et. Etiam non risus a lectus lobortis accumsan.</p>
                        <br></br>
                        <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" className="sec1-button">Download</a>
                    </div>
                </div>
            </div>



            <div id="section2">
            <div className="sec2-c-title">
                <h1>The Best Online Games</h1>
                        <div className="bottom-dec"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                        
                    </div>
                <div className="sec2-content">
                    <div className="sec2-games">
                        <div className="sec2-tag">
                        <div className="sec2-tag-title">
                                <h4>Adventure</h4>
                            </div>

                            <div className="sec2-tag-btn">
                                <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Enter</a>
                            </div>
                        </div>
                    </div>
                    <div className="sec2-games">
                    <div className="sec2-tag">
                    <div className="sec2-tag-title">
                                <h4>Action</h4>
                            </div>

                            <div className="sec2-tag-btn">
                                <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Enter</a>
                            </div>
                    </div>
                        </div>
                        <div className="sec2-games">
                        <div className="sec2-tag">
                            
                        <div className="sec2-tag-title">
                                <h4>Racing</h4>
                            </div>

                            <div className="sec2-tag-btn">
                                <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Enter</a>
                            </div>
                        </div>
                        </div>
                        <div className="sec2-games">
                        <div className="sec2-tag">
                            <div className="sec2-tag-title">
                                <h4>Sports</h4>
                            </div>

                            <div className="sec2-tag-btn">
                                <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Enter</a>
                            </div>
                        </div>
                        </div>
                        
                </div>

                    <img src={joystick2}  alt="jy2" className="sec2-bg-image"/>
            </div>



            <div id="section3">

                    <div className="sec3-content">
                        <div className="sec3-c-title">
                            <h1>Experince The Best Virtual Reality Gaming</h1>
                            <div className="bottom-dec"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,
                            </p>
                            <br></br>
                            
                            <div>
                            <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" className="sec1-button">Learn More</a>
                            </div>
                           
                        </div>
                    </div>
                    <div className="sec3-bg-img">
                        <img src={virtualreality} alt="vr"/>
                    </div>
            </div>


            <div id="section4">

                <div className="sec4-c-title">
                <h1>What We Are Doing</h1>
                            <div className="bottom-dec"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                </div>
                <div className="sec4-content">
                    <div className="sec4-c">
                       <BiCard className="sec4-icon" style={{background:'linear-gradient(#11998e,#38ef7d)'}} />
                       <h3>PC Games</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <BiJoystick className="sec4-icon" style={{background:'linear-gradient(#F37335,#FDC830)'}} />
                       <h3>Games</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <BiPlanet className="sec4-icon" style={{background:'linear-gradient(#0083B0,#00B4DB)'}} />
                       <h3>Online Games</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <BiDevices className="sec4-icon" style={{background:'linear-gradient(#f80759,#bc4e9c)'}} />
                       <h3>Consoles</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <BiMobileLandscape className="sec4-icon" style={{background:'linear-gradient(#cb2d3e,#ef473a)'}} />
                       <h3>Packet Device</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <BiHeadphone className="sec4-icon" style={{background:'linear-gradient(#0f0c29,#302b63)'}} />
                       <h3>Accessories</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                </div>

               
            </div>



            <div id="section5">
                <div className="sec5-content">
                    <div className="sec5-c-title">
                        <div className="sec5-c-text">
                            <h1>The Best Console Is Here</h1>
                            <div className="bottom-dec"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,
                            </p>
                            <br></br>
                            <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" className="sec5-btn">Learn More</a>
                        </div>
                    </div>
                    <div className="sec5-c-img">
                    <img src={ps5c} className="sec5-bg-img" alt="ps5"/>
                    </div>
                </div>
            </div>




            <div id="section6">
                <div className="sec6-content">
                <div className="sec6-c-title">
                    <h1>Built for PC gamers</h1>
                    <div className="bottom-dec"></div>
                    <br></br>
                    <br></br>
                    <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" className="sec6-btn">Learn More</a>
                </div>
                </div>
                <img src={pcgames} className="sec6-bg-img" alt="psgames"/>
               
               
            </div>


                <div id="section8">
                        <div className="sec8-c">
                            <h1>Witness The Best Gaming Experience</h1>
                            <br/>
                            <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer" className="sec8-btn">Enter</a>
                        </div>

                        <img src={whitejs} className="white-joy-stick" alt="joystick"/>
                </div>

            <div id="section7">

                <div className="sec7-content">
                    <div className="sec7-c">
                        <div className="sec7-title">
                        <h1>Action</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Pre-Order Now</a>
                        </div>
                       
                    </div>
                    <div className="sec7-c">
                    <div className="sec7-title">
                        <h1>Adventure</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Pre-Order Now</a>
                        </div>
                    </div>
                    <div className="sec7-c">
                    <div className="sec7-title">
                        <h1>Sports</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Pre-Order Now</a>
                        </div>
                    </div>
                    <div className="sec7-c">
                    <div className="sec7-title">
                        <h1>Arcade</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Pre-Order Now</a>
                        </div>
                    </div>
                    <div className="sec7-c">
                    <div className="sec7-title">
                        <h1>Racing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Pre-Order Now</a>
                        </div>
                    </div>
                   

                    
                    
                </div>

            </div>


            <footer>
                <div className="footer">
                <div className="f-c">
                    <h3>About Color</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="f-c">
                    <h3>Head</h3>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Console</a></p>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Games</a></p>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Accessories</a></p>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Color</a></p>
                </div>
                <div className="f-c">
                <h3>Head</h3>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Support</a></p>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Standard</a></p>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">FeedBack</a></p>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">FQS</a></p>
                </div>
                <div className="f-c">
                <h3>Head</h3>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">About Color</a></p>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Terms</a></p>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Site Map</a></p>
                    <p><a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer">Rating</a></p>
                </div>

                <div className="f-c">
                <h3>Follow us On</h3>
                    <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer"><AiFillFacebook/></a>
                    <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer"><AiFillInstagram/></a>
                    <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer"><AiFillYoutube/></a>
                    <a href="https://bumper-masters.000webhostapp.com/dummy.html" rel="noreferrer"><AiFillTwitterSquare/></a>
                </div>
                </div>


                <hr></hr>
                <p style={{color:'white',textAlign:'center'}}>Website Developed By Praveen Nathan Chokkar</p>
            </footer>

        </>
    )
}

export default Navbar
