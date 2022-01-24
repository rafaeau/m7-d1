import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class Homepage extends Component {
    state = {
        jobs: [],
        search: ""
    }
    render() {
        return (
            <>
                <FormControl
                    placeholder="Search jobs"
                    value={this.state.value}
                    onChange={(e) => this.setState({search: e.currentTarget.value.toLowerCase()})}
                    />

                <ul>
                    {this.state.jobs.data && this.state.jobs.data.filter(job => job.title.toLowerCase().indexOf(this.state.search) !== -1).map(job =>
                        <li key={job._id}>{job.title} at {job.company_name}</li>)}
                </ul>
            </>
        )

    }
    componentDidMount = async () => {
        const resp = await fetch('https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=30')
        if (resp.ok) {
            const jobs = await resp.json()
            this.setState({
                jobs: jobs
            })
        }
    }
}
