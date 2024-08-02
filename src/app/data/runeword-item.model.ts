export interface RunewordItem {
  id: string;
  name: string;
  runes: string[];
  sockets: number;
  highestRune: string;
  itemType: string;
  itemTypeSecondary?: string[];
  requiredLevel: number;
  ladderOnly: boolean;
  properties: string[];
}
