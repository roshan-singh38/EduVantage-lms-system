import { Home, Logo, Logo1 } from "../(dashboard)/_components/logo";
const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full flex flex-col items-center justify-center mt-[1200px] lg:mt-[650px]" id="screen">
      <div id="home">
        <Logo1 />
      </div>
      <div id="menu">
        <a href="#home" className="m-3 hover:text-blue-600 hover:underline">Home</a>
        <a href="#about" className="m-3 hover:text-blue-600 hover:underline">About Us</a>
        <a href="#contact" className="m-3 hover:text-blue-600 hover:underline">Contact US</a>
        <a href="#login" className="m-3 hover:text-blue-600 hover:underline">Log In</a>
      </div>


      <div className="mt-14 flex flex-col lg:flex lg:flex-row m-8">
        <h1 className="text-white mt-16 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Discover, Learn, Succeed
          </span>
          <p className="text-[#615c61] text-base sm:text-lg mb-6 lg:text-xl m-5">
            Unlock your potential and shape your future with our empowering courses. <br />
            The journey to success begins with a single step - enroll today!</p>
        </h1>
        <div className="flex justify-center">
          <Home />
        </div>
      </div>


      <h1 className="text-3xl font-medium capitalize text-black mb-10 text-center mt-14" id="login">Login or Create Your Account.</h1>
      {children}

      <div className="text-center m-6 mt-14" id="about">
        <h1 className="text-3xl font-medium capitalize text-black mb-6 ">About Us</h1>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl">Welcome to EduVantage</h1><br />
        At EduVantage, we believe in the transformative power of education. Our platform is dedicated to providing a dynamic and enriching learning experience for students of all backgrounds, empowering them to reach their full potential.
        <br /><b>Our Mission</b><br />
        Empowering Minds, Enabling Success Our mission is to make high-quality education accessible to everyone. We strive to create a platform where students can discover, learn, and succeed in their academic and professional journeys.

        <br /><b>Why Choose EduVantage</b><br />
        Interactive Learning: Engage with dynamic course materials, interactive assessments, and collaborative discussions. <br />
        Flexible Learning: Learn at your own pace, on your own schedule, with courses that fit your lifestyle. <br />
        Expert Instructors: Learn from industry experts and passionate educators dedicated to your success.
        <br /><b>Join Us on the Journey</b><br />
        We invite you to join us on this educational journey. Whether you are a student eager to expand your knowledge or an instructor looking to share your expertise, EduVantage is here to support your educational aspirations. Thank you for
        choosing EduVantage. Together, let's unlock the doors to a world of learning possibilities.
      </div>

      <div id="contact" className="mt-14">
        <h1 className="text-3xl font-medium capitalize text-black mb-6 ">Contact Us</h1>
        <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800" id="social">
          <a href="https://instagram.com/eduvantage_23?igshid=OGQ5ZDc2ODk2ZA==" target="blank"><img src="https://i.pinimg.com/originals/72/9f/77/729f7798561be2cb67f39e916a22eb6a.png" height="40" width="40" /></a>
          <a href="https://twitter.com/home?lang=en" target="blank"><img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" height="40" width="40" /></a>
        </ul>
      </div>

      <footer className="footer text-center bg-black/80 p-3 w-full mt-14">
        <p className="text-slate-300">&copy; 2023 Your Website Name. All rights reserved. Designed by Roshan & Team.</p>
      </footer>

    </div>
  );
}

export default AuthLayout;



