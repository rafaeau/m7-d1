import React, { Component } from 'react';

export default class Homepage extends Component {
    state = {
        jobs: [],
    }
    render() {
        return (
            <>
                <ul>
                    {this.state.jobs.data && this.state.jobs.data.map(job =>
                        <li key={job._id}>{job.title} at {job.company_name}</li>)}
                </ul>
            </>
        )

    }
    componentDidMount = async () => {
        const resp = await fetch('https://strive-jobs-api.herokuapp.com/jobs?limit=20&skip=20')
        if (resp.ok) {
            const jobs = await resp.json()
            this.setState({
                jobs: jobs
            })
        }
    }
}
