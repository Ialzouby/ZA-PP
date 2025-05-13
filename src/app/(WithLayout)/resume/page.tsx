import Image from "next/image";
import Link from "next/link";
import {
  PiEnvelopeSimple,
  PiFilePdf,
  PiGithubLogo,
  PiGlobe,
  PiGraduationCap,
  PiLinkedinLogo,
  PiMapPin,
  PiPhone,
  PiTrophy,
} from "react-icons/pi";
import profile from "@/../public/images/profile.png";
import FadeDown from "@/components/motionEffect/FadeDown";
import Footer from "@/components/Shared/Footer/Footer";

const Resume = () => {
  return (
    <div>
      <section className="pt-120 pb-120 mt-10 mt-lg-0">
        <FadeDown>
          <div className="pb-60 br-bottom-n3">
            <div data-aos="zoom-in" className="page-heading">
              <h3 className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
                Zachariah Ngan – Resume
              </h3>
              <a
                href="/images/Zachariah_Ngan_Professional_Resume_2025.pdf"
                className="w-max p-btn bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
                download
              >
                <PiFilePdf /> Download PDF Version
              </a>
            </div>
          </div>
        </FadeDown>

        <div className="container mt-8 mt-md-15">
          <FadeDown>
            <div className="bgn2-color p-4 p-sm-8 p-md-15 rounded-5 brn4">
              {/* Header */}
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6">
                <div>
                  <h2 className="display-three p1-color fw-semibold">Zachariah Ngan</h2>
                  <span className="n4-color fs-six fw-medium">
                    Nuclear Engineering Researcher | Plasma Simulation | Digital Twins
                  </span>
                </div>
                <div className="ps-5 br-left-n3">
                  <ul className="d-flex flex-column gap-3">
                    <li>
                      <Link href="tel:+14843341551" className="d-flex gap-2 align-items-center n4-color">
                        <PiPhone /> (484) 334-1551
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:kaingan8@berkeley.edu" className="d-flex gap-2 align-items-center n4-color">
                        <PiEnvelopeSimple /> kaingan8@berkeley.edu
                      </Link>
                    </li>
                    <li className="d-flex gap-2 align-items-center n4-color">
                      <PiMapPin /> Berkeley, CA
                    </li>
                  </ul>
                </div>
              </div>

              {/* Profile Section */}
              <div className="d-flex flex-wrap flex-md-nowrap align-items-center gap-5 gap-md-10 pb-4 pb-md-8 br-bottom-n3 pt-60">
                <div className="resume-profile flex-shrink-0">
                  <Image
                    src={profile}
                    alt="profile"
                    className="object-fit-cover"
                    width="127"
                    height="159"
                  />
                </div>
                <p className="n42-color fs-seven">
                  I am a nuclear engineer and AI researcher with a strong background in digital twin modeling, plasma kinetics, radiation effects, and meta-analyses in clinical AI. My research spans from CNT radiation detectors to machine learning optimization of plasma systems, with work published and presented across global institutions and conferences.
                </p>
              </div>

              {/* Experience Section */}
              <div className="resume-section row pt-60 pb-60 br-bottom-n3">
                <div className="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
                  <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                    <div className="title-line2"></div>
                    <h2 className="fs-three p1-color fw-semibold">Experience</h2>
                  </div>

                  {[
                    {
                      title: "Research Assistant – Plasma Modeling",
                      org: "Illinois Plasma Institute (Remote)",
                      date: "Mar 2025 – Present",
                      desc: "Built digital twin models in Python simulating hydrogen, SF6, and NF3 plasmas. Co-authored AVS 2025 submission.",
                    },
                    {
                      title: "Research Assistant – AI Clinical Meta-Analysis",
                      org: "Duke Heart Center (Remote)",
                      date: "Apr 2025 – Present",
                      desc: "Led systematic review of 457 studies, co-authored a manuscript under review by Duke leadership. Focus: mortality and outcome bias.",
                    },
                    {
                      title: "Scientific Researcher",
                      org: "Jadoo Technologies Inc., Berkeley",
                      date: "Jun 2023 – Present",
                      desc: "Modeled and evaluated CNT-based radiation detector systems. Supported Python-based performance analysis.",
                    },
                    {
                      title: "Research Student / Capstone Lead",
                      org: "UC Berkeley",
                      date: "Aug 2022 – Jun 2023",
                      desc: "Simulated irradiation damage using SRIM and MCNP for fusion magnets. Led proposals to LANL and HZDR.",
                    },
                  ].map((job, index) => (
                    <div key={index} className="mb-4 mb-md-6">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="n5-color fs-six fw-medium">{job.title}</span>
                        <span className="n4-color fs-eight">{job.date}</span>
                      </div>
                      <p className="n42-color fs-seven my-2 my-md-5">
                        {job.desc}
                      </p>
                      <span className="n4-color fs-seven">{job.org}</span>
                    </div>
                  ))}
                </div>

                {/* Sidebar */}
                <div className="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
                  <div className="ps-4 ps-xxl-7 br-left-n3 mt-5 mt-md-0">
                    {/* Skills */}
                    <div className="mb-8 mb-md-15">
                      <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                        <div className="title-line2"></div>
                        <h2 className="fs-three p1-color fw-semibold">Skills</h2>
                      </div>
                      <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                        <li className="n4-color fs-seven">Python, MATLAB, Fortran90, C/C++</li>
                        <li className="n4-color fs-seven">MCNP, SRIM, FISPACT-II, VASP</li>
                        <li className="n4-color fs-seven">Linux, Google Colab, PyTorch</li>
                        <li className="n4-color fs-seven">SolidWorks, 3D CAD</li>
                      </ul>
                    </div>

                    {/* Education */}
                    <div className="mb-8 mb-md-15">
                      <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                        <div className="title-line2"></div>
                        <h2 className="fs-three p1-color fw-semibold">Education</h2>
                      </div>
                      <div className="d-flex gap-2 mb-3 mb-md-5">
                        <i className="fs-six p1-color"><PiGraduationCap /></i>
                        <div>
                          <span className="n4-color fs-seven">
                            M.Eng. Nuclear Engineering – UC Berkeley (2022–2023)
                          </span>
                          <br />
                          <span className="n4-color fs-eleven">Fung Excellence Scholar</span>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <i className="fs-six p1-color"><PiGraduationCap /></i>
                        <div>
                          <span className="n4-color fs-seven">
                            B.Eng. Nuclear and Risk Engineering – CityU HK (2018–2022)
                          </span>
                          <br />
                          <span className="n4-color fs-eleven">Dean’s List (Upper Second Class Honours)</span>
                        </div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-8 mb-md-15">
                      <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                        <div className="title-line2"></div>
                        <h2 className="fs-three p1-color fw-semibold">Languages</h2>
                      </div>
                      <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                        <li className="n4-color fs-seven">English (Native)</li>
                        <li className="n4-color fs-seven">Mandarin (Fluent)</li>
                        <li className="n4-color fs-seven">Cantonese (Fluent)</li>
                        <li className="n4-color fs-seven">German (Basic), Arabic (Conversational)</li>
                      </ul>
                    </div>

                    {/* Awards */}
                    <div className="mb-8 mb-md-15">
                      <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                        <div className="title-line2"></div>
                        <h2 className="fs-three p1-color fw-semibold">Awards</h2>
                      </div>
                      <div className="d-flex gap-2 mb-3 mb-md-5">
                        <i className="fs-six p1-color"><PiTrophy /></i>
                        <div>
                          <span className="n4-color fs-seven">Fung Excellence Scholarship – UC Berkeley</span>
                          <span className="n4-color fs-eleven">2022–2023</span>
                        </div>
                      </div>
                      <div className="d-flex gap-2">
                        <i className="fs-six p1-color"><PiTrophy /></i>
                        <div>
                          <span className="n4-color fs-seven">Dean’s List – City University of Hong Kong</span>
                          <span className="n4-color fs-eleven">2018–2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="d-flex flex-wrap gap-2 gap-md-3 gap-md-5 align-items-center justify-content-center mt-4 mt-md-8">
                <Link href="https://linkedin.com/in/zachariahngan" className="d-flex gap-1 align-items-center resume-icon">
                  <div className="social-icon">
                    <i className="p1-color"><PiLinkedinLogo /></i>
                  </div>
                  <span className="fs-eight n4-color">linkedin.com/in/zachariahngan</span>
                </Link>
              </div>
            </div>
          </FadeDown>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Resume;
