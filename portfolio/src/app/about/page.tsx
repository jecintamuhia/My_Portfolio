
import { 
  FaPaintBrush, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaBrain, 
  FaChartLine, 
  FaTasks 
} from 'react-icons/fa';
import { 
  SiDjango, 
  SiKotlin, 
  SiTensorflow, 
  SiJira, 
  SiFigma 
} from 'react-icons/si';
import { FaPython, FaReact, FaGitAlt } from 'react-icons/fa';

const AboutPage = () => {
  const expertise = [
    { icon: <FaLaptopCode />, title: 'Frontend Dev' },
    { icon: <FaPython />, title: 'Backend Dev' },
    { icon: <FaMobileAlt />, title: 'Mobile Dev' },
    { icon: <FaBrain />, title: 'Machine Learning' },
    { icon: <FaChartLine />, title: 'Data Analysis' },
    { icon: <FaTasks />, title: 'Product Mgmt' },
  ];

  const softwareSkills = [
    <FaReact key="react" />,
    <SiDjango key="django" />,
    <SiKotlin key="kotlin" />,
    <SiTensorflow key="tensorflow" />,
    <FaGitAlt key="git" />,
    <SiJira key="jira" />,
    <SiFigma key="figma" />,
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 lg:py-24">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: IMAGE */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <img 
              src="/jess.jpg" 
              alt="Jecinta N." 
              className="w-80 h-80 rounded-2xl object-cover shadow-2xl border-4 border-slate-800"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <div className="mb-6">
              <h2 className="text-yellow-400 font-bold tracking-widest text-sm mb-2">ABOUT ME</h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-2">Jecinta N.</h1>
            <h3 className="text-xl text-gray-400 mb-8">Software Engineer & Product Innovator</h3>
            <p className="text-gray-300 mb-10 leading-relaxed text-lg">
              More than just fun, gaming sparks creativity and drives new technology. Games have become interactive experiences that solve problems and create impact. My interest lies in exploring this field where creativity meets logical problem-solving. I am particularly inspired by how development integrates art, design, and technology to craft entirely new ways to imagine and reconnect. I am eager to be part of a field defined by possibility, where fresh ideas continue to open new paths and ignite innovation.
            </p>
            <div className="mb-10">
              <h4 className="text-2xl font-bold mb-6">EXPERTISE</h4>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-yellow-400 text-xl">{item.icon}</span>
                    <span className="text-gray-300">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-10">
              <h4 className="text-2xl font-bold mb-6">SOFTWARE SKILLS</h4>
              <div className="flex space-x-6 text-3xl text-gray-400">
                {softwareSkills.map((icon, index) => (
                  <span key={index} className="hover:text-yellow-400 transition-colors cursor-pointer">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-10">
              <h4 className="text-2xl font-bold mb-4">EDUCATION</h4>
              <p className="text-gray-300">
                <span className="font-semibold"> Software Engineering</span> <br />
                <span className="text-gray-500">AkiraChix | 2025 </span>
              </p>
            </div>
            <div>
              <h4 className="text-yellow-400 font-bold tracking-widest text-sm mb-2">LET'S TALK!</h4>
              <a 
                href="mailto:your.email@example.com" 
                className="text-2xl font-semibold hover:text-yellow-400 transition-colors"
              >
                jecintawanjirumuhia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;