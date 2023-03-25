type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Ts = `${Numbers}T`;
export type Interval = Ts | `${Ts}H`;

export function distance(interval: Interval): number {
    let num = Number(interval.charAt(0)) * 2
    
    if (interval.endsWith('H')) {
        num++;
    }

    return num;
}