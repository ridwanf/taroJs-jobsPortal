import { jobs } from '../constants/data';
import { GET_JOBS, SET_JOB, SET_LOADING, UPDATE_JOB_STATUS } from '../constants/job'
import { Job } from '/types/types'

interface JobState {
  isLoading: boolean;
  jobs: Job[];
  job: Job | null;
}

const jobInitialState: JobState = {
  jobs: jobs,
  job: null,
  isLoading: false
}

interface JobAction {
  type: string;
  payload?: any;
}

export default function jobReducer(state = jobInitialState, action: JobAction): JobState {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload
      }
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case UPDATE_JOB_STATUS:
      if (!action.payload) return state;

      return {
        ...state,
        jobs: state.jobs.map(job =>
          job.id === action.payload
            ? { ...job, isApplied: true }
            : job
        ),
        job: state.job && state.job.id === action.payload
          ? { ...state.job, isApplied: true }
          : state.job
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}
