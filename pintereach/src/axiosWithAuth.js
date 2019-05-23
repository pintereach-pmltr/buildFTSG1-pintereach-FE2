import axios from 'axios';

export const axiosWithAuth = () => {
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZXMiOlsiU3R1ZGVudCJdLCJpYXQiOjE1NTgzODk5MzUsImV4cCI6MTU1ODQ3NjMzNX0.cnyeGftRDrRBnbIFJcsOIsYN8SioAt8u4G-aFKOAHRY";
    console.log(localStorage.getItem('token'))
    return axios.create({
        headers: {
            "content-type": "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
}