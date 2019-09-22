export enum IAssemblyStatus {
  inProcess = 'IN_REVIEW',
  finished = 'REVIEW_FINISHED',
}

export enum IReviewStatus {
  draft = 'DRAFT',
  solved = 'SOLVED',
  simulationRequested = 'SIMULATION_REQUESTED',
  simulationPositive = 'SIMULATION_POSITIVE',
  simulationNegative = 'SIMULATION_NEGATIVE',
}

export interface IAssembly {
  _id: string;
  img: string;
  age: number;
  assemblyStatus: IAssemblyStatus;
  reviewStatus: IReviewStatus;
  title: string;
  updated: string;
}
