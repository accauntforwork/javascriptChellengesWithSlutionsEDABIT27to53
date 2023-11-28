// 27. Massivni oladigan funksiya yarating
// argument sifatida raqamlar va alohida elementlarga ega yangi massivni qaytaradi
function massivYaratish(...elementlar) {
  return elementlar;
}

// Test
console.log(massivYaratish(1, "ikki", 3.14, true));
// 28.Birinchi 100 ta tub sonning yig'indisini hisoblang va ularni massivda qaytaring
let tubSonlarYigindisi = {
  tubmi: function (son) {
    if (son < 2) return false;
    for (let i = 2; i <= Math.sqrt(son); i++) {
      if (son % i === 0) return false;
    }
    return true;
  },
  tubSonlarniMassivgaYig: function (chegara) {
    let tubSonlar = [];
    let tubSon = 2;
    while (tubSonlar.length < chegara) {
      if (this.tubmi(tubSon)) {
        tubSonlar.push(tubSon);
      }
      tubSon++;
    }
    return tubSonlar;
  },
  tubSonlarYigindisiniOl: function (chegara) {
    let tubSonlar = this.tubSonlarniMassivgaYig(chegara);
    let yigindi = 0;
    for (let i = 0; i < tubSonlar.length; i++) {
      yigindi += tubSonlar[i];
    }
    return yigindi;
  },
};
// Test
console.log(tubSonlarYigindisi.tubSonlarYigindisiniOl(100));

// 29.Birinchi 100 ta tub son orasidagi masofani chop eting
function tublarOrasidagiMasofa(chegara) {
  const tubSonlar = tubSonlarYigindisi.tubSonlarniMassivgaYig(chegara);
  const masofalar = tubSonlar.map((tubSon, index) => {
    if (index === 0) return 0;
    return tubSon - tubSonlar[index - 1];
  });

  return masofalar;
}

// Test
console.log(tublarOrasidagiMasofa(100));

// 30. Noaniq o'lchamdagi ikkita musbat sonni qo'shadigan funksiya yarating.Raqamlar
// satr sifatida qabul qilinadi va natija ham satr sifatida taqdim etilishi kerak.
function kattaSonlarniQoshish(son1, son2) {
  const kattaRAqam1 = BigInt(son1);
  const kattaRAqam2 = BigInt(son2);

  const yigindi = kattaRAqam1 + kattaRAqam2;
  const natija = yigindi.toString();
  return natija;
}

// Test
console.log(
  kattaSonlarniQoshish("12345678901234567890", "98765432109876543210")
);

// 31.Matndagi so'zlar sonini qaytaradigan funksiya yarating
function matndagiSozlarSoniniSana(matn) {
  return matn.split(" ").length;
}

// Test
console.log(
  matndagiSozlarSoniniSana(
    "Matndagi so'zlar sonini qaytaradigan funksiya yarating"
  )
);

// 32.Matndagi har bir so‘zning birinchi harfini bosh harf bilan yozadigan funksiya yarating
function boshHarfgaOgir(matn) {
  let sozlar = matn.split(" ");
  let yangiSozlar = [];
  for (let i = 0; i < sozlar.length; i++) {
    let soz = sozlar[i];
    let yangiSoz = soz.replace(soz[0], soz[0].toUpperCase());
    yangiSozlar.push(yangiSoz);
  }
  return yangiSozlar.join(" ");
}

// Test
console.log(
  boshHarfgaOgir(
    "Matndagi har bir so'zning birinchi harfini bosh harf bilan yozadigan funksiya yarating"
  )
);

// 33. Vergul bilan ajratilgan qatorda olingan raqamlar yig'indisini hisoblang
function sonlarYigindisi(str) {
  const sonlar = str.split(",").map((son) => parseFloat(son));
  return sonlar.reduce((yigindi, son) => yigindi + son, 0);
}

// Test
console.log(sonlarYigindisi("1,2,3,4"));

// 34.Matn ichidagi so'zlar bilan massivni qaytaruvchi funksiya yarating.
function sozlargaBolish(matn) {
  return matn.split(" ");
}

// Test
console.log(
  sozlargaBolish(
    "Matn ichidagi so'zlar bilan massivni qaytaruvchi funksiya yarating."
  )
);
// 35. CSV matnini "ikki o'lchovli" massivga aylantirish funksiyasini yarating
function csvniMassivgaOgir(csvText) {
  return csvText.split("\n").map((row) => row.split(","));
}

// Test
console.log(
  csvniMassivgaOgir(
    `yil,companiya,Model
1997,Ford,Mustang
2000,volkswagen,id.4`
  )
);
// 36.Satrni belgilar massiviga aylantiruvchi funksiya yarating
function matnniBelgilarga(matn) {
  return [...matn];
}

// Test
console.log(matnniBelgilarga("Satrni belgilar massiviga"));

// 37. Har bir belgining ASCII kodlarini o'z ichiga olgan massivdagi satrni aylantiradigan funksiya yarating.
function matnniAsciigaOgirish(str) {
  return str.split("").map((char) => char.charCodeAt(0));
}

// Test
console.log(matnniAsciigaOgirish("belgining"));

// 38.Satrdagi ASCII kodlarini o'z ichiga olgan massivni aylantiradigan funksiya yarating
function asciiniMatngaOgirish(asciiArray) {
  return String.fromCharCode(...asciiArray);
}

// Test
console.log(asciiniMatngaOgirish([98, 101, 108, 103, 105, 110, 105, 110, 103]));

// 39.Tsezar shifrini amalga oshiring
/**
 * caesarCipher - Satri o'zgaruvchisidagi matnni kiritilgan kalit so'z (shift) boyicha shifrlaydi.
 *
 * @param {string} text - Shifrlanadigan matn.
 * @param {number} shift - Kalit so'z (shift) - bu matndagi har bir harfni nechta pozitsiya o'zgartirish.
 * @returns {string} - Shifrlangan matn.
 */
function caesarCipher(text, shift) {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const isUpperCase = char === char.toUpperCase();
    const codeA = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
    const shiftedCode =
      ((((char.charCodeAt(0) - codeA + shift) % 26) + 26) % 26) + codeA;
    return String.fromCharCode(shiftedCode);
  });
}

// Test
console.log(caesarCipher("bu matndagi", "kalit"));

// 40.Raqamlar massivi uchun pufakchali tartiblash algoritmini amalga oshiring
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Test
console.log(bubbleSort([1, 8, 2, 6, 7, 3, 82, 5]));

// 41. Ikki nuqta orasidagi masofani ularning x, y koordinatalari bilan hisoblash funksiyasini yarating.
function masofaniHisobla(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Test
console.log(masofaniHisobla(1, 1, 3, 6));

// 42.Agar ikkita bo'lsa, mantiqiy qiymatni qaytaradigan funktsiya yarating
// markaz koordinatalari va radiusi bilan aniqlangan doiralar kesishadi
function doiralarKesishishi(x1, y1, r1, x2, y2, r2) {
  const masofa = masofaniHisobla(x1, y1, x2, y2);
  return masofa < r1 + r2;
}

// Test
console.log(doiralarKesishishi(1, 2, 3, 4, 5, 6));

// 43.Argument sifatida ikki o'lchovli massivni oladigan funksiya yarating
// va raqam va raqam bilan ko'rsatilgan ustunni bir o'lchovli massiv sifatida chiqaradi
function ustunniAjrat(matritsa, ustunRaqami) {
  return matritsa.map((qator) => qator[ustunRaqami]);
}

// Test
const matritsa = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(ustunniAjrat(matritsa, 1));

// 44.Ikkilik sonni o'z ichiga olgan qatorni raqamga aylantiradigan funksiya yarating
function binaryStringToNumber(binaryString) {
  return parseInt(binaryString, 2);
}

// Test
console.log(binaryStringToNumber("01010001111"));

// 45.Tirikli barcha sonlar yig‘indisini hisoblash funksiyasini yarating
// massiv (cheklanmagan miqdordagi darajadagi raqamlar yoki boshqa raqamlar massivlarini o'z ichiga oladi)
function massivYigindisi(arr) {
  let sum = 0;

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      sum += massivYigindisi(element);
    } else {
      sum += element;
    }
  });

  return sum;
}

// Test
console.log([1, [2, [3, 4], 5], 6, [7, 8]]);

// 46. Tir-qirrali raqamlar yoki raqamlar massividagi maksimal sonni toping
function maxSon(arr) {
  let max = Number.MIN_SAFE_INTEGER;

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      const maxInSubArray = maxSon(element);
      max = Math.max(max, maxInSubArray);
    } else {
      max = Math.max(max, element);
    }
  });

  return max;
}

// Test
console.log(maxSon([1, 8, 69, 999, 875]));

// 47.Yangi massivdagi raqamlar yoki boshqa massivlar bilan qirrali massivni chuqur nusxalash
function massivniChuqurNusxalash(arr) {
  return arr.map((element) =>
    Array.isArray(element) ? massivniChuqurNusxalash(element) : element
  );
}

// Test
console.log(massivniChuqurNusxalash([1, [2, [3, 4], 5], 6, [7, 8]]));

// 48.Satrdagi eng uzun so'zni qaytarish funksiyasini yarating
function engUzunSoz(text) {
  const soz = text.match(/\b\w+\b/g);
  const engUzun = soz.reduce(
    (engUzun, soz) => (soz.length > engUzun.length ? soz : engUzun),
    ""
  );
  return engUzun;
}

// Test
console.log(engUzunSoz("qaytarish funksiyasini yarating"));
// 49.Satrlar massivini aralashtirish
function massivniAralashtirish(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Test
console.log(
  massivniAralashtirish(["salom", "berdik", "aralashtir", "massivni"])
);

// 50. Argument sifatida n ni qabul qiladigan va massivni qaytaradigan funksiya yarating
// I dan n gacha bo'lgan n ta tasodifiy son. Raqamlar massiv ichida yagona bo'lishi kerak.
function tasodifiyRaqamlarMassivi(n) {
  const raqamlar = Array.from({ length: n }, (_, index) => index + 1);
  return massivniAralashtirish(raqamlar).slice(0, n);
}

// Test
console.log(tasodifiyRaqamlarMassivi(5));

// 51.Satr ichidagi harflar chastotasini toping. Natijani a sifatida qaytaring
// massivlar massivi. Har bir pastki qatorda 2 ta element mavjud: harf va hodisalar soni.
function belgilarTakrorlanishi(text) {
  const frequencyMap = new Map();

  [...text].forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      char = char.toLowerCase();
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
  });

  return Array.from(frequencyMap.entries());
}

// Test
console.log(belgilarTakrorlanishi("salom ss"));

// 52.Fibonachchi(500) ni yuqori aniqlik bilan hisoblang (barcha raqamlar)
function fibonachchiSonlari(n) {
  let a = BigInt(0);
  let b = BigInt(1);

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b.toString();
}

// Test
console.log(fibonachchiSonlari(500));

// 53. 70 ni hisoblang! yuqori aniqlik bilan (barcha raqamlar)
function kattaSonlarUchunFactorial(n) {
  let natija = BigInt(1);

  for (let i = 2; i <= n; i++) {
    natija *= BigInt(i);
  }

  return natija.toString();
}

// Test
console.log(kattaSonlarUchunFactorial(70));
