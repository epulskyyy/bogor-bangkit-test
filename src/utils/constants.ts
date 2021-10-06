/* eslint-disable no-useless-escape */
export const formItemLayoutR = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
export const regexTest = { alphaNumeric: /[^A-Za-z ]/g, numeric: /[0-9]/ };

export const messageValidate = (
  type: "required" | "minmax",
  nameField: string,
  length?: number
): string => {
  if (type === "required") return nameField + "Tidak boleh kosong";
  if (type === "minmax")
    return nameField + "Harus terdiri dari " + length + " digit";
  return "";
};

export const kecamatanBogor = [
  {
    id: 3271010,
    id_kota: "3271",
    nama: "Bogor Selatan",
  },
  {
    id: 3271020,
    id_kota: "3271",
    nama: "Bogor Timur",
  },
  {
    id: 3271030,
    id_kota: "3271",
    nama: "Bogor Utara",
  },
  {
    id: 3271040,
    id_kota: "3271",
    nama: "Bogor Tengah",
  },
  {
    id: 3271050,
    id_kota: "3271",
    nama: "Bogor Barat",
  },
  {
    id: 3271060,
    id_kota: "3271",
    nama: "Tanah Sereal",
  },
];

export const kelurahanBogor = [
  {
    id: 3271010001,
    id_kecamatan: "3271010",
    nama: "Mulyaharja",
  },
  {
    id: 3271010002,
    id_kecamatan: "3271010",
    nama: "Pamoyanan",
  },
  {
    id: 3271010003,
    id_kecamatan: "3271010",
    nama: "Ranggamekar",
  },
  {
    id: 3271010005,
    id_kecamatan: "3271010",
    nama: "Kertamaya",
  },
  {
    id: 3271010006,
    id_kecamatan: "3271010",
    nama: "Rancamaya",
  },
  {
    id: 3271010007,
    id_kecamatan: "3271010",
    nama: "Bojongkerta",
  },
  {
    id: 3271010008,
    id_kecamatan: "3271010",
    nama: "Harjasari",
  },
  {
    id: 3271010009,
    id_kecamatan: "3271010",
    nama: "Muarasari",
  },
  {
    id: 3271010010,
    id_kecamatan: "3271010",
    nama: "Pakuan",
  },
  {
    id: 3271010011,
    id_kecamatan: "3271010",
    nama: "Cipaku",
  },
  {
    id: 3271010012,
    id_kecamatan: "3271010",
    nama: "Lawanggintung",
  },
  {
    id: 3271010013,
    id_kecamatan: "3271010",
    nama: "Batutulis",
  },
  {
    id: 3271010014,
    id_kecamatan: "3271010",
    nama: "Bondongan",
  },
  {
    id: 3271010015,
    id_kecamatan: "3271010",
    nama: "Empang",
  },
  {
    id: 3271010016,
    id_kecamatan: "3271010",
    nama: "Cikaret",
  },
  {
    id: 3271020001,
    id_kecamatan: "3271020",
    nama: "Sindangsari",
  },
  {
    id: 3271020002,
    id_kecamatan: "3271020",
    nama: "Sindangrasa",
  },
  {
    id: 3271020003,
    id_kecamatan: "3271020",
    nama: "Tajur",
  },
  {
    id: 3271020004,
    id_kecamatan: "3271020",
    nama: "Katulampa",
  },
  {
    id: 3271020005,
    id_kecamatan: "3271020",
    nama: "Baranangsiang",
  },
  {
    id: 3271020006,
    id_kecamatan: "3271020",
    nama: "Sukasari",
  },
  {
    id: 3271030001,
    id_kecamatan: "3271030",
    nama: "Bantarjati",
  },
  {
    id: 3271030002,
    id_kecamatan: "3271030",
    nama: "Tegalgundil",
  },
  {
    id: 3271030003,
    id_kecamatan: "3271030",
    nama: "Tanahbaru",
  },
  {
    id: 3271030004,
    id_kecamatan: "3271030",
    nama: "Cimahpar",
  },
  {
    id: 3271030005,
    id_kecamatan: "3271030",
    nama: "Ciluar",
  },
  {
    id: 3271030006,
    id_kecamatan: "3271030",
    nama: "Cibuluh",
  },
  {
    id: 3271030007,
    id_kecamatan: "3271030",
    nama: "Kedunghalang",
  },
  {
    id: 3271030008,
    id_kecamatan: "3271030",
    nama: "Ciparigi",
  },
  {
    id: 3271040001,
    id_kecamatan: "3271040",
    nama: "Paledang",
  },
  {
    id: 3271040002,
    id_kecamatan: "3271040",
    nama: "Gudang",
  },
  {
    id: 3271040003,
    id_kecamatan: "3271040",
    nama: "Babakanpasar",
  },
  {
    id: 3271040004,
    id_kecamatan: "3271040",
    nama: "Tegallega",
  },
  {
    id: 3271040005,
    id_kecamatan: "3271040",
    nama: "Babakan",
  },
  {
    id: 3271040007,
    id_kecamatan: "3271040",
    nama: "Pabaton",
  },
  {
    id: 3271040008,
    id_kecamatan: "3271040",
    nama: "Cibogor",
  },
  {
    id: 3271040009,
    id_kecamatan: "3271040",
    nama: "Panaragan",
  },
  {
    id: 3271040010,
    id_kecamatan: "3271040",
    nama: "Kebonkelapa",
  },
  {
    id: 3271040011,
    id_kecamatan: "3271040",
    nama: "Ciwaringin",
  },
  {
    id: 3271050001,
    id_kecamatan: "3271050",
    nama: "Pasirmulya",
  },
  {
    id: 3271050002,
    id_kecamatan: "3271050",
    nama: "Pasirkuda",
  },
  {
    id: 3271050003,
    id_kecamatan: "3271050",
    nama: "Pasirjaya",
  },
  {
    id: 3271050004,
    id_kecamatan: "3271050",
    nama: "Gunungbatu",
  },
  {
    id: 3271050005,
    id_kecamatan: "3271050",
    nama: "Loji",
  },
  {
    id: 3271050007,
    id_kecamatan: "3271050",
    nama: "Cilendek Timur",
  },
  {
    id: 3271050008,
    id_kecamatan: "3271050",
    nama: "Cilendek Barat",
  },
  {
    id: 3271050009,
    id_kecamatan: "3271050",
    nama: "Sindangbarang",
  },
  {
    id: 3271050010,
    id_kecamatan: "3271050",
    nama: "Margajaya",
  },
  {
    id: 3271050011,
    id_kecamatan: "3271050",
    nama: "Balungbangjaya",
  },
  {
    id: 3271050012,
    id_kecamatan: "3271050",
    nama: "Situgede",
  },
  {
    id: 3271050013,
    id_kecamatan: "3271050",
    nama: "Bubulak",
  },
  {
    id: 3271050014,
    id_kecamatan: "3271050",
    nama: "Semplak",
  },
  {
    id: 3271050015,
    id_kecamatan: "3271050",
    nama: "Curugmekar",
  },
  {
    id: 3271060001,
    id_kecamatan: "3271060",
    nama: "Kedungwaringin",
  },
  {
    id: 3271060002,
    id_kecamatan: "3271060",
    nama: "Kedungjaya",
  },
  {
    id: 3271060003,
    id_kecamatan: "3271060",
    nama: "Kebonpedes",
  },
  {
    id: 3271060004,
    id_kecamatan: "3271060",
    nama: "Tanahsareal",
  },
  {
    id: 3271060005,
    id_kecamatan: "3271060",
    nama: "Kedungbadak",
  },
  {
    id: 3271060006,
    id_kecamatan: "3271060",
    nama: "Sukaresmi",
  },
  {
    id: 3271060007,
    id_kecamatan: "3271060",
    nama: "Sukadamai",
  },
  {
    id: 3271060008,
    id_kecamatan: "3271060",
    nama: "Cibadak",
  },
  {
    id: 3271060009,
    id_kecamatan: "3271060",
    nama: "Kayumanis",
  },
  {
    id: 3271060010,
    id_kecamatan: "3271060",
    nama: "Mekarwangi",
  },
  {
    id: 3271060011,
    id_kecamatan: "3271060",
    nama: "Kencana",
  },
  {
    id: 0,
    id_kecamatan: "lainnya",
    nama: "Lainnya",
  },
];
