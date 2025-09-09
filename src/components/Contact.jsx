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
    <div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 font-['Rubik']">
      <div className="flex-[0.75] bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg">
        <p className="text-yellow-400 font-medium mb-2">Get in touch</p>
        <h3 className="text-3xl font-bold text-white mb-6 font-['Kanit']">
          Contact Me
        </h3>

        <div className="space-y-6">
          {contacts.map((contact) => (
            <div
              key={contact.platform}
              className="flex items-center gap-4 hover:bg-zinc-800/50 p-3 rounded-lg transition-colors"
            >
              <span className="text-yellow-400">{contact.icon}</span>
              <div>
                <p className="text-zinc-300 font-medium">{contact.platform}</p>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors flex items-center gap-1"
                >
                  {contact.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
