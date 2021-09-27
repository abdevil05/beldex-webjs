// This file is purely used for formatting purposes when showing estimate values. ChangeNow implements a subset of this set
let currencyTable = {
    "AED": { name: "United Arab Emirates dirham", precision: 2 },
    "AFN": { name: "Afghanistan afghani", precision: 2 },
    "AMD": { name: "Armenian dram", precision: 2 },
    "ANG": { name: "Netherlands Antillean guilder", precision: 2 },
    "AOA": { name: "Angola kwanza", precision: 2 },
    "ARS": { name: "Argentine peso", precision: 2 },
    "AUD": { name: "Australian dollar", precision: 2 },
    "AWG": { name: "Aruban guilder", precision: 2 },
    "AZN": { name: "Azerbaijanian manat", precision: 2 },
    "BAM": { name: "Bosnia and Herzegovina convertible mark", precision: 2 },
    "BBD": { name: "Barbados dollar", precision: 2 },
    "BDT": { name: "Bangladeshi taka", precision: 2 },
    "BGN": { name: "Bulgarian lev", precision: 2 },
    "BHD": { name: "Bahraini dinar", precision: 3 },
    "BIF": { name: "Burundian franc", precision: 0 },
    "BMD": { name: "Bermuda dollar", precision: 2 },
    "BND": { name: "Brunei dollar", precision: 2 },
    "BOB": { name: "Bolivian boliviano", precision: 2 },
    "BRL": { name: "Brazilian real", precision: 2 },
    "BSD": { name: "Bahamian dollar", precision: 2 },
    "BWP": { name: "Botswana pula", precision: 2 },
    "BYR": { name: "Belarussian ruble", precision: 2},
    "BYN": { name: "Belarussian ruble", precision: 2 },
    "BZD": { name: "Belize dollar", precision: 2 },
    "CAD": { name: "Canadian dollar", precision: 2 },
    "CDF": { name: "Congolese franc", precision: 2 },
    "CHF": { name: "Swiss franc", precision: 2 },
    "CLP": { name: "Chilean peso", precision: 0 },
    "CNY": { name: "Chinese yuan renminbi", precision: 2 },
    "COP": { name: "Columbian peso", precision: 2 },
    "CRC": { name: "Costa Rican colon", precision: 2 },
    "CSK": { name: "Czech koruna", precision: 2 },
    "CVE": { name: "Cape Verde escudo", precision: 2 },
    "CZK": { name: "Czech koruna", precision: 2 },
    "DJF": { name: "Djiboutian franc", precision: 0 },
    "DKK": { name: "Danish krone", precision: 2 },
    "DOP": { name: "Dominican peso", precision: 2 },
    "DZD": { name: "Algerian dinar", precision: 2 },
    "EGP": { name: "Egyptian pound", precision: 2 },
    "ERN": { name: "Eritrean nakfa", precision: 2 },
    "ETB": { name: "Ethiopian birr", precision: 2 },
    "EUR": { name: "Euro", precision: 2 },
    "FJD": { name: "Fiji dollar", precision: 2 },
    "FKP": { name: "Falkland Islands pound", precision: 2 },
    "GBP": { name: "British pound sterling", precision: 2 },
    "GEL": { name: "Georgian lari", precision: 2 },
    "GHS": { name: "Ghana cedi", precision: 2 },
    "GIP": { name: "Gibraltar pound", precision: 2 },
    "GMD": { name: "Gambian dalasi", precision: 2 },
    "GNF": { name: "Guinean franc", precision: 0 },
    "GTQ": { name: "Guatemalan quetzal", precision: 2 },
    "GWP": { name: "Guinea-Bissau peso", precision: 0 },
    "GYD": { name: "Guyanese dollar", precision: 2 },
    "HKD": { name: "Hong Kong dollar", precision: 2 },
    "HNL": { name: "Hunduran Lempira", precision: 2 },
    "HRK": { name: "Croatian kuna", precision: 2 },
    "HTG": { name: "Haitian gourde", precision: 2 },
    "HUF": { name: "Hungarian forint", precision: 2 },
    "IDR": { name: "Indonesian rupiah", precision: 2 },
    "ILS": { name: "Israeli sheqel", precision: 2 },
    "INR": { name: "Indian rupee", precision: 2 },
    "IQD": { name: "Iraqi dinar", precision: 3 },
    "ISK": { name: "Icelandic krona", precision: 2 },
    "JMD": { name: "Jamaican dollar", precision: 2 },
    "JOD": { name: "Jordanian dinar", precision: 3 },
    "JPY": { name: "Japanese yen", precision: 0 },
    "KES": { name: "Kenyan shilling", precision: 2 },
    "KGS": { name: "Kyrgyzstani som", precision: 2 },
    "KHR": { name: "Cambodian riel", precision: 2 },
    "KMF": { name: "Comoro franc", precision: 0 },
    "KRW": { name: "South Korean won", precision: 0 },
    "KWD": { name: "Kuwaiti dinar", precision: 3 },
    "KYD": { name: "Cayman Islands dollar", precision: 2 },
    "KZT": { name: "Kazakhstani tenge", precision: 2 },
    "LAK": { name: "Lao kip", precision: 2 },
    "LBP": { name: "Lebanese pound", precision: 2 },
    "LKR": { name: "Sri Lanka rupee", precision: 2 },
    "LRD": { name: "Liberian dollar", precision: 2 },
    "LSL": { name: "Lesotho loti", precision: 2 },
    "LTL": { name: "Lithuanian litas", precision: 2 },
    "LVL": { name: "Latvian lats", precision: 2 },
    "MAD": { name: "Moroccan dirham", precision: 2 },
    "MDL": { name: "Moldovan leu", precision: 2 },
    "MGA": { name: "Malagasy ariary", precision: 0 },
    "MKD": { name: "Macedonian denar", precision: 2 },
    "MMK": { name: "Myanmar kyat", precision: 2 },
    "MNT": { name: "Mongolian tugrik", precision: 2 },
    "MOP": { name: "Macanese pataca", precision: 2 },
    "MRO": { name: "Mauritanian ouguiya", precision: 2 },
    "MUR": { name: "Mauritius rupee", precision: 2 },
    "MVR": { name: "Maldivian rufiyaa", precision: 2 },
    "MWK": { name: "Malawian kwacha", precision: 2 },
    "MXN": { name: "Mexican peso", precision: 2 },
    "MYR": { name: "Malaysian ringgit", precision: 2 },
    "MZN": { name: "Mozambican metical", precision: 2 },
    "NAD": { name: "Namibian dollar", precision: 2 },
    "NGN": { name: "Nigerian naira", precision: 2 },
    "NIO": { name: "Cordoba oro", precision: 2 },
    "NOK": { name: "Norwegian krone", precision: 2 },
    "NPR": { name: "Nepalese rupee", precision: 2 },
    "NZD": { name: "New Zealand dollar", precision: 2 },
    "OMR": { name: "Omani rial", precision: 3 },
    "PAB": { name: "Panamanian balboa", precision: 2 },
    "PEN": { name: "Peruvian nuevo sol", precision: 2 },
    "PGK": { name: "Papua New Guinean kina", precision: 2 },
    "PHP": { name: "Philippine peso", precision: 2 },
    "PKR": { name: "Pakistan rupee", precision: 2 },
    "PLN": { name: "Polish zloty", precision: 2 },
    "PYG": { name: "Paraguayan guarani", precision: 0 },
    "QAR": { name: "Qatari rial", precision: 2 },
    "RON": { name: "Romanian leu", precision: 2 },
    "RSD": { name: "Serbian dinar", precision: 2 },
    "RUB": { name: "Russian ruble", precision: 2 },
    "RWF": { name: "Rwanda franc", precision: 0 },
    "SAR": { name: "Saudi Arabian riyal", precision: 2 },
    "SBD": { name: "Solomon Islands dollar", precision: 2 },
    "SCR": { name: "Seychelles rupee", precision: 2 },
    "SEK": { name: "Swedish krona", precision: 2 },
    "SGD": { name: "Singapore dollar", precision: 2 },
    "SHP": { name: "Saint Helena pound", precision: 2 },
    "SLL": { name: "Sierra Leonean leone", precision: 2 },
    "SOS": { name: "Somali shilling", precision: 2 },
    "SRD": { name: "Surinamese dollar", precision: 2 },
    "SSP": { name: "South Sudanese pound", precision: 2 },
    "STD": { name: "Sao Tome and Principe dobra", precision: 2 },
    "SYP": { name: "Syrian pound", precision: 2 },
    "SZL": { name: "Swaziland lilangeni", precision: 2 },
    "THB": { name: "Thai baht", precision: 2 },
    "TJS": { name: "Tajikistani somoni", precision: 2 },
    "TND": { name: "Tunisian dinar", precision: 3 },
    "TOP": { name: "Tongan pa’anga", precision: 2 },
    "TRY": { name: "Turkish lira", precision: 2 },
    "TTD": { name: "Trinidad and Tobago dollar", precision: 2 },
    "TWD": { name: "Taiwan dollar", precision: 2 },
    "TZS": { name: "Tanzanian shilling", precision: 2 },
    "UAH": { name: "Ukrainian hryvnia", precision: 2 },
    "UGX": { name: "Ugandan shilling", precision: 2 },
    "USD": { name: "United States dollar", precision: 2 },
    "UYU": { name: "Uruguayan peso", precision: 2 },
    "UZS": { name: "Uzbekistan som", precision: 2 },
    "VEF": { name: "Venezuelan bolivar fuerte", precision: 2 },
    "VND": { name: "Vietnamese dong", precision: 0 },
    "VUV": { name: "Vanuatu vatu", precision: 0 },
    "WST": { name: "Samoan tala", precision: 2 },
    "XAF": { name: "CFA franc BEAC (Central African CFA franc)", precision: 0 },
    "XCD": { name: "East Caribbean dollar", precision: 2 },
    "XOF": { name: "CFA Franc BCEAO (West African CFA franc)", precision: 0 },
    "XPF": { name: "CFP franc", precision: 0 },
    "YER": { name: "Yemeni rial", precision: 2 },
    "ZAR": { name: "South African rand", precision: 2 },
    "ZMK": { name: "Zambian kwacha", precision: 2 },
    "ZMW": { name: "Zambian kwacha", precision: 2 },
    "ZWD": { name: "Zimbabwean dollar", precision: 2 }
}

export default currencyTable;