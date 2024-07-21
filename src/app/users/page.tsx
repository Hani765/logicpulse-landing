"use client";

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

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
            const response = await fetch('https://www.applee.xyz/api/auth/checkCredentials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer RH1tAdsr8U5oF6NiatAwQgHeAdkckK0jahUBdcfKe5368de0'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Assuming the response is a JSON object containing a message or token
            const data = await response.json();
            setSuccess('Login successful!');
            console.log(data);  // You can also use the response data as needed
        } catch (error: any) {
            setError(error.message);
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
