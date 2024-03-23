import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <p className="my-5">
          Whether you're a current member, prospective member, or just curious about what we have to offer, we're excited to connect with you. At Prithvi's Gym, we're committed to providing exceptional service and support to our community. Don't hesitate to reach out – we're here to help you on your fitness journey!
          </p>
          <p>© Prithvi's GYM All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Facebook</p>
          <p className="my-5">Instagram</p>
          <p>Whatsapp</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">sector 57, Noida, UP</p>
          <p>(91) 988707</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
