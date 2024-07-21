"use client";

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import axios from 'axios';

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const response = await axios.post('https://www.applee.xyz/api/auth/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer RH1tAdsr8U5oF6NiatAwQgHeAdkckK0jahUBdcfKe5368de0'
                    }
                }
            );

            setSuccess('Login successful!');
            console.log(response.data);  // You can also use the response data as needed
        } catch (error: any) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setError(`Error: ${error.response.status} - ${error.response.data.message}`);
            } else if (error.request) {
                // The request was made but no response was received
                setError('Error: No response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                setError(`Error: ${error.message}`);
            }
        }
        setLoading(false);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        fetchData();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" disabled={loading}>
                    {!loading ? 'Submit' : 'Loading...'}
                </Button>
            </form>
            {error && <div>Error: {error}</div>}
            {success && <div>{success}</div>}
        </div>
    );
}
