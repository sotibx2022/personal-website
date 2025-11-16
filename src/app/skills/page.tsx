import React from 'react'
import { getQueryClient } from '../funcations/getQueryClient'
import axios from 'axios';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import SkillsChart from './SkillsChart';
const page = () => {
    const queryClient = getQueryClient();
    queryClient?.prefetchQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const response = await axios.get('/api/profile');
            return response.data;
        }
    })
    const state = dehydrate(queryClient!)
    return (
        <div>
            <HydrationBoundary state={state}>
<SkillsChart/>
            </HydrationBoundary>
        </div>
    )
}
export default page