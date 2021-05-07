import React,{useState,useEffect} from 'react';
import {HashLink, HashLink as Link} from 'react-router-hash-link';
import{BiGridAlt} from 'react-icons/bi';
import{TiTimes} from 'react-icons/ti';
import{GiAtom} from 'react-icons/gi';
import{AiFillFacebook,AiFillTwitterSquare,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import{BiJoystick} from 'react-icons/bi'
import color from '../Component/color.png';
import joystick from '../Component/joystick1.png'
import joystick2 from '../Component/joystick2.png';
import virtualreality from '../Component/virtualreality.png';
import ps5 from '../Component/ps5.png';
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
                          <li className="nav-item"><HashLink to="#section7" smooth className="nav-link">Pre-Order</HashLink></li>
                        <li className="nav-item"><HashLink to="#section5" smooth className="nav-link">Console</HashLink></li>
                        <li className="nav-item"><HashLink to="#section3" smooth className="nav-link">VR</HashLink></li>
                        <li className="nav-item"><HashLink to="#section2" smooth className="nav-link">Games</HashLink></li>
                        <li className="nav-item"><HashLink to="#home" smooth className="nav-link">Home</HashLink></li>
                 </nav>
                 : null
                }
            </div>

            <div id="home">
                <div className="home-content">
                    <div className="home-head-title">
                        <h1>The Best Game Out Here!</h1>
                       
                        <p style={{color:'ghostwhite'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit, volutpat congue dolor lobortis et. Etiam non risus a lectus lobortis accumsan.</p>
                        <br></br>
                        <br></br>
                        <a href="#" className="home-button">Download COLOR</a>
                    </div>
                </div>

                <div className="joystick-img">
                   <img src={joystick}/>
                   </div>
            </div>



            <div id="section1">
                <div className="section1-content">
                    <div className="sec1-img">
                        <img src={ps5}></img>
                    </div>

                    <div className="sec1-content-title">
                        <h1>The Game is On</h1>
                        <div className="bottom-dec"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit, volutpat congue dolor lobortis et. Etiam non risus a lectus lobortis accumsan.</p>
                        <br></br>
                        <a href="#" className="sec1-button">Download</a>
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
                                <a href="">Enter</a>
                            </div>
                        </div>
                    </div>
                    <div className="sec2-games">
                    <div className="sec2-tag">
                    <div className="sec2-tag-title">
                                <h4>Action</h4>
                            </div>

                            <div className="sec2-tag-btn">
                                <a href="">Enter</a>
                            </div>
                    </div>
                        </div>
                        <div className="sec2-games">
                        <div className="sec2-tag">
                            
                        <div className="sec2-tag-title">
                                <h4>Racing</h4>
                            </div>

                            <div className="sec2-tag-btn">
                                <a href="">Enter</a>
                            </div>
                        </div>
                        </div>
                        <div className="sec2-games">
                        <div className="sec2-tag">
                            <div className="sec2-tag-title">
                                <h4>Sports</h4>
                            </div>

                            <div className="sec2-tag-btn">
                                <a href="">Enter</a>
                            </div>
                        </div>
                        </div>
                        
                </div>

                    <img src={joystick2} className="sec2-bg-image"/>
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
                            <a href="#" className="sec1-button">Learn More</a>
                            </div>
                           
                        </div>
                    </div>
                    <div className="sec3-bg-img">
                        <img src={virtualreality}/>
                    </div>
            </div>


            <div id="section4">

                <div className="sec4-c-title">
                <h1>Experince The Best Virtual Reality Gaming</h1>
                            <div className="bottom-dec"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                </div>
                <div className="sec4-content">
                    <div className="sec4-c">
                       <GiAtom className="sec4-icon" style={{background:'linear-gradient(#11998e,#38ef7d)'}} />
                       <h3>Heading</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <BiJoystick className="sec4-icon" style={{background:'linear-gradient(#F37335,#FDC830)'}} />
                       <h3>Heading</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <GiAtom className="sec4-icon" style={{background:'linear-gradient(#0083B0,#00B4DB)'}} />
                       <h3>Heading</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <GiAtom className="sec4-icon" style={{background:'linear-gradient(#0083B0,#00B4DB)'}} />
                       <h3>Heading</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <GiAtom className="sec4-icon" style={{background:'linear-gradient(#0083B0,#00B4DB)'}} />
                       <h3>Heading</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas id mi ac porta. Integer pharetra arcu elit,</p>
                    </div>
                    <div className="sec4-c">
                       <GiAtom className="sec4-icon" style={{background:'linear-gradient(#0083B0,#00B4DB)'}} />
                       <h3>Heading</h3>
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
                            <a href="" className="sec5-btn">Download</a>
                        </div>
                    </div>
                    <div className="sec5-c-img">
                    <img src={ps5c} className="sec5-bg-img"/>
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
                    <a href="" className="sec6-btn">Learn More</a>
                </div>
                </div>
                <img src={pcgames} className="sec6-bg-img"/>
               
               
            </div>


                <div id="section8">
                        <div className="sec8-c">
                            <h1>Witness The Best Gaming Experience</h1>
                            <br/>
                            <a href="#" className="sec8-btn">Enter</a>
                        </div>

                        <img src={whitejs} className="white-joy-stick"/>
                </div>

            <div id="section7">

                <div className="sec7-content">
                    <div className="sec7-c">
                        <div className="sec7-title">
                        <h1>Action</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="#">Pre-Order Now</a>
                        </div>
                       
                    </div>
                    <div className="sec7-c">
                    <div className="sec7-title">
                        <h1>Adventure</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="#">Pre-Order Now</a>
                        </div>
                    </div>
                    <div className="sec7-c">
                    <div className="sec7-title">
                        <h1>Sports</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="#">Pre-Order Now</a>
                        </div>
                    </div>
                    <div className="sec7-c">
                    <div className="sec7-title">
                        <h1>Arcade</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="#">Pre-Order Now</a>
                        </div>
                    </div>
                    <div className="sec7-c">
                    <div className="sec7-title">
                        <h1>Racing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <br></br>
                        <a href="#">Pre-Order Now</a>
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
                    <p><a href="">Console</a></p>
                    <p><a href="">Games</a></p>
                    <p><a href="">Accessories</a></p>
                    <p><a href="">Color</a></p>
                </div>
                <div className="f-c">
                <h3>Head</h3>
                    <p><a href="">Support</a></p>
                    <p><a href="">Standard</a></p>
                    <p><a href="">FeedBack</a></p>
                    <p><a href="">FQS</a></p>
                </div>
                <div className="f-c">
                <h3>Head</h3>
                    <p><a href="">About Color</a></p>
                    <p><a href="">Terms</a></p>
                    <p><a href="">Site Map</a></p>
                    <p><a href="">Rating</a></p>
                </div>

                <div className="f-c">
                <h3>Follow us</h3>
                    <a href=""><AiFillFacebook/></a>
                    <a href=""><AiFillInstagram/></a>
                    <a href=""><AiFillYoutube/></a>
                    <a href=""><AiFillTwitterSquare/></a>
                </div>
                </div>


                <hr></hr>
                <p style={{color:'white',textAlign:'center'}}>Website Developed By Praveen Nathan Chokkar</p>
            </footer>

        </>
    )
}

export default Navbar
