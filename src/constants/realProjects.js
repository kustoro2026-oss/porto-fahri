export const realProjects = [
  {
    id: "antrian-bri",
    name: {
      id: "Sistem Antrian BRI Surabaya",
      en: "BRI Surabaya Queue System"
    },
    path: "#",
    desc: {
      id: "Software Antrean Digital Bank BRI dengan Sistem Pemanggilan Suara Otomatis",
      en: "BRI Bank Digital Queue Software with Automatic Voice Call System"
    },
    icon: "🏦",
    category: "software",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
    client: "Bank BRI Kantor Cabang Surabaya",
    isReal: true,
    fullDescription: {
      id: "Software aplikasi antrean digital desktop yang dirancang khusus untuk memperlancar antrean nasabah di kantor cabang Bank BRI Surabaya. Software ini secara otomatis mengelola nomor antrean teller dan customer service, serta terintegrasi dengan modul suara otomatis (Text-to-Speech) untuk melakukan pemanggilan nomor antrean nasabah secara real-time.",
      en: "A desktop digital queue application software designed specifically to streamline customer queues at the Bank BRI Surabaya branch office. The software automatically manages teller and customer service queue numbers, and integrates with an automatic Text-to-Speech voice module to perform real-time customer calls."
    },
    techStack: ["Electron.js", "React JS", "Node.js", "WebSockets", "Text-to-Speech API"],
    features: [
      {
        id: "Software Aplikasi Desktop Standalone",
        en: "Standalone Desktop Application Software"
      },
      {
        id: "Sistem Pemanggilan Suara Otomatis (Automatic Voice Call)",
        en: "Automatic Voice Call System (Text-to-Speech)"
      },
      {
        id: "Sinkronisasi Antrean Loket Real-Time",
        en: "Real-Time Counter Queue Sync"
      },
      {
        id: "Integrasi Cetak Tiket Nomor Antrean Kios",
        en: "Kiosk Queue Ticket Printing Integration"
      }
    ]
  },
  {
    id: "tamiya-race-tracker",
    name: {
      id: "Software Balapan Tamiya Jakarta",
      en: "Jakarta Tamiya Race Software"
    },
    path: "#",
    desc: {
      id: "Software Turnamen Tamiya dengan Sistem Bracket Double-Elimination & Print ID Card",
      en: "Tamiya Tournament Software with Double-Elimination Bracket System & ID Card Print"
    },
    icon: "🏎️",
    category: "software",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    client: "Komunitas Tamiya Indonesia Jakarta",
    isReal: true,
    fullDescription: {
      id: "Software aplikasi desktop manajemen turnamen balap Tamiya (Mini 4WD) di Jakarta. Sistem ini mengotomatisasi bagan pertandingan menggunakan format Double-Elimination (pemenang melaju ke babak berikutnya, sementara yang kalah turun ke lower bracket). Saat pendaftaran peserta, sistem secara otomatis mencetak ID Card pengenal lengkap dengan barcode, serta memproyeksikan bagan turnamen (bracket) secara real-time ke layar monitor besar penonton.",
      en: "A desktop application software for managing Tamiya (Mini 4WD) racing tournaments in Jakarta. This system automates the match tree using a Double-Elimination format (winners advance, while losers drop to lower bracket). Upon registration, the system automatically prints an ID Card with barcode and projects the live bracket to a large screen."
    },
    techStack: ["Electron.js", "React JS", "Node.js", "SQLite", "Thermal Printer API"],
    features: [
      {
        id: "Manajemen Bracket Turnamen Double-Elimination",
        en: "Double-Elimination Tournament Bracket Management"
      },
      {
        id: "Pendaftaran Peserta & Print ID Card Barcode Otomatis",
        en: "Participant Registration & Automatic Barcode ID Card Print"
      },
      {
        id: "Proyeksi Bagan Bracket Real-Time Layar Lebar",
        en: "Real-Time Large Screen Bracket Projection"
      },
      {
        id: "Penyimpanan Database offline-first (SQLite)",
        en: "Offline-first Database Storage (SQLite)"
      }
    ]
  }
];
