import EarthCanvas from "./canvas/Earth";
import { FaGithub, FaTelegram, FaEnvelope, FaPhone } from "react-icons/fa";

const contacts = [
  {
    platform: "GitHub",
    value: "github.com/demlew1",
    link: "https://github.com/demlew1",
    icon: <FaGithub className="text-2xl" />,
  },
  {
    platform: "Telegram",
    value: "@sevsni",
    link: "https://t.me/sevsni",
    icon: <FaTelegram className="text-2xl" />,
  },
  {
    platform: "Email",
    value: "demtse.yibabe@email.com",
    link: "mailto:demtse.yibabe@email.com",
    icon: <FaEnvelope className="text-2xl" />,
  },
  {
    platform: "Phone",
    value: "+251983334785",
    link: "tel:+251983334785",
    icon: <FaPhone className="text-2xl" />,
  },
];
const Contact = () => {
  return (
    <div>
      <h2
        className="text-4xl md:text-5xl font-bold text-center text-zinc-900 mb-12 font-['Poppins'] tracking-tight"
      >
        <span className="inline-block">Contact me</span>

      </h2>
      <div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 font-['Poppins']">

        <div className="flex-[0.75] bg-white p-8 rounded-2xl border border-zinc-100 shadow-[0_5px_30px_-10px_rgba(0,0,0,0.05)]">
          <p className="text-zinc-400 font-medium mb-2 uppercase tracking-wider text-sm">Get in touch</p>
          <h3 className="text-4xl font-bold text-zinc-900 mb-8 font-['Kanit']">

          </h3>

          <div className="space-y-8">
            {contacts.map((contact) => (
              <div
                key={contact.platform}
                className="flex items-center gap-6 group"
              >
                <div className="p-3 rounded-full bg-zinc-50 text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-zinc-400 text-sm font-medium mb-1">{contact.platform}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100">
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default Contact;
