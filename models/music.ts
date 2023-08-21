export interface instru {
  name: instru_names;
  color: colors;
  type: instru_types;
}

export interface note {
  id:string;
  name: string[];
  color: colors;
  index?: number;
  bpm?: number;
  texte?: string;
}

export interface partition {
  notes?: note[];
  instrus?: instru[];
}

export enum note_types {
  Note = 'NOTE',
  Return = 'RETURN',
  Space = 'SPACE',
}

export enum instru_types {
  Woodwind  = 'WOODWIND ',
  Percussion = 'PERCUSSION',
  Stringed = 'STRINGED',
}
export enum instru_names {
  Kalimba = 'KALIMBA',
  Yukulele = 'YUKULELE',
  Okarina = 'OKARINA',
}
export enum colors{
  Red = '#ff0001',
  Blue = '#2196f3',
  Yellow = '#ffeb3b',
  Pink = '#e91e63',
  Green = '#8bc34a'
}

