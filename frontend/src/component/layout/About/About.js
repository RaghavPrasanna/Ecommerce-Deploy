import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            //   src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              // src="https://media.istockphoto.com/id/1214656431/photo/colorful-indian-handicarft-art.jpg?s=612x612&w=0&k=20&c=wLNvASN1uWuxiM0YsReU5-inEuw70lvlofiB7W82gHg="
              src= "https://w7.pngwing.com/pngs/719/900/png-transparent-india-craft-nation-handicraft-logo-veg-thali-text-logo-india.png"
              // src= "../../images/imghandi.jpg"
              alt="Founder"
            />
            <Typography>E-Commerce For Artisans</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            The main objective of this website is to promote the Indian handicraft industry globally. Providing a common platform to make, market, and sell high-quality handicrafts and goods.

            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Get To know us More</Typography>
            <a
              href="https://www.facebook.com/"
              target="blank"
            >
              <FacebookIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
