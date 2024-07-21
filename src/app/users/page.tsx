"use client";

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
interface UserData {
    // Define the structure of your user data here
    // For example:
    id: string;
    name: string;
    email: string;
    // Add other fields as needed
}
export default function Page() {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://www.applee.xyz/api/users', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer RH1tAdsr8U5oF6NiatAwQgHeAdkckK0jahUBdcfKe5368de0'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data: UserData = await response.json();
            setUserData(data);
        } catch (error: any) {
            setError(error.message);
        }
        setLoading(false);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            {JSON.stringify(userData)}
            <Button onClick={fetchData} disabled={loading}>{!loading ? 'Fetch Data' : 'loading'}</Button>
        </div>
    );
}
