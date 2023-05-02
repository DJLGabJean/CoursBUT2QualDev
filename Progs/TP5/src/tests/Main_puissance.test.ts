import { puissanceMult } from "../metier/Main";

test("Cas général", () => {
    expect(puissanceMult(2, 2)).toBe(4)
    }
);

test("Puissance d'un nombre par 0", () => {
    expect(puissanceMult(5, 0)).toBe(1)
    }
);

test("Puissance de 0", () => {
    expect(puissanceMult(0, 2)).toBe(0)
    }
);

test("Puissance d'un nombre négatif", () => {
    expect(puissanceMult(-5, 3)).toBe(-125)
    }
);

test("Puissance d'un nombre par un nombre négatif", () => {
    expect(puissanceMult(3, -2)).toThrow(Error)
    }
);

test("Puissance d'un nombre négatif par un nombre négatif", () => {
    expect(puissanceMult(-4, -2)).toThrow(Error)
    }
);

test("Puissance de 0 par 0", () => {
    expect(puissanceMult(0, 0)).toThrow(Error)
    }
);




