// All facts on the page come from veon/client.json (ids in comments). Do not add anything that is not there.

export interface Phone { label: string; display: string; tel: string; }

// company.contacts.phones
export const phones = {
  tennis: { label: "Рецепція тенісу, бронювання кортів", display: "+380 96 150 17 61", tel: "tel:+380961501761" },
  fitness: { label: "Фітнес", display: "+380 97 150 17 61", tel: "tel:+380971501761" },
  fitnessDesk: { label: "Рецепція фітнесу", display: "+380 96 150 16 61", tel: "tel:+380961501661" },
  restaurant: { label: "Ресторан Il Corso", display: "+380 68 150 16 71", tel: "tel:+380681501671" },
} satisfies Record<string, Phone>;

// company.contacts.emails, B-F012
export const email = "sportvillagrays@gmail.com";
export const mailto = (subject: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

// company.contacts.addresses, B-F001
export const address = { city: "м. Вишгород", street: "вул. Парусна, 203" };
export const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Sport Villa Grays, вул. Парусна, 203, Вишгород");

// C-001
export const hours = [
  { days: "Пн–Пт", time: "7:00–22:00" },
  { days: "Сб–Нд", time: "8:00–22:00" },
];

// socials[] (instagram confirmed, facebook probable, both linked from the client's site, B-F013)
export const socials = [
  { name: "Instagram", handle: "@sportvillagrays", url: "https://www.instagram.com/sportvillagrays/" },
  { name: "Facebook", handle: "SportVillaGrays", url: "https://www.facebook.com/SportVillaGrays" },
];

// B-F003, company.products_services[0]
export const season = { from: "15.09.2026", to: "31.05.2027" };
export const tariffs = [
  { id: "standard", name: "Стандарт", prime: 2100, offPeak: 1950 },
  { id: "member", name: "Член клубу", prime: 1900, offPeak: 1800 },
] as const;

// Prime: Mon–Fri 15:00–22:00, Sat–Sun all day; club hours C-001
export const week = [
  { short: "Пн", long: "Понеділок", open: 7, prime: 15 },
  { short: "Вт", long: "Вівторок", open: 7, prime: 15 },
  { short: "Ср", long: "Середа", open: 7, prime: 15 },
  { short: "Чт", long: "Четвер", open: 7, prime: 15 },
  { short: "Пт", long: "П'ятниця", open: 7, prime: 15 },
  { short: "Сб", long: "Субота", open: 8, prime: 8 },
  { short: "Нд", long: "Неділя", open: 8, prime: 8 },
];
export const dayStart = 7;
export const dayEnd = 22;

// company.products_services
export const courtTerms = [
  "Мінімальний час оренди — 1 година",
  "Сауна для орендарів корту входить у вартість",
  "Оренда інвентарю — від 200 грн",
  "Послуги тренера — від 1200 грн/год",
];
export const yearContract = "Річний контракт або клубна карта: −10% на послуги, −25% на абонемент школи, пріоритет у розкладі.";

// B-F005
export const groups = [
  { ages: "4–5", unit: "років" },
  { ages: "6–8", unit: "років" },
  { ages: "9–11", unit: "років" },
  { ages: "12–15", unit: "років" },
  { ages: "Дорослі", unit: "Tennis Xpress" },
];

// company.products_services (школа), B-F006: prices per course, courses last 8–9 months
export const programs: { name: string; price: number | null }[] = [
  { name: "Mini Tennis Single 6", price: 6600 },
  { name: "Mini Tennis 6", price: 11700 },
  { name: "Mini Tennis 8", price: 10800 },
  { name: "Tennis Beginner 8", price: 7400 },
  { name: "Tennis Start 8 Pro", price: 13860 },
  { name: "Tennis Start 6 PRO", price: 14960 },
  { name: "Tennis Xpress", price: null },
];

// B-F008
export const atCourt = [
  "Жіноча роздягальня на 30 шафок",
  "Чоловіча роздягальня на 36 шафок з душем і сауною",
  "Дитяча роздягальня для дітей до 10 років",
  "Зберігання інвентарю",
  "Парковка",
  "Бар і зона відпочинку",
];
// B-F010, company.products_services
export const nearby = [
  "Фітнес-зона",
  "Ресторан Il Corso",
  "Pro Shop: Yonex, Babolat, Pro Kennex, Wilson, Nike, Head та інші",
  "Натяжка ракеток на електронному верстаті Babolat",
  "Організація турнірів і заходів",
  "Послуги фотографа за домовленістю",
];

export const formatPrice = (n: number) => n.toLocaleString("uk-UA").replace(/\s/g, " ");
export const FUTURE = "Розділ у розробці";
