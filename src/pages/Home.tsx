import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Download, ArrowRight, Languages } from "lucide-react";

type Lang = "id" | "en";

const BRAND_LOGOS = [
  { name: "iVMS-4200", src: "/logos/ivms4200.png" },
  { name: "Milestone", src: "/logos/milestone.png" },
  { name: "NX Witness", src: "/logos/nx.png" },
  { name: "WIN-PAK", src: "/logos/winpak.png" },
];

const ALL_BRAND_LOGOS = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

function LogoMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const SPEED = 0.4;
  const TOTAL_WIDTH_APPROX = BRAND_LOGOS.length * 260;

  useAnimationFrame(() => {
    if (!ref.current) return;
    xRef.current -= SPEED;
    if (xRef.current <= -TOTAL_WIDTH_APPROX) {
      xRef.current = 0;
    }
    ref.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div
      className="overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1E1A16 0%, #221D18 100%)",
        borderTop: "1px solid rgba(200,169,126,0.25)",
        borderBottom: "1px solid rgba(200,169,126,0.25)",
      }}
    >
      <div
        className="flex items-center py-8"
        style={{ width: "max-content" }}
        ref={ref}
      >
        {ALL_BRAND_LOGOS.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{ minWidth: 240, padding: "0 28px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 140,
                height: 80,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(200,169,126,0.18)",
                borderRadius: 10,
                padding: "10px 18px",
                backdropFilter: "blur(6px)",
              }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  maxHeight: 56,
                  maxWidth: 110,
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 8px rgba(0,0,0,0.4))",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpinningBadge() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      className="w-36 h-36"
      style={{ display: "block" }}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <path
            id="badgePath"
            d="M 60, 60 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
            fill="none"
          />
        </defs>
        <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(200,169,126,0.3)" strokeWidth="1" />
        <text
          style={{
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          }}
          fill="#C8A97E"
        >
          <textPath href="#badgePath" startOffset="0%">
            Supervisor • Security System •{" "}
          </textPath>
        </text>
        <circle cx="60" cy="60" r="5" fill="#C8A97E" />
      </svg>
    </motion.div>
  );
}

const SERVICES = [
  {
    num: "01",
    title: { id: "Implementasi Security System", en: "Security System Implementation" },
    description: {
      id: "Instalasi, konfigurasi, dan perawatan sistem CCTV, termasuk setup DVR/NVR, penentuan posisi kamera, Access Control, VMS (Video Management System) dll, serta troubleshooting untuk memastikan sistem keamanan berjalan optimal.",
      en: "Installation, configuration, and maintenance of CCTV systems, including DVR/NVR setup, camera positioning, Access Control, VMS (Video Management System), and troubleshooting to ensure security systems run optimally.",
    },
  },
  {
    num: "02",
    title: { id: "Konfigurasi Jaringan & Perangkat", en: "Network & Device Configuration" },
    description: {
      id: "Konfigurasi jaringan dasar, pengaturan IP Address, konektivitas perangkat, serta analisa dan perbaikan gangguan jaringan.",
      en: "Basic network configuration, IP Address setup, device connectivity, and analysis and troubleshooting of network issues.",
    },
  },
  {
    num: "03",
    title: { id: "Dukungan Teknis & Troubleshooting", en: "Technical Support & Troubleshooting" },
    description: {
      id: "Dukungan teknis untuk hardware dan software, instalasi sistem, printer, telepon, serta penyelesaian masalah untuk memastikan operasional berjalan lancar.",
      en: "Technical support for hardware and software, system installation, printers, telephony, and issue resolution to ensure smooth operations.",
    },
  },
  {
    num: "04",
    title: { id: "Preventive Maintenance & Monitoring", en: "Preventive Maintenance & Monitoring" },
    description: {
      id: "Pemeriksaan rutin, perawatan preventif, dan memastikan seluruh perangkat bekerja dengan stabil dan minim gangguan.",
      en: "Routine inspections, preventive maintenance, and ensuring all devices operate stably with minimal disruptions.",
    },
  },
];

const EXPERIENCES = [
  {
    num: "01",
    title: { id: "Supervisor Security System", en: "Security System Supervisor" },
    company: "Putradabo Perkasa",
    period: { id: "1 Januari 2022 – Sekarang", en: "January 1, 2022 – Present" },
    current: true,
    description: {
      id: "Mengawasi operasional, instalasi, dan pemeliharaan sistem keamanan terintegrasi, termasuk ACS, CCTV, Video Management System, server, serta perangkat pendukung lainnya untuk memastikan sistem berjalan stabil, aman, dan sesuai standar.",
      en: "Supervising operations, installation, and maintenance of integrated security systems, including ACS, CCTV, Video Management System, servers, and other supporting devices to ensure stable, secure, and standards-compliant operations.",
    },
    tasks: {
      id: [
        "Mengkoordinasikan tim teknisi dalam instalasi dan maintenance sistem (ACS, CCTV, VMS, Barrier Gate, Flap Barrier, dll)",
        "Mengawasi implementasi sistem keamanan sesuai standar dan kebutuhan site",
        "Melakukan pengecekan dan validasi konfigurasi perangkat (Server, NVR, Switch, VMS)",
        "Mengelola dan memastikan integrasi antar sistem (CCTV, ACS, Visitor Management, Patrol System) berjalan dengan baik",
        "Monitoring performa sistem dan memastikan seluruh perangkat dalam kondisi optimal",
        "Berkoordinasi dengan vendor, client, dan internal terkait kebutuhan dan kendala sistem",
        "Melakukan dokumentasi teknis dan pelaporan pekerjaan",
        "Pembuatan dokumen pendukung seperti material approval, timeline activities kurva S, shopdrawing, topology, as built drawing, SLD",
        "Melakukan survey dan menentukan kebutuhan client",
      ],
      en: [
        "Coordinating technician teams for installation and maintenance of systems (ACS, CCTV, VMS, Barrier Gate, Flap Barrier, etc.)",
        "Supervising security system implementation according to standards and site requirements",
        "Checking and validating device configurations (Server, NVR, Switch, VMS)",
        "Managing and ensuring integration between systems (CCTV, ACS, Visitor Management, Patrol System) runs smoothly",
        "Monitoring system performance and ensuring all devices are in optimal condition",
        "Coordinating with vendors, clients, and internal teams regarding system needs and issues",
        "Performing technical documentation and work reporting",
        "Preparing supporting documents such as material approval, S-curve timeline activities, shop drawings, topology, as-built drawing, SLD",
        "Conducting site surveys and defining client requirements",
      ],
    },
    results: {
      id: [
        "Meningkatkan stabilitas dan keandalan sistem keamanan di berbagai lokasi",
        "Meminimalkan downtime melalui koordinasi dan maintenance yang terjadwal",
        "Memastikan integrasi sistem berjalan optimal dan sesuai standar operasional",
      ],
      en: [
        "Improved stability and reliability of security systems across multiple locations",
        "Minimized downtime through coordinated and scheduled maintenance",
        "Ensured optimal system integration aligned with operational standards",
      ],
    },
  },
  {
    num: "02",
    title: { id: "Teknisi Security System", en: "Security System Technician" },
    company: "Putradabo Perkasa",
    period: { id: "12 April 2021 – 31 Desember 2021", en: "April 12, 2021 – December 31, 2021" },
    current: false,
    description: {
      id: "Menangani instalasi, konfigurasi, serta pemeliharaan sistem keamanan terintegrasi meliputi Access Control System (ACS), CCTV, Video Management System (VMS), serta perangkat pendukung untuk memastikan sistem berjalan optimal dan stabil.",
      en: "Handling installation, configuration, and maintenance of integrated security systems including Access Control System (ACS), CCTV, Video Management System (VMS), and supporting devices to ensure optimal and stable operations.",
    },
    tasks: {
      id: [
        "Instalasi dan konfigurasi perangkat CCTV, ACS, NVR, serta sistem pendukung lainnya",
        "Setup dan konfigurasi Video Management System (VMS) dan integrasi antar sistem",
        "Penarikan dan penataan kabel (UTP / fiber / power) sesuai standar instalasi",
        "Konfigurasi jaringan dasar (IP Address, koneksi switch, dan perangkat terkait)",
        "Troubleshooting perangkat dan sistem (kamera, NVR, server, jaringan)",
        "Melakukan preventive maintenance (pengecekan rutin, pembersihan, update sistem)",
        "Melakukan corrective maintenance (perbaikan atau penggantian perangkat bermasalah)",
        "Instalasi dan konfigurasi perangkat akses seperti Flap Barrier, Barrier Gate, dan Visitor Management System",
        "Monitoring performa sistem dan memastikan seluruh perangkat dalam kondisi normal",
        "Dokumentasi instalasi, konfigurasi, serta pelaporan pekerjaan",
      ],
      en: [
        "Installing and configuring CCTV, ACS, NVR, and other supporting system devices",
        "Setting up and configuring Video Management System (VMS) and inter-system integration",
        "Routing and arranging cables (UTP / fiber / power) according to installation standards",
        "Basic network configuration (IP Address, switch connections, related devices)",
        "Troubleshooting devices and systems (cameras, NVR, server, network)",
        "Performing preventive maintenance (routine checks, cleaning, system updates)",
        "Performing corrective maintenance (repairing or replacing faulty devices)",
        "Installing and configuring access devices such as Flap Barrier, Barrier Gate, and Visitor Management System",
        "Monitoring system performance and ensuring all devices are in normal condition",
        "Documenting installation, configuration, and work reporting",
      ],
    },
    results: {
      id: [
        "Menjaga stabilitas dan performa sistem keamanan di berbagai lokasi",
        "Mengurangi downtime melalui penanganan masalah yang cepat dan tepat",
        "Memastikan seluruh sistem keamanan berjalan sesuai standar operasional",
      ],
      en: [
        "Maintained stability and performance of security systems across multiple locations",
        "Reduced downtime through fast and accurate issue resolution",
        "Ensured all security systems operated according to operational standards",
      ],
    },
  },
  {
    num: "03",
    title: { id: "IT Support", en: "IT Support" },
    company: "Super Teknik",
    period: { id: "15 Juli 2019 – 22 Oktober 2021", en: "July 15, 2019 – October 22, 2021" },
    current: false,
    description: {
      id: "Menangani dukungan teknis harian untuk memastikan seluruh sistem, perangkat, dan pengguna dapat beroperasi dengan lancar, stabil, dan efisien.",
      en: "Handling daily technical support to ensure all systems, devices, and users can operate smoothly, stably, and efficiently.",
    },
    tasks: {
      id: [
        "Instalasi dan konfigurasi sistem operasi serta software pendukung",
        "Troubleshooting hardware, software, dan jaringan",
        "Setup dan konfigurasi perangkat (PC, laptop, printer, dan perangkat lainnya)",
        "Memberikan dukungan teknis kepada pengguna (on-site dan remote)",
        "Konfigurasi jaringan dasar (IP Address, koneksi LAN/WiFi)",
        "Melakukan maintenance dan update sistem secara berkala",
        "Dokumentasi konfigurasi dan pelaporan pekerjaan",
      ],
      en: [
        "Installing and configuring operating systems and supporting software",
        "Troubleshooting hardware, software, and network",
        "Setting up and configuring devices (PC, laptop, printer, and other equipment)",
        "Providing technical support to users (on-site and remote)",
        "Basic network configuration (IP Address, LAN/WiFi connections)",
        "Performing periodic system maintenance and updates",
        "Documenting configurations and work reporting",
      ],
    },
    results: {
      id: [
        "Menjaga stabilitas dan performa sistem untuk operasional harian",
        "Mengurangi downtime pengguna melalui penanganan masalah yang cepat dan efektif",
        "Meningkatkan efisiensi kerja melalui dukungan teknis yang responsif",
      ],
      en: [
        "Maintained system stability and performance for daily operations",
        "Reduced user downtime through fast and effective issue resolution",
        "Improved work efficiency through responsive technical support",
      ],
    },
  },
];

const CERTIFICATES = [
  {
    brand: "HIKVISION",
    brandColor: "#E60012",
    code: "CGSA – CCTV",
    fullName: { id: "Certified General Security Associate", en: "Certified General Security Associate" },
    validity: { id: "Berlaku sampai Agustus 2029", en: "Valid until August 2029" },
    description: {
      id: "Sertifikat dasar terkait sistem keamanan berbasis CCTV.",
      en: "Foundational certificate covering CCTV-based security systems.",
    },
    focus: {
      id: [
        "Konsep dasar CCTV",
        "Instalasi dan konfigurasi kamera",
        "Monitoring & recording system",
        "Troubleshooting dasar",
      ],
      en: [
        "CCTV fundamentals",
        "Camera installation and configuration",
        "Monitoring & recording system",
        "Basic troubleshooting",
      ],
    },
    href: "/certificates/cgsacctv.pdf",
  },
  {
    brand: "HIKVISION",
    brandColor: "#E60012",
    code: "HCSA – HIPC",
    fullName: {
      id: "Hikvision Certified Security Associate – Hikvision IP Camera",
      en: "Hikvision Certified Security Associate – Hikvision IP Camera",
    },
    validity: { id: "Berlaku sampai November 2027", en: "Valid until November 2027" },
    description: {
      id: "Sertifikat khusus kamera IP dari Hikvision.",
      en: "Specialized certificate for Hikvision IP Cameras.",
    },
    focus: {
      id: [
        "Konfigurasi IP Camera",
        "Setup jaringan pada CCTV",
        "Basic video streaming & encoding",
        "Integrasi kamera ke system",
      ],
      en: [
        "IP Camera configuration",
        "CCTV network setup",
        "Basic video streaming & encoding",
        "Camera-to-system integration",
      ],
    },
    href: "/certificates/hcsahipc.pdf",
  },
  {
    brand: "HIKVISION",
    brandColor: "#E60012",
    code: "HCSA – HNET",
    fullName: { id: "Hikvision Network", en: "Hikvision Network" },
    validity: { id: "Berlaku sampai November 2027", en: "Valid until November 2027" },
    description: {
      id: "Sertifikat jaringan untuk sistem Hikvision.",
      en: "Networking certificate for Hikvision systems.",
    },
    focus: {
      id: [
        "IP addressing & subnetting",
        "Network topology",
        "Switch & routing basic",
        "Troubleshooting jaringan",
      ],
      en: [
        "IP addressing & subnetting",
        "Network topology",
        "Basic switch & routing",
        "Network troubleshooting",
      ],
    },
    href: "/certificates/hcsahnet.pdf",
  },
  {
    brand: "HIKVISION",
    brandColor: "#E60012",
    code: "HCSA – HACE",
    fullName: { id: "Hikvision Access Control", en: "Hikvision Access Control" },
    validity: { id: "Berlaku sampai November 2027", en: "Valid until November 2027" },
    description: {
      id: "Sertifikasi sistem Access Control.",
      en: "Access Control system certification.",
    },
    focus: {
      id: [
        "Door access system (card, fingerprint, dll)",
        "Integrasi dengan CCTV",
        "User management",
        "Security control system",
      ],
      en: [
        "Door access system (card, fingerprint, etc.)",
        "Integration with CCTV",
        "User management",
        "Security control system",
      ],
    },
    href: "/certificates/hcsahace.pdf",
  },
  {
    brand: "DAHUA",
    brandColor: "#E50019",
    code: "DHCA – DOLYNK",
    fullName: { id: "Dahua Certification", en: "Dahua Certification" },
    validity: { id: "Berlaku sampai Oktober 2027", en: "Valid until October 2027" },
    description: {
      id: "Sertifikasi dari Dahua Technology untuk platform Dolynk.",
      en: "Certification from Dahua Technology for the Dolynk platform.",
    },
    focus: {
      id: [
        "Cloud CCTV (Dolynk platform)",
        "Remote monitoring",
        "Device integration",
        "Mobile & remote access system",
      ],
      en: [
        "Cloud CCTV (Dolynk platform)",
        "Remote monitoring",
        "Device integration",
        "Mobile & remote access system",
      ],
    },
    href: "/certificates/dhcadolynk.pdf",
  },
  {
    brand: "NX WITNESS",
    brandColor: "#00A8E1",
    code: "NX Witness",
    fullName: { id: "Network Optix VMS", en: "Network Optix VMS" },
    validity: { id: "Diterbitkan Juli 2025", en: "Issued July 2025" },
    description: {
      id: "Sertifikasi Video Management System (VMS) dari Network Optix.",
      en: "Video Management System (VMS) certification from Network Optix.",
    },
    focus: {
      id: [
        "Video Management System (VMS)",
        "Server & client setup",
        "Video analytics",
        "Multi-site monitoring",
        "Advanced system integration",
      ],
      en: [
        "Video Management System (VMS)",
        "Server & client setup",
        "Video analytics",
        "Multi-site monitoring",
        "Advanced system integration",
      ],
    },
    href: "/certificates/nxwitnessvms.pdf",
  },
];

const UI = {
  nav: {
    about: { id: "Tentang Saya", en: "About Me" },
    services: { id: "Layanan", en: "Services" },
    portfolio: { id: "Portofolio", en: "Portfolio" },
    contact: { id: "Kontak", en: "Contact" },
  },
  hero: {
    greeting: { id: "Hai", en: "Hi" },
    role: {
      id: "IT Support & Security System Technician",
      en: "IT Support & Security System Technician",
    },
    bio: {
      id: "Berpengalaman sebagai IT Support dan teknisi security system dengan total pengalaman lebih dari 5 tahun. Memiliki keahlian dalam instalasi perangkat, konfigurasi sistem, troubleshooting, serta memastikan integrasi sistem keamanan berjalan dengan baik di lingkungan operasional.",
      en: "Experienced as IT Support and security system technician with over 5 years of total experience. Skilled in device installation, system configuration, troubleshooting, and ensuring security system integration runs smoothly in operational environments.",
    },
    letsTalk: { id: "Mari Bicara", en: "Let's Talk" },
    downloadCv: { id: "Unduh CV", en: "Download CV" },
  },
  about: {
    label: { id: "BIOGRAFI", en: "BIOGRAPHY" },
    headlineLine1: {
      id: "Memecahkan masalah dunia nyata,",
      en: "Solving real-world problems,",
    },
    headlineLine2: { id: "melalui teknologi.", en: "through technology." },
    p1: {
      id: "Perjalanan karier saya dimulai sebagai IT Support, di mana saya membangun fondasi dalam troubleshooting dan dukungan teknis kepada pengguna. Dalam lebih dari 4 tahun terakhir, saya berkembang sebagai teknisi sistem keamanan yang menangani instalasi dan pemeliharaan CCTV serta perangkat jaringan secara langsung di lapangan.",
      en: "My career journey began as IT Support, where I built a foundation in troubleshooting and providing technical support to users. Over the past 4+ years, I have grown into a security system technician handling installation and maintenance of CCTV and network devices directly in the field.",
    },
    p2: {
      id: "Saya menikmati proses memecahkan masalah teknis dalam kondisi nyata, mulai dari analisa gangguan hingga memastikan sistem berjalan dengan stabil dan dapat diandalkan. Bagi saya, teknologi bukan hanya tentang perangkat, tetapi tentang menciptakan solusi yang benar-benar berguna.",
      en: "I enjoy the process of solving technical problems in real-world conditions — from analyzing faults to ensuring systems run stably and reliably. For me, technology is not just about devices, but about creating solutions that are genuinely useful.",
    },
    p3: {
      id: "Saat ini, saya juga mulai mengembangkan kemampuan di bidang jaringan dan keamanan sistem untuk meningkatkan kompetensi ke level berikutnya.",
      en: "I am currently also developing my skills in networking and system security to elevate my competence to the next level.",
    },
  },
  services: {
    heading: { id: "Keahlian", en: "Expertise" },
  },
  experience: {
    heading: { id: "Pengalaman Kerja", en: "Work Experience" },
    label: { id: "PENGALAMAN", en: "EXPERIENCE" },
    now: { id: "Sekarang", en: "Now" },
    mainTasks: { id: "Pekerjaan Utama", en: "Main Tasks" },
    results: { id: "Hasil", en: "Results" },
  },
  certificates: {
    label: { id: "SERTIFIKAT", en: "CERTIFICATES" },
    headline1: { id: "Sertifikat &", en: "Certificates &" },
    headline2: { id: "kompetensi.", en: "competencies." },
    focus: { id: "Fokus", en: "Focus" },
    download: { id: "Unduh Sertifikat", en: "Download Certificate" },
  },
  contact: {
    label: { id: "HUBUNGI", en: "GET IN TOUCH" },
    headlineLine1: { id: "Mari bekerja sama", en: "Let's work together" },
    headlineLine2: { id: "menciptakan sesuatu yang luar biasa.", en: "to create something extraordinary." },
    contactMe: { id: "HUBUNGI SAYA", en: "CONTACT ME" },
    sendEmail: { id: "KIRIM EMAIL", en: "SEND EMAIL" },
  },
  language: {
    label: { id: "Bahasa", en: "Language" },
  },
};

const WHATSAPP_NUMBER = "628132285386";
const EMAIL_ADDRESS = "ignatiuskevinwidian@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/ignatius-kevin-widian-992721401?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const TIKTOK_URL = "https://www.tiktok.com/@xevinnn24?_r=1&_t=ZS-95nReZN4Vfw";
const INSTAGRAM_URL =
  "https://www.instagram.com/vancaels?igsh=MWMzM25jYjlvbXV5YQ==";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const GMAIL_WEB_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;
const MAILTO_URL = `mailto:${EMAIL_ADDRESS}`;

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
}

function LanguageToggle({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (l: Lang) => void;
}) {
  return (
    <div
      className="fixed z-50 flex items-center"
      style={{
        right: 24,
        bottom: 24,
        background: "rgba(26,22,20,0.85)",
        border: "1px solid rgba(200,169,126,0.35)",
        borderRadius: 999,
        padding: "6px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.45), 0 0 0 1px rgba(200,169,126,0.05)",
      }}
      data-testid="language-toggle"
    >
      <Languages
        size={14}
        style={{
          color: "#C8A97E",
          marginLeft: 8,
          marginRight: 6,
        }}
      />
      <button
        onClick={() => onChange("id")}
        data-testid="lang-id"
        style={{
          padding: "6px 14px",
          borderRadius: 999,
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          background: lang === "id" ? "#C8A97E" : "transparent",
          color: lang === "id" ? "#1A1614" : "rgba(255,255,255,0.7)",
          border: "none",
          cursor: "pointer",
          transition: "all 0.25s ease",
        }}
      >
        ID
      </button>
      <button
        onClick={() => onChange("en")}
        data-testid="lang-en"
        style={{
          padding: "6px 14px",
          borderRadius: 999,
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          background: lang === "en" ? "#C8A97E" : "transparent",
          color: lang === "en" ? "#1A1614" : "rgba(255,255,255,0.7)",
          border: "none",
          cursor: "pointer",
          transition: "all 0.25s ease",
        }}
      >
        EN
      </button>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "id";
    const saved = window.localStorage.getItem("portfolio-lang");
    return saved === "en" || saved === "id" ? saved : "id";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio-lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = <K extends keyof typeof UI>(group: K, key: keyof (typeof UI)[K]) => {
    const node = UI[group][key] as { id: string; en: string };
    return node[lang];
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobileDevice()) {
      e.preventDefault();
      window.open(GMAIL_WEB_COMPOSE, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "#1A1614", fontFamily: "'Inter', sans-serif" }}
    >
      {/* ───────── NAVBAR ───────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5"
        style={{ background: "transparent" }}
      >
        <div
          className="flex gap-8 text-sm font-medium"
          style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em" }}
        >
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-white transition-colors"
            data-testid="nav-about"
          >
            {t("nav", "about")}
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="hover:text-white transition-colors"
            data-testid="nav-services"
          >
            {t("nav", "services")}
          </button>
        </div>

        <div
          className="text-2xl italic font-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "white",
            letterSpacing: "0.02em",
          }}
        >
          Kevin&nbsp;
          <sup style={{ fontSize: "0.55em", verticalAlign: "super" }}>®</sup>
        </div>

        <div
          className="flex gap-8 text-sm font-medium"
          style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em" }}
        >
          <button
            onClick={() => scrollTo("portfolio")}
            className="hover:text-white transition-colors"
            data-testid="nav-portfolio"
          >
            {t("nav", "portfolio")}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-white transition-colors"
            data-testid="nav-contact"
          >
            {t("nav", "contact")}
          </button>
        </div>
      </nav>

      {/* ───────── HERO ───────── */}
      <section
        className="relative"
        style={{ minHeight: "100dvh", paddingTop: 0, overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "36%",
            background: "#C8A97E",
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          <motion.img
            src="/hero-portrait.png"
            alt="Ignatius Kevin Widian"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
            data-testid="img-hero-portrait"
          />
        </div>

        <div
          className="absolute flex flex-col justify-center px-10 lg:px-16"
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            width: "32%",
            zIndex: 10,
            paddingTop: "6rem",
            paddingBottom: "4rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-black leading-none mb-4"
              style={{
                fontSize: "clamp(4rem, 8vw, 8rem)",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.03em",
                color: "white",
              }}
            >
              {t("hero", "greeting")}
              <span style={{ color: "#C8A97E" }}>.</span>
            </h1>

            <div className="flex items-center gap-3 mb-3" style={{ color: "#C8A97E" }}>
              <div style={{ width: 32, height: 2, background: "#C8A97E", flexShrink: 0 }} />
              <p
                className="italic"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.4rem)",
                  fontWeight: 600,
                }}
              >
                Ignatius Kevin Widian
              </p>
            </div>

            <p
              className="mb-10"
              style={{
                fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
                color: "rgba(255,255,255,0.65)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {t("hero", "role")}
            </p>

            <a
              href="/kevin-widian-cv.pdf"
              download="kevin-widian-cv.pdf"
              data-testid="btn-download-cv"
              className="inline-flex items-center gap-3 font-semibold transition-all"
              style={{
                background: "#C8A97E",
                color: "#1A1614",
                padding: "0.85rem 1.8rem",
                borderRadius: "6px",
                fontSize: "0.875rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
                width: "fit-content",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#b8956b";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#C8A97E";
              }}
            >
              <Download size={16} />
              {t("hero", "downloadCv")}
            </a>
          </motion.div>
        </div>

        <div
          className="absolute flex flex-col px-10 lg:px-16"
          style={{
            top: 0,
            bottom: 0,
            right: 0,
            width: "32%",
            zIndex: 10,
            paddingTop: "6rem",
            paddingBottom: "3rem",
            justifyContent: "space-between",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{ maxWidth: 380 }}
          >
            <p
              className="leading-relaxed mb-8"
              style={{
                fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
              }}
            >
              {t("hero", "bio")}
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-3 group"
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1.05rem",
                fontWeight: 600,
                cursor: "pointer",
                padding: 0,
                letterSpacing: "0.02em",
              }}
              data-testid="btn-lets-talk"
            >
              {t("hero", "letsTalk")}
              <span
                className="flex items-center justify-center rounded-full transition-all group-hover:bg-opacity-90"
                style={{
                  background: "#C8A97E",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                }}
              >
                <ArrowRight size={16} color="#1A1614" />
              </span>
            </button>
          </motion.div>

          <div className="flex justify-center">
            <SpinningBadge />
          </div>
        </div>
      </section>

      {/* ───────── LOGO MARQUEE ───────── */}
      <LogoMarquee />

      {/* ───────── BIOGRAPHY / ABOUT ───────── */}
      <section id="about" className="py-28 px-10 lg:px-20">
        <div
          className="text-center text-xs font-semibold tracking-widest mb-20"
          style={{
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {t("about", "label")}
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2
              className="leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "white",
              }}
            >
              {t("about", "headlineLine1")}
              <br />
              <span style={{ color: "#C8A97E" }}>{t("about", "headlineLine2")}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:w-1/2 space-y-6"
            style={{
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.85,
              fontSize: "0.95rem",
            }}
          >
            <p>{t("about", "p1")}</p>
            <p>{t("about", "p2")}</p>
            <p>{t("about", "p3")}</p>
          </motion.div>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section
        id="services"
        className="py-24 px-10 lg:px-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "white",
              }}
            >
              {t("services", "heading")}
            </h2>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 cursor-default transition-all"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                data-testid={`service-${service.num}`}
              >
                <span
                  className="font-light"
                  style={{
                    fontSize: "0.8rem",
                    color: "#C8A97E",
                    letterSpacing: "0.1em",
                    minWidth: 28,
                    fontFamily: "monospace",
                  }}
                >
                  {service.num}
                </span>
                <h3
                  className="flex-1 font-semibold transition-colors group-hover:text-opacity-90"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                    color: "white",
                    minWidth: 200,
                  }}
                >
                  {service.title[lang]}
                </h3>
                <p
                  className="flex-1"
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.75,
                    maxWidth: 420,
                  }}
                >
                  {service.description[lang]}
                </p>
                <ArrowRight
                  size={18}
                  style={{ color: "#C8A97E", opacity: 0, transition: "opacity 0.3s" }}
                  className="group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── PORTFOLIO / EXPERIENCE ───────── */}
      <section
        id="portfolio"
        className="py-24 px-10 lg:px-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {t("experience", "heading")}
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <motion.article
                key={exp.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                style={{
                  padding: "2.5rem",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
                data-testid={`experience-${idx}`}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "3px",
                    background:
                      "linear-gradient(180deg, #C8A97E 0%, rgba(200,169,126,0) 100%)",
                  }}
                />

                <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
                  <div>
                    <span
                      style={{
                        color: "#C8A97E",
                        fontSize: "0.7rem",
                        fontFamily: "monospace",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      {exp.num} / {t("experience", "label")}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                        fontWeight: 700,
                        color: "white",
                        marginTop: "0.5rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {exp.title[lang]}
                    </h3>
                    {exp.company && (
                      <p
                        style={{
                          color: "#C8A97E",
                          fontStyle: "italic",
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1rem",
                          marginTop: "0.35rem",
                        }}
                      >
                        {exp.company}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.current && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontSize: "0.7rem",
                          color: "#C8A97E",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#C8A97E",
                            boxShadow: "0 0 0 4px rgba(200,169,126,0.2)",
                          }}
                        />
                        {t("experience", "now")}
                      </span>
                    )}
                    <span
                      style={{
                        padding: "0.45rem 1rem",
                        border: "1px solid rgba(200,169,126,0.3)",
                        borderRadius: 999,
                        color: "rgba(200,169,126,0.9)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.05em",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                      }}
                    >
                      {exp.period[lang]}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                    marginBottom: "2.25rem",
                  }}
                >
                  {exp.description[lang]}
                </p>

                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                  <div>
                    <h4
                      style={{
                        color: "#C8A97E",
                        fontSize: "0.7rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        marginBottom: "1.1rem",
                        fontWeight: 600,
                      }}
                    >
                      {t("experience", "mainTasks")}
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {exp.tasks[lang].map((task, i) => (
                        <li
                          key={i}
                          style={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "0.85rem",
                            lineHeight: 1.7,
                            marginBottom: "0.6rem",
                            paddingLeft: "1.25rem",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              top: "0.65em",
                              width: "5px",
                              height: "5px",
                              background: "#C8A97E",
                              borderRadius: "50%",
                            }}
                          />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "#C8A97E",
                        fontSize: "0.7rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        marginBottom: "1.1rem",
                        fontWeight: 600,
                      }}
                    >
                      {t("experience", "results")}
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {exp.results[lang].map((result, i) => (
                        <li
                          key={i}
                          style={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "0.85rem",
                            lineHeight: 1.7,
                            marginBottom: "0.6rem",
                            paddingLeft: "1.25rem",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              top: "0.65em",
                              width: "5px",
                              height: "5px",
                              background: "#C8A97E",
                              borderRadius: "50%",
                            }}
                          />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CERTIFICATES ───────── */}
      <section
        id="certificates"
        className="py-24 px-10 lg:px-20"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "#1E1A16",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <div
              className="text-xs font-semibold mb-4"
              style={{
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              {t("certificates", "label")}
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "white",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {t("certificates", "headline1")}{" "}
              <span style={{ color: "#C8A97E", fontStyle: "italic" }}>
                {t("certificates", "headline2")}
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert, idx) => (
              <motion.article
                key={cert.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.75rem",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  transition: "border-color 0.3s, transform 0.3s",
                  overflow: "hidden",
                }}
                data-testid={`certificate-${idx}`}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: cert.brandColor,
                    opacity: 0.08,
                    filter: "blur(20px)",
                  }}
                />

                <div className="flex items-center justify-between mb-5">
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.35rem 0.7rem",
                      borderRadius: 4,
                      background: `${cert.brandColor}1A`,
                      border: `1px solid ${cert.brandColor}40`,
                      color: cert.brandColor,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                    }}
                  >
                    {cert.brand}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "#C8A97E",
                    lineHeight: 1.3,
                  }}
                >
                  {cert.code}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.85rem",
                    marginTop: "0.4rem",
                    lineHeight: 1.5,
                    fontWeight: 500,
                  }}
                >
                  {cert.fullName[lang]}
                </p>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    marginTop: "1rem",
                    padding: "0.4rem 0.75rem",
                    border: "1px solid rgba(200,169,126,0.25)",
                    borderRadius: 999,
                    color: "rgba(200,169,126,0.9)",
                    fontSize: "0.7rem",
                    width: "fit-content",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {cert.validity[lang]}
                </div>

                <p
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    marginTop: "1.25rem",
                  }}
                >
                  {cert.description[lang]}
                </p>

                <div style={{ marginTop: "1.25rem", flexGrow: 1 }}>
                  <h4
                    style={{
                      color: "#C8A97E",
                      fontSize: "0.65rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      marginBottom: "0.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {t("certificates", "focus")}
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {cert.focus[lang].map((f, i) => (
                      <li
                        key={i}
                        style={{
                          color: "rgba(255,255,255,0.55)",
                          fontSize: "0.8rem",
                          lineHeight: 1.6,
                          marginBottom: "0.4rem",
                          paddingLeft: "1rem",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "0.55em",
                            width: "4px",
                            height: "4px",
                            background: "#C8A97E",
                            borderRadius: "50%",
                          }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={cert.href}
                  download
                  className="group"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    marginTop: "1.75rem",
                    padding: "0.8rem 1.2rem",
                    borderRadius: 6,
                    background: "rgba(200,169,126,0.08)",
                    border: "1px solid rgba(200,169,126,0.3)",
                    color: "#C8A97E",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#C8A97E";
                    e.currentTarget.style.color = "#1A1614";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(200,169,126,0.08)";
                    e.currentTarget.style.color = "#C8A97E";
                  }}
                  data-testid={`download-cert-${idx}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {t("certificates", "download")}
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section
        id="contact"
        className="py-28 px-10 lg:px-20"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="text-xs font-semibold mb-8"
              style={{
                color: "#C8A97E",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {t("contact", "label")}
            </div>
            <h2
              className="leading-tight mb-12"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.1,
              }}
            >
              {t("contact", "headlineLine1")}
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="btn-contact-me"
                className="font-semibold transition-all"
                style={{
                  background: "#C8A97E",
                  color: "#1A1614",
                  padding: "1rem 2.5rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "#b8956b")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "#C8A97E")
                }
              >
                {t("contact", "contactMe")}
              </a>
              <a
                href={MAILTO_URL}
                onClick={handleEmailClick}
                data-testid="btn-send-email"
                className="font-semibold transition-all"
                style={{
                  background: "transparent",
                  color: "white",
                  padding: "1rem 2.5rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#C8A97E")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.2)")
                }
              >
                {t("contact", "sendEmail")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer
        className="py-8 px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "#151210",
        }}
      >
        <div
          className="text-sm"
          style={{
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
          }}
        >
          &copy; {new Date().getFullYear()} Ignatius Kevin Widian
        </div>
        <div className="flex gap-8">
          {[
            { label: "LinkedIn", href: LINKEDIN_URL },
            { label: "TIKTOK", href: TIKTOK_URL },
            { label: "Instagram", href: INSTAGRAM_URL },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium transition-colors"
              style={{
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#C8A97E")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.35)")
              }
              data-testid={`link-social-${s.label.toLowerCase()}`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>

      <LanguageToggle lang={lang} onChange={setLang} />
    </div>
  );
}
