import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
    state = {
        jobs: [],
        search: "",
    }
    render() {
        return (
            <>
                <h3 className='my-3'>Tech jobs search</h3>
                <FormControl
                    className='my-3'
                    placeholder="Search jobs"
                    value={this.state.value}
                    onChange={(e) => this.setState({ search: e.currentTarget.value.toLowerCase() })}
                />


                {this.state.jobs.data && this.state.jobs.data.filter(job => job.title.toLowerCase().indexOf(this.state.search) !== -1).map(job =>
                    <>
                        <h5>{job.title}</h5>
                        <h5 className="mb-2">at <Link to={'/' + job.company_name}>{job.company_name}</Link></h5>
                        <hr />
                    </>
                )}
            </>
        )

    }
    componentDidMount = async () => {
        const resp = await fetch('https://strive-jobs-api.herokuapp.com/jobs?limit=500')
        if (resp.ok) {
            const jobs = await resp.json()
            this.setState({
                jobs: jobs
            })
        }
    }
}
