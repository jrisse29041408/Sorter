import { Sorter } from './sorter';

export class CharsCollection extends Sorter {

  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split('');

    const leftHand = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = leftHand;

    this.data = chars.join('');
  }
}

export default CharsCollection;