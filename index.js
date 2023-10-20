list_cash_flow = [
  2500000, 5000000, -1000000, -2500000, 5000000, 10000000,
  -5000000, 7500000, 10000000, -1500000, 25000000, -2500000
];

total_pengeluaran = 0;
total_pemasukan = 0;

for (let x in list_cash_flow) {
  if (list_cash_flow[x] > 0) {
    // Jumlahkan bilangan positif (total pemasukan)
    total_pemasukan += list_cash_flow[x];
  } else {
    // jumlahkan bilangan negarif (total pengeluaran)
    total_pengeluaran += list_cash_flow[x];
  }
}

// total_pengeluaran *= -1 untuk mengubah tanda dari bilangan negatif menjadi positif
total_pengeluaran *= -1;

console.log(`Total Pengeluaran adalah : ${total_pengeluaran}`);
console.log(`Total Pemasukan adalah : ${total_pemasukan}`);
