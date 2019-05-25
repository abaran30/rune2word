export class RuneWordItem {
  name: string;
  runes: string[];
  sockets: number;
  highestRune: string;
  itemType: string;
  itemTypeSecondary: string[] | undefined;
  requiredLevel: number;
  ladderOnly: boolean;
  properties: string[];

  constructor(
    name: string,
    runes: string[],
    sockets: number,
    highestRune: string,
    itemType: string,
    itemTypeSecondary: string[] | undefined,
    requiredLevel: number,
    ladderOnly: boolean,
    properties: string[]
  ) {
    this.name = name;
    this.runes = runes;
    this.sockets = sockets;
    this.highestRune = highestRune;
    this.itemType = itemType;
    this.itemTypeSecondary = itemTypeSecondary || undefined;
    this.requiredLevel = requiredLevel;
    this.ladderOnly = ladderOnly;
    this.properties = properties;
  }
}
