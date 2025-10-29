import propert_1 from "../assets/property_1.jpg"
import propert_2 from "../assets/property_2.jpg"
import propert_3 from "../assets/property_3.jpg"


const ClientTestimonial = () => {
  let TestimonialDiv = [
    {
      id: 1,
      name: "Performance ",
      company: "Visibility",
      logo: propert_1,
      testimonial:
      "“Brokers gain real-time dashboards that reveal agent activity, pipeline health, and commission tracking. Every deal is visible at a glance, helping leaders make informed decisions quickly and identify growth opportunities across the entire brokerage.”"
    },
    {
      id: 2,
      name: "Compliance & ",
      company: "Security",
      logo: propert_2,
      testimonial:
        "“NuHelixX records every step of the transaction and integrates with secure e-signature platforms. Brokerages protect their reputation, maintain regulatory compliance, and reduce costly risks with built-in transparency and accountability.”",
    },
    {
      id: 3,
      name: "Lower Training",
      company: " Costs",
      logo: propert_3,
      testimonial:
        "“AI guides new agents through daily tasks, reducing training time and accelerating productivity. Brokerages save money on onboarding while ensuring that agents deliver consistent results from their very first day in the system.”",
        
    },
  ];

  return (
    <section className="min-h-[100vh] flex flex-col gap-[100px] lg:gap-[200px] px-16 ">
      <div className="text-center mt-[40px] lg:mt-[70px]">
        <h1 className="font-[Duck-cry] leading-none text-[60px] sm:text-[80px] lg:text-[120px]">
          CLIENT <br />
          EXPERIENCE
        </h1>
      </div>
      <div>
      {TestimonialDiv.map((item) => (
        <div key={item.id} className="grid grid-cols-1 lg:grid-cols-4 font-[poppins] mt-[30px] lg:mt-[50px] border-t gap-4 lg:gap-0">
          <p className="text-gray-600 text-sm lg:text-base">0{item.id}</p>

          <div className="font-[500] text-sm lg:text-base">
            <div>{item.name}</div>
            <div className="text-gray-500">{item.company}</div>
          </div>

          <div
            className="h-[150px] lg:h-[250px] rounded-2xl w-full lg:w-[200px] -top-[25px] lg:-top-[50px] relative flex justify-center items-center mx-auto lg:mx-0"
          >
            <img src={item.logo} alt="" className="h-full lg:h-full rounded-2xl w-auto object-cover" />
          </div>

          <p className="font-[500] text-sm lg:text-base">{item.testimonial}</p>
        </div>
      ))}
        </div>
    </section>
  );
};

export default ClientTestimonial;
