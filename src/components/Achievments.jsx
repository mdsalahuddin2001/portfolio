import SectionTitle from './SectionTitle';

const Achievements = () => {
  return (
    <section className="bg-brownWhite py-12">
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
            <p>Course completion certificate</p>
          </div>
          <div>
            <img src="./images/achievements/recom.jpg" alt="certificate" />
            <p>Job recommendation letter for better performance</p>
          </div>
          <div>
            <img src="./images/achievements/exel.jpg" alt="certificate" />
            <p>For a bit of excellent performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
