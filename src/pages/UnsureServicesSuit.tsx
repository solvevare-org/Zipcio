import {  ArrowUpRight } from "lucide-react";

const UnsureServicesSuit = () => {
  return (
    <section className="min-h-[70vh] mt-12 w-full flex gap-6">
      <div className="bg-[#69D965] rounded-2xl px-8 py-8 flex w-[50%] flex-col justify-between p-4`">
        <div className="flex justify-between">
          <h1 className="font-[Duck-cry] lg:text-[60px] leading-none text-[2.3rem]">UNSURE WHICH SERVICE SUITS <br /> YOU?</h1>
          <div className="border flex justify-center items-center rounded-full bg-white h-[50px] min-w-[50px]">
            <ArrowUpRight size={"24px"} />
          </div>
        </div>
        <div>
          <p className="font-[poppins] w-[80%] font-[600]">
            Booking a consultation with our experts can help you identify the
            best services for your needs.
          </p>
        </div>
      </div>
      <div className="bg-[#B8A3F8] rounded-2xl px-8 py-8 flex w-[50%] flex-col justify-between p-4`">
        <div className="flex justify-between">
          <h1 className="font-[Duck-cry] lg:text-[60px] leading-none text-[2.3rem]">UNSURE WHICH SERVICE SUITS <br /> YOU?</h1>
          <div className="border flex justify-center items-center rounded-full bg-white h-[50px] min-w-[50px]">
            <ArrowUpRight size={"24px"} />
          </div>
        </div>
        <div>
          <p className="font-[poppins] w-[80%] font-[600]">
            Booking a consultation with our experts can help you identify the
            best services for your needs.
          </p>
        </div>
      </div>
    
      
    </section>
  );
};

export default UnsureServicesSuit;
