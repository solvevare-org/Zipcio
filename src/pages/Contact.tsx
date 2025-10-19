import { useState } from "react";
import { Bracket } from "./HeroSection";

// Comprehensive list of countries with their codes and flags
const countries = [
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+51", flag: "🇵🇪", name: "Peru" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+7", flag: "🇰🇿", name: "Kazakhstan" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+48", flag: "🇵🇱", name: "Poland" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+36", flag: "🇭🇺", name: "Hungary" },
  { code: "+40", flag: "🇷🇴", name: "Romania" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+387", flag: "🇧🇦", name: "Bosnia and Herzegovina" },
  { code: "+382", flag: "🇲🇪", name: "Montenegro" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+389", flag: "🇲🇰", name: "North Macedonia" },
  { code: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "+30", flag: "🇬🇷", name: "Greece" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+31", flag: "🇳🇱", name: "Netherlands" },
  { code: "+32", flag: "🇧🇪", name: "Belgium" },
  { code: "+41", flag: "🇨🇭", name: "Switzerland" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+45", flag: "🇩🇰", name: "Denmark" },
  { code: "+46", flag: "🇸🇪", name: "Sweden" },
  { code: "+47", flag: "🇳🇴", name: "Norway" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+44", flag: "🇮🇲", name: "Isle of Man" },
  { code: "+44", flag: "🇯🇪", name: "Jersey" },
  { code: "+44", flag: "🇬🇬", name: "Guernsey" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
  { code: "+90", flag: "🇨🇾", name: "Cyprus" },
  { code: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+970", flag: "🇵🇸", name: "Palestine" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+98", flag: "🇮🇷", name: "Iran" },
  { code: "+93", flag: "🇦🇫", name: "Afghanistan" },
  { code: "+92", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+220", flag: "🇬🇲", name: "Gambia" },
  { code: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "+227", flag: "🇳🇪", name: "Niger" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+235", flag: "🇹🇩", name: "Chad" },
  { code: "+236", flag: "🇨🇫", name: "Central African Republic" },
  { code: "+237", flag: "🇨🇲", name: "Cameroon" },
  { code: "+238", flag: "🇨🇻", name: "Cape Verde" },
  { code: "+239", flag: "🇸🇹", name: "São Tomé and Príncipe" },
  { code: "+240", flag: "🇬🇶", name: "Equatorial Guinea" },
  { code: "+241", flag: "🇬🇦", name: "Gabon" },
  { code: "+242", flag: "🇨🇬", name: "Republic of the Congo" },
  { code: "+243", flag: "🇨🇩", name: "Democratic Republic of the Congo" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+245", flag: "🇬🇼", name: "Guinea-Bissau" },
  { code: "+246", flag: "🇮🇴", name: "British Indian Ocean Territory" },
  { code: "+248", flag: "🇸🇨", name: "Seychelles" },
  { code: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "+250", flag: "🇷🇼", name: "Rwanda" },
  { code: "+251", flag: "🇪🇹", name: "Ethiopia" },
  { code: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "+253", flag: "🇩🇯", name: "Djibouti" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+257", flag: "🇧🇮", name: "Burundi" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "+261", flag: "🇲🇬", name: "Madagascar" },
  { code: "+262", flag: "🇷🇪", name: "Réunion" },
  { code: "+263", flag: "🇿🇼", name: "Zimbabwe" },
  { code: "+264", flag: "🇳🇦", name: "Namibia" },
  { code: "+265", flag: "🇲🇼", name: "Malawi" },
  { code: "+266", flag: "🇱🇸", name: "Lesotho" },
  { code: "+267", flag: "🇧🇼", name: "Botswana" },
  { code: "+268", flag: "🇸🇿", name: "Eswatini" },
  { code: "+269", flag: "🇰🇲", name: "Comoros" },
  { code: "+290", flag: "🇸🇭", name: "Saint Helena" },
  { code: "+291", flag: "🇪🇷", name: "Eritrea" },
  { code: "+297", flag: "🇦🇼", name: "Aruba" },
  { code: "+298", flag: "🇫🇴", name: "Faroe Islands" },
  { code: "+299", flag: "🇬🇱", name: "Greenland" },
  { code: "+350", flag: "🇬🇮", name: "Gibraltar" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+352", flag: "🇱🇺", name: "Luxembourg" },
  { code: "+353", flag: "🇮🇪", name: "Ireland" },
  { code: "+354", flag: "🇮🇸", name: "Iceland" },
  { code: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "+357", flag: "🇨🇾", name: "Cyprus" },
  { code: "+358", flag: "🇫🇮", name: "Finland" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+370", flag: "🇱🇹", name: "Lithuania" },
  { code: "+371", flag: "🇱🇻", name: "Latvia" },
  { code: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "+373", flag: "🇲🇩", name: "Moldova" },
  { code: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "+375", flag: "🇧🇾", name: "Belarus" },
  { code: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "+377", flag: "🇲🇨", name: "Monaco" },
  { code: "+378", flag: "🇸🇲", name: "San Marino" },
  { code: "+380", flag: "🇺🇦", name: "Ukraine" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+382", flag: "🇲🇪", name: "Montenegro" },
  { code: "+383", flag: "🇽🇰", name: "Kosovo" },
  { code: "+385", flag: "🇭🇷", name: "Croatia" },
  { code: "+386", flag: "🇸🇮", name: "Slovenia" },
  { code: "+387", flag: "🇧🇦", name: "Bosnia and Herzegovina" },
  { code: "+389", flag: "🇲🇰", name: "North Macedonia" },
  { code: "+420", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+421", flag: "🇸🇰", name: "Slovakia" },
  { code: "+423", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "+500", flag: "🇫🇰", name: "Falkland Islands" },
  { code: "+501", flag: "🇧🇿", name: "Belize" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+507", flag: "🇵🇦", name: "Panama" },
  { code: "+508", flag: "🇵🇲", name: "Saint Pierre and Miquelon" },
  { code: "+509", flag: "🇭🇹", name: "Haiti" },
  { code: "+590", flag: "🇬🇵", name: "Guadeloupe" },
  { code: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "+592", flag: "🇬🇾", name: "Guyana" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+594", flag: "🇬🇫", name: "French Guiana" },
  { code: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "+596", flag: "🇲🇶", name: "Martinique" },
  { code: "+597", flag: "🇸🇷", name: "Suriname" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "+599", flag: "🇧🇶", name: "Caribbean Netherlands" },
  { code: "+670", flag: "🇹🇱", name: "East Timor" },
  { code: "+672", flag: "🇦🇶", name: "Antarctica" },
  { code: "+673", flag: "🇧🇳", name: "Brunei" },
  { code: "+674", flag: "🇳🇷", name: "Nauru" },
  { code: "+675", flag: "🇵🇬", name: "Papua New Guinea" },
  { code: "+676", flag: "🇹🇴", name: "Tonga" },
  { code: "+677", flag: "🇸🇧", name: "Solomon Islands" },
  { code: "+678", flag: "🇻🇺", name: "Vanuatu" },
  { code: "+679", flag: "🇫🇯", name: "Fiji" },
  { code: "+680", flag: "🇵🇼", name: "Palau" },
  { code: "+681", flag: "🇼🇫", name: "Wallis and Futuna" },
  { code: "+682", flag: "🇨🇰", name: "Cook Islands" },
  { code: "+683", flag: "🇳🇺", name: "Niue" },
  { code: "+684", flag: "🇦🇸", name: "American Samoa" },
  { code: "+685", flag: "🇼🇸", name: "Samoa" },
  { code: "+686", flag: "🇰🇮", name: "Kiribati" },
  { code: "+687", flag: "🇳🇨", name: "New Caledonia" },
  { code: "+688", flag: "🇹🇻", name: "Tuvalu" },
  { code: "+689", flag: "🇵🇫", name: "French Polynesia" },
  { code: "+690", flag: "🇹🇰", name: "Tokelau" },
  { code: "+691", flag: "🇫🇲", name: "Micronesia" },
  { code: "+692", flag: "🇲🇭", name: "Marshall Islands" },
  { code: "+850", flag: "🇰🇵", name: "North Korea" },
  { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+853", flag: "🇲🇴", name: "Macau" },
  { code: "+855", flag: "🇰🇭", name: "Cambodia" },
  { code: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+886", flag: "🇹🇼", name: "Taiwan" },
  { code: "+960", flag: "🇲🇻", name: "Maldives" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+970", flag: "🇵🇸", name: "Palestine" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+975", flag: "🇧🇹", name: "Bhutan" },
  { code: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+992", flag: "🇹🇯", name: "Tajikistan" },
  { code: "+993", flag: "🇹🇲", name: "Turkmenistan" },
  { code: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  { code: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "+996", flag: "🇰🇬", name: "Kyrgyzstan" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistan" },
].sort((a, b) => a.name.localeCompare(b.name));

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    companyName: "",
    websiteUrl: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Contact Form Section */}
      <section
        id="contact"
        className="font-serif py-20 bg-gradient-to-b from-card to-background"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Image */}
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://43675023.fs1.hubspotusercontent-na1.net/hubfs/43675023/hero-girl-1.jpeg"
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-card border bg-[#B8A3F8] border-border rounded-3xl flex flex-col gap-[60px] p-8">
              <h1 className="tracking-[0px] font-[Duck-cry] text-[50px] font-[500]">
                START A PROJECT
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 px-[30px]"
                data-testid="contact-form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background outline-none bg-[#C5B1F9] rounded-full border border-input text-foreground"
                      placeholder="John"
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background outline-none bg-[#C5B1F9] border rounded-full border-input text-foreground"
                      placeholder="Doe"
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3  border border-input rounded-full text-foreground outline-none bg-[#C5B1F9]"
                    placeholder="john@example.com"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-3 py-3 w-[30%] outline-none bg-[#C5B1F9] border border-input rounded-full text-foreground"
                      data-testid="select-country-code"
                    >
                      {countries.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.flag} {country.name} {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 px-4 py-3 outline-none bg-[#C5B1F9] border border-input rounded-full text-foreground"
                      placeholder="(555) 123-4567"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 outline-none bg-[#C5B1F9] border border-input rounded-full text-foreground "
                    placeholder="Acme Inc."
                    data-testid="input-company-name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3  border border-input rounded-full text-foreground outline-none bg-[#C5B1F9]"
                    placeholder="https://example.com"
                    data-testid="input-website-url"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-lg text-foreground outline-none bg-[#C5B1F9]"
                    placeholder="Tell us about your project..."
                    data-testid="textarea-additional-notes"
                  ></textarea>
                </div>

                <div className="w-full flex justify-center items-center">
                  <button
                    type="submit"
                    className=" bg-white font-[poppins] px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    data-testid="button-submit-form"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-[100px] grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left: big title with left bracket */}
            <div className="flex gap-6">
              <div className="hidden lg:block">
                <Bracket side="right" className="w-full h-[200px]" />
              </div>
              <div className="text-[120px] leading-[100px] tracking-[0px]">
                <h2 className="font-[Duck-cry]">
                  SUBSCRIBE <br />
                  TO UPDATES
                </h2>
              </div>
            </div>

            {/* Right: copy + email input */}
            <div className="flex">
              <div className="w-full font-[poppins]">
                <h2 className="text-2xl font-semibold mb-2">
                  Stay informed about our latest offerings and insights.
                </h2>
                <p className="text-sm text-muted mb-6">We respect your privacy and protect your information.</p>

                <div className="relative">
                  <div className="flex bg-white border justify-center items-center border-gray-200 rounded-full shadow-sm overflow-hidden">
                    <input
                      type="email"
                      placeholder="Your email here"
                      className="flex-1 px-6 py-4 text-gray-600 placeholder-gray-400 bg-transparent outline-none"
                    />
                    <button className="ml-4 mr-4 px-6 py-2 rounded-full bg-[#111111] text-white absolute right-0 font-medium">
                      Join us
                    </button>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <Bracket side="left" className="w-full h-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
