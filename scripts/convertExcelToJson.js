const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read the Excel file
const workbook = XLSX.readFile('/Users/gzambran/Documents/PoliGrade/public/Politicians_v1.xlsx');

// Define sheets to process
const sheets = [
  { name: 'Governors', office: 'Governor' },
  { name: '119th Senate', office: 'Senator' },
  { name: '119th House', office: 'House Representative' },
];

// Convert all sheets to JSON
const allData = sheets.flatMap(({ name, office }) => {
  const sheet = workbook.Sheets[name];
  if (!sheet) {
    console.warn(`Sheet "${name}" not found`);
    return [];
  }

  const rows = XLSX.utils.sheet_to_json(sheet);
  return rows.map((row) => ({
    name: row['Name'] || '',
    district: row['State/District'] || '',
    office: office,
    grade: row['Grade'] || '',
  }));
});

// Write to JSON file
const outputPath = path.join(__dirname, '../public/politicians.json');
fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2));

console.log(`✓ Converted ${allData.length} politicians to ${outputPath}`);
console.log(`  - Governors: ${allData.filter(p => p.office === 'Governor').length}`);
console.log(`  - Senators: ${allData.filter(p => p.office === 'Senator').length}`);
console.log(`  - House Representatives: ${allData.filter(p => p.office === 'House Representative').length}`);
