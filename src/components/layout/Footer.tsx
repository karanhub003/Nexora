import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="topSide">
        <div className="leftSide">
         <div className="infoWrapper">
             <h3>nexora</h3>
          <p>Products for a better tomorrow.</p>
          <p>
            Discover thoughtfully selected products that blend innovation, quality
            and style.
          </p>
         </div>
         <div className="socialIconWrapper border flex items-center ">
            <SocialIcon  style={{ width: 40, height: 40 }}  url='https://instagram.com' href='https://instagram.com' label='Instagram' fgColor='#9B968E' bgColor='transparent'/>
            <SocialIcon style={{ width: 24, height: 24 }}  url='https://facebook.com' href='https://facebook.com' label='Facebook'  bgColor='#9B968E'/>
            <SocialIcon style={{ width: 40, height: 40 }}   url='https://youtube.com' href='https://youtube.com' label='Youtube' fgColor='#9B968E' bgColor='transparent'/>
            <SocialIcon style={{ width: 40, height: 40 }}  url='https://linkedin.com' href='https://linkedin.com' label='Linkedin' fgColor='#9B968E' bgColor='transparent'/>
         </div>
        </div>
        <div className="rightSide">
            
        </div>
      </div>
    </div>
  )}