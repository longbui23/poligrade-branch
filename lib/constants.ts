// State abbreviation to full name mapping
export const STATE_MAP: Record<string, string> = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas',
  'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware',
  'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho',
  'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas',
  'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi',
  'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada',
  'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York',
  'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma',
  'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah',
  'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia',
  'WI': 'Wisconsin', 'WY': 'Wyoming'
}

// US States array (2-letter abbreviations sorted by full name)
export const US_STATES = Object.keys(STATE_MAP).sort((a, b) =>
  STATE_MAP[a].localeCompare(STATE_MAP[b])
)

// Office types
export const OFFICE_OPTIONS = [
  { value: 'GOVERNOR', label: 'Governor' },
  { value: 'SENATOR', label: 'Senator' },
  { value: 'HOUSE_REPRESENTATIVE', label: 'House Representative' },
]

// Status types
export const STATUS_OPTIONS = [
  { value: 'INCUMBENT', label: 'Incumbent' },
  { value: 'CANDIDATE', label: 'Candidate' },
  { value: 'NONE', label: 'None' },
]

// Grade types
export const GRADE_OPTIONS = [
  { value: 'PROGRESSIVE', label: 'Progressive' },
  { value: 'LIBERAL', label: 'Liberal' },
  { value: 'CENTRIST', label: 'Centrist' },
  { value: 'MODERATE', label: 'Moderate' },
  { value: 'CONSERVATIVE', label: 'Conservative' },
  { value: 'NATIONALIST', label: 'Nationalist' },
]

// Helper to convert enum to display label
export const formatOffice = (office: string) => {
  return OFFICE_OPTIONS.find(o => o.value === office)?.label || office
}

export const formatStatus = (status: string) => {
  return STATUS_OPTIONS.find(s => s.value === status)?.label || status
}

export const formatGrade = (grade: string) => {
  return GRADE_OPTIONS.find(g => g.value === grade)?.label || grade
}
