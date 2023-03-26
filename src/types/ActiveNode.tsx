export enum OperationType {
  ADD = 'add',
  REMOVE = 'remove',
}

export type ActiveNode = {
  value: number;
  operationType: OperationType;
};
