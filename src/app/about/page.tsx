"use clients"

export default function About() {

  const fullname = "Richard Glennly Kristofer B. Quinto";
  const year = new Date().getFullYear();
  const tenure = year - 2018

  return (
    <div className="bg-red-200 px-5 py-2">
      <span className="text-cyan-900 font-bold text-2xl">About Me</span>
      <p className="text-cyan-700 mt-2 mb-10">
        Hello! I'm <span className="text-cyan-900 font-semibold"> {fullname} </span>, a passionate and dedicated freelance developer specializing in web and mobile application development.
        With {tenure} years of experience in the industry, I have a proven track record of delivering high-quality, user-friendly, and innovative solutions tailored to meet the unique needs of my clients.
      </p>

      <span className="text-cyan-900 font-bold text-2xl">My Mission</span>

      <p className="text-cyan-700 mt-2 mb-10">
        My mission is to transform ideas into reality through robust and efficient web and mobile applications.
        I aim to provide my clients with top-notch solutions that not only meet their requirements but also help them achieve their business goals.
      </p>

      <span className="text-cyan-900 font-bold text-2xl">My Expertise</span>

      <p className="text-cyan-700 mt-2 mb-10">
        Web Development: From simple landing pages to complex web applications, I build responsive, intuitive, and best practices.
        Mobile App Development: I create engaging and functional mobile applications for Android platforms, ensuring a seamless user experience and optimal performance.
        UI/UX Design: I focus on creating aesthetically pleasing and user-centric designs that enhance the overall user experience and drive engagement.
      </p>

      <span className="text-cyan-900 font-bold text-2xl">Let's Work Together</span>

      <p className="text-cyan-700 mt-2 mb-10">
        I'm excited to collaborate with you on your next project! Whether you need a new website, a mobile app, or a redesign of an existing platform, I am here to help. Feel free to reach out to me at [contact information] to discuss your project requirements and how I can assist you in achieving your goals.
        Thank you for visiting my page. Let's create something amazing together!
      </p>
    </div>
  )
}
