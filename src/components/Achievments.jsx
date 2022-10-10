import SectionTitle from './SectionTitle';
import { IoIosCheckmarkCircle } from 'react-icons/io';
const Achievements = () => {
  return (
    <section id="achievement" className="bg-brownWhite py-12">
      <SectionTitle>Achievements</SectionTitle>
      <div className="container">
        <a
          href="https://learnwithsumit.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-900 underline inline-block mb-12"
        >
          Think in a Redux Way - A Professional Redux Course
        </a>
        <div className="space-y-6 lg:flex items-center  justify-center text-center text-green-900 text-xs">
          <div>
            <img src="./images/achievements/cer.jpg" alt="certificate" />
            <p className="mt-2">Course completion certificate</p>
          </div>
          <div>
            <img src="./images/achievements/recom.jpg" alt="certificate" />
            <p className="mt-2">
              Job recommendation letter for better performance
            </p>
          </div>
          <div>
            <img src="./images/achievements/exel.jpg" alt="certificate" />
            <p className="mt-2">For a bit of excellent performance</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
          <a
            href="https://learnwithsumit.com/certificates/verify/LWSCTXN-DKNJ8TGF"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xs bg-primary px-4 py-1 flex items-center justify-center hover:shadow-xl rounded-sm"
          >
            <IoIosCheckmarkCircle className="mr-1 text-lg" />
            Verify
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
