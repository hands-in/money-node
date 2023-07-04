export default interface Comparator<T> {
  compare(otherData: T): number;
  eq(otherData: T): boolean;
  lte(otherData: T): boolean;
  gte(otherData: T): boolean;
  lt(otherData: T): boolean;
  gt(otherData: T): boolean;
}
