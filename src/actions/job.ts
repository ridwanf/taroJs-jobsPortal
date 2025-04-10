import { jobs } from "../constants/data"
import { GET_JOBS, SET_JOB, SET_LOADING, UPDATE_JOB_STATUS } from "../constants/job"
import { Job } from "/types/types"

export const getJobs = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_JOBS,
      payload: jobs
    })
  }
}

export const setJob = (job: Job) => {
  return {
    type: SET_JOB,
    payload: job
  }
}

export const applyJob = (jobId: number) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_JOB,
      payload: {
        ...jobs.find((job) => job.id === jobId),
        isApplied: true
      }
    })
  }
}

export const updateJobStatus = (jobId: number) => {
  return {
    type: UPDATE_JOB_STATUS,
    payload: jobId
  }
}

export const setLoading = (loading: boolean) => {
  return {
    type: SET_LOADING,
    payload: loading
  }
}
