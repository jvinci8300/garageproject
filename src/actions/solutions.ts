import { createAction, createStandardAction } from 'typesafe-actions'

export const add = createAction('SOLUTIONS_ADD', resolve => {
  return (solution: ISolution) => resolve(solution)
})

export const edit = createAction('SOLUTIONS_EDIT', resolve => {
  return (id: string, solution: Partial<IEditableSolutionProperties>) =>
    resolve({ id, solution })
})

export const remove = createAction('SOLUTIONS_REMOVE', resolve => {
  return (id: string) => resolve(id)
})

export const create = createAction('SOLUTIONS_CREATE')