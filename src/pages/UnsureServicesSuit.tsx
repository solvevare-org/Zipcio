// const UnsureServicesSuit = () => {
//   return (
//     <section id="services" className="min-h-[50vh] lg:min-h-[70vh] mt-12 w-full">
//       <div className="bg-[#69D965] rounded-2xl  flex w-full lg:w-[100%] ">
//         <ServicesGrid />
//       </div>
//     </section>
//   );
// };

// export default UnsureServicesSuit;

//   {/* <div className="bg-[#B8A3F8] rounded-2xl px-6 lg:px-8 py-6 lg:py-8 flex w-full lg:w-[50%] flex-col justify-between">
//     <div className="flex justify-between items-start gap-4">
//       <h1 className="font-[Duck-cry] text-[24px] sm:text-[32px] lg:text-[60px] leading-none">UNSURE WHICH SERVICE SUITS <br /> YOU?</h1>
//       <div className="border flex justify-center items-center rounded-full bg-white h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] flex-shrink-0">
//         <ArrowUpRight size={"20px"} className="lg:w-[24px] lg:h-[24px]" />
//       </div>
//     </div>
//     <div className="mt-4 lg:mt-0">
//       <p className="font-[poppins] w-full lg:w-[80%] font-[600] text-sm lg:text-base">
//         Booking a consultation with our experts can help you identify the
//         best services for your needs.
//       </p>
//     </div>
//   </div> */}

// import {  CheckCircle, Info, Minus } from "lucide-react";

// export const ServicesGrid = () => {
//   const features = [
//     { name: "AI Foundation", info: true, basic: true, advanced1: true, advanced2: true },
//     { name: "Single-Entry Data Flow", info: true, basic: true, advanced1: true, advanced2: true },
//     { name: "Client Experience", info: true, basic: true, advanced1: true, advanced2: true },
//     { name: "Smart Automation", info: true, basic: false, advanced1: true, advanced2: true },
//     { name: "From Lead to Close", info: true, basic: false, advanced1: true, advanced2: true },
//     { name: "Analytics & Growth", info: true, basic: false, advanced1: true, advanced2: true },
//     { name: "Pricing", info: true, basic: false, advanced1: false, advanced2: true },
//     { name: "Scalability", info: true, basic: false, advanced1: false, advanced2: true },
//     { name: "White-Labeling", info: true, basic: false, advanced1: false, advanced2: true }
//   ];

//   return (
//     <section className="min-h-screen w-full font-[poppins] py-6 px-4 lg:px-8">
//       <div className="mx-auto">
//         <div className=" rounded-lg overflow-hidden">
//           <div className="px-6 py-5 border-b border-gray-800">
//             <h2 className="text-3xl uppercase tracking-wider">
//               Leading Real Estate CRMs
//             </h2>
//           </div>

//           <div className="no-scrollbar overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b  border-gray-800">
//                   <th className="text-left py-10 px-6 text-sm font-normal "></th>
//                   <th className="text-center py-4 px-6 text-sm font-normal  w-32">
//                     Basic
//                   </th>
//                   <th className="text-center py-4 px-6 text-sm font-normal w-32">
//                     Advanced
//                   </th>
//                   <th className="text-center py-4 px-6 text-sm font-normal w-32">
//                     Advanced
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {features.map((feature, index) => (
//                   <tr
//                     key={index}
//                     className="border-b border-gray-800 last:border-b-0"
//                   >
//                     <td className="py-10 px-6">
//                       <div className="flex items-center gap-2">
//                         <span className="text-sm">{feature.name}</span>
//                         {feature.info && (
//                           <Info size={14} className="text-gray-600" />
//                         )}
//                       </div>
//                     </td>
//                     <td className="py-4 px-6 text-center">
//                       {feature.basic ? (
//                         <div className="flex justify-center">
//                           <CheckCircle size={18} className="text-gray-500" strokeWidth={2} />
//                         </div>
//                       ) : (
//                         <div className="flex justify-center">
//                           <Minus size={18} className="text-gray-700" strokeWidth={2} />
//                         </div>
//                       )}
//                     </td>
//                     <td className="py-4 px-6 text-center">
//                       {feature.advanced1 ? (
//                         <div className="flex justify-center">
//                           <CheckCircle size={18} className="text-gray-500" strokeWidth={2} />
//                         </div>
//                       ) : (
//                         <div className="flex justify-center">
//                           <Minus size={18} className="text-gray-700" strokeWidth={2} />
//                         </div>
//                       )}
//                     </td>
//                     <td className="py-4 px-6 text-center">
//                       {feature.advanced2 ? (
//                         <div className="flex justify-center">
//                           <CheckCircle size={18} className="text-gray-500" strokeWidth={2} />
//                         </div>
//                       ) : (
//                         <div className="flex justify-center">
//                           <Minus size={18} className="text-gray-700" strokeWidth={2} />
//                         </div>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

interface Product {
  name: string;
  headerColor: string;
  columnBgColor: string;
  platforms: string[];
  features: {
    [key: string]: boolean | string | null;
  };
  licensing: string;
  pricing: string;
  discounts: string;
  dotColor?: string;
}

const products: Product[] = [
  {
    name: "NuHelixX RE",
    headerColor: "#0D5A7A",
    columnBgColor: "#E8F1F5",
    platforms: ["Windows", "Mac"],
    features: {
      "Capture Images": true,
      "Edit Images": true,
      "Record Video": true,
      "Video Trimming": true,
      "Edit Video": false,
      "Media Hosting": false,
      Quizzing: false,
      "Import Media with TechSmith Fuse": true,
    },
    licensing: "per user",
    pricing: "$49.95",
    discounts: "commercial, education, government, multi-user",
    dotColor: "#0D5A7A",
  },
  {
    name: "kvCORE",
    headerColor: "#5A9D3D",
    columnBgColor: "#F0F5E8",
    platforms: ["Windows", "Mac"],
    features: {
      "Capture Images": false,
      "Edit Images": false,
      "Record Video": true,
      "Video Trimming": true,
      "Edit Video": true,
      "Media Hosting": false,
      Quizzing: true,
      "Import Media with TechSmith Fuse": true,
    },
    licensing: "per user",
    pricing: "$199",
    discounts: "commercial, education, government, multi-user",
    dotColor: "#5A9D3D",
  },
  {
    name: "BoomTown",
    headerColor: "#2B7A8F",
    columnBgColor: "#E8F3F5",
    platforms: ["Windows"],
    features: {
      "Capture Images": false,
      "Edit Images": false,
      "Record Video": true,
      "Video Trimming": true,
      "Edit Video": true,
      "Media Hosting": false,
      Quizzing: false,
      "Import Media with TechSmith Fuse": false,
    },
    licensing: "per user",
    pricing: "$1,995",
    discounts: "commercial, education, government",
    dotColor: "#2B7A8F",
  },
  {
    name: "	Real Geeks",
    headerColor: "#C41E3A",
    columnBgColor: "#F5E8E8",
    platforms: ["Windows", "Mac"],
    features: {
      "Capture Images": false,
      "Edit Images": false,
      "Record Video": true,
      "Video Trimming": true,
      "Edit Video": false,
      "Media Hosting": true,
      Quizzing: true,
      "Import Media with TechSmith Fuse": true,
    },
    licensing: "per user, based on minimum FTE",
    pricing: "contact us for a custom quote",
    discounts: "commercial, education",
    dotColor: "#C41E3A",
  },
];

const featureRows = [
  "Platforms",
  "Capture Images",
  "Edit Images",
  "Record Video",
  "Video Trimming",
  "Edit Video",
  "Media Hosting",
  "Quizzing",
  "Import Media with TechSmith Fuse",
  "Licensing",
  "Pricing",
  "Discounts",
];

export default function UnsureServicesSuit() {
  return (
    <div className="overflow-x-auto rounded-lg">
      <div className="text-center font-[Duck-cry] mt-[150px]">
        <h1 className="text-[3rem] tracking-[0.02em] mb-3">
          Head to Head Comparison 
        </h1>
        <p className="text-[3rem] tracking-[0.02em]">
          NuHelixX RE vs. Leading Real Estate CRMs
        </p>
      </div>
      <table className="w-full border-collapse mt-[50px] font-[poppins]">
        <thead>
          <tr>
            <th className="w-1/5 bg- border border-gray-200 p-4 text-left font-semibold text-sm">Feature / Benefit</th>
            {products.map((product) => (
              <th
                key={product.name}
                className="w-1/5 bg-transparent border border-gray-200 p-4 text-center font-bold text-white text-sm"
                style={{ backgroundColor: product.headerColor }}
              >
                {product.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Platforms Row */}
          <tr>
            <td className="bg-transparent border border-gray-200 p-4 font-semibold text-sm text-gray-900">
              Platforms
            </td>
            {products.map((product) => (
              <td
                key={`${product.name}-platforms`}
                className="border border-gray-200 p-4 text-center"
                style={{ backgroundColor: product.columnBgColor }}
              >
                <div className="flex justify-center gap-2">
                  {product.platforms.includes("Windows") && (
                    <span className="text-lg">⊞</span>
                  )}
                  {product.platforms.includes("Mac") && (
                    <span className="text-lg">🍎</span>
                  )}
                </div>
              </td>
            ))}
          </tr>

          {/* Feature Rows */}
          {featureRows.slice(1, -3).map((feature) => (
            <tr key={feature}>
              <td className="bg-transparent border border-gray-200 p-4 font-semibold text-sm text-gray-900">
                {feature}
              </td>
              {products.map((product) => {
                const hasFeature = product.features[feature];
                return (
                  <td
                    key={`${product.name}-${feature}`}
                    className="border border-gray-200 p-4 text-center"
                    style={{ backgroundColor: product.columnBgColor }}
                  >
                    {hasFeature && (
                      <div className="flex justify-center">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: product.dotColor }}
                        ></div>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}

          {/* Licensing Row */}
          <tr>
            <td className="bg-transparent border border-gray-200 p-4 font-semibold text-sm text-gray-900">
              Licensing
            </td>
            {products.map((product) => (
              <td
                key={`${product.name}-licensing`}
                className="border border-gray-200 p-4 text-center text-sm"
                style={{ backgroundColor: product.columnBgColor }}
              >
                <span
                  className="font-medium"
                  style={{
                    color:
                      product.name === "TECHSMITH RELAY"
                        ? "#C41E3A"
                        : product.headerColor,
                  }}
                >
                  {product.licensing}
                </span>
              </td>
            ))}
          </tr>

          {/* Pricing Row */}
          <tr>
            <td className="bg-transparent border border-gray-200 p-4 font-semibold text-sm text-gray-900">
              Pricing
            </td>
            {products.map((product) => (
              <td
                key={`${product.name}-pricing`}
                className="border border-gray-200 p-4 text-center text-sm font-semibold"
                style={{ backgroundColor: product.columnBgColor }}
              >
                <span
                  style={{
                    color:
                      product.name === "TECHSMITH RELAY"
                        ? "#C41E3A"
                        : product.headerColor,
                  }}
                >
                  {product.pricing}
                </span>
              </td>
            ))}
          </tr>

          {/* Discounts Row */}
          <tr>
            <td className="bg-transparent border border-gray-200 p-4 font-semibold text-sm text-gray-900">
              Discounts
            </td>
            {products.map((product) => (
              <td
                key={`${product.name}-discounts`}
                className="border border-gray-200 p-4 text-center text-xs"
                style={{ backgroundColor: product.columnBgColor }}
              >
                <span
                  style={{
                    color:
                      product.name === "TECHSMITH RELAY"
                        ? "#C41E3A"
                        : product.headerColor,
                  }}
                >
                  {product.discounts}
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
