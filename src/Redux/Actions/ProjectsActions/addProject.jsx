import { ADD_PROJECT } from '../../ActionTypes/types';

const addProject = (project) => ({
  type: ADD_PROJECT, payload: project,
}
);

export default addProject;
