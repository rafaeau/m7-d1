import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const fetchCompany = async (companyName) => {
    let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${companyName}`);
    let company = await response.json();
    return company;
  };

export default function CompanyDetail() {
    let { company } = useParams();

    const [companyJobs, setCompanyJobs] = useState([]);

    useEffect(() => {
        fetchCompany(company).then((res) => setCompanyJobs(res));
    }, []);

    return (
        <ul>
            {companyJobs.data && companyJobs?.data.map(job =>
                <li key={job._id}>{job.title} at {job.company_name}</li>)}
        </ul>
    );

}