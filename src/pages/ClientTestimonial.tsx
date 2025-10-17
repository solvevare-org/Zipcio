const ClientTestimonial = () => {
  let TestimonialDiv = [
    {
      id: 1,
      name: "Joe Tenney",
      company: "Woobie",
      logo: "https://zipcio.com/hubfs/WOOBIE-LOGO-GRN.webp",
      testimonial:
        "“If you are looking to migrate your current CRM or start out in HubSpot, bringing on Cory and his team is a no brainer. Thank you Zipcio!”",
        background: "#B8A3F8",
    },
    {
      id: 2,
      name: "Jason Morena",
      company: "Mike Posner",
      logo: "https://zipcio.com/hubfs/mp-logo-script-wht.webp",
      testimonial:
        "“If you are looking to migrate your current CRM or start out in HubSpot, bringing on Cory and his team is a no brainer. Thank you Zipcio!”",
        background: "#69D965",
    },
    {
      id: 3,
      name: "Craig Bender",
      company: "InsureU2",
      logo: "https://zipcio.com/hubfs/Screenshot%202025-02-20%20at%2010-25-45%20PM.webp",
      testimonial:
        "“If you are looking to migrate your current CRM or start out in HubSpot, bringing on Cory and his team is a no brainer. Thank you Zipcio!”",
        background: "#EB8025",
    },
  ];

  return (
    <section className="min-h-[100vh] flex flex-col gap-[200px] mt-12">
      <div className="text-center mt-[70px]">
        <h1 className="font-[Duck-cry] leading-none text-[120px]">
          CLIENT <br />
          TESTIMONIAL
        </h1>
      </div>
      <div>
      {TestimonialDiv.map((item) => (
        <div key={item.id} className="grid grid-cols-4 font-[poppins] mt-[50px] border-t">
          <p className="text-gray-600">/0{item.id}</p>

          {/* name/company - avoid nested <p> inside <p> */}
          <div className="font-[500]">
            <div>{item.name}</div>
            <div className="text-gray-500">{item.company}</div>
          </div>

          {/* use inline style for dynamic background color */}
          <div
            style={{ background: item.background }}
            className="h-[250px] rounded-2xl border w-[200px] -top-[50%] relative flex justify-center items-center"
          >
            <img src={item.logo} alt="" className="h-[35px]" />
          </div>

          <p className="font-[500]">{item.testimonial}</p>
        </div>
      ))}
        </div>
    </section>
  );
};

export default ClientTestimonial;
