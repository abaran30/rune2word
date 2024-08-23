import { RunewordFilterPipe } from './runeword-filter.pipe';
import { RunewordDataService } from './data/runeword-data.service';

describe('RunewordFilterPipe', () => {
  it('should transform input based on Item Type', () => {
    const pipe = new RunewordFilterPipe();
    const runeWordDataService = new RunewordDataService();

    // Item Type: Armor
    const runewordsFilteredByItemTypeArmor = pipe.transform(
      runeWordDataService.getData(),
      ['Armor'],
      [],
      [],
      []
    );
    expect(runewordsFilteredByItemTypeArmor.length).toEqual(20);

    // Item Type: Helm
    const runewordsFilteredByItemTypeHelm = pipe.transform(
      runeWordDataService.getData(),
      ['Helm'],
      [],
      [],
      []
    );
    expect(runewordsFilteredByItemTypeHelm.length).toEqual(5);

    // Item Type: Shield
    const runewordsFilteredByItemTypeShield = pipe.transform(
      runeWordDataService.getData(),
      ['Shield'],
      [],
      [],
      []
    );
    expect(runewordsFilteredByItemTypeShield.length).toEqual(9);

    // Item Type: Weapon
    const runewordsFilteredByItemTypeWeapon = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      [],
      [],
      []
    );
    expect(runewordsFilteredByItemTypeWeapon.length).toEqual(49);

    // Item Type: Armor and Weapon
    const runewordsFilteredByItemTypeArmorAndWeapon = pipe.transform(
      runeWordDataService.getData(),
      ['Armor', 'Weapon'],
      [],
      [],
      []
    );
    expect(runewordsFilteredByItemTypeArmorAndWeapon.length).toEqual(69);
  });

  it('should transform input based on Weapon Class', () => {
    const pipe = new RunewordFilterPipe();
    const runeWordDataService = new RunewordDataService();

    // Weapon Class: Axe
    const runewordsFilteredByWeaponClassAxe = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Axe'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassAxe.length).toEqual(24);

    // Weapon Class: Claw
    const runewordsFilteredByWeaponClassClaw = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Claw'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassClaw.length).toEqual(6);

    // Weapon Class: Club
    const runewordsFilteredByWeaponClassClub = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Club'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassClub.length).toEqual(6);

    // Weapon Class: Dagger
    const runewordsFilteredByWeaponClassDagger = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Dagger'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassDagger.length).toEqual(5);

    // Weapon Class: Hammer
    const runewordsFilteredByWeaponClassHammer = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Hammer'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassHammer.length).toEqual(20);

    // Weapon Class: Mace
    const runewordsFilteredByWeaponClassMace = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Mace'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassMace.length).toEqual(19);

    // Weapon Class: Missile
    const runewordsFilteredByWeaponClassMissile = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Missile'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassMissile.length).toEqual(16);

    // Weapon Class: Orb
    const runewordsFilteredByWeaponClassOrb = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Orb'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassOrb.length).toEqual(1);

    // Weapon Class: Polearm
    const runewordsFilteredByWeaponClassPolearm = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Polearm'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassPolearm.length).toEqual(22);

    // Weapon Class: Scepter
    const runewordsFilteredByWeaponClassScepter = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Scepter'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassScepter.length).toEqual(18);

    // Weapon Class: Spear
    const runewordsFilteredByWeaponClassSpear = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Spear'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassSpear.length).toEqual(14);

    // Weapon Class: Staff
    const runewordsFilteredByWeaponClassStaff = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Staff'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassStaff.length).toEqual(17);

    // Weapon Class: Sword
    const runewordsFilteredByWeaponClassSword = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Sword'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassSword.length).toEqual(26);

    // Weapon Class: Wand
    const runewordsFilteredByWeaponClassWand = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Wand'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassWand.length).toEqual(4);

    // Weapon Class: Axe and Sword
    const runewordsFilteredByWeaponClassAxeAndSword = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      ['Axe', 'Sword'],
      [],
      []
    );
    expect(runewordsFilteredByWeaponClassAxeAndSword.length).toEqual(29);

    // All Weapon Classes
    const runewordsFilteredByAllWeaponClasses = pipe.transform(
      runeWordDataService.getData(),
      ['Weapon'],
      [
        'Axe',
        'Claw',
        'Club',
        'Dagger',
        'Hammer',
        'Mace',
        'Missile',
        'Orb',
        'Polearm',
        'Scepter',
        'Spear',
        'Staff',
        'Sword',
        'Wand',
      ],
      [],
      []
    );
    expect(runewordsFilteredByAllWeaponClasses.length).toEqual(49);

    // Edge case: Filtering by Weapon Classes when the "Weapon" Item Type has not been selected should still succeed
    const runewordsFilteredByAllWeaponClassesWithoutWeaponItemType =
      pipe.transform(
        runeWordDataService.getData(),
        [],
        [
          'Axe',
          'Claw',
          'Club',
          'Dagger',
          'Hammer',
          'Mace',
          'Missile',
          'Orb',
          'Polearm',
          'Scepter',
          'Spear',
          'Staff',
          'Sword',
          'Wand',
        ],
        [],
        []
      );
    expect(
      runewordsFilteredByAllWeaponClassesWithoutWeaponItemType.length
    ).toEqual(49);
  });

  it('should transform input based on No. of Sockets', () => {
    const pipe = new RunewordFilterPipe();
    const runeWordDataService = new RunewordDataService();

    // No. of Sockets: 2
    const runewordsFilteredByNumberOfSockets2 = pipe.transform(
      runeWordDataService.getData(),
      [],
      [],
      ['2'],
      []
    );
    expect(runewordsFilteredByNumberOfSockets2.length).toEqual(13);

    // No. of Sockets: 3
    const runewordsFilteredByNumberOfSockets3 = pipe.transform(
      runeWordDataService.getData(),
      [],
      [],
      ['3'],
      []
    );
    expect(runewordsFilteredByNumberOfSockets3.length).toEqual(30);

    // No. of Sockets: 4
    const runewordsFilteredByNumberOfSockets4 = pipe.transform(
      runeWordDataService.getData(),
      [],
      [],
      ['4'],
      []
    );
    expect(runewordsFilteredByNumberOfSockets4.length).toEqual(28);

    // No. of Sockets: 5
    const runewordsFilteredByNumberOfSockets5 = pipe.transform(
      runeWordDataService.getData(),
      [],
      [],
      ['5'],
      []
    );
    expect(runewordsFilteredByNumberOfSockets5.length).toEqual(9);

    // No. of Sockets: 6
    const runewordsFilteredByNumberOfSockets6 = pipe.transform(
      runeWordDataService.getData(),
      [],
      [],
      ['6'],
      []
    );
    expect(runewordsFilteredByNumberOfSockets6.length).toEqual(3);

    // No. of Sockets: 2 and 3
    const runewordsFilteredByNumberOfSockets2And3 = pipe.transform(
      runeWordDataService.getData(),
      [],
      [],
      ['2', '3'],
      []
    );
    expect(runewordsFilteredByNumberOfSockets2And3.length).toEqual(43);
  });

  it('should transform input based on Runes', () => {
    const pipe = new RunewordFilterPipe();
    const runeWordDataService = new RunewordDataService();

    // Runes: Zod
    const runewordsFilteredByRunesZod = pipe.transform(
      runeWordDataService.getData(),
      [],
      [],
      [],
      ['Zod']
    );
    expect(runewordsFilteredByRunesZod.length).toEqual(1);

    // Runes: Ral, Tir, Tal, Sol, Ort
    const runewordsFilteredByMultipleRunes = pipe.transform(
      runeWordDataService.getData(),
      [],
      [],
      [],
      ['Ral', 'Tir', 'Tal', 'Sol', 'Ort']
    );
    expect(runewordsFilteredByMultipleRunes.length).toEqual(39);
  });

  it('should return all items when no transformation is performed', () => {
    const pipe = new RunewordFilterPipe();
    const runeWordDataService = new RunewordDataService();

    const runewords = pipe.transform(
      runeWordDataService.getData(),
      [],
      [],
      [],
      []
    );
    expect(runewords.length).toEqual(83);
  });
});
