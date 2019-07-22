type Cards = string[] | number[];

declare const texas: {
  deck(format: (card: string | number) => string): string[];
  evaluate(cards: Cards): { name: string; value: number };
  sort(cards: Cards): Cards;
  odds(
    hands: Cards[],
    table?: Cards,
    dead?: Cards
  ): { win: number; split: number }[];
  extended(card: string | number): string;
  abbr(card: string | number): string;
  unicode(card: string | number): string;
  code(card: string | number): number;
};

export = texas;
