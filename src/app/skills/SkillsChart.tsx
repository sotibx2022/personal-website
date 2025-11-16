"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
const SkillsChart = () => {
    const { data: skills, isPending } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const response = await axios.get('/api/profile');
            return response.data;
        }
    })
    console.log(skills);
    return (
        <div>SkillsChart</div>
    )
}
export default SkillsChart