import {  ArrowUpRight } from "lucide-react";

const UnsureServicesSuit = () => {
  return (
    <section className="min-h-[50vh] lg:min-h-[70vh] mt-12 w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
      <div className="bg-[#69D965] rounded-2xl px-6 lg:px-8 py-6 lg:py-8 flex w-full lg:w-[50%] flex-col justify-between">
        <div className="flex justify-between items-start gap-4">
          <h1 className="font-[Duck-cry] text-[24px] sm:text-[32px] lg:text-[60px] leading-none">UNSURE WHICH SERVICE SUITS <br /> YOU?</h1>
          <div className="border flex justify-center items-center rounded-full bg-white h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] flex-shrink-0">
            <ArrowUpRight size={"20px"} className="lg:w-[24px] lg:h-[24px]" />
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <p className="font-[poppins] w-full lg:w-[80%] font-[600] text-sm lg:text-base">
            Booking a consultation with our experts can help you identify the
            best services for your needs.
          </p>
        </div>
      </div>
      <div className="bg-[#B8A3F8] rounded-2xl px-6 lg:px-8 py-6 lg:py-8 flex w-full lg:w-[50%] flex-col justify-between">
        <div className="flex justify-between items-start gap-4">
          <h1 className="font-[Duck-cry] text-[24px] sm:text-[32px] lg:text-[60px] leading-none">UNSURE WHICH SERVICE SUITS <br /> YOU?</h1>
          <div className="border flex justify-center items-center rounded-full bg-white h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] flex-shrink-0">
            <ArrowUpRight size={"20px"} className="lg:w-[24px] lg:h-[24px]" />
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <p className="font-[poppins] w-full lg:w-[80%] font-[600] text-sm lg:text-base">
            Booking a consultation with our experts can help you identify the
            best services for your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnsureServicesSuit;
