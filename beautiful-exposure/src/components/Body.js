import React from "react";
  import Carousel from 'react-bootstrap/Carousel';
  import Video1 from '../Images/Video1.mp4';
  import Video2 from '../Images/Video2.mp4';
  import Video3 from '../Images/Video3.mp4';
  import Logo from '../Images/Blogo-1.png'
function Body() {
  return (
    <Carousel >
      <Carousel.Item>
      <div className='carouselContent'>
      <video className="carouselVideo" autoPlay={true} muted={true} loop={true} src={Video1}></video>
      </div>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <div className="carouselContent">
        <video className="carouselVideo"  autoPlay={true} muted={true} loop={true} src={Video2}></video>
        </div>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
      <div className="carouselContent">
      
        <video className="carouselVideo"  autoPlay={true} muted={true} loop={true} src={Video3}></video>
        </div>
        
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>

    </Carousel>
  );
}



  


export default Body;